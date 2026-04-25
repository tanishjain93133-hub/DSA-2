import React from 'react';
import { motion } from 'motion/react';

export const Masterplan: React.FC = () => {
  return (
    <section id="masterplan" className="py-24 bg-black text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-8xl font-bold mb-6 tracking-tighter">
            Our Creative <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan via-white to-electric-purple">Workspace.</span>
          </h2>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative aspect-video rounded-[3rem] overflow-hidden border border-white/10 bg-zinc-900 shadow-[0_0_100px_rgba(0,0,0,0.8)] group"
        >
          <img 
            src="https://lh3.googleusercontent.com/d/1zaJhlIwUHTCW3KnDb-ElE09mURn3xOWO" 
            alt="Our Creative Workspace" 
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
        </motion.div>
      </div>
    </section>
  );
};
