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
          className="animate-fade-up object-cover"
        />
      </div>

      <div className="mt-4 flex items-start justify-between gap-4">
        <figcaption className="min-h-[1.5rem] text-sm text-ink-soft">
          {current.caption ?? current.alt}
          <span className="ml-2 text-ink-muted">
            {index + 1} / {images.length}
          </span>
        </figcaption>
      </div>

      {images.length > 1 && (
        <ul className="mt-2 grid grid-cols-3 gap-3 sm:gap-4">
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
                  className="object-cover"
                />
              </button>
            </li>
          ))}
        </ul>
      )}
    </figure>
  );
}
