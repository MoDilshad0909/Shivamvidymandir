import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-primary">
      <div className="absolute inset-0 bg-secondary/80 mix-blend-multiply"></div>
      <div 
        className="absolute inset-0 opacity-20"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}
      ></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6 leading-tight">
            Ready to Aim for Excellence?
          </h2>
          <p className="text-xl text-gray-200 mb-10 font-light">
            Admissions are now open. Secure a bright future for your child at Shivam Vidya Mandir High School & Jr. College.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/admissions" className="px-8 py-4 bg-accent text-secondary font-bold rounded-full hover:bg-white hover:text-primary transition-all shadow-lg transform hover:-translate-y-1 flex items-center justify-center">
              Apply Today <ArrowRight size={20} className="ml-2" />
            </Link>
            <Link to="/contact" className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white/10 transition-all flex items-center justify-center">
              Contact Admissions Office
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
