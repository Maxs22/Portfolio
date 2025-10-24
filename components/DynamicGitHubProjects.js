import React from 'react';

const DynamicGitHubProjects = () => {
  // Datos mock para evitar problemas de SSR
  const featuredProjects = [
    {
      id: 1,
      name: 'practica-git',
      description: 'Repositorio de práctica con Git',
      url: 'https://github.com/Maxs22/practica-git',
      homepage: null,
      language: 'HTML',
      stars: 39,
      forks: 0,
      updated_at: '2024-01-15T00:00:00Z',
      topics: ['git', 'practica', 'html']
    },
    {
      id: 2,
      name: 'joboffer',
      description: 'Proyecto de ofertas de trabajo',
      url: 'https://github.com/Maxs22/joboffer',
      homepage: null,
      language: 'JavaScript',
      stars: 1,
      forks: 0,
      updated_at: '2024-01-10T00:00:00Z',
      topics: ['javascript', 'job', 'web']
    },
    {
      id: 3,
      name: 'MaximiliaN',
      description: 'Primera pagina web',
      url: 'https://github.com/Maxs22/MaximiliaN',
      homepage: null,
      language: 'CSS',
      stars: 0,
      forks: 0,
      updated_at: '2024-01-05T00:00:00Z',
      topics: ['css', 'web', 'portfolio']
    }
  ];

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const getLanguageColor = (language) => {
    const colors = {
      'JavaScript': '#f7df1e',
      'TypeScript': '#3178c6',
      'HTML': '#e34f26',
      'CSS': '#1572b6',
      'Python': '#3776ab',
      'Java': '#ed8b00',
      'PHP': '#777bb4',
      'Dart': '#0175c2',
      'Flutter': '#02569b',
      'Vue': '#4fc08d',
      'React': '#61dafb',
      'Node.js': '#339933',
      'Other': '#6c757d'
    };
    return colors[language] || colors['Other'];
  };

  return (
    <section id="work" className="section">
      <div className="container">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="mb-4 text-3xl font-bold">Proyectos</h2>
            <p className="text-gray-400">
              33 repositorios públicos
              <span className="ml-2 text-sm">
                • Última actualización: {formatDate(new Date().toISOString())}
              </span>
            </p>
          </div>
          
          <button
            className="sync-btn glass-card flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105"
            onClick={() => window.open('https://github.com/Maxs22', '_blank')}
            title="Ver en GitHub"
          >
            <span className="icon-sync">🔄</span>
            <span>Ver en GitHub</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project) => (
            <div key={project.id} className="project-card glass-card group">
              <div className="project-image">
                <div className="flex items-center justify-center h-full">
                  <div className="text-center">
                    <div 
                      className="w-16 h-16 rounded-full mx-auto mb-3 flex items-center justify-center text-white font-bold text-xl"
                      style={{ backgroundColor: getLanguageColor(project.language) }}
                    >
                      {project.language?.charAt(0) || '?'}
                    </div>
                    <p className="text-sm text-gray-400">{project.language || 'Sin lenguaje'}</p>
                  </div>
                </div>
              </div>
              
              <div className="project-content">
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {project.name}
                </h3>
                
                <p className="text-gray-300 mb-4 text-sm leading-relaxed line-clamp-3">
                  {project.description}
                </p>
                
                <div className="project-stats mb-4 flex items-center gap-4 text-sm text-gray-400">
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-400 icon-star">⭐</span>
                    <span>{project.stars}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-blue-400 icon-fork">🍴</span>
                    <span>{project.forks}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-green-400 icon-calendar">📅</span>
                    <span>{formatDate(project.updated_at)}</span>
                  </div>
                </div>

                {project.topics.length > 0 && (
                  <div className="technologies mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.topics.slice(0, 3).map((topic, index) => (
                        <span
                          key={index}
                          className="tech-tag px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-md border border-blue-500/30"
                        >
                          {topic}
                        </span>
                      ))}
                      {project.topics.length > 3 && (
                        <span className="tech-tag px-2 py-1 bg-gray-500/20 text-gray-300 text-xs rounded-md border border-gray-500/30">
                          +{project.topics.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                )}
                
                <div className="project-links">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link group/link"
                    title="Ver código en GitHub"
                  >
                    <span className="icon-github">🐙</span>
                  </a>
                  {project.homepage && (
                    <a
                      href={project.homepage}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link group/link"
                      title="Ver proyecto en vivo"
                    >
                      <span className="icon-globe">🌐</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
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
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .icon-sync, .icon-star, .icon-fork, .icon-calendar, .icon-github, .icon-globe {
          font-size: 1rem;
        }
      `}</style>
    </section>
  );
};

export default DynamicGitHubProjects;