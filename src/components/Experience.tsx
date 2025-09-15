import React from 'react';
import { GraduationCap, Award, Download, User, Brain, Users, MessageSquare, Zap } from 'lucide-react';

const Experience: React.FC = () => {
  const timeline = [
    {
      type: 'education',
      title: 'B.Tech – Computer Science & Engineering (Data Science)',
      institution: 'Kommuri Pratap Reddy Institute of Technology, Hyderabad',
      period: '2023 – Present',
      details: 'CGPA: 8.2',
      icon: <GraduationCap className="w-6 h-6" />
    },
    {
      type: 'education',
      title: 'Intermediate (MPC)',
      institution: 'Board of Intermediate Education, Telangana',
      period: '2021 – 2023',
      details: '92.8%',
      icon: <GraduationCap className="w-6 h-6" />
    },
    {
      type: 'certification',
      title: 'Data Structures & Algorithms',
      institution: 'Apna College',
      period: '2024',
      details: 'Advanced problem-solving and algorithmic thinking',
      icon: <Award className="w-6 h-6" />
    }
  ];

  const softSkills = [
    { name: 'Leadership', icon: <User className="w-5 h-5" /> },
    { name: 'Problem Solving', icon: <Brain className="w-5 h-5" /> },
    { name: 'Team Collaboration', icon: <Users className="w-5 h-5" /> },
    { name: 'Communication', icon: <MessageSquare className="w-5 h-5" /> },
    { name: 'Adaptability', icon: <Zap className="w-5 h-5" /> }
  ];

  const handleDownloadResume = () => {
    // Simulate download with animation
    const button = document.querySelector('.download-btn');
    button?.classList.add('downloading');
    
    setTimeout(() => {
      button?.classList.remove('downloading');
      // In a real application, this would trigger an actual download
      console.log('Resume download initiated');
    }, 2000);
  };

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Experience & <span className="cyber-glow text-[#00FF41]">Education</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#00FF41] to-transparent mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Timeline */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-[#00FF41] mb-8">Academic Journey</h3>
              
              {timeline.map((item, index) => (
                <div 
                  key={index}
                  className="timeline-item relative pl-12 pb-8 border-l-2 border-[#00FF41]/30 
                           last:border-l-0 group"
                >
                  {/* Timeline Icon */}
                  <div className="absolute -left-5 top-0 w-10 h-10 bg-black border-2 border-[#00FF41] 
                                rounded-full flex items-center justify-center text-[#00FF41] 
                                group-hover:scale-110 transition-transform duration-300 cyber-glow">
                    {item.icon}
                  </div>

                  {/* Timeline Content */}
                  <div className="bg-black/50 border border-[#00FF41]/30 rounded-lg p-6 
                                hover:border-[#00FF41] transition-all duration-300 group-hover:transform 
                                group-hover:scale-105">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="text-lg font-semibold text-[#00FF41]">{item.title}</h4>
                      <span className="text-sm text-gray-400 bg-[#00FF41]/10 px-3 py-1 rounded-full">
                        {item.period}
                      </span>
                    </div>
                    <p className="text-gray-300 mb-2">{item.institution}</p>
                    <p className="text-[#00FF41] font-semibold">{item.details}</p>
                  </div>

                  {/* Connecting Line Animation */}
                  <div className="absolute left-0 top-12 w-px h-full bg-gradient-to-b 
                                from-[#00FF41] to-transparent animate-pulse"></div>
                </div>
              ))}
            </div>

            {/* Soft Skills & Resume */}
            <div className="space-y-8">
              {/* Download Resume */}
              <div className="text-center">
                <a href="https://drive.google.com/file/d/1Tnrz37DGVl2U8Nf2PF4BwbFa42IUo814/view?usp=sharing" target='_blank'>
                    <button
                //   onClick={handleDownloadResume}
                  className="download-btn neon-button px-8 py-4 text-lg font-semibold rounded-lg 
                           border-2 border-[#00FF41] bg-transparent text-[#00FF41] 
                           hover:bg-[#00FF41] hover:text-black transition-all duration-300 
                           relative overflow-hidden group flex items-center gap-3 mx-auto"
                >
                  <Download className="w-5 h-5 group-hover:animate-bounce" />
                 <span>Download Resume (PDF)</span>
                  <div className="absolute inset-0 bg-[#00FF41] transform scale-x-0 
                                group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </button>
                </a>
              </div>

              {/* Soft Skills */}
              <div className="bg-black/50 border border-[#00FF41]/30 rounded-lg p-6">
                <h3 className="text-2xl font-bold text-[#00FF41] mb-6">Core Competencies</h3>
                <div className="space-y-4">
                  {softSkills.map((skill, index) => (
                    <div 
                      key={skill.name}
                      className="skill-unlock flex items-center gap-4 p-3 rounded-lg 
                               bg-[#00FF41]/5 border border-[#00FF41]/20 
                               hover:border-[#00FF41] hover:bg-[#00FF41]/10 
                               transition-all duration-300 group cursor-default"
                      style={{
                        animationDelay: `${index * 0.2}s`
                      }}
                    >
                      <div className="text-[#00FF41] group-hover:scale-110 transition-transform duration-300">
                        {skill.icon}
                      </div>
                      <span className="text-gray-300 group-hover:text-[#00FF41] 
                                     transition-colors duration-300 font-medium">
                        {skill.name}
                      </span>
                      <div className="ml-auto w-3 h-3 bg-[#00FF41] rounded-full animate-pulse"></div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Info Preview */}
              <div className="bg-black/50 border border-[#00FF41]/30 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-[#00FF41] mb-4">Quick Contact</h4>
                <div className="space-y-2 text-sm">
                  <p className="text-gray-300">📧 mr.sairamofficial@gmail.com</p>
                  <p className="text-gray-300">📱 +91 99894 45975</p>
                  <p className="text-gray-300">🌍 Hyderabad, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;