
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Blur from "../useCases/Blur";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // for mobile
  const [projectsMenuOpen, setProjectsMenuOpen] = useState(false);
  const [activeProjectTab, setActiveProjectTab] = useState("overview"); // track hovered tab

  const [skillsMenuOpen, setSkillsMenuOpen] = useState(false);
  const [activeSkillsTab, setActiveSkillsTab] = useState("overview");

  const [contactMenuOpen, setContactMenuOpen] = useState(false);
  const [activeContactTab, setActiveContactTab] = useState("page");


  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path, hoverColor = null) => {
    if (hoverColor) {
      return `text-${hoverColor} border-b-2 ${hoverColor} pb-1`;
    }

    return location.pathname === path
      ? "text-orange-400 border-b-2 border-orange-400 pb-1"
      : "hover:text-orange-400";
  };


  // Data for content and slides
  const contactTabs = [
    {
      id: "page",
      label: "Contact Page",
      content: (
        <div className="text-gray-100">
          <p className="mb-3 max-w-md">
            Reach out for collaborations, freelance opportunities, or just to connect!
          </p>
          <button
            onClick={() => navigate("/contact")}
            className="text-orange-400 underline"
          >
            View Contact Page →
          </button>
        </div>
      ),
    },
    {
      id: "links",
      label: "Quick Links",
      content: (
        <div className="flex gap-4">
          {[
            {
              title: "GitHub",
              icon: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
              link: "https://github.com/yourusername",
            },
            {
              title: "Twitter",
              icon: "https://abs.twimg.com/icons/apple-touch-icon-192x192.png",
              link: "https://twitter.com/yourhandle",
            },
            {
              title: "LinkedIn",
              icon: "https://cdn-icons-png.flaticon.com/512/174/174857.png",
              link: "https://linkedin.com/in/yourprofile",
            },
          ].map(({ title, icon, link }) => (
            <a
              key={title}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-gray-700 transition-colors rounded-md p-4 w-40 shadow-lg flex flex-col items-center"
            >
              <img src={icon} alt={title} className="w-8 h-8 mb-2" />
              <h3 className="text-orange-400 mb-1">{title}</h3>
              <p className="text-gray-200 text-sm text-center">Visit my {title}</p>
            </a>
          ))}
        </div>
      ),
    },
  ];

  const skillsTabs = [
    {
      id: "overview",
      label: "General Overview",
      content: (
        <p className="text-gray-100 max-w-md">
          I have a strong background in full-stack development, embedded integrations,
          and automation. My toolkit includes both software and hardware interfacing,
          giving me a holistic problem-solving approach.
        </p>
      ),
    },
    {
      id: "experience",
      label: "Experience",
      content: (
        <div className="flex gap-4">
          {["Software", "Embedded Integration", "Scripting"].map((type) => (
            <div
              key={type}
              className="bg-gray-800 rounded-md p-4 w-40 shadow-lg"
            >
              <h3 className="text-orange-400 mb-2">{type}</h3>
              <p className="text-gray-200 text-sm">
                {type === "Software"
                  ? "Building scalable web applications."
                  : type === "Embedded Integration"
                    ? "Bridging hardware and software layers."
                    : "Automation via Chrome Extensions, Excel, and Web Scrapers."}
              </p>
            </div>
          ))}
        </div>
      ),
    },
    {
      id: "learning",
      label: "Currently Learning",
      content: (
        <div className="text-gray-100">
          <p className="mb-4">
            Currently diving deep into:
          </p>
          <div className="flex">
            <ul className="list-disc list-inside mb-2 text-gray-200">
              <li>Node.js (backend architecture)</li>
              <li>Angular (enterprise frontend)</li>
            </ul>
            <img src="./images/learning.jpg" alt="" className="h-40 rounded-2xl opacity-70 " />
          </div>
          <button
            onClick={() => navigate("/skills#currently-learning")}
            className="text-orange-400 underline"
          >
            View More →
          </button>
        </div>
      ),
    },
    {
      id: "certs",
      label: "Certifications",
      content: (
        <div className="text-gray-100">
          <p className="mb-3 max-w-md">
            Studied Software Engineering at Zindua Coding School. Training covered
            full-stack development, system design, and deployment strategies.
          </p>
          <button
            onClick={() => navigate("/skills#certifications")}
            className="text-orange-400 underline"
          >
            View My Certifications →
          </button>
        </div>
      ),
    },
  ];

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
      id: "mvps",
      label: "MVPs",
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
      link: "/projects#mvps-fav",
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
        <ul className="hidden md:flex relative">
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
            <Link
              to="/projects"
              className={isActive("/projects", projectsMenuOpen ? "border-teal-500" : null)}
            >
              Projects
            </Link>


            {/* Custom dropdown/menu */}

            {projectsMenuOpen && (
              <>
                <Blur
                  className="z-40"
                  style={{ top: "70px", height: "calc(100vh - 70px)" }}
                  onClick={() => setProjectsMenuOpen(false)}
                />

                {/* Dropdown Menu Container */}
                <div
                  className="fixed top-[75px] left-0 right-0 z-50 bg-[#242424]"
                  style={{ height: "300px" }}
                  onMouseEnter={() => setProjectsMenuOpen(true)}
                  onMouseLeave={() => setProjectsMenuOpen(false)}
                >
                  <div className="mx-auto max-w-6xl rounded-b-md shadow-lg flex divide-x divide-gray-700 h-full">
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
            ${activeProjectTab === id
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
                </div>

              </>
            )}

          </li>

          <li
            onMouseEnter={() => setSkillsMenuOpen(true)}
            onMouseLeave={() => setSkillsMenuOpen(false)}
            className="relative"
          >
            <Link
              to="/skills"
              className={isActive("/skills", skillsMenuOpen ? "border-teal-500" : null)}
            >
              Skills
            </Link>


            {skillsMenuOpen && (
              <>
                <Blur
                  className="z-40"
                  style={{ top: "70px", height: "calc(100vh - 70px)" }}
                  onClick={() => setSkillsMenuOpen(false)}
                />
                <div
                  className="fixed top-[75px] left-0 right-0 z-50 bg-[#242424]"
                  style={{ height: "300px" }}
                  onMouseEnter={() => setSkillsMenuOpen(true)}
                  onMouseLeave={() => setSkillsMenuOpen(false)}
                >
                  <div className="mx-auto max-w-6xl rounded-b-md shadow-lg flex divide-x divide-gray-700 h-full">
                    {/* Left tabs */}
                    <div className="w-1/3 flex flex-col p-6 text-gray-100">
                      {skillsTabs.map(({ id, label }) => (
                        <button
                          key={id}
                          onClick={() => {
                            setSkillsMenuOpen(false);
                            navigate("/skills#" + id);
                          }}
                          onMouseEnter={() => setActiveSkillsTab(id)}
                          className={`text-left px-4 py-3 mb-3 rounded cursor-pointer transition-colors duration-200
                  ${activeSkillsTab === id
                              ? "bg-orange-600 text-gray-50"
                              : "hover:bg-orange-500 hover:text-gray-50"}
                `}
                        >
                          {label}
                        </button>
                      ))}
                    </div>

                    {/* Right content */}
                    <div className="w-2/3 p-6 text-gray-100 overflow-auto">
                      {skillsTabs.find((tab) => tab.id === activeSkillsTab)?.content}
                    </div>
                  </div>
                </div>
              </>
            )}
          </li>
          <li
            onMouseEnter={() => setContactMenuOpen(true)}
            onMouseLeave={() => setContactMenuOpen(false)}
            className="relative"
          >
            <Link
              to="/contact"
              className={isActive("/contact", contactMenuOpen ? "border-teal-500" : null)}
            >
              Contact
            </Link>

            {contactMenuOpen && (
              <>
                <Blur
                  className="z-40"
                  style={{ top: "70px", height: "calc(100vh - 70px)" }}
                  onClick={() => setContactMenuOpen(false)}
                />
                <div
                  className="fixed top-[75px] left-0 right-0 z-50 bg-[#242424]"
                  style={{ height: "300px" }}
                  onMouseEnter={() => setContactMenuOpen(true)}
                  onMouseLeave={() => setContactMenuOpen(false)}
                >
                  <div className="mx-auto max-w-6xl rounded-b-md shadow-lg flex divide-x divide-gray-700 h-full">
                    {/* Left tabs */}
                    <div className="w-1/3 flex flex-col p-6 text-gray-100">
                      {contactTabs.map(({ id, label }) => (
                        <button
                          key={id}
                          onClick={() => {
                            setContactMenuOpen(false);
                            navigate("/contact#" + id);
                          }}
                          onMouseEnter={() => setActiveContactTab(id)}
                          className={`text-left px-4 py-3 mb-3 rounded cursor-pointer transition-colors duration-200
                  ${activeContactTab === id
                              ? "bg-orange-600 text-gray-50"
                              : "hover:bg-orange-500 hover:text-gray-50"}
              `}
                        >
                          {label}
                        </button>
                      ))}
                    </div>

                    {/* Right content */}
                    <div className="w-2/3 p-6 text-gray-100 overflow-auto">
                      {contactTabs.find((tab) => tab.id === activeContactTab)?.content}
                    </div>
                  </div>
                </div>
              </>
            )}
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
