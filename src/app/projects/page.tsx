'use client';

import React, { JSX, useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { AnimatePresence, motion } from 'framer-motion';
import { FaGithub } from "react-icons/fa";
import { GiCelebrationFire } from "react-icons/gi";


interface Project {
  title: string;
  github?: string; // optional GitHub link
  live?: string;
  description: string;
  important: boolean; // new field to mark important projects
  details?: JSX.Element;
  githubLinks?: { label: string; url: string }[]; // optional array of GitHub links with labels
}

export default function ProjectsPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const projects: Project[] = [


    {
      title: "Easy Exam Web",
      github: "",
      important: true,
      live: "",
      description: "A web application for students to take exams online, with dynamic scoring and analytics features.",
      details: (
        <div className="mt-2 text-gray-700 space-y-2 text-sm md:text-base">
          <h4 className="font-semibold">Project Overview</h4>
          <p>
            A full-stack web application to manage online exams with three panels:
            <strong>Admin</strong>, <strong>Teacher</strong>, and <strong>Student</strong>.
          </p>

          <h4 className="font-semibold mt-2">1. Technology Stack</h4>
          <ul className="list-disc list-inside">
            <li>Frontend: HTML5, CSS3, JavaScript</li>
            <li>Backend: PHP</li>
            <li>Database: MySQL</li>
            <li>Optional: Bootstrap for responsive design</li>
          </ul>

          <h4 className="font-semibold mt-2">2. Panels & Features</h4>

          <strong>Admin Panel:</strong>
          <ul className="list-disc list-inside ml-4">
            <li>Manage teachers and students accounts (CRUD operations).</li>
            <li>Create and manage exams, categories, and question banks.</li>
            <li>View exam analytics and student performance reports.</li>
          </ul>

          <strong>Teacher Panel:</strong>
          <ul className="list-disc list-inside ml-4">
            <li>Create MCQ questions and assign them to exams.</li>
            <li>Manage exam schedules and duration.</li>
            <li>Monitor student submissions and scores.</li>
          </ul>

          <strong>Student Panel:</strong>
          <ul className="list-disc list-inside ml-4">
            <li>Take assigned exams within a time limit.</li>
            <li>Real-time question navigation with next/previous buttons.</li>
            <li>View instant results and analytics after submission.</li>
          </ul>

          <h4 className="font-semibold mt-2">3. Key Functionalities</h4>
          <ul className="list-disc list-inside">
            <li>Secure login for admin, teacher, and student roles.</li>
            <li>CRUD operations for exams, questions, and users.</li>
            <li>Dynamic scoring system with instant result calculation.</li>
            <li>Responsive UI for desktop and mobile devices.</li>
            <li>Search and filter questions or exams by category.</li>
          </ul>

          <h4 className="font-semibold mt-2">4. Tech Summary</h4>
          <ul className="list-disc list-inside">
            <li>Frontend: HTML, CSS, JavaScript, Bootstrap</li>
            <li>Backend: PHP</li>
            <li>Database: MySQL</li>
            <li>Roles: Admin, Teacher, Student</li>
            <li>Features: CRUD, Exam scheduling, Scoring & Analytics</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Shopping Platform",
      github: "",
      important: true,
      live: "",
      description: "A PHP-based online marketplace supporting sellers and buyers with full product management features.",
      details: (
        <div className="mt-2 text-gray-700 space-y-2 text-sm md:text-base">
          <h4 className="font-semibold">1. User Roles</h4>
          <ul className="list-disc list-inside">
            <li>Seller: Add, edit, delete, enable/disable products and manage orders.</li>
            <li>Buyer: Browse products, add to cart, checkout, and manage profile.</li>
          </ul>

          <h4 className="font-semibold mt-2">2. Product Management</h4>
          <ul className="list-disc list-inside">
            <li>Create and manage product categories and sub-categories.</li>
            <li>Add, edit, delete, enable/disable products.</li>
            <li>Upload multiple images per product with bulk image management.</li>
            <li>Batch operations: multiple delete, bulk updates.</li>
          </ul>

          <h4 className="font-semibold mt-2">3. Features & Functionality</h4>
          <ul className="list-disc list-inside">
            <li>Search, filter, and sort products.</li>
            <li>Cart and checkout system with order tracking.</li>
            <li>Seller dashboard: Manage products, view orders, analytics.</li>
            <li>Buyer dashboard: Order history, wishlist, profile management.</li>
            <li>Email notifications for order updates and account activity.</li>
          </ul>

          <h4 className="font-semibold mt-2">4. Tech Stack Summary</h4>
          <ul className="list-disc list-inside">
            <li>Backend: PHP (procedural or OOP as needed)</li>
            <li>Database: MySQL</li>
            <li>Frontend: HTML, CSS, JavaScript</li>
            <li>Authentication & Authorization: Session-based login, role management</li>
            <li>Image Handling: Multiple image upload & management</li>
          </ul>
        </div>
      ),
    },
    {
      title: "InstaPlug WordPress Plugin",
      github: "",
      important: true,
      live: "https://instaplug.app/embed-instagram-feed-in-wordpress",
      description: "A custom WordPress plugin for seamless Instagram integration and content embedding on websites.",
      details: (
        <div className="mt-2 text-gray-700 space-y-2 text-sm md:text-base">

          <h4 className="font-semibold">1. Purpose</h4>
          <ul className="list-disc list-inside ml-4">
            <li>Fetch and display Instagram content (photos, reels) directly on a WordPress site.</li>
            <li>Provide frontend display with custom CSS styling to match website theme.</li>
            <li>Allow social login/connect and easy content management from WordPress backend.</li>
          </ul>

          <h4 className="font-semibold mt-2">2. Core Features</h4>
          <strong>Instagram Integration</strong>
          <ul className="list-disc list-inside ml-4">
            <li>Fetch all photos and reels via Instagram Graph API.</li>
            <li>Display posts in grid or carousel layouts.</li>
            <li>Filter content by type or hashtags.</li>
          </ul>
          <strong>Facebook & Google Integration</strong>
          <ul className="list-disc list-inside ml-4">
            <li>Option to connect Facebook account and fetch posts.</li>
            <li>Optional Google account integration for additional content or login.</li>
          </ul>
          <strong>Frontend Display</strong>
          <ul className="list-disc list-inside ml-4">
            <li>Fully customizable UI using custom CSS.</li>
            <li>Responsive and mobile-friendly design.</li>
            <li>Optional hover effects, lightbox view, and carousel sliders.</li>
          </ul>
          <strong>WordPress Admin Features</strong>
          <ul className="list-disc list-inside ml-4">
            <li>Plugin settings page in WordPress Dashboard.</li>
            <li>Connect Instagram/Facebook/Google accounts securely.</li>
            <li>Configure display settings: posts count, layout, styling options.</li>
            <li>Cache content for performance optimization.</li>
          </ul>

          <h4 className="font-semibold mt-2">3. Backend (WordPress + GraphQL API)</h4>
          <ul className="list-disc list-inside ml-4">
            <li>Plugin folder in <code>wp-content/plugins/instaplug/</code>.</li>
            <li>PHP backend handles plugin initialization, admin settings, API requests.</li>
            <li>Secure OAuth tokens and API keys for Instagram/Facebook/Google.</li>
            <li>GraphQL queries fetch user content and handle pagination.</li>
            <li>Optional data transformation for frontend rendering.</li>
          </ul>

          <h4 className="font-semibold mt-2">4. Frontend (Plugin UI)</h4>
          <ul className="list-disc list-inside ml-4">
            <li>Shortcode <code>[instaplug_feed]</code> to display content in posts/pages.</li>
            <li>Optional Gutenberg block for drag-and-drop placement.</li>
            <li>React/JS frontend can fetch data via AJAX/REST endpoints without page reload.</li>
            <li>Custom CSS for styling, responsive layouts, and theme compatibility.</li>
            <li>Interactive features: hover effects, lightbox, carousel sliders (Swiper.js or Slick).</li>
          </ul>

          <h4 className="font-semibold mt-2">5. Tech Stack Summary</h4>
          <ul className="list-disc list-inside ml-4">
            <li>Backend: PHP, WordPress, GraphQL API</li>
            <li>Frontend: HTML, CSS, JS, React (optional)</li>
            <li>Plugins & Libraries: Swiper.js, Slick Carousel</li>
            <li>Authentication: OAuth 2.0 for Instagram/Facebook/Google</li>
            <li>Responsive design & custom CSS for theming</li>
          </ul>
        </div>
      ),
    },
    {
      title: "E-commerce",
      github: "",
      important: true,
      githubLinks: [

        { label: "ecommerce-frontend", url: "https://github.com/CodeBy-ParthKhambhadiya/ecommerce-frontend" },
        { label: "ecommerce-backend", url: "https://github.com/CodeBy-ParthKhambhadiya/ecommerce-backend" },
        { label: "ts-ecommerce-frontend", url: "https://github.com/CodeBy-ParthKhambhadiya/ts-ecommerce-frontend" },
        { label: "ts-ecommerce-backend", url: "https://github.com/CodeBy-ParthKhambhadiya/ts-ecommerce-backend" },
      ],
      live: "",
      description: "An online store with product listings, shopping cart, and checkout functionality using React.",
      details: (
        <div className="mt-2 text-gray-700 space-y-2 text-sm md:text-base">
          <h4 className="font-semibold">1. Frontend (React + TypeScript + Redux)</h4>
          <ul className="list-disc list-inside">
            <li>React for building UI components.</li>
            <li>TypeScript for type safety.</li>
            <li>Redux Toolkit for state management (cart, products, orders).</li>
            <li>React Router for navigation & protected routes.</li>
            <li>Axios/fetch for API calls.</li>
          </ul>

          <h4 className="font-semibold mt-2">2. Backend (Node.js + PostgreSQL + Sequelize)</h4>
          <ul className="list-disc list-inside">
            <li>Node.js + Express.js for RESTful APIs.</li>
            <li>Sequelize ORM with PostgreSQL for database.</li>
            <li>APIs for users, products, cart, orders.</li>
            <li>JWT-based authentication & role-based authorization.</li>
            <li>Error handling middleware for consistent responses.</li>
          </ul>

          <h4 className="font-semibold mt-2">3. Features & Functionality</h4>
          <ul className="list-disc list-inside">
            <li>User features: Browse, cart, checkout, profile management.</li>
            <li>Admin features: CRUD products, manage orders, view users.</li>
            <li>Extra features: Search, pagination, payment integration, email notifications.</li>
          </ul>

          <h4 className="font-semibold mt-2">4. Tech Stack Summary</h4>
          <ul className="list-disc list-inside">
            <li>Frontend: React, TypeScript, Redux, React Router</li>
            <li>Backend: Node.js, Express.js, Sequelize</li>
            <li>Database: PostgreSQL</li>
            <li>State Management: Redux Toolkit</li>
            <li>API Calls: Axios / Fetch</li>
            <li>Auth: JWT, bcrypt</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Pixen Interactive Tools",
      important: false,
      github: "https://github.com/CodeBy-ParthKhambhadiya/pixen-interactive-tools",
      live: "https://pixen-interactive-tools.vercel.app/", // replace with actual live link
      description: "A minimal toolkit for playing with pixels and design. Perfect for creative experiments, graphics, or image-based projects.",
      details: (
        <div className="mt-2 text-gray-700 space-y-2 text-sm md:text-base">

          <h4 className="font-semibold">1. Purpose</h4>
          <p>- Provides tools to experiment with pixel-based designs and interactive graphics.</p>
          <p>- Allows users to quickly test ideas, scan text, and simulate AI chats.</p>

          <h4 className="font-semibold mt-2">2. Tools & Features</h4>
          <ul className="list-disc list-inside">
            <li>Text Scanner: Upload and extract text from images.</li>
            <li>Quick AI Chat Simulator: Test conversational AI quickly.</li>
            <li>Emoji AI Chat Simulator: Play with AI responses in emoji form.</li>
            <li>Pixel Playground: Experiment with pixel art and designs interactively.</li>
            <li>Copy & Reuse: Easily copy generated content for your projects.</li>
          </ul>

          <h4 className="font-semibold mt-2">3. Frontend & UI</h4>
          <ul className="list-disc list-inside">
            <li>Responsive UI for desktop and mobile.</li>
            <li>Minimalistic design for better focus on tools.</li>
            <li>Interactive elements with immediate feedback.</li>
          </ul>

          <h4 className="font-semibold mt-2">4. Tech Stack Summary</h4>
          <ul className="list-disc list-inside">
            <li>Frontend: Next.js, React</li>
            <li>Styling: Tailwind CSS</li>
            <li>State Management: useState / useContext</li>
            <li>File Handling: Browser File API for uploads</li>
            <li>Animations & Interactivity: Framer Motion / CSS transitions</li>
            <li>Deployment: Vercel</li>
          </ul>

        </div>
      ),
    },
    {
      title: "Portfolio Website",
      github: "https://github.com/CodeBy-ParthKhambhadiya/parth-portfolio",
      important: false,
      live: "https://parth-portfolio-eosin.vercel.app/",
      description: "A personal portfolio to showcase my projects and skills, built with Next.js and Tailwind CSS.",
      details: (
        <div className="mt-2 text-gray-700 space-y-2 text-sm md:text-base">
          <h4 className="font-semibold">1. Purpose</h4>
          <p>- Showcases projects, skills, experience, and contact information.</p>
          <p>- Creates an online presence and demonstrates frontend development skills.</p>

          <h4 className="font-semibold mt-2">2. Frontend (Next.js + Tailwind CSS)</h4>
          <ul className="list-disc list-inside">
            <li>Next.js for React-based SSR/SSG.</li>
            <li>TypeScript (optional) for type safety.</li>
            <li>Tailwind CSS for responsive, modern design.</li>
            <li>Responsive layouts for mobile, tablet, and desktop.</li>
          </ul>
          <p>Pages / Sections include: Home, About Me, Projects, Resume, Contact, Navigation.</p>

          <h4 className="font-semibold mt-2">3. Features & Functionality</h4>
          <ul className="list-disc list-inside">
            <li>Dynamic Rendering: SSG/SSR pages.</li>
            <li>Animations: Smooth scroll, hover effects, skill bars.</li>
            <li>Contact Form: Validation + EmailJS API integration.</li>
            <li>Performance & SEO: Fast load, meta tags, Open Graph tags.</li>
            <li>Responsive Design: Works on all devices.</li>
          </ul>

          <h4 className="font-semibold mt-2">4. Tech Stack Summary</h4>
          <ul className="list-disc list-inside">
            <li>Frontend: Next.js, React</li>
            <li>Styling: Tailwind CSS</li>
            <li>Forms & Email: EmailJS or API integration</li>
            <li>State Management: useState / useContext (if needed)</li>
            <li>Animations: Framer Motion / CSS transitions</li>
            <li>Deployment: Vercel</li>
          </ul>
        </div>
      ),
    },
  ];


  return (
    <main className="flex flex-col items-center px-10 py-20 bg-gradient-to-b from-gray-50 to-gray-100">
      <section className="w-full max-w-7xl text-center mb-16">
        <h1 className=" mb-1 text-4xl font-bold text-center">My Projects</h1>
        <p className="text-gray-700 text-lg md:text-xl">
          Click <span className="font-semibold">+</span> to explore each project.
        </p>
      </section>

      {/* Wider vertical list */}
      <section className="w-full max-w-7xl space-y-12">
        {projects.map((project, index) => {
          const isOpen = openIndex === index;

          return (
            <motion.article
              key={index}
              layout
              onClick={() => toggleOpen(index)}
              className={`bg-white rounded-3xl shadow-lg p-10 cursor-pointer transition-all duration-300 
              ${isOpen ? 'scale-105 shadow-2xl z-10' : 'opacity-90 hover:opacity-100'}
            `}
            >
              <div className="flex justify-between items-start flex-wrap gap-4">
                <div className="flex-1 min-w-[250px] pr-6">

                  {/* Project Title */}
                  <div className="flex items-center gap-3">
                    <h3
                      className={`text-2xl md:text-3xl font-bold mb-3 ${'text-gray-800'
                        }`}
                    >
                      {project.title}
                    </h3>

                    {project.important && (
                      <span className="inline-flex items-center justify-center w-6 h-6 mb-3 bg-red-600 text-white rounded-full">
                        <GiCelebrationFire className="w-4 h-4" />
                      </span>
                    )}
                  </div>



                  {/* GitHub & Live Links */}
                  <div className="mt-2 flex gap-3 flex-wrap">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition"
                      >
                        <FaGithub className="text-lg" />
                        <span>
                          <strong>GitHub:</strong> Repository
                        </span>
                      </a>
                    )}

                    {project.githubLinks?.map((link, i) => (
                      <a
                        key={i}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition"
                      >
                        <FaGithub className="text-lg" />
                        <span>
                          <strong>GitHub:</strong> {link.label}
                        </span>
                      </a>
                    ))}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                      >
                        Live Demo
                      </a>
                    )}
                  </div>


                </div>

                {project.details && (
                  <button
                    onClick={(e) => { e.stopPropagation(); toggleOpen(index); }}
                    className="ml-4 p-4 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg hover:from-blue-600 hover:to-indigo-600 transition cursor-pointer"
                  >
                    {isOpen ? <FaMinus /> : <FaPlus />}
                  </button>
                )}
              </div>

              <AnimatePresence>
                {isOpen && project.details && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4 }}
                    className="mt-6 border-t border-gray-200 pt-6 text-gray-700 text-base md:text-lg leading-relaxed"
                  >
                    {project.details}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.article>
          );
        })}
      </section>
    </main>
  );


}
