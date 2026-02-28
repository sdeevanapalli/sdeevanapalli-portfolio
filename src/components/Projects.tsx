import { FaGithub, FaExternalLinkAlt, FaCode } from "react-icons/fa";

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
  return (
    <section
      id="projects"
      className="relative min-h-screen px-6 py-20 text-white flex flex-col justify-center items-center overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-56 -right-56 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-56 -left-56 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 w-80 h-80 -translate-x-1/2 -translate-y-1/2 bg-purple-500/5 rounded-full blur-3xl" />
      </div>
      <div className="relative z-10 w-full">
      {/* VS Code Style Tab */}
      <div className="absolute top-8 left-8 hidden md:flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-t-lg border-b-2 border-blue-500">
        <span className="text-xs text-blue-400 font-mono">Projects.tsx</span>
        <span className="text-gray-500">×</span>
      </div>

      <h2 className="text-5xl md:text-6xl font-mono font-bold text-accent mb-16 text-center">
        <span className="text-gray-500">// </span>Projects
      </h2>

      <div className="max-w-6xl w-full mx-auto">
        {/* Project Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {projects.map((proj, i) => (
            <div
              key={i}
              className="group relative bg-gradient-to-br from-gray-900 to-gray-950 border-2 border-gray-800 hover:border-accent rounded-lg p-6 shadow-lg hover:shadow-accent/20 overflow-hidden"
            >
              {/* Background glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-accent to-blue-500 blur-2xl opacity-0 group-hover:opacity-10" />

              <div className="relative z-10">
                {/* Header with icon */}
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl md:text-2xl font-mono font-bold text-accent flex items-center gap-2">
                    <FaCode className="text-sm" />
                    {proj.name}
                  </h3>
                  {proj.github && (
                    <a
                      href={proj.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-accent"
                    >
                      {/* <FaGithub size={20} /> */}
                    </a>
                  )}
                </div>

                {/* Description */}
                <p className="text-gray-300 text-sm md:text-base mb-4 leading-relaxed">
                  {proj.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {proj.tech.map((tech, j) => (
                    <span
                      key={j}
                      className="text-xs px-3 py-1 border-2 border-accent/50 hover:border-accent rounded-full font-mono text-accent/80 hover:text-accent bg-accent/5 hover:bg-accent/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4 pt-4 border-t border-gray-700">
                  {proj.live && (
                    <a
                      href={proj.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm"
                    >
                      <FaExternalLinkAlt size={14} />
                      Demo
                    </a>
                  )}
                  {proj.github && (
                    <a
                      href={proj.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-accent text-sm"
                    >
                      <FaGithub size={14} />
                      Code
                    </a>
                  )}
                </div>
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent to-blue-500 origin-left opacity-0 group-hover:opacity-100" />
            </div>
          ))}
        </div>

        {/* Terminal Style Stats */}
        <div className="bg-gray-900 border-2 border-gray-800 rounded-lg p-6 font-mono text-sm hover:border-accent/50">
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
        </div>
      </div>
      </div>
    </section>
  );
}
