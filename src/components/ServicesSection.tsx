import React, { useState } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { SERVICES, ServiceDetail } from '../data/content';

interface ServicesSectionProps {
  onSelectService: (service: ServiceDetail) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-[#fbf9f6] py-16 lg:py-24 border-b border-[#c1c8c2]/30" id="services">
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="max-w-2xl mb-12">
          <span className="font-['Plus_Jakarta_Sans'] text-xs font-semibold text-[#1a382b] uppercase tracking-widest block mb-2">
            Services &amp; Offerings
          </span>
          <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl text-[#1b1c1a] font-normal">
            What I can help you say.
          </h2>
          <p className="font-['Plus_Jakarta_Sans'] text-base text-[#424844] mt-2 font-light leading-relaxed">
            Structured bespoke engagements tailored for executives, serial entrepreneurs, and operators who have immense value to share but zero bandwidth to write.
          </p>
        </div>

        {/* Interactive Services Accordion */}
        <div className="space-y-4">
          {SERVICES.map((service, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={service.number}
                className={`bg-white rounded-md p-6 transition-all duration-300 border ${
                  isOpen ? 'border-[#1a382b] shadow-md' : 'border-[#c1c8c2]/40 shadow-xs hover:border-[#1a382b]/30'
                }`}
              >
                {/* Header Row */}
                <div
                  className="flex items-center justify-between cursor-pointer select-none"
                  onClick={() => toggleAccordion(index)}
                >
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-sm text-[#727974] font-semibold">
                      {service.number}
                    </span>
                    <div>
                      <h3 className="font-['Playfair_Display'] text-xl sm:text-2xl text-[#1b1c1a] font-semibold">
                        {service.title}
                      </h3>
                      <p className="font-['Plus_Jakarta_Sans'] text-sm text-[#424844] font-light mt-0.5">
                        {service.tagline}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="font-['Plus_Jakarta_Sans'] text-[11px] font-semibold uppercase tracking-wider bg-[#efeeeb] px-3 py-1 rounded-xs text-[#032217] hidden sm:inline-block border border-[#c1c8c2]/40">
                      {service.badge}
                    </span>
                    <button
                      className="p-1 text-[#032217] hover:bg-[#efeeeb] rounded-xs transition-transform duration-300"
                      style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                      aria-label="Expand service details"
                    >
                      <ChevronDown className="w-5 h-5 text-[#032217]" />
                    </button>
                  </div>
                </div>

                {/* Collapsible Content */}
                {isOpen && (
                  <div className="pt-6 mt-6 border-t border-[#c1c8c2]/30 space-y-5 animate-in fade-in duration-200">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-[#f5f3f0] p-5 rounded-xs border border-[#c1c8c2]/30">
                      <div>
                        <span className="font-['Plus_Jakarta_Sans'] text-[11px] font-semibold text-[#727974] uppercase tracking-wider block mb-1">
                          Who It&apos;s For
                        </span>
                        <p className="font-['Plus_Jakarta_Sans'] text-sm text-[#1b1c1a] leading-relaxed">
                          {service.forWhom}
                        </p>
                      </div>

                      <div>
                        <span className="font-['Plus_Jakarta_Sans'] text-[11px] font-semibold text-[#727974] uppercase tracking-wider block mb-1">
                          Deliverables
                        </span>
                        <p className="font-['Plus_Jakarta_Sans'] text-sm text-[#1b1c1a] leading-relaxed">
                          {service.deliverables}
                        </p>
                      </div>

                      <div>
                        <span className="font-['Plus_Jakarta_Sans'] text-[11px] font-semibold text-[#727974] uppercase tracking-wider block mb-1">
                          Time Commitment
                        </span>
                        <p className="font-['Plus_Jakarta_Sans'] text-sm text-[#1b1c1a] leading-relaxed">
                          {service.timeline}
                        </p>
                      </div>
                    </div>

                    <div className="flex justify-end pt-1">
                      <button
                        onClick={() => onSelectService(service)}
                        className="inline-flex items-center gap-2 font-['Plus_Jakarta_Sans'] text-sm text-[#032217] font-semibold hover:gap-3 transition-all border-b border-[#032217] pb-0.5"
                      >
                        Let&apos;s Discuss This Engagement <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
