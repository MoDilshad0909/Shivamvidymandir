import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const categories = ['All', 'Campus', 'Events', 'Sports', 'Annual Day'];

const galleryItems = [
  { id: 1, category: 'Campus', src: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', span: 'col-span-1 row-span-1' },
  { id: 2, category: 'Events', src: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', span: 'col-span-1 md:col-span-2 row-span-2' },
  { id: 3, category: 'Sports', src: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', span: 'col-span-1 row-span-1' },
  { id: 4, category: 'Campus', src: 'https://images.unsplash.com/photo-1568667256549-094345857637?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', span: 'col-span-1 row-span-2' },
  { id: 5, category: 'Annual Day', src: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', span: 'col-span-1 row-span-1' },
  { id: 6, category: 'Events', src: 'https://images.unsplash.com/photo-1523580494112-071d16940365?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', span: 'col-span-1 row-span-1' },
  { id: 7, category: 'Sports', src: 'https://images.unsplash.com/photo-1526676037777-05a232554f77?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', span: 'col-span-1 md:col-span-2 row-span-1' },
  { id: 8, category: 'Annual Day', src: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', span: 'col-span-1 row-span-1' },
];

const Gallery = () => {
  const [filter, setFilter] = useState('All');
  const [selectedImg, setSelectedImg] = useState(null);

  const filteredItems = filter === 'All' ? galleryItems : galleryItems.filter(item => item.category === filter);

  return (
    <>
      <Helmet>
        <title>Gallery | Shivam Vidya Mandir High School & Jr. College</title>
        <meta name="description" content="View our campus, events, and student life in our gallery." />
      </Helmet>

      {/* Page Header */}
      <section className="bg-secondary text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        <div className="absolute inset-0 bg-primary/80 mix-blend-multiply"></div>
        <div className="container mx-auto px-4 relative z-10 text-center pt-10">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Photo Gallery</h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">Glimpses of life, learning, and celebrations at Shivam Vidya Mandir.</p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${filter === cat ? 'bg-primary text-white premium-shadow' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Masonry Layout (Simulated with grid for simplicity, but can use real masonry in complex setups) */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[250px]">
            <AnimatePresence>
              {filteredItems.map((item) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={item.id}
                  className={`${filter === 'All' ? item.span : 'col-span-1 row-span-1'} relative rounded-xl overflow-hidden group cursor-pointer`}
                  onClick={() => setSelectedImg(item.src)}
                >
                  <img src={item.src} alt={item.category} className="w-full h-full object-cover" loading="lazy" />
                  <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white font-heading font-bold text-lg tracking-wider border-2 border-white px-4 py-2 rounded-lg transform scale-90 group-hover:scale-100 transition-transform">
                      {item.category}
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={() => setSelectedImg(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white hover:text-accent transition-colors bg-white/10 rounded-full p-2"
              onClick={() => setSelectedImg(null)}
            >
              <X size={32} />
            </button>
            <motion.img 
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={selectedImg} 
              alt="Enlarged view" 
              className="max-w-full max-h-[90vh] rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Gallery;
