// app/contact/page.tsx
export default function ContactPage() {
  console.log("Contact page rendered");
  
  return (
    <section>
      <h2 className="text-4xl font-bold mb-4">Contact Me</h2>
      <p className="mb-4">Feel free to reach out to me for collaborations or freelance work.</p>
      <form className="max-w-md mx-auto flex flex-col gap-4">
        <input
          type="text"
          placeholder="Your Name"
          className="p-3 border rounded"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="p-3 border rounded"
        />
        <textarea
          placeholder="Your Message"
          className="p-3 border rounded"
          rows={5}
        ></textarea>
        <button
          type="submit"
          className="p-3 bg-yellow-400 text-gray-900 font-semibold rounded hover:bg-yellow-500 transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
