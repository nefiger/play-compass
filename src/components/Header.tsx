import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="w-full px-6 pt-6 flex justify-between items-center">
      <Link href="/">
        <Image
          src="/assets/logo.svg"
          alt="Play Compass"
          width={200}
          height={100}
          className="w-[180px] h-auto"
          priority
        />
      </Link>
      <nav className="space-x-6 text-peach text-sm font-medium">
        <Link href="/projects">Projects</Link>
        <Link href="/about">About</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  )
}