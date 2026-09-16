"use client";

import Image from "next/image";
import { useId, useState } from "react";
import type { ProjectImage } from "@/data/portfolio";
import { Arrow } from "./icons";

export function ProjectCarousel({
  images,
  title,
}: {
  images: ProjectImage[];
  title: string;
}) {
  const [index, setIndex] = useState(0);
  const id = useId();
  if (!images.length)
    return <div className="empty-media">Project images coming soon</div>;
  const current = images[index];
  const move = (direction: number) =>
    setIndex((value) => (value + direction + images.length) % images.length);
  return (
    <section
      className="carousel"
      aria-label={`${title} images`}
      aria-roledescription="carousel"
    >
      <div className="carousel-picture" id={id}>
        <Image
          src={current.src}
          alt={current.alt}
          width={1000}
          height={700}
          sizes="(max-width: 760px) 100vw, 50vw"
        />
        <span className="image-label">ILLUSTRATIVE PREVIEW</span>
      </div>
      <div className="carousel-toolbar">
        <p aria-live="polite" aria-atomic="true">
          {current.caption}
          <span className="sr-only">
            , image {index + 1} of {images.length}
          </span>
        </p>
        <div className="carousel-controls">
          <button
            aria-label={`Previous image for ${title}`}
            aria-controls={id}
            onClick={() => move(-1)}
            disabled={images.length < 2}
          >
            <Arrow className="arrow-back" />
          </button>
          <span aria-hidden="true">
            {String(index + 1).padStart(2, "0")}{" "}
            <span className="muted">
              / {String(images.length).padStart(2, "0")}
            </span>
          </span>
          <button
            aria-label={`Next image for ${title}`}
            aria-controls={id}
            onClick={() => move(1)}
            disabled={images.length < 2}
          >
            <Arrow />
          </button>
        </div>
      </div>
    </section>
  );
}
