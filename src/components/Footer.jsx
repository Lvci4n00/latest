import { useState } from 'react';

export default function Footer() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [successMsg, setSuccessMsg] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.subject || !formData.message) {
      setSuccessMsg('Por favor complete el asunto y el mensaje.');
      return;
    }
    const key = 'contactMessages';
    const existing = JSON.parse(localStorage.getItem(key) || '[]');
    existing.push({ ...formData, createdAt: new Date().toISOString() });
    localStorage.setItem(key, JSON.stringify(existing));
    
    setSuccessMsg('Mensaje guardado correctamente.');
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSuccessMsg(''), 3500);
  };

  return (
    <footer className="site-footer">
      <hr />
      <div className="container">
        <p className="footer-title">Síguenos y contáctanos</p>
        <nav aria-label="Redes sociales" className="social-links">
          <a href="https://wa.me/123456789" target="_blank" rel="noreferrer">WhatsApp</a>
          <span aria-hidden="true">|</span>
          <a href="https://instagram.com/tu_usuario" target="_blank" rel="noreferrer">Instagram</a>
          <span aria-hidden="true">|</span>
          <a href="https://facebook.com/tu_pagina" target="_blank" rel="noreferrer">Facebook</a>
        </nav>

        <p>Teléfono: <a href="tel:+123456789">+1 234 567 89</a></p>
        <p>Dirección: Calle Falsa 123, Ciudad Ejemplo</p>
        <p>Correo: <a href="mailto:info@hardwarehub.example">info@hardwarehub.example</a></p>

        <div className="footer-auth-forms">
          <form className="contact-form" onSubmit={handleSubmit} aria-labelledby="contact-form-title">
            <h3 id="contact-form-title">Envíanos un mensaje</h3>
            <label htmlFor="name">Nombre</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />

            <label htmlFor="email">Correo electrónico</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />

            <label htmlFor="subject">Asunto</label>
            <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required />

            <label htmlFor="message">Mensaje</label>
            <textarea id="message" name="message" rows="5" value={formData.message} onChange={handleChange} required></textarea>

            <button type="submit" className="btn">Enviar mensaje</button>
            {successMsg && <p className="contact-success" style={{ color: 'var(--primary)' }}>{successMsg}</p>}
          </form>
        </div>
      </div>
    </footer>
  );
}