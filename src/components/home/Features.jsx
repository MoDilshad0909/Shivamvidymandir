import { motion } from 'framer-motion';
import { ShieldCheck, Brain, Heart, Zap, Medal, Users } from 'lucide-react';

const features = [
  { icon: Users, title: 'Experienced Faculty', desc: 'Highly qualified and passionate educators dedicated to student success.' },
  { icon: ShieldCheck, title: 'Safe Campus', desc: '24/7 CCTV surveillance and secure environment for peace of mind.' },
  { icon: Brain, title: 'Academic Excellence', desc: 'Consistent top board results and government recognized curriculum.' },
  { icon: Heart, title: 'Holistic Development', desc: 'Focus on character building, extracurriculars, and life skills.' },
  { icon: Zap, title: 'Modern Teaching', desc: 'Smart classrooms and digital learning tools for enhanced understanding.' },
  { icon: Medal, title: 'Sports & Leadership', desc: 'Excellent sports facilities and student council programs.' }
];

const Features = () => {
  return (
    <section className="py-24 bg-light">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h4 className="text-accent font-bold uppercase tracking-widest mb-2">Why Parents Choose Us</h4>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary mb-6">A Foundation for the Future</h2>
          <p className="text-gray-600 text-lg">
            At Shivam Vidya Mandir, we go beyond textbooks. We nurture curiosity, build character, and inspire leadership in every student.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl hover:premium-shadow transition-all border border-gray-100 group"
            >
              <div className="w-14 h-14 bg-light rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <feature.icon size={28} />
              </div>
              <h3 className="text-xl font-heading font-bold text-secondary mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
