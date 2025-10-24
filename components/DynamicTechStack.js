import React from 'react';

const DynamicTechStack = () => {
  const techStack = ['JavaScript', 'TypeScript', 'HTML', 'CSS', 'Python', 'Java', 'PHP', 'Dart', 'Flutter', 'Vue', 'React', 'Node.js'];

  return (
    <section className="section">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="mb-4 text-3xl font-bold">Tech Stack</h2>
          <p className="text-gray-400">Tecnologías que utilizo</p>
        </div>
        
        <div className="flex flex-wrap gap-4 justify-center">
          {techStack.map((tech, index) => (
            <div key={index} className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-lg border border-blue-500/30">
              {tech}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DynamicTechStack;