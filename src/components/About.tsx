import { motion } from "framer-motion";

const skills = [
  "TypeScript",
  "React",
  "Node.js",
  "Tailwind",
  "Python",
  "Git & GitHub",
  "Docker",
];

export default function About() {
  return (
    <section id="about" className="min-h-screen px-6 py-20 md:pl-20 bg-gray-950 text-white">
      <h2 className="text-4xl font-mono font-bold text-accent mb-8">About Me</h2>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-gray-300 font-mono space-y-2"
      >
        <p>Hi! I’m a full-stack developer passionate about building clean, modern web apps.</p>
        <p>Here’s my tech stack:</p>
        <ul className="ml-4 space-y-1">
          {skills.map((skill, i) => (
            <li key={i}>
              <span className="text-accent">&gt; </span>
              {skill}
              {/* <span className="animate-blink">|</span> */}
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}
