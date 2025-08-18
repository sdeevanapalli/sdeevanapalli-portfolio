import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll"; // smooth scroll
import { FaCode, FaFolderOpen, FaEnvelope, FaLaptopCode } from "react-icons/fa";

const sections = [
  { name: "Home", icon: <FaCode />, id: "home" },
  { name: "Projects", icon: <FaLaptopCode />, id: "projects" },
  { name: "About", icon: <FaFolderOpen />, id: "about" },
  { name: "Contact", icon: <FaEnvelope />, id: "contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

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

  return (
    <div className="fixed top-0 left-0 h-screen w-16 flex flex-col items-center bg-black-300 shadow-lg py-6 space-y-4 z-50">
      {sections.map((sec) => (
        <ScrollLink
          key={sec.id}
          to={sec.id}
          smooth
          offset={-50}
          duration={500}
          className={`relative group flex items-center justify-center w-12 h-12 cursor-pointer rounded hover:bg-gray-800 transition-all ${
            activeSection === sec.id ? "text-accent" : "text-gray-400"
          }`}
        >
          {sec.icon}
          {/* Tooltip */}
          <span className="absolute left-14 px-2 py-1 bg-gray-800 text-white rounded opacity-0 group-hover:opacity-100 transition-all whitespace-nowrap font-mono text-sm">
            &lt;{sec.name.toLowerCase()}&gt;
            <span className="animate-blink">|</span>
          </span>
        </ScrollLink>
      ))}
    </div>
  );
}
