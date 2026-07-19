import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconCode,
  IconFileText,
  IconHome,
  IconMail,
  IconWorld,
} from "@tabler/icons-react";
import { FloatingDock } from "./ui/floating-dock";

const iconClass = "h-full w-full text-neutral-300";

const items = [
  {
    title: "Home",
    href: "#top",
    icon: <IconHome className={iconClass} />,
  },
  {
    title: "Projects",
    href: "#projects",
    icon: <IconWorld className={iconClass} />,
  },
  {
    title: "Skills",
    href: "#skills",
    icon: <IconCode className={iconClass} />,
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/vele-ndamulelo-3a3085372",
    icon: <IconBrandLinkedin className={iconClass} />,
  },
  {
    title: "Resume",
    href: "/Vele_Ndamulelo.pdf",
    download: "Vele_Ndamulelo.pdf",
    icon: <IconFileText className={iconClass} />,
  },
  {
    title: "GitHub",
    href: "https://github.com/Vele189",
    icon: <IconBrandGithub className={iconClass} />,
  },
  {
    title: "Contact",
    href: "mailto:velendamulelo057@gmail.com",
    icon: <IconMail className={iconClass} />,
  },
];

export function NavDock() {
  return (
    <div className="dark fixed bottom-6 left-1/2 z-50 -translate-x-1/2">
      <FloatingDock items={items} desktopClassName="bg-neutral-900" />
    </div>
  );
}
