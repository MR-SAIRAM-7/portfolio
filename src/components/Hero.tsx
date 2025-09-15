import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface HeroProps {
  scrollToSection: (sectionId: string) => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToSection }) => {
  const [text, setText] = useState('');
  const fullText = "MERN Stack Developer | Data Scientist | Aspiring Software Engineer";
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 cyber-grid opacity-10"></div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="particle absolute w-1 h-1 bg-[#00FF41] rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="text-center z-10 px-4">
        {/* Name */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 cyber-glow animate-glow-pulse">
          <span className="glitch-text text-[#00FF41]" data-text="MULA SAIRAM">
            MULA SAIRAM
          </span>
        </h1>

        {/* Typewriter Subtitle */}
        <div className="text-xl md:text-2xl lg:text-3xl mb-8 h-16 flex items-center justify-center">
          <span className="typewriter text-white font-mono">
            {text}
            <span className="animate-pulse">|</span>
          </span>
        </div>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
          Skilled in DSA, building scalable applications with Python & Java. 
          Passionate about innovation and seeking opportunities to collaborate on cutting-edge projects.
        </p>

        {/* CTA Button */}
        <button
          onClick={() => scrollToSection('projects')}
          className="neon-button px-8 py-4 text-lg font-semibold rounded-lg border-2 border-[#00FF41] 
                   bg-transparent text-[#00FF41] hover:bg-[#00FF41] hover:text-black 
                   transition-all duration-300 relative overflow-hidden group"
        >
          <span className="relative z-10">Explore Projects</span>
          <div className="absolute inset-0 bg-[#00FF41] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
        </button>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-[#00FF41] w-8 h-8" />
        </div>
      </div>
    </section>
  );
};

export default Hero;