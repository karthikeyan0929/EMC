import React from 'react';
import { CreditCard, Lock, Calendar, CheckCircle2, ArrowRight } from 'lucide-react';

interface ClientPortalPreviewProps {
  onOpenPortal: () => void;
}

export const ClientPortalPreview: React.FC<ClientPortalPreviewProps> = ({ onOpenPortal }) => {
  return (
    <section className="w-full bg-[#fbf9f6] py-16 lg:py-24 border-b border-[#c1c8c2]/30" id="client-portal">
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="bg-[#f5f3f0] rounded-lg p-6 sm:p-10 lg:p-12 shadow-xs border border-[#c1c8c2]/40">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-6 space-y-4">
              <span className="font-['Plus_Jakarta_Sans'] text-xs font-semibold text-[#1a382b] uppercase tracking-widest block">
                Client Desk Experience
              </span>
              <h2 className="font-['Playfair_Display'] text-2xl sm:text-3xl lg:text-4xl text-[#1b1c1a] font-normal">
                Seamless onboarding. Effortless collaboration.
              </h2>
              <p className="font-['Plus_Jakarta_Sans'] text-sm sm:text-base text-[#424844] leading-relaxed font-light">
                No bloated email chains or fragmented Google Docs. Every client receives an encrypted, private digital salon dashboard featuring one-click invoice settling, audio recording uploads, calendar sync, and post approvals.
              </p>

              <div className="flex flex-wrap items-center gap-4 text-xs font-['Plus_Jakarta_Sans'] uppercase tracking-wider text-[#424844] pt-2 font-medium">
                <span className="flex items-center gap-1.5">
                  <CreditCard className="w-4 h-4 text-[#032217]" /> Stripe • Wire • Razorpay
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <Lock className="w-4 h-4 text-[#032217]" /> 256-Bit Vault
                </span>
              </div>
            </div>

            {/* Interactive Mock Desk Portal Card */}
            <div className="lg:col-span-6 bg-white rounded-md p-6 shadow-md border border-[#c1c8c2]/50">
              <div className="flex items-center justify-between border-b border-[#c1c8c2]/30 pb-4 mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span className="font-['Plus_Jakarta_Sans'] text-xs font-bold text-[#1b1c1a]">
                    Elena Vance Client Desk
                  </span>
                </div>
                <span className="font-['Plus_Jakarta_Sans'] text-[10px] uppercase tracking-wider text-[#727974] font-mono">
                  Encrypted Portal
                </span>
              </div>

              <div className="space-y-3">
                {/* Item 1 */}
                <div className="p-3.5 bg-[#fbf9f6] rounded-xs flex items-center justify-between border border-[#c1c8c2]/35 hover:border-[#032217]/40 transition-colors">
                  <div>
                    <span className="font-['Plus_Jakarta_Sans'] text-xs font-semibold text-[#1b1c1a] block">
                      Upcoming Post Draft #07
                    </span>
                    <span className="text-[11px] text-[#424844] block font-light">
                      Status: Awaiting 30-sec Audio Review
                    </span>
                  </div>
                  <button
                    onClick={onOpenPortal}
                    className="px-3.5 py-1.5 bg-[#032217] text-white rounded-xs text-xs font-['Plus_Jakarta_Sans'] font-medium hover:bg-[#1a382b] transition-colors cursor-pointer flex items-center gap-1"
                  >
                    Review <ArrowRight className="w-3 h-3" />
                  </button>
                </div>

                {/* Item 2 */}
                <div className="p-3.5 bg-[#fbf9f6] rounded-xs flex items-center justify-between border border-[#c1c8c2]/35">
                  <div>
                    <span className="font-['Plus_Jakarta_Sans'] text-xs font-semibold text-[#1b1c1a] block">
                      Voice Download Recording
                    </span>
                    <span className="text-[11px] text-[#424844] block font-light">
                      Sync Scheduled · Thursday 2:00 PM CET
                    </span>
                  </div>
                  <Calendar className="w-4 h-4 text-[#424844]" />
                </div>

                {/* Item 3 */}
                <div className="p-3.5 bg-[#fbf9f6] rounded-xs flex items-center justify-between border border-[#c1c8c2]/35">
                  <div>
                    <span className="font-['Plus_Jakarta_Sans'] text-xs font-semibold text-[#1b1c1a] block">
                      Retainer Invoicing &amp; Retainer Desk
                    </span>
                    <span className="text-[11px] text-[#424844] block font-light">
                      USD / INR Auto-settlement active
                    </span>
                  </div>
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-[#c1c8c2]/30 flex justify-end">
                <button
                  onClick={onOpenPortal}
                  className="font-['Plus_Jakarta_Sans'] text-xs text-[#032217] font-semibold hover:underline flex items-center gap-1"
                >
                  Launch Full Private Salon Desk →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
