"use client";

import Image from "next/image";
import { useRef, useState } from "react";

type SingleAudioCardProps = {
  title: string;
  label: string;
  date: string;
  artwork: string;
  audio: string;
  links?: {
    label: string;
    href: string;
  }[];
  className?: string;
  artworkClassName?: string;
  compact?: boolean;
};

export default function SingleAudioCard({
  title,
  label,
  date,
  artwork,
  audio,
  links = [],
  className = "",
  artworkClassName = "h-16 w-16",
  compact = false,
}: SingleAudioCardProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayback = async () => {
    const audioElement = audioRef.current;

    if (!audioElement) {
      return;
    }

    if (audioElement.paused) {
      try {
        await audioElement.play();
        setIsPlaying(true);
      } catch {
        setIsPlaying(false);
      }
      return;
    }

    audioElement.pause();
    setIsPlaying(false);
  };

  return (
    <div className={className}>
      <button
        type="button"
        onClick={togglePlayback}
        className="group flex w-full items-center gap-3 text-left text-white transition-colors hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
        aria-label={isPlaying ? `Pause ${title}` : `Play ${title}`}
      >
        <Image
          src={artwork}
          alt={`Artwork for ${title}`}
          width={3000}
          height={3000}
          sizes={compact ? "4rem" : "(max-width: 640px) 5rem, 7rem"}
          className={`${artworkClassName} shrink-0 object-cover shadow-2xl`}
        />
        <span className="min-w-0 grow">
          <span className="block font-display text-xs font-black uppercase text-white">
            {label}
          </span>
          <span
            className={`block font-album font-bold uppercase leading-tight tracking-[0.08em] text-accent ${
              compact ? "mt-1 text-xs" : "mt-2 text-sm sm:text-base"
            }`}
          >
            {title}
          </span>
          <span className="mt-1 block font-display text-xs font-black uppercase text-muted">
            {date}
          </span>
        </span>
        <span className="ml-auto flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-black transition-colors group-hover:bg-accent">
          {isPlaying ? (
            <span className="flex gap-1">
              <span className="h-4 w-1.5 bg-current" />
              <span className="h-4 w-1.5 bg-current" />
            </span>
          ) : (
            <span className="ml-1 h-0 w-0 border-y-[0.45rem] border-l-[0.7rem] border-y-transparent border-l-current" />
          )}
        </span>
      </button>
      {links.length > 0 ? (
        <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
          {links.map((link) => (
            <a
              key={`${title}-${link.label}`}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="font-display text-sm font-black uppercase text-white transition-colors hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              {link.label}
            </a>
          ))}
        </div>
      ) : null}
      <audio
        ref={audioRef}
        src={audio}
        preload="metadata"
        onEnded={() => setIsPlaying(false)}
        onPause={() => setIsPlaying(false)}
        onPlay={() => setIsPlaying(true)}
      />
    </div>
  );
}
