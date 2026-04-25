import React from 'react';
import { motion } from 'motion/react';
import { Send, Mail, MapPin } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="pb-24 pt-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col h-full justify-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
              Let’s Build Your <br />
              <span className="text-gradient">Dream Up in the Air.</span>
            </h2>
            <p className="text-white/60 text-lg mb-12 max-w-md">
              Ready to challenge gravity? Reach out to our design studio in Ahmedabad.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center group-hover:glow-purple transition-all">
                  <Mail className="text-electric-purple" />
                </div>
                <div>
                  <p className="text-[10px] tracking-[0.3em] text-white/90 mb-1 font-bold uppercase">Email Us</p>
                  <p className="text-xl font-display font-medium text-white">dshaharchitects@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center group-hover:glow-cyan transition-all">
                  <MapPin className="text-neon-cyan" />
                </div>
                <div>
                  <p className="text-[10px] tracking-[0.3em] text-white/90 mb-1 font-bold uppercase">Visit Studio</p>
                  <p className="text-xl font-display font-medium leading-tight text-white">
                    601, Anikedhya Capitol 2, <br />
                    Mahalakshmi Five Cross Road, Opp. Pentagon Merlin, <br />
                    Paldi, Ahmedabad, Gujarat 380007
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass p-8 md:p-12 rounded-3xl"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] tracking-widest text-white/90 ml-2 font-bold uppercase">Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-white/5 border border-white/20 rounded-2xl px-6 py-4 focus:outline-none focus:border-neon-cyan text-white placeholder-white/50 transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] tracking-widest text-white/90 ml-2 font-bold uppercase">Email</label>
                  <input 
                    type="email" 
                    className="w-full bg-white/5 border border-white/20 rounded-2xl px-6 py-4 focus:outline-none focus:border-neon-cyan text-white placeholder-white/50 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] tracking-widest text-white/90 ml-2 font-bold uppercase">Project Type</label>
                <div className="relative">
                  <select className="w-full bg-white/5 border border-white/20 rounded-2xl px-6 py-4 focus:outline-none focus:border-neon-cyan text-white transition-colors appearance-none scrollbar-hide">
                    <option className="bg-neutral-900">Villa</option>
                    <option className="bg-neutral-900">Commercial</option>
                    <option className="bg-neutral-900">Lighting</option>
                  </select>
                  <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-white/50">
                    ▼
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] tracking-widest text-white/90 ml-2 font-bold uppercase">Your Vision</label>
                <textarea 
                  rows={4}
                  className="w-full bg-white/5 border border-white/20 rounded-2xl px-6 py-4 focus:outline-none focus:border-neon-cyan text-white placeholder-white/50 transition-colors resize-none"
                  placeholder="Tell us about your floating dream..."
                />
              </div>
              <button className="w-full py-5 rounded-2xl bg-white text-neutral-900 font-bold tracking-widest text-sm flex items-center justify-center gap-3 hover:bg-neon-cyan hover:text-white transition-all shadow-xl">
                Send Message <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
