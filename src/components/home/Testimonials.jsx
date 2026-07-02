import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    text: "The dedication of the teachers at Shivam Vidya Mandir is unparalleled. My son has grown not just academically but also as a confident individual.",
    author: "Rahul Sharma",
    role: "Parent"
  },
  {
    text: "The transition to the Junior College was seamless. The state-of-the-art facilities and focused curriculum really helped me excel in my boards.",
    author: "Priya Patel",
    role: "Alumni, Class of 2024"
  },
  {
    text: "A truly holistic environment. The balance between studies, sports, and extracurriculars ensures every child finds their true potential.",
    author: "Amit Desai",
    role: "Parent"
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-light relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h4 className="text-accent font-bold uppercase tracking-widest mb-2">Testimonials</h4>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary mb-6">What Our Community Says</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl premium-shadow border border-gray-100 relative"
            >
              <Quote className="text-accent/20 absolute top-6 right-6" size={48} />
              <div className="flex mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-8 italic">"{testimonial.text}"</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-200 rounded-full mr-4 border-2 border-primary/20"></div>
                <div>
                  <h4 className="font-heading font-bold text-secondary">{testimonial.author}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
