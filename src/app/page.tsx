// src/app/page.tsx
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../components/Logo';

export default function Home() {
  return (
    <main className="flex flex-col items-center bg-cream text-gray-800 font-sans">
      {/* Hero */}
      <section className="flex flex-col items-center justify-center min-h-[70vh] text-center px-6 relative">
        <Logo className="w-48 h-auto mb-6 animate-wiggle" />
        <h1 className="text-4xl md:text-5xl font-bold text-peach max-w-3xl">
          Helping grown-ups find their way back to wonder
        </h1>
        <Image
          src="/assets/dotted-arrow.svg"
          alt="decorative arrow"
          width={200}
          height={80}
          className="mt-6 animate-bounce hidden md:block"
        />
        <Link
          href="/projects"
          className="mt-8 px-6 py-3 bg-forest text-white text-lg italic rounded-full shadow hover:bg-[#3f665b] transition-colors"
        >
          Come play
        </Link>
      </section>

      {/* Features */}
      <section className="w-full bg-white py-16">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10 px-4 text-center">
          <div className="flex flex-col items-center">
            <Image src="/assets/Arrow.svg" alt="explore" width={80} height={80} className="mb-4" />
            <h2 className="text-xl font-semibold mb-2">Explore</h2>
            <p className="text-gray-700">Interactive trails and playful installations that invite curiosity.</p>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/assets/Arrow.svg" alt="create" width={80} height={80} className="mb-4 rotate-90" />
            <h2 className="text-xl font-semibold mb-2">Create</h2>
            <p className="text-gray-700">Original games and creative experiments crafted with care.</p>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/assets/Arrow.svg" alt="collaborate" width={80} height={80} className="mb-4 -rotate-90" />
            <h2 className="text-xl font-semibold mb-2">Collaborate</h2>
            <p className="text-gray-700">Projects that bring people together to share wonder.</p>
          </div>
        </div>
      </section>

    </main>
  );
}