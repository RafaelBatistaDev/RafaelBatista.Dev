import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Extensions from './components/Extensions'
import Certifications from './components/Certifications'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import './App.css'

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Extensions />
      <Certifications />
      <Blog />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  )
}
