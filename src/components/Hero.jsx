import { FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi'
import './Hero.css'

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>Olá, eu sou Rafael Batista</h1>
        <p className="hero-subtitle">C# Developer - Desenvolvendo Aplicações Modernas com .NET</p>

        <div className="hero-description">
          <p>
            Sou um desenvolvedor de software apaixonado por criar aplicações web e desktop robustas com C# e .NET.
            Especializado em ASP.NET Core, Blazor WebAssembly e APIs RESTful. Atualmente focado em aplicações modernas e escaláveis.
          </p>
        </div>

        <div className="hero-cta">
          <button className="btn btn-primary">Download CV</button>
          <button className="btn btn-secondary">Contato</button>
        </div>

        <div className="hero-social">
          <a href="mailto:rafaelbatistadev@outlook.com" title="Email" aria-label="Email">
            <FiMail size={28} />
          </a>
          <a href="https://github.com/RafaelBatistaDev" target="_blank" rel="noopener noreferrer" title="GitHub" aria-label="GitHub">
            <FiGithub size={28} />
          </a>
          <a href="https://www.linkedin.com/in/rafael-batista-454620388/" target="_blank" rel="noopener noreferrer" title="LinkedIn" aria-label="LinkedIn">
            <FiLinkedin size={28} />
          </a>
          <a href="https://learn.microsoft.com/pt-br/users/rafaelbatistadasilva-8748/" target="_blank" rel="noopener noreferrer" title="Microsoft Learn" aria-label="Microsoft Learn">
            <span style={{fontSize: '28px'}}>🎓</span>
          </a>
          <a href="https://roadmap.sh/u/rafaelbs" target="_blank" rel="noopener noreferrer" title="Roadmap" aria-label="Roadmap">
            <span style={{fontSize: '28px'}}>🗺️</span>
          </a>
        </div>
      </div>
    </section>
  )
}
