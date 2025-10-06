import Image from "next/image";
import Link from "next/link";
import heroImage from "../../public/images.jpeg";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-50 px-4 py-12">

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl bg-white rounded-3xl p-8 md:p-16 shadow-xl animate-fadeIn">

        {/* Text Content */}
        <div className="md:w-1/2 space-y-6 text-center md:text-left">
          <div className="text-center md:text-left space-y-2">
            {/* Name */}
            <h3 className="text-3xl md:text-4xl font-bold text-gray-700">
              Parth Khambhadiya
            </h3>

            {/* Role */}
            <h2 className="text-xl md:text-2xl font-semibold text-gray-700">
              Full-Stack Developer
            </h2>

            {/* Technologies / Languages */}
            <p className="text-gray-600 text-sm md:text-base">
              HTML | CSS | JavaScript | TypeScript | React | Next.js | Node.js | PHP | MySQL | PostgreSQL | MongoDB | Bootstrap
            </p>
          </div>
          {/* Description */}
          <p className="text-gray-700 leading-relaxed font-medium text-justify">
            A passionate full-stack web developer based in Surat, Gujarat. I hold a B.Tech in Information Technology and specialize in building dynamic, responsive, and user-friendly web applications.
          </p>

          {/* Point-wise Skills / Experience */}
          <div className="mt-4">
            <h2 className="text-xl font-semibold text-gray-900 mb-2 text-justify">Key Skills & Experience:</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2 pl-4 text-justify">
              <li>Proficient in HTML, CSS, JavaScript, PHP, Node.js, MySQL, MongoDB, and Bootstrap.</li>
              <li>Experience building web apps like <strong>Easy Exam Web</strong> for students and <strong>Shopping Cart Websites</strong> for e-commerce.</li>
              <li>Developed WordPress plugins like <strong>InstaPlug</strong> for Instagram integration.</li>
              <li>Skilled in designing APIs, database integration, and optimizing frontend performance.</li>
              <li>Hands-on with full-stack development using React, Next.js, and TypeScript.</li>
              <li>Currently working on backend solutions with Next.js, TypeScript, Node.js, and PostgreSQL.</li>
              <li>Eager to learn new technologies, take on challenging projects, and deliver high-quality web solutions.</li>
            </ul>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-6">
            <Link
              href="/projects"
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-indigo-600 transition"
            >
              View My Projects
            </Link>
            <Link
              href="/about"
              className="px-6 py-3 border-2 border-teal-500 text-teal-500 font-semibold rounded-lg hover:bg-teal-500 hover:text-white transition"
            >
              About Me
            </Link>
          </div>

        </div>

        {/* Image Content */}
        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center relative">
          <div className="w-64 h-64 md:w-96 md:h-96 relative rounded-full overflow-hidden shadow-2xl ring-4 ring-gray-300 animate-bounce">
            <Image
              src={heroImage}
              alt="Parth Khambhadiya"
              fill
              className="object-cover"
            />
          </div>
        </div>

      </section>
    </div>
  );
}
