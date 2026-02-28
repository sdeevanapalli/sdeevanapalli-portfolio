import { motion } from "framer-motion";
import { useState } from "react";
import { SiTypescript, SiReact, SiNodedotjs, SiTailwindcss, SiPython, SiJavascript, SiCplusplus, SiGit, SiDocker } from "react-icons/si";

const skills = [
  { name: "TypeScript", import: "import type { Developer } from 'typescript'", icon: SiTypescript, color: "#3178c6" },
  { name: "React", import: "import React from 'react'", icon: SiReact, color: "#61dafb" },
  { name: "Node.js", import: "import express from 'express'", icon: SiNodedotjs, color: "#339933" },
  { name: "Tailwind", import: "import 'tailwindcss/tailwind.css'", icon: SiTailwindcss, color: "#06b6d4" },
  { name: "Python", import: "from django import models", icon: SiPython, color: "#3776ab" },
  { name: "JavaScript", import: "const code = require('javascript')", icon: SiJavascript, color: "#f7df1e" },
  { name: "C/C++", import: "#include <iostream>", icon: SiCplusplus, color: "#00599c" },
  { name: "Git & GitHub", import: "git commit -m 'feat: awesome feature'", icon: SiGit, color: "#f05032" },
  { name: "Docker", import: "FROM node:20-alpine", icon: SiDocker, color: "#2496ed" },
];

export default function About() {
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);

  return (
    <section
      id="about"
      className="relative min-h-screen px-6 py-20 text-white flex flex-col justify-center items-center overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, 50, 0] }}
          transition={{ repeat: Infinity, duration: 20, ease: "easeInOut" }}
          className="absolute -bottom-40 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }}
          className="absolute top-1/3 right-1/4 w-72 h-72 bg-accent/5 rounded-full blur-3xl"
        />
      </div>
      <div className="relative z-10 w-full">
      {/* VS Code Style Tab */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="absolute top-8 left-8 hidden md:flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-t-lg border-b-2 border-purple-500"
      >
        <span className="text-xs text-purple-400 font-mono">About.tsx</span>
        <span className="text-gray-500">×</span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-5xl md:text-6xl font-mono font-bold text-accent mb-16 text-center"
      >
        <span className="text-gray-500">// </span>About Me
      </motion.h2>

      <div className="max-w-6xl w-full mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-gray-300 font-mono space-y-6 text-base md:text-lg mb-16"
        >
          {/* Bio Block */}
          <div className="bg-gray-900 border-l-4 border-accent p-6 rounded-r-lg">
            <p className="text-gray-400 mb-4">
              <span className="text-gray-600">/**</span>
            </p>
            <p className="text-gray-400 mb-2 ml-2">
              <span className="text-gray-600">*</span> Full-stack developer passionate about building
            </p>
            <p className="text-gray-400 mb-2 ml-2">
              <span className="text-gray-600">*</span> scalable, maintainable, and user-friendly applications. I enjoy
            </p>
            <p className="text-gray-400 mb-2 ml-2">
              <span className="text-gray-600">*</span> solving complex problems with elegant code and modern technologies.
            </p>
            <p className="text-gray-400 mb-2 ml-2">
              <span className="text-gray-600">*</span> Beyond coding, I'm into cycling, running, and exploring new tech trends.
            </p>
            <p className="text-gray-400">
              <span className="text-gray-600">*/</span>
            </p>
          </div>
        </motion.div>



        {/* Tech Stack as Import Statements */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-accent mb-8 font-mono">
            <span className="text-gray-500">// </span>Tech Stack
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {skills.map((skill, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ scale: 1.05, translateY: -5 }}
                onHoverStart={() => setHoveredSkill(i)}
                onHoverEnd={() => setHoveredSkill(null)}
                className="group relative bg-gradient-to-br from-gray-900 to-gray-950 border-2 border-gray-800 hover:border-accent rounded-lg p-6 cursor-pointer transition-all duration-300 overflow-hidden"
              >
                {/* Gradient Background on Hover */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredSkill === i ? 0.1 : 0 }}
                  className="absolute inset-0 bg-gradient-to-r from-accent to-blue-500"
                />
                
                <div className="relative z-10 flex flex-col items-center gap-4 text-center">
                  <motion.div
                    animate={{ 
                      color: hoveredSkill === i ? skill.color : undefined,
                      scale: hoveredSkill === i ? 1.2 : 1
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <skill.icon size={48} className={`transition-colors duration-300 ${hoveredSkill === i ? '' : 'text-gray-600'}`} />
                  </motion.div>
                  
                  <div>
                    <p className="font-mono text-sm font-bold text-accent mb-2">
                      {skill.name}
                    </p>
                    <p className="font-mono text-xs text-gray-500 group-hover:text-gray-400 transition-colors">
                      {skill.import}
                    </p>
                  </div>
                </div>
                
                {/* Bottom accent line */}
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: hoveredSkill === i ? "100%" : 0 }}
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-accent to-blue-500"
                />
              </motion.div>
            ))}
          </div>

          {/* File Tree Style Display */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 bg-gray-900 border-2 border-gray-800 rounded-lg p-6 font-mono text-sm hover:border-accent/50 transition-colors"
          >
            <p className="text-gray-400 mb-4 flex items-center gap-2">
              <span className="text-accent">$</span> ls -la
            </p>
            <div className="space-y-2 text-gray-400">
              <p className="text-green-400">📁 skills/</p>
              {skills.map((skill, i) => (
                <motion.p 
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.02 }}
                  className="ml-6 hover:text-accent transition-colors cursor-pointer"
                >
                  📄 {skill.name.toLowerCase().replace(/\s+/g, '-')}.ts
                </motion.p>
              ))}
              <p className="mt-4 text-accent/70">// Ready to deploy 🚀</p>
            </div>
          </motion.div>
        </div>
      </div>
      </div>   </section>
  );
}
