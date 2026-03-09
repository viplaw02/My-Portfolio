import { motion } from "framer-motion";
import { FiCode, FiDatabase, FiSmartphone } from "react-icons/fi";

export const AboutSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const features = [
    {
      icon: FiCode,
      title: "Frontend Development",
      description: "Building beautiful and interactive user interfaces with React and modern CSS",
    },
    {
      icon: FiDatabase,
      title: "Backend Development",
      description: "Creating robust server-side applications and APIs with Node.js and databases",
    },
    {
      icon: FiSmartphone,
      title: "Responsive Design",
      description: "Ensuring seamless experiences across all devices and screen sizes",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Get to know more about my background and expertise
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center mb-16"
        >
          <motion.div variants={itemVariants}>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl opacity-20" />
              <div className="absolute inset-0 w-full h-96 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-2xl glass" />
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
              Full-Stack Developer & Creative Thinker
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              With a passion for creating elegant solutions to complex problems, I've spent the last few years building web applications that make a difference. I believe in writing clean, maintainable code and creating experiences that users love.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community.
            </p>
            <div className="flex gap-4 pt-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://drive.google.com/file/d/1l5G_8Zn-n3YqGhkKwn1xbHzlkvjztCCd/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-block text-center"
              >
                Download CV
              </motion.a>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary"
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="p-8 glass rounded-xl dark:bg-gray-800 hover:shadow-lg transition-shadow"
              >
                <Icon className="text-4xl text-blue-500 mb-4" />
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
