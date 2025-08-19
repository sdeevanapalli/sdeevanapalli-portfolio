import { motion } from "framer-motion";

const skills = [
  "TypeScript",
  "React",
  "Node.js",
  "Tailwind",
  "Python",
  "Javascript",
  "C/C++",
  "Git & GitHub",
  "Docker"
];

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen px-6 py-20 md:px-20 bg-gray-950 text-white flex flex-col justify-center items-center text-center"
    >
      <h2 className="text-6xl font-mono font-bold text-accent mb-12">
        About Me
      </h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-gray-300 font-mono space-y-6 max-w-3xl text-1.5xl"
      >
        <p>
          I’m <span className="text-accent">Shriniketh Deevanapalli</span>, a
          developer who enjoys building things that are clean, fast, and
          reliable. I’ve worked on everything from small tools to full-stack
          applications, and I’m comfortable moving across the stack — designing
          UIs, writing scalable backend code, and handling deployments.
        </p>

        <p>
          Over time, I’ve built up a solid stack around{" "}
          <span className="text-accent">TypeScript, Javascript, React, and Tailwind</span>{" "}
          on the frontend, and{" "}
          <span className="text-accent">Python, Git/GitHub, Node.js, and Docker</span> for
          backend and workflows. My focus is on making projects that actually
          work end-to-end while keeping the codebase maintainable.
        </p>

        <p>
          Outside of coding, I like to drive, cycle and run.
        </p>

        <div>
          <h3 className="text-2xl font-bold text-accent mb-4">Tech Stack</h3>
          <ul className="space-y-2">
            {skills.map((skill, i) => (
              <li key={i} className="flex justify-center items-center gap-2">
                <span className="text-accent">&gt;</span>
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
}
