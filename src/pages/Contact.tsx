import React, { useState } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      {/* Background Elements */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-[-20%] left-[-50%] w-[200%] h-full z-[-1]" style={{
          background: 'radial-gradient(circle at 50% 100%, transparent 40%, rgba(139, 92, 246, 0.05) 45%, rgba(253, 208, 234, 0.05) 55%, transparent 60%)'
        }}></div>
        <div className="absolute w-full h-[400px] bottom-0 z-[-1]" style={{
          background: 'linear-gradient(to top, #fef7ff 0%, transparent 100%)'
        }}></div>
        
        {/* Animated Doodles */}
        <span className="material-symbols-outlined floating-doodle text-primary" style={{ top: '15%', left: '10%', fontSize: '48px' }}>auto_awesome</span>
        <span className="material-symbols-outlined floating-doodle text-secondary" style={{ top: '25%', right: '15%', fontSize: '32px', animationDelay: '1s' }}>cloud</span>
        <span className="material-symbols-outlined floating-doodle text-tertiary" style={{ bottom: '30%', left: '20%', fontSize: '40px', animationDelay: '2s' }}>cruelty_free</span>
        <span className="material-symbols-outlined floating-doodle text-primary-fixed-dim" style={{ bottom: '20%', right: '10%', fontSize: '56px', animationDelay: '1.5s' }}>potted_plant</span>
        <span className="material-symbols-outlined floating-doodle text-secondary-fixed-dim" style={{ top: '50%', left: '5%', fontSize: '36px', animationDelay: '0.5s' }}>draw</span>
      </div>

      <main className="relative pt-40 pb-20 px-gutter max-w-7xl mx-auto">
        {/* Header */}
        <header className="text-center mb-20">
          <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-4 animate-fade-in">Start Your Journey</h1>
          <p className="font-body-lg text-body-lg text-tertiary max-w-2xl mx-auto">We're here to nurture your child's curiosity and support your family. Reach out to our team of dedicated educators.</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Info Cards Section */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-6">
            {/* Contact Card 1 */}
            <div className="bg-secondary-fixed/40 p-8 rounded-lg border border-white/40 flex items-start gap-4 hover:translate-y-[-4px] transition-transform duration-300">
              <div className="bg-white/80 p-3 rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>mail</span>
              </div>
              <div>
                <h3 className="font-headline-md text-secondary mb-1">Email Us</h3>
                <p className="font-body-md text-secondary">hello@sashaschool.edu</p>
                <p className="font-label-sm text-secondary-fixed-dim mt-2">Available Mon-Fri, 8am - 5pm</p>
              </div>
            </div>

            {/* Contact Card 2 */}
            <div className="bg-tertiary-fixed/40 p-8 rounded-lg border border-white/40 flex items-start gap-4 hover:translate-y-[-4px] transition-transform duration-300">
              <div className="bg-white/80 p-3 rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>call</span>
              </div>
              <div>
                <h3 className="font-headline-md text-tertiary mb-1">Call Us</h3>
                <p className="font-body-md text-tertiary">+1 (555) 123-4567</p>
                <p className="font-label-sm text-tertiary-fixed-dim mt-2">Direct line to Admissions</p>
              </div>
            </div>

            {/* Contact Card 3 */}
            <div className="bg-primary-fixed/40 p-8 rounded-lg border border-white/40 flex items-start gap-4 hover:translate-y-[-4px] transition-transform duration-300">
              <div className="bg-white/80 p-3 rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
              </div>
              <div>
                <h3 className="font-headline-md text-primary mb-1">Visit Campus</h3>
                <p className="font-body-md text-primary">123 Ethereal Lane,<br/>Wonderland District, CA 90210</p>
              </div>
            </div>

            {/* Map Section (Simulated Image) */}
            <div className="rounded-lg overflow-hidden h-48 border border-white/40 shadow-sm">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuALBnzc_yu_YvaOdknCwX3FrhptVvLbgvtLETy7BbmfQdcHJSO51AckpyXF0sc_e4x623TfFACEYdeXq1P7MSL2CghFrKrZ2CX0t6GmfHgV0oaAPrmvDGRbFDDu1Mmy_fw_G5P7rMgBZuAK2T5Pd4862WEPOfR-WB73U1p6z2e0ZRc7LTd7kkDF5cuBLW1C2obi44poktBXrZsgP0VzPAcyS1DfEsRzUZkvl5ePVDaluoaGcSqTWupH57nNmkJFGKIro7WcwZ4WipmM" 
                alt="Stylized map representation" 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="lg:col-span-7">
            <div className="glass-card p-8 md:p-12 rounded-xl shadow-[0_20px_50px_rgba(139,92,246,0.1)] border border-white/60 min-h-[400px] flex flex-col justify-center">
              {submitted ? (
                <div className="text-center py-8 space-y-6 animate-fade-in">
                  <div className="w-20 h-20 bg-secondary-fixed/50 rounded-full flex items-center justify-center mx-auto">
                    <span className="material-symbols-outlined text-primary text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>done_all</span>
                  </div>
                  <h3 className="font-headline-md text-primary text-2xl font-bold">Message Sent!</h3>
                  <p className="font-body-md text-tertiary max-w-md mx-auto">
                    Thank you for reaching out to Sasha School of Life. Our dedicated team of educators will review your message and connect with you shortly.
                  </p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="bg-gradient-to-r from-[#8B5CF6] to-[#C4B5FD] text-white font-headline-md px-8 py-3 rounded-full shadow-md hover:scale-105 active:scale-95 transition-all duration-300 mx-auto block"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="font-headline-md text-primary mb-8">Send us a Message</h2>
                  <form 
                    action="#" 
                    className="space-y-6" 
                    onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="font-label-sm text-tertiary px-4" htmlFor="first_name">First Name</label>
                        <input className="w-full bg-surface-container-lowest border border-outline-variant/30 rounded-full px-6 py-3 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" id="first_name" required type="text" />
                      </div>
                      <div className="space-y-2">
                        <label className="font-label-sm text-tertiary px-4" htmlFor="last_name">Last Name</label>
                        <input className="w-full bg-surface-container-lowest border border-outline-variant/30 rounded-full px-6 py-3 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" id="last_name" required type="text" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="font-label-sm text-tertiary px-4" htmlFor="email">Email Address</label>
                      <input className="w-full bg-surface-container-lowest border border-outline-variant/30 rounded-full px-6 py-3 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" id="email" required type="email" />
                    </div>
                    <div className="space-y-2">
                      <label className="font-label-sm text-tertiary px-4" htmlFor="interest">Primary Interest</label>
                      <select className="w-full bg-surface-container-lowest border border-outline-variant/30 rounded-full px-6 py-3 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all appearance-none" id="interest">
                        <option>General Inquiry</option>
                        <option>Preschool Programs</option>
                        <option>Elementary Programs</option>
                        <option>Admissions &amp; Enrollment</option>
                        <option>Career Opportunities</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="font-label-sm text-tertiary px-4" htmlFor="message">Your Message</label>
                      <textarea className="w-full bg-surface-container-lowest border border-outline-variant/30 rounded-lg px-6 py-4 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" id="message" required rows={4}></textarea>
                    </div>
                    <button className="w-full bg-gradient-to-r from-[#8B5CF6] to-[#C4B5FD] text-white font-headline-md py-4 rounded-full shadow-lg hover:shadow-xl hover:translate-y-[-2px] active:translate-y-[1px] transition-all duration-300 mt-4 flex items-center justify-center gap-2" type="submit">
                      <span>Nurture Connection</span>
                      <span className="material-symbols-outlined">send</span>
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
