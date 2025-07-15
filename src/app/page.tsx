<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
export default function HomePage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold tracking-tight">Welcome to Play Compass</h1>
      <p className="mt-4 text-lg text-gray-700">
        Bringing direction to play. Explore games, puzzles, and immersive experiences designed for curious grown-ups.
      </p>
    </div>
  )
}
=======
import Image from "next/image";

export default function Home() {
=======
export default function HomePage() {
>>>>>>> 2ec30f1 (Initial commit of Play Compass site)
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold tracking-tight">Welcome to Play Compass</h1>
      <p className="mt-4 text-lg text-gray-700">
        Bringing direction to play. Explore games, puzzles, and immersive experiences designed for curious grown-ups.
      </p>
    </div>
<<<<<<< HEAD
  );
}
>>>>>>> 8dc14aa (Initial commit from Create Next App)
=======
  )
}
>>>>>>> 2ec30f1 (Initial commit of Play Compass site)
=======
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen bg-[#FFFCF4] text-[#333] font-sans">
      <header className="w-full px-6 pt-6 flex justify-between items-center">
        <Image
          src="/assets/logo.svg"
          alt="Play Compass"
          width={200}
          height={100}
          className="w-[180px] h-auto"
          priority
        />
        <nav className="space-x-6 text-[#F4A261] text-sm font-medium">
          <Link href="/projects">Projects</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </header>

      <section className="flex flex-col items-center justify-center flex-1 text-center px-6">
       <div className="bg-cream text-forest">
  <h1 className="text-peach">Helping grown-ups find their way back to wonder</h1>
		</div>
        <Link
          href="/projects"
          className="mt-8 px-6 py-3 bg-[#508072] text-white text-lg italic rounded-full shadow hover:bg-[#3f665b] transition-colors"
        >
          Come play
        </Link>
      </section>

      <footer className="w-full">
        <Image
          src="/assets/grass.svg"
          alt="grass"
          width={1200}
          height={100}
          className="w-full h-auto"
        />
        <div className="text-center text-xs text-[#508072] py-4">
          © 2025 Play Compass. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
>>>>>>> 355150b (Add developer setup instructions and finalise initial project structure)
