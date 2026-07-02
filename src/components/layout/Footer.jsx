import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary text-white pt-16 pb-8 border-t-[6px] border-accent">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* School Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-xs text-secondary font-bold">
                [LOGO]
              </div>
              <div>
                <h3 className="font-heading font-bold text-xl leading-tight">Shivam Vidya Mandir</h3>
                <p className="text-xs text-gray-300">High School & Jr. College</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 text-sm leading-relaxed">
              Established in 1981, we provide quality education with a holistic approach to student development, creating future leaders with strong values.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6 flex items-center">
              <span className="w-8 h-1 bg-accent mr-3"></span> Quick Links
            </h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><Link to="/about" className="hover:text-accent transition-colors flex items-center"><ArrowRight size={14} className="mr-2"/> About Us</Link></li>
              <li><Link to="/academics" className="hover:text-accent transition-colors flex items-center"><ArrowRight size={14} className="mr-2"/> Academics</Link></li>
              <li><Link to="/admissions" className="hover:text-accent transition-colors flex items-center"><ArrowRight size={14} className="mr-2"/> Admissions</Link></li>
              <li><Link to="/facilities" className="hover:text-accent transition-colors flex items-center"><ArrowRight size={14} className="mr-2"/> Facilities</Link></li>
              <li><Link to="/gallery" className="hover:text-accent transition-colors flex items-center"><ArrowRight size={14} className="mr-2"/> Gallery</Link></li>
              <li><Link to="/contact" className="hover:text-accent transition-colors flex items-center"><ArrowRight size={14} className="mr-2"/> Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6 flex items-center">
              <span className="w-8 h-1 bg-accent mr-3"></span> Contact Us
            </h4>
            <ul className="space-y-4 text-sm text-gray-300">
              <li className="flex items-start">
                <MapPin size={18} className="mr-3 text-accent shrink-0 mt-1" />
                <span>Khairani Road, Sakinaka,<br/>Mumbai – 400072,<br/>Maharashtra, India</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-3 text-accent shrink-0" />
                <span>+91 93261 40991</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-3 text-accent shrink-0" />
                <span>info@shivamvidyamandir.edu.in</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6 flex items-center">
              <span className="w-8 h-1 bg-accent mr-3"></span> Newsletter
            </h4>
            <p className="text-sm text-gray-300 mb-4">Subscribe to our newsletter for updates and announcements.</p>
            <form className="flex flex-col space-y-3">
              <input type="email" placeholder="Email Address" className="px-4 py-2 bg-white/5 border border-white/10 rounded-md focus:outline-none focus:border-accent text-sm text-white placeholder-gray-400" />
              <button type="submit" className="px-4 py-2 bg-primary text-white rounded-md font-medium hover:bg-primary-light transition-colors text-sm">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Shivam Vidya Mandir. All Rights Reserved.</p>
          <p className="mt-2 md:mt-0">Designed & Developed by <span className="text-accent font-medium">Dilshad Web Studio</span></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
