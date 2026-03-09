import { motion } from "framer-motion";
import { FaJava, FaJsSquare, FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaDatabase, FaGitAlt } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiMongodb, SiPostgresql } from "react-icons/si";

export const SkillsSection = () => {
  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        { name: "React", icon: FaReact, level: 95 },
        { name: "JavaScript", icon: FaJsSquare, level: 90 },
        { name: "TypeScript", icon: SiTypescript, level: 85 },
        { name: "Tailwind CSS", icon: SiTailwindcss, level: 92 },
        { name: "HTML5", icon: FaHtml5, level: 95 },
        { name: "CSS3", icon: FaCss3Alt, level: 90 },
      ],
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", icon: FaNodeJs, level: 88 },
        { name: "Java", icon: FaJava, level: 85 },
        { name: "PostgreSQL", icon: SiPostgresql, level: 82 },
        { name: "MongoDB", icon: SiMongodb, level: 80 },
        { name: "REST APIs", icon: FaDatabase, level: 88 },
        { name: "Git", icon: FaGitAlt, level: 90 },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Technologies and tools I work with
          </p>
        </motion.div>

        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
                {category.category}
              </h3>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {category.skills.map((skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      whileHover={{ y: -5 }}
                      className="p-6 glass rounded-xl dark:bg-gray-800 hover:shadow-lg transition-all"
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <Icon className="text-3xl text-blue-500" />
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                          {skill.name}
                        </h4>
                      </div>

                      {/* Animated Progress Bar */}
                      <div className="relative h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-blue-500 to-cyan-500"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2 }}
                        />
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                        Proficiency: {skill.level}%
                      </p>
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 p-8 glass rounded-xl dark:bg-gray-800"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Other Skills
          </h3>
          <div className="flex flex-wrap gap-3">
            {["Problem Solving", "UI/UX Design", "Agile Development", "Code Review", "Documentation", "Testing", "Performance Optimization", "Team Leadership"].map(
              (skill, index) => (
                <motion.span
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full text-sm font-medium"
                >
                  {skill}
                </motion.span>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
