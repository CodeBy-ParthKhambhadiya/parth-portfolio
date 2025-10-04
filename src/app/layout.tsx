// src/app/layout.tsx
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Parth Portfolio',
  description: 'My personal portfolio website',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-gray-50 text-gray-900">
        <Header />
        {/* main grows to fill remaining space */}
        <main className="flex-grow max-w-5xl mx-auto p-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
