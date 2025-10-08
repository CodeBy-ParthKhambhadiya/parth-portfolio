'use client';

import React from 'react';
import Image from 'next/image';

const testimonials = [
  {
    name: 'Jane Doe',
    role: 'CEO, XYZ Corp',
    message: 'Working with Parth was amazing! He delivered our project on time and exceeded expectations.',
    avatar: 'https://i.pravatar.cc/100?img=1',
  },
  {
    name: 'John Smith',
    role: 'Product Manager, ABC Inc',
    message: 'Parth is highly skilled and professional. Communication was seamless throughout the project.',
    avatar: 'https://i.pravatar.cc/100?img=2',
  },
  {
    name: 'Alice Johnson',
    role: 'Founder, Startup Co',
    message: 'I highly recommend Parth! Creative solutions and top-notch work.',
    avatar: 'https://i.pravatar.cc/100?img=3',
  },
];

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-16">
      <section className="max-w-5xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Testimonials</h1>
        <p className="text-gray-600">See what my clients and collaborators have to say about working with me.</p>
      </section>

      <section className="max-w-5xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center text-center hover:scale-105 transform transition"
          >
            <Image
              src={t.avatar}
              alt={t.name}
              className="w-20 h-20 rounded-full mb-4"
              width={80}
              height={80}
            />
            <p className="text-gray-800 mb-4">&quot;{t.message}&quot;</p>
            <h3 className="text-lg font-semibold text-gray-900">{t.name}</h3>
            <p className="text-gray-500 text-sm">{t.role}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
