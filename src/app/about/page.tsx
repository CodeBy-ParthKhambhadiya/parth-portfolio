'use client';
import React from 'react';

// Define the type for each milestone
interface Milestone {
  year: string;
  title: string;
  description: string;
}

const milestones: Milestone[] = [
  { year: '2018', title: 'Learned Basics', description: 'Learned basic C, C++, Java, HTML, and CSS.' },
  { year: '2019', title: 'Advanced Java & DBMS', description: 'Gained advanced knowledge of Java and Database Management Systems (MySQL, Oracle).' },
  { year: '2020', title: 'PHP & JavaScript', description: 'Learned PHP for server-side programming and JavaScript for dynamic web development. Built basic CRUD applications with PHP and MySQL.' },
  { year: '2021', title: 'Advanced PHP & MySQL', description: 'Deepened PHP skills and built complex web applications using PHP and MySQL, including database design, queries, and form handling.' },
  { year: '2022', title: 'Python Basics', description: 'Started learning Python programming.' },
  { year: '2024', title: 'Internship at Logicwind', description: 'Worked as PHP and WordPress developer. Built InstaPlug WordPress plugin using GraphQL APIs in 6 months, integrated PHP backend with MySQL database.' },
  { year: '2025', title: 'Internship & Full-time Job at HMR Technology', description: 'Worked as a full-stack developer. Learned React, TypeScript, Next.js, and PostgreSQL while working on live projects. Continued using PHP & MySQL for backend tasks when needed.' },
];

export default function AboutTimeline() {
  const midpoint = Math.ceil(milestones.length / 2); // Split into two halves
  const leftMilestones = milestones.slice(0, midpoint);
  const rightMilestones = milestones.slice(midpoint);

  // Use the Milestone type instead of any
  const renderMilestone = (m: Milestone) => (
    <div key={m.year} className="mb-12 relative">
      <div className="bg-white p-6 rounded-xl shadow-lg relative">
        <span className="absolute top-1/2 -left-4 transform -translate-y-1/2 w-8 h-8 bg-blue-500 rounded-full border-4 border-white"></span>
        <h2 className="text-xl font-semibold text-gray-900">{m.year}</h2>
        <h3 className="text-lg font-medium text-gray-700">{m.title}</h3>
        <p className="text-gray-600 mt-2">{m.description}</p>
      </div>
    </div>
  );

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-16">
      <h1 className="text-4xl font-bold text-center mb-16">My Journey</h1>

      <section className="max-w-6xl mx-auto relative flex justify-center">
        {/* Center vertical line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-blue-300"></div>

        {/* Left column */}
        <div className="w-1/2 pr-6">
          {leftMilestones.map(renderMilestone)}
        </div>

        {/* Right column */}
        <div className="w-1/2 pl-6">
          {rightMilestones.map(renderMilestone)}
        </div>
      </section>
    </main>
  );
}
