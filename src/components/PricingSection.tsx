import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { PRICING_TIERS, PricingTier } from '../data/content';

interface PricingSectionProps {
  onSelectTier: (tier: PricingTier) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectTier }) => {
  const [currency, setCurrency] = useState<'USD' | 'INR'>('USD');

  return (
    <section className="w-full bg-white py-16 lg:py-24 border-b border-[#c1c8c2]/30" id="packages">
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="font-['Plus_Jakarta_Sans'] text-xs font-semibold text-[#1a382b] uppercase tracking-widest block mb-2">
              Transparent Engagements
            </span>
            <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl text-[#1b1c1a] font-normal">
              Advisory packages &amp; retainers.
            </h2>
          </div>

          {/* Currency Toggle */}
          <div className="inline-flex items-center bg-[#efeeeb] p-1 rounded-xs border border-[#c1c8c2]/50 text-xs font-['Plus_Jakarta_Sans'] uppercase tracking-wider font-semibold">
            <button
              onClick={() => setCurrency('USD')}
              className={`px-4 py-1.5 rounded-xs transition-all ${
                currency === 'USD'
                  ? 'bg-[#032217] text-white shadow-xs'
                  : 'text-[#424844] hover:text-[#032217]'
              }`}
            >
              USD ($)
            </button>
            <button
              onClick={() => setCurrency('INR')}
              className={`px-4 py-1.5 rounded-xs transition-all ${
                currency === 'INR'
                  ? 'bg-[#032217] text-white shadow-xs'
                  : 'text-[#424844] hover:text-[#032217]'
              }`}
            >
              INR (₹)
            </button>
          </div>
        </div>

        {/* Pricing Tiers Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PRICING_TIERS.map((tier) => {
            const price = currency === 'USD' ? tier.usdPrice : tier.inrPrice;
            const isFeatured = !!tier.featured;

            return (
              <div
                key={tier.id}
                className={`bg-[#fbf9f6] p-8 rounded-md shadow-xs flex flex-col justify-between transition-all duration-300 relative border ${
                  isFeatured
                    ? 'border-[#032217] shadow-md -translate-y-1 bg-white'
                    : 'border-[#c1c8c2]/40 hover:border-[#1a382b]/40'
                }`}
              >
                {isFeatured && (
                  <div className="absolute -top-3.5 left-8 bg-[#032217] text-white px-3.5 py-1 rounded-xs font-['Plus_Jakarta_Sans'] text-[10px] uppercase tracking-widest font-semibold border border-[#c8ead7]/20 shadow-xs">
                    Most Selected Retainer
                  </div>
                )}

                <div>
                  <span className="font-['Plus_Jakarta_Sans'] text-xs text-[#727974] uppercase tracking-wider font-semibold block mb-1">
                    {tier.tag}
                  </span>
                  <h3 className="font-['Playfair_Display'] text-2xl text-[#1b1c1a] mb-2 font-semibold">
                    {tier.title}
                  </h3>
                  <p className="font-['Plus_Jakarta_Sans'] text-xs text-[#424844] mb-6 font-light leading-relaxed">
                    {tier.description}
                  </p>

                  <div className="mb-6 pb-6 border-b border-[#c1c8c2]/30">
                    <span className="font-['Playfair_Display'] text-4xl text-[#032217] font-normal tracking-tight">
                      {price}
                    </span>
                    <span className="font-['Plus_Jakarta_Sans'] text-xs text-[#727974] block mt-1 font-mono font-medium">
                      {tier.cadence}
                    </span>
                  </div>

                  <ul className="space-y-3 font-['Plus_Jakarta_Sans'] text-xs text-[#1b1c1a] mb-8 font-light">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#1a382b] shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => onSelectTier(tier)}
                  className={`w-full py-3.5 text-center rounded-xs font-['Plus_Jakarta_Sans'] text-xs uppercase tracking-wider font-semibold transition-all cursor-pointer ${
                    isFeatured
                      ? 'bg-[#032217] text-white hover:bg-[#1a382b] shadow-xs'
                      : 'bg-[#efeeeb] text-[#1b1c1a] hover:bg-[#eae8e5] border border-[#c1c8c2]/50'
                  }`}
                >
                  {tier.ctaText}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
