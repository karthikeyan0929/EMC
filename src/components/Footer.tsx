import React from 'react';

interface FooterProps {
  onOpenBooking: () => void;
  onExploreWork: () => void;
  onOpenPolicy: (title: string, content: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenBooking,
  onExploreWork,
  onOpenPolicy,
}) => {
  return (
    <>
      {/* 15. FINAL EDITORIAL CTA */}
      <section className="w-full bg-[#032217] text-white py-16 lg:py-24 relative overflow-hidden" id="contact">
        {/* Ambient subtle background glow */}
        <div className="absolute -right-20 -bottom-20 w-96 h-96 rounded-full bg-[#1a382b]/50 blur-3xl pointer-events-none"></div>

        <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <span className="font-['Plus_Jakarta_Sans'] text-xs font-semibold text-[#c8ead7] uppercase tracking-widest block">
              Start The Conversation
            </span>

            <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl lg:text-5xl leading-tight font-normal text-[#fbf9f6]">
              You bring the experience.<br />
              <span className="italic text-[#c8ead7]">I&apos;ll help tell the story.</span>
            </h2>

            <p className="font-['Plus_Jakarta_Sans'] text-base sm:text-lg text-[#81a291] max-w-xl mx-auto font-light leading-relaxed">
              I partner with a strictly limited roster of 6 concurrent executive retainers to ensure uncompromising editorial focus. Let&apos;s explore if we&apos;re a fit.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto inline-flex items-center justify-center bg-[#fbf9f6] text-[#032217] font-['Plus_Jakarta_Sans'] text-xs uppercase tracking-wider font-semibold px-8 py-4 rounded-xs shadow-lg hover:bg-white transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                Schedule a Confidential Salon Call →
              </button>
              <button
                onClick={onExploreWork}
                className="w-full sm:w-auto inline-flex items-center justify-center bg-transparent border border-[#adcebc]/40 text-[#fbf9f6] font-['Plus_Jakarta_Sans'] text-xs uppercase tracking-wider font-medium px-7 py-4 rounded-xs hover:bg-[#1a382b] transition-all"
              >
                Explore Folio Archive
              </button>
            </div>

            <div className="pt-8 text-xs font-['Plus_Jakarta_Sans'] text-[#81a291] uppercase tracking-wider font-medium">
              Direct Inquiries:{' '}
              <a
                href="mailto:elena@elenavance.studio"
                className="text-[#fbf9f6] font-mono hover:underline"
              >
                elena@elenavance.studio
              </a>{' '}
              • Zurich • New York
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full bg-[#f5f3f0] border-t border-[#c1c8c2]/40">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12 pt-16 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">
            {/* Col 1 */}
            <div className="lg:col-span-5 flex flex-col justify-between pr-0 lg:pr-8">
              <div className="space-y-3">
                <span className="font-['Playfair_Display'] text-2xl text-[#032217] tracking-tight block font-semibold">
                  Elena Vance
                </span>
                <p className="font-['Playfair_Display'] text-sm italic text-[#424844] max-w-md leading-relaxed">
                  Elevating executive presences into definitive industry voices through rigorous literary craft and narrative strategy.
                </p>
              </div>
              <div className="pt-6">
                <span className="font-['Plus_Jakarta_Sans'] text-[11px] text-[#727974] uppercase tracking-widest block mb-1 font-semibold">
                  Office
                </span>
                <p className="font-['Plus_Jakarta_Sans'] text-xs text-[#1b1c1a]">
                  New York • Zurich • Private Digital Salon
                </p>
              </div>
            </div>

            {/* Col 2 */}
            <div className="lg:col-span-2 flex flex-col space-y-2.5">
              <span className="font-['Plus_Jakarta_Sans'] text-[11px] text-[#727974] uppercase tracking-widest mb-1 border-b border-[#c1c8c2]/30 pb-2 font-semibold">
                Explore
              </span>
              <a href="#about" className="font-['Plus_Jakarta_Sans'] text-xs text-[#424844] hover:text-[#032217] transition-colors">
                About
              </a>
              <a href="#selected-work" className="font-['Plus_Jakarta_Sans'] text-xs text-[#424844] hover:text-[#032217] transition-colors">
                Selected Work
              </a>
              <a href="#philosophy" className="font-['Plus_Jakarta_Sans'] text-xs text-[#424844] hover:text-[#032217] transition-colors">
                Philosophy
              </a>
              <a href="#tools" className="font-['Plus_Jakarta_Sans'] text-xs text-[#424844] hover:text-[#032217] transition-colors">
                Tools &amp; Stack
              </a>
              <a href="#faq" className="font-['Plus_Jakarta_Sans'] text-xs text-[#424844] hover:text-[#032217] transition-colors">
                Inquiries &amp; FAQ
              </a>
            </div>

            {/* Col 3 */}
            <div className="lg:col-span-2 flex flex-col space-y-2.5">
              <span className="font-['Plus_Jakarta_Sans'] text-[11px] text-[#727974] uppercase tracking-widest mb-1 border-b border-[#c1c8c2]/30 pb-2 font-semibold">
                Practice
              </span>
              <a href="#services" className="font-['Plus_Jakarta_Sans'] text-xs text-[#424844] hover:text-[#032217] transition-colors">
                Executive Ghostwriting
              </a>
              <a href="#services" className="font-['Plus_Jakarta_Sans'] text-xs text-[#424844] hover:text-[#032217] transition-colors">
                Personal Brand Advisory
              </a>
              <a href="#process" className="font-['Plus_Jakarta_Sans'] text-xs text-[#424844] hover:text-[#032217] transition-colors">
                The Monograph Method
              </a>
              <a href="#client-portal" className="font-['Plus_Jakarta_Sans'] text-xs text-[#424844] hover:text-[#032217] transition-colors">
                Private Client Desk
              </a>
            </div>

            {/* Col 4 */}
            <div className="lg:col-span-3 flex flex-col space-y-2.5">
              <span className="font-['Plus_Jakarta_Sans'] text-[11px] text-[#727974] uppercase tracking-widest mb-1 border-b border-[#c1c8c2]/30 pb-2 font-semibold">
                Connect
              </span>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="font-['Plus_Jakarta_Sans'] text-xs text-[#424844] hover:text-[#032217] transition-colors"
              >
                LinkedIn Dispatch
              </a>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  alert('Substack Dispatches: The Monograph Journal publishes bi-weekly editorial insights.');
                }}
                className="font-['Plus_Jakarta_Sans'] text-xs text-[#424844] hover:text-[#032217] transition-colors"
              >
                Substack Dispatches
              </a>
              <a
                href="mailto:elena@elenavance.studio"
                className="font-['Plus_Jakarta_Sans'] text-xs text-[#424844] hover:text-[#032217] transition-colors"
              >
                Direct Email (elena@elenavance.studio)
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                className="font-['Plus_Jakarta_Sans'] text-xs text-[#424844] hover:text-[#032217] transition-colors"
              >
                X / Twitter
              </a>
            </div>
          </div>

          {/* Bottom Copyright & Legal Links */}
          <div className="border-t border-[#c1c8c2]/40 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 font-['Plus_Jakarta_Sans'] text-xs text-[#727974]">
            <p>© 2025–2026 Elena Vance Studio. All rights reserved.</p>
            <div className="flex items-center gap-3">
              <button
                onClick={() =>
                  onOpenPolicy(
                    'Privacy Policy',
                    'All client information, communications, unedited transcripts, voice recordings, and business metrics are treated as strictly confidential under legally binding non-disclosure agreements. We never sell, share, or train AI models on client data.'
                  )
                }
                className="hover:text-[#1b1c1a] transition-colors"
              >
                Privacy Policy
              </button>
              <span>•</span>
              <button
                onClick={() =>
                  onOpenPolicy(
                    'Terms of Engagement',
                    'Advisory retainers are billed quarterly with monthly cadence installments. All deliverables include a 48-hour review turnaround and unlimited iterations during active billing periods.'
                  )
                }
                className="hover:text-[#1b1c1a] transition-colors"
              >
                Terms of Engagement
              </button>
              <span>•</span>
              <button
                onClick={() =>
                  onOpenPolicy(
                    'Confidentiality & Disclosures',
                    'Published posts displayed in the folio have been anonymized with permission. Elena Vance takes zero public attribution on client dispatches.'
                  )
                }
                className="hover:text-[#1b1c1a] transition-colors"
              >
                Disclosures
              </button>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
