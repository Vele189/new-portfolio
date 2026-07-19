import type { ReactNode } from "react";
import { CometCard } from "./ui/comet-card";

export function SkillCard({
  logos,
  tags,
  title,
  description,
}: {
  logos?: ReactNode;
  tags?: string[];
  title: string;
  description: string;
}) {
  return (
    <CometCard className="h-full">
      <div className="bg-[#1e1e1e] rounded-[32px] flex flex-col gap-8 px-8 md:px-10 py-10 md:py-[50px] h-full overflow-hidden">
        {logos && <div className="flex flex-wrap gap-[30px] items-center">{logos}</div>}

        {tags && (
          <div className="flex flex-wrap gap-[10px]">
            {tags.map((tag) => (
              <span
                key={tag}
                className="bg-[#141414] rounded-full flex items-center justify-center px-6 py-3 font-['DM_Sans:Light',sans-serif] font-light text-[clamp(0.95rem,1.3vw,1.25rem)] text-white whitespace-nowrap"
                style={{ fontVariationSettings: '"opsz" 14' }}
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="flex flex-col gap-[10px]">
          <p
            className="font-['DM_Sans:Medium',sans-serif] font-medium text-[clamp(1.25rem,2vw,1.75rem)] text-white"
            style={{ fontVariationSettings: '"opsz" 14' }}
          >
            {title}
          </p>
          <p
            className="font-['DM_Sans:Light',sans-serif] font-light text-[#aaa] text-[clamp(1rem,1.4vw,1.25rem)]"
            style={{ fontVariationSettings: '"opsz" 14' }}
          >
            {description}
          </p>
        </div>
      </div>
    </CometCard>
  );
}
