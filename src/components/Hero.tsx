import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center px-4 md:pl-20 bg-gray-950"
    >
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="text-5xl md:text-7xl font-mono font-bold text-accent"
      >
        <Typewriter
          words={["Hi, I'm Shriniketh Deevanapalli"]}
          loop={1} // 0 = infinite
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1500}
        />
      </motion.h1>

      <motion.p
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.7 }}
        className="mt-4 max-w-xl text-gray-300 font-mono"
      >
        Engineering Student | IND
      </motion.p>

      <div className="mt-8 flex space-x-4">
        <ScrollLink
          to="projects"
          smooth
          offset={-50}
          duration={500}
          className="px-4 py-2 border border-accent text-accent font-mono rounded hover:bg-accent hover:text-gray-900 transition-all cursor-pointer"
        >
          View Projects
        </ScrollLink>

        <ScrollLink
          to="contact"
          smooth
          offset={-50}
          duration={500}
          className="px-4 py-2 border border-accent text-accent font-mono rounded hover:bg-accent hover:text-gray-900 transition-all cursor-pointer"
        >
          Contact Me
        </ScrollLink>
      </div>
    </section>
  );
}
