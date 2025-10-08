'use client';

import { sliderSettings } from '@/components/Project/images';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import Slider from 'react-slick';

const blogPosts = [
    {
        title: 'Building a Custom WordPress Plugin with GraphQL',
        date: 'September 20, 2025',
        summary: 'Learn how I created a custom WordPress plugin that integrates Instagram content using GraphQL API. Step-by-step guide including frontend styling, API requests, and social media connectivity.',
        slug: 'wordpress-plugin-graphql',
    },
    {
        title: 'Why I Switched My Portfolio to Next.js',
        date: 'August 10, 2025',
        summary: 'A deep dive into migrating my personal website from plain React to Next.js for better performance, SEO, and server-side rendering benefits.',
        slug: 'why-nextjs',
    },
    {
        title: 'Mastering Tailwind CSS for Modern UI Design',
        date: 'July 5, 2025',
        summary: 'My top tips and tricks for building beautiful, responsive layouts with Tailwind CSS. Includes utilities, components, and responsive design best practices.',
        slug: 'tailwind-css-tips',
    },
    {
        title: 'Creating Interactive MCQ Exams with JavaScript',
        date: 'June 15, 2025',
        summary: 'Step-by-step guide on how to build a multiple-choice exam system using pure JavaScript, including question arrays, scoring, and dynamic content rendering.',
        slug: 'mcq-exam-js',
    },
    {
        title: 'Deploying Your Portfolio on Vercel',
        date: 'May 30, 2025',
        summary: 'Learn how to deploy your React or Next.js projects on Vercel for free, with custom domains, environment variables, and automatic Git integration.',
        slug: 'vercel-deployment',
    },
    {
        title: 'Integrating EmailJS for Contact Forms',
        date: 'May 10, 2025',
        summary: 'Guide to adding a functional contact form to your website using EmailJS, including validation, sending emails, and styling the form.',
        slug: 'emailjs-contact-form',
    },
    {
        title: 'Designing Resume Pages with React',
        date: 'April 25, 2025',
        summary: 'Tips and techniques for creating interactive resume components with React, including downloadable PDFs, responsive layouts, and clean styling.',
        slug: 'react-resume-design',
    },
    {
        title: 'Adding Animations to Your Website',
        date: 'April 5, 2025',
        summary: 'How to make your website more dynamic using CSS and JavaScript animations. Covers hover effects, scroll animations, and simple UI transitions.',
        slug: 'website-animations',
    },
    {
        title: 'Getting Started with GraphQL in WordPress',
        date: 'March 20, 2025',
        summary: 'An introduction to GraphQL in WordPress. Learn how to fetch posts, pages, and custom data efficiently compared to REST APIs.',
        slug: 'graphql-wordpress-intro',
    },
    {
        title: 'Responsive Design Best Practices',
        date: 'March 5, 2025',
        summary: 'Learn essential techniques for making your website look great on any device. Covers breakpoints, fluid layouts, and flexible images.',
        slug: 'responsive-design-tips',
    },

    // Added new blog posts for learning journey
    {
        title: '6-Month IELTS Preparation Journey',
        date: 'February 1, 2025',
        summary: 'Documenting my 6-month journey preparing for the IELTS exam, strategies I used, daily routines, and tips for achieving a high score.',
        slug: 'ielts-6-month-journey',
    },
    {
        title: 'Learning React, Node.js, and MongoDB in 2 Months',
        date: 'August 1, 2025',
        summary: 'A focused 2-month crash course on React, Node.js, and MongoDB. Covered fundamentals, CRUD apps, and connecting frontend to backend seamlessly.',
        slug: 'react-node-mongo-2-months',
    },
    {
        title: '1-Month TypeScript and Next.js Deep Dive',
        date: 'October 1, 2025',
        summary: 'Spent one month mastering TypeScript and Next.js to improve code quality, scalability, and performance in my web projects.',
        slug: 'typescript-nextjs-1-month',
    },
    {
        title: '4-Month Live Project with Next.js',
        date: 'November 1, 2025',
        summary: 'Worked on a real-world project for 4 months using Next.js, implementing full-stack features, API integration, and production-level best practices.',
        slug: 'nextjs-live-project-4-months',
    },
];

export function generateGradientFromSlug(slug: string): string {
    let hash = 0;
    for (let i = 0; i < slug.length; i++) {
        hash = slug.charCodeAt(i) + ((hash << 5) - hash);
    }

    const colorFromHash = (offset: number) => {
        const r = (hash >> (offset + 16)) & 0xff;
        const g = (hash >> (offset + 8)) & 0xff;
        const b = hash & 0xff;
        return `rgb(${r % 131 + 50}, ${g % 131 + 50}, ${b % 131 + 50})`;
    };

    return `linear-gradient(to bottom right, ${colorFromHash(0)}, ${colorFromHash(3)})`;
}

const layouts = [
    'Masonry',
    'Single Column',
    'Multi-Column',
    'Grid',
    'Flexbox',
    'Hero',
    'Magazine',
    'Full-Screen',
    'Slider',
    'Card Deck',
    'Timeline',
    'Pinterest',
    'Carousel',
    'List',
    'Feature Grid',
    'Square Grid', // added
];

