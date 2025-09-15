import React, { useState } from 'react';
import { ExternalLink, Github, Plus, X } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([
    {
      id: 1,
      title: "Wanderlust – Full-Stack Travel Platform",
      description: "Responsive travel listing platform built with Node.js, Express, and MongoDB. Features include image uploads with Cloudinary, user authentication via Passport.js, and MVC architecture. Deployed on Render with full CRUD functionality.",
      image: "https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=600",
      tech: ["Node.js", "Express.js", "MongoDB", "EJS", "Bootstrap", "Cloudinary"],
      liveUrl: "https://wanderlust-1lnu.onrender.com/listings",
      githubUrl: "https://github.com/MR-SAIRAM-7/wanderlust.git"
    },
    {
      id: 2,
      title: "DeskTop-AI-Assistant",
      description: "Python-powered desktop assistant with advanced speech recognition and text-to-speech capabilities. Integrates OpenAI GPT-3 for intelligent responses, voice commands for system control, and customizable command mapping with prompt saving functionality.",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600",
      tech: ["Python", "OpenAI GPT-3", "Speech Recognition", "TTS", "Tkinter"],
      githubUrl: "https://github.com/MR-SAIRAM-7/DeskTop-AI-Assistant.git"
    },
    {
      id: 3,
      title: "Zerodha – Trading Platform Clone",
      description: "Interactive full-stack trading dashboard featuring real-time portfolio management with React and Vite. Includes Chart.js data visualizations, Node.js/Express backend with MongoDB schemas, RESTful APIs, and complete deployment on Render.",
      image: "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=600",
      tech: ["React", "Vite", "Chart.js", "Node.js", "MongoDB", "REST APIs"],
      liveUrl: "https://zerodha-frontend3.onrender.com",
      githubUrl: "https://github.com/MR-SAIRAM-7/Zerodha.git"
    }
  ]);

  const [showAddForm, setShowAddForm] = useState(false);
  const [newProject, setNewProject] = useState({
    title: '',
    description: '',
    image: '',
    tech: '',
    liveUrl: '',
    githubUrl: ''
  });

//   const addProject = () => {
//     if (newProject.title && newProject.description) {
//       const project: Project = {
//         id: projects.length + 1,
//         title: newProject.title,
//         description: newProject.description,
//         image: newProject.image || "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=600",
//         tech: newProject.tech.split(',').map(t => t.trim()),
//         liveUrl: newProject.liveUrl || undefined,
//         githubUrl: newProject.githubUrl || undefined
//       };
//       setProjects([...projects, project]);
//       setNewProject({ title: '', description: '', image: '', tech: '', liveUrl: '', githubUrl: '' });
//       setShowAddForm(false);
//     }
//   };

