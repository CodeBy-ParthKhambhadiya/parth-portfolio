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
      <body className="min-h-screen bg-gray-50 text-gray-900">
        {/* Wrapper for sidebar + main content */}
        <div className="flex min-h-screen">
          {/* ✅ Sidebar (fixed or static as you prefer) */}
          <Sidebar />

          {/* ✅ Main Content (Header + Page + Footer) */}
          <div className="flex flex-col flex-1">
            <Header />
            <main className="flex-grow w-full px-6 py-10">{children}</main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
