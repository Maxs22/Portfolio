import Head from "next/head";
import Layout, { name } from "../components/layout";
import { GitHubLink, LinkedInLink } from "../components/linkIcon";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{name} - Portfolio</title>
        <meta name="description" content="Maximiliano Mendez - Front-End Developer Portfolio" />
      </Head>
      
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content text-center">
            <h1 className="mb-4">Maximiliano Mendez</h1>
            <p className="mb-8">Frontend Developer</p>
            <div className="hero-links mb-8">
              <GitHubLink size="2x" />
              <LinkedInLink size="2x" />
            </div>
            <a href="#work" className="btn">Ver Trabajos</a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="mb-4">Sobre Mí</h2>
            <p className="mb-8">
              Desarrollador frontend apasionado por crear experiencias web excepcionales. 
              Especializado en React, Next.js y tecnologías modernas.
            </p>
          </div>
          
          <div className="grid grid-cols-3">
            <div className="text-center">
              <h3 className="mb-2">React</h3>
              <p>Desarrollo de interfaces modernas</p>
            </div>
            <div className="text-center">
              <h3 className="mb-2">Next.js</h3>
              <p>Aplicaciones web de alto rendimiento</p>
            </div>
            <div className="text-center">
              <h3 className="mb-2">TypeScript</h3>
              <p>Código tipado y mantenible</p>
            </div>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="mb-4">Proyectos</h2>
            <p>Algunos de mis trabajos más recientes</p>
          </div>
          
          <div className="grid grid-cols-2">
            <div className="project-card">
              <h3 className="mb-2">Portfolio Website</h3>
              <p className="mb-4">Sitio web personal desarrollado con Next.js y TypeScript.</p>
              <div className="project-links">
                <a href="#" className="btn btn-outline">Ver Demo</a>
                <a href="#" className="btn btn-outline">Código</a>
              </div>
            </div>
            
            <div className="project-card">
              <h3 className="mb-2">E-commerce App</h3>
              <p className="mb-4">Aplicación de comercio electrónico con React y Node.js.</p>
              <div className="project-links">
                <a href="#" className="btn btn-outline">Ver Demo</a>
                <a href="#" className="btn btn-outline">Código</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <div className="container">
          <div className="text-center">
            <h2 className="mb-4">Contacto</h2>
            <p className="mb-8">¿Tienes un proyecto en mente? Hablemos.</p>
            <a href="mailto:maximiliano@example.com" className="btn">
              Enviar Mensaje
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}