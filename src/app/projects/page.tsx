'use client';

import React from "react";

interface Project {
  title: string;
  description: string;
}

const projects: Project[] = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio to showcase my projects and skills, built with Next.js and Tailwind CSS.",
  },
  {
    title: "E-commerce Store",
    description: "An online store with product listings, shopping cart, and checkout functionality using React.",
  },
  {
    title: "Easy Exam Web",
    description: "A web application for students to take exams online, with dynamic scoring and analytics features.",
  },
  {
    title: "InstaPlug WordPress Plugin",
    description: "A custom WordPress plugin for seamless Instagram integration and content embedding on websites.",
  },
];

export default function ProjectsPage() {
  return (
    <main className="flex flex-col items-center px-4 py-12 bg-gray-50">
      <section className="w-full max-w-4xl text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 animate-fadeIn">
          My Projects
        </h1>
        <p className="text-gray-700 mb-8 text-md md:text-lg animate-fadeIn">
          Here are some of the projects I have worked on. Each project demonstrates my skills in frontend and backend development, showcasing my ability to build responsive and interactive web applications.
        </p>
      </section>

      <section className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <article
            key={index}
            className="p-6 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-1 animate-fadeIn"
          >
            <h3 className="text-2xl font-semibold mb-2 text-gray-900">{project.title}</h3>
            <p className="text-gray-700 text-sm md:text-base">{project.description}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
