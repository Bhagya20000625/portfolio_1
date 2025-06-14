import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

interface Sparkle {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
}

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const generateSparkles = (event: React.MouseEvent, count: number = 8) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const newSparkles: Sparkle[] = [];

    for (let i = 0; i < count; i++) {
      newSparkles.push({
        id: Date.now() + i,
        x: event.clientX - rect.left + (Math.random() - 0.5) * 60,
        y: event.clientY - rect.top + (Math.random() - 0.5) * 60,
        size: Math.random() * 8 + 4,
        delay: Math.random() * 0.5,
      });
    }

    setSparkles(prev => [...prev, ...newSparkles]);

    // Remove sparkles after animation
    setTimeout(() => {
      setSparkles(prev => prev.filter(sparkle => !newSparkles.includes(sparkle)));
    }, 1000);
  };

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      scrollToAbout();
    }
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      aria-label="Hero section"
    >
      {/* Aurora Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Aurora Layer 1 */}
        <div className="absolute inset-0 opacity-70">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-aurora-1"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl animate-aurora-2"></div>
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full mix-blend-multiply filter blur-xl animate-aurora-3"></div>
        </div>
        
        {/* Aurora Layer 2 - Slower movement */}
        <div className="absolute inset-0 opacity-50">
          <div className="absolute top-1/4 right-1/3 w-80 h-80 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-full mix-blend-multiply filter blur-2xl animate-aurora-slow-1"></div>
          <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-gradient-to-r from-teal-400 to-blue-400 rounded-full mix-blend-multiply filter blur-2xl animate-aurora-slow-2"></div>
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-gradient-to-r from-violet-400 to-indigo-400 rounded-full mix-blend-multiply filter blur-2xl animate-aurora-slow-3"></div>
        </div>

        {/* Shimmer overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/5 to-transparent animate-shimmer"></div>
      </div>
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 bg-white/30 rounded-full animate-float-particle`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Interactive Sparkles */}
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className="absolute pointer-events-none z-20"
          style={{
            left: sparkle.x,
            top: sparkle.y,
            width: sparkle.size,
            height: sparkle.size,
            animationDelay: `${sparkle.delay}s`,
          }}
        >
          <div className="w-full h-full bg-gradient-to-r from-cyan-300 to-purple-300 rounded-full animate-sparkle-burst opacity-0"></div>
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
          {/* Profile Image */}
          <div className="mb-8">
            <div 
              className="relative inline-block cursor-pointer sparkle-trigger"
              onMouseMove={generateSparkles}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full blur-md opacity-75 animate-pulse-glow"></div>
             <img
  src="https://i.postimg.cc/Lstk1j40/Whats-App-Image-2025-06-14-at-21-52-14-1dc358ed.jpg"
  alt="Bhagya's professional profile photo"
  className={`relative w-40 h-40 sm:w-52 sm:h-52 rounded-full mx-auto border-4 border-white/20 backdrop-blur-sm shadow-2xl object-cover animate-float transition-all duration-300 ${
    isHovering ? 'scale-105 shadow-cyan-400/50' : ''
  }`}
/>


              {/* Sparkle ring effect */}
              <div className={`absolute inset-0 rounded-full border-2 border-cyan-300/50 transition-all duration-300 ${
                isHovering ? 'animate-spin-slow scale-110 opacity-100' : 'opacity-0'
              }`}></div>
            </div>
          </div>

          {/* Name and Title */}
          <h1 
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 animate-fade-in-up cursor-pointer sparkle-trigger transition-all duration-300 hover:scale-105" 
            style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
            onMouseMove={generateSparkles}
          >
            Hi, I'm <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent animate-gradient-text">Bhagya</span>
          </h1>
          
          <p 
            className="text-xl sm:text-2xl text-blue-100 mb-8 font-light animate-fade-in-up cursor-pointer sparkle-trigger transition-all duration-300 hover:text-cyan-200" 
            style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}
            onMouseMove={(e) => generateSparkles(e, 4)}
          >
            An aspiring <span className="font-semibold text-cyan-300">Data Scientist</span> & <span className="font-semibold text-purple-300">Web Developer</span>
          </p>

          <p 
            className="text-lg text-blue-200/80 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-up cursor-pointer sparkle-trigger transition-all duration-300 hover:text-blue-100" 
            style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}
            onMouseMove={(e) => generateSparkles(e, 3)}
          >
            Turning data into smart solutions and crafting seamless web experiences. Eager to innovate and grow through impactful internship opportunities.
          </p>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12 animate-fade-in-up" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
            <a
              href="https://github.com/Bhagya20000625"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-transparent border border-white/20 hover:border-cyan-400/50 sparkle-trigger"
              aria-label="Visit GitHub profile"
              onMouseMove={(e) => generateSparkles(e, 6)}
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/bhagya-umayanga-9b189b305/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-transparent border border-white/20 hover:border-blue-400/50 sparkle-trigger"
              aria-label="Visit LinkedIn profile"
              onMouseMove={(e) => generateSparkles(e, 6)}
            >
              <Linkedin size={24} />
            </a>
            <a
              href="warlrodshad@gmail.com"
              className="p-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-transparent border border-white/20 hover:border-purple-400/50 sparkle-trigger"
              aria-label="Send email"
              onMouseMove={(e) => generateSparkles(e, 6)}
            >
              <Mail size={24} />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToAbout}
          onKeyDown={handleKeyDown}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-blue-200/80 hover:text-white transition-colors duration-300 animate-bounce focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-transparent rounded-full p-2 sparkle-trigger"
          aria-label="Scroll to about section"
          onMouseMove={(e) => generateSparkles(e, 5)}
        >
          <ChevronDown size={32} />
        </button>
      </div>

      {/* Hero Container for Profile Image */}
      <div className="hero-container">
        <img
          src="/path/to/your/profile.jpg"
          alt="Profile"
          className="profile-img"
        />
      </div>
    </section>
  );
};

export default Hero;