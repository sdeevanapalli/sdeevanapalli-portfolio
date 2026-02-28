import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

export default function AnimatedBackground() {
  const [isLowPowerMode, setIsLowPowerMode] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mobileQuery = window.matchMedia("(max-width: 768px)");
    const touchQuery = window.matchMedia("(hover: none) and (pointer: coarse)");
    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const updateMode = () => {
      setIsLowPowerMode(
        mobileQuery.matches || touchQuery.matches || reducedMotionQuery.matches
      );
    };

    updateMode();

    const addChangeListener = (query: MediaQueryList) => {
      if (query.addEventListener) {
        query.addEventListener("change", updateMode);
        return () => query.removeEventListener("change", updateMode);
      }

      query.addListener(updateMode);
      return () => query.removeListener(updateMode);
    };

    const cleanupMobile = addChangeListener(mobileQuery);
    const cleanupTouch = addChangeListener(touchQuery);
    const cleanupReducedMotion = addChangeListener(reducedMotionQuery);

    return () => {
      cleanupMobile();
      cleanupTouch();
      cleanupReducedMotion();
    };
  }, []);

  const particles = useMemo(() => {
    const count = isLowPowerMode ? 0 : 10;
    return Array.from({ length: count }, () => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      xShift: `${(Math.random() - 0.5) * 18}%`,
      yShift: `${(Math.random() - 0.5) * 18}%`,
      duration: 8 + Math.random() * 4,
      delay: Math.random() * 2,
      opacityStart: 0.2 + Math.random() * 0.3,
    }));
  }, [isLowPowerMode]);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-black">
        {/* Multiple Glowing Orbs */}
        <div
          className={`absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.15),transparent_50%)] ${
            isLowPowerMode ? "" : "animate-pulse-slow"
          }`}
        ></div>
        <div
          className={`absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.12),transparent_50%)] ${
            isLowPowerMode ? "" : "animate-pulse-slower"
          }`}
        ></div>
        <div
          className={`absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(139,92,246,0.10),transparent_50%)] ${
            isLowPowerMode ? "" : "animate-pulse-slowest"
          }`}
        ></div>
        
        {/* Additional Glowing Orbs for Depth */}
        {!isLowPowerMode && (
          <>
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
          </>
        )}
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>

      {/* Enhanced Floating Code Snippets with Multiple Layers */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="code-float code-float-1">{'<div>'}</div>
        <div className="code-float code-float-2">{'const'}</div>
        <div className="code-float code-float-3">{'() =>'}</div>
        <div className="code-float code-float-4">{'{ }'}</div>
        {!isLowPowerMode && <div className="code-float code-float-5">{'function'}</div>}
        {!isLowPowerMode && <div className="code-float code-float-6">{'import'}</div>}
        {!isLowPowerMode && <div className="code-float code-float-7">{'</>'}</div>}
        {!isLowPowerMode && <div className="code-float code-float-8">{'return'}</div>}

        {/* Additional Floating Elements */}
        {!isLowPowerMode && (
          <>
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
          </>
        )}
      </div>

      {/* Scanline Effect */}
      {!isLowPowerMode && <div className="scanline"></div>}

      {/* Particle System */}
      {!isLowPowerMode && (
        <div className="absolute inset-0 overflow-hidden">
          {particles.map((particle, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-accent rounded-full"
              style={{ top: particle.top, left: particle.left }}
              initial={{ opacity: particle.opacityStart }}
              animate={{
                x: ["0%", particle.xShift, "0%"],
                y: ["0%", particle.yShift, "0%"],
                opacity: [particle.opacityStart, 0],
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: particle.delay,
              }}
            />
          ))}
        </div>
      )}

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_60%,rgba(0,0,0,0.8)_100%)]"></div>

      {/* Noise Texture */}
      <div className={`absolute inset-0 mix-blend-multiply ${isLowPowerMode ? "opacity-[0.01]" : "opacity-[0.02]"}`}>
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
