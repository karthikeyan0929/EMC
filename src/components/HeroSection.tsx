import React from 'react';
import { Shield, Sparkles, Feather } from 'lucide-react';
import { PORTRAIT_IMAGE_URL } from './Navbar';

interface HeroSectionProps {
  onWorkWithMe: () => void;
  onExploreWork: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onWorkWithMe,
  onExploreWork,
}) => {
  return (
    <section className="relative w-full overflow-hidden bg-[#fbf9f6] pt-8 pb-16 lg:pt-16 lg:pb-24 border-b border-[#c1c8c2]/30">
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Narrative Column */}
          <div className="lg:col-span-7 flex flex-col items-start z-10">
            {/* Kicker badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[#efeeeb] text-[#032217] font-['Plus_Jakarta_Sans'] text-xs font-semibold tracking-wider uppercase mb-6 shadow-xs border border-[#c1c8c2]/40">
              <span className="w-1.5 h-1.5 rounded-full bg-[#032217] animate-pulse"></span>
              LinkedIn Content Creator · Personal Branding · Ghostwriting
            </div>

            {/* Hero Main Headline */}
            <h1 className="font-['Playfair_Display'] text-4xl sm:text-5xl lg:text-6xl text-[#1b1c1a] tracking-tight mb-6 leading-[1.08]">
              You have something <br className="hidden sm:inline" />
              <span className="italic font-normal text-[#1a382b]">worth saying.</span>
            </h1>

            {/* Lead Narrative Body */}
            <p className="font-['Plus_Jakarta_Sans'] text-lg sm:text-xl text-[#424844] max-w-xl mb-8 font-light leading-relaxed">
              I turn your experience, ideas, and hard-won expertise into LinkedIn content that sounds unmistakably like you — and gives high-caliber people a reason to remember you.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <button
                onClick={onWorkWithMe}
                className="inline-flex items-center justify-center bg-[#032217] text-white font-['Plus_Jakarta_Sans'] text-sm font-semibold px-8 py-3.5 rounded-sm shadow-md hover:bg-[#1a382b] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                Work With Me →
              </button>
              <button
                onClick={onExploreWork}
                className="inline-flex items-center justify-center bg-[#f5f3f0] text-[#1b1c1a] font-['Plus_Jakarta_Sans'] text-sm font-medium px-7 py-3.5 rounded-sm shadow-xs hover:bg-[#eae8e5] border border-[#c1c8c2]/50 transition-all"
              >
                Read Selected Work
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-2 text-[#424844] font-['Plus_Jakarta_Sans'] text-xs font-semibold uppercase tracking-wider">
              <span className="flex items-center gap-1.5 text-[#032217]">
                <Shield className="w-3.5 h-3.5 text-[#1a382b]" /> Confidential NDAs Guaranteed
              </span>
              <span className="text-[#c1c8c2] hidden sm:inline">•</span>
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#727974]" /> Zero AI-Generated Slop
              </span>
              <span className="text-[#c1c8c2] hidden sm:inline">•</span>
              <span className="flex items-center gap-1.5">
                <Feather className="w-3.5 h-3.5 text-[#727974]" /> Bespoke Voice Matching
              </span>
            </div>
          </div>

          {/* Right Column: Hero Portrait & Editorial Card */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            <div className="relative mx-auto max-w-[420px] lg:max-w-none">
              {/* Background ambient offset plate */}
              <div className="absolute -inset-3 bg-[#efeeeb] rounded-lg transform rotate-1 -z-10 shadow-xs border border-[#c1c8c2]/40"></div>

              {/* Main Portrait Card Frame */}
              <div className="relative bg-white p-3.5 rounded-lg shadow-xl border border-[#c1c8c2]/50 overflow-hidden">
                <img
                  src={PORTRAIT_IMAGE_URL}
                  alt="Elena Vance portrait sitting at bespoke wooden desk with notebook"
                  referrerPolicy="no-referrer"
                  className="w-full aspect-[3/4] object-cover rounded-sm filter brightness-[1.01]"
                />

                {/* Editorial Rotated Badge */}
                <div className="absolute bottom-6 -left-2 md:-left-4 bg-[#2a1a04] text-white px-5 py-3 rounded-sm shadow-xl transform -rotate-2 max-w-[250px] backdrop-blur-xs bg-opacity-95 border border-[#8C7355]/40">
                  <p className="font-['Playfair_Display'] text-sm italic leading-snug text-[#fbf9f6]">
                    “Currently writing for founders, executives &amp; ambitious professionals.”
                  </p>
                  <span className="block mt-1 font-['Plus_Jakarta_Sans'] text-[10px] tracking-widest text-[#e0c29f] uppercase font-semibold">
                    Elena Vance Desk
                  </span>
                </div>

                {/* Top Micro Status Badge */}
                <div className="absolute top-6 right-6 bg-[#fbf9f6]/95 backdrop-blur-xs px-3 py-1.5 rounded-xs shadow-md text-[#1b1c1a] font-['Plus_Jakarta_Sans'] text-xs font-semibold tracking-wider flex items-center gap-1.5 border border-[#c1c8c2]/40">
                  <span className="w-2 h-2 rounded-full bg-emerald-600 animate-ping"></span>
                  <span className="w-2 h-2 rounded-full bg-emerald-600 -ml-3.5"></span>
                  <span>Q3/Q4 Bespoke Slots: 2 Open</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
