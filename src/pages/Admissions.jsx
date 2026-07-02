import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { CheckCircle2, ChevronRight, FileText, Calendar, HelpCircle, PhoneCall } from 'lucide-react';

const processSteps = [
  { icon: FileText, title: 'Submit Enquiry', desc: 'Fill out the online enquiry form or visit the school office.' },
  { icon: PhoneCall, title: 'Counseling & Interaction', desc: 'Our admissions counselor will contact you for a brief interaction.' },
  { icon: Calendar, title: 'Document Verification', desc: 'Submit required documents for verification at the office.' },
  { icon: CheckCircle2, title: 'Fee Payment & Confirmation', desc: 'Pay the admission fee to confirm your child\'s seat.' }
];

const faqs = [
  { q: 'What is the minimum age criterion for admission to Class 1?', a: 'The child must be 6 years old as of 31st December of the academic year.' },
  { q: 'Does the school provide transport facilities?', a: 'Yes, we provide safe and secure bus transport covering major routes in the vicinity.' },
  { q: 'Are there any entrance exams?', a: 'For primary sections, there are no entrance exams. For secondary and junior college, admissions are based on previous academic performance and a brief interaction.' },
  { q: 'What are the school timings?', a: 'Primary: 7:30 AM to 12:30 PM. Secondary: 1:00 PM to 6:00 PM.' }
];

