import React from 'react';
import { motion } from 'motion/react';
import DecryptedText from './DecryptedText';

export const Workspace: React.FC = () => {
  return (
    <section id="workspace" className="pt-0 pb-8 bg-[#050505] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        {/* Headline Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-16 md:mb-24 text-center"
        >
          <h2 className="text-6xl md:text-8xl lg:text-[10rem] font-extralight tracking-tight text-white leading-none">
            <DecryptedText 
              text="Location" 
              animateOn="view" 
              revealDirection="center"
              className="text-white font-extralight"
            />
          </h2>
        </motion.div>

        {/* Cinematic Location Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full aspect-video rounded-[3rem] overflow-hidden border border-white/10 group bg-neutral-900 shadow-2xl"
        >
          {/* India Map Geographic Background - User Provided Asset */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://lh3.googleusercontent.com/d/1ft_-zjeWMB82uilC6_wYiod1j6qJ9zIU" 
              alt="Geographic Map of Ahmedabad" 
              className="w-full h-full object-cover opacity-100 transition-opacity duration-1000"
              referrerPolicy="no-referrer"
            />
            {/* Overlay Grid - Subtler */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.01)_1px,transparent_1px)] bg-[size:60px_60px] opacity-10" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20 opacity-80" />
          </div>

          {/* Overlay Info */}
          <div className="absolute bottom-10 left-10 right-10 flex flex-col md:flex-row justify-between items-end gap-10 z-20">
            <div className="max-w-xl text-left">
              <span className="text-[#3B82F6] text-[11px] font-bold tracking-[0.5em] mb-4 block uppercase font-mono border-l-2 border-[#3B82F6] pl-4">
                HEADQUARTERS & STUDIO
              </span>
              <h1 className="text-2xl md:text-3xl font-light text-white mb-6 leading-tight tracking-tight">
                601, Anikedhya Capitol 2, <br />
                Paldi, Ahmedabad, Gujarat 380007
              </h1>
              <div className="flex items-center gap-6 mt-6">
                <a 
                  href="https://maps.app.goo.gl/rfkJxZ1NbR8NU3FEA" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group/link flex items-center gap-3 px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-[#3B82F6] hover:text-white transition-all duration-500 tracking-[0.2em] text-[10px] uppercase shadow-lg"
                >
                  Go to Location
                  <span className="text-lg group-hover/link:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </div>
            
            <div className="flex flex-col items-end gap-6 border-l border-white/10 pl-10">
              <div className="text-right">
                <p className="text-sm tracking-[0.2em] text-white/60 uppercase font-bold mb-2">Cinematic Map Zoom</p>
                <div className="text-xs md:text-sm text-[#3B82F6] flex items-center gap-2">
                  Experience the Journey
                  <span className="font-mono">23.0125° N, 72.5610° E</span>
                </div>
              </div>
              <div className="hidden md:block h-[1px] w-20 bg-white/10" />
              <div className="text-right">
                <p className="text-[10px] tracking-widest text-white/40 uppercase font-bold">Ahmedabad, Gujarat, India</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Dynamic Glowing Accents */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-900/10 rounded-full blur-[120px] pointer-events-none animate-pulse" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-indigo-900/10 rounded-full blur-[120px] pointer-events-none animate-pulse delay-1000" />
      </div>
    </section>
  );
};
