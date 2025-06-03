import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="flex items-center justify-between py-6 px-6 border-b">
      <div className="flex items-center gap-4">
        <Link to="/">
          <img
            src="/pictures/soldevStudios.jpg"
            alt="SolDev Studios"
            className="w-12 h-12 rounded-full hover:opacity-80 transition"
          />
        </Link>
        <span className="text-xl font-semibold text-gray-800">SolDev Studios</span>
      </div>
      <nav className="space-x-6 text-sm">
        <Link to="/" className="text-gray-600 hover:text-blue-600 transition">
          Home
        </Link>
      </nav>
    </header>
  );
}

export default Header;
