import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Target, Eye, Heart, Award } from 'lucide-react';

const timeline = [
  { year: '1981', title: 'School Founded', desc: 'Shivam Vidya Mandir was established with a vision to provide quality education.' },
  { year: '1987', title: 'Secondary Recognition', desc: 'Achieved government recognition for secondary education.' },
  { year: '1997', title: 'Junior College', desc: 'Expanded our wings to include Junior College sections.' },
  { year: '2002', title: 'English Medium', desc: 'Started English medium batches to meet modern educational demands.' },
  { year: '2010', title: 'Infrastructure Expansion', desc: 'Added new labs, library, and sports facilities.' },
  { year: '2020', title: 'Digital Education', desc: 'Implemented smart classrooms and digital learning platforms.' },
  { year: 'Present', title: '40+ Years of Excellence', desc: 'Continuing our legacy of creating future leaders.' },
];

const values = [
  { icon: Target, title: 'Our Mission', desc: 'To impart holistic education that nurtures intellectual, physical, and moral development in every student.' },
  { icon: Eye, title: 'Our Vision', desc: 'To be a center of excellence that shapes global citizens deeply rooted in Indian values.' },
  { icon: Heart, title: 'Core Values', desc: 'Integrity, Discipline, Compassion, and Excellence in all endeavors.' },
];

import FoundersMessage from '../components/about/FoundersMessage';

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Shivam Vidya Mandir High School & Jr. College</title>
        <meta name="description" content="Learn about our 40+ years legacy, mission, vision, and core values at Shivam Vidya Mandir." />
      </Helmet>

      {/* Page Header */}
      <section className="bg-secondary text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        <div className="absolute inset-0 bg-primary/80 mix-blend-multiply"></div>
        <div className="container mx-auto px-4 relative z-10 text-center pt-10">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">About Our School</h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">Discover our history, our values, and the people who make Shivam Vidya Mandir a premier educational institution.</p>
        </div>
      </section>

      {/* Philosophy */}
      <section className="pt-24 pb-12 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <img src="https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="School building" className="rounded-2xl premium-shadow" />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-heading font-bold text-secondary mb-6">40+ Years of Educational Legacy</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Since our inception in 1981, Shivam Vidya Mandir has stood as a beacon of knowledge and character building in Mumbai. Managed by Shivam Shikshan Sanstha, we have consistently aimed for excellence in every sphere of education.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Our philosophy is simple: every child is unique and deserves an environment that nurtures their individual talents while building a strong academic foundation.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <FoundersMessage />

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          {/* Mission & Vision */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-light p-8 rounded-2xl hover:premium-shadow transition-all text-center border border-gray-100"
              >
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-primary mx-auto mb-6 shadow-md">
                  <item.icon size={32} />
                </div>
                <h3 className="text-2xl font-heading font-bold text-secondary mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Timeline */}
      <section className="py-24 bg-light relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h4 className="text-accent font-bold uppercase tracking-widest mb-2">Our Journey</h4>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary">A Legacy of Growth</h2>
          </div>

          <div className="max-w-4xl mx-auto relative">
            {/* Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20 rounded-full hidden md:block"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className={`flex flex-col md:flex-row items-center justify-between ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                >
                  <div className="w-full md:w-[45%] mb-8 md:mb-0">
                    <div className={`bg-white p-6 rounded-2xl premium-shadow border border-gray-100 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right text-left'}`}>
                      <span className="text-accent font-bold text-xl mb-2 block">{item.year}</span>
                      <h4 className="font-heading font-bold text-secondary text-lg mb-2">{item.title}</h4>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                  
                  <div className="hidden md:flex w-10 h-10 bg-primary text-white rounded-full items-center justify-center z-10 border-4 border-light shadow-lg">
                    <Award size={16} />
                  </div>
                  
                  <div className="w-full md:w-[45%] hidden md:block"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
