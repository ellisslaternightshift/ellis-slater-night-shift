import Image from "next/image";
import type { CSSProperties } from "react";
import type { Metadata } from "next";
import PastShows from "./components/PastShows";

export const metadata: Metadata = {
  title: "Ellis Slater & The Night Shift | Official Website",
  description:
    "London punk rock band Ellis Slater & The Night Shift. New album All Is Fair in Love, War & The Mundane coming October 2026. Music, live dates, videos and news.",
};

const liveDates = [
  {
    date: "18 Sep 2026",
    venue: "Blondies",
    location: "London, E5",
    note: "With Cold Years",
  },
  {
    date: "02 Oct 2026",
    venue: "The Pig",
    location: "Hastings",
  },
  {
    date: "19 Oct 2026",
    venue: "Signature Brew Haggerston",
    location: "London, E8",
    note: "With Tribute To Nothing",
  },
];

const navItems = [
  { label: "Music", href: "#music" },
  { label: "Live", href: "#live" },
  { label: "Video", href: "#video" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "#contact" },
];

const musicLinks = [
  {
    label: "Spotify",
    href: "https://open.spotify.com/artist/6xDMlAj0iL6ClWtse79zvk?si=WjFdC258SXWA95xTfmVv0Q&utm_source=copy-link",
  },
  { label: "Bandcamp", href: "https://ellisslaternightshift.bandcamp.com/" },
];

const socialLinks = [
  {
    label: "Instagram",
    icon: "instagram",
    href: "https://www.instagram.com/ellisslaternightshift",
  },
  {
    label: "Facebook",
    icon: "facebook",
    href: "https://www.facebook.com/ellisslaternightshift",
  },
  {
    label: "YouTube",
    icon: "youtube",
    href: "https://www.youtube.com/@EllisSlaterNightShift",
  },
  {
    label: "Spotify",
    icon: "spotify",
    href: "https://open.spotify.com/artist/6xDMlAj0iL6ClWtse79zvk?si=WjFdC258SXWA95xTfmVv0Q&utm_source=copy-link",
  },
  {
    label: "Bandcamp",
    icon: "bandcamp",
    href: "https://ellisslaternightshift.bandcamp.com/",
  },
];

