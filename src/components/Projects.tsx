import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    name: "Internal Audit Officer (IAO)",
    description: "AI-powered audit automation platform using RAG and semantic search over organization documents with Google Drive integration.",
    tech: ["Python", "Streamlit", "OpenAI API", "Google Drive API"],
    github: "https://github.com/sdeevanapalli/audit_gen",  
    live: "",
  },
  {
    name: "Blockchain Healthcare Record System",
    description: "Secure medical record platform using Merkle verification and consent-based access with Flask REST APIs and identity workflows.",
    tech: ["Python", "Flask", "Blockchain"],
    github: "",
    live: "",
  },
  {
    name: "Strava GeoMap",
    description: "Full-stack app visualizing Strava cycling routes on interactive maps with secure OAuth flow and performance-optimized rendering.",
    tech: ["Next.js", "Tailwind", "Leaflet", "Express", "Strava API"],
    github: "https://github.com/sdeevanapalli/strava_geomap",
    live: "https://strava-geomap.vercel.app",
  },
  {
    name: "Garud LMS",
    description: "Learning management system with JWT auth, dashboards, and role-based access using Prisma and PostgreSQL backend.",
    tech: ["Next.js", "Express.js", "PostgreSQL", "Prisma", "Tailwind"],
    github: "https://github.com/sdeevanapalli/garud",
    live: "",
  },
  {
    name: "Campus101",
    description: "Campus guide platform with mess schedules, transport info, emergency contacts, and animated responsive UI.",
    tech: ["React", "TypeScript", "Tailwind", "Framer Motion"],
    github: "https://github.com/sdeevanapalli/campus101",
    live: "https://campus101.vercel.app",
  },
  {
    name: "QuietSpace",
    description: "Web app for finding empty classrooms with real-time availability. Crossed 70k+ views and 3k+ users.",
    tech: ["HTML/CSS", "JavaScript", "Vercel"],
    github: "https://github.com/sdeevanapalli/quietspace",
    live: "https://qsbphc.vercel.app",
  },
  {
    name: "Spotify Standby",
    description: "Minimalist playback controller integrating Spotify API with PWA support and offline-ready UI.",
    tech: ["HTML/CSS", "JavaScript", "Spotify API", "PWA"],
    github: "",
    live: "",
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