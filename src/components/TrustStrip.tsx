import React from 'react';

export const TrustStrip: React.FC = () => {
  const stats = [
    { value: '50+', label: 'Clients Partnered' },
    { value: '500+', label: 'Posts Crafted' },
    { value: '12+', label: 'Core Industries' },
    { value: '95%', label: 'Word-of-Mouth Retention' },
  ];

  return (
    <section className="w-full bg-[#f5f3f0] py-8 border-b border-[#c1c8c2]/30 shadow-inner">
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="max-w-md">
            <span className="font-['Plus_Jakarta_Sans'] text-xs font-semibold text-[#424844] uppercase tracking-widest block mb-1">
              Pedigree &amp; Practice
            </span>
            <p className="font-['Playfair_Display'] text-xl text-[#1b1c1a] font-normal leading-snug">
              Helping professionals turn hard-won expertise into a recognizable voice.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 lg:gap-8 items-baseline">
            {stats.map((stat, idx) => (
              <div key={idx} className="space-y-1">
                <span className="font-['Playfair_Display'] text-3xl lg:text-4xl text-[#032217] font-normal tracking-tight block">
                  {stat.value}
                </span>
                <span className="font-['Plus_Jakarta_Sans'] text-xs text-[#424844] block font-medium">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <p className="font-['Plus_Jakarta_Sans'] text-[11px] text-[#727974] text-right mt-4 uppercase tracking-wider">
          *Illustrative client retention and engagement metrics across private desk advisory.
        </p>
      </div>
    </section>
  );
};
