import Head from "next/head";
import Layout, { name } from "../components/layout";
import { GitHubLink, LinkedInLink, ResumeLink } from "../components/linkIcon";
import NavLink from "../components/navLink";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{name} - Portfolio</title>
        <meta name="description" content="Maximiliano Mendez - Front-End Developer Portfolio" />
      </Head>
      
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background">
          <div className="hero-gradient"></div>
        </div>
        
        <div className="container">
          <div className="hero-content animate-fadeInUp">
            <div className="hero-badge">
              <span className="badge-text">Frontend Developer</span>
            </div>
            
            <h1 className="hero-title">
              <span className="title-line">Hola, soy</span>
              <span className="title-name">Maximiliano Mendez</span>
            </h1>
            
            <p className="hero-description">
              Desarrollador Frontend especializado en crear experiencias digitales excepcionales 
              con React, Next.js y tecnologías modernas.
            </p>
            
            <div className="hero-actions">
              <a href="#projects" className="btn btn-primary">
                Ver Proyectos
              </a>
              <a href="#contact" className="btn btn-secondary">
                Contactar
              </a>
            </div>
            
            <div className="hero-social">
              <GitHubLink size="2x" />
              <LinkedInLink size="2x" />
            </div>
          </div>
          
          <div className="hero-visual animate-fadeInRight">
            <div className="code-window">
              <div className="window-header">
                <div className="window-controls">
                  <span className="control close"></span>
                  <span className="control minimize"></span>
                  <span className="control maximize"></span>
                </div>
                <span className="window-title">portfolio.js</span>
              </div>
              <div className="code-content">
                <div className="code-line">
                  <span className="code-keyword">const</span> 
                  <span className="code-variable"> developer</span> 
                  <span className="code-operator">=</span> 
                  <span className="code-string">"Maximiliano"</span>
                  <span className="code-operator">;</span>
                </div>
                <div className="code-line">
                  <span className="code-keyword">const</span> 
                  <span className="code-variable"> skills</span> 
                  <span className="code-operator">=</span> 
                  <span className="code-bracket">[</span>
                  <span className="code-string">"React"</span>
                  <span className="code-operator">,</span> 
                  <span className="code-string">"Next.js"</span>
                  <span className="code-operator">,</span> 
                  <span className="code-string">"TypeScript"</span>
                  <span className="code-bracket">]</span>
                  <span className="code-operator">;</span>
                </div>
                <div className="code-line">
                  <span className="code-keyword">const</span> 
                  <span className="code-variable"> passion</span> 
                  <span className="code-operator">=</span> 
                  <span className="code-string">"UI/UX Design"</span>
                  <span className="code-operator">;</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section">
        <div className="container">
          <div className="section-header animate-fadeInUp">
            <h2 className="section-title">Tecnologías</h2>
            <p className="section-description">
              Herramientas y tecnologías que uso para crear experiencias digitales excepcionales
            </p>
          </div>
          
          <div className="skills-grid grid grid-cols-2 grid-cols-3 grid-cols-4">
            <div className="skill-card card animate-fadeInUp">
              <div className="skill-icon">⚛️</div>
              <h3 className="skill-name">React</h3>
              <p className="skill-description">Biblioteca de UI</p>
            </div>
            
            <div className="skill-card card animate-fadeInUp">
              <div className="skill-icon">🚀</div>
              <h3 className="skill-name">Next.js</h3>
              <p className="skill-description">Framework React</p>
            </div>
            
            <div className="skill-card card animate-fadeInUp">
              <div className="skill-icon">⚡</div>
              <h3 className="skill-name">TypeScript</h3>
              <p className="skill-description">Tipado estático</p>
            </div>
            
            <div className="skill-card card animate-fadeInUp">
              <div className="skill-icon">🎨</div>
              <h3 className="skill-name">CSS</h3>
              <p className="skill-description">Estilos modernos</p>
            </div>
            
            <div className="skill-card card animate-fadeInUp">
              <div className="skill-icon">📱</div>
              <h3 className="skill-name">Responsive</h3>
              <p className="skill-description">Diseño adaptativo</p>
            </div>
            
            <div className="skill-card card animate-fadeInUp">
              <div className="skill-icon">🔍</div>
              <h3 className="skill-name">SEO</h3>
              <p className="skill-description">Optimización</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <div className="container">
          <div className="section-header animate-fadeInUp">
            <h2 className="section-title">Proyectos Destacados</h2>
            <p className="section-description">
              Algunos de mis trabajos más recientes y destacados
            </p>
          </div>
          
          <div className="projects-grid grid grid-cols-1 grid-cols-2">
            <div className="project-card card animate-fadeInLeft">
              <div className="project-image">
                <div className="project-placeholder">🚀</div>
              </div>
              <div className="project-content">
                <h3 className="project-title">Portfolio Website</h3>
                <p className="project-description">
                  Sitio web personal desarrollado con Next.js, TypeScript y diseño moderno.
                </p>
                <div className="project-tech">
                  <span className="tech-tag">Next.js</span>
                  <span className="tech-tag">TypeScript</span>
                  <span className="tech-tag">CSS</span>
                </div>
                <div className="project-links">
                  <a href="#" className="project-link">Ver Demo</a>
                  <a href="#" className="project-link">Código</a>
                </div>
              </div>
            </div>
            
            <div className="project-card card animate-fadeInRight">
              <div className="project-image">
                <div className="project-placeholder">🎮</div>
              </div>
              <div className="project-content">
                <h3 className="project-title">Game Platform</h3>
                <p className="project-description">
                  Plataforma de juegos con interfaz moderna y funcionalidades avanzadas.
                </p>
                <div className="project-tech">
                  <span className="tech-tag">React</span>
                  <span className="tech-tag">Node.js</span>
                  <span className="tech-tag">MongoDB</span>
                </div>
                <div className="project-links">
                  <a href="#" className="project-link">Ver Demo</a>
                  <a href="#" className="project-link">Código</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <div className="container">
          <div className="section-header animate-fadeInUp">
            <h2 className="section-title">¿Trabajamos juntos?</h2>
            <p className="section-description">
              Estoy disponible para proyectos freelance y colaboraciones
            </p>
          </div>
          
          <div className="contact-content animate-fadeInUp">
            <div className="contact-info">
              <h3>Contacto</h3>
              <p>¿Tienes un proyecto en mente? ¡Hablemos!</p>
              <div className="contact-links">
                <a href="mailto:maximiliano@example.com" className="contact-link">
                  📧 maximiliano@example.com
                </a>
                <a href="tel:+1234567890" className="contact-link">
                  📱 +1 (234) 567-890
                </a>
              </div>
            </div>
            
            <div className="contact-cta">
              <a href="mailto:maximiliano@example.com" className="btn btn-primary">
                Enviar Mensaje
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}