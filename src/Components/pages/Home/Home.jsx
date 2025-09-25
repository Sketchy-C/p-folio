import React from 'react';
import Hero from './components/Hero';
import Slide from './components/Slide';
import About from './components/About';
import ProjectsOverview from './components/ProjectsOverview';
function Home() {
  return (
    <div className="min-h-screen relative text-gray-300">
      {/* Background image */}
      <div className="absolute inset-0 bg-cover bg-center opacity-20 z-0" style={{ backgroundImage: "url('./patterns/pattern1.png')" }}></div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-60 z-0"></div>

      <div className="relative z-10 ">
        <Hero />
        <Slide />
        <About/>
        <ProjectsOverview/>
      </div>
    </div>

  );
}

export default Home;
