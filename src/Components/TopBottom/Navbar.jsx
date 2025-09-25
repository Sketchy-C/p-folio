import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) =>
    location.pathname === path
      ? "text-orange-400 border-b-2 border-orange-400 pb-1"
      : "hover:text-orange-400";

  return (
    <nav className="sticky top-0 z-50 bg-[#242424] text-gray-50 px-6 py-3 shadow-md backdrop-blur-sm">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        {/* Letter W logo with custom font */}
        <div className="flex items-center gap-2">
          <h1
            className="text-3xl text-orange-500 border-2 border-orange-500/60 border-dashed rounded-full p-3"
            style={{ fontFamily: "'Pacifico', cursive" }}
          >
            W
          </h1>
          <div className="text-2xl ">Wilson Sam</div>
        </div>


        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6">
          <li>
            <Link to="/" className={isActive("/")}>Home</Link>
          </li>
          <li>
            <Link to="/projects" className={isActive("/projects")}>Projects</Link>
          </li>
          <li>
            <Link to="/skills" className={isActive("/skills")}>Skills</Link>
          </li>
          <li>
            <Link to="/contact" className={isActive("/contact")}>Contact</Link>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="block w-6 h-0.5 bg-white"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden mt-3 flex flex-col gap-3 bg-gray-800 p-4 rounded-lg">
          <li>
            <Link to="/" onClick={() => setIsOpen(false)} className={isActive("/")}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/projects" onClick={() => setIsOpen(false)} className={isActive("/projects")}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="/skills" onClick={() => setIsOpen(false)} className={isActive("/skills")}>
              Skills
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setIsOpen(false)} className={isActive("/contact")}>
              Contact
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
