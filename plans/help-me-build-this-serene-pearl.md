# Plan: Bring Figma Portfolio Design to Life

## Context

The user has imported a Figma design for "Ashwin" — a Creative Developer & Designer portfolio. The design lives at `/src/imports/Home/index.tsx` (2,554 lines of pixel-perfect 1920px-fixed layout with absolute positioning). The goal is to rebuild this as a **responsive, scrollable, fully functional portfolio** using proper document flow and fluid typography, while reusing all imported SVG icons and images from the Figma files.

## Page Sections (from Figma, in scroll order)

1. **Hero** — Dark bg, hero photo, nav bar, huge "Creative Developer & Designer" text
2. **About** — White bg, bio text, "More about me →"
3. **Contact CTA** — White bg, "Got a project in mind? / Let's talk", email + phone + blue circle
4. **Skills** — Black header + white card grid (3 columns, 13 skill cards), dark contact CTA
5. **Projects** — White bg, project showcase grid (2 cols), white contact CTA
6. **Footer** — Black bg, "your friendly chaos creator" + large "Ashhhhhhhh"
7. **NavDock** — Fixed bottom floating pill dock with 7 icon buttons

## Files to Create / Modify

### Modify
- `src/styles/fonts.css` — Add Google Fonts import for Inter, DM Sans, IBM Plex Mono
- `src/app/App.tsx` — Compose all sections; render NavDock as fixed overlay

### Create
- `src/app/components/icons.tsx` — Re-export all logo SVG sub-components from Figma imports (avoids re-writing SVG paths)
- `src/app/components/HeroSection.tsx`
- `src/app/components/AboutSection.tsx`
- `src/app/components/ContactCTA.tsx` — Reusable, accepts `variant: "light" | "dark"`
- `src/app/components/SkillCard.tsx` — Accepts `logos: ReactNode`, `title`, `description`
- `src/app/components/SkillsSection.tsx` — 3-col skill card grid
- `src/app/components/ProjectsSection.tsx`
- `src/app/components/Footer.tsx`
- `src/app/components/NavDock.tsx`

## Key Implementation Details

### Fonts (`fonts.css`)
```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&family=IBM+Plex+Mono:wght@400&display=swap');
```
Use inline `fontFamily` styles or Tailwind's arbitrary font syntax. Preserve `fontVariationSettings: '"opsz" 14'` on DM Sans elements.

### Responsive Typography (Figma → fluid)
| Figma value | Fluid replacement |
|---|---|
| `text-[300px]` hero | `text-[clamp(3rem,15vw,16rem)]` |
| `text-[140px]` skills heading | `text-[clamp(2.5rem,9vw,8.75rem)]` |
| `text-[77px]` CTA heading | `text-[clamp(2rem,5vw,4.8rem)]` |
| `text-[80px]` projects heading | `text-[clamp(1.75rem,5vw,5rem)]` |
| `text-[300px]` footer name | `text-[clamp(3rem,18vw,18rem)]` |
| `px-[133px]` padding | `px-6 md:px-12 lg:px-[133px]` |

### SVG Assets
- Import `svgPaths` from `../../imports/Home/svg-eoj8yryyml` in `icons.tsx`
- Import `{ imgGroup }` from `../../imports/Home/svg-96sp3` for Lottiefiles mask
- Images: use `figma:asset/<hash>.png` import scheme (NOT file path strings)
  - Hero bg: `figma:asset/80c4a33f369c873cfb25e59846e0cacee22530fd.png`
  - Continuum screenshot: `figma:asset/3393feeedcab0173f93e608738dbd98509eadb39.png`
  - Others: image5, image6, image7, image8, OpenSea avatar

### Layout Strategy
- Replace all absolute-positioned sections with normal document flow `<section>` elements
- NavDock: `fixed bottom-6 left-1/2 -translate-x-1/2 z-50`
- Skill grid: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5`
- Project grid: `grid grid-cols-1 md:grid-cols-2 gap-10`
- "Get in touch" circle: `absolute right-8 md:right-16` within `relative` CTA container
- Hero text intentionally overflows — keep `overflow-hidden` on hero container

### Skill Cards (13 total)
Each `SkillCard` renders circular logo badges (`bg-[#141414] rounded-full`) + title + description. The "Core CS" and "Personal Development" cards use text pill tags (`flex flex-wrap gap-2`) instead of logo icons.

## Verification
After implementation:
1. Check all 7 page sections render in scroll order
2. Verify fonts load (Inter for headings, DM Sans for cards, IBM Plex Mono for tagline)
3. Confirm all SVG tech logos appear correctly in skill cards
4. Check NavDock is visible and fixed at bottom
5. Verify responsive layout at mobile (375px) and desktop (1440px) widths
6. Confirm hero image loads and covers the section
7. Confirm project screenshots load
