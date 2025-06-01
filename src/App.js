import { BrowserRouter as Router, Routes, Route, Link, useParams } from "react-router-dom";
import "./index.css";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 text-gray-900 font-sans flex flex-col justify-between">
        <main className="p-6">
          <header className="mb-10 border-b pb-4 flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-4">
              <img src="/pictures/SolDevStudios.jpg" alt="SolDev Studios" className="w-12 h-12 rounded-full" />
              
            </div>
            <nav className="mt-4 md:mt-0 space-x-6 text-sm">
              <Link to="/" className="text-blue-600 hover:text-blue-800 transition">Home</Link>
            </nav>
          </header>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project/:id" element={<ProjectPage />} />
          </Routes>
        </main>

        <footer className="bg-gray-800 text-white text-center p-4">
          <div className="flex justify-center items-center space-x-3">
            <img src="/pictures/SolDevStudios.jpg" alt="SolDev Studios" className="w-8 h-8 rounded-full" />
            <p className="text-sm">&copy; {new Date().getFullYear()} SolDev Studios | All Rights Reserved</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

function Home() {
  const projects = [
    { id: "js-frameworks", title: "JavaScript Frameworks", desc: "React app with state & routing.", img: "/pictures/Lazysales.png" },
    { id: "bidify", title: "Bidify – SP2", desc: "Auction site with login, bidding, listings.", img: "/pictures/Bidlify.png" },
    { id: "holidaze", title: "Holidaze – PE2", desc: "Hotel booking app with admin panel.", img: "/pictures/Holidazer.png" }
  ];

  return (
    <>
      <section className="mb-12 bg-blue-50 p-6 rounded-lg shadow-inner grid md:grid-cols-2 gap-6 items-center">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">My name is Andreas Solsem Joakimsen and welcome to my portfolio page</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            I am a 30-year-old front-end developer based in Norway. While my journey began in the realm of education, where I spent a decade nurturing young minds as a kindergarten teacher,
            I discovered my passion for coding and embarked on a transformative path into the world of development. With a year of dedicated study under my belt, I now specialize in crafting engaging user experiences through front-end technologies.
            Welcome to my portfolio, where I showcase my dedication, creativity, and evolving skills in web development.
          </p>
          <a href="#projects" className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">Learn More</a>
        </div>
        <img src="/pictures/SolDevStudios.jpg" alt="Andreas Joakimsen" className="rounded-lg shadow-md w-full max-w-xs mx-auto" />
      </section>

      <section id="projects" className="grid gap-8 md:grid-cols-3">
        {projects.map(p => (
          <Link
            to={`/project/${p.id}`}
            key={p.id}
            className="bg-white hover:bg-gray-50 transition rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 duration-300 overflow-hidden"
          >
            <img src={p.img} alt={p.title} className="w-full h-48 object-cover" />
            <div className="p-5">
              <h2 className="text-xl font-semibold text-gray-800 mb-1">{p.title}</h2>
              <p className="text-sm text-gray-600 mb-3">{p.desc}</p>
              <span className="text-blue-600 text-sm font-medium hover:underline">Read more →</span>
            </div>
          </Link>
        ))}
      </section>
    </>
  );
}

function ProjectPage() {
  const { id } = useParams();

  const projectData = {
    "js-frameworks": {
      title: "JavaScript Frameworks",
      img: "/pictures/Lazysales.png",
      caption: "Screenshot of the JS Frameworks CA app.",
      live: "https://lazysales.netlify.app/",
      repo: "https://github.com/annechh/ca-js-frameworks",
      reflection: "Improved state management and component structure."
    },
    "bidify": {
      title: "Bidify – Semester Project 2",
      img: "/pictures/Bidlify.png",
      caption: "Screenshot of the Bidify marketplace app.",
      live: "https://bidify-semesterproject.netlify.app/",
      repo: "https://github.com/AndreasAUG23F/Bidify-SemesterProject-2",
      reflection: "Enhanced form validation, responsiveness, and structure."
    },
    "holidaze": {
      title: "Holidaze – Project Exam 2",
      img: "/pictures/Holidazer.png",
      caption: "Screenshot of the Holidaze booking app.",
      live: "https://holidazer.netlify.app/",
      repo: "https://github.com/Andreasjoa23/PE2-Holidaze",
      reflection: "Only README updated due to exam grading policy."
    }
  };

  const proj = projectData[id];
  if (!proj) return <div className="text-red-600">Project not found</div>;

  return (
    <article className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-xl animate-fade-in">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">{proj.title}</h2>
      <img src={proj.img} alt={proj.title} className="w-full rounded mb-2" />
      <figcaption className="text-sm text-gray-500 mb-6 italic">{proj.caption}</figcaption>
      <div className="mb-6 space-x-6">
        <a href={proj.live} target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">Live Site</a>
        <a href={proj.repo} target="_blank" rel="noopener noreferrer" className="inline-block border border-blue-600 text-blue-600 px-4 py-2 rounded hover:bg-blue-50 transition">GitHub Repo</a>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-3">Reflection & Improvements</h3>
        <p className="text-gray-700 leading-relaxed">{proj.reflection}</p>
      </div>
    </article>
  );
}

export default App;
