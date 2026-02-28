import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-black">
        {/* Multiple Glowing Orbs */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.15),transparent_50%)] animate-pulse-slow"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.12),transparent_50%)] animate-pulse-slower"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(139,92,246,0.10),transparent_50%)] animate-pulse-slowest"></div>
        
        {/* Additional Glowing Orbs for Depth */}
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-accent/20 to-transparent blur-3xl"
          style={{ top: "10%", right: "10%" }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        ></motion.div>
        
        <motion.div
          className="absolute w-80 h-80 rounded-full bg-gradient-to-r from-blue-500/20 to-transparent blur-3xl"
          style={{ bottom: "20%", left: "5%" }}
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        ></motion.div>

        <motion.div
          className="absolute w-72 h-72 rounded-full bg-gradient-to-r from-purple-500/20 to-transparent blur-3xl"
          style={{ top: "45%", left: "10%" }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.25, 0.55, 0.25],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        ></motion.div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>

      {/* Enhanced Floating Code Snippets with Multiple Layers */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="code-float code-float-1">{'<div>'}</div>
        <div className="code-float code-float-2">{'const'}</div>
        <div className="code-float code-float-3">{'() =>'}</div>
        <div className="code-float code-float-4">{'{ }'}</div>
        <div className="code-float code-float-5">{'function'}</div>
        <div className="code-float code-float-6">{'import'}</div>
        <div className="code-float code-float-7">{'</>'}</div>
        <div className="code-float code-float-8">{'return'}</div>

        {/* Additional Floating Elements */}
        <motion.div
          className="code-float-extra text-accent/40"
          style={{ top: "15%", left: "75%" }}
          animate={{
            y: [0, -50, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, delay: 1 }}
        >
          {'async'}
        </motion.div>

        <motion.div
          className="code-float-extra text-accent/30"
          style={{ bottom: "25%", right: "10%" }}
          animate={{
            y: [0, 40, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
        >
          {'typeof'}
        </motion.div>

        <motion.div
          className="code-float-extra text-accent/35"
          style={{ top: "60%", right: "20%" }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.25, 0.55, 0.25],
          }}
          transition={{ duration: 9, repeat: Infinity, delay: 3 }}
        >
          {'class'}
        </motion.div>
      </div>

      {/* Scanline Effect */}
      <div className="scanline"></div>

      {/* Particle System */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-accent rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: Math.random() * 0.7,
            }}
            animate={{
              y: [null, Math.random() * window.innerHeight],
              x: [null, Math.random() * window.innerWidth],
              opacity: [Math.random() * 0.7, 0],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_60%,rgba(0,0,0,0.8)_100%)]"></div>

      {/* Noise Texture */}
      <div className="absolute inset-0 opacity-[0.02] mix-blend-multiply">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>
    </div>
  );
}
