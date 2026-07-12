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
    { name: 'Core Team', path: '/core-team' },
    { name: 'Campus Life', path: '/campus-life' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col relative overflow-x-hidden">
      {/* Background Floating Colorful Doodles */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Doodle 1: Golden Star - Top Left */}
        <span className="material-symbols-outlined absolute text-[#FBBF24] text-7xl md:text-8xl opacity-15 md:opacity-20 doodle-float-1" style={{ top: '12%', left: '4%' }}>star</span>
        {/* Doodle 2: Sky Blue Cloud - Top Right */}
        <span className="material-symbols-outlined absolute text-[#38BDF8] text-8xl md:text-9xl opacity-15 md:opacity-20 doodle-float-2" style={{ top: '15%', right: '5%' }}>cloud</span>
        {/* Doodle 3: Coral Paint Palette - Middle Left */}
        <span className="material-symbols-outlined absolute text-[#F87171] text-7xl md:text-8xl opacity-15 md:opacity-20 doodle-float-3" style={{ top: '48%', left: '3%' }}>palette</span>
        {/* Doodle 4: Cherry Pink Heart - Middle Right */}
        <span className="material-symbols-outlined absolute text-[#F472B6] text-6xl md:text-7xl opacity-20 md:opacity-25 doodle-float-1" style={{ top: '35%', right: '4%' }}>favorite</span>
        {/* Doodle 5: Mint Green Sprout - Bottom Left */}
        <span className="material-symbols-outlined absolute text-[#34D399] text-7xl md:text-8xl opacity-15 md:opacity-20 doodle-float-2" style={{ bottom: '20%', left: '8%' }}>spa</span>
        {/* Doodle 6: Orange Sun - Bottom Right */}
        <span className="material-symbols-outlined absolute text-[#FB923C] text-8xl md:text-9xl opacity-10 md:opacity-15 doodle-float-3" style={{ bottom: '10%', right: '6%' }}>wb_sunny</span>
        {/* Doodle 7: Violet Book - Bottom Center Left */}
        <span className="material-symbols-outlined absolute text-[#A78BFA] text-6xl md:text-7xl opacity-15 md:opacity-20 doodle-float-1" style={{ bottom: '30%', left: '25%' }}>menu_book</span>
        {/* Doodle 8: Teal Rocket - Top Center Right */}
        <span className="material-symbols-outlined absolute text-[#2DD4BF] text-7xl md:text-8xl opacity-10 md:opacity-20 doodle-float-2" style={{ top: '25%', right: '30%' }}>rocket_launch</span>
        {/* Doodle 9: Golden Lightbulb - Bottom Right Center */}
        <span className="material-symbols-outlined absolute text-[#FDE047] text-7xl md:text-8xl opacity-15 md:opacity-20 doodle-float-1" style={{ bottom: '25%', right: '35%' }}>lightbulb</span>
        {/* Doodle 10: Yellow Glowing Bolt - Top Center */}
        <span className="material-symbols-outlined absolute text-[#FBBF24] text-6xl md:text-7xl opacity-25 md:opacity-30 doodle-float-glow" style={{ top: '18%', left: '50%', transform: 'translateX(-50%)' }}>bolt</span>
        {/* Doodle 11: Yellow Glowing Star - Bottom Left */}
        <span className="material-symbols-outlined absolute text-[#FDE047] text-5xl md:text-6xl opacity-30 md:opacity-35 doodle-float-glow" style={{ bottom: '40%', left: '15%' }}>stars</span>
        {/* Doodle 11: Lavender Butterfly - Middle Left Center */}
        <span className="material-symbols-outlined absolute text-[#C084FC] text-6xl md:text-7xl opacity-20 md:opacity-25 doodle-float-2" style={{ top: '60%', left: '20%' }}>cruelty_free</span>
        {/* Doodle 12: Sky Blue Kite - Middle Right Center */}
        <span className="material-symbols-outlined absolute text-[#38BDF8] text-7xl md:text-8xl opacity-15 md:opacity-20 doodle-float-3" style={{ top: '65%', right: '22%' }}>sailing</span>
      </div>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 md:px-8 py-3 mx-auto bg-surface/80 backdrop-blur-md rounded-full transition-all duration-300 border border-white/40 ${
          scrolled ? 'shadow-md mt-2 w-[95%]' : 'shadow-[0_10px_30px_rgba(139,92,246,0.1)] mt-4 md:mt-6 w-[90%]'
        }`}
      >
        <Link to="/" className="flex items-center">
          <img src="/logo/logo.png" alt="SASHA School" className="h-14 md:h-16 w-auto" />
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
            <Link to="/">
<img src="/logo/logo.png" alt="SASHA School" className="h-14 w-auto" />
          </Link>
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

      <footer className="w-full py-16 px-gutter bg-gradient-to-b from-surface via-[#FFFBEB]/20 to-secondary-fixed/20 border-t border-[#FDE68A]/30 mt-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 text-left mb-12">
          {/* Brand Col */}
          <div className="md:col-span-4 space-y-4">
            <Link to="/" className="inline-block">
              <img src="/logo/logo.png" alt="SASHA School" className="h-16 w-auto" />
            </Link>
            <p className="font-body-md text-sm text-tertiary leading-relaxed">
              There is more in LIFE than ACADEMICS, but we are good at that too
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
              <li><Link to="/" className="text-tertiary hover:text-primary transition-colors font-medium">Home</Link></li>
              <li><Link to="/about" className="text-tertiary hover:text-primary transition-colors font-medium">About Us</Link></li>
              <li><Link to="/programs" className="text-tertiary hover:text-primary transition-colors font-medium">Our Curricula</Link></li>
              <li><Link to="/core-team" className="text-tertiary hover:text-primary transition-colors font-medium">Core Team</Link></li>
              <li><Link to="/campus-life" className="text-tertiary hover:text-primary transition-colors font-medium">Features &amp; Activities</Link></li>
              <li><Link to="/gallery" className="text-tertiary hover:text-primary transition-colors font-medium">Gallery</Link></li>
              <li><Link to="/admissions" className="text-tertiary hover:text-primary transition-colors font-medium">Admissions</Link></li>
            </ul>
          </div>

          {/* Curricula */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-xs font-bold text-primary tracking-widest uppercase font-mono">Curricula</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/programs" className="text-tertiary hover:text-primary transition-colors font-medium">Montessori Education</Link></li>
              <li><Link to="/programs" className="text-tertiary hover:text-primary transition-colors font-medium">IGCSE</Link></li>
              <li><Link to="/programs" className="text-tertiary hover:text-primary transition-colors font-medium">Waldorf Education</Link></li>
              <li><Link to="/programs" className="text-tertiary hover:text-primary transition-colors font-medium">Reggio Emilio</Link></li>
            </ul>
          </div>

          {/* Contact Col */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-bold text-primary tracking-widest uppercase font-mono">Contact Information</h4>
            <div className="space-y-3 text-sm text-tertiary leading-relaxed">
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-lg mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
                <span>Kulathupalayam Kovaipudur, Coimbatore</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-lg mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>call</span>
                <span>+91 97501 70007</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-lg mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>mail</span>
                <span>sashaschoolcbe@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-8 border-t border-outline-variant/30 text-center flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-body-md text-xs text-tertiary opacity-80">
            © Sasha School of Life. Designed and Developed by Yatratechs.
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
