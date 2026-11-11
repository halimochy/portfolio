"use client";

import Image from "next/image";
import { useState } from "react";
import type { ProjectImage } from "@/types";
import { cn } from "@/lib/utils";

/** In-page screenshot viewer: large preview plus selectable thumbnails (no modal). */
export function ProjectGallery({ images }: { images: ProjectImage[] }) {
  const [index, setIndex] = useState(0);
  if (images.length === 0) return null;
  const current = images[index];

  return (
    <figure aria-label="Project screenshots">
      <div className="card relative aspect-[16/10] overflow-hidden">
        <Image
          key={current.src}
          src={current.src}
          alt={current.alt}
          fill
          priority={index === 0}
          sizes="(min-width: 1080px) 1016px, 100vw"
          className={cn(
            "animate-fade-up",
            current.fit === "contain" ? "object-contain p-2 sm:p-4" : "object-cover",
          )}
        />
      </div>

      <div className="mt-4 flex items-start justify-between gap-4">
        <figcaption className="min-h-[1.5rem] text-sm text-ink-soft">
          {current.caption ?? current.alt}
          <span className="ml-2 text-ink-muted">
            {index + 1} / {images.length}
          </span>
        </figcaption>
        <a
          href={current.src}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 text-sm font-medium text-accent hover:underline"
        >
          Open full size
        </a>
      </div>

      {images.length > 1 && (
        <ul
          className={cn(
            "mt-2 grid gap-3 sm:gap-4",
            images.length === 2 ? "grid-cols-2" : images.length === 4 ? "grid-cols-4" : "grid-cols-3",
          )}
        >
          {images.map((image, i) => (
            <li key={image.src}>
              <button
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Show screenshot ${i + 1}: ${image.caption ?? image.alt}`}
                aria-pressed={i === index}
                className={cn(
                  "relative block aspect-[16/10] w-full overflow-hidden rounded-xl border-2 transition-all duration-300",
                  i === index
                    ? "border-accent shadow-card"
                    : "border-transparent opacity-60 hover:opacity-100",
                )}
              >
                <Image
                  src={image.src}
                  alt=""
                  fill
                  sizes="(min-width: 1080px) 330px, 33vw"
                  className={image.fit === "contain" ? "object-contain bg-surface p-1" : "object-cover"}
                />
              </button>
            </li>
          ))}
        </ul>
      )}
    </figure>
  );
}
