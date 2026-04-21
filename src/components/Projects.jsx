import { FiExternalLink, FiGithub } from 'react-icons/fi'
import './Projects.css'

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Blazor-AppWeb',
      description: 'Uma aplicação web moderna construída com Blazor WebAssembly (.NET 10) — interface interativa no navegador com C# puro, sem JavaScript.',
      technologies: ['Blazor', '.NET 10', 'C#', 'WebAssembly'],
      github: 'https://github.com/RafaelBatistaDev/Blazor-AppWeb',
      live: 'https://github.com/RafaelBatistaDev/Blazor-AppWeb',
      featured: true
    },
    {
      id: 2,
      title: 'ASP.NET-Core-Web-API-Bitcoin',
      description: 'API RESTful em ASP.NET Core para cotações de Bitcoin em USD e BRL em tempo real. Desenvolvida com .NET 8+, Entity Framework Core e Swagger.',
      technologies: ['ASP.NET Core', 'C#', 'Entity Framework', 'Swagger'],
      github: 'https://github.com/RafaelBatistaDev/ASP.NET-Core-Web-API-Bitcoin-USD-BRL-Live',
      live: 'https://github.com/RafaelBatistaDev/ASP.NET-Core-Web-API-Bitcoin-USD-BRL-Live',
      featured: true
    },
    {
      id: 3,
      title: 'ASP.NET-Core-Web-App-MVC',
      description: 'Aplicação web MVC construída com ASP.NET Core. Projeto educacional demonstrando arquitetura Model-View-Controller.',
      technologies: ['ASP.NET Core', 'MVC', 'C#', 'SQL Server'],
      github: 'https://github.com/RafaelBatistaDev/ASP.NET-Core-Web-App-MVC',
      live: 'https://github.com/RafaelBatistaDev/ASP.NET-Core-Web-App-MVC',
      featured: false
    },
    {
      id: 4,
      title: 'MyCryptoApi - Minimal APIs',
      description: 'API de cotações de criptomoedas construída com ASP.NET Minimal APIs e integração em tempo real com CoinGecko.',
      technologies: ['Minimal APIs', '.NET', 'C#', 'CoinGecko API'],
      github: 'https://github.com/RafaelBatistaDev/Minimal-APIs-.NET',
      live: 'https://github.com/RafaelBatistaDev/Minimal-APIs-.NET',
      featured: false
    },
    {
      id: 5,
      title: 'Razor-Pages-.NET-10',
      description: 'Aplicação Razor Pages para gerenciamento de filmes. Demonstra o uso de Razor Pages com .NET 10.',
      technologies: ['Razor Pages', '.NET 10', 'C#', 'HTML5'],
      github: 'https://github.com/RafaelBatistaDev/Razor-Pages-.NET-10',
      live: 'https://github.com/RafaelBatistaDev/Razor-Pages-.NET-10',
      featured: false
    },
    {
      id: 6,
      title: 'ORM .NET 10',
      description: 'Projeto demonstrando padrões de Object-Relational Mapping com .NET 10 e Entity Framework Core.',
      technologies: ['.NET 10', 'Entity Framework', 'C#', 'SQL Server'],
      github: 'https://github.com/RafaelBatistaDev/ORM',
      live: 'https://github.com/RafaelBatistaDev/ORM',
      featured: false
    }
  ]

  return (
    <section id="projects" className="projects">
      <div className="projects-header">
        <h2>Meus Projetos</h2>
        <p>Alguns dos projetos que realizei</p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className={`project-card ${project.featured ? 'featured' : ''}`}>
            <div className="project-header">
              <h3>{project.title}</h3>
            </div>

            <p className="project-description">{project.description}</p>

            <div className="project-tech">
              {project.technologies.map((tech, idx) => (
                <span key={idx} className="tech-badge">{tech}</span>
              ))}
            </div>

            <div className="project-links">
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                <FiGithub size={20} />
                Código
              </a>
              <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link primary">
                <FiExternalLink size={20} />
                Ver Projeto
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
