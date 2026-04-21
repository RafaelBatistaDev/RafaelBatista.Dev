import { FiBook, FiAward } from 'react-icons/fi'
import './Certifications.css'

const certifications = [
  {
    platform: 'Microsoft Learn',
    icon: '🤖',
    courses: [
      'AZ-2008-A: DevOps Foundations: Os princípios e práticas principais',
      'Criar aplicativos .NET com C#',
      'Criar uma base para criar agentes de IA e expandir Microsoft 365 Copilot',
      'Conceitos de IA para desenvolvedores e profissionais de tecnologia',
      'Criar aplicativos Web com ASP.NET Core',
      'Introdução à IA no Azure',
      'Expandir o Microsoft 365 Copilot no Copilot Studio'
    ]
  },
  {
    platform: 'IBM SkillsBuild Learning',
    icon: '💻',
    courses: [
      'Fundamentos da inteligência artificial',
      'Fundamentos da tecnologia da informação',
      'Desenvolvimento web: introdução à programação',
      'Fundamentos do Desenvolvimento Web',
      'Fundamentos de cibersegurança'
    ]
  },
  {
    platform: 'Linux Foundation',
    icon: '🐧',
    courses: [
      'Introduction to Linux (LFS101)',
      'Introduction to Cloud Infrastructure Technologies (LFS151)',
      'Introduction to Kubernetes (LFS158)',
      'Introduction to Jenkins (LFS167)',
      'Understanding the OWASP® Top 10 Security Threats (SKF100)',
      'Introduction to WebAssembly (LFD133)',
      'Introduction to DevOps and Site Reliability Engineering (LFS162)',
      'OpenAPI Fundamentals LFEL1011',
      'Introduction to Node.js (LFW111)',
      'Introduction to JavaScript Security (LFS184)',
      'XSS Exploits and Defenses (LFEL1010)',
      'Introdução ao Zero Trust (LFS183)',
      'Introduction to RISC-V (LFD110)',
      'Cybersecurity Essentials (LFC108)'
    ]
  },
  {
    platform: 'IFRS (Instituto Federal do Rio Grande do Sul)',
    icon: '🎓',
    courses: [
      'Programador Web – 200h',
      'Banco de Dados 1: fundamentos – 20h',
      'Computação: Fundamentos – 25h',
      'CSS3: Estilizando Páginas Web com Estilo – 40h',
      'Descoberta de Conhecimento em Bases de Dados: fundamentos - 20h',
      'HTML5: Fundamentos para Construção de Páginas Web Modernas – 40h',
      'JavaScript: Fundamentos para Desenvolvimento Web Interativo – 20h',
      'Lógica de Programação: começando a desenvolver seus primeiros programas – 20h',
      'Planilhas Google: Planilha Eletrónica – 60h',
      'Programação Básica com Java I – 40h',
      'Manutenção de Computadores: hardware, software e evolução - 20h',
      'Manutenção de Computadores: simuladores, sistemas operacionais e montagem - 20h',
      'Projeto de Sistemas Web - 30h',
      'Python Fundamental 1 (extra Setembro) - 20h',
      'Sistemas Operacionais - 20h',
      'Softwares de Segurança da Informação - 20h',
      'Administração Pública Municipal - 20h',
      'Administração: fundamentos - 40h',
      'Comunicação e Atendimento ao Cliente - 20h',
      'Administração Pública - 20h'
    ]
  },
  {
    platform: 'FinOps Foundation',
    icon: '💰',
    courses: [
      'Introduction to FinOps'
    ]
  }
]

const professionalGoals = [
  {
    title: 'Desenvolvedor .NET Júnior',
    description: 'Desenvolvedor em início de carreira com foco sólido no ecossistema .NET e linguagem C#. Experiência em versionamento com Git/GitHub. Capacidade de aplicar Inteligência Artificial e Engenharia de Prompt para otimizar a escrita de código, acelerar o refactoring e realizar testes unitários, buscando entregar soluções de Frontend eficientes e escaláveis.'
  },
  {
    title: 'Especialista em IA Generativa',
    description: 'Engenharia de Prompt, Automação de tarefas com LLMs (Gemini/ChatGPT/Copilot) e integração de ferramentas de produtividade.'
  },
  {
    title: 'Auxiliar de TI / Suporte / Auxiliar de Escritório',
    description: 'Profissional de TI com foco em suporte ao usuário, manutenção de hardware e infraestrutura de redes. Diferencial em automação de processos rotineiros e resolução de problemas técnicos utilizando ferramentas de IA. Conhecimento em lógica de programação para criação de scripts e otimização.'
  }
]

export default function Certifications() {
  return (
    <section id="certifications" className="certifications">
      <div className="certifications-header">
        <h2>Skills, Tecnologias & Carreira</h2>
        <p>Continuamente aprendendo e desenvolvendo novas habilidades</p>
      </div>

      <div className="certifications-container">
        <div className="professional-goals">
          <h3>Pretensão de Emprego</h3>
          <div className="goals-grid">
            {professionalGoals.map((goal, index) => (
              <div key={index} className="goal-card">
                <div className="goal-icon">
                  <FiAward size={32} />
                </div>
                <h4>{goal.title}</h4>
                <p>{goal.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <div key={index} className="cert-card">
              <div className="cert-icon">{cert.icon}</div>
              <h3>{cert.platform}</h3>
              <ul className="courses-list">
                {cert.courses.map((course, courseIndex) => (
                  <li key={courseIndex}>{course}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
