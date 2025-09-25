import React, { useEffect, useState } from "react";

function ProjectsOverview() {
  const images = [
    "./images/project1.jpg",
    "./images/fuel.webp",
    "./images/wms.png",
    "./images/stacks.png",
    "./images/tc26.jpeg",
  ];

  const [current, setCurrent] = useState(0);

  // Auto-change image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section id="projects" className="py-16 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
        {/* Left Side - Text */}
        <div className="flex-1">
          <h2 className="text-4xl font-bold text-orange-500 mb-6">Projects Overview</h2>
          <p className="text-slate-300 leading-relaxed mb-8">
            I specialize in building powerful full-stack applications, integrating
            technologies such as RFID, GPS, GSM, and automation tools. My projects
            range from enterprise tracking solutions to productivity-enhancing
            extensions and custom software tools, all designed with performance and
            scalability in mind.
          </p>
          <a
            href="#projects-page"
            className="inline-block bg-orange-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-slate-600 transition-colors duration-300"
          >
            Visit Project Page →
          </a>
        </div>

        {/* Right Side - Slideshow */}
        <div className="flex-1 relative w-full h-80 md:h-96 overflow-hidden rounded-lg shadow-lg">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Project ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                index === current ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsOverview;
