import type { SocialLink } from "@/types";
import { cn, isExternal } from "@/lib/utils";
import { SocialIcon } from "./icons";

export function SocialLinks({
  links,
  className,
}: {
  links: SocialLink[];
  className?: string;
}) {
  return (
    <ul className={cn("flex items-center gap-2", className)}>
      {links.map((link) => (
        <li key={link.label}>
          <a
            href={link.href}
            aria-label={link.label}
            title={link.label}
            {...(isExternal(link.href) && link.href.startsWith("http")
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface text-ink-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:bg-accent hover:text-white hover:shadow-card"
          >
            <SocialIcon name={link.icon} className="h-[18px] w-[18px]" />
          </a>
        </li>
      ))}
    </ul>
  );
}
