import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/Bhagya20000625',
      label: 'GitHub',
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/bhagya-umayanga-9b189b305/',
      label: 'LinkedIn',
    },
    {
      icon: Mail,
      href: 'warlorshad@gmai.com',
      label: 'Email',
    },
  ];

  const handleKeyDown = (event: React.KeyboardEvent, url: string) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScrollKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      scrollToTop();
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-8">
          {/* Logo/Name */}
          <button
            onClick={scrollToTop}
            onKeyDown={handleScrollKeyDown}
            className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent hover:from-purple-400 hover:to-blue-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-md px-2 py-1"
            aria-label="Go to top of page"
          >
            Bhagya Umayanga 
          </button>

          {/* Social Links */}
          <div className="flex space-x-6">
            {socialLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <button
                  key={index}
                  onClick={() => window.open(link.href, '_blank', 'noopener,noreferrer')}
                  onKeyDown={(e) => handleKeyDown(e, link.href)}
                  className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900"
                  aria-label={`Visit ${link.label} profile`}
                >
                  <Icon size={20} />
                </button>
              );
            })}
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-8" aria-label="Footer navigation">
            {['Home', 'About', 'Projects', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => {
                  const element = document.getElementById(item.toLowerCase());
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="text-gray-300 hover:text-white transition-colors duration-300 focus:outline-none focus:underline"
                aria-label={`Go to ${item} section`}
              >
                {item}
              </button>
            ))}
          </nav>

          {/* Divider */}
          <div className="w-full max-w-md h-px bg-gray-700"></div>

          {/* Copyright */}
          <div className="text-center text-gray-400">
            <p className="flex items-center justify-center space-x-1">
              <span>© 2024 Bhagya. Made with</span>
              <Heart size={16} className="text-red-400" />
              <span>and React</span>
            </p>
            <p className="mt-2 text-sm">
              Designed with accessibility and user experience in mind
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;