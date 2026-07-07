import React, { useEffect } from 'react';

export default function CampusLife() {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const doodles = document.querySelectorAll<HTMLElement>('.floating-doodle');
      const mouseX = e.clientX / window.innerWidth;
      const mouseY = e.clientY / window.innerHeight;

      doodles.forEach((doodle, index) => {
        const factor = (index + 1) * 20;
        const x = (mouseX - 0.5) * factor;
        const y = (mouseY - 0.5) * factor;
        doodle.style.transform = `translate(${x}px, ${y}px) rotate(${x / 10}deg)`;
      });
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const features = [
    {
      title: 'HEPA Air Purification',
      desc: 'All indoor spaces operate continuous medical-grade HEPA filters to protect fragile growing lungs from outdoor particulates.',
      icon: 'air'
    },
    {
      title: 'Toxic-Free Cabinetry',
      desc: 'All shelving, desks, and materials are made from solid olive and beechwood, sealed with organic linseed oil.',
      icon: 'forest'
    },
    {
      title: 'Natural Acoustic Dampening',
      desc: 'To prevent cognitive sensory overload, classrooms feature natural wool insulation and ceiling felt acoustic panels.',
      icon: 'volume_down'
    },
    {
      title: '100% Secure Enclosure',
      desc: 'Continuous perimeter safety monitoring with single-access biometric gating for peace of mind.',
      icon: 'security'
    }
  ];

  return (
    <>
      <div className="watercolor-bg fixed inset-0 -z-10 pointer-events-none"></div>

      {/* Floating Decor Elements */}
      <div className="floating-doodle fixed top-40 left-10 text-primary-fixed-dim pointer-events-none" style={{ animationDelay: '1s' }}>
        <span className="material-symbols-outlined text-[48px]">star</span>
      </div>
      <div className="floating-doodle fixed top-80 right-20 text-secondary-fixed pointer-events-none" style={{ animationDelay: '2s' }}>
        <span className="material-symbols-outlined text-[64px]">sunny</span>
      </div>
      <div className="floating-doodle fixed bottom-40 left-20 text-tertiary-fixed-dim pointer-events-none" style={{ animationDelay: '3s' }}>
        <span className="material-symbols-outlined text-[56px]">spa</span>
      </div>

      <main className="pt-40 pb-20 px-gutter max-w-7xl mx-auto relative">
        <div className="text-center mb-16">
          <span className="bg-secondary-container text-on-secondary-container px-4 py-1.5 rounded-full font-label-sm uppercase tracking-widest text-xs font-semibold">A Dreamscape for Discovery</span>
          <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary mt-6 mb-4">Life at Sasha School</h1>
          <p className="font-body-lg text-body-lg text-tertiary max-w-2xl mx-auto">
            Step onto a campus where physical architecture acts as the "Third Teacher." Our classrooms, forest buffers, and gardens are meticulously organized to foster natural exploration, quiet reflection, and safe physical growth.
          </p>
        </div>

        {/* Bento Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Outdoor Learning */}
          <div className="md:col-span-7 group relative overflow-hidden rounded-xl glass-card p-4 hover:translate-y-[-4px] transition-transform duration-500 shadow-[0_10px_30px_rgba(139,92,246,0.1)] bg-white/80">
            <div className="relative h-96 w-full rounded-lg overflow-hidden mb-6">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsmOih3IpKQ7fKHKJdliDb-4Inr9ED0GqQg3Ug3Qn65vELw6Cb8O4BuLU1IWz_4csao-gBFHVkcYNwmuCzXCDkCQ_l_g-M6XJJEAIY2IcTjSfJC_Ra7-9GUfh7rrIyIOxytXWNv20s3jKPfuF3cu19exToHjf29N51U-7qULQLzK2YqkbWoREj2jimr7YtVYXl64-DV0cb_VZ5A3RTq2Pe70WPkPYmmkHnjtDeNvA8fpNQs33kepIhi3j6xlwz9xc4eTetg_9CHWTS" 
                alt="Children outdoors" 
                className="w-full h-full object-cover" 
              />
              <div className="absolute top-4 left-4 bg-tertiary-fixed/90 backdrop-blur-sm text-on-tertiary-fixed-variant px-4 py-1.5 rounded-full font-label-sm text-xs font-bold uppercase">OUTDOOR EXPLORATION</div>
            </div>
            <div className="px-2">
              <h3 className="font-display-lg text-xl text-primary font-bold">The Forest Sanctuary</h3>
              <p className="font-body-md text-sm text-tertiary mt-2 leading-relaxed">
                Our outdoor redwood buffer features active dirt tracks, safe wooden climbing pyramids, logs for balancing, and a mud kitchen laboratory where children study the physical viscosity of natural materials.
              </p>
            </div>
          </div>

          {/* Gardening */}
          <div className="md:col-span-5 group relative overflow-hidden rounded-xl glass-card p-4 hover:translate-y-[-4px] transition-transform duration-500 shadow-[0_10px_30px_rgba(139,92,246,0.1)] bg-white/80">
            <div className="relative h-72 md:h-[500px] w-full rounded-lg overflow-hidden mb-6">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAddLrMJNfkVIBqs2FhGzDE6pW4Ut3LndNHuYphgSGnQ72O2hcJgPZfml7_oQEKV8RDtFR_wrCDeMn9Dv7_G0BSsfP9pCY9ynkbxEiADZUlQHxN4AFagb97Hbz8QMPrXRd5nkbK-aYV4ozWFNDngKw_v9MNbHEVvStI8q2U6GGJ22GIGk2C1Izep2XB0cnUAvdbf5HjjZ6pWQ6Bf7K4zpic2ld9ApuS4Vd5l3P4Hib2_GqUTuOmbVs2UJDP9RyTxwk9FiLtFxMXDL7O" 
                alt="Planting a seedling" 
                className="w-full h-full object-cover" 
              />
              <div className="absolute top-4 left-4 bg-secondary-fixed/90 backdrop-blur-sm text-on-secondary-fixed-variant px-4 py-1.5 rounded-full font-label-sm text-xs font-bold uppercase">ORGANIC BOTANY</div>
            </div>
            <div className="px-2">
              <h3 className="font-display-lg text-xl text-primary font-bold">The Blossom Garden &amp; Hive</h3>
              <p className="font-body-md text-sm text-tertiary mt-2 leading-relaxed">
                Tended daily by students, our organic vegetable beds feature tomatoes, lavender, chamomile, and strawberries, teaching children real agricultural patience and respect for seasonal life cycles.
              </p>
            </div>
          </div>

          {/* Reading Nook */}
          <div className="md:col-span-4 group relative overflow-hidden rounded-xl glass-card p-4 hover:translate-y-[-4px] transition-transform duration-500 shadow-[0_10px_30px_rgba(139,92,246,0.1)] bg-white/80">
            <div className="relative h-72 w-full rounded-lg overflow-hidden mb-6">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3u_M83yYb9MTm4qY0DG5uu7OQ_umGzQDwWv0FeLZ7uAEQw1vFVEag9aDsm1VfvrrTHKrqbzutRUskgmak78GWK_Ydj7npQj7J-8i2ihFR5XmSLAEVh1t964XHidKL1xAMVwufM_B7MeKUbHIhxStUEV5AcH7J7nhfU9sQVNHpjDqzohW1QcPJxDMFY6kbcCn8ZKu5gAUycZ7ZMdcVTgjk48yW8WweaIN2059Jio1UYQeikaDKlZMsYov9gavbsAHfUbUHIh4e_ybd" 
                alt="Reading nook" 
                className="w-full h-full object-cover" 
              />
            </div>
            <h3 className="font-display-lg text-xl text-primary px-2 font-bold">The Quiet Wisdom Nook</h3>
            <p className="font-body-md text-sm text-tertiary mt-2 leading-relaxed px-2">
              A sensory sanctuary with thick linen curtains, soft wool carpeting, and a curated library of scientific field guides, fairy tales, and emotional growth booklets.
            </p>
          </div>

          {/* Art & Craft */}
          <div className="md:col-span-8 group relative overflow-hidden rounded-xl glass-card p-4 hover:translate-y-[-4px] transition-transform duration-500 shadow-[0_10px_30px_rgba(139,92,246,0.1)] bg-white/80">
            <div className="relative h-72 w-full rounded-lg overflow-hidden mb-6 flex gap-4">
              <div className="w-2/3 h-full rounded-lg overflow-hidden">
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3_cWzbTDgLi9obEy2zk4oTQdU1-OPw_zahKaNNTLCILqfHcaGez1tcKf_zQ2U1gzjmacqhNv3wDc-bL2VZNr1d1-AapimvbGaFLA9HAdeH9NTXb_ZL2_mmVHkgCxFnZW4D0hg5pRpK6XO9T2BZFmDah2O3PN800oGtRJuqo4_TI9qWfXTyWnOtbrqzWPzmBy_IPctNG82KaLRe_Fz1plAx6AF_PIYi2QFBtaZaq1iKPcxWcmXyEJkGGzF3VGhBwMLfR243JheS7sY" 
                  alt="Art supplies" 
                  className="w-full h-full object-cover" 
                />
              </div>
              <div className="w-1/3 h-full flex flex-col gap-4">
                <div className="h-1/2 rounded-lg overflow-hidden">
                  <img 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5pPtwt6X435hkpRYUbUFEPl83qlQ476w3H56i83gAZj0n5NucppF91JDaps9UQsylp0LW_okl2V6YK-0huti4Kqb8HIAd0QTOO88XFO1i_Y7gg7ac_kWzRAt2v32pSBQbGQI1LFTS7n9mYZynk3DwHxEDslZ_Av4O-4pIFUopNOcic9nh7gBJQW1YFqQvGc1YylfR9Chlgc60_s0yzjQbTcBlVYOsXnTqWM1EbvmQksdFwHEbykqm_YLQSanAjA2h7y69v2H9gZ6q" 
                    alt="Student with clay model" 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div className="h-1/2 rounded-lg bg-primary-fixed/30 flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary text-[48px]">palette</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:justify-between md:items-end px-2 gap-4">
              <div>
                <h3 className="font-display-lg text-xl text-primary font-bold">The Creative Artisan Atelier</h3>
                <p className="font-body-md text-sm text-tertiary mt-2 leading-relaxed">
                  Equipped with real potter’s wheels, non-toxic organic botanical pigments, weaving looms, and real woodcarving blocks, our atelier lets kids materialise their thoughts.
                </p>
              </div>
              <span className="bg-primary-fixed/50 text-on-primary-fixed px-4 py-1.5 rounded-full font-label-sm whitespace-nowrap text-xs font-bold self-start md:self-auto uppercase">FINE ARTS</span>
            </div>
          </div>

          {/* Classroom Learning */}
          <div className="md:col-span-6 group relative overflow-hidden rounded-xl glass-card p-4 hover:translate-y-[-4px] transition-transform duration-500 shadow-[0_10px_30px_rgba(139,92,246,0.1)] bg-white/80">
            <div className="relative h-80 w-full rounded-lg overflow-hidden mb-6">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUiHC7mP-D6uSbaZJ3-OZaijUdX6anqcPFmedDkHgsu111rlz2gcZ9wQ7x-aqkgIe5Dkd2jdGIQpdEvaOIXDRg_TGQEIFvR0CxBneRJG5ImQkvRyCZz3lafl11lLSYRCubn1KJlic34hSgxWGKxdG6EoA2ZxRyhVKIkCp6bpc-rcc6ggnZ2lr525lUrjnR2qF9LwaXJHUWOrRoGEijhgGSqXXsBlxhXktaakLDVxBNXm6q320MkzA5x3nfNrYymhRo-vqq_gZMug-m" 
                alt="Classroom" 
                className="w-full h-full object-cover" 
              />
            </div>
            <h3 className="font-display-lg text-xl text-primary px-2 font-bold">Prepared Classroom Habitats</h3>
            <p className="font-body-md text-sm text-tertiary mt-2 px-2 leading-relaxed">
              Every material on our custom-built beechwood shelves is singular, beautiful, and complete, encouraging children to complete cycles of work and carefully return items to their specific physical home.
            </p>
          </div>

          {/* Group Activities */}
          <div className="md:col-span-6 group relative overflow-hidden rounded-xl glass-card p-4 hover:translate-y-[-4px] transition-transform duration-500 shadow-[0_10px_30px_rgba(139,92,246,0.1)] bg-white/80">
            <div className="relative h-80 w-full rounded-lg overflow-hidden mb-6">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNSq-mShBklnz0QwFWbkkuCRzvyYvE8YlRMRL63eg-V3xIokDJVgCVxIgkCHfTUfMciu8Pis7zXztUtkZqPNHEfDMv8rnUHiJ4gJ2jp1K4IE9VbswwfwVCcu4IxekS15edFFdsRXzBc0itcjpW_j6dK4Off9znu1y91R3uXYMUs2u-EpD11LA9UXR58m-aO87E1LlVA70YQxOYU4jKQ5MBjcq7feXbXL9VGiTjCaJTHcqMA0omif3zmSWdEiEVgtxDniWXpyn0Wuwd" 
                alt="Group of students" 
                className="w-full h-full object-cover" 
              />
              <div className="absolute bottom-4 right-4 bg-primary-container text-on-primary-container px-4 py-1.5 rounded-full font-label-sm text-xs font-bold uppercase">FAMILY RHYTHM</div>
            </div>
            <h3 className="font-display-lg text-xl text-primary px-2 font-bold">The Shared Hearth Lobby</h3>
            <p className="font-body-md text-sm text-tertiary mt-2 px-2 leading-relaxed">
              We begin and end each learning block by gathering on a circular hand-woven linen rug, practicing breathing techniques, sharing stories of gratitude, and coordinating peer collaboration.
            </p>
          </div>
        </div>

        {/* Physical Wellness & Ecological Standards */}
        <section className="mt-24">
          <div className="text-center mb-12">
            <span className="bg-primary-fixed/30 text-primary px-4 py-1.5 rounded-full text-label-sm font-label-sm uppercase tracking-wider">THE HEALTH CHARTER</span>
            <h2 className="font-display-lg text-headline-lg text-primary mt-3">Meticulous Environmental Standards</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feat, idx) => (
              <div key={idx} className="glass-card p-6 rounded-lg text-center border-white/60 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 bg-secondary-fixed/50 rounded-full flex items-center justify-center text-primary mx-auto mb-4">
                    <span className="material-symbols-outlined text-2xl">{feat.icon}</span>
                  </div>
                  <h3 className="font-headline-md text-base text-primary font-bold mb-2">{feat.title}</h3>
                  <p className="font-body-md text-xs text-tertiary leading-relaxed">{feat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Quote Section */}
        <div className="mt-24 glass-card rounded-xl p-12 text-center relative overflow-hidden bg-white/75">
          <div className="floating-doodle absolute -left-10 -top-10 text-secondary opacity-10 pointer-events-none">
            <span className="material-symbols-outlined text-[120px]">format_quote</span>
          </div>
          <p className="font-display-lg text-lg md:text-xl text-secondary italic relative z-20">"Our physical spaces are not merely containers for child activity; they are meticulously planned active agents that stimulate deep focus, sensory peace, and respect for physical objects."</p>
          <p className="mt-6 font-label-sm text-primary uppercase tracking-widest text-xs font-bold">— Sasha Valen, Founder</p>
        </div>
      </main>
    </>
  );
}
