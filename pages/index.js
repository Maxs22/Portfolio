import Head from "next/head";
import { useState, useEffect } from 'react';

 function Home() {
  const [language, setLanguage] = useState('es');
  const [activeSection, setActiveSection] = useState('home');

  const translations = {
    es: {
      nav: {
        about: 'Acerca de',
        work: 'Trabajo',
        contact: 'Contacto'
      },
      hero: {
        subtitle: 'Desarrollador Frontend',
        title: 'MAXIMILIANO MENDEZ',
        description: 'Creando experiencias digitales excepcionales con código limpio, tecnologías modernas y resolución creativa de problemas.',
        viewWork: 'Ver Trabajo',
        contactMe: 'Contáctame'
      },
      about: {
        subtitle: 'Acerca de mí',
        title: 'Creando Soluciones Digitales',
        description: 'Desarrollador Senior de Software en PVS Latam, especializado en crear aplicaciones móviles escalables y soluciones financieras. Con experiencia en múltiples países, me enfoco en entregar experiencias de usuario excepcionales a través de tecnologías modernas.',
        experience: 'Experiencia',
        years: 'Años',
        countries: 'Países',
        projects: 'Proyectos',
        quality: 'Calidad'
      },
      work: {
        subtitle: 'Portafolio',
        title: 'Proyectos Destacados',
        viewCode: 'Ver Código →'
      },
      contact: {
        subtitle: 'Contacto',
        title: 'Construyamos Algo Increíble',
        description: '¿Listo para comenzar tu próximo proyecto? Me encantaría escuchar sobre tus ideas y discutir cómo podemos darles vida.',
        email: 'Enviar Email',
        whatsapp: 'WhatsApp'
      },
      footer: {
        rights: 'Todos los derechos reservados.'
      }
    },
    en: {
      nav: {
        about: 'About',
        work: 'Work',
        contact: 'Contact'
      },
      hero: {
        subtitle: 'Frontend Developer',
        title: 'MAXIMILIANO MENDEZ',
        description: 'Building exceptional digital experiences with clean code, modern technologies, and creative problem-solving.',
        viewWork: 'View Work',
        contactMe: 'Contact Me'
      },
      about: {
        subtitle: 'About Me',
        title: 'Crafting Digital Solutions',
        description: 'Senior Software Developer at PVS Latam, specializing in creating scalable mobile applications and financial solutions. With experience across multiple countries, I focus on delivering exceptional user experiences through modern technologies.',
        experience: 'Experience',
        years: 'Years',
        countries: 'Countries',
        projects: 'Projects',
        quality: 'Quality'
      },
      work: {
        subtitle: 'Portfolio',
        title: 'Featured Projects',
        viewCode: 'View Code →'
      },
      contact: {
        subtitle: 'Contact',
        title: "Let's Build Something Amazing",
        description: "Ready to start your next project? I'd love to hear about your ideas and discuss how we can bring them to life.",
        email: 'Send Email',
        whatsapp: 'WhatsApp'
      },
      footer: {
        rights: 'All rights reserved.'
      }
    }
  };

  const t = translations[language];

  // Función para detectar la sección activa
  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const sections = ['home', 'about', 'work', 'contact'];
          const scrollPosition = window.scrollY + 100;

          for (let i = sections.length - 1; i >= 0; i--) {
            const section = document.getElementById(sections[i]);
            if (section && section.offsetTop <= scrollPosition) {
              setActiveSection(sections[i]);
              break;
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <Head>
        <title>Maximiliano Mendez - Portfolio | Desarrollador Frontend</title>
        <meta name="description" content="Maximiliano Mendez - Frontend Developer" />
      </Head>
      
      {/* Language Switch */}
      <div style={{
        position: 'fixed',
        top: '20px',
        right: '20px',
        zIndex: 1001,
        background: 'rgba(26, 26, 26, 0.9)',
        backdropFilter: 'blur(10px)',
        borderRadius: '25px',
        padding: '0.5rem',
        border: '1px solid rgba(255, 107, 53, 0.3)'
      }}>
        <div style={{
          display: 'flex',
          gap: '0.5rem'
        }}>
          <button
            onClick={() => setLanguage('es')}
            style={{
              padding: '0.5rem 1rem',
              background: language === 'es' ? '#ff6b35' : 'transparent',
              color: language === 'es' ? 'white' : '#ccc',
              border: 'none',
              borderRadius: '20px',
              fontSize: '0.8rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
          >
            ES
          </button>
          <button
            onClick={() => setLanguage('en')}
            style={{
              padding: '0.5rem 1rem',
              background: language === 'en' ? '#ff6b35' : 'transparent',
              color: language === 'en' ? 'white' : '#ccc',
              border: 'none',
              borderRadius: '20px',
              fontSize: '0.8rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
          >
            EN
          </button>
        </div>
      </div>

      {/* Sidebar Navigation */}
      <aside style={{
        position: 'fixed',
        left: 0,
        top: 0,
        width: '80px',
        height: '100vh',
        background: '#1a1a1a',
        zIndex: 1000,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem 0'
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
          alignItems: 'center'
        }}>
          <a href="#home" style={{
            width: activeSection === 'home' ? '12px' : '8px',
            height: activeSection === 'home' ? '12px' : '8px',
            background: activeSection === 'home' ? '#ff6b35' : '#666',
            borderRadius: '50%',
            display: 'block',
            transition: 'all 0.3s ease'
          }}></a>
          <a href="#about" style={{
            width: activeSection === 'about' ? '12px' : '8px',
            height: activeSection === 'about' ? '12px' : '8px',
            background: activeSection === 'about' ? '#ff6b35' : '#666',
            borderRadius: '50%',
            display: 'block',
            transition: 'all 0.3s ease'
          }}></a>
          <a href="#work" style={{
            width: activeSection === 'work' ? '12px' : '8px',
            height: activeSection === 'work' ? '12px' : '8px',
            background: activeSection === 'work' ? '#ff6b35' : '#666',
            borderRadius: '50%',
            display: 'block',
            transition: 'all 0.3s ease'
          }}></a>
          <a href="#contact" style={{
            width: activeSection === 'contact' ? '12px' : '8px',
            height: activeSection === 'contact' ? '12px' : '8px',
            background: activeSection === 'contact' ? '#ff6b35' : '#666',
            borderRadius: '50%',
            display: 'block',
            transition: 'all 0.3s ease'
          }}></a>
        </div>
      </aside>

      {/* Main Content */}
      <main style={{
        marginLeft: '80px',
        minHeight: '100vh'
      }}>
      {/* Hero Section */}
        <section id="home" style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          background: 'linear-gradient(45deg, #0f0f0f 0%, #1a1a1a 100%)',
          color: 'white',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Animated Background */}
          <div style={{
            position: 'absolute',
            top: '20%',
            right: '10%',
            width: '300px',
            height: '300px',
            border: '2px solid #ff6b35',
            borderRadius: '50%',
            animation: 'rotate 20s linear infinite'
          }}></div>
          <div style={{
            position: 'absolute',
            bottom: '30%',
            left: '15%',
            width: '150px',
            height: '150px',
            border: '1px solid #ff6b35',
            borderRadius: '50%',
            animation: 'rotate 15s linear infinite reverse'
          }}></div>
          
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 4rem',
            display: 'grid',
            gridTemplateColumns: '2fr 1fr',
            gap: '4rem',
            alignItems: 'center',
            position: 'relative',
            zIndex: 2
          }}>
            <div>
              <div style={{
                fontSize: '0.9rem',
                color: '#ff6b35',
                fontWeight: '600',
                letterSpacing: '0.1em',
                marginBottom: '1rem',
                textTransform: 'uppercase'
              }}>
                {t.hero.subtitle}
              </div>
              
              <h1 style={{
                fontSize: '4.5rem',
                fontWeight: '900',
                marginBottom: '1.5rem',
                lineHeight: '0.9',
                letterSpacing: '-0.02em'
              }}>
                MAXIMILIANO
                <br />
                <span style={{ 
                  color: '#ff6b35',
                  background: 'linear-gradient(45deg, #ff6b35, #ff8c42)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>MENDEZ</span>
              </h1>
              
              <p style={{
                fontSize: '1.2rem',
                color: '#ccc',
                lineHeight: '1.6',
                marginBottom: '3rem',
                maxWidth: '500px',
                fontWeight: '300'
              }}>
                {t.hero.description}
              </p>
              
              <div style={{ 
                display: 'flex', 
                gap: '1rem', 
                flexWrap: 'wrap'
              }}>
                <a href="#work" style={{
                  padding: '1rem 2.5rem',
                  background: '#ff6b35',
                  color: 'white',
                  textDecoration: 'none',
                  fontWeight: '600',
                  fontSize: '0.9rem',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  transition: 'all 0.3s ease',
                  display: 'inline-block'
                }}>
                  {t.hero.viewWork}
                </a>
                <a href="#contact" style={{
                  padding: '1rem 2.5rem',
                  background: 'transparent',
                  color: 'white',
                  textDecoration: 'none',
                  fontWeight: '600',
                  fontSize: '0.9rem',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  border: '2px solid #ff6b35',
                  transition: 'all 0.3s ease',
                  display: 'inline-block'
                }}>
                  {t.hero.contactMe}
                </a>
              </div>
            </div>
            
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <div style={{
                width: '400px',
                height: '400px',
                background: 'rgba(255, 107, 53, 0.1)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid rgba(255, 107, 53, 0.3)',
                position: 'relative'
              }}>
                <div style={{
                  fontSize: '8rem',
                  fontWeight: '900',
                  color: '#ff6b35',
                  opacity: 0.3
                }}>
                  DEV
                </div>
                
                {/* Rotating inner circle */}
                <div style={{
                  position: 'absolute',
                  width: '200px',
                  height: '200px',
                  border: '1px solid rgba(255, 107, 53, 0.2)',
                  borderRadius: '50%',
                  animation: 'rotate 10s linear infinite'
                }}></div>
              </div>
            </div>
          </div>
        </section>

        {/* Freelance Projects Section */}
        <section style={{ 
          padding: '6rem 0',
          background: '#1a1a1a',
          color: 'white'
        }}>
          <div style={{ 
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 4rem'
          }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: '300px 1fr',
              gap: '3rem',
              alignItems: 'start'
            }}>
              <div>
                <h3 style={{
                  fontSize: '2rem',
                  fontWeight: '700',
                  color: '#ff6b35',
                  marginBottom: '1rem'
                }}>
                  {language === 'es' ? 'Proyectos Freelance' : 'Freelance Projects'}
                </h3>
                <p style={{
                  fontSize: '1rem',
                  color: '#ccc',
                  fontWeight: '300',
                  lineHeight: '1.6'
                }}>
                  {language === 'es' 
                    ? 'Aplicaciones desarrolladas como freelance con enfoque en experiencia de usuario y funcionalidad' 
                    : 'Applications developed as freelance with focus on user experience and functionality'}
                </p>
              </div>
              
              <div className="freelance-projects" style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '1.5rem',
                padding: '1.5rem 1rem 2rem 1rem'
              }}>
              {[
                {
                  name: 'Plinfy',
                  description: language === 'es' 
                    ? 'Plataforma de donaciones y propinas que conecta creadores y profesionales con su comunidad a través de Mercado Pago.'
                    : 'Donation and tip platform that connects creators and professionals with their community through Mercado Pago.',
                  tech: 'React • Node.js • Mercado Pago',
                  url: 'https://plinfy.app/',
                  type: 'Web App',
                  icon: '💰'
                },
                {
                  name: 'Te Leo',
                  description: language === 'es'
                    ? 'Aplicación móvil disponible en Google Play Store para lectura digital con funcionalidades avanzadas.'
                    : 'Mobile application available on Google Play Store for digital reading with advanced features.',
                  tech: 'Flutter • Dart • Firebase',
                  url: 'https://play.google.com/store/apps/details?id=com.teleo.app',
                  type: 'Mobile App',
                  icon: '📱'
                },
                {
                  name: 'Daily Focus',
                  description: language === 'es'
                    ? 'Aplicación móvil disponible en Google Play Store para gestión de productividad y enfoque diario.'
                    : 'Mobile application available on Google Play Store for productivity management and daily focus.',
                  tech: 'Flutter • Dart • Firebase',
                  url: 'https://play.google.com/store/apps/details?id=com.dailyfocus.app',
                  type: 'Mobile App',
                  icon: '🎯'
                }
              ].map((project, index) => (
                <div key={index} style={{
                  background: '#2a2a2a',
                  border: '1px solid #444',
                  padding: '1rem',
                  borderRadius: '4px',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  textAlign: 'center'
                }}>
                  <div style={{
                    marginBottom: '1rem'
                  }}>
                    <div style={{
                      width: '50px',
                      height: '50px',
                      background: '#444',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.5rem',
                      margin: '0 auto 0.75rem auto'
                    }}>
                      {project.icon}
                    </div>
                    <h4 style={{
                      fontSize: '1rem',
                      fontWeight: '600',
                      color: '#ccc',
                      margin: 0,
                      marginBottom: '0.5rem'
                    }}>
                      {project.name}
                    </h4>
                    <span style={{
                      fontSize: '0.7rem',
                      background: '#555',
                      color: '#aaa',
                      padding: '0.25rem 0.5rem',
                      borderRadius: '12px',
                      fontWeight: '500',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em'
                    }}>
                      {project.type}
                    </span>
                  </div>
                  
                  <p style={{
                    color: '#999',
                    lineHeight: '1.4',
                    marginBottom: '0.75rem',
                    fontSize: '0.8rem'
                  }}>
                    {project.description}
                  </p>
                  
                  <div style={{
                    fontSize: '0.7rem',
                    color: '#777',
                    fontWeight: '500',
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                    marginBottom: '0.75rem'
                  }}>
                    {project.tech}
                  </div>
                  
                  <a href={project.url} 
                     target="_blank" 
                     rel="noopener noreferrer"
                     style={{
                       display: 'inline-flex',
                       alignItems: 'center',
                       gap: '0.3rem',
                       color: '#aaa',
                       textDecoration: 'none',
                       fontSize: '0.75rem',
                       fontWeight: '500',
                       letterSpacing: '0.05em',
                       textTransform: 'uppercase',
                       transition: 'all 0.3s ease'
                     }}>
                    {language === 'es' ? 'Ver' : 'View'} →
                  </a>
                </div>
              ))}
              </div>
            </div>
          </div>
        </section>
        {/* About Section */}
        <section id="about" style={{
          padding: '8rem 0',
          background: 'linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 50%, #0f0f0f 100%)',
          color: 'white',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Animated Background Elements */}
          <div style={{
            position: 'absolute',
            top: '10%',
            right: '10%',
            width: '200px',
            height: '200px',
            background: 'radial-gradient(circle, rgba(255, 107, 53, 0.1) 0%, transparent 70%)',
            borderRadius: '50%',
            animation: 'pulse 4s ease-in-out infinite'
          }}></div>
          <div style={{
            position: 'absolute',
            bottom: '20%',
            left: '5%',
            width: '150px',
            height: '150px',
            background: 'radial-gradient(circle, rgba(255, 107, 53, 0.08) 0%, transparent 70%)',
            borderRadius: '50%',
            animation: 'pulse 6s ease-in-out infinite reverse'
          }}></div>
          
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 4rem',
            position: 'relative',
            zIndex: 2
          }}>
            {/* Header */}
            <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
              <div style={{
                fontSize: '0.9rem',
                color: '#ff6b35',
                fontWeight: '600',
                letterSpacing: '0.1em',
                marginBottom: '1rem',
                textTransform: 'uppercase'
              }}>
                {t.about.subtitle}
              </div>
              
              <h2 style={{
                fontSize: '4rem',
                fontWeight: '900',
                marginBottom: '2rem',
                lineHeight: '1.1',
                background: 'linear-gradient(135deg, #ffffff 0%, #ff6b35 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                {language === 'es' ? 'Pasión por la' : 'Passion for'}
                <br />
                <span style={{ 
                  background: 'linear-gradient(135deg, #ff6b35 0%, #ff8c42 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>
                  {language === 'es' ? 'Innovación' : 'Innovation'}
                </span>
              </h2>
              
              <p style={{
                fontSize: '1.3rem',
                lineHeight: '1.6',
                color: '#ccc',
                fontWeight: '300',
                maxWidth: '800px',
                margin: '0 auto'
              }}>
                {t.about.description}
              </p>
            </div>

            {/* Main Content Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '6rem',
              alignItems: 'start',
              marginBottom: '6rem'
            }}>
              {/* Left Side - Experience */}
              <div>
                <div style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 107, 53, 0.2)',
                  borderRadius: '20px',
                  padding: '3rem',
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  {/* Background Pattern */}
                  <div style={{
                    position: 'absolute',
                    top: '-50px',
                    right: '-50px',
                    width: '100px',
                    height: '100px',
                    background: 'linear-gradient(45deg, rgba(255, 107, 53, 0.1), transparent)',
                    borderRadius: '50%'
                  }}></div>
                  
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1.5rem',
                    marginBottom: '2rem'
                  }}>
                    <div style={{
                      width: '60px',
                      height: '60px',
                      background: 'linear-gradient(135deg, #ff6b35, #ff8c42)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.5rem',
                      boxShadow: '0 10px 30px rgba(255, 107, 53, 0.3)'
                    }}>
                      💼
                    </div>
                    <div>
                      <h3 style={{
                        fontSize: '1.5rem',
                        fontWeight: '700',
                        color: 'white',
                        marginBottom: '0.5rem'
                      }}>
                        PVS Latam
                      </h3>
                      <p style={{
                        fontSize: '1rem',
                        color: '#ff6b35',
                        fontWeight: '600',
                        margin: 0
                      }}>
                        {language === 'es' ? 'Desarrollador Senior • 2025 - Presente' : 'Senior Developer • 2025 - Present'}
                      </p>
                    </div>
                  </div>
                  
                  <p style={{
                    fontSize: '1rem',
                    lineHeight: '1.6',
                    color: '#ccc',
                    marginBottom: '2rem'
                  }}>
                    {language === 'es' 
                      ? 'Especializado en desarrollo de aplicaciones móviles escalables y soluciones financieras innovadoras. Liderando proyectos que impactan a miles de usuarios en múltiples países.'
                      : 'Specialized in scalable mobile application development and innovative financial solutions. Leading projects that impact thousands of users across multiple countries.'}
                  </p>
                  
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.8rem'
                  }}>
                    {['Flutter', 'Vue.js', 'React', 'TypeScript', 'Firebase', 'Dart'].map((skill) => (
                      <span key={skill} style={{
                        background: 'rgba(255, 107, 53, 0.1)',
                        color: '#ff6b35',
                        padding: '0.6rem 1.2rem',
                        fontSize: '0.85rem',
                        fontWeight: '600',
                        borderRadius: '25px',
                        border: '1px solid rgba(255, 107, 53, 0.3)',
                        transition: 'all 0.3s ease'
                      }}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Right Side - Stats */}
              <div>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '2rem'
                }}>
                  {[
                    { 
                      number: '5+', 
                      label: t.about.years, 
                      icon: '⚡',
                      description: language === 'es' ? 'Experiencia profesional' : 'Professional experience'
                    },
                    { 
                      number: '8', 
                      label: t.about.countries, 
                      icon: '🌐',
                      description: language === 'es' ? 'Países trabajados' : 'Countries worked'
                    },
                    { 
                      number: '15+', 
                      label: t.about.projects, 
                      icon: '💼',
                      description: language === 'es' ? 'Proyectos completados' : 'Projects completed'
                    },
                    { 
                      number: '100%', 
                      label: t.about.quality, 
                      icon: '✓',
                      description: language === 'es' ? 'Satisfacción del cliente' : 'Client satisfaction'
                    }
                  ].map((stat, index) => (
                    <div key={index} style={{
                      background: 'rgba(255, 255, 255, 0.05)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 107, 53, 0.2)',
                      padding: '2rem',
                      textAlign: 'center',
                      borderRadius: '20px',
                      transition: 'all 0.3s ease',
                      position: 'relative',
                      overflow: 'hidden'
                    }}>
                      {/* Background Glow */}
                      <div style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '80px',
                        height: '80px',
                        background: 'radial-gradient(circle, rgba(255, 107, 53, 0.1) 0%, transparent 70%)',
                        borderRadius: '50%'
                      }}></div>
                      
                      <div style={{
                        fontSize: '2.5rem',
                        marginBottom: '1rem',
                        color: '#ff6b35',
                        position: 'relative',
                        zIndex: 2
                      }}>
                        {stat.icon}
                      </div>
                      <div style={{
                        fontSize: '3rem',
                        fontWeight: '900',
                        color: 'white',
                        marginBottom: '0.5rem',
                        position: 'relative',
                        zIndex: 2
                      }}>
                        {stat.number}
                      </div>
                      <div style={{
                        fontSize: '1rem',
                        color: '#ff6b35',
                        fontWeight: '700',
                        letterSpacing: '0.05em',
                        textTransform: 'uppercase',
                        marginBottom: '0.5rem',
                        position: 'relative',
                        zIndex: 2
                      }}>
                        {stat.label}
                      </div>
                      <div style={{
                        fontSize: '0.8rem',
                        color: '#999',
                        fontWeight: '400',
                        position: 'relative',
                        zIndex: 2
                      }}>
                        {stat.description}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Quote */}
            <div style={{
              textAlign: 'center',
              background: 'rgba(255, 107, 53, 0.05)',
              border: '1px solid rgba(255, 107, 53, 0.2)',
              borderRadius: '20px',
              padding: '3rem',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{
                position: 'absolute',
                top: '-30px',
                left: '50%',
                transform: 'translateX(-50%)',
                fontSize: '4rem',
                color: 'rgba(255, 107, 53, 0.1)'
              }}>
                &ldquo;
              </div>
              <blockquote style={{
                fontSize: '1.5rem',
                fontStyle: 'italic',
                color: '#ccc',
                fontWeight: '300',
                lineHeight: '1.6',
                margin: '0',
                position: 'relative',
                zIndex: 2
              }}>
                {language === 'es' 
                  ? 'Creo que la tecnología debe ser invisible, intuitiva y poderosa. Mi objetivo es crear experiencias que no solo funcionen, sino que inspiren.'
                  : 'I believe technology should be invisible, intuitive, and powerful. My goal is to create experiences that not only work, but inspire.'}
              </blockquote>
              <div style={{
                marginTop: '1.5rem',
                fontSize: '1rem',
                color: '#ff6b35',
                fontWeight: '600',
                position: 'relative',
                zIndex: 2
              }}>
                — {language === 'es' ? 'Maximiliano Mendez' : 'Maximiliano Mendez'}
              </div>
            </div>
          </div>
        </section>

        {/* Work Section */}
        <section id="work" style={{
          padding: '8rem 0',
          background: '#1a1a1a',
          color: 'white',
          position: 'relative'
        }}>
          {/* Animated Background */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle at 20% 20%, rgba(255, 107, 53, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255, 107, 53, 0.1) 0%, transparent 50%)',
            pointerEvents: 'none'
          }}></div>
          
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 4rem',
            position: 'relative',
            zIndex: 2
          }}>
            <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
              <div style={{
                fontSize: '0.9rem',
                color: '#ff6b35',
                fontWeight: '600',
                letterSpacing: '0.1em',
                marginBottom: '1rem',
                textTransform: 'uppercase'
              }}>
                {t.work.subtitle}
            </div>
              <h2 style={{
                fontSize: '3rem',
                fontWeight: '800',
                marginBottom: '1rem'
              }}>
                {language === 'es' ? 'Proyectos' : 'Featured'}
                <span style={{ color: '#ff6b35' }}> {language === 'es' ? 'Destacados' : 'Projects'}</span>
              </h2>
            </div>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
              gap: '3rem'
            }}>
              {[
                {
                  name: 'Practica Git',
                  description: language === 'es' 
                    ? 'Repositorio completo de práctica con Git con técnicas avanzadas de control de versiones y flujos de trabajo colaborativos.'
                    : 'Comprehensive Git practice repository with advanced version control techniques and collaborative workflows.',
                  tech: 'Flutter • Dart',
                  stars: 39,
                  forks: 0,
                  number: '01',
                  gradient: 'linear-gradient(135deg, #ff6b35, #ff8c42)'
                },
                {
                  name: 'Job Offer Platform',
                  description: language === 'es'
                    ? 'Plataforma moderna de mercado laboral con filtrado avanzado, notificaciones en tiempo real y coincidencia inteligente de candidatos.'
                    : 'Modern job marketplace with advanced filtering, real-time notifications, and intelligent candidate matching.',
                  tech: 'Vue.js • JavaScript',
                  stars: 1,
                  forks: 0,
                  number: '02',
                  gradient: 'linear-gradient(135deg, #ff8c42, #ffa726)'
                },
                {
                  name: 'Personal Portfolio',
                  description: language === 'es'
                    ? 'Sitio web de portafolio limpio y responsivo que muestra principios de diseño moderno e interacciones de usuario suaves.'
                    : 'Clean, responsive portfolio website showcasing modern design principles and smooth user interactions.',
                  tech: 'Next.js • React',
                  stars: 0,
                  forks: 0,
                  number: '03',
                  gradient: 'linear-gradient(135deg, #ffa726, #ffb74d)'
                }
              ].map((project, index) => (
                <div key={index} style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 107, 53, 0.2)',
                  padding: '2.5rem',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  <div style={{
                    position: 'absolute',
                    top: '2rem',
                    right: '2rem',
                    fontSize: '3rem',
                    fontWeight: '900',
                    color: 'rgba(255, 107, 53, 0.1)',
                    lineHeight: '1'
                  }}>
                    {project.number}
                  </div>
                  
                  <div style={{
                    marginBottom: '1.5rem'
                  }}>
                    <h3 style={{
                      fontSize: '1.5rem',
                      fontWeight: '700',
                      marginBottom: '0.5rem',
                      color: '#ff6b35'
                    }}>
                      {project.name}
                    </h3>
                    <div style={{
                      fontSize: '0.8rem',
                      color: '#ccc',
                      fontWeight: '600',
                      letterSpacing: '0.05em',
                      textTransform: 'uppercase'
                    }}>
                      {project.tech}
                    </div>
                  </div>
                  
                  <p style={{
                    color: '#ccc',
                    lineHeight: '1.6',
                    marginBottom: '2rem',
                    fontSize: '1rem'
                  }}>
                    {project.description}
                  </p>
                  
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}>
                    <div style={{
                      display: 'flex',
                      gap: '1rem',
                      fontSize: '0.9rem',
                      color: '#999'
                    }}>
                      <span>⭐ {project.stars}</span>
                      <span>🍴 {project.forks}</span>
            </div>
                    <a href={`https://github.com/Maxs22/${project.name.toLowerCase().replace(' ', '-')}`} 
                       target="_blank" 
                       rel="noopener noreferrer"
                       style={{
                         color: '#ff6b35',
                         textDecoration: 'none',
                         fontSize: '0.9rem',
                         fontWeight: '600',
                         letterSpacing: '0.05em',
                         textTransform: 'uppercase',
                         transition: 'all 0.3s ease'
                       }}>
                      {t.work.viewCode}
                    </a>
            </div>
            </div>
              ))}
          </div>
        </div>
      </section>

        {/* Contact Section */}
        <section id="contact" style={{
          padding: '8rem 0',
          background: 'linear-gradient(135deg, #1a1a1a 0%, #0f0f0f 50%, #1a1a1a 100%)',
          color: 'white',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Animated Background Elements */}
          <div style={{
            position: 'absolute',
            top: '15%',
            right: '15%',
            width: '300px',
            height: '300px',
            background: 'radial-gradient(circle, rgba(255, 107, 53, 0.08) 0%, transparent 70%)',
            borderRadius: '50%',
            animation: 'pulse 5s ease-in-out infinite'
          }}></div>
          <div style={{
            position: 'absolute',
            bottom: '10%',
            left: '10%',
            width: '200px',
            height: '200px',
            background: 'radial-gradient(circle, rgba(255, 107, 53, 0.06) 0%, transparent 70%)',
            borderRadius: '50%',
            animation: 'pulse 7s ease-in-out infinite reverse'
          }}></div>
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '400px',
            height: '400px',
            background: 'radial-gradient(circle, rgba(255, 107, 53, 0.03) 0%, transparent 70%)',
            borderRadius: '50%',
            animation: 'pulse 8s ease-in-out infinite'
          }}></div>
          
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 4rem',
            position: 'relative',
            zIndex: 2
          }}>
            {/* Header */}
            <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
              <div style={{
                fontSize: '0.9rem',
                color: '#ff6b35',
                fontWeight: '600',
                letterSpacing: '0.1em',
                marginBottom: '1rem',
                textTransform: 'uppercase'
              }}>
                {t.contact.subtitle}
              </div>
              
              <h2 style={{
                fontSize: '4rem',
                fontWeight: '900',
                marginBottom: '2rem',
                lineHeight: '1.1',
                background: 'linear-gradient(135deg, #ffffff 0%, #ff6b35 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                {language === 'es' ? 'Construyamos Algo' : "Let's Build Something"}
                <br />
                <span style={{ 
                  background: 'linear-gradient(135deg, #ff6b35 0%, #ff8c42 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>
                  {language === 'es' ? 'Increíble' : 'Amazing'}
                </span>
              </h2>
              
              <p style={{
                fontSize: '1.3rem',
                lineHeight: '1.6',
                color: '#ccc',
                fontWeight: '300',
                maxWidth: '700px',
                margin: '0 auto'
              }}>
                {t.contact.description}
              </p>
            </div>

            {/* Contact Cards */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem',
              marginBottom: '4rem'
            }}>
              {[
                { 
                  icon: '✉', 
                  title: 'Email', 
                  link: 'mailto:mrmendez.dev@gmail.com', 
                  text: 'mrmendez.dev@gmail.com',
                  description: language === 'es' ? 'Envíame un mensaje directo' : 'Send me a direct message'
                },
                { 
                  icon: '⚡', 
                  title: 'GitHub', 
                  link: 'https://github.com/Maxs22', 
                  text: 'github.com/Maxs22',
                  description: language === 'es' ? 'Ve mis proyectos en código' : 'See my code projects'
                },
                { 
                  icon: '💼', 
                  title: 'LinkedIn', 
                  link: 'https://www.linkedin.com/in/maximiliano-mendez-dev', 
                  text: 'maximiliano-mendez-dev',
                  description: language === 'es' ? 'Conectemos profesionalmente' : 'Let\'s connect professionally'
                }
              ].map((contact, index) => (
                <div key={index} style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 107, 53, 0.2)',
                  borderRadius: '20px',
                  padding: '2.5rem',
                  textAlign: 'center',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  {/* Background Glow */}
                  <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '100px',
                    height: '100px',
                    background: 'radial-gradient(circle, rgba(255, 107, 53, 0.1) 0%, transparent 70%)',
                    borderRadius: '50%'
                  }}></div>
                  
                  <div style={{
                    fontSize: '3rem',
                    marginBottom: '1.5rem',
                    color: '#ff6b35',
                    position: 'relative',
                    zIndex: 2
                  }}>
                    {contact.icon}
                  </div>
                  <h3 style={{
                    fontSize: '1.5rem',
                    fontWeight: '700',
                    marginBottom: '0.5rem',
                    color: 'white',
                    position: 'relative',
                    zIndex: 2
                  }}>
                    {contact.title}
                  </h3>
                  <p style={{
                    fontSize: '0.9rem',
                    color: '#999',
                    marginBottom: '1rem',
                    fontWeight: '400',
                    position: 'relative',
                    zIndex: 2
                  }}>
                    {contact.description}
                  </p>
                  <a href={contact.link} 
                     target={contact.link.startsWith('http') ? '_blank' : undefined}
                     rel={contact.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                     style={{
                       color: '#ff6b35',
                       textDecoration: 'none',
                       fontSize: '1rem',
                       fontWeight: '600',
                       position: 'relative',
                       zIndex: 2,
                       transition: 'all 0.3s ease'
                     }}>
                    {contact.text}
                  </a>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div style={{
              textAlign: 'center',
              background: 'rgba(255, 107, 53, 0.05)',
              border: '1px solid rgba(255, 107, 53, 0.2)',
              borderRadius: '20px',
              padding: '3rem',
              position: 'relative',
              overflow: 'hidden'
            }}>
              {/* Background Pattern */}
              <div style={{
                position: 'absolute',
                top: '-30px',
                right: '-30px',
                width: '100px',
                height: '100px',
                background: 'linear-gradient(45deg, rgba(255, 107, 53, 0.1), transparent)',
                borderRadius: '50%'
              }}></div>
              <div style={{
                position: 'absolute',
                bottom: '-30px',
                left: '-30px',
                width: '80px',
                height: '80px',
                background: 'linear-gradient(45deg, rgba(255, 107, 53, 0.08), transparent)',
                borderRadius: '50%'
              }}></div>
              
              <h3 style={{
                fontSize: '2rem',
                fontWeight: '700',
                color: 'white',
                marginBottom: '1rem',
                position: 'relative',
                zIndex: 2
              }}>
                {language === 'es' ? '¿Listo para comenzar?' : 'Ready to get started?'}
              </h3>
              <p style={{
                fontSize: '1.1rem',
                color: '#ccc',
                marginBottom: '2rem',
                fontWeight: '300',
                position: 'relative',
                zIndex: 2
              }}>
                {language === 'es' 
                  ? 'Hablemos sobre tu proyecto y cómo puedo ayudarte a hacerlo realidad.'
                  : 'Let\'s talk about your project and how I can help bring it to life.'}
              </p>
              
              <div style={{ display: 'flex', justifyContent: 'center', position: 'relative', zIndex: 2 }}>
                <a href="mailto:mrmendez.dev@gmail.com" style={{
                  padding: '1.2rem 3rem',
                  background: 'linear-gradient(135deg, #ff6b35, #ff8c42)',
                  color: 'white',
                  textDecoration: 'none',
                  fontWeight: '700',
                  fontSize: '1rem',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  borderRadius: '50px',
                  transition: 'all 0.3s ease',
                  display: 'inline-block',
                  boxShadow: '0 10px 30px rgba(255, 107, 53, 0.3)'
                }}>
                  {t.contact.email}
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer style={{
        background: '#1a1a1a',
        padding: '2rem 0',
        textAlign: 'center',
        color: '#666',
        borderTop: '1px solid #333'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 4rem'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem',
            marginBottom: '1rem'
          }}>
           
          </div>
          <p style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>
            &copy; 2025 MaxsDev. {t.footer.rights}
          </p>
          <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center' }}>
            <a href="https://github.com/Maxs22" target="_blank" rel="noopener noreferrer" style={{ 
              color: '#666', 
              textDecoration: 'none',
              fontSize: '0.9rem',
              transition: 'color 0.3s ease'
            }}>GitHub</a>
            <a href="https://www.linkedin.com/in/maximiliano-mendez-dev" target="_blank" rel="noopener noreferrer" style={{ 
              color: '#666', 
              textDecoration: 'none',
              fontSize: '0.9rem',
              transition: 'color 0.3s ease'
            }}>LinkedIn</a>
            <a href="mailto:mrmendez.dev@gmail.com" style={{ 
              color: '#666', 
              textDecoration: 'none',
              fontSize: '0.9rem',
              transition: 'color 0.3s ease'
            }}>Email</a>
          </div>
        </div>
      </footer>
    

      <style jsx global>{`
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes pulse {
          0%, 100% { 
            opacity: 0.3;
            transform: scale(1);
          }
          50% { 
            opacity: 0.6;
            transform: scale(1.05);
          }
        }
        
        @media (max-width: 768px) {
          aside {
            display: none !important;
          }
          
          main {
            margin-left: 0 !important;
          }
          
          .hero-content {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
            text-align: center !important;
          }
          
          .hero-name {
            font-size: 3rem !important;
          }
          
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          
          .contact-content {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          
          .freelance-projects {
            grid-template-columns: 1fr !important;
            gap: 1rem !important;
          }
          
          .hero-actions {
            justify-content: center !important;
          }
        }
      `}</style>
    </div>
  );
}

export default Home;