import './Skills.css'

export default function Skills() {
  const skills = [
    {
      category: '.NET & Backend',
      items: ['.NET 10', 'C#', 'ASP.NET Core', 'Entity Framework Core', 'SQL Server', 'Azure']
    },
    {
      category: 'Web Technologies',
      items: ['Blazor WebAssembly', 'Razor Pages', 'TypeScript', 'HTML5', 'CSS3', 'Bootstrap']
    },
    {
      category: 'DevOps & Tools',
      items: ['Docker', 'Git', 'GitHub', 'Azure', 'VS Code', 'Linux']
    },
    {
      category: 'Outros',
      items: ['REST APIs', 'ORM', 'Vite', 'KDE', 'Fedora', 'Web Design']
    }
  ]

  return (
    <section id="skills" className="skills">
      <div className="skills-header">
        <h2>Skills & Tecnologias</h2>
        <p>Ferramentas e tecnologias que domino</p>
      </div>

      <div className="skills-grid">
        {skills.map((skillGroup, index) => (
          <div key={index} className="skill-card">
            <h3>{skillGroup.category}</h3>
            <div className="skill-tags">
              {skillGroup.items.map((skill, idx) => (
                <span key={idx} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
