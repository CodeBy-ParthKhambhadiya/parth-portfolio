'use client';

import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Sending...');

    emailjs
      .send(
        'YOUR_SERVICE_ID',    // e.g., 'service_xxx'
        'YOUR_TEMPLATE_ID',   // e.g., 'template_xxx'
        formData,
        'YOUR_PUBLIC_KEY'     // e.g., 'user_xxx'
      )
      .then(
        () => {
          setStatus('Message sent successfully!');
          setFormData({ name: '', email: '', subject: '', message: '' });
        },
        (error) => {
          console.error(error);
          setStatus('Failed to send message. Try again.');
        }
      );
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4 py-12 bg-gray-50">
      <section className="w-full max-w-lg bg-white rounded-3xl p-8 md:p-16 shadow-xl animate-fadeIn">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 text-center animate-slideDown">
          Contact Me
        </h2>
        <p className="mb-6 text-gray-700 text-center animate-slideDown animate-delay-100">
          Feel free to reach out for collaborations, freelance work, or just to say hi!
        </p>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition animate-fadeIn animate-delay-200"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition animate-fadeIn animate-delay-300"
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition animate-fadeIn animate-delay-400"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition animate-fadeIn animate-delay-500"
            rows={5}
            required
          ></textarea>
          <button
            type="submit"
            className="p-3 bg-yellow-400 text-gray-900 font-semibold rounded-lg hover:bg-yellow-500 transition animate-fadeIn animate-delay-600"
          >
            Send Message
          </button>
          {status && <p className="mt-2 text-center text-gray-700 animate-fadeIn animate-delay-700">{status}</p>}
        </form>
      </section>
    </main>
  );
}
