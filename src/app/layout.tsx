<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 2ec30f1 (Initial commit of Play Compass site)
// src/app/layout.tsx
import './tailwind.css';
import Header from '../components/Header'
import Footer from '../components/Footer'
import type { Metadata } from 'next'
<<<<<<< HEAD

export const metadata: Metadata = {
  title: 'Play Compass',
  description: 'Bringing direction to play',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="font-body bg-background text-gray-800">
      <body className="flex flex-col min-h-screen">
        <main className="flex-grow">{children}</main>
        <footer className="text-center py-4 text-sm text-gray-600">
          © {new Date().getFullYear()} Play Compass. All rights reserved.
        </footer>
      </body>
    </html>
  )
}
=======
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
=======
>>>>>>> 2ec30f1 (Initial commit of Play Compass site)

export const metadata: Metadata = {
  title: 'Play Compass',
  description: 'Bringing direction to play',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
<<<<<<< HEAD
  );
}
>>>>>>> 8dc14aa (Initial commit from Create Next App)
=======
  )
}
>>>>>>> 2ec30f1 (Initial commit of Play Compass site)
