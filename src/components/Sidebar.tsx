'use client';

import {
    FaGithub,
    FaLinkedin,
    FaEnvelope,
    FaTwitter,
    FaHome,
    FaUser,
    FaProjectDiagram,
    FaEnvelopeOpen,
    FaFileAlt,
    FaFileCode,
    FaStar,
    FaBlog
} from "react-icons/fa";
import Link from "next/link";

export default function Sidebar() {
    return (
        <div className="fixed top-1/2 left-4 transform -translate-y-1/2 flex flex-col gap-4 z-50">

            {/* Navigation Links */}
            <Link href="/" className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-gray-200 hover:bg-gray-300 transition">
                <FaHome size={20} />
                <span className="absolute left-full ml-2 px-3 py-1 rounded bg-gray-800 text-white opacity-0 group-hover:opacity-100 group-hover:left-14 whitespace-nowrap transition-all duration-300">
                    Home
                </span>
            </Link>

            <Link href="/about" className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-gray-200 hover:bg-gray-300 transition">
                <FaUser size={20} />
                <span className="absolute left-full ml-2 px-3 py-1 rounded bg-gray-800 text-white opacity-0 group-hover:opacity-100 group-hover:left-14 whitespace-nowrap transition-all duration-300">
                    About
                </span>
            </Link>

            <Link href="/projects" className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-gray-200 hover:bg-gray-300 transition">
                <FaProjectDiagram size={20} />
                <span className="absolute left-full ml-2 px-3 py-1 rounded bg-gray-800 text-white opacity-0 group-hover:opacity-100 group-hover:left-14 whitespace-nowrap transition-all duration-300">
                    Projects
                </span>
            </Link>

            <Link href="/resume" className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-gray-200 hover:bg-gray-300 transition">
                <FaFileAlt size={20} />
                <span className="absolute left-full ml-2 px-3 py-1 rounded bg-gray-800 text-white opacity-0 group-hover:opacity-100 group-hover:left-14 whitespace-nowrap transition-all duration-300">
                    Resume
                </span>
            </Link>

            {/* <Link href="/portfolio" className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-gray-200 hover:bg-gray-300 transition">
                <FaFileCode size={20} />
                <span className="absolute left-full ml-2 px-3 py-1 rounded bg-gray-800 text-white opacity-0 group-hover:opacity-100 group-hover:left-14 whitespace-nowrap transition-all duration-300">
                    Portfolio
                </span>
            </Link>

            <Link href="/testimonials" className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-gray-200 hover:bg-gray-300 transition">
                <FaStar size={20} />
                <span className="absolute left-full ml-2 px-3 py-1 rounded bg-gray-800 text-white opacity-0 group-hover:opacity-100 group-hover:left-14 whitespace-nowrap transition-all duration-300">
                    Testimonials
                </span>
            </Link> */}

            <Link
                href="/blog"
                className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-gray-200 hover:bg-gray-300 transition-all duration-300"
            >
                <FaBlog size={20} className="text-gray-800 group-hover:text-gray-900 transition" />
                <span className="absolute left-full ml-2 px-3 py-1 rounded bg-gray-800 text-white opacity-0 group-hover:opacity-100 group-hover:left-14 whitespace-nowrap text-sm transition-all duration-300">
                    Blog
                </span>
            </Link>

            <Link href="/contact" className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-gray-200 hover:bg-gray-300 transition">
                <FaEnvelopeOpen size={20} />
                <span className="absolute left-full ml-2 px-3 py-1 rounded bg-gray-800 text-white opacity-0 group-hover:opacity-100 group-hover:left-14 whitespace-nowrap transition-all duration-300">
                    Contact
                </span>
            </Link>

            <hr className="border-gray-300 my-2" />

            {/* Social Links */}
            <Link href="https://github.com/CodeBy-ParthKhambhadiya" target="_blank" className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-gray-800 text-white hover:bg-gray-900 transition">
                <FaGithub size={20} />
                <span className="absolute left-full ml-2 px-3 py-1 rounded bg-gray-800 text-white opacity-0 group-hover:opacity-100 group-hover:left-14 whitespace-nowrap transition-all duration-300">
                    GitHub
                </span>
            </Link>

            <Link href="https://www.linkedin.com/in/parth-khambhadiya-214563224" target="_blank" className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition">
                <FaLinkedin size={20} />
                <span className="absolute left-full ml-2 px-3 py-1 rounded bg-gray-800 text-white opacity-0 group-hover:opacity-100 group-hover:left-14 whitespace-nowrap transition-all duration-300">
                    LinkedIn
                </span>
            </Link>

            <Link
                href="mailto:parthkhambhadiya2310@gmail.com"
                className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-red-500 text-white hover:bg-red-600 transition"
            >
                <FaEnvelope size={20} />
                <span className="absolute left-full ml-2 px-3 py-1 rounded bg-gray-800 text-white opacity-0 group-hover:opacity-100 group-hover:left-14 whitespace-nowrap transition-all duration-300">
                    Email
                </span>
            </Link>


            <Link href="https://twitter.com/your-username" target="_blank" className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-blue-400 text-white hover:bg-blue-500 transition">
                <FaTwitter size={20} />
                <span className="absolute left-full ml-2 px-3 py-1 rounded bg-gray-800 text-white opacity-0 group-hover:opacity-100 group-hover:left-14 whitespace-nowrap transition-all duration-300">
                    Twitter
                </span>
            </Link>

        </div>
    );
}
