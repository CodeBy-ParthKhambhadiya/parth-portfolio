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


export default function BlogPage() {
    return (
        <main className="flex flex-col items-center pl-12 pr-0 py-16 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen">
            <section className="w-full max-w-5xl text-center">
                      <h1 className=" mb-1 text-4xl font-bold text-center">My Blog</h1>
    <p className="text-gray-700 text-lg md:text-xl mb-16">
                    Thoughts, tutorials, and experiences from my dev journey 
                </p>
                {/* <h1 className="text-5xl font-extrabold mb-4 text-gray-900"></h1> */}
            
            </section>

            <section>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                    {blogPosts.map((post, index) => (
                        <motion.article
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-white p-6 rounded-3xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 flex flex-col"
                        >
                            <h2 className="text-2xl font-bold mb-2 text-gray-900">{post.title}</h2>
                            <p className="text-gray-500 text-sm mb-3">{post.date}</p>

                            {/* Summary with 4-line clamp */}
                            <p className="text-gray-700 mb-4 flex-1 line-clamp-4">
                                {post.summary}
                            </p>

                            {/* Right-aligned button without extra wrapper */}
                            <Link
                                href={`/blog/${post.slug}`}
                                className="mt-auto w-full px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition text-center"
                            >
                                Read More
                            </Link>
                        </motion.article>
                    ))}
                </div>
            </section>

        </main>
    );
}
