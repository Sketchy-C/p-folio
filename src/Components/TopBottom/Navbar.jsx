// import React, { useState } from "react";
// import { Link, useLocation } from "react-router-dom";

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const location = useLocation();

//   const isActive = (path) =>
//     location.pathname === path
//       ? "text-orange-400 border-b-2 border-orange-400 pb-1"
//       : "hover:text-orange-400";

//   return (
//     <nav className="sticky top-0 z-50 bg-[#242424] text-gray-50 px-6 py-3 shadow-md backdrop-blur-sm">
//       <div className="flex justify-between items-center max-w-6xl mx-auto">
//         {/* Letter W logo with custom font */}
//         <div className="flex items-center gap-2">
//           <h1
//             className="text-3xl text-orange-500 border-2 border-orange-500/60 border-dashed rounded-full p-3"
//             style={{ fontFamily: "'Pacifico', cursive" }}
//           >
//             W
//           </h1>
//           <div className="text-2xl ">Wilson Sam</div>
//         </div>


//         {/* Desktop Menu */}
//         <ul className="hidden md:flex gap-6">
//           <li>
//             <Link to="/" className={isActive("/")}>Home</Link>
//           </li>
//           <li>
//             <Link to="/projects" className={isActive("/projects")}>Projects</Link>
//           </li>
//           <li>
//             <Link to="/skills" className={isActive("/skills")}>Skills</Link>
//           </li>
//           <li>
//             <Link to="/contact" className={isActive("/contact")}>Contact</Link>
//           </li>
//         </ul>

//         {/* Mobile Hamburger */}
//         <button
//           className="md:hidden flex flex-col gap-1"
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           <span className="block w-6 h-0.5 bg-white"></span>
//           <span className="block w-6 h-0.5 bg-white"></span>
//           <span className="block w-6 h-0.5 bg-white"></span>
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <ul className="md:hidden mt-3 flex flex-col gap-3 bg-gray-800 p-4 rounded-lg">
//           <li>
//             <Link to="/" onClick={() => setIsOpen(false)} className={isActive("/")}>
//               Home
//             </Link>
//           </li>
//           <li>
//             <Link to="/projects" onClick={() => setIsOpen(false)} className={isActive("/projects")}>
//               Projects
//             </Link>
//           </li>
//           <li>
//             <Link to="/skills" onClick={() => setIsOpen(false)} className={isActive("/skills")}>
//               Skills
//             </Link>
//           </li>
//           <li>
//             <Link to="/contact" onClick={() => setIsOpen(false)} className={isActive("/contact")}>
//               Contact
//             </Link>
//           </li>
//         </ul>
//       )}
//     </nav>
//   );
// }

