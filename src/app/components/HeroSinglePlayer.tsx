import Image from "next/image";

export default function HeroSinglePlayer() {
  return (
    <div className="hero-enter hero-enter-cta mt-7 max-w-xs">
      <a
        href="https://thoughtswordsaction.com/2026/09/03/premiere-ellis-slater-the-night-shift/"
        target="_blank"
        rel="noreferrer"
        className="group flex items-center gap-3 text-left text-white transition-colors hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
      >
        <Image
          src="/DIGITAL_Single Cover_Graveyards.png"
          alt="Ellis Slater & The Night Shift single artwork"
          width={3000}
          height={3000}
          sizes="4rem"
          className="h-16 w-16 shrink-0 object-cover shadow-2xl"
        />
        <span className="grid gap-1">
          <span className="font-display text-xs font-black uppercase text-white">
            Premiere live now
          </span>
          <span className="font-album text-xs font-bold uppercase leading-tight tracking-[0.08em] text-accent">
            Skulls &amp; Skeletons
          </span>
          <span className="font-display text-xs font-black uppercase text-muted">
            Thoughts Words Action
          </span>
        </span>
      </a>
      <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2">
        <a
          href="https://youtu.be/UuWZ-kESyGI"
          target="_blank"
          rel="noreferrer"
          className="font-display text-sm font-black uppercase text-white transition-colors hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        >
          Watch video
        </a>
        <p className="font-album text-xs font-bold uppercase tracking-[0.14em] text-accent">
          Single out 4 Sep
        </p>
      </div>
    </div>
  );
}