function SocialIcon({ icon }: { icon: string }) {
  if (icon === "instagram") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-7 w-7">
        <rect
          x="3"
          y="3"
          width="18"
          height="18"
          rx="5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
        />
        <circle
          cx="12"
          cy="12"
          r="4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
        />
        <circle cx="17.3" cy="6.7" r="1.3" fill="currentColor" />
      </svg>
    );
  }

  if (icon === "facebook") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-8 w-8">
        <path
          fill="currentColor"
          d="M14.2 8.2V6.8c0-.7.5-1.1 1.2-1.1h1.7V3h-2.5c-2.7 0-4.1 1.6-4.1 3.9v1.3H8v3h2.5V21h3.7v-9.8h2.5l.4-3h-2.9Z"
        />
      </svg>
    );
  }

  if (icon === "youtube") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-7 w-7">
        <path
          fill="currentColor"
          d="M21.5 7.1c-.2-.9-.9-1.6-1.8-1.8C18.1 5 12 5 12 5s-6.1 0-7.7.3c-.9.2-1.6.9-1.8 1.8C2.2 8.7 2.2 12 2.2 12s0 3.3.3 4.9c.2.9.9 1.6 1.8 1.8 1.6.3 7.7.3 7.7.3s6.1 0 7.7-.3c.9-.2 1.6-.9 1.8-1.8.3-1.6.3-4.9.3-4.9s0-3.3-.3-4.9ZM10.1 15.1V8.9l5.4 3.1-5.4 3.1Z"
        />
      </svg>
    );
  }

  if (icon === "spotify") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-7 w-7">
        <circle
          cx="12"
          cy="12"
          r="9"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
        />
        <path
          d="M7.8 9.6c2.9-.8 6.4-.5 8.6.8M8.4 12.2c2.3-.6 5-.4 6.8.7M9 14.7c1.7-.4 3.7-.3 5.1.5"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="1.8"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 36 24" aria-hidden="true" className="h-7 w-10">
      <path
        fill="currentColor"
        d="M2 6.5h21.5L18.7 17.5H2z"
        opacity="0.95"
      />
      <text
        x="25"
        y="16"
        fill="currentColor"
        fontFamily="Arial Black, Arial, sans-serif"
        fontSize="10"
        fontWeight="900"
      >
        bc
      </text>
    </svg>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <h1 className="sr-only">Ellis Slater &amp; The Night Shift</h1>
      <section className="relative min-h-svh overflow-hidden bg-black text-white">
        <Image
          src="/hero-loop-poster.jpg"
          alt="Ellis Slater & The Night Shift in a green room with guitars and a tiger-print sofa"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[48%_center] md:object-center"
        />
        <video
          className="absolute inset-0 h-full w-full object-cover object-[48%_center] motion-reduce:hidden md:object-center"
          autoPlay
          muted
          loop
          playsInline
          controls={false}
          preload="auto"
          poster="/hero-loop-poster.jpg"
          aria-hidden="true"
        >
          <source src="/hero-loop.mp4" type="video/mp4" />
        </video>
        <div className="hero-scratch-filter" aria-hidden />
        <div className="absolute inset-0 bg-black/5" aria-hidden />

        <header className="hero-enter hero-enter-nav relative z-20 flex items-start justify-between px-5 pb-5 pt-7 font-display text-sm font-black uppercase text-white sm:px-8 sm:pt-8 sm:text-base lg:px-12">
          <div aria-hidden />

          <nav
            className="hidden items-center gap-7 md:flex"
            aria-label="Primary navigation"
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-white/85 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <details className="group relative md:hidden">
            <summary className="cursor-pointer list-none text-white/90 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
              Menu
            </summary>
            <nav
              className="absolute right-0 mt-4 grid w-44 gap-4 bg-black/90 p-5 text-right text-base shadow-2xl"
              aria-label="Mobile navigation"
            >
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-white transition-colors hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </details>
        </header>

        <div className="absolute left-4 top-[3.5rem] z-10 sm:left-6 sm:top-[4.5rem] lg:left-10 lg:top-[4.25rem]">
          <div className="w-[48vw] max-w-[16rem] text-shadow-strong sm:w-[33vw] sm:max-w-[20rem] lg:w-[26vw] lg:max-w-[28rem]">
            <div className="hero-enter hero-enter-social mb-4 flex items-center gap-4 text-white">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={link.label}
                  className="transition-colors hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                >
                  <SocialIcon icon={link.icon} />
                </a>
              ))}
            </div>
            <div className="hero-logo-shine hero-enter hero-enter-logo">
              <Image
                src="/GOLD LOGO.png"
                alt="Ellis Slater & The Night Shift"
                width={3622}
                height={1474}
                priority
                sizes="(max-width: 640px) 48vw, (max-width: 1024px) 33vw, 26vw"
                className="hero-logo-image h-auto w-full"
              />
            </div>
            <div className="hero-enter hero-enter-copy mt-4 font-album text-sm font-bold uppercase leading-none tracking-[0.16em] text-white sm:text-base">
              <p>New album</p>
              <p className="mt-2 max-w-none whitespace-nowrap text-[0.64rem] leading-tight text-accent sm:text-xs lg:text-sm">
                All Is Fair In Love, War &amp; The Mundane
              </p>
              <p className="mt-2">October 2026</p>
            </div>
            <a
              href="#music"
              className="hero-enter hero-enter-cta mt-5 inline-block font-display text-base font-black uppercase text-white underline decoration-white/35 underline-offset-8 transition-colors hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Listen
            </a>
          </div>
        </div>
      </section>

      <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <section
          id="live"
          aria-labelledby="live-dates-heading"
          className="scroll-reveal grid gap-10 lg:grid-cols-[0.42fr_1fr]"
        >
          <div>
            <h2
              id="live-dates-heading"
              className="font-display text-5xl font-black uppercase leading-none text-white sm:text-7xl"
            >
              Live
            </h2>
            <p className="mt-4 font-album text-base font-bold uppercase tracking-[0.18em] text-accent">
              Upcoming shows
            </p>
          </div>

          <div className="divide-y divide-white/12 border-y border-white/12">
            {liveDates.map((show, index) => (
              <article
                key={`${show.date}-${show.location}`}
                className="scroll-swing grid gap-3 py-6 sm:grid-cols-[8.5rem_1fr] sm:items-start"
                style={{ "--reveal-delay": `${index * 120}ms` } as CSSProperties}
              >
                <time className="font-display text-base font-black uppercase text-accent sm:pt-1">
                  {show.date}
                </time>
                <div>
                  <h3 className="font-display text-2xl font-black uppercase leading-tight text-white">
                    {show.location}
                  </h3>
                  <p className="mt-2 font-display text-base font-black uppercase text-muted">
                    {show.venue}
                  </p>
                  {show.note ? (
                    <p className="mt-1 text-sm font-bold uppercase italic text-muted">
                      {show.note}
                    </p>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </section>

        <PastShows />

        <section
          id="music"
          aria-labelledby="music-heading"
          className="scroll-reveal mt-20 grid gap-10 lg:grid-cols-[0.34fr_1fr]"
        >
          <h2
            id="music-heading"
            className="font-display text-5xl font-black uppercase leading-none text-white sm:text-7xl"
          >
            Music
          </h2>
          <div className="grid gap-6 md:grid-cols-[clamp(8rem,13vw,11rem)_minmax(0,1fr)] md:items-center">
            <Image
              src="/Album Cover_Working.png"
              alt="Artwork for All Is Fair in Love, War & The Mundane"
              width={3622}
              height={3622}
              sizes="(max-width: 768px) 86vw, (max-width: 1280px) 13vw, 11rem"
              className="h-auto w-full max-w-md md:max-w-none"
            />
            <div className="min-w-0">
              <p className="font-album text-sm font-bold uppercase tracking-[0.18em] text-accent">
                New album
              </p>
              <p className="mt-3 max-w-full whitespace-nowrap font-album text-[clamp(0.55rem,2.7vw,1rem)] font-bold uppercase leading-snug tracking-[0.04em] text-white sm:text-2xl lg:text-3xl">
                All Is Fair In Love, War &amp; The Mundane
              </p>
              <p className="mt-4 font-album text-base font-bold uppercase tracking-[0.14em] text-white">
                October 2026
              </p>
              <div className="mt-6 flex flex-wrap gap-x-8 gap-y-4">
                {musicLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="font-display text-xl font-black uppercase text-white transition-colors hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="video"
          aria-labelledby="video-heading"
          className="scroll-reveal mt-20 grid gap-10 lg:grid-cols-[0.42fr_1fr]"
        >
          <h2
            id="video-heading"
            className="font-display text-5xl font-black uppercase leading-none text-white sm:text-7xl"
          >
            Video
          </h2>
          <div className="flex aspect-video max-w-3xl items-end border border-white/15 bg-black p-5 shadow-[inset_0_0_0_1px_rgb(255_255_255_/_0.04)] sm:p-8">
            <p className="font-display text-2xl font-black uppercase leading-tight text-white sm:text-4xl">
              Graveyard Of High Flyers
              <span className="block pt-2 text-accent">Live session</span>
              <span className="block pt-2 text-muted">Coming soon</span>
            </p>
          </div>
        </section>

        <section
          id="about-teaser"
          aria-labelledby="about-teaser-heading"
          className="scroll-reveal mt-20 grid gap-8 lg:grid-cols-[0.42fr_1fr]"
        >
          <h2
            id="about-teaser-heading"
            className="font-display text-5xl font-black uppercase leading-none text-white sm:text-7xl"
          >
            About
          </h2>
          <div>
            <p className="max-w-2xl text-lg font-bold leading-relaxed text-white sm:text-xl">
              Ellis Slater &amp; The Night Shift make melodic punk rock from
              London for people who enjoy big choruses, bad decisions and
              songs that sound cheerful until you listen properly.
            </p>
            <a
              href="/about"
              className="mt-6 inline-block font-display text-lg font-black uppercase text-accent underline decoration-white/25 underline-offset-8 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              More about the band
            </a>
          </div>
        </section>

        <section
          id="contact"
          aria-labelledby="contact-heading"
          className="scroll-reveal mt-20 grid gap-5 lg:grid-cols-[0.34fr_1fr] lg:items-end"
        >
          <h2
            id="contact-heading"
            className="font-display text-5xl font-black uppercase leading-none text-white sm:text-7xl"
          >
            Contact
          </h2>
          <a
            href="mailto:ellisslaternightshift@gmail.com"
            className="w-fit break-all font-display text-base font-black uppercase text-accent transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent sm:text-lg"
          >
            ellisslaternightshift@gmail.com
          </a>
        </section>

        <section
          aria-labelledby="socials-heading"
          className="scroll-reveal mt-5 grid gap-4 lg:grid-cols-[0.34fr_1fr] lg:items-center"
        >
          <h2
            id="socials-heading"
            className="font-display text-base font-black uppercase text-muted"
          >
            Socials
          </h2>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                aria-label={link.label}
                className="text-white transition-colors hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
              >
                <SocialIcon icon={link.icon} />
              </a>
            ))}
          </div>
        </section>

        <footer className="scroll-reveal mt-12 flex justify-end border-t border-white/12 pt-8">
          <Image
            src="/GOLD LOGO.png"
            alt="Ellis Slater & The Night Shift"
            width={3622}
            height={1474}
            sizes="(max-width: 640px) 60vw, 18rem"
            className="h-auto w-40 sm:w-56"
          />
        </footer>
      </div>
    </main>
  );
}
