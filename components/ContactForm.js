import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simular envío
    setTimeout(() => {
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setIsLoading(false);
    }, 1000);
  };

  const handleWhatsAppSubmit = () => {
    const message = `Hola Maximiliano! Soy ${formData.name} (${formData.email}).

${formData.message}`;
    
    const whatsappUrl = `https://wa.me/5492211234567?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="contact-form">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nombre</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            disabled={isLoading}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            disabled={isLoading}
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Mensaje</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            rows="4"
            required
            disabled={isLoading}
          />
        </div>

        <div className="form-actions">
          <button
            type="submit"
            className="btn-submit"
            disabled={isLoading}
          >
            {isLoading ? 'Enviando...' : 'Enviar Mensaje'}
          </button>

          <button
            type="button"
            onClick={handleWhatsAppSubmit}
            className="btn-whatsapp"
            disabled={isLoading}
          >
            📱 WhatsApp
          </button>
        </div>

        {submitStatus === 'success' && (
          <div className="success-message">
            ¡Mensaje enviado correctamente! Te responderé pronto.
          </div>
        )}
      </form>

      <style jsx>{`
        .contact-form {
          width: 100%;
        }
        
        .form-group {
          margin-bottom: 1.5rem;
        }
        
        .form-group label {
          display: block;
          color: #f8fafc;
          font-weight: 500;
          margin-bottom: 0.5rem;
        }
        
        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 0.75rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 0.5rem;
          color: #e2e8f0;
          font-size: 1rem;
          transition: all 0.3s ease;
        }
        
        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: #3b82f6;
          background: rgba(255, 255, 255, 0.1);
        }
        
        .form-group input:disabled,
        .form-group textarea:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
        
        .form-actions {
          display: flex;
          gap: 1rem;
          margin-bottom: 1rem;
        }
        
        .btn-submit,
        .btn-whatsapp {
          flex: 1;
          padding: 0.75rem 1.5rem;
          border: none;
          border-radius: 0.5rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .btn-submit {
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          color: white;
        }
        
        .btn-submit:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(59, 130, 246, 0.3);
        }
        
        .btn-whatsapp {
          background: #25d366;
          color: white;
        }
        
        .btn-whatsapp:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(37, 211, 102, 0.3);
        }
        
        .btn-submit:disabled,
        .btn-whatsapp:disabled {
          opacity: 0.6;
          cursor: not-allowed;
          transform: none;
        }
        
        .success-message {
          background: rgba(34, 197, 94, 0.1);
          border: 1px solid rgba(34, 197, 94, 0.3);
          color: #22c55e;
          padding: 1rem;
          border-radius: 0.5rem;
          text-align: center;
          font-weight: 500;
        }
      `}</style>
    </div>
  );
};

export default ContactForm;