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
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
            Hi, I'm Parth Khambhadiya
          </h1>
          <p className="text-gray-700 leading-relaxed">
            Hi, I’m Parth Khambhadiya, a passionate web developer based in Surat, Gujarat. With a B.Tech in Information Technology and a strong foundation in computer engineering, I specialize in creating dynamic and responsive web applications using HTML, CSS, JavaScript, PHP, Node.js, MySQL, MongoDB, and Bootstrap.
          </p>
          <p className="text-gray-700 leading-relaxed">
            I have hands-on experience building projects ranging from student-focused web apps like Easy Exam Web, to e-commerce solutions such as a Shopping Cart Website, and even custom WordPress plugins like InstaPlug for seamless Instagram integration. I enjoy designing and implementing APIs, optimizing frontend performance, and crafting user-friendly interfaces.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Currently, I am developing Node.js APIs with MongoDB and MySQL to handle complex backend operations efficiently. I am always eager to take on new challenges, learn new technologies, and bring ideas to life on the web.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-4">
            <Link
              href="/projects"
              className="px-6 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-lg hover:bg-yellow-500 transition"
            >
              View My Projects
            </Link>
            <Link
              href="/about"
              className="px-6 py-3 border border-gray-900 font-semibold rounded-lg hover:bg-gray-900 hover:text-white transition"
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
              alt="Parth Hero Image"
              fill
              className="object-cover"
            />
          </div>
        </div>

      </section>
    </div>
  );
}
