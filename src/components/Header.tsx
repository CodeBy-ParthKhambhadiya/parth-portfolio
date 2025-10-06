// src/components/Header.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  const linkClasses = (path: string) =>
    `mx-3 hover:text-yellow-400 ${pathname === path ? 'font-bold underline' : ''}`;

  return (
    <header className="p-6 bg-gray-900 text-white flex justify-between items-center">
      <h1 className="text-2xl font-bold">Parth Portfolio</h1>
      <nav>
        <Link href="/" className={linkClasses('/')}>Home</Link>
        <Link href="/about" className={linkClasses('/about')}>About</Link>
        <Link href="/projects" className={linkClasses('/projects')}>Projects</Link>
        <Link href="/resume" className={linkClasses('/resume')}>Resume</Link>
        <Link href="/blog" className={linkClasses('/blog')}>Blog</Link> {/* Added Blog link */}
        <Link href="/contact" className={linkClasses('/contact')}>Contact</Link>
      </nav>
    </header>
  );
}
