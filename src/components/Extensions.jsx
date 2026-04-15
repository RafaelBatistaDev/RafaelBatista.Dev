import { FiDownload, FiExternalLink } from 'react-icons/fi'
import './Extensions.css'

export default function Extensions() {
  const extensions = [
    {
      id: 1,
      title: 'CLAW - IA Live Server',
      description: 'Extensão para VS Code com servidor ao vivo e inteligência artificial integrada para sugestões automáticas de código.',
      marketplace: 'VS Code Marketplace',
      stars: 'Extensão Publicada',
      url: 'https://marketplace.visualstudio.com/items?itemName=RafaelBatista.claw-ia-live-server',
      icon: '⚡'
    },
    {
      id: 2,
      title: 'CLAW Agent',
      description: 'Agent inteligente para automação de tarefas em desenvolvimento com VS Code. Funcionalidades avançadas de IA.',
      marketplace: 'VS Code Marketplace',
      stars: 'Extensão Publicada',
      url: 'https://marketplace.visualstudio.com/items?itemName=RafaelBatista.claw-agent',
      icon: '🤖'
    },
    {
      id: 3,
      title: 'CLAW RafaelIA Suggestions',
      description: 'Sugestões inteligentes inline com IA automática. Aumenta sua produtividade com completamento de código inteligente.',
      marketplace: 'VS Code Marketplace',
      stars: 'Extensão Publicada',
      url: 'https://marketplace.visualstudio.com/items?itemName=RafaelBatista.clawrafaelia-suggestions',
      icon: '💡'
    },
    {
      id: 4,
      title: 'CLAW - Sugestões Inline com IA',
      description: 'Plugin para JetBrains IDEs. Sugestões automáticas com inteligência artificial para IntelliJ IDEA, WebStorm e mais.',
      marketplace: 'JetBrains Marketplace',
      stars: 'Plugin Publicado',
      url: 'https://plugins.jetbrains.com/plugin/31144-claw--sugestoes-inline-com-ia-automatica',
      icon: '🎯'
    }
  ]

  return (
    <section id="extensions" className="extensions">
      <div className="extensions-header">
        <h2>Extensões & Marketplace</h2>
        <p>Ferramentas de IA que criei para aumentar sua produtividade</p>
      </div>

      <div className="extensions-container">
        <div className="extensions-grid">
          {extensions.map((ext) => (
            <div key={ext.id} className="extension-card">
              <div className="extension-icon">{ext.icon}</div>
              <h3>{ext.title}</h3>
              <p className="extension-description">{ext.description}</p>

              <div className="extension-badge">
                <span className="marketplace-badge">{ext.marketplace}</span>
              </div>

              <a
                href={ext.url}
                target="_blank"
                rel="noopener noreferrer"
                className="extension-link"
              >
                <FiExternalLink size={18} />
                Ver no Marketplace
              </a>
            </div>
          ))}
        </div>

        <div className="marketplace-links">
          <h3>Todos os Projetos</h3>
          <div className="links-grid">
            <a
              href="https://marketplace.visualstudio.com/publishers/RafaelBatista"
              target="_blank"
              rel="noopener noreferrer"
              className="marketplace-card"
            >
              <span>📦</span>
              <h4>VS Code Publisher</h4>
              <p>Veja todas as minhas extensões no VS Code Marketplace</p>
            </a>

            <a
              href="https://learn.microsoft.com/pt-br/users/rafaelbatistadasilva-8748/"
              target="_blank"
              rel="noopener noreferrer"
              className="marketplace-card"
            >
              <span>🎓</span>
              <h4>Microsoft Learn</h4>
              <p>Certificações e aprendizado contínuo em tecnologias Microsoft</p>
            </a>

            <a
              href="https://roadmap.sh/u/rafaelbs"
              target="_blank"
              rel="noopener noreferrer"
              className="marketplace-card"
            >
              <span>🗺️</span>
              <h4>Roadmap.sh</h4>
              <p>Minha jornada de aprendizado e desenvolvimento profissional</p>
            </a>

            <a
              href="https://www.linkedin.com/in/rafael-batista-454620388/"
              target="_blank"
              rel="noopener noreferrer"
              className="marketplace-card"
            >
              <span>💼</span>
              <h4>LinkedIn</h4>
              <p>Conecte-se comigo para oportunidades profissionais</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
