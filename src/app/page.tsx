// src/app/page.tsx
import Link from "next/link";
import Image from "next/image";
import Logo from "../components/Logo";

export default function Home() {
  return (
    <main className="flex flex-col items-center bg-cream text-[#333] font-sans">
      <section className="flex flex-col items-center justify-center text-center px-6 py-20 relative">
        <Logo width={220} height={160} className="mb-6 animate-wiggle" />
        <div className="bg-cream text-forest p-4 rounded-md">
          <h1 className="text-4xl md:text-5xl font-bold text-peach">
            Helping grown-ups find their way back to wonder
          </h1>
        </div>
        <Link
          href="/projects"
          className="mt-8 px-6 py-3 bg-forest text-white text-lg italic rounded-full shadow hover:bg-[#3f665b] transition-colors"
        >
          Come play
        </Link>
        <Image
          src="/assets/dotted-arrow.svg"
          alt="decorative arrow"
          width={200}
          height={80}
          className="mt-4 animate-float w-40 h-auto"
        />
      </section>

      <section className="max-w-5xl px-6 py-16 text-center space-y-8">
        <h2 className="text-3xl font-semibold text-forest">
          Playful experiences for curious adults
        </h2>
        <div className="grid md:grid-cols-3 gap-8 text-left">
          <div>
            <h3 className="text-xl font-medium text-peach">Games & puzzles</h3>
            <p className="mt-2 text-gray-700">
              Explore immersive quests, urban adventures and whimsical
              challenges.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-medium text-peach">Installations</h3>
            <p className="mt-2 text-gray-700">
              Discover interactive art that sparks collaboration and wonder.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-medium text-peach">Workshops</h3>
            <p className="mt-2 text-gray-700">
              Join playful sessions that inspire creativity in everyday life.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
