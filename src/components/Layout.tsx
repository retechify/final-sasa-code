import { Link, useLocation } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on page transition
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Programs', path: '/programs' },
    { name: 'Campus Life', path: '/campus-life' },
    { name: 'Admissions', path: '/admissions' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col relative overflow-x-hidden">
      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 md:px-8 py-3 mx-auto bg-surface/80 backdrop-blur-md rounded-full transition-all duration-300 border border-white/40 ${
          scrolled ? 'shadow-md mt-2 w-[95%]' : 'shadow-[0_10px_30px_rgba(139,92,246,0.1)] mt-4 md:mt-6 w-[90%]'
        }`}
      >
        <Link to="/" className="font-display-lg text-headline-md text-primary flex items-center gap-2">
          <span className="material-symbols-outlined text-primary text-2xl md:text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>cloud</span>
          <span className="tracking-tight text-lg md:text-xl font-bold">Sasha</span>
        </Link>
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.filter(link => link.name !== 'Contact').map(link => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-body-lg text-body-lg transition-all duration-300 ${
                location.pathname === link.path
                  ? 'text-primary font-bold border-b-2 border-primary pb-1'
                  : 'text-tertiary font-medium hover:text-primary-container'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <Link to="/contact" className="hidden sm:inline-block bg-gradient-to-r from-[#8B5CF6] to-[#C4B5FD] text-on-primary px-5 py-2 rounded-full font-medium shadow-sm hover:scale-95 active:scale-90 transition-transform whitespace-nowrap text-sm md:text-base">
            Book a Campus Visit
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex items-center justify-center p-2 text-primary hover:text-primary-container focus:outline-none z-50"
            aria-label="Toggle Menu"
          >
            <span className="material-symbols-outlined text-3xl">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-surface/95 backdrop-blur-lg flex flex-col items-center justify-center gap-8 md:hidden animate-fade-in">
          <div className="absolute top-6 left-6">
            <div className="font-display-lg text-headline-md text-primary flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>cloud</span>
              <span className="tracking-tight font-bold">Sasha School</span>
            </div>
          </div>
          
          <div className="flex flex-col items-center gap-6">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-display-lg text-2xl transition-all duration-300 ${
                  location.pathname === link.path
                    ? 'text-primary font-bold border-b-2 border-primary pb-1'
                    : 'text-tertiary font-medium hover:text-primary'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <Link
            to="/contact"
            className="mt-4 bg-gradient-to-r from-[#8B5CF6] to-[#C4B5FD] text-on-primary px-8 py-3 rounded-full font-headline-md shadow-md hover:scale-95 active:scale-90 transition-transform"
          >
            Book a Campus Visit
          </Link>
        </div>
      )}

      <div className="flex-grow">
        {children}
      </div>

      <footer className="w-full py-16 px-gutter bg-gradient-to-b from-surface to-secondary-fixed/20 border-t border-outline-variant/30 mt-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 text-left mb-12">
          {/* Brand Col */}
          <div className="md:col-span-4 space-y-4">
            <div className="font-display-lg text-headline-md text-primary flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>cloud</span>
              <span className="tracking-tight font-extrabold text-2xl">Sasha School</span>
            </div>
            <p className="font-body-md text-sm text-tertiary leading-relaxed">
              A premium, boutique academy designed to bridge child-led Montessori philosophy with modern emotional intelligence, sensory development, and organic nature-based exploration.
            </p>
            <div className="flex gap-3">
              <Link to="#" className="w-9 h-9 rounded-full border border-outline-variant/50 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
                <span className="material-symbols-outlined text-sm">public</span>
              </Link>
              <Link to="#" className="w-9 h-9 rounded-full border border-outline-variant/50 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
                <span className="material-symbols-outlined text-sm">mail</span>
              </Link>
              <Link to="#" className="w-9 h-9 rounded-full border border-outline-variant/50 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
                <span className="material-symbols-outlined text-sm">share</span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-bold text-primary tracking-widest uppercase font-mono">Quick Navigation</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/" className="text-tertiary hover:text-primary transition-colors font-medium">Home Portal</Link></li>
              <li><Link to="/about" className="text-tertiary hover:text-primary transition-colors font-medium">Our Story &amp; Founders</Link></li>
              <li><Link to="/programs" className="text-tertiary hover:text-primary transition-colors font-medium">Academic Programs</Link></li>
              <li><Link to="/campus-life" className="text-tertiary hover:text-primary transition-colors font-medium">Life &amp; Facilities on Campus</Link></li>
              <li><Link to="/admissions" className="text-tertiary hover:text-primary transition-colors font-medium">Tuition &amp; Admissions Process</Link></li>
            </ul>
          </div>

          {/* Contact Col */}
          <div className="md:col-span-5 space-y-4">
            <h4 className="text-xs font-bold text-primary tracking-widest uppercase font-mono">Contact Information</h4>
            <div className="space-y-3 text-sm text-tertiary leading-relaxed">
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-lg mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
                <span>123 Ethereal Lane, Wonderland District, CA 90210</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-lg mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>call</span>
                <span>+1 (555) 123-4567 (Direct line to Registrar)</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-lg mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>mail</span>
                <span>hello@sashaschool.edu / admissions@sashaschool.edu</span>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-8 border-t border-outline-variant/30 text-center flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-body-md text-xs text-tertiary opacity-80">
            © 2026 Sasha School. All rights reserved. Registered Montessori &amp; Early Learning Academy.
          </p>
          <div className="flex gap-6 text-xs text-tertiary font-mono">
            <Link to="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-primary transition-colors">Parent Handbook Code</Link>
            <Link to="#" className="hover:text-primary transition-colors">Legal Terms</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
