import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface LoadingScreenProps {
  onLoadingComplete?: () => void;
}

export default function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      onLoadingComplete?.();
    }, 1200);
    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  if (!loading) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-0 z-50 bg-gradient-to-br from-gray-950 via-gray-900 to-black flex items-center justify-center overflow-hidden"
    >
      {/* Animated Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_60%,rgba(0,0,0,0.8)_100%)]"></div>

      <div className="relative z-10 flex flex-col items-center gap-8">
        {/* Loading Terminal Box */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-96 bg-gray-900 border-2 border-accent rounded-lg p-6 shadow-2xl font-mono"
        >
          {/* Terminal Header */}
          <div className="flex items-center gap-2 mb-4 pb-4 border-b border-accent/30">
            <div className="w-2 h-2 rounded-full bg-red-500"></div>
            <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
            <span className="text-xs text-accent ml-auto">loading.js</span>
          </div>

          {/* Loading Text */}
          <div className="space-y-3 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-blue-400">$</span>
              <span className="text-white">npm run portfolio</span>
            </div>

            <motion.div
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ repeat: Infinity, duration: 2.2 }}
              className="text-accent flex items-center gap-2"
            >
              <span>▌</span>
              <span>Initializing components...</span>
            </motion.div>

            {/* Progress Bars */}
            <div className="mt-4 space-y-2">
              <div className="text-xs text-gray-400">Loading assets</div>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 2 }}
                className="h-1 bg-gradient-to-r from-accent via-blue-400 to-accent rounded-full"
              ></motion.div>
            </div>

            <div className="mt-2 space-y-2">
              <div className="text-xs text-gray-400">Rendering UI</div>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 2, delay: 0.3 }}
                className="h-1 bg-gradient-to-r from-blue-400 via-accent to-purple-400 rounded-full"
              ></motion.div>
            </div>

            <div className="mt-4 text-xs text-gray-500 flex items-center gap-2">
              <span>⟳</span>
              Welcome to the portfolio...
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
