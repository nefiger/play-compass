import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white shadow-md px-4 py-3">
      <nav className="flex justify-between max-w-5xl mx-auto">
        <div className="font-bold text-lg">Play Compass</div>
        <div className="space-x-4">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </nav>
    </header>
  )
}