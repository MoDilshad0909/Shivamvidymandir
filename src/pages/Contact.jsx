import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from 'lucide-react';

const Contact = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
    setIsSubmitted(true);
    reset();
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | Shivam Vidya Mandir High School & Jr. College</title>
        <meta name="description" content="Get in touch with Shivam Vidya Mandir. Address, phone number, and contact form." />
      </Helmet>

      {/* Page Header */}
      <section className="bg-secondary text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        <div className="absolute inset-0 bg-primary/80 mix-blend-multiply"></div>
        <div className="container mx-auto px-4 relative z-10 text-center pt-10">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Contact Us</h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">We are always here to answer your questions and assist you in any way we can.</p>
        </div>
      </section>

      <section className="py-24 bg-light">
        <div className="container mx-auto px-4 md:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            
            {/* Contact Info Cards */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl premium-shadow border border-gray-100 flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-6">
                <MapPin size={32} />
              </div>
              <h3 className="font-heading font-bold text-xl text-secondary mb-3">Our Location</h3>
              <p className="text-gray-600">Khairani Road, Sakinaka,<br/>Mumbai – 400072,<br/>Maharashtra, India</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white p-8 rounded-2xl premium-shadow border border-gray-100 flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-6">
                <Phone size={32} />
              </div>
              <h3 className="font-heading font-bold text-xl text-secondary mb-3">Contact Numbers</h3>
              <p className="text-gray-600 mb-2">+91 93261 40991</p>
              <p className="text-gray-500 text-sm">For admissions and general queries</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 rounded-2xl premium-shadow border border-gray-100 flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-6">
                <Clock size={32} />
              </div>
              <h3 className="font-heading font-bold text-xl text-secondary mb-3">Office Hours</h3>
              <p className="text-gray-600 mb-2">Monday - Saturday</p>
              <p className="text-gray-600 font-bold">8:00 AM - 4:00 PM</p>
            </motion.div>

          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            
            {/* Map */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-2 rounded-3xl premium-shadow overflow-hidden h-[600px]"
            >
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m3!1m2!1s0x3be7c8764a500995%3A0xc47e33554e2079f!2sSaki%20Naka%2C%20Mumbai%2C%20Maharashtra%20400072!5e0!3m2!1sen!2sin!4v1689874837894!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0, borderRadius: '20px' }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="School Location Map"
              ></iframe>
            </motion.div>

            {/* Form */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 md:p-10 rounded-3xl premium-shadow border border-gray-100"
            >
              <h2 className="text-3xl font-heading font-bold text-secondary mb-2">Send us a Message</h2>
              <p className="text-gray-500 mb-8">We will respond to your query within 24 working hours.</p>

              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-50 border border-green-200 text-green-700 p-8 rounded-2xl text-center h-[350px] flex flex-col items-center justify-center"
                >
                  <CheckCircle2 size={64} className="mb-6 text-green-500" />
                  <h4 className="font-bold text-2xl mb-2">Message Sent!</h4>
                  <p className="text-lg">Thank you for contacting us. We will be in touch shortly.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                      <input 
                        {...register('name', { required: 'Name is required' })}
                        type="text" 
                        className={`w-full px-5 py-4 rounded-xl bg-gray-50 border ${errors.name ? 'border-red-500' : 'border-gray-200'} focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all`}
                        placeholder="John Doe"
                      />
                      {errors.name && <span className="text-red-500 text-xs mt-1 block">{errors.name.message}</span>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                      <input 
                        {...register('phone', { 
                          required: 'Phone is required',
                          pattern: { value: /^[0-9]{10}$/, message: 'Invalid phone number' }
                        })}
                        type="tel" 
                        className={`w-full px-5 py-4 rounded-xl bg-gray-50 border ${errors.phone ? 'border-red-500' : 'border-gray-200'} focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all`}
                        placeholder="10 digit number"
                      />
                      {errors.phone && <span className="text-red-500 text-xs mt-1 block">{errors.phone.message}</span>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                    <input 
                      {...register('email', { 
                        required: 'Email is required',
                        pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' }
                      })}
                      type="email" 
                      className={`w-full px-5 py-4 rounded-xl bg-gray-50 border ${errors.email ? 'border-red-500' : 'border-gray-200'} focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all`}
                      placeholder="you@example.com"
                    />
                    {errors.email && <span className="text-red-500 text-xs mt-1 block">{errors.email.message}</span>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Your Message *</label>
                    <textarea 
                      {...register('message', { required: 'Message is required' })}
                      rows="4"
                      className={`w-full px-5 py-4 rounded-xl bg-gray-50 border ${errors.message ? 'border-red-500' : 'border-gray-200'} focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all resize-none`}
                      placeholder="How can we help you?"
                    ></textarea>
                    {errors.message && <span className="text-red-500 text-xs mt-1 block">{errors.message.message}</span>}
                  </div>

                  <button 
                    type="submit" 
                    className="w-full py-4 bg-primary text-white font-bold text-lg rounded-xl hover:bg-primary-light transition-colors shadow-lg hover:shadow-xl flex justify-center items-center group"
                  >
                    Send Message <Send size={20} className="ml-3 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                  
                </form>
              )}
            </motion.div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
