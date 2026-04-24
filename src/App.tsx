import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { Analytics } from "@vercel/analytics/react";

const projects = [
  {
    name: "ComplyFlow",
    description:
      "An AI-powered tax compliance assistant leveraging RAG to navigate complex regulations with intelligent query resolution and proactive monitoring.",
    tech: ["React", "Vertex AI", "Gemini 2.0", "Node.js", "Vector DB"],
    github: "https://github.com/sdeevanapalli/complyflow-public",
    live: "",
  },
  {
    name: "Smart Attendance System",
    description:
      "A full-stack facial recognition platform that automates classroom attendance with a MERN dashboard and a Django ML microservice.",
    tech: ["MongoDB", "Express", "React", "Node.js", "Django", "OpenCV", "Python"],
    github: "",
    live: "",
  },
  {
    name: "Internal Audit Officer (IAO)",
    description:
      "An audit-automation tool on a RAG pipeline that indexes internal documents and generates evidence-backed summaries.",
    tech: ["Python", "Streamlit", "OpenAI API", "Google Drive API"],
    github: "https://github.com/sdeevanapalli/audit_gen",
    live: "",
  },
  {
    name: "Blockchain Healthcare Record System",
    description:
      "A prototype EHR system on blockchain featuring Merkle-based tamper checks and consent-driven data access.",
    tech: ["Python", "Flask", "Blockchain"],
    github: "",
    live: "",
  },
  {
    name: "Strava GeoMap (RideBuddy)",
    description:
      "A full-stack visualization tool that pulls cycling routes from Strava and renders them on interactive vector maps.",
    tech: ["Next.js", "Tailwind", "Leaflet", "Express", "Strava API"],
    github: "https://github.com/sdeevanapalli/strava_geomap",
    live: "https://strava-geomap.vercel.app",
  },
  {
    name: "Garud LMS",
    description:
      "A clean LMS with JWT auth, role-based access, dashboards, and an API layer modeled with Prisma + PostgreSQL.",
    tech: ["Next.js", "Express.js", "PostgreSQL", "Prisma", "Tailwind"],
    github: "https://github.com/sdeevanapalli/garud",
    live: "",
  },
  {
    name: "Campus101",
    description:
      "A campus-utility app that bundles mess schedules, transport timings, emergency contacts, and a polished responsive UI.",
    tech: ["React", "TypeScript", "Tailwind", "Framer Motion"],
    github: "https://github.com/sdeevanapalli/campus101",
    live: "https://campus101.vercel.app",
  },
  {
    name: "QuietSpace",
    description:
      "A lightweight tool for finding empty classrooms in real time, optimized for app-like speed on web.",
    tech: ["HTML/CSS", "JavaScript", "Vercel"],
    github: "https://github.com/sdeevanapalli/quietspace",
    live: "https://qsbphc.vercel.app",
  },
  {
    name: "Spotify Standby",
    description:
      "A minimal playback controller for Spotify with PWA support and an always-on compact interface.",
    tech: ["HTML/CSS", "JavaScript", "Spotify API", "PWA"],
    github: "",
    live: "",
  },
  {
    name: "Locava",
    description:
      "A privacy-first offline PWA for saving and organizing favorite locations with IndexedDB and service workers.",
    tech: ["HTML/CSS", "JavaScript", "PWA", "LocalStorage", "Service Worker"],
    github: "https://github.com/sdeevanapalli/locava",
    live: "https://locava.vercel.app",
  },
  {
    name: "TermSync",
    description:
      "A Spotify now-playing TUI for your terminal. Features album art, seek bar, pulse visualizer, track metadata, and playback history — live synced from Spotify.",
    tech: ["Rust", "Spotify API", "Ratatui", "TUI"],
    github: "https://github.com/sdeevanapalli/termsync",
    live: "",
  },
  {
    name: "Strava Activity Overlays",
    description:
      "Create social-ready overlays from your Strava activities with a canvas editor, activity dashboard, and Strava OAuth sign-in.",
    tech: ["React", "Canvas API", "Strava OAuth", "TypeScript"],
    github: "https://github.com/sdeevanapalli/strava-activity-overlays",
    live: "https://strava-activity-overlays.vercel.app/",
  },
  {
    name: "MiniSQL",
    description:
      "A compact in-memory SQL engine in Rust supporting core queries like SELECT, JOIN, WHERE, GROUP BY, SUM, and COUNT(*).",
    tech: ["Rust", "SQL", "In-Memory", "Query Engine"],
    github: "https://github.com/sdeevanapalli/miniSQL",
    live: "",
  },
  {
    name: "StreamTail",
    description:
      "A lightweight Rust CLI for tailing, streaming, and filtering logs in real time.",
    tech: ["Rust", "CLI", "Log Streaming", "Filters"],
    github: "https://github.com/sdeevanapalli/streamtail",
    live: "",
  },
];

const techStack = [
  "TypeScript",
  "React",
  "Node.js",
  "Tailwind",
  "Python",
  "JavaScript",
  "C/C++",
  "Git & GitHub",
  "Docker",
];

const quickLinks = [
  {
    label: "Email",
    href: "mailto:s.deevanapalli@gmail.com",
    icon: FaEnvelope,
  },
  {
    label: "GitHub",
    href: "https://github.com/sdeevanapalli",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/sdeevanapalli",
    icon: FaLinkedin,
  },
];

