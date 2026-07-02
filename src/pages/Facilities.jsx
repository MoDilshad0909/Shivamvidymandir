import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

const facilities = [
  {
    title: 'Smart Classrooms',
    desc: 'Fully air-conditioned, digitally equipped classrooms with interactive smart boards to make learning engaging and effective.',
    image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
  },
  {
    title: 'Science Laboratories',
    desc: 'Well-equipped Physics, Chemistry, and Biology labs that provide hands-on experience and foster scientific curiosity.',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
  },
  {
    title: 'Computer Labs',
    desc: 'State-of-the-art computer labs with high-speed internet and the latest software to ensure digital literacy for all students.',
    image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
  },
  {
    title: 'Digital Library',
    desc: 'A vast collection of physical books, digital resources, journals, and encyclopedias in a quiet, comfortable reading environment.',
    image: 'https://images.unsplash.com/photo-1568667256549-094345857637?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
  },
  {
    title: 'Sports & Playground',
    desc: 'Extensive sports facilities including a large playground for football, cricket, and courts for basketball and badminton.',
    image: 'https://images.unsplash.com/photo-1526676037777-05a232554f77?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
  },
  {
    title: 'Medical Room & Safety',
    desc: 'A dedicated medical room with trained staff. The entire campus is under 24/7 CCTV surveillance with strict security protocols.',
    image: 'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
  }
];

const Facilities = () => {
  return (
    <>
      <Helmet>
        <title>Facilities | Shivam Vidya Mandir High School & Jr. College</title>
        <meta name="description" content="Explore the world-class infrastructure and facilities at Shivam Vidya Mandir." />
      </Helmet>

      {/* Page Header */}
      <section className="bg-secondary text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        <div className="absolute inset-0 bg-primary/80 mix-blend-multiply"></div>
        <div className="container mx-auto px-4 relative z-10 text-center pt-10">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">World-Class Facilities</h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">Providing a safe, stimulating, and modern environment for holistic student development.</p>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="py-24 bg-light">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden premium-shadow border border-gray-100 group"
              >
                <div className="h-64 overflow-hidden relative">
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors z-10"></div>
                  <img 
                    src={facility.image} 
                    alt={facility.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-heading font-bold text-secondary mb-3">{facility.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{facility.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Facilities;
