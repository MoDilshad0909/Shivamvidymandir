import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

const facultyMembers = [
  { name: 'Dr. Ramesh Sharma', designation: 'Principal', qual: 'Ph.D. in Education, M.Sc. Physics', exp: '25+ Years', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
  { name: 'Mrs. Anjali Desai', designation: 'Vice Principal', qual: 'M.A. English, B.Ed.', exp: '20+ Years', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
  { name: 'Mr. Vivek Patel', designation: 'HOD Science', qual: 'M.Sc. Chemistry, B.Ed.', exp: '15+ Years', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
  { name: 'Mrs. Sunita Verma', designation: 'HOD Mathematics', qual: 'M.Sc. Mathematics, B.Ed.', exp: '18+ Years', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
  { name: 'Mr. Rajesh Iyer', designation: 'Senior Sports Instructor', qual: 'M.P.Ed.', exp: '12+ Years', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
  { name: 'Ms. Pooja Mehta', designation: 'Primary Co-ordinator', qual: 'B.A., D.Ed.', exp: '10+ Years', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
];

const Faculty = () => {
  return (
    <>
      <Helmet>
        <title>Faculty | Shivam Vidya Mandir High School & Jr. College</title>
        <meta name="description" content="Meet our highly qualified and experienced faculty members." />
      </Helmet>

      {/* Page Header */}
      <section className="bg-secondary text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        <div className="absolute inset-0 bg-primary/80 mix-blend-multiply"></div>
        <div className="container mx-auto px-4 relative z-10 text-center pt-10">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Our Faculty</h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">Passionate educators dedicated to shaping the future of our students.</p>
        </div>
      </section>

      <section className="py-24 bg-light">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facultyMembers.map((faculty, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden premium-shadow border border-gray-100 group text-center"
              >
                <div className="h-72 overflow-hidden bg-gray-100">
                  <img 
                    src={faculty.image} 
                    alt={faculty.name} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 grayscale group-hover:grayscale-0"
                  />
                </div>
                <div className="p-6 relative">
                  {/* Decorative line */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-accent transform -translate-y-1/2"></div>
                  
                  <h3 className="text-xl font-heading font-bold text-secondary mb-1">{faculty.name}</h3>
                  <p className="text-primary font-medium text-sm uppercase tracking-wider mb-4">{faculty.designation}</p>
                  
                  <div className="flex flex-col gap-2 text-sm text-gray-600 bg-light p-4 rounded-lg">
                    <div className="flex justify-between border-b border-gray-200 pb-2">
                      <span className="font-semibold text-gray-500">Qualification:</span>
                      <span className="text-right">{faculty.qual}</span>
                    </div>
                    <div className="flex justify-between pt-1">
                      <span className="font-semibold text-gray-500">Experience:</span>
                      <span>{faculty.exp}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Faculty;
