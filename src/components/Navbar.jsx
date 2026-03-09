import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { FiMenu, FiX, FiSun, FiMoon } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export const Navbar = ({ isDark, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    "Home",
    "About",
    "Skills",
    "Projects",
    "Experience",
    "Contact",
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full z-50 glass backdrop-blur-md"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2"
          >
            <div className="w-10 h-10 gradient-text text-2xl font-bold flex items-center justify-center">
              &lt;/&gt;
            </div>
            <span className="text-lg font-bold dark:text-white">Portfolio</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item}
                to={item.toLowerCase()}
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 cursor-pointer transition-colors duration-300 font-medium link-underline"
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 transition-colors"
            >
              {isDark ? (
                <FiSun className="text-yellow-400 text-xl" />
              ) : (
                <FiMoon className="text-gray-700 text-xl" />
              )}
            </button>
            <div className="flex gap-3">
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://github.com/viplaw02"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 text-xl"
              >
                <FaGithub />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://www.linkedin.com/in/viplaw-sinha-22292823b"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 text-xl"
              >
                <FaLinkedin />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://mail.google.com/mail/?view=cm&to=viplawddn@gmail.com&su=Contact%20from%20Portfolio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 text-xl"
              >
                <FaEnvelope />
              </motion.a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800"
            >
              {isDark ? (
                <FiSun className="text-yellow-400 text-lg" />
              ) : (
                <FiMoon className="text-gray-700 text-lg" />
              )}
            </button>
            <button onClick={toggleMenu} className="text-2xl">
              {isOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isOpen ? 1 : 0,
            height: isOpen ? "auto" : 0,
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div className="px-4 py-6 space-y-4 border-t border-gray-200 dark:border-gray-700">
            {navItems.map((item) => (
              <Link
                key={item}
                to={item.toLowerCase()}
                smooth={true}
                duration={500}
                onClick={() => setIsOpen(false)}
                className="block text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 cursor-pointer font-medium"
              >
                {item}
              </Link>
            ))}
            <div className="flex gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="text-xl text-gray-700 dark:text-gray-300 hover:text-blue-500" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-xl text-gray-700 dark:text-gray-300 hover:text-blue-500" />
              </a>
              <a href="mailto:your.email@example.com">
                <FaEnvelope className="text-xl text-gray-700 dark:text-gray-300 hover:text-blue-500" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};
