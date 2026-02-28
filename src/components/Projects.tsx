import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaCode } from "react-icons/fa";
import { useState } from "react";

const projects = [
  {
    name: "ComplyFlow",
    description:
      "An AI-powered tax compliance assistant leveraging RAG to navigate complex regulations. It features intelligent query resolution, automated document analysis for extracting compliance requirements, and proactive monitoring of regulatory changes using Google Vertex AI.",
    tech: ["React", "Vertex AI", "Gemini 2.0", "Node.js", "Vector DB"],
    github: "https://github.com/sdeevanapalli/complyflow-public",
    live: "",
  },
  {
    name: "Smart Attendance System",
    description:
      "A full-stack facial recognition platform that automates classroom attendance. It features a MERN-based management dashboard integrated with a Django machine learning microservice using LBPH (Local Binary Patterns Histograms) and Haar Cascades for real-time face detection and identification.",
    tech: ["MongoDB", "Express", "React", "Node.js", "Django", "OpenCV", "Python"],
    github: "",
    live: "",
  },
  {
    name: "Internal Audit Officer (IAO)",
    description:
      "A practical audit-automation tool built on top of a RAG pipeline. It indexes internal org documents (PDFs/Sheets/Drive files) and lets auditors run semantic queries, generate evidence-backed summaries, and speed up compliance workflows. Includes Google Drive ingestion + a Streamlit UI.",
    tech: ["Python", "Streamlit", "OpenAI API", "Google Drive API"],
    github: "https://github.com/sdeevanapalli/audit_gen",
    live: "",
  },
  {
    name: "Blockchain Healthcare Record System",
    description:
      "A prototype EHR system on blockchain featuring Merkle-based tamper checks, consent-driven data access, and a lightweight identity/auth workflow. Exposes REST APIs through Flask for record creation, validation, and retrieval.",
    tech: ["Python", "Flask", "Blockchain"],
    github: "",
    live: "",
  },
  {
    name: "Strava GeoMap (RideBuddy)",
    description:
      "A full-stack visualization tool that pulls cycling routes from the Strava API and renders them on interactive vector maps. Includes OAuth integration, ride analytics, and optimized map-layer rendering for smooth performance.",
    tech: ["Next.js", "Tailwind", "Leaflet", "Express", "Strava API"],
    github: "https://github.com/sdeevanapalli/strava_geomap",
    live: "https://strava-geomap.vercel.app",
  },
  {
    name: "Garud LMS",
    description:
      "A clean LMS with JWT-based authentication, RBA (admin/instructor/student), dashboards, and an API layer running on Express. Data is modeled using Prisma and stored in PostgreSQL with migrations + schema versioning.",
    tech: ["Next.js", "Express.js", "PostgreSQL", "Prisma", "Tailwind"],
    github: "https://github.com/sdeevanapalli/garud",
    live: "",
  },
  {
    name: "Campus101",
    description:
      "A campus-utility app that bundles mess schedules, transport timings, emergency contacts, and a polished UI with micro-interactions. Fully responsive, animated with Framer Motion, and built with a clean TypeScript/React stack.",
    tech: ["React", "TypeScript", "Tailwind", "Framer Motion"],
    github: "https://github.com/sdeevanapalli/campus101",
    live: "https://campus101.vercel.app",
  },
  {
    name: "QuietSpace",
    description:
      "A simple tool for finding empty classrooms in real time. Lightweight, super fast, and ended up reaching 70k+ impressions and 3k+ users. Frontend-only but optimized well enough to feel app-like on Vercel.",
    tech: ["HTML/CSS", "JavaScript", "Vercel"],
    github: "https://github.com/sdeevanapalli/quietspace",
    live: "https://qsbphc.vercel.app",
  },
  {
    name: "Spotify Standby",
    description:
      "A minimal playback controller for Spotify with PWA support and a clean, distraction-free interface. Useful as a compact ‘always-on’ controller separate from the main Spotify app.",
    tech: ["HTML/CSS", "JavaScript", "Spotify API", "PWA"],
    github: "",
    live: "",
  },
  {
    name: "Locava",
    description:
      "A lightweight PWA for saving and organizing favourite locations — fully offline, uses IndexedDB under the hood, and ships as an installable web app. Built with just vanilla HTML/CSS/JS + service workers for a privacy-first experience.",
    tech: ["HTML/CSS", "JavaScript", "PWA", "LocalStorage", "Service Worker"],
    github: "https://github.com/sdeevanapalli/locava",
    live: "https://locava.vercel.app",
  },
];

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section
      id="projects"
      className="relative min-h-screen px-6 py-20 text-white flex flex-col justify-center items-center overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: [0, 30, 0], rotate: 360 }}
          transition={{ repeat: Infinity, duration: 30, ease: "easeInOut" }}
          className="absolute -top-56 -right-56 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ y: [0, -30, 0], rotate: -360 }}
          transition={{ repeat: Infinity, duration: 35, ease: "easeInOut" }}
          className="absolute -bottom-56 -left-56 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 20, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 w-80 h-80 -translate-x-1/2 -translate-y-1/2 bg-purple-500/5 rounded-full blur-3xl"
        />
      </div>
      <div className="relative z-10 w-full">
      {/* VS Code Style Tab */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="absolute top-8 left-8 hidden md:flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-t-lg border-b-2 border-blue-500"
      >
        <span className="text-xs text-blue-400 font-mono">Projects.tsx</span>
        <span className="text-gray-500">×</span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-5xl md:text-6xl font-mono font-bold text-accent mb-16 text-center"
      >
        <span className="text-gray-500">// </span>Projects
      </motion.h2>

      <div className="max-w-6xl w-full mx-auto">
        {/* Project Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {projects.map((proj, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 2) * 0.2, duration: 0.8, ease: "easeOut" }}
              whileHover={{ translateY: -8 }}
              onHoverStart={() => setHoveredProject(i)}
              onHoverEnd={() => setHoveredProject(null)}
              className="group relative bg-gradient-to-br from-gray-900 to-gray-950 border-2 border-gray-800 hover:border-accent rounded-lg p-6 shadow-lg hover:shadow-accent/20 transition-all duration-300 overflow-hidden"
            >
              {/* Background glow on hover */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredProject === i ? 0.1 : 0 }}
                className="absolute inset-0 bg-gradient-to-r from-accent to-blue-500 blur-2xl"
              />

              <div className="relative z-10">
                {/* Header with icon */}
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl md:text-2xl font-mono font-bold text-accent flex items-center gap-2">
                    <FaCode className="text-sm" />
                    {proj.name}
                  </h3>
                  {proj.github && (
                    <motion.a
                      href={proj.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className="text-gray-400 hover:text-accent transition-colors"
                    >
                      {/* <FaGithub size={20} /> */}
                    </motion.a>
                  )}
                </div>

                {/* Description */}
                <p className="text-gray-300 text-sm md:text-base mb-4 leading-relaxed">
                  {proj.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {proj.tech.map((tech, j) => (
                    <motion.span
                      key={j}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: j * 0.05 }}
                      className="text-xs px-3 py-1 border-2 border-accent/50 hover:border-accent rounded-full font-mono text-accent/80 hover:text-accent transition-all duration-300 bg-accent/5 hover:bg-accent/10"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4 pt-4 border-t border-gray-700">
                  {proj.live && (
                    <motion.a
                      href={proj.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors text-sm"
                    >
                      <FaExternalLinkAlt size={14} />
                      Demo
                    </motion.a>
                  )}
                  {proj.github && (
                    <motion.a
                      href={proj.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 text-gray-400 hover:text-accent transition-colors text-sm"
                    >
                      <FaGithub size={14} />
                      Code
                    </motion.a>
                  )}
                </div>
              </div>

              {/* Bottom accent line */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: hoveredProject === i ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent to-blue-500 origin-left"
              />
            </motion.div>
          ))}
        </div>

        {/* Terminal Style Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gray-900 border-2 border-gray-800 rounded-lg p-6 font-mono text-sm hover:border-accent/50 transition-colors"
        >
          <div className="text-accent mb-4">$ portfolio --stats</div>
          <div className="space-y-2 text-gray-400">
            <p>
              <span className="text-green-400">public_project_count:</span> {projects.length}
            </p>
            <p>
              <span className="text-green-400">live_demos:</span> {projects.filter((p) => p.live).length}
            </p>
            <p>
              <span className="text-green-400">open_source:</span> {projects.filter((p) => p.github).length}
            </p>
          </div>
        </motion.div>
      </div>
      </div>
    </section>
  );
}
