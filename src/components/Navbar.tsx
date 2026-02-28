import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { FaCode, FaFolderOpen, FaEnvelope, FaLaptopCode, FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

const sections = [
  { name: "Home", icon: <FaCode />, id: "home" },
  { name: "Projects", icon: <FaLaptopCode />, id: "projects" },
  { name: "About", icon: <FaFolderOpen />, id: "about" },
  { name: "Contact", icon: <FaEnvelope />, id: "contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      const offsets: Record<string, number> = {};
      sections.forEach((sec) => {
        const el = document.getElementById(sec.id);
        if (el) offsets[sec.id] = el.offsetTop;
      });
      let current = "home";
      for (const sec of sections) {
        if (scrollPos >= (offsets[sec.id] - 100)) current = sec.id;
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Navbar - Always visible on lg screens and up */}
      <motion.div 
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="hidden lg:flex fixed top-0 left-0 h-screen w-16 flex-col items-center bg-gray-900 border-r-2 border-gray-800 shadow-2xl py-6 space-y-4 z-50"
      >
        {sections.map((sec, index) => (
          <motion.div
            key={sec.id}
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 + 0.2 }}
          >
            <ScrollLink
              to={sec.id}
              smooth
              offset={-50}
              duration={500}
              className={`relative group flex items-center justify-center w-12 h-12 cursor-pointer rounded-lg hover:bg-gray-800 transition-all border-2 ${
                activeSection === sec.id 
                  ? "text-accent border-accent shadow-lg shadow-accent/50" 
                  : "text-gray-400 border-transparent hover:border-gray-700"
              }`}
            >
              <motion.div
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                {sec.icon}
              </motion.div>
              {/* Tooltip */}
              <span className="absolute left-14 px-3 py-2 bg-gray-800 border-2 border-accent text-white rounded-lg opacity-0 group-hover:opacity-100 transition-all whitespace-nowrap font-mono text-sm shadow-lg shadow-accent/30">
                &lt;{sec.name.toLowerCase()}&gt;
                <span className="animate-pulse text-accent">_</span>
              </span>
            </ScrollLink>
          </motion.div>
        ))}
      </motion.div>

      {/* Mobile Hamburger Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="lg:hidden fixed top-4 right-4 z-50 w-12 h-12 bg-gray-900 text-white rounded-lg flex items-center justify-center shadow-lg hover:bg-gray-800 transition-colors"
      >
        {isMobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
      </button>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
          isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed top-0 right-0 h-screen w-64 bg-gray-900 shadow-lg z-40 transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col pt-20 px-6 space-y-6">
          {sections.map((sec) => (
            <ScrollLink
              key={sec.id}
              to={sec.id}
              smooth
              offset={-50}
              duration={500}
              onClick={handleLinkClick}
              className={`flex items-center space-x-4 px-4 py-3 rounded-lg cursor-pointer hover:bg-gray-800 transition-all ${
                activeSection === sec.id 
                  ? "text-blue-400 bg-gray-800" 
                  : "text-gray-400"
              }`}
            >
              <span className="text-xl">{sec.icon}</span>
              <span className="font-mono text-lg">
                &lt;{sec.name.toLowerCase()}&gt;
              </span>
            </ScrollLink>
          ))}
        </div>
      </div>
    </>
  );
}