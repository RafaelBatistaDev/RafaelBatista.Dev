import { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import './Navbar.css'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
    setIsOpen(false)
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <a href="#home">Dev Portfolio</a>
        </div>

        <button className="menu-toggle" onClick={toggleMenu}>
          {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>

        <ul className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          <li><a onClick={() => scrollToSection('home')}>Sobre</a></li>
          <li><a onClick={() => scrollToSection('extensions')}>Extensões</a></li>
          <li><a onClick={() => scrollToSection('skills')}>Skills</a></li>
          <li><a onClick={() => scrollToSection('projects')}>Projetos</a></li>
          <li><a onClick={() => scrollToSection('certifications')}>Certificações</a></li>
          <li><a onClick={() => scrollToSection('blog')}>Blog</a></li>
          <li><a onClick={() => scrollToSection('contact')}>Contato</a></li>
        </ul>
      </div>
    </nav>
  )
}
