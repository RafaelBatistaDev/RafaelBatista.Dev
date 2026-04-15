import { FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi'
import './Footer.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Rafael Batista</h3>
          <p>C# Developer | Desenvolvedor de Aplicações Modernas com .NET. Especializado em ASP.NET Core, Blazor e APIs RESTful.</p>
        </div>

        <div className="footer-section">
          <h4>Links Rápidos</h4>
          <ul>
            <li><a href="#home">Sobre</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projetos</a></li>
            <li><a href="#extensions">Extensões</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#contact">Contato</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Redes Sociais</h4>
          <div className="social-links">
            <a href="https://github.com/RafaelBatistaDev" target="_blank" rel="noopener noreferrer" title="GitHub" aria-label="GitHub">
              <FiGithub size={24} />
            </a>
            <a href="https://www.linkedin.com/in/rafael-batista-454620388/" target="_blank" rel="noopener noreferrer" title="LinkedIn" aria-label="LinkedIn">
              <FiLinkedin size={24} />
            </a>
            <a href="https://learn.microsoft.com/pt-br/users/rafaelbatistadasilva-8748/" target="_blank" rel="noopener noreferrer" title="Microsoft Learn" aria-label="Microsoft Learn">
              <span style={{fontSize: '24px'}}>🎓</span>
            </a>
            <a href="https://roadmap.sh/u/rafaelbs" target="_blank" rel="noopener noreferrer" title="Roadmap" aria-label="Roadmap">
              <span style={{fontSize: '24px'}}>🗺️</span>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} Rafael Batista. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}
