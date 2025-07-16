import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects | Play Compass',
  description: 'Explore selected games and playful experiments.'
};

export default function ProjectsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-semibold">Things I’ve Made</h1>
      <p className="mt-4 text-gray-700 max-w-2xl">
        A growing archive of games, experiences, and playful provocations — designed to spark connection, curiosity, and joy.
      </p>
      <ul className="mt-8 space-y-8">
        <li>
          <h2 className="text-xl font-medium">Heartcore Trail</h2>
          <p className="text-sm text-gray-600 mb-1">Festival Game</p>
          <p className="text-gray-700">A puzzle-based treasure hunt weaving physical clues and whimsical storylines through festival grounds. Designed for the “Tickled Pink” Playtopia 2025 theme.</p>
        </li>
        <li>
          <h2 className="text-xl font-medium">An Invitation to Play</h2>
          <p className="text-sm text-gray-600 mb-1">Interactive Installation</p>
          <p className="text-gray-700">A gentle, opt-in play experience at a festival — encouraging adults to engage with curiosity and presence through light interaction and surprise.</p>
        </li>
        <li>
          <h2 className="text-xl font-medium">Remote Team Stats Game</h2>
          <p className="text-sm text-gray-600 mb-1">Workplace Game</p>
          <p className="text-gray-700">A playful activity designed for remote teams. Participants guess anonymous teammate traits using visualised data. Sparks laughter, insight, and connection.</p>
        </li>
        <li>
          <h2 className="text-xl font-medium">TaleSpindle</h2>
          <p className="text-sm text-gray-600 mb-1">Collaborative Storytelling Prototype</p>
          <p className="text-gray-700">A guided format to help families co-create memory-based stories together — currently in development.</p>
        </li>
      </ul>
    </div>
  )
}