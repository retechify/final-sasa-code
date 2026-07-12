import React, { useState } from 'react';

const SHEET_URL = 'https://script.google.com/macros/s/AKfycbzlynhSJyjLLEwJcKYMoSe50Il3Kb-dqZhzZlRgn_342c2wtXbMVG2VLJzqWkD7ovyY/exec';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const initialForm = {
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    child_name: '',
    interest: 'Montessori Education',
    hear_about: 'Google Search',
    message: ''
  };

  const [formData, setFormData] = useState(initialForm);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    if (id === 'phone') {
      setFormData(prev => ({ ...prev, phone: value.replace(/\D/g, '') }));
    } else {
      setFormData(prev => ({ ...prev, [id]: value }));
    }
  };

  const resetForm = () => setFormData(initialForm);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    try {
      const params = new URLSearchParams();
      (Object.entries(formData) as [string, string][]).forEach(([key, val]) => params.append(key, val));
      await fetch(SHEET_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: params
      });
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    } finally {
      setSending(false);
    }
  };

  return (
    <main className="relative pt-32 pb-0 overflow-x-hidden">
      {/* Background washes */}
      <div className="watercolor-gradient absolute -top-40 -left-20 w-[600px] h-[600px] rounded-full blur-3xl opacity-40 pointer-events-none"></div>
      <div className="watercolor-gradient absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full blur-3xl opacity-30 pointer-events-none"></div>
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-[#FEF9C3]/20 rounded-full blur-3xl pointer-events-none"></div>

      {/* ─── HERO HEADER ─── */}
      <section className="max-w-7xl mx-auto px-gutter py-12 md:py-20 text-center relative z-10">
        <span className="golden-badge px-4 py-1.5 rounded-full text-label-sm font-label-sm mb-6 inline-block uppercase tracking-wider">GET IN TOUCH</span>
        <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-4">
          Contact <span className="text-[#F59E0B]">Us</span>
        </h1>
        <p className="font-body-lg text-body-lg text-tertiary max-w-2xl mx-auto leading-relaxed">
          Get in touch with us - we'd love to hear from you and help with any questions about SASHA School.
        </p>
      </section>

      {/* ─── CONTACT INFO CARDS + FORM ─── */}
      <section className="max-w-7xl mx-auto px-gutter pb-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Info Cards */}
          <div className="lg:col-span-5 space-y-5">
            {/* Email */}
            <div className="bg-gradient-to-br from-[#E9DDFF] to-[#F5F3FF] p-7 rounded-[1.5rem] border border-white/50 flex items-start gap-5 group hover:-translate-y-1 transition-all duration-300 shadow-md hover:shadow-lg">
              <div className="w-13 h-13 bg-white/80 p-3.5 rounded-2xl flex items-center justify-center text-primary shrink-0 shadow-sm group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>mail</span>
              </div>
              <div>
                <h3 className="font-headline-md text-lg text-primary font-bold mb-1">Email Us</h3>
                <p className="font-body-md text-sm text-tertiary font-medium">sashaschoolcbe@gmail.com</p>
                <span className="inline-flex items-center gap-1 mt-2 text-xs text-primary/70 font-mono font-semibold">
                  <span className="material-symbols-outlined text-xs text-[#F59E0B]">schedule</span>
                  We respond within 24 hours
                </span>
              </div>
            </div>

            {/* Phone */}
            <a href="tel:+919750170007" className="golden-glass-card p-7 rounded-[1.5rem] flex items-start gap-5 group hover:-translate-y-1 transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer block">
              <div className="w-13 h-13 bg-[#FEF9C3] p-3.5 rounded-2xl flex items-center justify-center text-[#854D0E] shrink-0 shadow-sm group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>call</span>
              </div>
              <div>
                <h3 className="font-headline-md text-lg text-[#854D0E] font-bold mb-1">Call Us</h3>
                <p className="font-body-md text-sm text-tertiary font-medium">+91 97501 70007</p>
                <span className="inline-flex items-center gap-1 mt-2 text-xs text-[#854D0E]/70 font-mono font-semibold">
                  <span className="material-symbols-outlined text-xs text-[#F59E0B]">schedule</span>
                  Call us during school hours
                </span>
              </div>
            </a>

            {/* Location */}
            <div className="bg-gradient-to-br from-[#D3E5F6] to-[#F0F7FF] p-7 rounded-[1.5rem] border border-white/50 flex items-start gap-5 group hover:-translate-y-1 transition-all duration-300 shadow-md hover:shadow-lg">
              <div className="w-13 h-13 bg-white/80 p-3.5 rounded-2xl flex items-center justify-center text-tertiary shrink-0 shadow-sm group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
              </div>
              <div>
                <h3 className="font-headline-md text-lg text-tertiary font-bold mb-1">Visit Campus</h3>
                <p className="font-body-md text-sm text-tertiary font-medium leading-relaxed">
                  Kulathupalayam Road, Kovaipudur,<br/>Coimbatore, Tamil Nadu 641042
                </p>
              </div>
            </div>

            {/* Instagram */}
            <a href="https://www.instagram.com/sashaschoolforlife?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-br from-[#FCE4EC] to-[#FFF0F5] p-7 rounded-[1.5rem] border border-white/50 flex items-start gap-5 group hover:-translate-y-1 transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer block">
              <div className="w-13 h-13 bg-white/80 p-3.5 rounded-2xl flex items-center justify-center text-[#E1306C] shrink-0 shadow-sm group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>camera_alt</span>
              </div>
              <div>
                <h3 className="font-headline-md text-lg text-[#E1306C] font-bold mb-1">Follow Us</h3>
                <p className="font-body-md text-sm text-tertiary font-medium">@sashaschoolforlife</p>
                <span className="inline-flex items-center gap-1 mt-2 text-xs text-[#E1306C]/70 font-mono font-semibold">
                  <span className="material-symbols-outlined text-xs text-[#F59E0B]">open_in_new</span>
                  Follow us on Instagram
                </span>
              </div>
            </a>

            {/* YouTube */}
            <a href="https://www.youtube.com/@sashaschoolforlife" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-br from-[#FFEBEE] to-[#FFF5F5] p-7 rounded-[1.5rem] border border-white/50 flex items-start gap-5 group hover:-translate-y-1 transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer block">
              <div className="w-13 h-13 bg-white/80 p-3.5 rounded-2xl flex items-center justify-center text-[#FF0000] shrink-0 shadow-sm group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-2xl">smart_display</span>
              </div>
              <div>
                <h3 className="font-headline-md text-lg text-[#FF0000] font-bold mb-1">Watch Us</h3>
                <p className="font-body-md text-sm text-tertiary font-medium">SASHA School of Life</p>
                <span className="inline-flex items-center gap-1 mt-2 text-xs text-[#FF0000]/70 font-mono font-semibold">
                  <span className="material-symbols-outlined text-xs text-[#F59E0B]">open_in_new</span>
                  Subscribe on YouTube
                </span>
              </div>
            </a>

            {/* Facebook */}
            <a href="https://www.facebook.com/sashaschoolforlife" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-br from-[#E3F2FD] to-[#F5F9FF] p-7 rounded-[1.5rem] border border-white/50 flex items-start gap-5 group hover:-translate-y-1 transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer block">
              <div className="w-13 h-13 bg-white/80 p-3.5 rounded-2xl flex items-center justify-center text-[#1877F2] shrink-0 shadow-sm group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>thumb_up</span>
              </div>
              <div>
                <h3 className="font-headline-md text-lg text-[#1877F2] font-bold mb-1">Like Us</h3>
                <p className="font-body-md text-sm text-tertiary font-medium">@sashaschoolforlife</p>
                <span className="inline-flex items-center gap-1 mt-2 text-xs text-[#1877F2]/70 font-mono font-semibold">
                  <span className="material-symbols-outlined text-xs text-[#F59E0B]">open_in_new</span>
                  Follow on Facebook
                </span>
              </div>
            </a>

            {/* Google Business */}
            <a href="https://share.google/FmgJGbqSkDUe6rP79" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-br from-[#E8F5E9] to-[#F1FFF2] p-7 rounded-[1.5rem] border border-white/50 flex items-start gap-5 group hover:-translate-y-1 transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer block">
              <div className="w-13 h-13 bg-white/80 p-3.5 rounded-2xl flex items-center justify-center text-[#34A853] shrink-0 shadow-sm group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>storefront</span>
              </div>
              <div>
                <h3 className="font-headline-md text-lg text-[#34A853] font-bold mb-1">Review Us</h3>
                <p className="font-body-md text-sm text-tertiary font-medium">SASHA School of Life</p>
                <span className="inline-flex items-center gap-1 mt-2 text-xs text-[#34A853]/70 font-mono font-semibold">
                  <span className="material-symbols-outlined text-xs text-[#F59E0B]">open_in_new</span>
                  Write a Google Review
                </span>
              </div>
            </a>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white/90 backdrop-blur-md p-8 md:p-12 rounded-[2rem] shadow-xl border border-white/60 relative overflow-hidden">
              {/* Decorative watermark */}
              <div className="absolute -bottom-8 -right-8 opacity-[0.04] pointer-events-none">
                <span className="material-symbols-outlined text-[140px]">mail</span>
              </div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-[#E9DDFF] to-[#F5F3FF] rounded-full blur-3xl opacity-40 pointer-events-none"></div>

              {submitted ? (
                <div className="text-center py-12 space-y-6 animate-fade-in relative z-10">
                  <div className="w-24 h-24 bg-[#FEF9C3] rounded-full flex items-center justify-center mx-auto shadow-lg">
                    <span className="material-symbols-outlined text-[#F59E0B] text-5xl" style={{ fontVariationSettings: "'FILL' 1" }}>done_all</span>
                  </div>
                  <h3 className="font-display-lg text-primary text-3xl font-bold">Thank You!</h3>
                  <p className="font-body-lg text-body-md text-tertiary max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out to SASHA School of Life. Our team will review your enquiry and connect with you shortly.
                  </p>
                  <button 
                    onClick={() => { setSubmitted(false); resetForm(); }}
                    className="golden-pill font-bold px-8 py-3.5 rounded-full shadow-lg hover:scale-105 transition-transform mx-auto block mt-4"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#E9DDFF] to-[#D3E5F6] rounded-2xl flex items-center justify-center text-primary shadow-sm shrink-0">
                      <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>help</span>
                    </div>
                    <div>
                      <h2 className="font-display-lg text-2xl md:text-3xl text-primary font-bold">Have a Question? Let's Talk!</h2>
                      <p className="font-body-md text-sm text-tertiary mt-0.5">Fill out the form and we'll get back to you within 24 hours.</p>
                    </div>
                  </div>
                  <form 
                    action="#" 
                    className="space-y-5" 
                    onSubmit={handleSubmit}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <label className="font-label-sm text-xs font-semibold text-tertiary px-1" htmlFor="first_name">First Name <span className="text-red-400">*</span></label>
                        <input 
                          className="w-full bg-white border border-[#E9DDFF]/50 rounded-xl px-5 py-3.5 focus:ring-2 focus:ring-primary/10 focus:border-primary outline-none transition-all text-sm font-medium shadow-sm" 
                          id="first_name" 
                          required 
                          type="text" 
                          placeholder="Your first name"
                          value={formData.first_name}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="font-label-sm text-xs font-semibold text-tertiary px-1" htmlFor="last_name">Last Name <span className="text-red-400">*</span></label>
                        <input 
                          className="w-full bg-white border border-[#E9DDFF]/50 rounded-xl px-5 py-3.5 focus:ring-2 focus:ring-primary/10 focus:border-primary outline-none transition-all text-sm font-medium shadow-sm" 
                          id="last_name" 
                          required 
                          type="text" 
                          placeholder="Your last name"
                          value={formData.last_name}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="font-label-sm text-xs font-semibold text-tertiary px-1" htmlFor="email">Email Address <span className="text-red-400">*</span></label>
                      <input 
                        className="w-full bg-white border border-[#E9DDFF]/50 rounded-xl px-5 py-3.5 focus:ring-2 focus:ring-primary/10 focus:border-primary outline-none transition-all text-sm font-medium shadow-sm" 
                        id="email" 
                        required 
                        type="email" 
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="font-label-sm text-xs font-semibold text-tertiary px-1" htmlFor="phone">Phone Number <span className="text-red-400">*</span></label>
                      <input 
                        className="w-full bg-white border border-[#E9DDFF]/50 rounded-xl px-5 py-3.5 focus:ring-2 focus:ring-primary/10 focus:border-primary outline-none transition-all text-sm font-medium shadow-sm" 
                        id="phone" 
                        required 
                        type="tel" 
                        inputMode="numeric"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="font-label-sm text-xs font-semibold text-tertiary px-1" htmlFor="child_name">Child's Name <span className="text-red-400">*</span></label>
                      <input 
                        className="w-full bg-white border border-[#E9DDFF]/50 rounded-xl px-5 py-3.5 focus:ring-2 focus:ring-primary/10 focus:border-primary outline-none transition-all text-sm font-medium shadow-sm" 
                        id="child_name" 
                        required 
                        type="text" 
                        placeholder="Your child's full name"
                        value={formData.child_name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="font-label-sm text-xs font-semibold text-tertiary px-1" htmlFor="hear_about">Where did you hear about us?</label>
                      <select 
                        className="w-full bg-white border border-[#E9DDFF]/50 rounded-xl px-5 py-3.5 focus:ring-2 focus:ring-primary/10 focus:border-primary outline-none transition-all text-sm font-medium appearance-none shadow-sm" 
                        id="hear_about"
                        value={formData.hear_about}
                        onChange={handleChange}
                      >
                        <option>Google Search</option>
                        <option>Instagram</option>
                        <option>Facebook</option>
                        <option>YouTube</option>
                        <option>Friend / Family</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="font-label-sm text-xs font-semibold text-tertiary px-1" htmlFor="interest">Select Program of Interest</label>
                      <select 
                        className="w-full bg-white border border-[#E9DDFF]/50 rounded-xl px-5 py-3.5 focus:ring-2 focus:ring-primary/10 focus:border-primary outline-none transition-all text-sm font-medium appearance-none shadow-sm" 
                        id="interest"
                        value={formData.interest}
                        onChange={handleChange}
                      >
                        <option>Montessori Education</option>
                        <option>Cambridge IGCSE</option>
                        <option>Waldorf Education</option>
                        <option>Reggio Emilia</option>
                        <option>General Inquiry</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="font-label-sm text-xs font-semibold text-tertiary px-1" htmlFor="message">Your Message <span className="text-red-400">*</span></label>
                      <textarea 
                        className="w-full bg-white border border-[#E9DDFF]/50 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-primary/10 focus:border-primary outline-none transition-all text-sm font-medium shadow-sm" 
                        id="message" 
                        required 
                        rows={4}
                        placeholder="Tell us about your child and any questions you have..."
                        value={formData.message}
                        onChange={handleChange}
                      ></textarea>
                    </div>
                    <button 
                      className="w-full primary-pill text-white font-bold py-4 rounded-full shadow-lg hover:shadow-xl hover:translate-y-[-2px] active:translate-y-[1px] transition-all duration-300 mt-2 flex items-center justify-center gap-2 text-lg disabled:opacity-60 disabled:cursor-not-allowed" 
                      type="submit"
                      disabled={sending}
                    >
                      {sending ? (
                        <>Sending...</>
                      ) : (
                        <><span>Get in Touch</span><span className="material-symbols-outlined text-lg">send</span></>
                      )}
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ─── FULL-WIDTH MAP ─── */}
      <section className="w-full relative">
        <div className="text-center mb-8 px-gutter">
          <span className="golden-badge px-4 py-1.5 rounded-full text-label-sm font-label-sm mb-3 inline-block uppercase tracking-wider">FIND US HERE</span>
          <h2 className="font-display-lg text-2xl md:text-3xl text-primary font-bold">Our Location</h2>
        </div>
        <div className="relative w-full h-[400px] md:h-[500px] shadow-[0_-20px_60px_rgba(139,92,246,0.08)]">
          <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent pointer-events-none z-10"></div>
          <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur-sm px-5 py-3 rounded-2xl shadow-lg flex items-center gap-3 border border-[#FEF08A]/30">
            <div className="w-8 h-8 bg-[#FEF9C3] rounded-lg flex items-center justify-center">
              <span className="material-symbols-outlined text-[#F59E0B] text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
            </div>
            <div>
              <span className="font-headline-md text-sm font-bold text-primary block leading-tight">Sasha School Of Life</span>
              <span className="text-xs text-tertiary">Kovaipudur, Coimbatore</span>
            </div>
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
    </main>
  );
}
