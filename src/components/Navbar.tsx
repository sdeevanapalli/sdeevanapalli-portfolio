import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll"; // smooth scroll
import { FaCode, FaFolderOpen, FaEnvelope, FaLaptopCode, FaBars, FaTimes } from "react-icons/fa";

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
      <div className="hidden lg:flex fixed top-0 left-0 h-screen w-16 flex-col items-center bg-gray-900 shadow-lg py-6 space-y-4 z-50">
        {sections.map((sec) => (
          <ScrollLink
            key={sec.id}
            to={sec.id}
            smooth
            offset={-50}
            duration={500}
            className={`relative group flex items-center justify-center w-12 h-12 cursor-pointer rounded hover:bg-gray-800 transition-all ${
              activeSection === sec.id ? "text-blue-400" : "text-gray-400"
            }`}
          >
            {sec.icon}
            {/* Tooltip */}
            <span className="absolute left-14 px-2 py-1 bg-gray-800 text-white rounded opacity-0 group-hover:opacity-100 transition-all whitespace-nowrap font-mono text-sm">
              &lt;{sec.name.toLowerCase()}&gt;
              <span className="animate-pulse">|</span>
            </span>
          </ScrollLink>
        ))}
      </div>

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