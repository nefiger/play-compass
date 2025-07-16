import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | Play Compass',
  description: 'Learn about the playful studio creating games and experiences.'
};

export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-semibold">About Play Compass</h1>
      <p className="mt-4 text-gray-700">
        Play Compass is a playful studio, a portfolio, and a provocation.
        We design interactive experiences, puzzle trails, and creative games that reconnect adults to wonder, exploration, and collaboration.
      </p>
      <p className="mt-4 text-gray-700">
        Created by Jennifer Walker, Play Compass is a growing collection of game concepts, experimental ideas, and submissions to festivals and public spaces — from immersive installations to WhatsApp-based quests.
      </p>
    </div>
  )
}