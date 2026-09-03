import Image from "next/image";

export default function HeroSinglePlayer() {
  return (
    <div className="hero-enter hero-enter-cta mt-7 max-w-xs text-white">
      <div className="flex items-center gap-3 text-left">
        <Image
          src="/skulls-and-skeletons-cover.png"
          alt="Artwork for Skulls & Skeletons"
          width={3000}
          height={3000}
          sizes="4rem"
          className="h-16 w-16 shrink-0 object-cover shadow-2xl"
        />
        <span className="grid gap-1">
          <span className="font-display text-xs font-black uppercase text-white">
            New single
          </span>
          <span className="font-album text-xs font-bold uppercase leading-tight tracking-[0.08em] text-accent">
            Skulls &amp; Skeletons
          </span>
          <span className="font-display text-xs font-black uppercase text-muted">
            Out 4 Sep 2026
          </span>
        </span>
      </div>
      <audio
        className="site-audio mt-4 w-full"
        controls
        preload="metadata"
        src="/skulls-and-skeletons.mp3"
      >
        <a href="/skulls-and-skeletons.mp3">Listen to Skulls &amp; Skeletons</a>
      </audio>
      <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2">
        <a
          href="#music"
          className="font-display text-sm font-black uppercase text-white transition-colors hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        >
          More music
        </a>
        <a
          href="https://youtu.be/UuWZ-kESyGI"
          target="_blank"
          rel="noreferrer"
          className="font-display text-sm font-black uppercase text-white transition-colors hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        >
          Watch video
        </a>
      </div>
    </div>
  );
}
