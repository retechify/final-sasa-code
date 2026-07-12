import React, { useState } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      {/* Decorative background doodles and gradients */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-[-20%] left-[-50%] w-[200%] h-full z-[-1]" style={{
          background: 'radial-gradient(circle at 50% 100%, transparent 40%, rgba(139, 92, 246, 0.05) 45%, rgba(253, 208, 234, 0.05) 55%, transparent 60%)'
        }}></div>
        <div className="absolute w-full h-[400px] bottom-0 z-[-1]" style={{
          background: 'linear-gradient(to top, #fef7ff 0%, transparent 100%)'
        }}></div>
      </div>

      <main className="relative pt-40 pb-20 px-gutter max-w-7xl mx-auto z-10">
        <header className="text-center mb-20">
          <span className="golden-badge px-4 py-1.5 rounded-full text-label-sm font-label-sm mb-4 inline-block uppercase tracking-wider">GET IN TOUCH</span>
          <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-4 animate-fade-in">Contact Us</h1>
          <p className="font-body-lg text-body-lg text-tertiary max-w-2xl mx-auto leading-relaxed">
            Get in touch with us - we'd love to hear from you and help with any questions about SASHA School.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Info boxes */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-6">
            {/* Email card */}
            <div className="bg-secondary-fixed/30 p-8 rounded-2xl border border-white/40 flex items-start gap-5 hover:translate-y-[-4px] transition-transform duration-300 shadow-sm">
              <div className="bg-white/80 p-3.5 rounded-full flex items-center justify-center text-secondary shrink-0 shadow-inner">
                <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>mail</span>
              </div>
              <div>
                <h3 className="font-headline-md text-lg text-secondary font-bold mb-1">Email Us</h3>
                <p className="font-body-md text-sm text-tertiary font-medium">sashaschoolcbe@gmail.com</p>
                <p className="font-label-sm text-xs text-secondary-fixed-variant mt-2 font-semibold font-mono">We respond within 24 hours</p>
              </div>
            </div>

            {/* Call card */}
            <div className="golden-glass-card p-8 rounded-2xl flex items-start gap-5 hover:translate-y-[-4px] transition-transform duration-300 shadow-sm">
              <div className="bg-[#FEF3C7] p-3.5 rounded-full flex items-center justify-center text-[#92400E] shrink-0 shadow-inner">
                <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>call</span>
              </div>
              <div>
                <h3 className="font-headline-md text-lg text-[#92400E] font-bold mb-1">Call Us</h3>
                <p className="font-body-md text-sm text-tertiary font-medium">+91 97501 70007</p>
                <p className="font-label-sm text-xs text-tertiary-fixed-variant mt-2 font-semibold font-mono">Call us during school hours</p>
              </div>
            </div>

            {/* Location card */}
            <div className="bg-primary-fixed/30 p-8 rounded-2xl border border-white/40 flex items-start gap-5 hover:translate-y-[-4px] transition-transform duration-300 shadow-sm">
              <div className="bg-white/80 p-3.5 rounded-full flex items-center justify-center text-primary shrink-0 shadow-inner">
                <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
              </div>
              <div>
                <h3 className="font-headline-md text-lg text-primary font-bold mb-1">Visit Campus</h3>
                <p className="font-body-md text-sm text-tertiary font-medium leading-relaxed">
                  Kulathupalayam Road, Kovaipudur,<br/>Coimbatore, Tamil Nadu 641042
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Contact form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-8 md:p-12 rounded-2xl shadow-[0_20px_50px_rgba(139,92,246,0.1)] border border-white/60 min-h-[480px] flex flex-col justify-center bg-white/70">
              {submitted ? (
                <div className="text-center py-8 space-y-6 animate-fade-in">
                  <div className="w-20 h-20 bg-secondary-fixed/50 rounded-full flex items-center justify-center mx-auto shadow-md">
                    <span className="material-symbols-outlined text-primary text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>done_all</span>
                  </div>
                  <h3 className="font-display-lg text-primary text-3xl font-bold">Thank You!</h3>
                  <p className="font-body-lg text-body-md text-tertiary max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out to SASHA School of Life. Our team will review your enquiry and connect with you shortly.
                  </p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="primary-pill text-white font-bold px-8 py-3.5 rounded-full shadow-lg hover:scale-105 transition-transform mx-auto block mt-4"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="font-display-lg text-2xl text-primary font-bold mb-8">Have a Question? Let's Talk!</h2>
                  <form 
                    action="#" 
                    className="space-y-6" 
                    onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="font-label-sm text-xs font-semibold text-tertiary px-4" htmlFor="first_name">First Name</label>
                        <input 
                          className="w-full bg-surface-container-lowest border border-outline-variant/30 rounded-full px-6 py-3.5 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-sm font-medium" 
                          id="first_name" 
                          required 
                          type="text" 
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="font-label-sm text-xs font-semibold text-tertiary px-4" htmlFor="last_name">Last Name</label>
                        <input 
                          className="w-full bg-surface-container-lowest border border-outline-variant/30 rounded-full px-6 py-3.5 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-sm font-medium" 
                          id="last_name" 
                          required 
                          type="text" 
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="font-label-sm text-xs font-semibold text-tertiary px-4" htmlFor="email">Email Address</label>
                      <input 
                        className="w-full bg-surface-container-lowest border border-outline-variant/30 rounded-full px-6 py-3.5 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-sm font-medium" 
                        id="email" 
                        required 
                        type="email" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="font-label-sm text-xs font-semibold text-tertiary px-4" htmlFor="interest">Select Program of Interest</label>
                      <select 
                        className="w-full bg-surface-container-lowest border border-outline-variant/30 rounded-full px-6 py-3.5 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-sm font-medium appearance-none" 
                        id="interest"
                      >
                        <option>Montessori Education</option>
                        <option>Cambridge IGCSE</option>
                        <option>Waldorf Education</option>
                        <option>Reggio Emilia</option>
                        <option>General Inquiry</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="font-label-sm text-xs font-semibold text-tertiary px-4" htmlFor="message">Your Message</label>
                      <textarea 
                        className="w-full bg-surface-container-lowest border border-outline-variant/30 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-sm font-medium" 
                        id="message" 
                        required 
                        rows={4}
                      ></textarea>
                    </div>
                    <button 
                      className="w-full golden-pill font-bold py-4 rounded-full shadow-lg hover:shadow-xl hover:translate-y-[-2px] active:translate-y-[1px] transition-all duration-300 mt-4 flex items-center justify-center gap-2" 
                      type="submit"
                    >
                      <span>Get in Touch</span>
                      <span className="material-symbols-outlined text-lg">send</span>
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </main>

      {/* Full-width Map Section */}
      <section className="w-full">
        <div className="text-center mb-8 px-gutter">
          <span className="golden-badge px-4 py-1.5 rounded-full text-label-sm font-label-sm mb-3 inline-block uppercase tracking-wider">FIND US HERE</span>
          <h2 className="font-display-lg text-2xl md:text-3xl text-primary font-bold">Our Location</h2>
        </div>
        <div className="relative w-full h-[400px] md:h-[500px] shadow-[0_20px_60px_rgba(139,92,246,0.15)]">
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none z-10"></div>
          <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-xl shadow-md flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
            <span className="font-label-sm text-xs font-semibold text-primary">Sasha School Of Life</span>
          </div>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d568.9855970268021!2d76.94196029738039!3d10.943497089468677!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85bf5e6219163%3A0xe7fd9e1cb8a8404c!2sSasha%20School%20Of%20Life!5e1!3m2!1sen!2sin!4v1783857467797!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Sasha School Of Life Location Map"
            className="w-full h-full"
          ></iframe>
        </div>
      </section>
    </>
  );
}