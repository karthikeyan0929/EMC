import React, { useState } from 'react';
import {
  X,
  CreditCard,
  Lock,
  Calendar,
  CheckCircle2,
  Mic,
  Send,
  Clock,
  Sparkles,
  FileText,
  ThumbsUp,
  Download
} from 'lucide-react';

interface ClientPortalModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenBooking: () => void;
}

export const ClientPortalModal: React.FC<ClientPortalModalProps> = ({
  isOpen,
  onClose,
  onOpenBooking
}) => {
  const [activeTab, setActiveTab] = useState<'review' | 'sync' | 'billing'>('review');
  const [draftStatus, setDraftStatus] = useState<'pending' | 'approved'>('pending');
  const [feedbackNote, setFeedbackNote] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [voiceNotes, setVoiceNotes] = useState<string[]>([
    '“Let’s soften the third paragraph so it doesn’t sound adversarial to our previous investor.”'
  ]);

  if (!isOpen) return null;

  const handleApprove = () => {
    setDraftStatus('approved');
  };

  const handleAddFeedback = (e: React.FormEvent) => {
    e.preventDefault();
    if (!feedbackNote.trim()) return;
    setVoiceNotes([...voiceNotes, `“${feedbackNote.trim()}”`]);
    setFeedbackNote('');
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-[#1b1c1a]/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-md max-w-4xl w-full p-6 sm:p-8 shadow-2xl max-h-[92vh] overflow-y-auto relative border border-[#c1c8c2]/60 animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="flex items-center justify-between border-b border-[#c1c8c2]/35 pb-4 mb-6">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <div>
              <h3 className="font-['Playfair_Display'] text-xl sm:text-2xl text-[#032217] font-semibold">
                Elena Vance Private Client Desk
              </h3>
              <div className="flex items-center gap-3 text-[11px] font-['Plus_Jakarta_Sans'] text-[#727974] uppercase tracking-wider font-semibold">
                <span>Encrypted Executive Salon</span>
                <span>•</span>
                <span className="flex items-center gap-1 text-emerald-700">
                  <Lock className="w-3 h-3" /> Mutual NDA Active
                </span>
              </div>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1 text-[#727974] hover:text-[#1b1c1a] hover:bg-[#efeeeb] rounded-xs transition-colors"
            aria-label="Close client portal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b border-[#c1c8c2]/30 gap-2 mb-6">
          <button
            onClick={() => setActiveTab('review')}
            className={`pb-2.5 px-3 font-['Plus_Jakarta_Sans'] text-xs font-semibold uppercase tracking-wider transition-all border-b-2 ${
              activeTab === 'review'
                ? 'border-[#032217] text-[#032217]'
                : 'border-transparent text-[#727974] hover:text-[#1b1c1a]'
            }`}
          >
            Post Review (Draft #07)
          </button>
          <button
            onClick={() => setActiveTab('sync')}
            className={`pb-2.5 px-3 font-['Plus_Jakarta_Sans'] text-xs font-semibold uppercase tracking-wider transition-all border-b-2 ${
              activeTab === 'sync'
                ? 'border-[#032217] text-[#032217]'
                : 'border-transparent text-[#727974] hover:text-[#1b1c1a]'
            }`}
          >
            Voice Sync &amp; Calendar
          </button>
          <button
            onClick={() => setActiveTab('billing')}
            className={`pb-2.5 px-3 font-['Plus_Jakarta_Sans'] text-xs font-semibold uppercase tracking-wider transition-all border-b-2 ${
              activeTab === 'billing'
                ? 'border-[#032217] text-[#032217]'
                : 'border-transparent text-[#727974] hover:text-[#1b1c1a]'
            }`}
          >
            Retainer Settlement &amp; Invoices
          </button>
        </div>

        {/* Tab 1: Post Review */}
        {activeTab === 'review' && (
          <div className="space-y-6">
            <div className="bg-[#f5f3f0] p-4 sm:p-5 rounded-xs border border-[#c1c8c2]/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-['Plus_Jakarta_Sans'] text-xs font-bold uppercase tracking-wider text-[#032217]">
                    Upcoming Dispatch #07
                  </span>
                  <span className="text-xs text-[#727974]">· Scheduled for Tuesday 8:30 AM EST</span>
                </div>
                <p className="font-['Playfair_Display'] text-lg text-[#1b1c1a] mt-1 font-semibold">
                  “The 3 Unspoken Reasons Behind Our Series B Acceleration”
                </p>
              </div>

              <div className="flex items-center gap-3">
                {draftStatus === 'approved' ? (
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-emerald-100 text-emerald-900 rounded-xs font-['Plus_Jakarta_Sans'] text-xs font-semibold">
                    <CheckCircle2 className="w-4 h-4 text-emerald-700" /> Approved for Queue
                  </span>
                ) : (
                  <button
                    onClick={handleApprove}
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#032217] text-white rounded-xs font-['Plus_Jakarta_Sans'] text-xs font-semibold hover:bg-[#1a382b] transition-all shadow-xs"
                  >
                    <ThumbsUp className="w-3.5 h-3.5" /> 1-Click Approve Post
                  </button>
                )}
              </div>
            </div>

            {/* Simulated Manuscript View */}
            <div className="p-6 bg-[#fbf9f6] rounded-xs border border-[#c1c8c2]/50 space-y-4">
              <div className="flex items-center justify-between border-b border-[#c1c8c2]/30 pb-2">
                <span className="font-mono text-xs text-[#727974] uppercase">
                  Formatted for LinkedIn Algorithm &amp; Desktop / Mobile Breakpoints
                </span>
                <span className="font-mono text-xs text-[#727974]">210 words · 90s read</span>
              </div>

              <div className="font-['Playfair_Display'] text-base text-[#1b1c1a] space-y-3 leading-relaxed font-light whitespace-pre-line">
                {`Most founders celebrate closing a funding round like it's a finish line.

It's not. It's an obligation to execute with twice the discipline and half the excuses.

When we crossed the wire on our Series B last month, my co-founder and I didn't open champagne. We sat in a quiet conference room and wrote a list of everything we had promised our customers we would NEVER compromise on:

1. Keeping our senior engineers on customer support calls twice a month.
2. Refusing vanity expansion into enterprise verticals that dilute our core architecture.
3. Saying no to prospective clients who treat our junior implementers disrespectfully.

Capital accelerates what already exists. If your foundation is cracked, more money just breaks it faster.

Protect the quiet rigor that got you here.`}
              </div>
            </div>

            {/* Asynchronous Voice Notes & Tweaks */}
            <div className="bg-[#efeeeb] p-5 rounded-xs border border-[#c1c8c2]/40 space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-['Plus_Jakarta_Sans'] text-xs uppercase tracking-wider font-semibold text-[#032217] flex items-center gap-1.5">
                  <Mic className="w-4 h-4 text-[#1a382b]" /> Asynchronous Voice &amp; Revision Notes
                </span>
                <span className="text-[11px] text-[#727974] font-mono">Elena Vance responds within 3 hours</span>
              </div>

              <div className="space-y-2">
                {voiceNotes.map((note, idx) => (
                  <div key={idx} className="bg-white p-3 rounded-xs border border-[#c1c8c2]/30 text-xs font-['Playfair_Display'] italic text-[#1b1c1a]">
                    {note}
                  </div>
                ))}
              </div>

              <form onSubmit={handleAddFeedback} className="flex gap-2">
                <input
                  type="text"
                  value={feedbackNote}
                  onChange={(e) => setFeedbackNote(e.target.value)}
                  placeholder="Drop a quick nuance, sentence edit, or voice observation..."
                  className="flex-1 bg-white rounded-xs p-2.5 text-xs text-[#1b1c1a] border border-[#c1c8c2]/60 focus:outline-none focus:border-[#032217]"
                />
                <button
                  type="button"
                  onClick={() => setIsRecording(!isRecording)}
                  className={`px-3 py-2 rounded-xs border transition-colors flex items-center gap-1 text-xs font-['Plus_Jakarta_Sans'] font-medium ${
                    isRecording ? 'bg-red-100 border-red-300 text-red-700 animate-pulse' : 'bg-white border-[#c1c8c2]/60 text-[#424844] hover:bg-[#eae8e5]'
                  }`}
                  title="Simulate recording voice memo"
                >
                  <Mic className="w-3.5 h-3.5" />
                  {isRecording ? 'Recording (0:14)...' : 'Record'}
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#032217] text-white rounded-xs font-['Plus_Jakarta_Sans'] text-xs font-semibold hover:bg-[#1a382b] flex items-center gap-1.5"
                >
                  <Send className="w-3.5 h-3.5" /> Send
                </button>
              </form>
            </div>
          </div>
        )}

        {/* Tab 2: Voice Sync & Calendar */}
        {activeTab === 'sync' && (
          <div className="space-y-6">
            <div className="p-6 bg-[#f5f3f0] rounded-xs border border-[#c1c8c2]/40 space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-['Plus_Jakarta_Sans'] text-xs font-semibold uppercase tracking-wider text-[#032217] flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-[#1a382b]" /> Upcoming Monthly Voice Download
                </span>
                <span className="px-2.5 py-1 bg-white text-emerald-800 border border-emerald-300 rounded-xs text-[11px] font-semibold">
                  Confirmed on Calendar
                </span>
              </div>

              <div className="bg-white p-4 rounded-xs border border-[#c1c8c2]/30 space-y-1">
                <div className="text-base font-['Playfair_Display'] font-semibold text-[#1b1c1a]">
                  Thursday, October 2nd · 2:00 PM – 2:45 PM CET (Zurich / London Sync)
                </div>
                <p className="text-xs text-[#424844] font-['Plus_Jakarta_Sans']">
                  Format: Private Google Meet link + encrypted audio transcript recorder.
                </p>
              </div>

              <p className="text-xs text-[#424844] font-['Plus_Jakarta_Sans'] leading-relaxed">
                During this single 45-minute audio session, Elena will extract your perspective on current team pivots, customer anecdotes, and industry developments. No preparation required — just speak freely.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <button
                  onClick={() => alert('Calendar event synced to your default executive client calendar.')}
                  className="px-4 py-2 bg-[#032217] text-white text-xs font-semibold rounded-xs hover:bg-[#1a382b] transition-all font-['Plus_Jakarta_Sans']"
                >
                  Add to Executive Calendar (.ics)
                </button>
                <button
                  onClick={onOpenBooking}
                  className="px-4 py-2 bg-[#efeeeb] text-[#1b1c1a] text-xs font-semibold rounded-xs hover:bg-[#eae8e5] transition-all font-['Plus_Jakarta_Sans']"
                >
                  Reschedule Window
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Billing & Invoices */}
        {activeTab === 'billing' && (
          <div className="space-y-6">
            <div className="p-6 bg-[#f5f3f0] rounded-xs border border-[#c1c8c2]/40 space-y-4">
              <div className="flex items-center justify-between border-b border-[#c1c8c2]/30 pb-3">
                <div>
                  <span className="font-['Plus_Jakarta_Sans'] text-xs font-semibold uppercase tracking-wider text-[#032217] block">
                    Active Retainer: Thought Leadership Desk
                  </span>
                  <span className="text-xs text-[#727974] font-mono">Quarterly Agreement · Month 2 of 3</span>
                </div>
                <span className="px-3 py-1 bg-emerald-100 text-emerald-900 rounded-xs text-xs font-semibold">
                  Auto-Settled
                </span>
              </div>

              <div className="space-y-2.5">
                <div className="bg-white p-3.5 rounded-xs border border-[#c1c8c2]/30 flex items-center justify-between text-xs">
                  <div>
                    <span className="font-semibold text-[#1b1c1a] block font-['Plus_Jakarta_Sans']">Invoice #EV-2025-098</span>
                    <span className="text-[#727974]">October Retainer · USD $4,800 / INR ₹3,90,000</span>
                  </div>
                  <button
                    onClick={() => alert('Downloading official encrypted tax invoice PDF...')}
                    className="flex items-center gap-1 text-[#032217] font-semibold hover:underline"
                  >
                    <Download className="w-3.5 h-3.5" /> PDF
                  </button>
                </div>

                <div className="bg-white p-3.5 rounded-xs border border-[#c1c8c2]/30 flex items-center justify-between text-xs">
                  <div>
                    <span className="font-semibold text-[#1b1c1a] block font-['Plus_Jakarta_Sans']">Invoice #EV-2025-084</span>
                    <span className="text-[#727974]">September Retainer · Settled via Wire</span>
                  </div>
                  <span className="text-emerald-700 font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Paid
                  </span>
                </div>
              </div>

              <div className="pt-2 flex items-center gap-4 text-[11px] font-['Plus_Jakarta_Sans'] text-[#727974] uppercase tracking-wider">
                <span className="flex items-center gap-1">
                  <CreditCard className="w-3.5 h-3.5 text-[#032217]" /> Corporate Card / Wire / Stripe
                </span>
                <span>•</span>
                <span>All Receipts VAT / GST Compliant</span>
              </div>
            </div>
          </div>
        )}

        {/* Modal Bottom Footer */}
        <div className="mt-8 pt-4 border-t border-[#c1c8c2]/30 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 bg-[#efeeeb] text-[#1b1c1a] font-['Plus_Jakarta_Sans'] text-xs font-semibold rounded-xs hover:bg-[#eae8e5] transition-colors"
          >
            Close Client Desk View
          </button>
        </div>
      </div>
    </div>
  );
};
