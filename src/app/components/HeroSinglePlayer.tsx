import SingleAudioCard from "./SingleAudioCard";

const heroSingles = [
  {
    title: "Skulls & Skeletons",
    label: "Out now",
    date: "Released 4 Sep 2026",
    artwork: "/skulls-and-skeletons-cover.png",
    audio: "/skulls-and-skeletons.mp3",
    links: [
      {
        label: "Watch video",
        href: "https://youtu.be/UuWZ-kESyGI",
      },
    ],
  },
  {
    title: "Graveyard of High Flyers",
    label: "Out now",
    date: "Released 7 Feb 2025",
    artwork: "/DIGITAL_Single Cover_Graveyards.png",
    audio: "/graveyard-of-high-flyers.mp3",
    links: [
      {
        label: "Watch video",
        href: "https://youtu.be/wUg2TV19L6Q",
      },
    ],
  },
];

export default function HeroSinglePlayer() {
  return (
    <div className="hero-enter hero-enter-cta mt-7 grid max-w-xs gap-5 text-white">
      {heroSingles.map((single) => (
        <SingleAudioCard
          key={single.title}
          {...single}
          compact
          className="text-shadow-strong"
          artworkClassName="h-16 w-16"
        />
      ))}
      <a
        href="#music"
        className="w-fit font-display text-sm font-black uppercase text-white transition-colors hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
      >
        More music
      </a>
    </div>
  );
}
