import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    name: "CarAdvisor AI",
    description: "AI-powered car recommendation system using ML and collaborative filtering.",
    tech: ["React", "TypeScript", "Tailwind", "Python", "ML"],
    github: "https://github.com/shriniketh/car-advisor",
    live: "#",
  },
  {
    name: "Portfolio Website",
    description: "Dark-themed developer portfolio built with React, TS, and Tailwind.",
    tech: ["React", "TypeScript", "Tailwind", "Vite"],
    github: "https://github.com/shriniketh/portfolio",
    live: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen px-6 py-20 pl-20 bg-gray-950 text-white">
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
              <a href={proj.live} target="_blank" className="hover:text-accent transition-all">
                <FaExternalLinkAlt size={20} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
