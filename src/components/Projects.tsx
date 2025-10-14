import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    name: "QuietSpace",
    description: "Web app helping students find empty classrooms during free periods with real-time availability and room sorting by blocks. Achieved 60k+ views within 1 year of launch.",
    tech: ["HTML/CSS", "JavaScript", "Vercel"],
    github: "https://github.com/sdeevanapalli/quietspace",
    live: "https://qsbphc.vercel.app",
  },
  {
    name: "Campus101",
    description: "Modern campus guide for BITS Pilani with 3D cards, interactive maps, and comprehensive information for all three campuses.",
    tech: ["React", "TypeScript", "Tailwind", "Framer Motion", "React Leaflet"],
    github: "https://github.com/sdeevanapalli/campus101",
    live: "https://campus101-sable.vercel.app",
  },
  {
    name: "CarAdvisor AI",
    description: "Advanced ML-driven car recommendation engine leveraging **ensemble models, cosine similarity, k-means clustering,** and **collaborative filtering** for highly personalized suggestions.",
    tech: ["React", "TypeScript", "Tailwind", "ML", "Vite"],
    github: "https://github.com/sdeevanapalli/advicemegang",
  },
  {
    name: "AuditGen AI",
    description: "RAG-powered audit automation platform using OpenAI GPT models for generating compliance reports and audit documentation.",
    tech: ["Python", "Streamlit", "OpenAI API", "Google Drive API", "RAG"],
    github: "https://github.com/sdeevanapalli/audit_gen",
  },
  {
    name: "Locava",
    description: "Lightweight Progressive Web App (PWA) for saving, organizing, and sharing favorite locations, built with pure HTML, CSS, and JavaScript — featuring **offline support, local data storage (IndexedDB), and installable mobile/desktop functionality for a seamless, privacy-focused mapping experience.",
    tech: ["HTML/CSS", "JavaScript", "PWA", "LocalStorage", "Service Worker"],
    github: "https://github.com/sdeevanapalli/locava",
    live: "https://locava.vercel.app",
  },
];


export default function Projects() {
  return (
    <section 
      id="projects" 
      className="min-h-screen px-6 py-20 bg-gray-950 text-white lg:pl-24"
    >
      <h2 className="text-4xl font-mono font-bold text-accent mb-12 text-center">
        Projects
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((proj, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-accent/50 transition-shadow"
          >
            <h3 className="text-2xl font-mono font-bold text-accent mb-2">{proj.name}</h3>
            <p className="text-gray-300 mb-4">{proj.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {proj.tech.map((tech, j) => (
                <span
                  key={j}
                  className="text-sm px-2 py-1 border border-accent rounded font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex space-x-4">
              <a href={proj.github} target="_blank" className="hover:text-accent transition-all">
                <FaGithub size={20} />
              </a>
              {proj.live && (
                <a href={proj.live} target="_blank" className="hover:text-accent transition-all">
                  <FaExternalLinkAlt size={20} />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}