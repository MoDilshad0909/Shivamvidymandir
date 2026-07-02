import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image Placeholder */}
      <div 
        className="absolute inset-0 bg-secondary bg-cover bg-center"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")' }}
      >
        <div className="absolute inset-0 bg-primary/80 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 via-transparent to-secondary"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center mt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center mx-auto mb-6 border border-white/20 shadow-2xl">
            <span className="text-white font-bold text-sm">[LOGO]</span>
          </div>
          <h2 className="text-accent font-semibold tracking-widest uppercase mb-4 text-sm md:text-base">Shivam Vidya Mandir High School & Jr. College</h2>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6 leading-tight">
            Aim for Excellence
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto font-light">
            Empowering students with quality education, deep-rooted values, and a vision for tomorrow since 1981.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/admissions" className="px-8 py-4 bg-accent text-secondary font-bold rounded-full hover:bg-white hover:text-primary transition-all shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:shadow-[0_0_30px_rgba(255,255,255,0.6)] transform hover:-translate-y-1">
              Apply for Admission
            </Link>
            <Link to="/contact" className="px-8 py-4 bg-transparent border-2 border-white/50 text-white font-semibold rounded-full hover:bg-white/10 backdrop-blur-sm transition-all transform hover:-translate-y-1">
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/70 flex flex-col items-center"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <span className="text-xs uppercase tracking-widest mb-2 font-medium">Scroll</span>
        <ChevronDown size={24} />
      </motion.div>
    </section>
  );
};

export default Hero;
