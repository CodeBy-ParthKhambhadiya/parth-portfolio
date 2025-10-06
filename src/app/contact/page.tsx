export default function ContactPage() {
  return (
    <main className=" flex flex-col items-center justify-center px-4 py-12 bg-gray-50">
      <section className="w-full max-w-lg bg-white rounded-3xl p-8 md:p-16 shadow-xl animate-fadeIn">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 text-center">
          Contact Me
        </h2>
        <p className="mb-6 text-gray-700 text-center">
          Feel free to reach out to me for collaborations, freelance work, or just to say hi!
        </p>

        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
          />
          <textarea
            placeholder="Your Message"
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
            rows={5}
          ></textarea>
          <button
            type="submit"
            className="p-3 bg-yellow-400 text-gray-900 font-semibold rounded-lg hover:bg-yellow-500 transition"
          >
            Send Message
          </button>
        </form>
      </section>
    </main>
  );
}
