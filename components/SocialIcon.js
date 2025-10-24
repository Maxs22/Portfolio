import React, { useState, useEffect } from 'react';

const SocialIcon = ({ icon, href, title, children }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="social-icon" title={title}>
      {isClient ? children : getEmojiFallback(icon)}
    </a>
  );
};

const getEmojiFallback = (iconName) => {
  const emojiMap = {
    'github': '🐙',
    'linkedin': '💼',
    'envelope': '📧',
    'sync': '🔄',
    'star': '⭐',
    'code-branch': '🍴',
    'calendar': '📅',
    'globe': '🌐'
  };
  return emojiMap[iconName] || '?';
};

export default SocialIcon;
