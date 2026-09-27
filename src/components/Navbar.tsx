import React, { useState } from 'react';
import { Menu, X, ShieldCheck } from 'lucide-react';

interface NavbarProps {
  onOpenPortal: () => void;
  onOpenBooking: () => void;
  activeSection: string;
}

export const PORTRAIT_IMAGE_URL =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDehgpRY0hiYUaPegiufGhf-cJxVdWNkWvXbEhn63ZHEJOq-mmLClhEbrk62zmvEH7BwZ4MEtWKIPly6AojJuGE0Nf-2kGKKdpf8KBFuPd29LLGMFEP_v1m5Fhj9LGNA6iehRMs2cT8GgqkvycZZ3Kbh1FGDUfTPbpY_NNex0jjmuRzSGURLWQ9vQ3Ae1vyemGZgdebtNgxKQD8zJLzwb5eblfWrioqPPdQVYPjbkJ6fv7-bmqglI-K';

export const Navbar: React.FC<NavbarProps> = ({
  onOpenPortal,
  onOpenBooking,
  activeSection,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Services', href: '#services', id: 'services' },
    { label: 'Selected Work', href: '#selected-work', id: 'selected-work' },
    { label: 'Philosophy', href: '#philosophy', id: 'philosophy' },
    { label: 'Process', href: '#process', id: 'process' },
    { label: 'Tools', href: '#tools', id: 'tools' },
    { label: 'FAQ', href: '#faq', id: 'faq' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#fbf9f6]/92 backdrop-blur-md border-b border-[#c1c8c2]/35 transition-all">
      <div className="h-20 max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-between gap-4">
        {/* Zone 1: Wordmark & Identity */}
        <a href="#" className="flex items-center gap-3 group focus:outline-none">
          <img
            src={PORTRAIT_IMAGE_URL}
            alt="Elena Vance portrait"
            referrerPolicy="no-referrer"
            className="h-9 w-9 rounded-full object-cover border border-[#1a382b]/20 shadow-xs"
          />
          <div className="flex flex-col">
            <span className="font-['Playfair_Display'] text-lg font-semibold tracking-tight text-[#032217] leading-none group-hover:text-[#1a382b] transition-colors">
              Elena Vance
            </span>
            <span className="font-['Plus_Jakarta_Sans'] text-[10px] sm:text-[11px] font-semibold tracking-wider text-[#424844] uppercase mt-1">
              LinkedIn Content Creator &amp; Ghostwriter
            </span>
          </div>
        </a>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden xl:flex items-center gap-6 text-[13px] font-['Plus_Jakarta_Sans'] font-medium text-[#424844]">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                className={`py-1.5 transition-colors border-b ${
                  isActive
                    ? 'text-[#032217] font-semibold border-[#032217]'
                    : 'border-transparent hover:text-[#1b1c1a]'
                }`}
              >
                {link.label}
              </a>
            );
          })}
          <button
            onClick={onOpenPortal}
            className="flex items-center gap-1.5 text-[13px] py-1.5 text-[#1a382b] font-semibold hover:text-[#032217] transition-colors border-b border-transparent hover:border-[#1a382b]"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse"></span>
            Client Desk
          </button>
        </nav>

        {/* Zone 3: Primary Action & Portal Access */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenBooking}
            className="hidden sm:inline-flex items-center justify-center bg-[#032217] text-white font-['Plus_Jakarta_Sans'] text-xs font-semibold px-5 py-2.5 rounded-sm hover:bg-[#1a382b] transition-all shadow-xs hover:shadow-sm"
          >
            Let&apos;s Talk →
          </button>

          <button
            onClick={onOpenPortal}
            title="Access Encrypted Client Desk"
            className="w-9 h-9 rounded-full bg-[#efeeeb] hover:bg-[#eae8e5] text-[#032217] flex items-center justify-center transition-colors border border-[#c1c8c2]/50 relative"
          >
            <ShieldCheck className="w-4 h-4 text-[#1a382b]" />
            <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-600 border border-white"></span>
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 text-[#1b1c1a] hover:bg-[#efeeeb] rounded-sm transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#fbf9f6] border-b border-[#c1c8c2]/40 px-6 py-5 space-y-3">
          <div className="flex flex-col space-y-2.5 font-['Plus_Jakarta_Sans'] text-sm">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 text-[#424844] hover:text-[#032217] font-medium"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPortal();
              }}
              className="text-left py-1 text-[#1a382b] font-semibold flex items-center gap-2"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
              Client Portal Desk
            </button>
          </div>
          <div className="pt-3 border-t border-[#c1c8c2]/30 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full text-center bg-[#032217] text-white py-2.5 text-xs font-semibold rounded-sm"
            >
              Schedule Salon Call →
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