//   const deleteProject = (id: number) => {
//     setProjects(projects.filter(project => project.id !== id));
//   };

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              My <span className="cyber-glow text-[#00FF41]">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#00FF41] to-transparent mx-auto"></div>
            <p className="text-xl text-gray-300 mt-6 max-w-2xl mx-auto">
              Showcasing full-stack applications, AI assistants, and data visualization projects
            </p>
          </div>

          {/* Add Project Button */}
          {/* <div className="text-center mb-8">
            <button
              onClick={() => setShowAddForm(true)}
              className="neon-button px-4 py-2 border border-[#00FF41]/50 text-[#00FF41] 
                       hover:bg-[#00FF41]/10 transition-all duration-300 rounded-lg flex items-center mx-auto gap-2"
            >
              <Plus size={16} />
              Add Project
            </button>
          </div> */}

          {/* Add Project Form */}
          {showAddForm && (
            <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
              <div className="bg-black border-2 border-[#00FF41] rounded-lg p-6 max-w-md w-full max-h-[90vh] overflow-y-auto">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold text-[#00FF41]">Add New Project</h3>
                  <button 
                    onClick={() => setShowAddForm(false)}
                    className="text-gray-400 hover:text-[#00FF41] transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Project Title"
                    value={newProject.title}
                    onChange={(e) => setNewProject({...newProject, title: e.target.value})}
                    className="w-full p-3 bg-black border border-[#00FF41]/30 rounded focus:border-[#00FF41] 
                             text-white placeholder-gray-400 outline-none transition-all duration-300"
                  />
                  <textarea
                    placeholder="Project Description"
                    value={newProject.description}
                    onChange={(e) => setNewProject({...newProject, description: e.target.value})}
                    rows={3}
                    className="w-full p-3 bg-black border border-[#00FF41]/30 rounded focus:border-[#00FF41] 
                             text-white placeholder-gray-400 outline-none transition-all duration-300 resize-none"
                  />
                  <input
                    type="url"
                    placeholder="Image URL (optional)"
                    value={newProject.image}
                    onChange={(e) => setNewProject({...newProject, image: e.target.value})}
                    className="w-full p-3 bg-black border border-[#00FF41]/30 rounded focus:border-[#00FF41] 
                             text-white placeholder-gray-400 outline-none transition-all duration-300"
                  />
                  <input
                    type="text"
                    placeholder="Technologies (comma-separated)"
                    value={newProject.tech}
                    onChange={(e) => setNewProject({...newProject, tech: e.target.value})}
                    className="w-full p-3 bg-black border border-[#00FF41]/30 rounded focus:border-[#00FF41] 
                             text-white placeholder-gray-400 outline-none transition-all duration-300"
                  />
                  <input
                    type="url"
                    placeholder="Live Demo URL (optional)"
                    value={newProject.liveUrl}
                    onChange={(e) => setNewProject({...newProject, liveUrl: e.target.value})}
                    className="w-full p-3 bg-black border border-[#00FF41]/30 rounded focus:border-[#00FF41] 
                             text-white placeholder-gray-400 outline-none transition-all duration-300"
                  />
                  <input
                    type="url"
                    placeholder="GitHub URL (optional)"
                    value={newProject.githubUrl}
                    onChange={(e) => setNewProject({...newProject, githubUrl: e.target.value})}
                    className="w-full p-3 bg-black border border-[#00FF41]/30 rounded focus:border-[#00FF41] 
                             text-white placeholder-gray-400 outline-none transition-all duration-300"
                  />
                  <button
                    onClick={addProject}
                    className="w-full neon-button py-3 border-2 border-[#00FF41] text-[#00FF41] 
                             hover:bg-[#00FF41] hover:text-black transition-all duration-300 rounded-lg font-semibold"
                  >
                    Add Project
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={project.id}
                className="project-card bg-black/50 border border-[#00FF41]/30 rounded-lg overflow-hidden 
                         hover:border-[#00FF41] hover:shadow-lg hover:shadow-[#00FF41]/20 
                         transition-all duration-500 group relative"
                style={{
                  animationDelay: `${index * 0.2}s`
                }}
              >
                {/* Delete button */}
                {/* <button
                  onClick={() => deleteProject(project.id)}
                  className="absolute top-2 right-2 z-10 bg-red-500/80 text-white p-1 rounded-full 
                           opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-red-500"
                >
                  <X size={16} />
                </button> */}

                {/* Project Image */}
                <div className="relative overflow-hidden h-48">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                </div>

                {/* Project Content */}
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-[#00FF41] line-clamp-2">{project.title}</h3>
                  <p className="text-gray-300 text-sm line-clamp-3 leading-relaxed">{project.description}</p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span 
                        key={tech}
                        className="px-2 py-1 bg-[#00FF41]/10 border border-[#00FF41]/30 rounded text-xs 
                                 text-[#00FF41] hover:bg-[#00FF41]/20 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3 pt-2">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-[#00FF41]/10 border border-[#00FF41]/30 
                                 text-[#00FF41] rounded hover:bg-[#00FF41]/20 transition-all duration-300 text-sm"
                      >
                        <ExternalLink size={14} />
                        Live Demo
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-transparent border border-gray-500 
                                 text-gray-300 rounded hover:border-[#00FF41] hover:text-[#00FF41] 
                                 transition-all duration-300 text-sm"
                      >
                        <Github size={14} />
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;