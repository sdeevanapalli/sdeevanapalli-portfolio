import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
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
            <h3 className="text-2xl font-mono font-bold text-accent mb-2">
              {proj.name}
            </h3>

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
              {/* Show GitHub only if link exists */}
              {proj.github && (
                <a
                  href={proj.github}
                  target="_blank"
                  className="hover:text-accent transition-all"
                >
                  <FaGithub size={20} />
                </a>
              )}

              {/* Show Live link only if provided */}
              {proj.live && (
                <a
                  href={proj.live}
                  target="_blank"
                  className="hover:text-accent transition-all"
                >
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
