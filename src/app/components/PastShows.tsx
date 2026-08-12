"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const pastShows = [
  {
    date: "16 Jul 2026",
    venue: "Saint Monday Brewery",
    location: "London, E8",
    note: "With Bandits",
    poster: "/saint monday.jpg",
    posterAlt: "Poster for Ellis Slater & The Night Shift at Saint Monday Brewery with Bandits",
    width: 1080,
    height: 1440,
  },
  {
    date: "27 Apr 2026",
    venue: "The Exchange",
    location: "Bristol",
    note: "First show",
    poster: "/Bristol.jpg",
    posterAlt: "Poster for Ellis Slater & The Night Shift at The Exchange in Bristol",
    width: 1024,
    height: 1355,
  },
];

export default function PastShows() {
  const [activePoster, setActivePoster] = useState<(typeof pastShows)[number]>();

  useEffect(() => {
    if (!activePoster) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActivePoster(undefined);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [activePoster]);

  return (
    <section
      aria-labelledby="past-shows-heading"
      className="scroll-reveal mt-12 grid gap-6 lg:grid-cols-[0.42fr_1fr]"
    >
      <div>
        <h2
          id="past-shows-heading"
          className="font-display text-2xl font-black uppercase leading-none text-muted sm:text-4xl"
        >
          Past Shows
        </h2>
      </div>

      <details className="group">
        <summary className="flex cursor-pointer list-none items-center justify-between border-y border-white/8 py-4 font-display text-sm font-black uppercase text-muted transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">
          <span>View previous dates</span>
          <span className="text-accent group-open:hidden" aria-hidden>
            +
          </span>
          <span className="hidden text-accent group-open:inline" aria-hidden>
            -
          </span>
        </summary>

        <div className="divide-y divide-white/8 border-b border-white/8">
          {pastShows.map((show) => (
            <article
              key={`${show.date}-${show.venue}`}
              className="grid gap-4 py-4 sm:grid-cols-[8rem_1fr_5rem] sm:items-center lg:grid-cols-[8rem_1fr_6rem]"
            >
              <time className="font-display text-sm font-black uppercase text-muted">
                {show.date}
              </time>
              <div>
                <h3 className="font-display text-lg font-black uppercase leading-tight text-white/85">
                  {show.location}
                </h3>
                <p className="mt-1 font-display text-xs font-black uppercase text-muted">
                  {show.venue}
                </p>
                <p className="mt-1 text-xs font-bold uppercase italic text-muted">
                  {show.note}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setActivePoster(show)}
                className="w-24 cursor-pointer text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent sm:w-full sm:justify-self-end"
                aria-label={`Open larger poster for ${show.venue}`}
              >
                <Image
                  src={show.poster}
                  alt={show.posterAlt}
                  width={show.width}
                  height={show.height}
                  sizes="(max-width: 640px) 6rem, 6rem"
                  className="h-auto w-full opacity-75 transition-opacity hover:opacity-100"
                />
              </button>
            </article>
          ))}
        </div>
      </details>

      {activePoster ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-5"
          role="dialog"
          aria-modal="true"
          aria-label={`Poster for ${activePoster.venue}`}
          onClick={() => setActivePoster(undefined)}
        >
          <div className="relative max-h-full max-w-4xl">
            <button
              type="button"
              onClick={() => setActivePoster(undefined)}
              className="absolute right-0 top-0 z-10 bg-black px-4 py-3 font-display text-sm font-black uppercase text-white transition-colors hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              Close
            </button>
            <Image
              src={activePoster.poster}
              alt={activePoster.posterAlt}
              width={activePoster.width}
              height={activePoster.height}
              sizes="(max-width: 768px) 90vw, 42rem"
              className="max-h-[90svh] w-auto max-w-full"
              onClick={(event) => event.stopPropagation()}
            />
          </div>
        </div>
      ) : null}
    </section>
  );
}
