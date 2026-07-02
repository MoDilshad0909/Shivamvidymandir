import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Academics', path: '/academics' },
    { name: 'Admissions', path: '/admissions' },
    { name: 'Facilities', path: '/facilities' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Faculty', path: '/faculty' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-card py-2' : 'bg-white py-4 shadow-md'}`}>
      {/* Top Bar - Hidden on mobile */}
      {!isScrolled && (
        <div className="hidden md:flex justify-between items-center px-8 py-2 bg-primary text-white text-sm">
          <div className="flex space-x-6">
            <div className="flex items-center"><Phone size={14} className="mr-2"/> +91 93261 40991</div>
            <div className="flex items-center"><MapPin size={14} className="mr-2"/> Sakinaka, Mumbai - 400072</div>
          </div>
          <div>Aim for Excellence</div>
        </div>
      )}

      {/* Main Nav */}
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-xs text-gray-500 font-bold border-2 border-primary">
              [LOGO]
            </div>
            <div>
              <h1 className="font-heading font-bold text-xl md:text-2xl text-primary leading-tight">Shivam Vidya Mandir</h1>
              <p className="text-xs text-gray-600 font-medium hidden md:block">High School & Jr. College</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`px-4 py-2 rounded-md font-medium transition-colors hover:text-primary hover:bg-primary/5 ${location.pathname === link.path ? 'text-primary bg-primary/10' : 'text-gray-700'}`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/admissions" className="ml-4 px-6 py-2 bg-accent text-white font-semibold rounded-full hover:bg-accent-dark transition-all shadow-md hover:shadow-lg">
              Apply Now
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button className="lg:hidden text-primary p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t">
          <nav className="flex flex-col py-4 px-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`px-4 py-3 border-b border-gray-100 font-medium ${location.pathname === link.path ? 'text-primary' : 'text-gray-700'}`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/admissions" className="mt-4 mx-4 px-6 py-3 bg-accent text-white text-center font-semibold rounded-md">
              Apply Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
