import { motion } from 'framer-motion';

const Education = () => {  const educationData = [
    {
      id: 1,
      degree: "B.Tech (Information Technology)",
      institution: "Shri Govindram Seksaria Institute of Technology and Science, Indore",
      period: "2022 - 2026",
      description: "Currently pursuing Bachelor of Technology in Information Technology."
    },
    {
      id: 2,
      degree: "Higher Secondary Education (12th)",
      institution: "South Indian Cultural Association Senior Secondary School, Nipania, Indore",
      period: "2021",
      description: "Completed 12th class with 89.8% marks."
    },
    {
      id: 3,
      degree: "Secondary Education (10th)",
      institution: "South Indian Cultural Association Senior Secondary School, Nipania, Indore",
      period: "2019",
      description: "Completed 10th class with 84% marks."
    }
  ];

  return (
    <section id="education" className="min-h-screen py-20 bg-dark-bg">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-12 relative">
            <span className="text-accent">Education</span> & Qualifications
            <span className="absolute bottom-0 left-0 w-20 h-1 bg-accent"></span>
          </h2>
          
          <div className="space-y-12 relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 top-0 h-full w-1 bg-accent/30 transform md:-translate-x-1/2"></div>
            
            {educationData.map((item, index) => (
              <motion.div 
                key={item.id}
                className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <div className="md:w-1/2 relative">
                  {/* Timeline Dot */}
                  <div className="absolute top-0 left-0 md:left-auto md:right-0 w-5 h-5 bg-accent rounded-full transform translate-x-[-50%] md:translate-x-[50%] z-10"></div>
                  
                  <div className={`ml-8 md:ml-0 ${index % 2 === 0 ? 'md:mr-8 text-right' : 'md:ml-8'}`}>
                    <span className="inline-block px-3 py-1 rounded-full bg-accent/20 text-accent text-sm mb-2">
                      {item.period}
                    </span>
                    <h3 className="text-xl font-bold text-white">{item.degree}</h3>
                    <h4 className="text-gray-300 font-medium mb-2">{item.institution}</h4>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                </div>
                
                <div className="md:w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
