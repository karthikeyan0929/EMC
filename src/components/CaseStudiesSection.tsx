import React from 'react';
import { Quote } from 'lucide-react';

export const CaseStudiesSection: React.FC = () => {
  const testimonials = [
    {
      quote:
        '“Her writing smells zero percent of AI. It possesses genuine literary cadences, rhythm, and intellectual weight. Elena is our firm’s secret weapon.”',
      author: 'Henrik V.',
      role: 'Managing Partner · Zurich Private Equity'
    },
    {
      quote:
        '“I was terrified of sounding boastful or generic on social media. Elena crafted a positioning that feels dignified, rigorous, and deeply generous.”',
      author: 'Priya M.',
      role: 'Chief Strategy Officer · HealthTech'
    },
    {
      quote:
        '“My calendar is packed with 12-hour days. 45 minutes a month with Elena generates 8 pristine, thoughtful posts. Pure executive leverage.”',
      author: 'David B.',
      role: 'General Counsel · Global FinTech'
    }
  ];

  return (
    <section className="w-full bg-[#fbf9f6] py-16 lg:py-24 border-b border-[#c1c8c2]/30">
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="mb-12">
          <span className="font-['Plus_Jakarta_Sans'] text-xs font-semibold text-[#1a382b] uppercase tracking-widest block mb-2">
            Proof of Impact
          </span>
          <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl text-[#1b1c1a] font-normal">
            Case studies &amp; client transformations.
          </h2>
        </div>

        {/* Featured Case Study Card */}
        <div className="bg-white rounded-md p-6 sm:p-10 mb-10 shadow-xs border border-[#c1c8c2]/40">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Strategy & Narrative */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex flex-wrap items-center gap-2 font-['Plus_Jakarta_Sans'] text-xs text-[#727974] uppercase tracking-wider font-semibold">
                <span>B2B Supply Chain SaaS</span>
                <span>•</span>
                <span>Series B Round Acceleration</span>
              </div>

              <h3 className="font-['Playfair_Display'] text-2xl sm:text-3xl text-[#1b1c1a]">
                From Quiet Founder to Category Definer
              </h3>

              <div className="space-y-3 font-['Plus_Jakarta_Sans'] text-sm text-[#424844] leading-relaxed font-light">
                <p>
                  <strong className="text-[#1b1c1a] font-medium">The Challenge:</strong> The CEO possessed 15 years of deep freight-logistics nuance, but her profile looked dormant. Silicon Valley competitors with inferior software were dominating industry headlines.
                </p>
                <p>
                  <strong className="text-[#1b1c1a] font-medium">The Strategy:</strong> We launched a 12-week “Truth in Logistics” ghostwritten dispatch series detailing the unspoken costs of port congestion and automated customs.
                </p>
              </div>

              {/* Verified Metrics Grid */}
              <div className="grid grid-cols-3 gap-3 pt-2">
                <div className="bg-[#f5f3f0] p-3 rounded-xs text-center border border-[#c1c8c2]/30">
                  <span className="font-['Playfair_Display'] text-2xl sm:text-3xl text-[#032217] block font-semibold">
                    3.4M
                  </span>
                  <span className="font-['Plus_Jakarta_Sans'] text-[10px] uppercase text-[#727974] font-semibold tracking-wider">
                    Impressions
                  </span>
                </div>
                <div className="bg-[#f5f3f0] p-3 rounded-xs text-center border border-[#c1c8c2]/30">
                  <span className="font-['Playfair_Display'] text-2xl sm:text-3xl text-[#032217] block font-semibold">
                    14
                  </span>
                  <span className="font-['Plus_Jakarta_Sans'] text-[10px] uppercase text-[#727974] font-semibold tracking-wider">
                    VC Partner Inbounds
                  </span>
                </div>
                <div className="bg-[#f5f3f0] p-3 rounded-xs text-center border border-[#c1c8c2]/30">
                  <span className="font-['Playfair_Display'] text-2xl sm:text-3xl text-[#032217] block font-semibold">
                    $18M
                  </span>
                  <span className="font-['Plus_Jakarta_Sans'] text-[10px] uppercase text-[#727974] font-semibold tracking-wider">
                    Series B Closed
                  </span>
                </div>
              </div>
            </div>

            {/* Testimonial Quote Box */}
            <div className="lg:col-span-5 bg-[#f5f3f0] p-6 sm:p-7 rounded-xs space-y-4 border border-[#c1c8c2]/40">
              <Quote className="w-8 h-8 text-[#1a382b] rotate-180" />
              <p className="font-['Playfair_Display'] text-base italic text-[#1b1c1a] leading-relaxed">
                “Elena extracted the exact voice I always wanted in public but had no time to formulate. Within three months, two lead investors mentioned they followed my LinkedIn posts before ever taking our pitch call.”
              </p>
              <div className="border-t border-[#c1c8c2]/30 pt-3">
                <span className="font-['Plus_Jakarta_Sans'] text-xs font-semibold text-[#1b1c1a] block">
                  Caroline S.
                </span>
                <span className="font-['Plus_Jakarta_Sans'] text-[11px] text-[#727974] block">
                  Co-Founder &amp; CEO · Logistics Cloud
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Cards Carousel / Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-md shadow-xs border border-[#c1c8c2]/40 space-y-4 flex flex-col justify-between"
            >
              <p className="font-['Playfair_Display'] text-sm italic text-[#1b1c1a] leading-relaxed">
                {t.quote}
              </p>
              <div className="border-t border-[#c1c8c2]/30 pt-3">
                <span className="font-['Plus_Jakarta_Sans'] text-xs font-semibold text-[#1b1c1a] block">
                  {t.author}
                </span>
                <span className="font-['Plus_Jakarta_Sans'] text-[11px] text-[#727974] block">
                  {t.role}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
