import React from 'react';
import { Code, Database, Brain, Cpu } from 'lucide-react';

const About: React.FC = () => {
  const skills = {
    'Languages': {
      icon: <Code className="w-6 h-6" />,
      items: ['Python', 'Java', 'JavaScript (ES6+)', 'SQL']
    },
    'Frontend': {
      icon: <Cpu className="w-6 h-6" />,
      items: ['React.js', 'HTML5', 'CSS3', 'Bootstrap', 'Tailwind CSS']
    },
    'Backend': {
      icon: <Database className="w-6 h-6" />,
      items: ['Node.js', 'Express.js', 'MongoDB', 'MySQL']
    },
    'Data Science': {
      icon: <Brain className="w-6 h-6" />,
      items: ['NumPy', 'Pandas', 'Matplotlib', 'EDA']
    }
  };

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="cyber-glow text-[#00FF41]">About</span> Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#00FF41] to-transparent mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Avatar & Bio */}
            <div className="space-y-8">
              {/* Avatar */}
              <div className="relative w-64 h-64 mx-auto lg:mx-0">
                <div className="w-full h-full bg-gradient-to-br from-[#00FF41]/20 to-black rounded-full 
                               border-2 border-[#00FF41] cyber-glow animate-pulse-slow relative overflow-hidden">
                  <div className="absolute inset-4 bg-gradient-to-br from-[#00FF41]/10 to-black rounded-full 
                                 flex items-center justify-center">
                    <Code className="w-24 h-24 text-[#00FF41]" />
                  </div>
                  {/* Rotating ring */}
                  <div className="absolute inset-0 border-2 border-transparent border-t-[#00FF41] 
                                 rounded-full animate-spin-slow"></div>
                </div>
              </div>

              {/* Bio */}
              <div className="space-y-4 text-center lg:text-left">
                <p className="text-lg text-gray-300 leading-relaxed">
                  Computer Science B.Tech student (CGPA 8.2) passionate about DSA, MERN full-stack development, 
                  Python AI, and data science. Built scalable applications like travel platforms and voice AI assistants.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  I excel in problem-solving, team collaboration, and deploying solutions on modern cloud platforms. 
                  Always eager to learn new technologies and contribute to innovative projects.
                </p>
              </div>
            </div>

            {/* Right Column - Skills */}
            <div className="space-y-6">
              {Object.entries(skills).map(([category, { icon, items }], index) => (
                <div 
                  key={category}
                  className="skill-card bg-black/50 border border-[#00FF41]/30 rounded-lg p-6 
                           hover:border-[#00FF41] transition-all duration-300 group"
                  style={{
                    animationDelay: `${index * 0.2}s`
                  }}
                >
                  <div className="flex items-center mb-4">
                    <div className="text-[#00FF41] mr-3 group-hover:scale-110 transition-transform duration-300">
                      {icon}
                    </div>
                    <h3 className="text-xl font-semibold text-[#00FF41]">{category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill, skillIndex) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-[#00FF41]/10 border border-[#00FF41]/30 rounded-full 
                                 text-sm text-gray-300 hover:bg-[#00FF41]/20 hover:border-[#00FF41] 
                                 transition-all duration-300 cursor-default"
                        style={{
                          animationDelay: `${(index * 0.2) + (skillIndex * 0.1)}s`
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;