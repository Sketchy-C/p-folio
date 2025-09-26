import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

import Navbar from './Components/TopBottom/Navbar'
import Footer from './Components/TopBottom/Footer'

// Pages
import Home from './Components/pages/Home/Home'
import Projects from './Components/pages/Projects/Projects'
import Skills from './Components/pages/Skills/Skills'
import Contact from './Components/pages/Contact/Contact'
import ScrollToTop from './Components/useCases/ScrollToTop'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      

      {/* Page routes */}
      <div className='min-h-screen'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

      </div>
      <Footer />
    </Router>
  )
}

export default App
