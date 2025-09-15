import React from 'react';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black/80 border-t border-[#00FF41]/20 py-8 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full bg-[linear-gradient(45deg,transparent_24%,rgba(0,255,65,0.1)_25%,rgba(0,255,65,0.1)_26%,transparent_27%,transparent_74%,rgba(0,255,65,0.1)_75%,rgba(0,255,65,0.1)_76%,transparent_77%,transparent)] bg-[length:20px_20px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Copyright */}
            <div className="flex items-center gap-2 text-gray-300">
              <span>© 2024 Mula SaiRam. Built with</span>
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              <span>and lots of coffee ☕</span>
            </div>

            {/* Quick Links */}
            <div className="flex items-center gap-6">
              <a
                href="https://github.com/MR-SAIRAM-7"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#00FF41] transition-colors duration-300 
                         hover:scale-110 transform"
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/mrsairam"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#00FF41] transition-colors duration-300 
                         hover:scale-110 transform"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:mr.sairamofficial@gmail.com"
                className="text-gray-400 hover:text-[#00FF41] transition-colors duration-300 
                         hover:scale-110 transform"
                aria-label="Email Contact"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Additional Footer Info */}
          <div className="mt-6 pt-6 border-t border-[#00FF41]/10 text-center">
            <p className="text-sm text-gray-400 max-w-2xl mx-auto">
              This portfolio showcases my journey as a Computer Science student specializing in 
              MERN Stack development and Data Science. Always open to new opportunities and collaborations.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;