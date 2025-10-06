'use client';

import React, { useState } from 'react';
import { FaDownload, FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Resume() {
  const googleDriveLink =
    'https://drive.google.com/uc?export=download&id=11CQfcHFbU6Wu9mvYqt3Rh9NmRQb_wIWN';

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { staggerChildren: 0.2, duration: 0.6 }
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

const skills = [
  'C',
  'Java',
  'JavaScript',
  'TypeScript',
  'PHP',
  'Node.js',
  'React',
  'Next.js',
  'HTML5',
  'CSS3',
  'Bootstrap',
  'MySQL',
  'MongoDB',
  'PostgreSQL',
];
  const experience = [
    {
      role: 'Junior Web Developer',
      company: 'LOGICWIND, Surat',
      period: 'JAN 2024 - JUN 2024',
      details: [
        'Develop and implement interfaces using HTML, CSS, and JavaScript following best practices.',
        'Utilized database solutions and performed CRUD operations using MySQL or MongoDB.',
        'Conducted unit testing and debugging to identify and resolve issues, ensuring reliability.',
        'Built, customized, and maintained dynamic WordPress websites and plugins.',
        'Integrated GraphQL APIs for frontend data retrieval using modern JavaScript techniques.',
      ],
    },
  ];

  const projects = [
    {
      title: 'Easy Exam Web | B-Tech IT',
      period: 'JAN 2023 - SEP 2023',
      tech: 'HTML5, PHP, CSS, MySQL, JavaScript, Bootstrap',
      description: 'Developed a web application for managing MCQ exams for students, teachers, and departments.',
    },
    {
      title: 'InstaPlug - WordPress Plugin | LOGICWIND',
      period: 'MAR 2024 - JUN 2024',
      tech: 'WordPress, PHP, JavaScript, HTML, CSS',
      description: 'Developed a custom WordPress plugin to integrate Instagram widgets easily using shortcodes.',
    },
    {
      title: 'Shopping Cart Website | LOGICWIND',
      period: 'JAN 2024 - MAR 2024',
      tech: 'HTML5, PHP, CSS, MySQL, JavaScript, Bootstrap',
      description: 'Developed a dynamic shopping cart with category and product modules, CRUD operations, sorting, searching, multi-delete, active/deactive status, and responsive UI.',
    },
    {
      title: 'Node.js API Development with MongoDB and MySQL',
      period: 'JAN 2025 - CURRENT',
      tech: 'Node.js, MongoDB, MySQL',
      description: 'Developed backend APIs for CRUD operations and search functionalities using Node.js with MongoDB and MySQL.',
    },
  ];

  return (
    <motion.div
      className="max-w-7xl mx-auto p-8 bg-gray-50 rounded-xl shadow-lg"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Header */}
      <motion.div className="text-center mb-8" variants={itemVariants}>
        <h1 className="text-4xl font-bold text-gray-900">Parth Khambhadiya</h1>
        <div className="flex flex-col md:flex-row justify-center gap-4 mt-2 text-gray-600">
          <span className="flex items-center gap-2"><FaPhone /> 9327537382</span>
          <span className="flex items-center gap-2"><FaEnvelope /> parthkhambhadiya2310@gmail.com</span>
          <span className="flex items-center gap-2"><FaLinkedin /> <a href="http://www.linkedin.com/in/parth-khambhadiya-214563224" className="text-blue-600 underline">LinkedIn</a></span>
          <span className="flex items-center gap-2"><FaGithub /> <a href="https://github.com/Parth0045" className="text-blue-600 underline">GitHub</a></span>
        </div>
      </motion.div>

      {/* Education */}
      <motion.section className="mb-6" variants={itemVariants}>
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">Education</h2>
        <div className="space-y-3 text-gray-700">
          <div className="bg-white p-4 rounded-lg shadow">
            <p className="font-semibold">Chhotubhai Gopalbhai Patel Institute of Technology, Uka Tarsadia University, Surat, Gujarat</p>
            <p>B-Tech (IT), CGPA: 7.1/10 | JUN 2024</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <p className="font-semibold">Shree Dhanvantary College of Engineering and Technology, Gujarat Technological University, Surat, Gujarat</p>
            <p>Diploma of Engineering - Computer Engineering, CGPA: 8.43/10 | JUN 2021</p>
          </div>
        </div>
      </motion.section>

      {/* Skills */}
      <motion.section className="mb-6" variants={itemVariants}>
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">Technical Skills</h2>
        <div className="flex flex-wrap gap-2">
          {skills.map(skill => (
            <span key={skill} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">{skill}</span>
          ))}
        </div>
      </motion.section>

      {/* Experience */}
      <motion.section className="mb-6" variants={itemVariants}>
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">Professional Experience</h2>
        <div className="space-y-4">
          {experience.map((exp, idx) => (
            <div key={idx} className="bg-white p-4 rounded-lg shadow">
              <p className="font-semibold text-gray-900">{exp.role}</p>
              <p className="text-gray-600">{exp.company} | {exp.period}</p>
              <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">
                {exp.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Projects */}
      <motion.section className="mb-6" variants={itemVariants}>
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">Projects</h2>
        <div className="space-y-4">
          {projects.map((proj, idx) => (
            <div key={idx} className="bg-white p-4 rounded-lg shadow">
              <p className="font-semibold text-gray-900">{proj.title}</p>
              <p className="text-gray-600">{proj.period}</p>
              <p className="mt-1 text-gray-700">{proj.description}</p>
              <p className="mt-1 text-sm text-gray-500">Technologies: {proj.tech}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Download Button */}
      <motion.div className="flex justify-center mt-8" variants={itemVariants} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <a
          href={googleDriveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg flex items-center gap-3 hover:from-blue-700 hover:to-indigo-700 transition shadow-lg"
        >
          <FaDownload size={20} /> Download Resume
        </a>
      </motion.div>
    </motion.div>
  );
}