const Admissions = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  const onSubmit = (data) => {
    console.log(data);
    setIsSubmitted(true);
    reset();
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <>
      <Helmet>
        <title>Admissions | Shivam Vidya Mandir High School & Jr. College</title>
        <meta name="description" content="Admission process, eligibility, and enquiry form for Shivam Vidya Mandir." />
      </Helmet>

      {/* Page Header */}
      <section className="bg-secondary text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        <div className="absolute inset-0 bg-primary/80 mix-blend-multiply"></div>
        <div className="container mx-auto px-4 relative z-10 text-center pt-10">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Admissions Open</h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">Join the Shivam Vidya Mandir family. Take the first step towards a bright future.</p>
        </div>
      </section>

      <section className="py-24 bg-light">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Col: Process & FAQs */}
            <div className="lg:col-span-7 space-y-16">
              
              {/* Admission Process */}
              <div>
                <h2 className="text-3xl font-heading font-bold text-secondary mb-8">Admission Process</h2>
                <div className="space-y-6">
                  {processSteps.map((step, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex bg-white p-6 rounded-2xl border border-gray-100 premium-shadow"
                    >
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0 mr-6">
                        <step.icon size={24} />
                      </div>
                      <div>
                        <h4 className="font-heading font-bold text-lg text-secondary mb-1">Step {index + 1}: {step.title}</h4>
                        <p className="text-gray-600 text-sm">{step.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Required Documents */}
              <div className="bg-white p-8 rounded-2xl border border-gray-100 premium-shadow">
                <h2 className="text-2xl font-heading font-bold text-secondary mb-6 flex items-center">
                  <FileText className="text-primary mr-3" /> Required Documents
                </h2>
                <ul className="space-y-3">
                  {['Original Birth Certificate (for class 1)', 'Leaving Certificate from previous school', 'Previous academic year report card', 'Aadhar Card copy of student and parents', '3 Passport size photographs', 'Caste certificate (if applicable)'].map((doc, i) => (
                    <li key={i} className="flex items-start text-gray-600">
                      <CheckCircle2 size={20} className="text-green-500 mr-3 shrink-0 mt-0.5" />
                      {doc}
                    </li>
                  ))}
                </ul>
              </div>

              {/* FAQs */}
              <div>
                <h2 className="text-3xl font-heading font-bold text-secondary mb-8">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div key={index} className="bg-white rounded-xl border border-gray-100 overflow-hidden premium-shadow">
                      <button 
                        className="w-full text-left p-6 flex justify-between items-center focus:outline-none"
                        onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                      >
                        <h4 className="font-heading font-semibold text-secondary pr-4">{faq.q}</h4>
                        <ChevronRight className={`text-primary transition-transform duration-300 shrink-0 ${activeFaq === index ? 'rotate-90' : ''}`} />
                      </button>
                      <AnimatePresence>
                        {activeFaq === index && (
                          <motion.div 
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="px-6 pb-6 text-gray-600 text-sm"
                          >
                            {faq.a}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Col: Enquiry Form */}
            <div className="lg:col-span-5">
              <div className="bg-white p-8 rounded-2xl border border-gray-100 premium-shadow sticky top-32">
                <div className="mb-8">
                  <h3 className="text-2xl font-heading font-bold text-secondary mb-2">Admission Enquiry</h3>
                  <p className="text-gray-500 text-sm">Fill out the form below and our admissions team will get back to you shortly.</p>
                </div>

                {isSubmitted ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-green-50 border border-green-200 text-green-700 p-6 rounded-xl text-center"
                  >
                    <CheckCircle2 size={48} className="mx-auto mb-4 text-green-500" />
                    <h4 className="font-bold text-lg mb-2">Thank You!</h4>
                    <p className="text-sm">Your enquiry has been submitted successfully. We will contact you soon.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Parent's Name *</label>
                      <input 
                        {...register('parentName', { required: 'Parent name is required' })}
                        type="text" 
                        className={`w-full px-4 py-3 rounded-lg border ${errors.parentName ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all`}
                        placeholder="Enter full name"
                      />
                      {errors.parentName && <span className="text-red-500 text-xs mt-1 block">{errors.parentName.message}</span>}
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                        <input 
                          {...register('phone', { 
                            required: 'Phone is required',
                            pattern: { value: /^[0-9]{10}$/, message: 'Invalid phone number' }
                          })}
                          type="tel" 
                          className={`w-full px-4 py-3 rounded-lg border ${errors.phone ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all`}
                          placeholder="10 digit number"
                        />
                        {errors.phone && <span className="text-red-500 text-xs mt-1 block">{errors.phone.message}</span>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input 
                          {...register('email', { 
                            pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' }
                          })}
                          type="email" 
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                          placeholder="Email address"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Student's Name *</label>
                      <input 
                        {...register('studentName', { required: 'Student name is required' })}
                        type="text" 
                        className={`w-full px-4 py-3 rounded-lg border ${errors.studentName ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all`}
                        placeholder="Enter student name"
                      />
                      {errors.studentName && <span className="text-red-500 text-xs mt-1 block">{errors.studentName.message}</span>}
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Admission For Class *</label>
                        <select 
                          {...register('class', { required: 'Please select a class' })}
                          className={`w-full px-4 py-3 rounded-lg border ${errors.class ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all bg-white`}
                        >
                          <option value="">Select Class</option>
                          <optgroup label="Primary">
                            <option value="I">Class I</option>
                            <option value="II">Class II</option>
                            <option value="III">Class III</option>
                            <option value="IV">Class IV</option>
                          </optgroup>
                          <optgroup label="Secondary">
                            <option value="V">Class V</option>
                            <option value="VI">Class VI</option>
                            <option value="VII">Class VII</option>
                            <option value="VIII">Class VIII</option>
                            <option value="IX">Class IX</option>
                            <option value="X">Class X</option>
                          </optgroup>
                          <optgroup label="Junior College">
                            <option value="XI">Class XI</option>
                            <option value="XII">Class XII</option>
                          </optgroup>
                        </select>
                        {errors.class && <span className="text-red-500 text-xs mt-1 block">{errors.class.message}</span>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Medium *</label>
                        <select 
                          {...register('medium', { required: 'Please select a medium' })}
                          className={`w-full px-4 py-3 rounded-lg border ${errors.medium ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all bg-white`}
                        >
                          <option value="">Select Medium</option>
                          <option value="English">English</option>
                          <option value="Hindi">Hindi</option>
                        </select>
                        {errors.medium && <span className="text-red-500 text-xs mt-1 block">{errors.medium.message}</span>}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Any specific query?</label>
                      <textarea 
                        {...register('query')}
                        rows="3"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all resize-none"
                        placeholder="How can we help you?"
                      ></textarea>
                    </div>

                    <button 
                      type="submit" 
                      className="w-full py-4 bg-primary text-white font-bold rounded-lg hover:bg-primary-light transition-colors shadow-lg hover:shadow-xl flex justify-center items-center"
                    >
                      Submit Enquiry
                    </button>
                    
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Admissions;
