import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import ProjectPage from "./components/ProjectPage";
import "./index.css";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white text-gray-900 font-sans flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project/:id" element={<ProjectPage />} />
          </Routes>
        </main>
        <footer className="py-6 text-center text-sm text-gray-500 border-t">
          <p>&copy; {new Date().getFullYear()} SolDev Studios — Andreas Joa</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
