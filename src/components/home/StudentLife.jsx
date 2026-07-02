import { motion } from 'framer-motion';

const activities = [
  { title: 'Sports & Athletics', image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { title: 'Arts & Culture', image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { title: 'Science & Innovation', image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { title: 'Leadership', image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' }
];

const StudentLife = () => {
  return (
    <section className="py-24 bg-secondary text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h4 className="text-accent font-bold uppercase tracking-widest mb-2">Beyond the Classroom</h4>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">Vibrant Student Life</h2>
          <p className="text-gray-300 text-lg">
            Education is not just about academics. We provide a rich array of activities that help students discover their passions and develop life skills.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {activities.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative h-80 rounded-2xl overflow-hidden group cursor-pointer"
            >
              <div className="absolute inset-0 bg-primary/40 group-hover:bg-primary/20 transition-colors duration-500 z-10"></div>
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 bg-gradient-to-t from-secondary/90 via-secondary/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity">
                <h3 className="text-xl font-heading font-bold text-white mb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform">{item.title}</h3>
                <div className="h-1 w-12 bg-accent mt-3 opacity-0 group-hover:opacity-100 transition-opacity delay-100"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudentLife;
