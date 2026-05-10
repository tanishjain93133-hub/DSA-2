import React from 'react';
import { motion } from 'motion/react';
import { Instagram, Facebook, Linkedin } from 'lucide-react';
import { SafeImage } from './SafeImage';

// Custom Pinterest Icon since Lucide doesn't have one
const PinterestIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.08 3.16 9.41 7.63 11.16-.1-.95-.19-2.4.04-3.43l1.39-5.91s-.35-.71-.35-1.75c0-1.64.95-2.87 2.14-2.87 1.01 0 1.5 0.76 1.5 1.66 0 1.01-.65 2.53-.98 3.93-.28 1.18 0.59 2.14 1.76 2.14 2.11 0 3.73-2.22 3.73-5.43 0-2.84-2.04-4.83-4.96-4.83-3.38 0-5.36 2.54-5.36 5.15 0 1.02 0.39 2.11 0.88 2.71 0.1 0.12 0.11 0.22 0.08 0.34l-.32 1.34c-.05 0.22-.17 0.26-.4 0.15-1.48-.69-2.4-2.86-2.4-4.6 0-3.74 2.72-7.18 7.84-7.18 4.12 0 7.31 2.93 7.31 6.85 0 4.09-2.58 7.38-6.17 7.38-1.21 0-2.34-.63-2.73-1.37l-.74 2.82c-.27 1.03-.99 2.32-1.47 3.1 1.12 0.34 2.31 0.53 3.54 0.53 6.63 0 12-5.37 12-12S18.63 0 12 0z"/>
  </svg>
);

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 relative overflow-hidden bg-black">
      <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12 pt-16 relative">
          {/* Vibrant Animated Divider Line */}
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neon-cyan/50 to-transparent shadow-[0_0_15px_rgba(0,240,255,0.3)]" />
          
          {/* Left: Logo */}
          <div className="flex-1 flex justify-start">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-white/10 overflow-hidden flex items-center justify-center p-0 bg-transparent shadow-2xl"
            >
              <SafeImage 
                src="https://lh3.googleusercontent.com/d/1DkbTUmi2LgvJdzeMNlrNJw159FzlwrAD" 
                alt="DSA Architects Logo" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
          
          {/* Center: Social Icons */}
          <div className="flex-1 flex justify-center">
            <div className="flex gap-4 items-center">
              <a 
                href="https://www.instagram.com/dsa.architects.and.interiors?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 rounded-full bg-white/5 border border-white/10 text-white/50 hover:text-[#E4405F] hover:border-[#E4405F]/50 hover:bg-[#E4405F]/10 transition-all transform hover:scale-110 active:scale-95 group/social"
                title="Instagram"
              >
                <motion.div whileHover={{ rotate: 5 }}>
                  <Instagram size={20} className="group-hover/social:drop-shadow-[0_0_8px_rgba(228,64,95,1)]" />
                </motion.div>
              </a>
              <a 
                href="https://www.facebook.com/dsa.architects.and.interiors" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 rounded-full bg-white/5 border border-white/10 text-white/50 hover:text-[#1877F2] hover:border-[#1877F2]/50 hover:bg-[#1877F2]/10 transition-all transform hover:scale-110 active:scale-95 group/social"
                title="Facebook"
              >
                <motion.div whileHover={{ rotate: 5 }}>
                  <Facebook size={20} className="group-hover/social:drop-shadow-[0_0_8px_rgba(24,119,242,1)]" />
                </motion.div>
              </a>
              <a 
                href="https://www.linkedin.com/company/dsa-architects-interiors/?viewAsMember=true" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 rounded-full bg-white/5 border border-white/10 text-white/50 hover:text-[#0A66C2] hover:border-[#0A66C2]/50 hover:bg-[#0A66C2]/10 transition-all transform hover:scale-110 active:scale-95 group/social"
                title="LinkedIn"
              >
                <motion.div whileHover={{ rotate: 5 }}>
                  <Linkedin size={20} className="group-hover/social:drop-shadow-[0_0_8px_rgba(10,102,194,1)]" />
                </motion.div>
              </a>
              <a 
                href="https://in.pinterest.com/DSAARCHITECTSAHMEDABAD/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 rounded-full bg-white/5 border border-white/10 text-white/50 hover:text-[#BD081C] hover:border-[#BD081C]/50 hover:bg-[#BD081C]/10 transition-all transform hover:scale-110 active:scale-95 group/social"
                title="Pinterest"
              >
                <motion.div whileHover={{ rotate: 5 }}>
                  <PinterestIcon className="w-[20px] h-[20px] group-hover/social:drop-shadow-[0_0_8px_rgba(189,8,28,1)]" />
                </motion.div>
              </a>
            </div>
          </div>

          {/* Right: Copyright */}
          <div className="flex-1 flex justify-end">
            <div className="flex flex-col items-center md:items-end font-display">
              <p className="text-[10px] tracking-[0.4em] text-white/95 uppercase font-bold text-center md:text-right mb-1">
                © 2026 DSA ARCHITECTS & INTERIORS
              </p>
              <p className="text-[10px] tracking-[0.4em] text-white/70 uppercase font-bold text-center md:text-right">
                ALL RIGHTS RESERVED.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Glowing Gradient Line */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-electric-purple to-neon-cyan opacity-50 blur-[1px]" />
      <div className="absolute bottom-0 left-0 right-0 h-[10px] bg-gradient-to-r from-transparent via-electric-purple to-neon-cyan opacity-20 blur-[10px]" />
    </footer>
  );
};
