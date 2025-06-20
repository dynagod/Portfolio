import React, { useState } from 'react';
import { FaBars, FaDiscord, FaDownload, FaEnvelope, FaGithub, FaLinkedin, FaMoon, FaSun, FaX } from 'react-icons/fa6';
import { FaExternalLinkAlt } from 'react-icons/fa';
import ContactForm from './components/ContactForm';

const App = () => {
  const [isDark, setIsDark] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleTheme = () => setIsDark(!isDark);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with payment integration and admin dashboard.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop",
      link: "#"
    },
    {
      id: 2,
      title: "AI Chat Application",
      description: "Real-time chat app with AI-powered responses and modern UI/UX.",
      tech: ["Next.js", "OpenAI", "WebSocket", "Tailwind"],
      image: "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?w=400&h=250&fit=crop",
      link: "#"
    },
    {
      id: 3,
      title: "Task Management System",
      description: "Collaborative project management tool with team features and analytics.",
      tech: ["Vue.js", "Firebase", "TypeScript", "Chart.js"],
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop",
      link: "#"
    },
    {
      id: 4,
      title: "Weather Dashboard",
      description: "Beautiful weather app with forecasts, maps, and location-based alerts.",
      tech: ["React", "Weather API", "Mapbox", "PWA"],
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=250&fit=crop",
      link: "#"
    },
    {
      id: 5,
      title: "Fitness Tracker",
      description: "Mobile-first fitness app with workout plans and progress tracking.",
      tech: ["React Native", "Redux", "SQLite", "Charts"],
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop",
      link: "#"
    },
    {
      id: 6,
      title: "Blog Platform",
      description: "Modern blogging platform with markdown support and SEO optimization.",
      tech: ["Gatsby", "GraphQL", "Netlify CMS", "MDX"],
      image: "https://images.unsplash.com/photo-1486312338219-ce68e2c6b696?w=400&h=250&fit=crop",
      link: "#"
    }
  ];

  const skills = [
    "JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Python", "MongoDB", "Git"
  ];

  const themeClasses = isDark 
    ? 'bg-gray-900 text-gray-100' 
    : 'bg-white text-gray-900';

  const cardClasses = isDark 
    ? 'bg-gray-800 border-gray-700' 
    : 'bg-white border-gray-200 shadow-lg';

  return (
    <div className={`min-h-screen transition-colors duration-300 ${themeClasses}`}>
      {/* Navbar */}
      <nav className={`fixed top-0 w-full z-50 backdrop-blur-md ${isDark ? 'bg-gray-900/80' : 'bg-white/80'} border-b ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="text-xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                Ayush Mamgain
              </h1>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#home" className="hover:text-purple-400 transition-colors">Home</a>
                <a href="#about" className="hover:text-purple-400 transition-colors">About</a>
                <a href="#projects" className="hover:text-purple-400 transition-colors">Projects</a>
                <a href="#contact" className="hover:text-purple-400 transition-colors">Contact</a>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg hover:bg-gray-700 transition-colors"
              >
                {isDark ? <FaSun className="w-5 h-5" /> : <FaMoon className="w-5 h-5" />}
              </button>
              
              {/* Mobile menu button */}
              <button
                onClick={toggleMenu}
                className="md:hidden p-2 rounded-lg hover:bg-gray-700 transition-colors"
              >
                {isMenuOpen ? <FaX className="w-5 h-5" /> : <FaBars className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className={`md:hidden ${isDark ? 'bg-gray-800' : 'bg-gray-50'} border-t ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#home" className="block px-3 py-2 hover:bg-gray-700 rounded-md transition-colors">Home</a>
              <a href="#about" className="block px-3 py-2 hover:bg-gray-700 rounded-md transition-colors">About</a>
              <a href="#projects" className="block px-3 py-2 hover:bg-gray-700 rounded-md transition-colors">Projects</a>
              <a href="#contact" className="block px-3 py-2 hover:bg-gray-700 rounded-md transition-colors">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 bg-clip-text text-transparent animate-pulse leading-[2]">
              Ayush Mamgain
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-400">
              Full-Stack Developer
            </p>
            <p className="text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
              I create beautiful, functional, and user-centered digital experiences that solve real-world problems through code and design.
            </p>
            <a
              href="#projects"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              View My Work
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <div className="mb-8 flex justify-center md:justify-start">
                <div className="w-48 h-48 rounded-full shadow-2xl border-4 border-purple-500 bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center">
                  <svg className="w-24 h-24 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
              </div>
            </div>
            <div>
              <p className="text-lg mb-6 leading-relaxed">
                Hi! I'm Ayush, a full-stack developer focused on building modern web applications. I enjoy solving problems and creating efficient, user-friendly solutions using current web technologies.
              </p>
              <p className="text-lg mb-8 leading-relaxed">
                Outside of coding, I like to learn new things and improve my skills. I value clean code, good design, and practical solutions.
              </p>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Skills & Technologies</h3>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 rounded-full text-sm font-medium hover:from-purple-600/30 hover:to-blue-600/30 transition-all duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className={`${cardClasses} rounded-xl overflow-hidden border hover:shadow-2xl transform hover:scale-105 transition-all duration-300 group`}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gradient-to-r from-purple-600/10 to-blue-600/10 border border-purple-500/20 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    className="inline-flex items-center text-purple-400 hover:text-purple-300 font-medium group/link"
                  >
                    View Project
                    <FaExternalLinkAlt className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Let's work together</h3>
              <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                I'm always interested in hearing about new opportunities and exciting projects. Let's connect and discuss how we can bring your ideas to life!
              </p>
              
              <div className="flex space-x-6 mb-8">
                <a href="https://github.com/dynagod" target="_blank" className="p-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg hover:from-purple-700 hover:to-blue-700 transform hover:scale-110 transition-all duration-200">
                  <FaGithub className="w-6 h-6" />
                </a>
                <a href="https://www.linkedin.com/in/ayush-mamgain" target="_blank" className="p-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg hover:from-purple-700 hover:to-blue-700 transform hover:scale-110 transition-all duration-200">
                  <FaLinkedin className="w-6 h-6" />
                </a>
                <a href="https://discordapp.com/users/1087371531442737174" target="_blank" className="p-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg hover:from-purple-700 hover:to-blue-700 transform hover:scale-110 transition-all duration-200">
                  <FaDiscord className="w-6 h-6" />
                </a>
                <a href="mailto:ayushmamgain.connct@gmail.com" target="_blank" className="p-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg hover:from-purple-700 hover:to-blue-700 transform hover:scale-110 transition-all duration-200">
                  <FaEnvelope className="w-6 h-6" />
                </a>
              </div>

              <a
                href="/Ayush's Resume.pdf"
                download
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <FaDownload className="w-5 h-5 mr-2" />
                Download Resume
              </a>
            </div>
            
            <ContactForm isDark={isDark} cardClasses={cardClasses}/>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 px-4 border-t ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">
            © 2025 John Doe. Built with React & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;