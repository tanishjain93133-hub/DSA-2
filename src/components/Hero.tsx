import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { WireframeAssembly } from './WireframeAssembly';
import { cn } from '@/src/lib/utils';

export const Hero: React.FC = () => {
  const tagline = "Designing architecture & interiors with timeless sophistication, and meticulous care | Pan India.";
  const words = tagline.split(" ");

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-obsidian">
      <WireframeAssembly />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="relative mb-12"
          >
            {/* Main Brand Title with sophisticated entrance */}
            <div className="overflow-visible px-10">
              <motion.h1 
                initial={{ y: "50%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                className="text-[140px] md:text-[280px] font-sans font-thin tracking-[-0.02em] text-white leading-none drop-shadow-2xl"
              >
                DSA
              </motion.h1>
            </div>
            
            {/* Sub-headline from image */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 1 }}
              className="mt-4"
            >
              <span className="text-lg md:text-3xl tracking-[0.4em] text-white font-light">
                Dhwanish Shah Architects
              </span>
            </motion.div>
          </motion.div>

          {/* Staggered Tagline Animation */}
          <div className="flex flex-wrap justify-center gap-x-2 gap-y-1 max-w-4xl mb-14">
            {words.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  delay: 0.8 + (i * 0.05), 
                  duration: 0.5,
                  ease: "easeOut"
                }}
                className={cn(
                  "text-lg md:text-2xl font-light tracking-wide",
                  word.toLowerCase() === "timeless" || word.toLowerCase() === "sophistication," ? "text-neon-cyan italic font-medium" : "text-white/70"
                )}
              >
                {word}
              </motion.span>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-8"
          >
            <Link to="/portfolio" className="group relative px-12 py-5 rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-lg">
              <div className="absolute inset-0 bg-white transition-colors group-hover:bg-neon-cyan" />
              <span className="relative z-10 text-obsidian font-bold tracking-[0.2em] text-xs">
                Explore Projects
              </span>
            </Link>
            <Link to="/portfolio" className="px-12 py-5 rounded-full border border-white/10 text-white font-bold tracking-[0.2em] text-xs hover:bg-white/5 transition-all backdrop-blur-md hover:border-white/30">
              View Portfolio
            </Link>
          </motion.div>
        </div>

        {/* High-End Architectural Background (Visible & Integrated) */}
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 0.6, scale: 1 }}
          transition={{ duration: 3, ease: "easeOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-full h-full pointer-events-none"
        >
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
            alt="Modern Architectural Render" 
            className="w-full h-full object-cover grayscale opacity-100"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <span className="text-[9px] tracking-[0.4em] text-white/40 rotate-90 origin-left translate-x-1">Scroll</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-white/40 to-transparent" />
      </motion.div>
    </section>
  );
};
