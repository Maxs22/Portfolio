import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <span className="logo-text">M</span>
          </div>
          
          <nav className="nav">
            <a href="#about" className="nav-link">About</a>
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#contact" className="nav-link">Contact</a>
          </nav>
          
          <div className="header-actions">
            <a 
              href="https://github.com/Maxs22" 
              target="_blank" 
              rel="noopener noreferrer"
              className="github-link"
              title="GitHub"
            >
              <span>🐙</span>
            </a>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          padding: 1rem 0;
          transition: all 0.3s ease;
          backdrop-filter: blur(0px);
        }
        
        .header.scrolled {
          background: rgba(10, 10, 15, 0.8);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .header-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }
        
        .logo {
          display: flex;
          align-items: center;
        }
        
        .logo-text {
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 1.25rem;
          transition: all 0.3s ease;
        }
        
        .logo-text:hover {
          transform: scale(1.1);
          box-shadow: 0 0 20px rgba(59, 130, 246, 0.4);
        }
        
        .nav {
          display: flex;
          gap: 2rem;
        }
        
        .nav-link {
          color: #cbd5e1;
          text-decoration: none;
          font-weight: 500;
          transition: all 0.3s ease;
          position: relative;
        }
        
        .nav-link:hover {
          color: #3b82f6;
        }
        
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          transition: width 0.3s ease;
        }
        
        .nav-link:hover::after {
          width: 100%;
        }
        
        .header-actions {
          display: flex;
          align-items: center;
        }
        
        .github-link {
          width: 40px;
          height: 40px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          transition: all 0.3s ease;
          font-size: 1.2rem;
        }
        
        .github-link:hover {
          background: rgba(59, 130, 246, 0.1);
          border-color: rgba(59, 130, 246, 0.3);
          transform: scale(1.1);
        }
        
        @media (max-width: 768px) {
          .header-content {
            padding: 0 1rem;
          }
          
          .nav {
            gap: 1rem;
          }
          
          .nav-link {
            font-size: 0.875rem;
          }
          
          .logo-text {
            width: 35px;
            height: 35px;
            font-size: 1rem;
          }
          
          .github-link {
            width: 35px;
            height: 35px;
            font-size: 1rem;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;