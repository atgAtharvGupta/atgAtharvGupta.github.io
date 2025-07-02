import { motion } from 'framer-motion';
import { useRef } from 'react';

const Projects = () => {
  const projectsRef = useRef(null);
  
  const projects = [
    {
      id: 1,
      title: "3D Interactive Web Portfolio",
      description: "A portfolio website using React Three Fiber and Framer Motion for interactive 3D elements and animations.",
      tech: ["React", "Three.js", "Framer Motion", "Tailwind CSS"],
      image: "./projects/portfolio.jpg",
      link: "#"
    },
    {
      id: 2,
      title: "SGSITS Student Sangh (SSS)",
      description: "A comprehensive platform showcasing various wings of SSS at SGSITS, providing information about activities, missions, and membership opportunities with multilingual support.",
      tech: ["React", "Vite", "Tailwind CSS", "Framer Motion", "React-i18next"],
      image: "./projects/sss.jpg",
      link: "#"
    },
    {
      id: 3,
      title: "EklipXit",
      description: "An innovative Android application that revolutionizes test generation in education by automatically creating questions from text or PDF content using large language models with quality verification.",
      tech: ["Android", "Large Language Models", "PDF Processing", "Machine Learning"],
      image: "./projects/ekplixit.jpg",
      link: "#"
    },
    {
      id: 4,
      title: "Social Media Dashboard",
      description: "Comprehensive dashboard for monitoring and analyzing social media performance across platforms.",
      tech: ["Vue.js", "D3.js", "Express", "PostgreSQL"],
      image: "./projects/dashboard.jpg",
      link: "#"
    }
  ];

  return (
    <section id="projects" className="min-h-screen py-20 bg-dark-surface" ref={projectsRef}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-12 relative">
            Featured <span className="text-accent">Projects</span>
            <span className="absolute bottom-0 left-0 w-20 h-1 bg-accent"></span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className="bg-dark-bg rounded-xl overflow-hidden shadow-2xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <div className="h-48 bg-gradient-to-r from-purple-500 to-indigo-600 flex items-center justify-center">
                  <h3 className="text-xl font-bold text-white">
                    {project.title}
                  </h3>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="text-xs font-medium bg-accent/20 text-accent px-2 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <a 
                    href={project.link}
                    className="inline-block text-accent hover:text-white transition-colors duration-300"
                  >
                    View Project →
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
