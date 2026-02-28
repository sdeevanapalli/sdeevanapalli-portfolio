import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Contact() {
  const email = "s.deevanapalli@gmail.com";

  const contactLinks = [
    { icon: FaEnvelope, href: `mailto:${email}`, label: "Email", color: "text-red-400" },
    { icon: FaGithub, href: "https://github.com/sdeevanapalli", label: "GitHub", color: "text-gray-400" },
    { icon: FaLinkedin, href: "https://linkedin.com/in/shriniketh-deevanapalli", label: "LinkedIn", color: "text-blue-400" },
  ];

  return (
    <section
      id="contact"
      className="relative min-h-screen px-6 py-20 text-white flex flex-col justify-center items-center overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
        />
      </div>
      <div className="relative z-10 w-full">
      {/* VS Code Style Tab */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="absolute top-8 left-8 hidden md:flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-t-lg border-b-2 border-red-500"
      >
        <span className="text-xs text-red-400 font-mono">Contact.tsx</span>
        <span className="text-gray-500">×</span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-5xl md:text-6xl font-mono font-bold text-accent mb-4 text-center"
      >
        <span className="text-gray-500">// </span>Let's Connect
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
        className="text-xl font-mono text-gray-400 text-center mb-16"
      >
        <span className="text-gray-600">// </span>Find me on these platforms
      </motion.p>

      <div className="max-w-6xl w-full mx-auto">
        {/* Social Links - Minimal Plain UI */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-center gap-8 mb-16"
        >
          {contactLinks.map((link, i) => (
            <motion.a
              key={i}
              href={link.href}
              target={link.label !== "Email" ? "_blank" : undefined}
              rel={link.label !== "Email" ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, x: i % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.8, ease: "easeOut" }}
              whileHover={{ y: -2 }}
              className="flex flex-col items-center gap-2 transition-all duration-300 hover:text-accent"
            >
              <link.icon className={`text-3xl ${link.color} transition-colors duration-300`} />
              <span className="text-sm font-mono text-gray-400 hover:text-accent transition-colors">
                {link.label}
              </span>
            </motion.a>
          ))}
        </motion.div>

        {/* Terminal Style Availability */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
          className="mt-12 bg-gray-900 border-2 border-gray-800 rounded-lg p-6 font-mono text-sm hover:border-accent/50 transition-colors"
        >
          <div className="text-accent mb-3 flex items-center gap-2">
            <span className="animate-pulse text-green-400">●</span>
            <span>$ status --availability</span>
          </div>
          <div className="space-y-1 text-gray-400">
            <p>
              <span className="text-green-400">available_for:</span> freelance, internships, collaborations
            </p>
            <p>
              <span className="text-green-400">response_time:</span> usually within 24 hours
            </p>
            <p>
              <span className="text-green-400">timezone:</span> IST (UTC+5:30)
            </p>
          </div>
        </motion.div>
      </div>
      </div>
    </section>
  );
}
