import { useState, useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import {FaTerminal } from "react-icons/fa";

export default function Hero() {
  const [command, setCommand] = useState("");
  const [output, setOutput] = useState<string[]>([]);
  const [showPrompt, setShowPrompt] = useState(false);
  
  const commands: Record<string, string> = {
    help: "Available commands: about, skills, projects, contact, clear, sudo hire-me",
    about: "Full-stack developer | Building scalable solutions | Passionate about clean code",
    skills: "TypeScript • React • Node.js • Python • Docker • Git",
    projects: "Check out my projects below! ⬇️",
    contact: "Let's connect! Use the contact section or find me on GitHub/LinkedIn",
    clear: "CLEAR",
    "sudo hire-me": "Access granted! 🚀 Let's build something amazing together!",
  };

  useEffect(() => {
    const timer = setTimeout(() => setShowPrompt(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleCommand = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && command.trim()) {
      const cmd = command.toLowerCase().trim();
      
      if (cmd === "clear") {
        setOutput([]);
      } else {
        const response = commands[cmd] || `Command not found: ${command}. Type 'help' for available commands.`;
        setOutput([...output, `> ${command}`, response]);
      }
      
      setCommand("");
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 pt-20"
    >
        {/* Floating Code Block Widget - Right Side */}
        <motion.div
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 2.8, duration: 0.8, ease: "easeOut" }}
          className="absolute right-8 top-32 hidden xl:block w-80 bg-gray-900 border-2 border-accent/30 rounded-lg p-4 shadow-2xl overflow-hidden"
        >
          <div className="flex items-center gap-2 mb-3 pb-3 border-b border-accent/30">
            <div className="w-2 h-2 rounded-full bg-red-500"></div>
            <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
            <span className="text-xs text-accent font-mono ml-auto">today.snapshot</span>
          </div>
          <div className="font-mono text-xs text-gray-400 space-y-2">
            <div>
              <span className="text-blue-400">const</span> <span className="text-yellow-300">status</span> = {'{'}
            </div>
            <div className="ml-4">
              <span className="text-purple-400">building:</span> <span className="text-green-400">'amazing things'</span>,
            </div>
            <div className="ml-4">
              <span className="text-purple-400">learning:</span> <span className="text-green-400">'every day'</span>,
            </div>
            <div className="ml-4">
              <span className="text-purple-400">coffee:</span> <span className="text-green-400">true</span>,
            </div>
            <div>{'}'};</div>
          </div>
        </motion.div>

      {/* Glitch effect wrapper */}
      <div className="relative z-10">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 2.6, duration: 0.8, ease: "easeOut" }}
          className="relative"
        >
          {/* Line numbers decoration */}
          <motion.div
            initial={{ x: -80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 2.7, duration: 0.8, ease: "easeOut" }}
            className="absolute -left-16 top-0 hidden md:block text-gray-600 font-mono text-sm space-y-4"
          >
            <div>01</div>
            <div>02</div>
            <div>03</div>
            <div className="text-accent">04</div>
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-mono font-bold text-white mb-2 glitch-text" data-text="const developer =">
            <span className="text-accent">&lt;</span>const <span className="text-blue-400">developer</span> = <span className="text-accent">;</span>
          </h1>
          
          <div className="text-4xl md:text-6xl font-mono font-bold text-accent mb-4">
            <Typewriter
              words={['"Shriniketh Deevanapalli"']}
              loop={1}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 2.7, duration: 0.8, ease: "easeOut" }}
          className="mt-8 max-w-2xl"
        >
          <p className="text-gray-300 font-mono text-lg md:text-xl mb-2">
            <span className="text-purple-400">function</span> <span className="text-yellow-400">buildAmazingThings</span>() {'{'}
          </p>
          <p className="text-gray-400 font-mono text-base md:text-lg ml-8">
            <span className="text-pink-400">return</span> <span className="text-green-400">"Full-stack solutions with clean code"</span>;
          </p>
          <p className="text-gray-300 font-mono text-lg md:text-xl">{'}'}</p>
        </motion.div>

        {/* Interactive Terminal Section */}
        {showPrompt && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 2.9, duration: 0.8, ease: "easeOut" }}
            className="mt-12 w-full max-w-2xl mx-auto"
          >
            <div className="bg-gray-900 border-2 border-gray-700 rounded-lg p-6 shadow-2xl">
              <div className="flex items-center gap-2 mb-4 pb-2 border-b border-gray-700">
                <FaTerminal className="text-accent text-sm" />
                <span className="text-gray-400 font-mono text-sm">interactive-terminal</span>
              </div>
              
              {/* Terminal Output */}
              <div className="font-mono text-sm text-left mb-4 max-h-32 overflow-y-auto">
                {output.length === 0 && (
                  <p className="text-gray-500 italic">Type 'help' to see available commands...</p>
                )}
                {output.map((line, i) => (
                  <p
                    key={i}
                    className={line.startsWith(">") ? "text-accent" : "text-gray-300 mb-2"}
                  >
                    {line}
                  </p>
                ))}
              </div>

              {/* Command Input */}
              <div className="flex items-center gap-2">
                <span className="text-accent">$</span>
                <input
                  type="text"
                  value={command}
                  onChange={(e) => setCommand(e.target.value)}
                  onKeyDown={handleCommand}
                  placeholder="Type a command..."
                  className="flex-1 bg-transparent border-none outline-none text-white font-mono"
                  autoComplete="off"
                />
                <span className="text-accent">|</span>
              </div>
            </div>
          </motion.div>
        )}

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.7 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >

          <div className="flex flex-col items-center gap-2 text-gray-500 font-mono text-xs">
          </div>
        </motion.div>
      </div>
    </section>
  );
}
