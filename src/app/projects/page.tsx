import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects | Play Compass',
  description: 'Explore selected games and playful experiments.'
};

export default function ProjectsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 space-y-12">
      <div>
        <h1 className="text-3xl font-semibold mb-4">Projects</h1>
        <p className="text-gray-700">
          Play Compass is a home for playful experiments, interactive installations,
          social games, and adventure design. Below is a growing collection of past
          and ongoing projects that invite curiosity, exploration, and a bit of wonder.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">\uD83C\uDF0A The Cape Town Game</h2>
        <p className="text-sm text-gray-600">Status: In development &middot; Type: Location-based exploration game</p>
        <p className="italic text-gray-700">“A city becomes a puzzle when seen through playful eyes.”</p>
        <p className="text-gray-700">
          The Cape Town Game is a place-based, mobile-accessed game inviting players
          to explore the Mother City through quests, clues, and creative challenges.
          Using a conversational interface (e.g. WhatsApp), players follow a loose
          narrative, solve puzzles at physical locations, and engage with their surroundings
          in new ways.
        </p>
        <Image
          src="/assets/TCTG logo.png"
          alt="The Cape Town Game Logo"
          width={1200}
          height={616}
          className="w-full max-w-full"
        />
        <ul className="list-disc ml-6 text-gray-700 space-y-1">
          <li>Dynamic narrative woven with local culture and landmarks</li>
          <li>Built for solo adventurers or small teams</li>
          <li>Custom logo and identity reflecting Cape Town’s iconic ocean–mountain landscape</li>
        </ul>
        <p className="text-gray-700"><strong>Role</strong>: Concept, design, game writing, narrative arcs, WhatsApp integration (via Deep Digital)</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">\uD83C\uDF89 Come Play! Festival Challenge</h2>
        <p className="text-sm text-gray-600">Status: Complete &middot; Type: Social scavenger hunt &middot; Event: HeartCore – Intimate birthday festival</p>
        <p className="italic text-gray-700">“Frivolous points up for grabs!”</p>
        <p className="text-gray-700">
          A one-page print game designed for a weekend-long birthday festival. Players
          completed light-hearted tasks across three categories — Learn, Find, Share —
          earning points for discoveries, interactions, and expressions. From hugging a DJ
          mid-set to doing a cartwheel, this game encouraged social interaction and spontaneous joy.
        </p>
        <Image
          src="/assets/An invitation to play.png"
          alt="Come Play! Game Poster"
          width={1200}
          height={1697}
          className="w-full max-w-full"
        />
        <ul className="list-disc ml-6 text-gray-700 space-y-1">
          <li>Designed as a single-sided, high-colour print poster</li>
          <li>Over 20 tasks, each creatively scored</li>
          <li>Playful point system to reward curiosity, silliness, and connection</li>
        </ul>
        <p className="text-gray-700"><strong>Role</strong>: Game concept, design, layout, and facilitation</p>
        <p className="text-gray-700">Notes: A digital companion or remix version is under consideration for wider use.</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">\uD83C\uDF00 HeartCore: Pocket-Sized Portal</h2>
        <p className="text-sm text-gray-600">Status: Complete &middot; Type: Folded tactile keepsake &middot; Event: HeartCore – Intimate birthday festival</p>
        <p className="italic text-gray-700">“A folded invitation to play — and remember.”</p>
        <p className="text-gray-700">
          Designed for the same festival, this was a small foldable print item handed to participants.
          On one side, it introduced the vibe and values of the event. On the other, it offered a private
          prompt — something to notice, seek, or remember. The design encouraged a sense of personal engagement
          while preserving the handmade intimacy of the event.
        </p>
        <p className="text-gray-700">
          <Link href="/assets/HC.pdf" className="underline text-peach" target="_blank">\uD83D\uDCC4 Download PDF version</Link>
        </p>
        <ul className="list-disc ml-6 text-gray-700 space-y-1">
          <li>Custom layout for fold-and-carry interaction</li>
          <li>Dual-purpose: artistic object and interactive prompt</li>
          <li>Crafted with care for a small, known audience</li>
        </ul>
        <p className="text-gray-700"><strong>Role</strong>: Copy, concept, layout, prompt-writing</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">\u2728 More Coming Soon</h2>
        <p className="text-gray-700">The Play Compass project shelf is growing! Look out for upcoming experiences such as:</p>
        <ul className="list-disc ml-6 text-gray-700 space-y-1">
          <li><strong>Kaioma</strong>: A large-scale interactive installation concept premiering at Playtopia 2025</li>
          <li><strong>Puzzle Trails</strong>: Modular treasure hunts that blend art, code, and story</li>
          <li><strong>Mini Games</strong>: Playful provocations for events, pop-ups, and festivals</li>
        </ul>
      </section>

      <p className="text-gray-700">
        Want to collaborate on something delightful?{' '}
        <a href="mailto:jennifer@playcompass.co.za" className="underline text-peach">Get in touch</a>.
      </p>
    </div>
  );
}
