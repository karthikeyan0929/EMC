import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQ_ITEMS } from '../data/content';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white py-16 lg:py-24 border-b border-[#c1c8c2]/30" id="faq">
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <span className="font-['Plus_Jakarta_Sans'] text-xs font-semibold text-[#1a382b] uppercase tracking-widest block mb-2">
            Clarity &amp; Disclosures
          </span>
          <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl text-[#1b1c1a] font-normal">
            Frequently asked questions.
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-3.5">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-[#fbf9f6] rounded-xs p-5 shadow-xs border border-[#c1c8c2]/40 cursor-pointer transition-all duration-200"
                onClick={() => toggle(index)}
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-['Playfair_Display'] text-base sm:text-lg text-[#1b1c1a] font-semibold">
                    {item.question}
                  </h3>
                  <button
                    className="p-1 text-[#032217] transition-transform duration-200 shrink-0"
                    style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                    aria-label="Toggle FAQ answer"
                  >
                    <ChevronDown className="w-5 h-5 text-[#032217]" />
                  </button>
                </div>

                {isOpen && (
                  <div className="pt-3 mt-2 border-t border-[#c1c8c2]/25 text-sm font-['Plus_Jakarta_Sans'] text-[#424844] leading-relaxed font-light animate-in fade-in duration-200">
                    {item.answer}
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
