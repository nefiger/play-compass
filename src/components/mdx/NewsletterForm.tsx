'use client';

export default function NewsletterForm() {
  return (
    <form className="space-y-2" onSubmit={e => e.preventDefault()}>
      <input
        type="email"
        placeholder="you@example.com"
        className="border p-2 rounded w-full"
      />
      <button type="submit" className="bg-peach text-white px-4 py-2 rounded">
        Subscribe
      </button>
    </form>
  );
}
