'use client';

import {
    FaGithub,
    FaLinkedin,
    FaEnvelope,
    FaTwitter,
    FaHome,
    FaUser,
    FaProjectDiagram,
    FaFileAlt,
    FaBlog
} from "react-icons/fa";
import Link from "next/link";

export default function Sidebar() {
    return (
        <div className="fixed top-1/2 left-4 transform -translate-y-1/2 flex flex-col gap-4 z-50">

            {/* Navigation Links */}
            <div className="flex flex-col gap-2">
                <div className="relative group">
                    <Link href="/" className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-200 hover:bg-gray-300 transition">
                        <FaHome size={20} />
                    </Link>
                    <span className="absolute left-full top-1/2 transform -translate-y-1/2 ml-2 px-3 py-1 rounded bg-gray-800 text-white opacity-0 group-hover:opacity-100 whitespace-nowrap transition-all duration-300">
                        Home
                    </span>
                </div>

                <div className="relative group">
                    <Link href="/about" className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-200 hover:bg-gray-300 transition">
                        <FaUser size={20} />
                    </Link>
                    <span className="absolute left-full top-1/2 transform -translate-y-1/2 ml-2 px-3 py-1 rounded bg-gray-800 text-white opacity-0 group-hover:opacity-100 whitespace-nowrap transition-all duration-300">
                        About
                    </span>
                </div>

                <div className="relative group">
                    <Link href="/projects" className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-200 hover:bg-gray-300 transition">
                        <FaProjectDiagram size={20} />
                    </Link>
                    <span className="absolute left-full top-1/2 transform -translate-y-1/2 ml-2 px-3 py-1 rounded bg-gray-800 text-white opacity-0 group-hover:opacity-100 whitespace-nowrap transition-all duration-300">
                        Projects
                    </span>
                </div>

                <div className="relative group">
                    <Link href="/resume" className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-200 hover:bg-gray-300 transition">
                        <FaFileAlt size={20} />
                    </Link>
                    <span className="absolute left-full top-1/2 transform -translate-y-1/2 ml-2 px-3 py-1 rounded bg-gray-800 text-white opacity-0 group-hover:opacity-100 whitespace-nowrap transition-all duration-300">
                        Resume
                    </span>
                </div>

                <div className="relative group">
                    <Link href="/blog" className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-200 hover:bg-gray-300 transition">
                        <FaBlog size={20} />
                    </Link>
                    <span className="absolute left-full top-1/2 transform -translate-y-1/2 ml-2 px-3 py-1 rounded bg-gray-800 text-white opacity-0 group-hover:opacity-100 whitespace-nowrap transition-all duration-300">
                        Blog
                    </span>
                </div>
            </div>

            <hr className="border-gray-300 my-2" />

            {/* Social Links */}
            <div className="flex flex-col gap-2">
                <div className="relative group">
                    <Link href="https://github.com/CodeBy-ParthKhambhadiya" target="_blank" className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-800 text-white hover:bg-gray-900 transition">
                        <FaGithub size={20} />
                    </Link>
                    <span className="absolute left-full top-1/2 transform -translate-y-1/2 ml-2 px-3 py-1 rounded bg-gray-800 text-white opacity-0 group-hover:opacity-100 whitespace-nowrap transition-all duration-300">
                        GitHub
                    </span>
                </div>

                <div className="relative group">
                    <Link href="https://www.linkedin.com/in/parth-khambhadiya-214563224" target="_blank" className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition">
                        <FaLinkedin size={20} />
                    </Link>
                    <span className="absolute left-full top-1/2 transform -translate-y-1/2 ml-2 px-3 py-1 rounded bg-gray-800 text-white opacity-0 group-hover:opacity-100 whitespace-nowrap transition-all duration-300">
                        LinkedIn
                    </span>
                </div>

                <div className="relative group">
                    <Link href="mailto:parthkhambhadiya2310@gmail.com" className="flex items-center justify-center w-12 h-12 rounded-full bg-red-500 text-white hover:bg-red-600 transition">
                        <FaEnvelope size={20} />
                    </Link>
                    <span className="absolute left-full top-1/2 transform -translate-y-1/2 ml-2 px-3 py-1 rounded bg-gray-800 text-white opacity-0 group-hover:opacity-100 whitespace-nowrap transition-all duration-300">
                        Email
                    </span>
                </div>

                <div className="relative group">
                    <Link href="https://twitter.com/your-username" target="_blank" className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-400 text-white hover:bg-blue-500 transition">
                        <FaTwitter size={20} />
                    </Link>
                    <span className="absolute left-full top-1/2 transform -translate-y-1/2 ml-2 px-3 py-1 rounded bg-gray-800 text-white opacity-0 group-hover:opacity-100 whitespace-nowrap transition-all duration-300">
                        Twitter
                    </span>
                </div>
            </div>

        </div>
    );
}
