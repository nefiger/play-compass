// src/app/page.tsx
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Play Compass',
  description: 'Helping grown-ups find their way back to wonder.'
};

export default function Home() {
  return (
    <main className="flex flex-col items-center bg-cream text-forest font-sans">

      <section id="hero" className="relative flex flex-col items-center text-center py-16 px-6 w-full overflow-hidden">
        <Image
          src="/assets/logo.svg"
          alt="Play Compass logo"
          width={240}
          height={120}
          className="w-48 md:w-60 mb-6 animate-float"
          priority
        />
        <h1 className="text-5xl md:text-6xl font-bold text-peach max-w-xl">
          Helping grown-ups find their way back to wonder
        </h1>
        <p className="mt-4 text-lg text-forest max-w-md">
          Discover puzzles, playgrounds, and playful adventures designed for curious adults. Navigate your next experience with purpose — and a wink.
        </p>
        <Image
          src="/assets/dotted-arrow.svg"
          alt="dotted arrow"
          width={150}
          height={80}
          className="absolute bottom-0 right-4 w-24 md:w-32 animate-bounce"
        />
      </section>


      <section className="mt-12 max-w-5xl w-full px-4 grid gap-8 md:grid-cols-3 text-center">
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2">Interactive Experiences</h2>
          <p className="text-gray-700 text-sm">Playful installations and digital games to spark imagination.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2">Puzzle Trails</h2>
          <p className="text-gray-700 text-sm">Exploratory quests that weave clues through real and virtual spaces.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2">Creative Games</h2>
          <p className="text-gray-700 text-sm">Small experiments that invite collaboration and curiosity.</p>
        </div>
      </section>

      <section className="my-12 text-center">
        <Link
          href="/projects"
          className="inline-flex items-center space-x-3 px-8 py-4 bg-forest text-white text-lg italic rounded-full shadow hover:bg-[#3f665b] transition-colors"
        >
          <span>Come play</span>
          <Image src="/assets/Arrow.svg" alt="arrow" width={24} height={24} className="w-5 h-5" />
        </Link>
      </section>

      <section className="mt-16 bg-white w-full py-12 px-6">
        <h2 className="text-3xl font-semibold text-center mb-4">Why Play?</h2>
        <p className="max-w-3xl mx-auto text-center text-gray-700 mb-4">
          I believe that play is not optional — it’s fundamental. As kids, it’s how we learn. As adults, it’s how we remember to be curious, connected, and human.
        </p>
        <p className="max-w-3xl mx-auto text-center text-gray-700">
          But somewhere along the way, play gets boxed up, labelled “childish”, or replaced with the endless push for productivity. The result? Burnout, disconnection, and a creeping loss of joy.
        </p>
        <p className="max-w-3xl mx-auto text-center text-gray-700 mt-4">
          Play Compass exists to gently challenge that. To create structured invitations into flow, curiosity, and fun — because adults deserve spaces to play too.
        </p>
      </section>

    </main>
  );
}