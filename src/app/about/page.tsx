import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | Play Compass',
  description: 'Learn about the playful studio creating games and experiences.'
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-semibold mb-4">Hi, I’m Jen</h1>
      <p className="text-gray-700 mb-4">
        I’ve always described my secret side mission in life as figuring out how to get adults to play more — to have more fun.
      </p>
      <p className="text-gray-700">
        Play Compass is a personal home for that mission: a space to share playful ideas, showcase projects, and reflect on what grown-up play makes possible. I design playful experiences that help people reconnect with their curiosity and lightness — whether at festivals, in teams, or anywhere fun might want to sneak in.
      </p>
    </div>
  )
}