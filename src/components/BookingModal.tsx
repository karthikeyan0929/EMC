import React, { useState } from 'react';
import { X, Shield, Calendar, Clock, CheckCircle2 } from 'lucide-react';
import { PricingTier, ServiceDetail } from '../data/content';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedTier?: PricingTier | null;
  preselectedService?: ServiceDetail | null;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  preselectedTier,
  preselectedService
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [selectedService, setSelectedService] = useState<string>(
    preselectedTier?.title || preselectedService?.title || 'Thought Leadership Retainer'
  );
  const [preferredDate, setPreferredDate] = useState('2026-10-06');
  const [preferredTime, setPreferredTime] = useState('14:00 CET');
  const [notes, setNotes] = useState('');
  const [ndaChecked, setNdaChecked] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-[#1b1c1a]/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-md max-w-xl w-full p-6 sm:p-8 shadow-2xl max-h-[92vh] overflow-y-auto relative border border-[#c1c8c2]/60 animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1 text-[#727974] hover:text-[#1b1c1a] hover:bg-[#efeeeb] rounded-xs transition-colors"
          aria-label="Close booking modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            <span className="font-['Plus_Jakarta_Sans'] text-xs font-semibold text-[#1a382b] uppercase tracking-widest block mb-2">
              Confidential Salon Call
            </span>
            <h3 className="font-['Playfair_Display'] text-2xl sm:text-3xl text-[#1b1c1a] mb-2">
              Schedule an Exploratory Session
            </h3>
            <p className="font-['Plus_Jakarta_Sans'] text-xs sm:text-sm text-[#424844] mb-6 font-light leading-relaxed">
              A private 30-minute discussion to evaluate your current positioning, determine editorial alignment, and explore retainer availability.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 font-['Plus_Jakarta_Sans']">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#1b1c1a] font-semibold mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Marcus Vance"
                    className="w-full bg-[#fbf9f6] rounded-xs p-2.5 text-xs text-[#1b1c1a] border border-[#c1c8c2]/60 focus:outline-none focus:border-[#032217]"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#1b1c1a] font-semibold mb-1">
                    Executive / Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@company.com"
                    className="w-full bg-[#fbf9f6] rounded-xs p-2.5 text-xs text-[#1b1c1a] border border-[#c1c8c2]/60 focus:outline-none focus:border-[#032217]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#1b1c1a] font-semibold mb-1">
                    Current Role &amp; Organization *
                  </label>
                  <input
                    type="text"
                    required
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="e.g. CEO, Series B Fintech"
                    className="w-full bg-[#fbf9f6] rounded-xs p-2.5 text-xs text-[#1b1c1a] border border-[#c1c8c2]/60 focus:outline-none focus:border-[#032217]"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#1b1c1a] font-semibold mb-1">
                    LinkedIn Profile URL
                  </label>
                  <input
                    type="text"
                    value={linkedin}
                    onChange={(e) => setLinkedin(e.target.value)}
                    placeholder="linkedin.com/in/username"
                    className="w-full bg-[#fbf9f6] rounded-xs p-2.5 text-xs text-[#1b1c1a] border border-[#c1c8c2]/60 focus:outline-none focus:border-[#032217]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#1b1c1a] font-semibold mb-1">
                  Engagement of Interest
                </label>
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full bg-[#fbf9f6] rounded-xs p-2.5 text-xs text-[#1b1c1a] border border-[#c1c8c2]/60 focus:outline-none focus:border-[#032217]"
                >
                  <option value="Thought Leadership Retainer">Thought Leadership Retainer ($4,800/mo · 8 Posts)</option>
                  <option value="Advisory Sprint">Advisory Sprint ($2,400 one-time · 3 Weeks)</option>
                  <option value="Executive Authority Suite">Executive Authority Suite ($7,500/mo · Multi-channel)</option>
                  <option value="LinkedIn Profile Messaging Makeover">LinkedIn Profile Messaging &amp; Makeover</option>
                  <option value="General Strategic Inquiry">General Strategic Inquiry / Custom Desk</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#1b1c1a] font-semibold mb-1">
                    Proposed Date
                  </label>
                  <input
                    type="date"
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className="w-full bg-[#fbf9f6] rounded-xs p-2.5 text-xs text-[#1b1c1a] border border-[#c1c8c2]/60 focus:outline-none focus:border-[#032217]"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#1b1c1a] font-semibold mb-1">
                    Preferred Time Window
                  </label>
                  <select
                    value={preferredTime}
                    onChange={(e) => setPreferredTime(e.target.value)}
                    className="w-full bg-[#fbf9f6] rounded-xs p-2.5 text-xs text-[#1b1c1a] border border-[#c1c8c2]/60 focus:outline-none focus:border-[#032217]"
                  >
                    <option value="10:00 CET">10:00 AM CET (Zurich / Europe)</option>
                    <option value="14:00 CET">2:00 PM CET / 8:00 AM EST (US East)</option>
                    <option value="17:00 CET">5:00 PM CET / 11:00 AM EST / 8:00 AM PST</option>
                    <option value="19:00 IST">7:00 PM IST (Mumbai / Asia)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#727974] font-semibold mb-1">
                  Primary Objectives / Desired Outcome
                </label>
                <textarea
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="e.g. Upcoming Series B announcement, transitioning from operational founder to fund GP..."
                  className="w-full bg-[#fbf9f6] rounded-xs p-2.5 text-xs text-[#1b1c1a] border border-[#c1c8c2]/60 focus:outline-none focus:border-[#032217]"
                />
              </div>

              {/* NDA Guarantee */}
              <label className="flex items-start gap-2.5 pt-1 cursor-pointer">
                <input
                  type="checkbox"
                  checked={ndaChecked}
                  onChange={(e) => setNdaChecked(e.target.checked)}
                  required
                  className="mt-0.5 accent-[#032217]"
                />
                <span className="text-[11px] text-[#424844] leading-normal font-light">
                  I request mutual Non-Disclosure Agreement (NDA) coverage prior to our introductory call. All business anecdotes remain strictly confidential.
                </span>
              </label>

              <button
                type="submit"
                className="w-full py-3.5 bg-[#032217] text-white font-['Plus_Jakarta_Sans'] text-xs uppercase tracking-wider font-semibold rounded-xs shadow-md hover:bg-[#1a382b] transition-all flex items-center justify-center gap-2 mt-2"
              >
                Confirm Salon Call Invitation →
              </button>
            </form>
          </div>
        ) : (
          /* Confirmation Receipt State */
          <div className="text-center py-6 space-y-5 animate-in fade-in duration-300">
            <div className="w-12 h-12 rounded-full bg-[#c8ead7] text-[#022115] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6 text-[#022115]" />
            </div>

            <div className="space-y-2">
              <span className="font-['Plus_Jakarta_Sans'] text-xs font-semibold text-[#1a382b] uppercase tracking-widest">
                Invitation Dispatched
              </span>
              <h3 className="font-['Playfair_Display'] text-2xl sm:text-3xl text-[#1b1c1a]">
                Thank you, {name || 'Partner'}.
              </h3>
              <p className="font-['Plus_Jakarta_Sans'] text-sm text-[#424844] max-w-md mx-auto font-light leading-relaxed">
                Elena has received your briefing for the <strong className="text-[#1b1c1a] font-medium">{selectedService}</strong>. A calendar invite and mutual NDA draft have been dispatched to <strong className="text-[#1b1c1a] font-medium">{email || 'your email'}</strong>.
              </p>
            </div>

            <div className="bg-[#f5f3f0] p-4 rounded-xs border border-[#c1c8c2]/40 text-left max-w-md mx-auto text-xs space-y-1.5 font-['Plus_Jakarta_Sans']">
              <div className="flex items-center gap-2 text-[#032217] font-semibold">
                <Calendar className="w-4 h-4 text-[#1a382b]" /> Requested Date: {preferredDate}
              </div>
              <div className="flex items-center gap-2 text-[#424844]">
                <Clock className="w-4 h-4 text-[#727974]" /> Time Window: {preferredTime}
              </div>
              <div className="flex items-center gap-2 text-[#424844]">
                <Shield className="w-4 h-4 text-emerald-700" /> Mutual NDA Status: Auto-Generated
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={handleReset}
                className="px-6 py-2.5 bg-[#032217] text-white text-xs font-semibold rounded-xs font-['Plus_Jakarta_Sans'] hover:bg-[#1a382b] transition-all"
              >
                Return to Atelier
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
