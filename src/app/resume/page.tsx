'use client';

import { FaDownload } from "react-icons/fa";

export default function ResumePage() {
  return (
    <section className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h1 className="text-3xl font-bold mb-2">Parth Khambhadiya</h1>
      <p className="text-gray-700 mb-4">
        229, Kavita Row House, Sarthana Jakatnaka, Surat • 9327537382 • parthkhambhadiya2310@gmail.com
      </p>
      <p className="text-blue-600 mb-6">
        LinkedIn: <a href="http://www.linkedin.com/in/parth-khambhadiya-214563224" target="_blank" className="underline">Profile</a> • 
        GitHub: <a href="https://github.com/Parth0045" target="_blank" className="underline">Profile</a>
      </p>

      {/* Education */}
      <h2 className="text-2xl font-semibold mt-4 mb-2">Education</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>
          Chhotubhai Gopalbhai Patel Institute of Technology, Uka Tarsadia University
          <br />
          B-Tech (IT) - Information Technology, CGPA: 7.1/10, Surat, Gujarat, JUN 2024
        </li>
        <li className="mt-2">
          Shree Dhanvantary College of Engineering and Technology, Gujarat Technological University
          <br />
          Diploma of Engineering - Computer Engineering, CGPA: 8.43/10, Surat, Gujarat, JUN 2021
        </li>
      </ul>

      {/* Technical Skills */}
      <h2 className="text-2xl font-semibold mt-4 mb-2">Technical Skills</h2>
      <p className="mb-4">
        <strong>Programming Languages:</strong> C, Java, JavaScript, PHP <br />
        <strong>Databases:</strong> MySQL, MongoDB <br />
        <strong>Backend Development:</strong> Node.js <br />
        <strong>Frontend Development:</strong> HTML5, CSS3, Bootstrap
      </p>

      {/* Professional Experience */}
      <h2 className="text-2xl font-semibold mt-4 mb-2">Professional Experience</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>
          <strong>Junior Web Developer | LOGICWIND, Surat</strong> (JAN 2024 – JUN 2024)
          <ul className="list-disc ml-6 mt-2">
            <li>Developed interfaces using HTML, CSS, JavaScript following best practices.</li>
            <li>Performed CRUD operations using MySQL and MongoDB.</li>
            <li>Built and maintained dynamic WordPress websites and plugins.</li>
            <li>Integrated GraphQL APIs for frontend data retrieval.</li>
          </ul>
        </li>
      </ul>

      {/* Projects */}
      <h2 className="text-2xl font-semibold mt-4 mb-2">Projects</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>
          <strong>Easy Exam Web | B-Tech IT (JAN 2023 – SEP 2023)</strong>
          <br />
          Technologies: HTML5, PHP, CSS, MySQL, JavaScript, Bootstrap
          <br />
          Developed a web app for creating and managing MCQ exams for students and teachers.
        </li>
        <li className="mt-2">
          <strong>InstaPlug – WordPress Plugin | LOGICWIND (MAR 2024 – JUN 2024)</strong>
          <br />
          Technologies: WordPress, PHP, JavaScript, HTML, CSS
          <br />
          Created a custom WordPress plugin to simplify Instagram integration for websites.
        </li>
        <li className="mt-2">
          <strong>Shopping Cart Website | LOGICWIND (JAN 2024 – MAR 2024)</strong>
          <br />
          Technologies: HTML5, PHP, CSS, MySQL, JavaScript, Bootstrap
          <br />
          Developed a dynamic shopping cart website with category/subcategory management, CRUD, and responsive UI.
        </li>
        <li className="mt-2">
          <strong>Node.js API Development with MongoDB & MySQL (JAN 2025 – Current)</strong>
          <br />
          Built APIs with CRUD operations, search functionality, and optimized backend using Node.js, MongoDB, and MySQL.
        </li>
      </ul>

      {/* Download Button */}
      <a
        href="/Parth_resume.pdf"
        download
        className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition"
      >
        <FaDownload />
        Download PDF
      </a>
    </section>
  );
}