function App() {
  return (
    <div className="relative min-h-screen bg-[#050505] text-white">
      <div className="pointer-events-none fixed inset-0 z-0 opacity-40">
        <div className="absolute -top-44 left-1/3 h-80 w-80 rounded-full bg-[#00FFC0]/15 blur-[110px]" />
        <div className="absolute -bottom-40 right-10 h-96 w-96 rounded-full bg-[#00FFC0]/10 blur-[130px]" />
      </div>

      <main className="relative z-10 mx-auto w-full max-w-[1400px] px-4 pb-36 pt-24 md:px-8 md:pt-28">
        <div className="grid auto-rows-[minmax(170px,auto)] grid-cols-1 gap-4 md:grid-cols-12 md:gap-5">
          <section id="home" className="bento-card md:col-span-8 md:row-span-2">
            <p className="mb-3 text-xs uppercase tracking-[0.2em] text-[#00FFC0]">Developer Portfolio</p>
            <h1 className="hero-glow max-w-3xl text-left text-4xl font-extrabold leading-[0.95] tracking-[-0.03em] text-white md:text-7xl">
              Hello, I&apos;m Shriniketh Deevanapalli
            </h1>
            <p className="mt-4 max-w-2xl text-sm text-white/70 md:text-base">
              Full-stack developer building scalable, maintainable and user-focused software.
            </p>
            <p className="mt-4 max-w-2xl text-sm text-white/70 md:text-base">
              Third year student at BITS Pilani, Hyderabad Campus.
            </p>
            <p className="mt-2 text-sm text-[#00FFC0]">Open for internships, freelance, and collaborations.</p>
          </section>

          <section id="contact" className="bento-card md:col-span-4 md:row-span-1">
            <p className="text-xs uppercase tracking-[0.2em] text-white/50">Status</p>
            <p className="mt-2 text-lg font-extrabold tracking-[-0.02em] text-white">Building stuff...</p>
            <p className="mt-2 text-sm text-[#00FFC0]">Currently active on: React + TypeScript + Node.js</p>
            <p className="mt-1 text-sm text-white/60">Response Time: usually within 24 hours • IST (UTC+5:30)</p>
          </section>

          <section id="quick-access" className="bento-card md:col-span-4 md:row-span-1">
            <p className="text-xs uppercase tracking-[0.2em] text-white/50">Quick Access</p>
            <div className="mt-4 space-y-3">
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.label === "Email" ? undefined : "_blank"}
                  rel={link.label === "Email" ? undefined : "noreferrer"}
                  className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/30 px-4 py-3 transition hover:border-[#00FFC0]/45"
                >
                  <span className="flex items-center gap-3 text-sm font-semibold text-white">
                    <link.icon className="text-[#00FFC0]" />
                    {link.label}
                  </span>
                  <span className="text-xs uppercase tracking-[0.16em] text-[#00FFC0]">Open</span>
                </a>
              ))}
            </div>
          </section>

          <section id="bio" className="bento-card md:col-span-6 md:row-span-2">
            <p className="text-xs uppercase tracking-[0.2em] text-white/50">Bio</p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-[-0.02em] text-white">About Me</h2>
            <p className="mt-4 text-sm leading-relaxed text-white/75 md:text-base">
              Full-stack developer passionate about building scalable, maintainable, and user-friendly applications.
              I enjoy solving complex problems with elegant code and modern technologies.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-white/75 md:text-base">
              Beyond coding, I&apos;m into cycling, running, and exploring new tech trends.
            </p>
          </section>

          <section id="stack" className="bento-card md:col-span-6 md:row-span-2">
            <p className="text-xs uppercase tracking-[0.2em] text-white/50">Tech Stack</p>
            <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
              {techStack.map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-black/30 px-3 py-2 text-sm text-white/80">
                  <span className="mr-2 text-[#00FFC0]">●</span>
                  {item}
                </div>
              ))}
            </div>
          </section>

          <section id="projects" className="bento-card md:col-span-12 md:row-span-3">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-xs uppercase tracking-[0.2em] text-white/50">Projects</p>
              <p className="text-xs text-[#00FFC0]">{projects.length} shipped builds</p>
            </div>
            <div className="grid grid-cols-1 gap-3 lg:grid-cols-2">
              {projects.map((proj) => (
                <article key={proj.name} className="rounded-3xl border border-white/10 bg-black/30 p-4">
                  <h3 className="text-lg font-extrabold tracking-[-0.015em] text-white">{proj.name}</h3>
                  <p className="mt-2 text-sm text-white/70">{proj.description}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {proj.tech.slice(0, 4).map((tech) => (
                      <span
                        key={`${proj.name}-${tech}`}
                        className="rounded-full border border-[#00FFC0]/25 bg-[#00FFC0]/10 px-2 py-1 text-xs text-[#00FFC0]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 flex gap-3 text-xs uppercase tracking-[0.12em]">
                    {proj.github && (
                      <a href={proj.github} target="_blank" rel="noreferrer" className="text-white/80 hover:text-[#00FFC0]">
                        Code
                      </a>
                    )}
                    {proj.live && (
                      <a href={proj.live} target="_blank" rel="noreferrer" className="text-white/80 hover:text-[#00FFC0]">
                        Live
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </section>

        </div>
      </main>

      <Analytics />
    </div>
  );
}

export default App;
