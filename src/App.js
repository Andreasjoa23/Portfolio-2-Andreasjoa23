import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <main className="min-h-screen bg-gray-100 p-6">
        <header className="mb-10">
          <h1 className="text-3xl font-bold text-blue-700 mb-2">Andreas Joa – Portfolio 2</h1>
          <nav className="space-x-4">
            <Link to="/" className="text-blue-600 underline">Home</Link>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<ProjectPage />} />
        </Routes>
      </main>
    </Router>
  );
}

function Home() {
  const projects = [
    { id: "js-frameworks", title: "JavaScript Frameworks", desc: "React app with state & routing.", img: "/thumb-js.jpg" },
    { id: "bidify", title: "Bidify – SP2", desc: "Auction site with login, bidding, listings.", img: "/thumb-bidify.jpg" },
    { id: "holidaze", title: "Holidaze – PE2", desc: "Hotel booking app with admin panel.", img: "/thumb-holidaze.jpg" }
  ];

  return (
    <section className="grid gap-6 md:grid-cols-3">
      {projects.map(p => (
        <Link to={`/project/${p.id}`} key={p.id} className="bg-white shadow rounded-xl overflow-hidden hover:shadow-lg transition">
          <img src={p.img} alt={p.title} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h2 className="text-xl font-semibold">{p.title}</h2>
            <p className="text-sm text-gray-600">{p.desc}</p>
          </div>
        </Link>
      ))}
    </section>
  );
}

function ProjectPage() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800">Project Details</h2>
      <p className="mt-2 text-gray-600">This page will show detailed content for each project.</p>
    </div>
  );
}

export default App;
