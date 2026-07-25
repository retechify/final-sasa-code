import { Link, useLocation } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for scroll reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    const targets = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
    targets.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [location.pathname]);

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

  const [fabOpen, setFabOpen] = useState(false);

  const whatsappNumber = '919750170007';
  const whatsappMessage = encodeURIComponent("Hello! I would like to know more about SASHA School of Life.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const socialLinks = [
    {
      name: 'WhatsApp',
      url: whatsappUrl,
      color: 'hover:bg-[#25D366] hover:text-white',
      bgColor: 'bg-white text-[#25D366]',
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      )
    },
    {
      name: 'Google Business',
      url: 'https://share.google/FmgJGbqSkDUe6rP79',
      color: 'hover:bg-[#4285F4] hover:text-white',
      bgColor: 'bg-white text-[#4285F4]',
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M12.24 10.285V13.4h6.887c-.275 1.565-1.88 4.604-6.887 4.604-4.33 0-7.859-3.578-7.859-8s3.53-8 7.859-8c2.46 0 4.105 1.025 5.047 1.926l2.427-2.334C17.955 2.192 15.34 1 12.24 1 5.26 1 0 6.26 0 12.75s5.26 11.75 12.24 11.75c7.29 0 12.13-5.12 12.13-12.35 0-.83-.09-1.465-.2-1.865H12.24z"/>
        </svg>
      )
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/sashaschoolforlife?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
      color: 'hover:bg-gradient-to-tr hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7] hover:text-white',
      bgColor: 'bg-white text-[#ee2a7b]',
      icon: (
        <svg className="w-5 h-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      )
    },
    {
      name: 'YouTube',
      url: 'https://youtube.com/@sashaschoolforlife?si=GB5j83TC7xkW3TOl',
      color: 'hover:bg-[#FF0000] hover:text-white',
      bgColor: 'bg-white text-[#FF0000]',
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.108C19.53 3.5 12 3.5 12 3.5s-7.53 0-9.388.555A3.002 3.002 0 0 0 .502 6.163C0 8.07 0 12 0 12s0 3.93.502 5.837a3.003 3.003 0 0 0 2.11 2.108C4.47 20.5 12 20.5 12 20.5s7.53 0 9.388-.555a3.002 3.002 0 0 0 2.11-2.108C24 15.93 24 12 24 12s0-3.93-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      )
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/sashaschoolforlife',
      color: 'hover:bg-[#1877F2] hover:text-white',
      bgColor: 'bg-white text-[#1877F2]',
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/>
        </svg>
      )
    }
  ];

  return (
    <div className="min-h-screen flex flex-col relative overflow-x-hidden">
      {/* Background Floating Colorful Doodles */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        {/* Doodle 1: Golden Star - Top Left */}
        <span className="material-symbols-outlined absolute text-[#FBBF24] text-8xl md:text-9xl opacity-20 md:opacity-30 doodle-float-glow" style={{ top: '10%', left: '3%' }}>star</span>
        {/* Doodle 2: Sky Blue Cloud - Top Right */}
        <span className="material-symbols-outlined absolute text-[#38BDF8] text-9xl md:text-[10rem] opacity-15 md:opacity-20 doodle-float-2" style={{ top: '12%', right: '3%' }}>cloud</span>
        {/* Doodle 3: Coral Paint Palette - Middle Left */}
        <span className="material-symbols-outlined absolute text-[#F87171] text-8xl md:text-9xl opacity-20 md:opacity-25 doodle-float-glow-pink" style={{ top: '45%', left: '2%' }}>palette</span>
        {/* Doodle 4: Cherry Pink Heart - Middle Right */}
        <span className="material-symbols-outlined absolute text-[#F472B6] text-7xl md:text-9xl opacity-20 md:opacity-30 doodle-float-glow-pink" style={{ top: '33%', right: '3%' }}>favorite</span>
        {/* Doodle 5: Mint Green Sprout - Bottom Left */}
        <span className="material-symbols-outlined absolute text-[#34D399] text-8xl md:text-9xl opacity-20 md:opacity-25 doodle-float-glow-green" style={{ bottom: '18%', left: '6%' }}>spa</span>
        {/* Doodle 6: Orange Sun - Bottom Right */}
        <span className="material-symbols-outlined absolute text-[#FB923C] text-9xl md:text-[10rem] opacity-20 md:opacity-25 doodle-float-glow-orange" style={{ bottom: '8%', right: '4%' }}>wb_sunny</span>
        {/* Doodle 7: Violet Book - Bottom Center Left */}
        <span className="material-symbols-outlined absolute text-[#A78BFA] text-7xl md:text-8xl opacity-20 md:opacity-25 doodle-float-glow-purple" style={{ bottom: '28%', left: '22%' }}>menu_book</span>
        {/* Doodle 8: Teal Rocket - Top Center Right */}
        <span className="material-symbols-outlined absolute text-[#2DD4BF] text-8xl md:text-9xl opacity-20 md:opacity-25 doodle-float-glow-teal" style={{ top: '22%', right: '28%' }}>rocket_launch</span>
        {/* Doodle 9: Golden Lightbulb - Bottom Right Center */}
        <span className="material-symbols-outlined absolute text-[#FDE047] text-8xl md:text-9xl opacity-20 md:opacity-30 doodle-float-glow" style={{ bottom: '22%', right: '32%' }}>lightbulb</span>
        {/* Doodle 10: Yellow Glowing Bolt - Top Center */}
        <span className="material-symbols-outlined absolute text-[#FBBF24] text-8xl md:text-9xl opacity-30 md:opacity-40 doodle-float-glow" style={{ top: '15%', left: '48%', transform: 'translateX(-50%)' }}>bolt</span>
        {/* Doodle 11: Yellow Glowing Star - Bottom Left */}
        <span className="material-symbols-outlined absolute text-[#FDE047] text-7xl md:text-8xl opacity-35 md:opacity-40 doodle-float-glow" style={{ bottom: '38%', left: '12%' }}>stars</span>
        {/* Doodle 12: Lavender Butterfly - Middle Left Center */}
        <span className="material-symbols-outlined absolute text-[#C084FC] text-7xl md:text-8xl opacity-20 md:opacity-25 doodle-float-glow-purple" style={{ top: '58%', left: '18%' }}>cruelty_free</span>
        {/* Doodle 13: Sky Blue Kite - Middle Right Center */}
        <span className="material-symbols-outlined absolute text-[#38BDF8] text-8xl md:text-9xl opacity-20 md:opacity-25 doodle-float-glow-blue" style={{ top: '62%', right: '20%' }}>sailing</span>
        {/* Doodle 14: Coral Music Note - Top Center Left */}
        <span className="material-symbols-outlined absolute text-[#FB7185] text-8xl md:text-9xl opacity-20 md:opacity-25 doodle-float-glow-pink" style={{ top: '30%', left: '12%' }}>music_note</span>
        {/* Doodle 15: Emerald Colorize - Bottom Center */}
        <span className="material-symbols-outlined absolute text-[#34D399] text-6xl md:text-7xl opacity-20 md:opacity-25 doodle-float-glow-green" style={{ bottom: '45%', left: '45%', transform: 'translateX(-50%)' }}>colorize</span>
        {/* Doodle 16: Rose Diamond - Middle Far Right */}
        <span className="material-symbols-outlined absolute text-[#F472B6] text-6xl md:text-8xl opacity-20 md:opacity-25 doodle-float-glow-pink" style={{ top: '50%', right: '10%' }}>diamond</span>
        {/* Doodle 17: Amber Auto Awesome - Bottom Far Right */}
        <span className="material-symbols-outlined absolute text-[#F59E0B] text-7xl md:text-8xl opacity-20 md:opacity-25 doodle-float-glow" style={{ bottom: '15%', right: '18%' }}>auto_awesome</span>
        {/* Doodle 18: Violet Psychology - Top Far Left */}
        <span className="material-symbols-outlined absolute text-[#A78BFA] text-6xl md:text-7xl opacity-15 md:opacity-20 doodle-float-3" style={{ top: '8%', left: '22%' }}>psychology</span>
        {/* Doodle 19: Teal Toppings - Middle Left */}
        <span className="material-symbols-outlined absolute text-[#2DD4BF] text-6xl md:text-8xl opacity-20 md:opacity-25 doodle-float-glow-teal" style={{ top: '70%', left: '35%' }}>toys</span>
        {/* Doodle 20: Warm Sunset - Top Right */}
        <span className="material-symbols-outlined absolute text-[#FB923C] text-6xl md:text-8xl opacity-20 md:opacity-25 doodle-float-glow-orange" style={{ top: '20%', right: '15%' }}>flare</span>
      </div>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 max-w-7xl flex justify-between items-center px-6 md:px-8 py-3 mx-auto bg-golden-soft/70 backdrop-blur-md rounded-full transition-all duration-300 border border-golden-border/40 ${
          scrolled ? 'shadow-md mt-2 w-[95%]' : 'shadow-[0_10px_30px_rgba(253,224,71,0.15)] mt-4 md:mt-6 w-[90%]'
        }`}
      >
        <Link to="/" className="flex items-center">
          <img src="/logo/logo.png" alt="SASHA School" className="h-10 md:h-14 w-auto drop-shadow-sm" />
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
        <div className="fixed inset-0 z-[60] bg-surface/95 backdrop-blur-lg flex flex-col items-center justify-center gap-8 md:hidden animate-fade-in">
          <div className="absolute top-6 left-6">
            <Link to="/" onClick={() => setMobileMenuOpen(false)}>
              <img src="/logo/logo.png" alt="SASHA School" className="h-12 w-auto drop-shadow-sm" />
            </Link>
          </div>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="absolute top-6 right-6 flex items-center justify-center p-2 text-primary hover:text-primary-container focus:outline-none"
            aria-label="Close Menu"
          >
            <span className="material-symbols-outlined text-3xl">close</span>
          </button>
          
          <div className="flex flex-col items-center gap-6">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
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
            onClick={() => setMobileMenuOpen(false)}
            className="mt-4 bg-gradient-to-r from-[#8B5CF6] to-[#C4B5FD] text-on-primary px-8 py-3 rounded-full font-headline-md shadow-md hover:scale-95 active:scale-90 transition-transform"
          >
            Book a Campus Visit
          </Link>
        </div>
      )}

      <div className="flex-grow page-enter">
        {children}
      </div>

      <footer className="w-full py-16 px-gutter bg-gradient-to-b from-surface via-[#FEFCE8]/20 to-secondary-fixed/20 border-t border-[#FEF08A]/30 mt-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 text-left mb-12">
          {/* Brand Col */}
          <div className="md:col-span-4 space-y-4">
            <Link to="/" className="inline-block">
              <img src="/logo/logo.png" alt="SASHA School" className="h-16 md:h-20 w-auto drop-shadow-sm" />
            </Link>
            <p className="font-body-md text-sm text-tertiary leading-relaxed">
              There is more in LIFE than ACADEMICS, but we are good at that too
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a 
                  key={social.name}
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={`w-9 h-9 rounded-full border border-outline-variant/50 flex items-center justify-center text-primary ${social.color} transition-all`}
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
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
              <li><Link to="/programs" className="text-tertiary hover:text-primary transition-colors font-medium">Reggio Emilia</Link></li>
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
              <a href={`tel:+919750170007`} aria-label="Call us" className="flex items-start gap-3 group">
                <span className="material-symbols-outlined text-primary text-lg mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>call</span>
                <span className="group-hover:text-primary transition-colors">+91 97501 70007</span>
              </a>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 group">
                <svg className="w-5 h-5 fill-current text-[#25D366] shrink-0 mt-0.5" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <span className="group-hover:text-[#25D366] transition-colors">Chat on WhatsApp</span>
              </a>
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-lg mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>mail</span>
                <span>sashaschoolcbe@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-8 border-t border-outline-variant/30 text-center flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-body-md text-xs text-tertiary opacity-80">
            © Sasha School of Life. Designed and Developed by Retechify.
          </p>
          <div className="flex gap-6 text-xs text-tertiary font-mono"></div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-6 md:bottom-10 left-6 md:left-10 z-50 w-14 h-14 rounded-full shadow-[0_8px_30px_rgba(139,92,246,0.3)] flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-300 border-2 border-white/80 bg-white text-primary ${showScrollTop ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-8 pointer-events-none'}`}
        aria-label="Scroll to top"
      >
        <span className="material-symbols-outlined text-3xl">keyboard_arrow_up</span>
      </button>

      {/* Premium Floating Speed Dial Button */}
      <div className="fixed bottom-6 md:bottom-10 right-6 md:right-10 z-50 flex flex-col-reverse items-end gap-4 pointer-events-none">
        {/* Main Floating Trigger Button */}
        <button 
          onClick={() => setFabOpen(!fabOpen)}
          className={`w-16 h-16 rounded-full shadow-[0_8px_30px_rgba(139,92,246,0.25)] flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-20 duration-500 relative border-2 border-white/80 bg-white text-primary pointer-events-auto`}
          aria-label="Connect with us"
        >
          {/* Subtle pulse ring when closed */}
          {!fabOpen && (
            <span className="absolute inset-0 rounded-full bg-primary/25 animate-ping opacity-60 pointer-events-none" style={{ animationDuration: '2.5s' }}></span>
          )}
          <div className={`transition-all duration-500 ease-out flex items-center justify-center ${fabOpen ? 'rotate-90 scale-0 opacity-0 absolute' : 'rotate-0 scale-100 opacity-100'}`}>
            <img src="/logo/logo_icon.png" alt="SASHA School" className="w-8 h-8 object-contain" />
          </div>
          <span className={`material-symbols-outlined text-3xl transition-all duration-500 ease-out ${fabOpen ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0 absolute'}`}>
            close
          </span>
        </button>

        {/* Floating Icons */}
        <div className={`flex flex-col items-end gap-4 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] origin-bottom ${fabOpen ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto' : 'opacity-0 scale-50 translate-y-12 pointer-events-none'}`}>
          {socialLinks.map((social, idx) => (
            <div key={social.name} className="flex items-center gap-4 group" style={{ transitionDelay: `${(socialLinks.length - idx) * 50}ms` }}>
              {/* Tooltip Label */}
              <span className="bg-white/95 backdrop-blur-md text-primary text-sm font-bold px-4 py-2 rounded-xl shadow-xl border border-white/50 whitespace-nowrap opacity-0 group-hover:opacity-100 group-hover:-translate-x-2 transition-all pointer-events-none duration-300">
                {social.name}
              </span>
              {/* Icon Action Button */}
              <a 
                href={social.url}
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label={social.name}
                className={`w-14 h-14 rounded-full shadow-[0_8px_20px_rgba(0,0,0,0.1)] flex items-center justify-center border-2 border-white/80 transition-all duration-300 hover:scale-110 active:scale-95 ${social.bgColor} ${social.color}`}
              >
                {social.icon}
              </a>
            </div>
          ))}
        </div>


      </div>
    </div>
  );
}
