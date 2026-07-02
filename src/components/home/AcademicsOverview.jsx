import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Book, Library, GraduationCap } from 'lucide-react';

const sections = [
  {
    title: 'Primary School',
    desc: 'Building a strong foundation with interactive learning and fundamental skill development.',
    icon: Book,
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    link: '/academics#primary'
  },
  {
    title: 'Secondary School',
    desc: 'Fostering critical thinking and preparing students for board examinations with expert guidance.',
    icon: Library,
    image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    link: '/academics#secondary'
  },
  {
    title: 'Junior College',
    desc: 'Specialized streams preparing students for higher education and competitive careers.',
    icon: GraduationCap,
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    link: '/academics#junior-college'
  }
];

const AcademicsOverview = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h4 className="text-accent font-bold uppercase tracking-widest mb-2">Academic Excellence</h4>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-secondary">A Continuum of Learning</h2>
          </div>
          <Link to="/academics" className="hidden md:flex items-center font-medium text-primary hover:text-primary-light transition-colors group">
            Explore Curriculum <ArrowRight size={20} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sections.map((section, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group rounded-2xl overflow-hidden bg-light border border-gray-100 hover:premium-shadow transition-all"
            >
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors z-10"></div>
                <img 
                  src={section.image} 
                  alt={section.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 z-20 w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary shadow-lg">
                  <section.icon size={24} />
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-heading font-bold text-secondary mb-3">{section.title}</h3>
                <p className="text-gray-600 mb-6 line-clamp-2">{section.desc}</p>
                <Link to={section.link} className="inline-flex items-center font-semibold text-primary group-hover:text-accent transition-colors">
                  Learn more <ArrowRight size={18} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <Link to="/academics" className="inline-flex items-center font-medium text-primary">
            Explore Curriculum <ArrowRight size={20} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AcademicsOverview;
