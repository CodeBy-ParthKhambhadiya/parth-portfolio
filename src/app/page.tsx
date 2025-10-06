// src/app/page.tsx
import Link from 'next/link';

export default function HomePage() {
  return (
    <section className="py-12 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        
        <p className="text-lg md:text-xl mb-6 text-gray-700">
          I am a frontend developer specializing in building modern, responsive, and fast web applications with React and Next.js.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/projects"
            className="px-5 py-2 bg-yellow-400 text-gray-900 font-semibold rounded hover:bg-yellow-500 transition"
          >
            View My Projects
          </Link>
          <Link
            href="/about"
            className="px-5 py-2 border border-gray-900 text-gray-900 font-semibold rounded hover:bg-gray-900 hover:text-white transition"
          >
            About Me
          </Link>
        </div>
      </div>
    </section>
  );
}
