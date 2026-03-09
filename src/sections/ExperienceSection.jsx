import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FiMapPin, FiCalendar } from "react-icons/fi";
import { FaBriefcase, FaGraduationCap, FaBook } from "react-icons/fa";

export const ExperienceSection = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const timeline = [
    {
      id: 1,
      type: "experience",
      icon: FaBriefcase,
      title: "Assistant Professor",
      company: "Graphic Era University",
      location: "Dehradun, India",
      date: "2025 - Present",
      description:
        "Teaching computer science subjects and mentoring students in programming and software development.",
    },
    {
      id: 2,
      type: "education",
      icon: FaGraduationCap,
      title: "Master's in Computer Science & Engineering",
      company: "Graphic Era University",
      location: "Dehradun, India",
      date: "2025 - 2027",
      description:
        "Focused on advanced computing, software engineering and modern development frameworks.",
    },
    {
      id: 3,
      type: "education",
      icon: FaGraduationCap,
      title: "Master of Computer Applications (MCA)",
      company: "Graphic Era University",
      location: "Dehradun, India",
      date: "2023 - 2025",
      description:
        "Specialized in full-stack development, MERN stack and software architecture.",
    },
    
    
  ];

  return (
    <section
      id="experience"
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900"
    >
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Experience & Education
          </h2>

          <p className="text-gray-600 dark:text-gray-400">
            My professional journey and academic background
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">

          {/* Line */}
          <div className="absolute left-4 md:left-1/2 top-0 h-full w-1 bg-gray-300 dark:bg-gray-700 md:-translate-x-1/2"/>

          {/* Scroll progress */}
          <motion.div
            style={{ scaleY }}
            className="absolute left-4 md:left-1/2 top-0 h-full w-1 bg-gradient-to-b from-blue-500 to-cyan-400 origin-top md:-translate-x-1/2"
          />

          <div className="space-y-12">
            {timeline.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="flex items-start gap-6 md:gap-10"
                >
                  {/* Dot */}
                  <div className="relative flex items-center justify-center">
                    <motion.div
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                      className="absolute w-8 h-8 bg-blue-500 blur-xl rounded-full"
                    />

                    <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white shadow-lg">
                      <Icon size={14}/>
                    </div>
                  </div>

                  {/* Card */}
                  <motion.div
                    whileHover={{ y: -6, scale: 1.02 }}
                    className="flex-1 bg-white dark:bg-gray-800 rounded-xl p-5 shadow-md hover:shadow-xl transition"
                  >
                    <div className="flex justify-between flex-wrap gap-2 mb-2">

                      <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white">
                        {item.title}
                      </h3>

                      <span className="text-xs px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300">
                        {item.type === "experience" ? "Experience" : "Education"}
                      </span>

                    </div>

                    <p className="text-blue-600 dark:text-blue-400 font-semibold mb-2">
                      {item.company}
                    </p>

                    <div className="text-sm text-gray-600 dark:text-gray-400 flex flex-col gap-1 mb-3">
                      <div className="flex items-center gap-2">
                        <FiCalendar/>
                        {item.date}
                      </div>

                      <div className="flex items-center gap-2">
                        <FiMapPin/>
                        {item.location}
                      </div>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base">
                      {item.description}
                    </p>

                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};