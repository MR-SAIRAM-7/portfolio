import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 3 seconds
      setTimeout(() => setSubmitted(false), 3000);
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: 'Email',
      value: 'mr.sairamofficial@gmail.com',
      href: 'mailto:mr.sairamofficial@gmail.com'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: 'Phone',
      value: '+91 99894 45975',
      href: 'tel:+919989445975'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: 'Location',
      value: 'Hyderabad, India',
      href: '#'
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-8 h-8" />,
      label: 'GitHub',
      href: 'https://github.com/MR-SAIRAM-7',
      username: '@MR-SAIRAM-7'
    },
    {
      icon: <Linkedin className="w-8 h-8" />,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/mrsairam',
      username: '@mrsairam'
    }
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Contact Matrix Rain Effect */}
      <div className="absolute inset-0 opacity-5">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute text-[#00FF41] text-xs animate-matrix-fall font-mono"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          >
            {String.fromCharCode(33 + Math.random() * 94)}
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Get In <span className="cyber-glow text-[#00FF41]">Touch</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#00FF41] to-transparent mx-auto"></div>
            <p className="text-xl text-gray-300 mt-6 max-w-2xl mx-auto">
              Ready to collaborate on innovative projects or discuss opportunities? 
              Let's build something amazing together!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-[#00FF41] mb-6">Contact Information</h3>
              
              {/* Contact Details */}
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={info.label}
                    href={info.href}
                    className="flex items-center gap-4 p-4 bg-black/50 border border-[#00FF41]/30 
                             rounded-lg hover:border-[#00FF41] hover:bg-[#00FF41]/10 
                             transition-all duration-300 group"
                  >
                    <div className="text-[#00FF41] group-hover:scale-110 transition-transform duration-300">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">{info.label}</p>
                      <p className="text-white font-medium group-hover:text-[#00FF41] transition-colors">
                        {info.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social Links */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-[#00FF41]">Connect With Me</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-3 p-4 bg-black/50 border border-[#00FF41]/30 
                               rounded-lg hover:border-[#00FF41] hover:bg-[#00FF41]/10 
                               transition-all duration-300 flex-1"
                    >
                      <div className="text-[#00FF41] group-hover:scale-110 group-hover:rotate-6 
                                    transition-transform duration-300">
                        {social.icon}
                      </div>
                      <div>
                        <p className="text-white font-medium group-hover:text-[#00FF41] transition-colors">
                          {social.label}
                        </p>
                        <p className="text-gray-400 text-sm">{social.username}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="relative">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full p-4 bg-black border-2 border-[#00FF41]/30 rounded-lg 
                             text-white placeholder-gray-400 focus:border-[#00FF41] 
                             focus:outline-none focus:shadow-lg focus:shadow-[#00FF41]/20 
                             transition-all duration-300"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-4 bg-black border-2 border-[#00FF41]/30 rounded-lg 
                             text-white placeholder-gray-400 focus:border-[#00FF41] 
                             focus:outline-none focus:shadow-lg focus:shadow-[#00FF41]/20 
                             transition-all duration-300"
                  />
                </div>

                <div>
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full p-4 bg-black border-2 border-[#00FF41]/30 rounded-lg 
                             text-white placeholder-gray-400 focus:border-[#00FF41] 
                             focus:outline-none focus:shadow-lg focus:shadow-[#00FF41]/20 
                             transition-all duration-300 resize-none"
                  />
                  <div className="text-right text-sm text-gray-400 mt-1">
                    {formData.message.length}/500
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full neon-button px-8 py-4 text-lg font-semibold rounded-lg 
                           border-2 border-[#00FF41] bg-transparent text-[#00FF41] 
                           hover:bg-[#00FF41] hover:text-black transition-all duration-300 
                           relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed
                           flex items-center justify-center gap-3"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-current border-t-transparent 
                                    rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                      <span className="relative z-10">Send Message</span>
                    </>
                  )}
                  <div className="absolute inset-0 bg-[#00FF41] transform scale-x-0 
                                group-hover:scale-x-100 transition-transform duration-300 origin-left z-[-1]"></div>
                </button>
              </form>

              {/* Success Message */}
              {submitted && (
                <div className="absolute inset-0 bg-black/90 rounded-lg flex items-center justify-center 
                              backdrop-blur-sm animate-fade-in">
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 mx-auto bg-[#00FF41] rounded-full flex items-center justify-center 
                                  animate-pulse">
                      <Send className="w-8 h-8 text-black" />
                    </div>
                    <h4 className="text-2xl font-bold text-[#00FF41]">Message Sent!</h4>
                    <p className="text-gray-300">Thank you for reaching out. I'll get back to you soon!</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
