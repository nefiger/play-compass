import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | Play Compass',
  description: 'Get in touch to collaborate on playful experiences.'
};

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 text-center">
      <h1 className="text-3xl font-semibold mb-4">Let’s Play Together</h1>
      <p className="text-gray-700 mb-6">
        Curious about collaborating on a playful experience, game, or installation? I’d love to hear from you.
      </p>
      <a
        href="mailto:yourname@yourdomain.com"
        className="inline-block bg-forest text-white px-6 py-3 rounded-full text-lg italic hover:bg-[#3f665b] transition-colors"
      >
        Get in touch →
      </a>
    </div>
  );
}
