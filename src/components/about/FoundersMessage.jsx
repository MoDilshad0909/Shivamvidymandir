import { motion } from 'framer-motion';
import { Quote, Award } from 'lucide-react';

const FoundersMessage = () => {
  return (
    <section className="py-24 bg-light relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center space-x-2 bg-white px-4 py-2 rounded-full border border-accent/30 premium-shadow mb-4"
          >
            <Award className="text-accent" size={20} />
            <span className="text-primary font-bold text-sm tracking-wider uppercase">Since 1981</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-heading font-bold text-secondary mb-4"
          >
            Our Visionaries
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-accent font-semibold tracking-widest uppercase"
          >
            "Guided by Vision, Driven by Excellence Since 1981"
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Photographs */}
          <div className="w-full lg:w-1/3 flex flex-col sm:flex-row lg:flex-col gap-8 justify-center items-center">
            
            {/* Founder Card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-[2rem] premium-shadow border border-gray-100 flex flex-col items-center text-center w-full max-w-xs group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-primary/10 to-transparent"></div>
              
              <div className="relative w-48 h-48 rounded-full border-4 border-accent p-1 mb-6 mt-4 shadow-lg group-hover:scale-105 transition-transform duration-500 bg-white">
                <img 
                  src="/founder.png" 
                  alt="Late Shri R. S. Shrivastav" 
                  className="w-full h-full object-cover rounded-full bg-gray-100"
                  onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'; }} // Fallback if image is missing
                />
              </div>
              <h3 className="font-heading font-bold text-xl text-secondary mb-1 relative z-10">Late Shri R. S. Shrivastav</h3>
              <p className="text-primary font-medium text-sm tracking-widest uppercase relative z-10">Founder</p>
            </motion.div>

            {/* Co-Founder Card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-6 rounded-[2rem] premium-shadow border border-gray-100 flex flex-col items-center text-center w-full max-w-xs group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-primary/10 to-transparent"></div>
              
              <div className="relative w-48 h-48 rounded-full border-4 border-accent p-1 mb-6 mt-4 shadow-lg group-hover:scale-105 transition-transform duration-500 bg-white">
                <img 
                  src="/Founder2.png" 
                  alt="Mrs. Sheela Shrivastav" 
                  className="w-full h-full object-cover rounded-full bg-gray-100"
                  onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'; }} // Fallback if image is missing
                />
              </div>
              <h3 className="font-heading font-bold text-xl text-secondary mb-1 relative z-10">Mrs. Sheela Shrivastav</h3>
              <p className="text-primary font-medium text-sm tracking-widest uppercase relative z-10">Chairperson</p>
            </motion.div>

          </div>

          {/* Right Column: Message */}
          <div className="w-full lg:w-2/3">
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card bg-white/90 p-8 md:p-12 rounded-[2.5rem] relative"
            >
              {/* Quote Icon */}
              <div className="absolute -top-6 -left-6 md:top-8 md:-left-8 w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-xl text-white">
                <Quote size={28} fill="currentColor" />
              </div>

              {/* Top Highlight Quote */}
              <h4 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-8 leading-snug italic text-center md:text-left mt-6 md:mt-0">
                "Education is the most powerful investment for a brighter tomorrow."
              </h4>
              
              <div className="w-24 h-1 bg-accent mb-8 mx-auto md:mx-0"></div>

              {/* Message Body */}
              <div className="space-y-6 text-gray-700 text-base md:text-lg leading-relaxed font-light">
                <p>
                  At Shivam Vidya Mandir High School & Jr. College, our journey began in 1981 with a simple yet powerful vision—to provide quality education that empowers every child to become a responsible, confident, and compassionate citizen.
                </p>
                <p>
                  <strong className="text-secondary font-medium">Late Shri R. S. Shrivastav</strong> firmly believed that education is not merely about academic success but about nurturing character, values, discipline, leadership, and lifelong learning. His dream was to establish an institution where every child receives equal opportunities to grow intellectually, morally, socially, and emotionally.
                </p>
                <p>
                  Inspired by this vision, the school has remained committed to academic excellence while encouraging creativity, critical thinking, innovation, sportsmanship, and cultural development. Every classroom, every activity, and every achievement reflects the values upon which this institution was founded.
                </p>
                <p>
                  Alongside him, <strong className="text-secondary font-medium">Mrs. Sheela Shrivastav</strong> has continued to strengthen this vision through her unwavering dedication to student welfare, quality education, and holistic development. Her commitment has played an important role in shaping the nurturing environment that defines our institution today.
                </p>
                <p>
                  Today, after more than four decades, Shivam Vidya Mandir High School & Jr. College proudly continues its mission of preparing young minds for the future while preserving the timeless values of integrity, respect, compassion, and excellence.
                </p>
                <p>
                  We sincerely thank our parents, students, teachers, alumni, and well-wishers for their trust and continued support as we move forward together toward an even brighter future.
                </p>
              </div>

              {/* Signatures */}
              <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
                <div>
                  <h4 className="font-[Dancing_Script,cursive] text-3xl text-primary mb-1" style={{ fontFamily: "'Brush Script MT', cursive, serif" }}>R. S. Shrivastav</h4>
                  <p className="text-secondary font-bold text-sm">Late Shri R. S. Shrivastav</p>
                  <p className="text-gray-500 text-sm">Founder</p>
                </div>
                
                <div className="hidden sm:block h-16 w-px bg-gray-200"></div>

                <div className="sm:text-right">
                  <h4 className="font-[Dancing_Script,cursive] text-3xl text-primary mb-1" style={{ fontFamily: "'Brush Script MT', cursive, serif" }}>Sheela Shrivastav</h4>
                  <p className="text-secondary font-bold text-sm">Mrs. Sheela Shrivastav</p>
                  <p className="text-gray-500 text-sm">Chairperson</p>
                </div>
              </div>
              
              <div className="mt-8 text-center sm:text-left">
                <p className="text-primary font-bold text-sm tracking-widest uppercase">Shivam Vidya Mandir High School & Jr. College</p>
              </div>

            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoundersMessage;
