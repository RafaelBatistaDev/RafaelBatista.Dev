import { useState } from 'react'
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi'
import './Contact.css'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData)
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' })
    alert('Mensagem enviada com sucesso!')
  }

  return (
    <section id="contact" className="contact">
      <div className="contact-header">
        <h2>Entre em Contato</h2>
        <p>Vou responder assim que possível</p>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <div className="contact-item">
            <FiMail size={28} className="contact-icon" />
            <h3>Email</h3>
            <a href="mailto:rafaelbatistadev@outlook.com">rafaelbatistadev@outlook.com</a>
          </div>

          <div className="contact-item">
            <FiMail size={28} className="contact-icon" />
            <h3>GitHub</h3>
            <a href="https://github.com/RafaelBatistaDev" target="_blank" rel="noopener noreferrer">github.com/RafaelBatistaDev</a>
          </div>

          <div className="contact-item">
            <FiMail size={28} className="contact-icon" />
            <h3>LinkedIn</h3>
            <a href="https://www.linkedin.com/in/rafael-batista-454620388/" target="_blank" rel="noopener noreferrer">rafael-batista-454620388</a>
          </div>

          <div className="contact-item">
            <FiMapPin size={28} className="contact-icon" />
            <h3>Localização</h3>
            <p>Recife, Pernambuco, Brasil</p>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Seu Nome"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Seu Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              name="subject"
              placeholder="Assunto"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <textarea
              name="message"
              placeholder="Sua Mensagem"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type="submit" className="submit-btn">
            <FiSend size={20} />
            Enviar Mensagem
          </button>
        </form>
      </div>
    </section>
  )
}
