import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

/** Vertical timeline wrapper. Each child item gets a marker on the rail. */
export function Timeline({ items }: { items: { key: string; node: ReactNode }[] }) {
  return (
    <ol className="relative space-y-8 pl-7 sm:pl-10">
      <span
        aria-hidden="true"
        className="absolute bottom-2 left-[7px] top-2 w-px bg-gradient-to-b from-accent/50 via-line to-transparent sm:left-[9px]"
      />
      {items.map((item, i) => (
        <li key={item.key} className="relative">
          <span
            aria-hidden="true"
            className="absolute -left-7 top-7 flex h-[15px] w-[15px] items-center justify-center rounded-full border-2 border-accent bg-canvas sm:-left-10 sm:h-[19px] sm:w-[19px]"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          </span>
          <Reveal delay={i * 60}>{item.node}</Reveal>
        </li>
      ))}
    </ol>
  );
}
