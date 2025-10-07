'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

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
function generateGradient(existingGradients: string[]): string {
    let gradient = "";
    do {
        // Generate two darker/mid-tone colors suitable for white text
        const randomColor = () => {
            const r = Math.floor(Math.random() * 131) + 50; // 50–180
            const g = Math.floor(Math.random() * 131) + 50;
            const b = Math.floor(Math.random() * 131) + 50;
            return `rgb(${r}, ${g}, ${b})`;
        };

        gradient = `linear-gradient(to bottom, ${randomColor()}, ${randomColor()})`;
    } while (existingGradients.includes(gradient));

    return gradient;
}
export default function BlogPage() {
    const usedGradients: string[] = [];

    return (
        <main className="flex flex-col items-center px-0 py-16 bg-gray-50 min-h-screen">
            <section className="w-full max-w-6xl text-center mb-12">
                <h1 className="text-4xl font-bold mb-2">My Blog</h1>
                <p className="text-gray-700 text-lg md:text-xl">
                    Thoughts, tutorials, and experiences from my dev journey
                </p>
            </section>

            <section className="w-full max-w-6xl">
                <div className="columns-1 sm:columns-2 lg:columns-3 gap-0">
                    {blogPosts.map((post, index) => {
                        const minHeight = 150;
                        const maxHeight = 600;
                        const randomHeight =
                            Math.floor(Math.random() * (maxHeight - minHeight + 1)) + minHeight;

                        // Generate a unique gradient
                        const gradient = generateGradient(usedGradients);
                        usedGradients.push(gradient);

                        return (
                            <Link key={index} href={`/blog/${post.slug}`}>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    style={{
                                        height: `${randomHeight}px`,
                                        background: gradient,
                                    }}
                                    className="break-inside-avoid mb-0 relative cursor-pointer flex items-end p-2 shadow-md hover:shadow-xl transition-shadow duration-300"
                                >
                                    <div className="text-white">
                                        <h2 className="text-lg font-bold">{post.title}</h2>
                                        <p className="text-sm">{post.date}</p>
                                    </div>
                                </motion.div>
                            </Link>
                        );
                    })}
                </div>
            </section>
        </main>
    );
}
