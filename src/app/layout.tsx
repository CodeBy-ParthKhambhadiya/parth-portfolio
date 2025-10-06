import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Sidebar from '@/components/Sidebar';

export const metadata = {
  title: 'Parth Portfolio',
  description: 'My personal portfolio website',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-gray-50 text-gray-900">
        <Header />
        <Sidebar /> {/* Client component */}
        <main className="flex-grow w-full max-w-6xl mx-auto p-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