// export default Navbar;
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // for mobile
  const [projectsMenuOpen, setProjectsMenuOpen] = useState(false);
  const [activeProjectTab, setActiveProjectTab] = useState("overview"); // track hovered tab
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path) =>
    location.pathname === path
      ? "text-orange-400 border-b-2 border-orange-400 pb-1"
      : "hover:text-orange-400";

  // Data for content and slides
  const projectTabs = [
    {
      id: "overview",
      label: "Overview",
      content: (
        <>
          <p className="text-gray-100 mb-4 max-w-md">
            Specialize in building powerful full-stack applications,
            integrating technologies such as RFID, GPS, GSM, and automation
            tools. My projects range from enterprise tracking solutions to
            productivity-enhancing extensions and custom software tools, all
            designed with performance and scalability in mind.
          </p>
          <button
            onClick={() => navigate("/projects")}
            className="text-orange-400 underline"
          >
            Visit Project Page →
          </button>
        </>
      ),
    },
    {
      id: "latest",
      label: "Latest Focus",
      content: (
        <div className="flex gap-4">
          {[1, 2, 3].map((num) => (
            <div
              key={num}
              className="bg-gray-800 rounded-md p-4 w-40 shadow-lg"
            >
              <h3 className="text-orange-400 mb-2">Project {num}</h3>
              <p className="text-gray-200 text-sm">
                Description for project {num} in latest focus.
              </p>
            </div>
          ))}
        </div>
      ),
      link: "/projects#latest-focus",
    },
    {
      id: "best",
      label: "Best/Fav",
      content: (
        <div className="flex gap-4">
          {[1, 2, 3].map((num) => (
            <div
              key={num}
              className="bg-gray-800 rounded-md p-4 w-40 shadow-lg"
            >
              <h3 className="text-orange-400 mb-2">Fav Project {num}</h3>
              <p className="text-gray-200 text-sm">
                Description for favorite project {num}.
              </p>
            </div>
          ))}
        </div>
      ),
      link: "/projects#best-fav",
    },
  ];

  const handleProjectTabClick = (id, link) => {
    setProjectsMenuOpen(false);
    if (link) {
      navigate(link);
    } else {
      navigate("/projects");
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-[#242424] text-gray-50 px-6 py-3 shadow-md backdrop-blur-sm">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <h1
            className="text-3xl text-orange-500 border-2 border-orange-500/60 border-dashed rounded-full p-3"
            style={{ fontFamily: "'Pacifico', cursive" }}
          >
            W
          </h1>
          <div className="text-2xl">Wilson Sam</div>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 relative">
          <li>
            <Link to="/" className={isActive("/")}>
              Home
            </Link>
          </li>

          {/* Projects menu with custom hover */}
          <li
            onMouseEnter={() => setProjectsMenuOpen(true)}
            onMouseLeave={() => setProjectsMenuOpen(false)}
            className="relative"
          >
            <span
              className={`${isActive("/projects")} cursor-pointer select-none`}
            >
              Projects
            </span>

            {/* Custom dropdown/menu */}
            
            {projectsMenuOpen && (
  <>
    {/* Backdrop Blur and Dimmed Background */}
    <div
      className="fixed inset-x-0 top-[70px] bg-[#242424cc] backdrop-blur-md z-40"
      onMouseEnter={() => setProjectsMenuOpen(true)}
      onMouseLeave={() => setProjectsMenuOpen(false)}
      style={{ height: "calc(100vh - 70px)" }} // fill screen below navbar
    />

    {/* Dropdown Menu Container */}
    <div
      className="fixed top-[70px] left-0 right-0 mx-auto max-w-6xl z-50 bg-[#242424] rounded-b-md shadow-lg flex divide-x divide-gray-700"
      onMouseEnter={() => setProjectsMenuOpen(true)}
      onMouseLeave={() => setProjectsMenuOpen(false)}
      style={{ height: "300px" }}
    >
      {/* Left tabs */}
      <div className="w-1/3 flex flex-col p-6 text-gray-100">
        {projectTabs.map(({ id, label }) => (
          <button
            key={id}
            onClick={() =>
              handleProjectTabClick(id, projectTabs.find((t) => t.id === id)?.link)
            }
            onMouseEnter={() => setActiveProjectTab(id)}
            className={`text-left px-4 py-3 mb-3 rounded cursor-pointer transition-colors duration-200
              ${
                activeProjectTab === id
                  ? "bg-orange-600 text-gray-50"
                  : "hover:bg-orange-500 hover:text-gray-50"
              }
            `}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Right content */}
      <div className="w-2/3 p-6 text-gray-100 overflow-auto">
        {projectTabs.find((tab) => tab.id === activeProjectTab)?.content}
      </div>
    </div>
  </>
)}

          </li>

          <li>
            <Link to="/skills" className={isActive("/skills")}>
              Skills
            </Link>
          </li>
          <li>
            <Link to="/contact" className={isActive("/contact")}>
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
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
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className={isActive("/")}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              onClick={() => setIsOpen(false)}
              className={isActive("/projects")}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/skills"
              onClick={() => setIsOpen(false)}
              className={isActive("/skills")}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className={isActive("/contact")}
            >
              Contact
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
