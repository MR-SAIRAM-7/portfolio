import React from 'react';
import { Menu, X, Github, Linkedin } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, scrollToSection }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-[#00FF41]/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div 
            className="text-2xl font-bold text-[#00FF41] cursor-pointer cyber-glow hover:scale-105 transition-transform duration-300"
            onClick={() => scrollToSection('hero')}
          >
            <span className="font-mono">&lt;SaiRam/&gt;</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`nav-link ${
                  activeSection === item.id
                    ? 'text-[#00FF41] border-b-2 border-[#00FF41]'
                    : 'text-white hover:text-[#00FF41]'
                } transition-all duration-300 pb-1`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://github.com/MR-SAIRAM-7"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#00FF41] transition-colors duration-300 hover:scale-110"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/mrsairam"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#00FF41] transition-colors duration-300 hover:scale-110"
            >
              <Linkedin size={20} />
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white hover:text-[#00FF41] transition-colors duration-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-[#00FF41]/20">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  scrollToSection(item.id);
                  setIsOpen(false);
                }}
                className={`block w-full text-left px-2 py-2 ${
                  activeSection === item.id
                    ? 'text-[#00FF41]'
                    : 'text-white hover:text-[#00FF41]'
                } transition-colors duration-300`}
              >
                {item.label}
              </button>
            ))}
            <div className="flex space-x-4 px-2 pt-4">
              <a
                href="https://github.com/MR-SAIRAM-7"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#00FF41] transition-colors duration-300"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/mrsairam"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#00FF41] transition-colors duration-300"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;