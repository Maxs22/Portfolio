import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faGlobe, faSync, faSpinner } from '@fortawesome/free-solid-svg-icons';

const DynamicProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [syncing, setSyncing] = useState(false);

  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = async () => {
    try {
      setLoading(true);
      // Simular carga de datos desde MCP
      const mockProjects = [
        {
          name: 'PVS Comercios',
          description: 'App financiera multiplataforma Flutter/Dart para gestión de pagos y servicios financieros. Opera en 8 países con soporte multi-idioma y arquitectura modular.',
          technologies: ['Flutter', 'Dart', 'Firebase', 'Clean Architecture'],
          github_url: 'https://github.com/Maxs22/pvs-comercios',
          live_url: 'https://pvs-comercios.app',
          image: 'PVS Comercios',
          featured: true
        },
        {
          name: 'CencoPay',
          description: 'Solución de pagos móviles para Cencosud con enfoque en agilidad, seguridad e integración con servicios digitales.',
          technologies: ['Flutter', 'Dart', 'Firebase', 'GetX'],
          github_url: 'https://github.com/Maxs22/cencopay',
          live_url: 'https://cencopay.com',
          image: 'CencoPay',
          featured: true
        },
        {
          name: 'Payclub',
          description: 'App de pagos con QR donde usuarios ganan puntos canjeables. Implementé biometría, Firebase Analytics y almacenamiento local.',
          technologies: ['Flutter', 'Dart', 'Firebase', 'MVC'],
          github_url: 'https://github.com/Maxs22/payclub',
          live_url: 'https://payclub.app',
          image: 'Payclub',
          featured: true
        }
      ];
      
      setProjects(mockProjects);
    } catch (error) {
      console.error('Error loading projects:', error);
    } finally {
      setLoading(false);
    }
  };

  const syncWithMCP = async () => {
    try {
      setSyncing(true);
      
      // Simular sincronización con MCP
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Aquí iría la llamada real al MCP
      console.log('Sincronizando con MCP...');
      
      // Recargar proyectos después de la sincronización
      await loadProjects();
      
    } catch (error) {
      console.error('Error syncing with MCP:', error);
    } finally {
      setSyncing(false);
    }
  };

  if (loading) {
    return (
      <div className="text-center py-12">
        <FontAwesomeIcon icon={faSpinner} className="animate-spin text-3xl text-blue-400 mb-4" />
        <p className="text-gray-400">Cargando proyectos...</p>
      </div>
    );
  }

  return (
    <div className="projects-section">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-white">Proyectos</h2>
        <button
          onClick={syncWithMCP}
          disabled={syncing}
          className="sync-btn glass-card flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105"
        >
          <FontAwesomeIcon 
            icon={syncing ? faSpinner : faSync} 
            className={syncing ? 'animate-spin' : ''} 
          />
          <span>{syncing ? 'Sincronizando...' : 'Sincronizar'}</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="project-card glass-card group">
            <div className="project-image">
              {project.image}
            </div>
            
            <div className="project-content">
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                {project.name}
              </h3>
              
              <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                {project.description}
              </p>
              
              <div className="technologies mb-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="tech-tag px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-md border border-blue-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="project-links">
                <a
                  href={project.github_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link group/link"
                  title="Ver código en GitHub"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                <a
                  href={project.live_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link group/link"
                  title="Ver proyecto en vivo"
                >
                  <FontAwesomeIcon icon={faGlobe} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .sync-btn {
          background: rgba(59, 130, 246, 0.1);
          border: 1px solid rgba(59, 130, 246, 0.3);
          color: #e2e8f0;
        }
        
        .sync-btn:hover {
          background: rgba(59, 130, 246, 0.2);
          border-color: rgba(59, 130, 246, 0.5);
          box-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
        }
        
        .sync-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
        
        .tech-tag {
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
        }
        
        .project-link {
          transition: all 0.3s ease;
        }
        
        .project-link:hover {
          transform: translateY(-2px) scale(1.1);
        }
      `}</style>
    </div>
  );
};

export default DynamicProjects;
