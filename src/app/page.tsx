// src/app/page.tsx
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col items-center bg-[#FFFCF4] text-[#333] font-sans">

      <section className="flex flex-col items-center justify-center flex-1 text-center px-6">
        <div className="bg-cream text-forest p-4 rounded-md">
          <h1 className="text-4xl md:text-5xl font-bold text-peach">
            Helping grown-ups find their way back to wonder
          </h1>
        </div>
        <Link
          href="/projects"
          className="mt-8 px-6 py-3 bg-[#508072] text-white text-lg italic rounded-full shadow hover:bg-[#3f665b] transition-colors"
        >
          Come play
        </Link>
      </section>

    </main>
  );
}