import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      id: 1,
      name: "Frontend",
      skills: [
        { name: "React" },
        { name: "JavaScript" },
        { name: "HTML & CSS" },
        { name: "Three.js" },
        { name: "Vue.js" }
      ]
    },
    {
      id: 2,
      name: "Backend",
      skills: [
        { name: "Node.js" },
        { name: "Express" },
        { name: "MongoDB" },
        { name: "SQL" },
        { name: "Django" }
      ]
    },
    {
      id: 3,
      name: "Programming Languages",
      skills: [
        { name: "JavaScript" },
        { name: "Python" },
        { name: "C" },
        { name: "C++" },
        { name: "Flutter" }
      ]
    },
    {
      id: 4,
      name: "Cloud & DevOps",
      skills: [
        { name: "Git" },
        { name: "Docker" },
        { name: "Azure" },
        { name: "AWS" },
        { name: "Firebase" }
      ]
    },
    {
      id: 5,
      name: "AI & Data Science",
      skills: [
        { name: "Machine Learning" },
        { name: "Data Structures" },
        { name: "Algorithms" },
        { name: "OpenAI" },
        { name: "Data Analysis" }
      ]
    },
    {
      id: 6,
      name: "Tools & Others",
      skills: [
        { name: "Salesforce" },
        { name: "Figma" },
        { name: "GraphQL" },
        { name: "Competitive Programming" },
        { name: "UI/UX Design" }
      ]
    }
  ];

  return (
    <section id="skills" className="min-h-screen py-20 bg-dark-bg">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-12 relative">
            Technical <span className="text-accent">Skills</span>
            <span className="absolute bottom-0 left-0 w-20 h-1 bg-accent"></span>
          </h2>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              I've developed expertise in a wide range of technologies. Here's a comprehensive overview of my technical skills across different domains.
            </p>
          </motion.div>
          
          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div 
                key={category.id}
                className="bg-dark-surface p-6 rounded-xl shadow-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <h3 className="text-2xl font-bold text-white mb-6 text-center border-b border-accent/30 pb-2">
                  {category.name}
                </h3>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex}
                      className="bg-dark-bg px-4 py-2 rounded-full text-gray-300 border border-gray-700 hover:border-accent transition-colors duration-300"
                    >
                      {skill.name}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="mt-16 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-300 text-lg">
              Always learning and expanding my skillset with emerging technologies and best practices.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
