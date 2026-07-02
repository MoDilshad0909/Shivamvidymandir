import { motion } from 'framer-motion';

const facilities = [
  { name: 'Smart Classrooms', image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
  { name: 'Science Labs', image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
  { name: 'Computer Lab', image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
  { name: 'Digital Library', image: 'https://images.unsplash.com/photo-1568667256549-094345857637?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
  { name: 'Sports Ground', image: 'https://images.unsplash.com/photo-1526676037777-05a232554f77?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
  { name: 'Activity Hall', image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
];

const Infrastructure = () => {
  return (
    <section className="py-24 bg-light">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h4 className="text-accent font-bold uppercase tracking-widest mb-2">World-Class Facilities</h4>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary mb-6">State-of-the-Art Infrastructure</h2>
          <p className="text-gray-600 text-lg">
            Our campus is designed to provide the best possible environment for learning, creativity, and physical development.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilities.map((facility, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative rounded-2xl overflow-hidden h-64 bg-white hover:premium-shadow transition-all"
            >
              <img 
                src={facility.image} 
                alt={facility.name} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 to-transparent flex items-end p-6">
                <h3 className="text-white font-heading font-bold text-xl">{facility.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Infrastructure;
