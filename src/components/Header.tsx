'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const [showLogo, setShowLogo] = useState(!isHome);
  const [sticky, setSticky] = useState(!isHome);

  useEffect(() => {
    if (!isHome) return;

    const hero = document.getElementById('hero');
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowLogo(false);
          setSticky(false);
        } else {
          setShowLogo(true);
          setSticky(true);
        }
      },
      { threshold: 0 }
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, [isHome]);

  return (
    <header
      className={`${sticky ? 'sticky top-0 bg-cream shadow' : 'relative'} w-full px-6 pt-6 flex justify-between items-center transition-all`}
    >
      <Link
        href="/"
        className={`${showLogo ? 'opacity-100' : 'opacity-0'} transition-opacity`}
      >
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
  );
}