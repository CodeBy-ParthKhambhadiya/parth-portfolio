'use client';

import { useState } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';

interface Post {
    title: string;
    date: string;
    content: string;
}


const posts: Record<string, Post> = {
  'wordpress-plugin-graphql': {
    title: 'Building a Custom WordPress Plugin with GraphQL',
    date: '2025-09-20',
    content: `
In this post, I explain how I built a custom WordPress plugin that integrates Instagram content using the GraphQL API. 

I started by exploring the WordPress plugin architecture and setting up a development environment. 
Then, I focused on creating a seamless frontend interface with custom CSS and JavaScript for better user interaction. 

Key steps included:
- Setting up GraphQL queries to fetch Instagram posts and reels.
- Handling API authentication and social media integration.
- Styling the plugin frontend to match modern UI standards.
- Testing the plugin with various user accounts to ensure smooth performance.

By the end, I had a fully functional plugin capable of displaying dynamic Instagram content within WordPress, complete with frontend customizations and social media connectivity.
    `,
  },

  'why-nextjs': {
    title: 'Why I Switched My Portfolio to Next.js',
    date: '2025-08-10',
    content: `
This post dives into my decision to migrate my personal portfolio from React to Next.js for enhanced performance and SEO. 

Challenges I faced in React included:
- Slower initial page load due to client-side rendering.
- Difficulty with SEO optimization for search engines.
- Limited flexibility in server-side data fetching.

Benefits of switching to Next.js:
- Server-side rendering (SSR) for faster load times.
- Static site generation (SSG) for SEO-friendly pages.
- Built-in API routes for backend integration.

I also implemented new features such as dynamic routing, improved UI responsiveness, and better project organization, making the portfolio faster, more maintainable, and more professional.
    `,
  },

  'tailwind-css-tips': {
    title: 'Mastering Tailwind CSS for Modern UI Design',
    date: '2025-07-05',
    content: `
In this article, I share my tips and tricks for building modern, responsive UIs using Tailwind CSS. 

I cover:
- Utility classes for spacing, typography, and colors.
- Building reusable components for consistent design.
- Responsive design techniques for mobile-first layouts.
- Customizing Tailwind themes to match branding requirements.

I also include real-world examples, like creating a fully responsive portfolio card and navigation bar using Tailwind utilities. 
By mastering Tailwind CSS, I was able to speed up my development workflow and maintain design consistency across projects.
    `,
  },

  'mcq-exam-js': {
    title: 'Creating Interactive MCQ Exams with JavaScript',
    date: '2025-06-15',
    content: `
This tutorial walks through creating a multiple-choice exam system using pure JavaScript.

Key topics include:
- Structuring questions and answers using arrays and objects.
- Implementing dynamic rendering to display one question at a time.
- Tracking user answers and calculating scores in real-time.
- Adding feedback for correct and incorrect answers.

I also explain challenges such as managing state between questions and optimizing performance for large question sets. 
By the end, you can build a fully interactive MCQ exam app that works directly in the browser without any backend.
    `,
  },

  'vercel-deployment': {
    title: 'Deploying Your Portfolio on Vercel',
    date: '2025-05-30',
    content: `
Learn how to deploy React or Next.js projects on Vercel for free, with seamless integration.

Steps covered:
- Connecting a GitHub repository to Vercel.
- Setting up environment variables and secret keys.
- Configuring custom domains for production deployment.
- Enabling automatic deployments on push to main branch.

I also share tips for troubleshooting common deployment issues, like build errors and incorrect routing. After following this process, your portfolio or web app is live and production-ready in minutes.
    `,
  },

  'emailjs-contact-form': {
    title: 'Integrating EmailJS for Contact Forms',
    date: '2025-05-10',
    content: `
This guide explains how to add a fully functional contact form to your website using EmailJS.

Covered topics:
- Form validation and error handling.
- Connecting the form to EmailJS service.
- Sending emails from frontend without a backend server.
- Styling forms for a professional appearance.

I also demonstrate sending attachments and customizing email templates. By the end, you can have a secure, fully operational contact form integrated into your site.
    `,
  },

  'react-resume-design': {
    title: 'Designing Resume Pages with React',
    date: '2025-04-25',
    content: `
In this article, I discuss creating interactive resume pages using React.

Highlights include:
- Building reusable components for experience, skills, and education sections.
- Adding animations and hover effects for better UX.
- Generating downloadable PDFs from resume data.
- Responsive layouts for mobile and desktop screens.

I provide practical examples and code snippets to make resumes both functional and visually appealing.
    `,
  },

  'website-animations': {
    title: 'Adding Animations to Your Website',
    date: '2025-04-05',
    content: `
Learn how to make your website more dynamic using animations.

Topics include:
- CSS transitions for hover effects.
- JavaScript scroll-triggered animations.
- Combining animations with React and Tailwind CSS.
- Performance considerations and optimization.

I include examples like animated buttons, fading content sections, and smooth page transitions to enhance user engagement.
    `,
  },

  'graphql-wordpress-intro': {
    title: 'Getting Started with GraphQL in WordPress',
    date: '2025-03-20',
    content: `
An introduction to GraphQL in WordPress.

I cover:
- Setting up GraphQL endpoints in WordPress.
- Fetching posts, pages, and custom post types.
- Comparing REST API vs GraphQL for efficiency.
- Using GraphQL queries in frontend applications.

By learning GraphQL, you can fetch only the data you need, improving site performance and reducing server load.
    `,
  },

  'responsive-design-tips': {
    title: 'Responsive Design Best Practices',
    date: '2025-03-05',
    content: `
This post shares essential techniques for responsive web design.

Covered topics:
- Using media queries and breakpoints.
- Fluid layouts and flexible images.
- Mobile-first design strategies.
- Cross-browser testing and optimization.

Following these practices ensures your website looks great on all devices and provides a better user experience.
    `,
  },

  // Learning journey posts with expanded content
  'ielts-6-month-journey': {
    title: '6-Month IELTS Preparation Journey',
    date: '2025-02-01',
    content: `
Documenting my 6-month journey preparing for the IELTS exam, strategies I used, daily routines, and tips for achieving a high score.

During this period, I also dedicated my free time to learning web development. I focused on:
- React: Understanding components, state management, hooks, and building small projects.
- Node.js: Learning backend fundamentals, creating simple APIs, and connecting to databases.
- MongoDB: Practicing database operations and integrating with Node.js applications.

I also practiced time management and balancing language learning with coding exercises. 
This dual approach helped me stay productive, learn effectively, and improve both my English skills and programming knowledge simultaneously.
    `,
  },

  'react-node-mongo-2-months': {
    title: 'Learning React, Node.js, and MongoDB in 2 Months',
    date: '2025-08-01',
    content: `
I dedicated 2 months to learning full-stack development using React, Node.js, and MongoDB.

During this period:
- Built multiple small projects like a todo app, weather dashboard, and basic blog.
- Explored frontend-backend integration using REST APIs.
- Practiced authentication, database connections, and CRUD operations.
- Learned to debug code effectively and follow best practices.

By the end, I was confident in building full-stack applications, connecting React frontend with Node.js backend and MongoDB database efficiently.
    `,
  },

  'typescript-nextjs-1-month': {
    title: '1-Month TypeScript and Next.js Deep Dive',
    date: '2025-10-01',
    content: `
Spent one month mastering TypeScript and Next.js to improve code quality, scalability, and performance.

Key activities:
- Migrated existing React projects to Next.js with TypeScript.
- Implemented static site generation (SSG) and server-side rendering (SSR).
- Learned strict typing, interfaces, and type-safe data handling.
- Built SEO-friendly pages and dynamic routes.

This month helped me write cleaner, more maintainable code and understand how Next.js improves web performance and scalability.
    `,
  },

  'nextjs-live-project-4-months': {
    title: '4-Month Live Project with Next.js',
    date: '2025-11-01',
    content: `
Worked on a real-world, production-level project for 4 months using Next.js.

Highlights:
- Frontend: Created responsive UI with Tailwind CSS, interactive components, and dynamic pages.
- Backend: Developed API routes, integrated database, handled authentication and authorization.
- Challenges: Learned to optimize performance, manage code quality, and debug complex issues.
- Outcome: Successfully deployed a fully functional live project, improving my full-stack development skills and understanding real-world production requirements.

This project consolidated my knowledge from previous months and gave me practical experience with full-stack Next.js development.
    `,
  },
};

export default function BlogPost({ params }: { params: { slug: string } }) {
    // Hook must be at the top level
    const [showMore, setShowMore] = useState(false);

    const post = posts[params.slug];
    if (!post) return notFound();

    // Preview: show first 2 lines
    const preview = post.content.split('\n').slice(0, 2).join('\n');

    return (
        <main className="max-w-3xl mx-auto px-6 py-16">
            {/* Back button */}
            <Link
                href="/blog"
                className="inline-block mb-6 px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition"
            >
                ← Back
            </Link>

            {/* Post header */}
            <h1 className="text-4xl font-bold mb-2 text-gray-900">{post.title}</h1>
            <p className="text-gray-500 mb-6">{post.date}</p>

            {/* Post content */}
            <article className="text-gray-800 leading-relaxed whitespace-pre-line mb-6">
                {showMore ? post.content : preview}
            </article>

            {/* Read More / Show Less button */}
            {post.content.split('\n').length > 2 && (
                <button
                    onClick={() => setShowMore(!showMore)}
                    className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition text-center"
                >
                    {showMore ? 'Show Less' : 'Read More'}
                </button>
            )}
        </main>
    );
}