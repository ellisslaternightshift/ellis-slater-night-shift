import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Ellis Slater & The Night Shift",
  description:
    "About London punk rock band Ellis Slater & The Night Shift and their debut album All Is Fair in Love, War & The Mundane.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="relative min-h-[58svh] overflow-hidden bg-black px-5 py-5 text-white sm:px-8 lg:px-12">
        <Image
          src="/band-hero.jpg"
          alt="Ellis Slater & The Night Shift in a green room with guitars and a tiger-print sofa"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[48%_center] opacity-70 md:object-center"
        />
        <div className="absolute inset-0 bg-black/20" aria-hidden />

        <header className="relative z-10 flex justify-end font-display text-sm font-black uppercase text-white sm:text-base">
          <Link
            href="/"
            className="text-white/85 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            Home
          </Link>
        </header>

        <div className="relative z-10 mt-20 max-w-xl text-shadow-strong sm:mt-24 lg:mt-28">
          <Image
            src="/GOLD LOGO.png"
            alt="Ellis Slater & The Night Shift"
            width={3622}
            height={1474}
            priority
            sizes="(max-width: 640px) 64vw, 28rem"
            className="h-auto w-64 sm:w-[28rem]"
          />
          <h1 className="mt-10 font-display text-5xl font-black uppercase leading-none text-white sm:text-7xl">
            About
          </h1>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-7xl gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[0.42fr_1fr] lg:px-12 lg:py-24">
        <div>
          <p className="font-album text-base font-bold uppercase tracking-[0.18em] text-accent">
            London punk rock
          </p>
        </div>

        <div className="max-w-3xl space-y-6 text-lg font-bold leading-relaxed text-white sm:text-xl">
          <p>
            Ellis Slater &amp; The Night Shift make melodic punk rock from
            London for people who enjoy big choruses, bad decisions and songs
            that sound cheerful until you listen properly.
          </p>
          <p>
            It pulls from punk, post-punk and alternative rock without trying
            to pretend any of that is new. Think fast guitars, awkward feelings,
            a decent tune and the occasional attempt at swagger before someone
            remembers they are from London and have emails to answer.
          </p>
          <p>
            The songs are direct, melodic and usually about the sort of
            ordinary disasters that do not look dramatic from the outside:
            friendship, pressure, getting older, staying out too late and
            wondering why everyone else seems to have read the instructions.
          </p>
          <p>
            Their debut album,{" "}
            <span className="font-album font-bold uppercase tracking-[0.06em]">
              All Is Fair in Love, War &amp; The Mundane
            </span>
            , arrives in October 2026. It is not a grand statement. It is a
            record about love, boredom, panic, work, friendship and trying to
            stay human without making too much of a speech about it.
          </p>
          <p>
            ES&amp;TNS are currently playing live dates around the UK while
            preparing the first videos and releases from the album. No
            manifesto. Just songs, amps and a suspicious amount of admin.
          </p>
          <Link
            href="/#contact"
            className="inline-block font-display text-lg font-black uppercase text-accent underline decoration-white/25 underline-offset-8 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          >
            Booking / contact
          </Link>
        </div>
      </section>
    </main>
  );
}
