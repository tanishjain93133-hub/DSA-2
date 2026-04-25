import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import Stepper, { Step } from './Stepper';

interface InquireModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const InquireModal: React.FC<InquireModalProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center p-6 overflow-y-auto pt-24 md:items-center md:pt-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-3xl"
            onClick={onClose}
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-2xl z-20 my-auto"
          >
            <button 
              onClick={onClose}
              className="absolute -top-12 right-0 p-2 text-white/50 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>

            <Stepper
              initialStep={1}
              onFinalStepCompleted={() => {
                setTimeout(onClose, 2000);
              }}
              nextButtonText="Continue"
              backButtonText="Back"
            >
              <Step>
                <div className="text-center py-4">
                  <h2 className="text-3xl md:text-5xl font-extralight tracking-tight text-white mb-4">
                    Welcome to <span className="text-neon-cyan font-normal">DSA!</span>
                  </h2>
                  <p className="text-white/40 text-lg font-light leading-relaxed max-w-sm mx-auto">
                    We're excited to help you transform your vision into an architectural masterpiece.
                  </p>
                </div>
              </Step>

              <Step>
                <div className="py-4">
                  <h2 className="text-2xl font-bold text-white mb-4 uppercase tracking-widest">Vision Discovery</h2>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-neon-cyan transition-colors cursor-pointer group">
                      <p className="text-neon-cyan text-[10px] font-bold tracking-widest uppercase mb-1">Type A</p>
                      <p className="text-white font-medium">Residential</p>
                    </div>
                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-electric-purple transition-colors cursor-pointer group">
                      <p className="text-electric-purple text-[10px] font-bold tracking-widest uppercase mb-1">Type B</p>
                      <p className="text-white font-medium">Commercial</p>
                    </div>
                  </div>
                  <div className="mt-8">
                    <input 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-all"
                      placeholder="Your name?"
                    />
                  </div>
                </div>
              </Step>

              <Step>
                <div className="text-center py-4">
                  <h2 className="text-2xl md:text-4xl font-light text-white mb-4 leading-tight">
                    Ready to design your <span className="text-neon-cyan">dream home</span> with DSA?
                  </h2>
                  <div className="w-full max-h-[200px] aspect-[2.5/1] rounded-2xl overflow-hidden mb-4 border border-white/10 shadow-2xl bg-white/5">
                    <img 
                      src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop" 
                      alt="Dream Home" 
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <p className="text-white/40 font-medium tracking-widest text-[10px] uppercase">
                    Check out the next step!
                  </p>
                </div>
              </Step>

              <Step>
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-neon-cyan/10 rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse">
                    <div className="w-10 h-10 bg-neon-cyan rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <h2 className="text-3xl font-bold text-white mb-4">Request Sent!</h2>
                  <p className="text-white/40 text-lg font-light leading-relaxed">
                    Ar. Dhwanish Shah will reach out to you within 24 hours.
                  </p>
                </div>
              </Step>
            </Stepper>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
