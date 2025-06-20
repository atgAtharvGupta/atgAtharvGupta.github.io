import { motion } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const sectionRef = useRef(null);

  return (
    <section id="about" className="min-h-screen py-20 bg-dark-surface">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-5xl mx-auto"
          ref={sectionRef}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-8 relative">
            <span className="text-accent">About</span> Me
            <span className="absolute bottom-0 left-0 w-20 h-1 bg-accent"></span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            {/* Profile Photo Column */}
            <motion.div
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="w-40 h-50 -full border-1 border-accent overflow-hidden mb-6 shadow-xl">
                {/* Replace with your actual photo */}
                <img 
                  src="/assets/profile_photo.jpg" 
                  alt="Atharv Gupta" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "public/assets/profile_photo.jpg"; // Fallback image
                  }}
                />
              </div>
              <a 
                href="/assets/Resume_Atharv_Gupta.pdf" 
                download
                className="py-3 px-6 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg hover:from-purple-700 hover:to-indigo-700 transition duration-300 transform hover:-translate-y-1 flex items-center shadow-lg"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                Download CV
              </a>
            </motion.div>
            
            {/* Bio Content Column */}
            <motion.div 
              className="md:col-span-2"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-300 mb-4 text-lg">
                Hello! I'm Atharv, a passionate full-stack developer and UI/UX designer with a love for creating beautiful, 
                functional, and user-friendly applications.
              </p>
              <p className="text-gray-300 mb-4 text-lg">
                I specialize in building modern web applications using React, Node.js, and other cutting-edge technologies.
                My approach combines clean code with engaging design to deliver exceptional user experiences.
              </p>
              <p className="text-gray-300 mb-6 text-lg">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
                or expanding my skills through continuous learning.
              </p>
              
              {/* Key Skills Box */}
              <div className="bg-dark-bg p-6 rounded-lg shadow-xl">
                <h3 className="text-xl font-semibold text-white mb-4">Key Skills</h3>
                <div className="grid grid-cols-2 gap-2">
                  <div className="text-gray-300">
                    <span className="text-accent mr-2">▹</span> Frontend Development
                  </div>
                  <div className="text-gray-300">
                    <span className="text-accent mr-2">▹</span> Backend Development
                  </div>
                  <div className="text-gray-300">
                    <span className="text-accent mr-2">▹</span> UI/UX Design
                  </div>
                  <div className="text-gray-300">
                    <span className="text-accent mr-2">▹</span> 3D Web Animation
                  </div>
                  <div className="text-gray-300">
                    <span className="text-accent mr-2">▹</span> Data Structures & Algorithms
                  </div>
                  <div className="text-gray-300">
                    <span className="text-accent mr-2">▹</span> Machine Learning
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
