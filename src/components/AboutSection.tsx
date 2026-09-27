import React from 'react';
import { Quote, ArrowRight } from 'lucide-react';

interface AboutSectionProps {
  onLearnPhilosophy: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onLearnPhilosophy }) => {
  return (
    <section className="w-full bg-[#fbf9f6] py-16 lg:py-24 border-b border-[#c1c8c2]/30" id="about">
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Visual Column / Dossier */}
          <div className="lg:col-span-5 relative">
            <div className="bg-[#efeeeb] rounded-lg p-6 sm:p-8 space-y-6 shadow-xs border border-[#c1c8c2]/40">
              <div className="space-y-1.5 border-b border-[#c1c8c2]/30 pb-4">
                <span className="font-['Plus_Jakarta_Sans'] text-xs font-semibold text-[#424844] uppercase tracking-widest block">
                  Ghostwriter Dossier
                </span>
                <h3 className="font-['Playfair_Display'] text-2xl font-semibold text-[#032217]">
                  Elena Vance
                </h3>
                <p className="font-['Plus_Jakarta_Sans'] text-xs text-[#424844] leading-relaxed">
                  Editorial Strategist &amp; Former Investigative Arts Columnist
                </p>
              </div>

              {/* Inset Manifesto Box */}
              <div className="p-5 bg-white rounded-sm shadow-xs border border-[#c1c8c2]/40 space-y-3">
                <Quote className="w-6 h-6 text-[#1a382b] rotate-180" />
                <p className="font-['Playfair_Display'] text-lg italic text-[#1b1c1a] leading-relaxed">
                  “No corporate jargon. No copy-paste templates. Just your ideas, told with uncompromising taste.”
                </p>
                <div className="font-['Plus_Jakarta_Sans'] text-[11px] uppercase tracking-wider text-[#727974] font-semibold pt-1 border-t border-[#c1c8c2]/30">
                  Principle Manifesto · Zurich Salon
                </div>
              </div>

              {/* Micro Desk Metrics */}
              <div className="grid grid-cols-2 gap-3 text-center">
                <div className="bg-[#eae8e5] p-3.5 rounded-sm border border-[#c1c8c2]/30">
                  <span className="font-['Playfair_Display'] text-2xl text-[#032217] block font-semibold">
                    6+
                  </span>
                  <span className="font-['Plus_Jakarta_Sans'] text-[11px] uppercase text-[#424844] font-semibold">
                    Years Dedicated Desk
                  </span>
                </div>
                <div className="bg-[#eae8e5] p-3.5 rounded-sm border border-[#c1c8c2]/30">
                  <span className="font-['Playfair_Display'] text-2xl text-[#032217] block font-semibold">
                    48M+
                  </span>
                  <span className="font-['Plus_Jakarta_Sans'] text-[11px] uppercase text-[#424844] font-semibold">
                    Total Client Reach
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Narrative Column */}
          <div className="lg:col-span-7 space-y-6">
            <span className="font-['Plus_Jakarta_Sans'] text-xs font-semibold text-[#1a382b] uppercase tracking-widest block">
              A Little About Me
            </span>

            <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl text-[#1b1c1a] leading-tight font-normal">
              Your content should sound like <span className="italic text-[#032217]">you</span>.
            </h2>

            <div className="space-y-4 font-['Plus_Jakarta_Sans'] text-base text-[#424844] leading-relaxed font-light">
              <p>
                LinkedIn is swollen with professionals performing an imitation of what they imagine success sounds like: hollow aphorisms, robotic lists, and algorithm-pandering hype. The real world, however, responds to humanity.
              </p>
              <p>
                Before ghostwriting for founders and executives, I cut my teeth in long-form literary editing and deep-dive profile interviews. I learned that what makes someone&apos;s thinking magnetic isn&apos;t polish — it&apos;s the specific inflection of their lived battles, the nuances of their contrarian beliefs, and the quiet clarity of their reasoning.
              </p>
              <p>
                When we work together, I am not handing you a social media playbook. I act as an intellectual mirror. I listen to your voice notes, dismantle your strategy memos, extract the gold you didn&apos;t even notice was there, and craft it into prose that honors your intelligence.
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={onLearnPhilosophy}
                className="inline-flex items-center gap-2 font-['Plus_Jakarta_Sans'] text-sm text-[#032217] font-semibold hover:gap-3 transition-all border-b border-[#032217] pb-0.5"
              >
                More About My Approach <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
