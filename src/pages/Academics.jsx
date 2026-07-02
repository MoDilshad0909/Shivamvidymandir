import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Book, Code, Calculator, Globe, Languages, Microscope, Dumbbell, Palette } from 'lucide-react';

const sections = [
  {
    id: 'primary',
    title: 'Primary School (I - IV)',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    desc: 'Our Primary curriculum focuses on building a strong foundation in core subjects while encouraging creativity and curiosity through interactive learning.',
    subjects: ['English', 'Hindi', 'Marathi', 'Mathematics', 'Environmental Studies', 'Computer Science'],
    mediums: ['Hindi Medium', 'English Medium']
  },
  {
    id: 'secondary',
    title: 'Secondary School (V - X)',
    image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    desc: 'The Secondary curriculum prepares students for the Maharashtra State Board examinations, emphasizing analytical skills, deep understanding of concepts, and independent thought.',
    subjects: ['English', 'Hindi', 'Marathi', 'Mathematics (Algebra & Geometry)', 'Science & Technology', 'Social Sciences (History & Geography)'],
    mediums: ['Hindi Medium', 'English Medium']
  },
  {
    id: 'junior-college',
    title: 'Junior College (XI - XII)',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    desc: 'Our Junior College offers specialized streams designed to prepare students for higher education and professional courses. We provide excellent faculty and laboratories.',
    streams: [
      { name: 'Science', subjects: ['Physics', 'Chemistry', 'Biology / Mathematics', 'Information Technology', 'English'] },
      { name: 'Commerce', subjects: ['Book Keeping', 'Economics', 'Organization of Commerce', 'Secretarial Practice', 'English'] }
    ],
    mediums: ['English Medium']
  }
];

const Academics = () => {
  return (
    <>
      <Helmet>
        <title>Academics | Shivam Vidya Mandir High School & Jr. College</title>
        <meta name="description" content="Explore our academic curriculum for Primary, Secondary, and Junior College at Shivam Vidya Mandir." />
      </Helmet>

      {/* Page Header */}
      <section className="bg-secondary text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        <div className="absolute inset-0 bg-primary/80 mix-blend-multiply"></div>
        <div className="container mx-auto px-4 relative z-10 text-center pt-10">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Academic Excellence</h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">A comprehensive curriculum designed for holistic development and academic brilliance, recognized by the Maharashtra State Board.</p>
        </div>
      </section>

      {/* Curriculum Sections */}
      <section className="py-24 bg-light">
        <div className="container mx-auto px-4 md:px-8">
          <div className="space-y-24">
            {sections.map((section, index) => (
              <div key={section.id} id={section.id} className="scroll-mt-32">
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                  
                  <motion.div 
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className={index % 2 !== 0 ? 'lg:order-2' : ''}
                  >
                    <div className="relative rounded-2xl overflow-hidden premium-shadow h-[400px]">
                      <img src={section.image} alt={section.title} className="w-full h-full object-cover" />
                    </div>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className={index % 2 !== 0 ? 'lg:order-1' : ''}
                  >
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-4">{section.title}</h2>
                    <div className="flex gap-2 mb-6">
                      {section.mediums.map((medium, mIndex) => (
                        <span key={mIndex} className="px-3 py-1 bg-accent/20 text-primary text-xs font-bold uppercase tracking-wider rounded-full">
                          {medium}
                        </span>
                      ))}
                    </div>
                    <p className="text-gray-600 mb-8 leading-relaxed text-lg">{section.desc}</p>
                    
                    <h4 className="font-heading font-bold text-primary mb-4 text-xl border-b border-gray-200 pb-2">Core Curriculum</h4>
                    
                    {section.streams ? (
                      <div className="space-y-6">
                        {section.streams.map((stream, sIndex) => (
                          <div key={sIndex}>
                            <h5 className="font-bold text-secondary mb-2 flex items-center">
                              <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
                              {stream.name}
                            </h5>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-600 ml-4">
                              {stream.subjects.map((subject, subIndex) => (
                                <li key={subIndex} className="flex items-center">
                                  <Book size={14} className="mr-2 text-gray-400" /> {subject}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-600">
                        {section.subjects.map((subject, subIndex) => (
                          <li key={subIndex} className="flex items-center">
                            <Book size={16} className="mr-2 text-primary" /> {subject}
                          </li>
                        ))}
                      </ul>
                    )}
                  </motion.div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Co-Curricular */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h4 className="text-accent font-bold uppercase tracking-widest mb-2">Beyond Academics</h4>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary">Co-Curricular Activities</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Palette, name: 'Arts & Crafts' },
              { icon: Dumbbell, name: 'Physical Education' },
              { icon: Microscope, name: 'Science Club' },
              { icon: Code, name: 'Computer Coding' },
              { icon: Languages, name: 'Debate & Elocution' },
              { icon: Globe, name: 'Environmental Club' },
            ].map((activity, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-light p-6 rounded-xl border border-gray-100 text-center hover:bg-primary hover:text-white transition-colors group cursor-pointer"
              >
                <activity.icon size={32} className="mx-auto mb-4 text-primary group-hover:text-accent transition-colors" />
                <h3 className="font-heading font-bold text-secondary group-hover:text-white transition-colors">{activity.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Academics;
