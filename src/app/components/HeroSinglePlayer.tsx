"use client";

import Image from "next/image";
import { useRef, useState } from "react";

export default function HeroSinglePlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayback = async () => {
    const audio = audioRef.current;

    if (!audio) {
      return;
    }

    if (audio.paused) {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch {
        setIsPlaying(false);
      }
      return;
    }

    audio.pause();
    setIsPlaying(false);
  };

  return (
    <button
      type="button"
      onClick={togglePlayback}
      className="hero-enter hero-enter-cta group mt-7 flex max-w-xs items-center gap-3 text-left text-white transition-colors hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
      aria-label={
        isPlaying
          ? "Pause Graveyard Of High Flyers"
          : "Play Graveyard Of High Flyers"
      }
    >
      <Image
        src="/DIGITAL_Single Cover_Graveyards.png"
        alt="Artwork for Graveyard Of High Flyers"
        width={3000}
        height={3000}
        sizes="4rem"
        className="h-16 w-16 shrink-0 object-cover shadow-2xl"
      />
      <span className="grid gap-1">
        <span className="font-display text-xs font-black uppercase text-white">
          Latest single
        </span>
        <span className="font-album text-xs font-bold uppercase leading-tight tracking-[0.08em] text-accent">
          Graveyard Of High Flyers
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
      <audio
        ref={audioRef}
        src="/graveyard-of-high-flyers.mp3"
        preload="metadata"
        onEnded={() => setIsPlaying(false)}
        onPause={() => setIsPlaying(false)}
        onPlay={() => setIsPlaying(true)}
      />
    </button>
  );
}
