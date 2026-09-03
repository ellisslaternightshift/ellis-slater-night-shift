import SingleAudioCard from "./SingleAudioCard";

const heroSingles = [
  {
    title: "Skulls & Skeletons",
    artwork: "/skulls-and-skeletons-cover.png",
    audio: "/skulls-and-skeletons.mp3",
  },
  {
    title: "Graveyard of High Flyers",
    artwork: "/DIGITAL_Single Cover_Graveyards.png",
    audio: "/graveyard-of-high-flyers.mp3",
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
    </div>
  );
}
