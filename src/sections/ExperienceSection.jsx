import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import { FiCalendar, FiMapPin } from "react-icons/fi";

export const ExperienceSection = () => {

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30
  });

  const timeline = [
    {
      id: 1,
      type: "experience",
      title: "Assistant Professor",
      company: "Graphic Era University",
      location: "Dehradun, India",
      date: "2025 - Present",
      description:
        "Teaching modern web technologies and mentoring students in React, UI engineering and software development."
    },
    {
      id: 2,
      type: "education",
      title: "M.Tech Computer Science",
      company: "Graphic Era University",
      location: "Dehradun, India",
      date: "2025 - 2027",
      description:
        "Advanced research in computer science and scalable software systems."
    },
    {
      id: 3,
      type: "education",
      title: "Master of Computer Applications",
      company: "Graphic Era University",
      location: "Dehradun, India",
      date: "2023 - 2025",
      description:
        "Specialized in web development, algorithms and software engineering."
    }
  ];

  return (
    <section
      id="experience"
      ref={ref}
      className="py-24 px-6 relative"
    >

      <div className="max-w-6xl mx-auto">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Experience & Education
          </h2>

          <p className="mt-4 text-gray-600 dark:text-gray-400">
            My academic and professional journey
          </p>

        </motion.div>

        {/* Timeline wrapper */}

        <div className="relative">

          {/* Timeline base line */}

          <div className="absolute left-4 md:left-1/2 top-0 h-full w-[2px] bg-gray-200 dark:bg-gray-700 md:-translate-x-1/2" />

          {/* Animated progress line */}

          <motion.div
            style={{ scaleY }}
            className="absolute left-4 md:left-1/2 top-0 h-full w-[2px] bg-gradient-to-b from-blue-500 via-cyan-400 to-purple-500 origin-top md:-translate-x-1/2"
          />

          <div className="space-y-20">

            {timeline.map((item, index) => (

              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row items-start ${
                  index % 2 === 0
                    ? "md:flex-row"
                    : "md:flex-row-reverse"
                }`}
              >

                {/* Card */}

                <div className="md:w-1/2 pl-14 md:pl-0 md:px-10">

                  <motion.div
                    whileHover={{ y: -10, scale: 1.03 }}
                    className="backdrop-blur-xl bg-white/60 dark:bg-gray-800/60 border border-white/20 dark:border-gray-700 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all"
                  >

                    <div className="flex justify-between items-start">

                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {item.title}
                      </h3>

                      <span className="text-xs px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300">
                        {item.type === "experience" ? "Experience" : "Education"}
                      </span>

                    </div>

                    <p className="text-blue-600 dark:text-blue-400 font-semibold mt-2">
                      {item.company}
                    </p>

                    <div className="mt-3 text-sm text-gray-600 dark:text-gray-400 space-y-1">

                      <div className="flex items-center gap-2">
                        <FiCalendar />
                        {item.date}
                      </div>

                      <div className="flex items-center gap-2">
                        <FiMapPin />
                        {item.location}
                      </div>

                    </div>

                    <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                      {item.description}
                    </p>

                  </motion.div>

                </div>

                {/* Glowing Dot */}

                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2">

                  <motion.div
                    whileHover={{ scale: 1.4 }}
                    className="relative flex items-center justify-center"
                  >

                    <span className="absolute w-6 h-6 bg-blue-500 rounded-full blur-md opacity-70 animate-pulse"></span>

                    <span className="relative w-4 h-4 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full border-4 border-white dark:border-gray-900"></span>

                  </motion.div>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
};