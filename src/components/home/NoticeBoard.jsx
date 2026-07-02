import { motion } from 'framer-motion';
import { Calendar, Bell, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const notices = [
  { id: 1, type: 'Notice', title: 'Admissions Open for Academic Year 2026-27', date: 'July 15, 2026', link: '/admissions' },
  { id: 2, type: 'Event', title: 'Annual Sports Meet & Cultural Festival', date: 'August 10, 2026', link: '#' },
  { id: 3, type: 'Notice', title: 'Parent-Teacher Meeting for Secondary Section', date: 'August 22, 2026', link: '#' },
  { id: 4, type: 'Holiday', title: 'School Closed on account of Independence Day', date: 'August 15, 2026', link: '#' },
];

const NoticeBoard = () => {
  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h4 className="text-accent font-bold uppercase tracking-widest mb-2">Stay Updated</h4>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-secondary mb-6">Notice Board & Events</h2>
            <p className="text-gray-600 text-lg mb-8">
              Keep track of important announcements, upcoming events, and holidays at Shivam Vidya Mandir.
            </p>
            
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Students collaborating" 
              className="rounded-2xl premium-shadow hidden md:block h-64 w-full object-cover"
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-light p-6 md:p-8 rounded-3xl border border-gray-100 premium-shadow"
          >
            <div className="space-y-4">
              {notices.map((notice) => (
                <div key={notice.id} className="bg-white p-5 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between group hover:border-primary transition-colors border border-transparent shadow-sm">
                  <div className="flex items-start mb-3 sm:mb-0">
                    <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-4 shrink-0 mt-1">
                      {notice.type === 'Event' ? <Calendar size={18} /> : <Bell size={18} />}
                    </div>
                    <div>
                      <span className="text-xs font-bold text-accent uppercase tracking-wider">{notice.type}</span>
                      <h4 className="font-heading font-bold text-secondary group-hover:text-primary transition-colors mt-1">{notice.title}</h4>
                      <p className="text-sm text-gray-500 mt-1">{notice.date}</p>
                    </div>
                  </div>
                  {notice.link !== '#' && (
                    <Link to={notice.link} className="shrink-0 p-2 bg-light rounded-full text-primary hover:bg-primary hover:text-white transition-colors self-end sm:self-center">
                      <ArrowRight size={18} />
                    </Link>
                  )}
                </div>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <Link to="#" className="inline-flex items-center font-semibold text-primary hover:text-accent transition-colors">
                View All Notices <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default NoticeBoard;
