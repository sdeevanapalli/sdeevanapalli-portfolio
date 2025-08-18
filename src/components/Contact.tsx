import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen px-6 py-20 md:pl-20 bg-gray-950 text-white flex flex-col justify-center items-center"
    >
      <h2 className="text-4xl font-mono font-bold text-accent mb-8">Contact Me</h2>
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 text-xl font-mono">
        <a
          href="mailto:your-email@example.com"
          className="flex items-center space-x-2 hover:text-accent transition-colors"
        >
          <FaEnvelope /> <span>&lt;email&gt;</span>
        </a>
        <a
          href="https://github.com/yourusername"
          target="_blank"
          className="flex items-center space-x-2 hover:text-accent transition-colors"
        >
          <FaGithub /> <span>&lt;github&gt;</span>
        </a>
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          className="flex items-center space-x-2 hover:text-accent transition-colors"
        >
          <FaLinkedin /> <span>&lt;linkedin&gt;</span>
        </a>
      </div>

      <p className="mt-12 text-gray-500 text-sm font-mono">
        &copy; {new Date().getFullYear()} Shriniketh. All rights reserved.
      </p>
    </section>
  );
}
