import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Projects from './pages/Projects'
// import Divisions from './pages/Divisions'
import HardwareDivision from './pages/HardwareDivision'
import SoftwareDivision from './pages/SoftwareDivision'
import About from './pages/About'
import Contact from './pages/Contact'

const App = () => {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar/>
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            {/* <Route path="/divisions" element={<Divisions />} /> */}
            <Route path="/divisions/hardware" element={<HardwareDivision />} />
            <Route path="/divisions/software" element={<SoftwareDivision />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer/>
      </div>
    </BrowserRouter>
  )
}

export default App