export default function BlogPage() {
    const [layout, setLayout] = useState('Masonry');
    const [currentSlide, setCurrentSlide] = useState(0);

    const getLayoutClass = () => {
        switch (layout) {
            case 'Single Column': return 'columns-1';
            case 'Multi-Column': return 'columns-2 sm:columns-2 lg:columns-3';
            case 'Grid': return 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4';
            case 'Masonry': return 'columns-3 gap-4';
            case 'Flexbox': return 'flex flex-wrap gap-4';
            case 'Hero': return 'flex flex-col gap-6';
            case 'Magazine': return 'columns-2 sm:columns-3 gap-6';
            case 'Full-Screen': return 'grid grid-cols-1 gap-0';
            case 'Slider': return ''; // handled by slider
            case 'Card Deck': return 'flex flex-wrap gap-4 justify-center';
            case 'Timeline': return 'flex flex-col gap-6';
            case 'Pinterest': return 'columns-4 gap-4';
            case 'Carousel': return ''; // similar to slider
            case 'List': return 'flex flex-col gap-2';
            case 'Feature Grid': return 'grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6';
            case 'Square Grid': return 'grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4';
            default: return 'columns-1';
        }
    };

    const getPostClasses = () => {
        switch (layout) {
            case 'Grid':
            case 'Feature Grid':
            case 'Card Deck':
            case 'Pinterest':
            case 'Carousel':
            case 'Square Grid': return 'relative overflow-hidden shadow-lg flex flex-col justify-end p-4 text-white'; case 'Hero': return 'h-72 sm:h-96 flex items-end p-6 text-white rounded-xl';
            case 'Full-Screen': return 'h-screen flex items-center justify-center text-white text-center text-2xl font-bold';
            case 'Slider': return 'rounded-xl overflow-hidden shadow-lg p-4 text-white flex flex-col justify-end';
            case 'Timeline': return 'p-4 border-l-2 border-gray-300 relative';
            case 'List': return 'p-3 border-b border-gray-200';
            case 'Masonry': return 'break-inside-avoid mb-4 relative cursor-pointer flex items-end p-2 shadow-md hover:shadow-xl transition-shadow duration-300';
            default: return '';
        }
    };
    const totalSlides = blogPosts.length;

    return (
        <main className="flex flex-col items-center px-0 py-16 bg-gray-50 min-h-screen">
            {/* Header */}
            <section className="w-full max-w-6xl mb-6 flex justify-between items-center">
                {/* Left side: Title & subtitle */}
                <div className="text-left">
                    <h1 className="text-4xl font-bold mb-2">My Blog</h1>
                    <p className="text-gray-700 text-lg md:text-xl">
                        Thoughts, tutorials, and experiences from my dev journey
                    </p>
                </div>

                {/* Right side: Layout label + Dropdown */}
                <div className="flex items-center space-x-2">
                    <span className="font-bold">
                        Layout:
                    </span>
                    <select
                        value={layout}
                        onChange={(e) => setLayout(e.target.value)}
                        className="p-2 rounded-lg text-black bg-white border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                        {layouts.map((l) => (
                            <option key={l} value={l}>{l}</option>
                        ))}
                    </select>
                </div>
            </section>



            {/* Posts Section */}
            <section className="w-full max-w-6xl">
                {layout === 'Slider' ? (
                    <div className="relative w-full">
                        <Slider
                            {...sliderSettings}
                            afterChange={(index) => setCurrentSlide(index)}
                        >
                            {blogPosts.map((post) => {
                                const gradient = generateGradientFromSlug(post.slug);

                                return (
                                    <Link key={post.slug} href={`/blog/${post.slug}`}>
                                        <div
                                            style={{
                                                background: gradient,
                                                width: '100%',
                                                height: '500px',
                                            }}
                                            className="cursor-pointer relative overflow-hidden flex flex-col justify-end p-8 text-white"
                                        >
                                            <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
                                                <h2 className="text-4xl font-bold">{post.title}</h2>
                                                <p className="text-lg mt-2">{post.date}</p>
                                            </div>
                                        </div>
                                    </Link>
                                );
                            })}
                        </Slider>

                        {/* Slide counter in bottom-right corner */}
                        <div className="absolute bottom-4 right-4 bg-black bg-opacity-50 text-white px-4 py-2 rounded-md text-sm font-medium">
                            {currentSlide + 1} / {totalSlides}
                        </div>
                    </div>

                ) : (
                    <div className={`${getLayoutClass()}`}>
                        {blogPosts.map((post, index) => {
                            const gradient = generateGradientFromSlug(post.slug);

                            // Determine height
                            const height =
                                layout === 'Hero'
                                    ? undefined
                                    : layout === 'Full-Screen'
                                        ? '100vh'
                                        : layout === 'Grid' || layout === 'Square Grid' || layout === 'Feature Grid'
                                            ? '300px'
                                            : `${Math.floor(Math.random() * (600 - 150 + 1) + 150)}px`;

                            // For Square Grid, make width equal height
                            const size = layout === 'Square Grid' ? '300px' : undefined;

                            return (
                                <Link key={post.slug} href={`/blog/${post.slug}`}>
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        style={{ height, width: size, background: gradient }}
                                        className={`break-inside-avoid mb-4 relative cursor-pointer flex items-end p-2 shadow-md hover:shadow-xl transition-shadow duration-300 ${getPostClasses()}`}
                                    >
                                        <div className={layout === 'Full-Screen' ? 'w-full' : 'text-white'}>
                                            <h2 className="text-lg font-bold">{post.title}</h2>
                                            <p className="text-sm">{post.date}</p>
                                        </div>
                                    </motion.div>
                                </Link>
                            );
                        })}
                    </div>
                )}
            </section>
        </main>
    );
}