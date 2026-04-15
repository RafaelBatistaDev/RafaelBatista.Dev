import { FiArrowRight } from 'react-icons/fi'
import './Blog.css'

export default function Blog() {
  const posts = [
    {
      id: 1,
      title: 'Como começar com React',
      excerpt: 'Um guia completo para iniciantes que querem aprender React do zero.',
      date: '15 de Abril de 2024',
      category: 'React',
      readTime: '5 min de leitura'
    },
    {
      id: 2,
      title: 'Otimizando performance em aplicações Web',
      excerpt: 'Dicas práticas e técnicas para melhorar a performance de suas aplicações web.',
      date: '10 de Abril de 2024',
      category: 'Performance',
      readTime: '8 min de leitura'
    },
    {
      id: 3,
      title: 'JavaScript moderno: O que você precisa saber',
      excerpt: 'Explore as features mais importantes do JavaScript moderno e como usá-las.',
      date: '5 de Abril de 2024',
      category: 'JavaScript',
      readTime: '7 min de leitura'
    },
    {
      id: 4,
      title: 'Introdução ao Node.js',
      excerpt: 'Comece a desenvolver aplicações backend poderosas com Node.js.',
      date: '30 de Março de 2024',
      category: 'Node.js',
      readTime: '6 min de leitura'
    }
  ]

  return (
    <section id="blog" className="blog">
      <div className="blog-header">
        <h2>Blog & Artigos</h2>
        <p>Compartilhando conhecimento através de artigos sobre desenvolvimento</p>
      </div>

      <div className="blog-grid">
        {posts.map((post) => (
          <article key={post.id} className="blog-card">
            <div className="blog-category">{post.category}</div>

            <h3>{post.title}</h3>

            <p className="blog-excerpt">{post.excerpt}</p>

            <div className="blog-meta">
              <span className="blog-date">{post.date}</span>
              <span className="blog-read-time">{post.readTime}</span>
            </div>

            <a href="#" className="blog-link">
              Ler Artigo
              <FiArrowRight size={18} />
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}
