// app/projects/page.tsx
export default function ProjectsPage() {
  return (
    <section>
      <h2 className="text-4xl font-bold mb-6">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-4 border rounded-lg hover:shadow-lg transition">
          <h3 className="text-2xl font-semibold mb-2">Portfolio Website</h3>
          <p>A personal portfolio to showcase my projects and skills, built with Next.js and Tailwind CSS.</p>
        </div>
        <div className="p-4 border rounded-lg hover:shadow-lg transition">
          <h3 className="text-2xl font-semibold mb-2">E-commerce Store</h3>
          <p>An online store with product listings, shopping cart, and checkout functionality using React.</p>
        </div>
        {/* Add more project cards here */}
      </div>
    </section>
  );
}
