import React, { useState, useEffect } from 'react';

const ProjectIcon = ({ icon, className, title }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  
  const getEmojiFallback = (iconName) => {
    const emojiMap = {
      'github': '🐙',
      'globe': '🌐',
      'star': '⭐',
      'code-branch': '🍴',
      'calendar': '📅',
      'sync': '🔄'
    };
    return emojiMap[iconName] || '?';
  };

  return (
    <span className={className} title={title}>
      {isClient ? null : getEmojiFallback(icon)}
    </span>
  );
};

export default ProjectIcon;
