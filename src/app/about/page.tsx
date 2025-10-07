'use client';
import React from 'react';

// Define the type for each milestone
interface Milestone {
  year: string;
  title: string;
  description: string;
}
const milestones: Milestone[] = [
   {
    year: '2018',
    title: 'Learned Basics',
    description: 'During college, covered fundamental programming languages: C, C++, Java, HTML, and CSS. Practiced basic coding exercises and small projects to strengthen problem-solving skills.'
  },
  {
    year: '2019',
    title: 'Advanced Java & DBMS',
    description: 'In college, gained advanced knowledge in Java and Database Management Systems (MySQL, Oracle). Completed practical assignments and mini-projects to apply concepts in real-world scenarios.'
  },
  {
    year: '2020',
    title: 'PHP & JavaScript',
    description: 'Learned PHP for backend development and JavaScript for dynamic web applications. Built basic CRUD applications using PHP & MySQL. Focused on integrating frontend and backend functionality through practical college projects.'
  },
  {
    year: '2021',
    title: 'Advanced PHP & MySQL',
    description: 'Developed complex web applications during college, emphasizing database design, queries, and form handling with PHP & MySQL. Completed larger projects, including multi-page websites and functional web apps, gaining hands-on experience.'
  },
  {
    year: '2022',
    title: 'Python Basics',
    description: 'During college, learned Python from scratch, covering all fundamental concepts. Performed practical exercises and small projects to strengthen understanding of programming basics and scripting.'
  },
  {
    year: '2022',
    title: 'Python Basics',
    description: 'During college, learned Python from scratch, covering all fundamental concepts. Performed practical exercises and small projects to strengthen understanding of programming basics and scripting.'
  },
  {
    year: '2024',
    title: 'Internship at Logicwind',
    description: 'Worked as a PHP & WordPress developer. Built the InstaPlug WordPress plugin using GraphQL APIs, integrating PHP backend with MySQL database over 6 months.'
  },
  {
    year: '2025',
    title: 'Internship & Full-time at HMR Technology',
    description: 'Full-stack developer role: React, TypeScript, Next.js, PostgreSQL, and MongoDB. Currently working on live projects for the last 4 months, contributing to both frontend and backend development.'
  }
];

export default function AboutTimeline() {
  const midpoint = Math.ceil(milestones.length / 2); // Split into two halves
  const leftMilestones = milestones.slice(0, midpoint);
  const rightMilestones = milestones.slice(midpoint);

  // Use the Milestone type instead of any
  const renderMilestone = (m: Milestone) => (
    <div key={m.year} className="mb-12 relative">
      <div className="bg-white p-6 rounded-xl shadow-lg relative">
        <span className="absolute top-1/2 -left-4 transform -translate-y-1/2 w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full border-4 border-white"></span>
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
