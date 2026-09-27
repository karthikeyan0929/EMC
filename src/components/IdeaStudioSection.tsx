import React, { useState } from 'react';
import { Sparkles, Copy, Check, Wand2, RefreshCw } from 'lucide-react';
import { IDEA_PRESETS, IdeaAngle } from '../data/content';

export const IdeaStudioSection: React.FC = () => {
  const [role, setRole] = useState('founder');
  const [audience, setAudience] = useState('investors');
  const [intent, setIntent] = useState('authority');
  const [customTopic, setCustomTopic] = useState('');
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  // User's own voice test state
  const [activeTab, setActiveTab] = useState<'generator' | 'refiner'>('generator');
  const [rawDraft, setRawDraft] = useState('');
  const [refinedResult, setRefinedResult] = useState<string | null>(null);

  const key = `${role}-${audience}-${intent}`;
  const defaultPresets: IdeaAngle[] = IDEA_PRESETS[key] || [
    {
      hook: `“Why most ${audience} misunderstand the real cost of operational scale in modern ${role} setups.”`,
      rationale: `Directly addresses ${intent} by dismantling prevailing industry assumptions with empirical clarity.`,
      format: 'Tactical Deconstruction'
    },
    {
      hook: `“The 3 contrarian principles that guided our biggest strategy pivot this quarter.”`,
      rationale: 'Combines high-vulnerability narrative with executive tactical authority and authentic lessons.',
      format: 'Executive Turning Point'
    }
  ];

  const [currentAngles, setCurrentAngles] = useState<IdeaAngle[]>(defaultPresets);

  const handleGenerate = () => {
    let angles: IdeaAngle[] = [];
    if (customTopic.trim()) {
      angles = [
        {
          hook: `“Everything you think you know about ${customTopic.trim()} is built for a 2019 market. Here is what we found after 50 live client stress tests.”`,
          rationale: `Bridges ${customTopic.trim()} directly into high-urgency executive positioning for ${audience}.`,
          format: 'Contrarian Diagnostic'
        },
        {
          hook: `“I spent three years convinced ${customTopic.trim()} was our silver bullet. The turning point came when our lead engineer handed me their two-week notice.”`,
          rationale: 'Grounds the lesson in a human stakes crucible rather than dry corporate theory.',
          format: 'Crucible Monograph'
        }
      ];
    } else {
      angles = defaultPresets;
    }
    setCurrentAngles(angles);
  };

  const handleCopy = (text: string, idx: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(idx);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const handleRefineDraft = () => {
    if (!rawDraft.trim()) return;
    const trimmed = rawDraft.trim();
    // Simulate Elena's high-craft editorial voice transformation
    const refined = `“${trimmed.replace(/^(I think that|In my opinion,|We are excited to announce that|It is important to note that)\s*/i, '')}\n\nMost people look at this and see a routine milestone. What they don't see is the quiet discipline it demands when no one is watching.\n\nHere is the real lesson: true authority isn't about claiming the victory. It's about being willing to endure the unglamorous iterations that made it inevitable.”`;
    setRefinedResult(refined);
  };

  return (
    <section className="w-full bg-[#fbf9f6] py-16 lg:py-24 border-b border-[#c1c8c2]/30" id="tools">
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="bg-[#f5f3f0] rounded-lg p-6 sm:p-10 lg:p-12 shadow-xs border border-[#c1c8c2]/40">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div className="max-w-2xl">
              <span className="font-['Plus_Jakarta_Sans'] text-xs font-semibold text-[#1a382b] uppercase tracking-widest block mb-2">
                Interactive Idea Studio
              </span>
              <h2 className="font-['Playfair_Display'] text-2xl sm:text-3xl lg:text-4xl text-[#1b1c1a] font-normal">
                Not sure what to post? Let&apos;s uncover your angle.
              </h2>
              <p className="font-['Plus_Jakarta_Sans'] text-sm text-[#424844] mt-1 font-light">
                Choose your current parameters to generate bespoke, non-generic story frameworks immediately usable for your profile.
              </p>
            </div>

            {/* Mode Switcher */}
            <div className="inline-flex bg-[#efeeeb] p-1 rounded-xs border border-[#c1c8c2]/40 text-xs font-['Plus_Jakarta_Sans'] font-medium">
              <button
                onClick={() => setActiveTab('generator')}
                className={`px-3 py-1.5 rounded-xs transition-all ${
                  activeTab === 'generator'
                    ? 'bg-[#032217] text-white shadow-xs'
                    : 'text-[#424844] hover:text-[#032217]'
                }`}
              >
                Angle Studio
              </button>
              <button
                onClick={() => setActiveTab('refiner')}
                className={`px-3 py-1.5 rounded-xs transition-all ${
                  activeTab === 'refiner'
                    ? 'bg-[#032217] text-white shadow-xs'
                    : 'text-[#424844] hover:text-[#032217]'
                }`}
              >
                Draft Voice Refiner
              </button>
            </div>
          </div>

          {activeTab === 'generator' ? (
            <div>
              {/* Selectors Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                {/* Selector 1 */}
                <div>
                  <label className="block font-['Plus_Jakarta_Sans'] text-xs uppercase tracking-wider text-[#1b1c1a] mb-2 font-semibold">
                    1. What You Do
                  </label>
                  <select
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="w-full bg-white rounded-xs p-3 text-[#1b1c1a] font-['Plus_Jakarta_Sans'] text-sm shadow-xs border border-[#c1c8c2]/60 focus:outline-none focus:border-[#032217]"
                  >
                    <option value="founder">Tech / Venture Founder</option>
                    <option value="executive">Corporate C-Suite / VP</option>
                    <option value="consultant">Strategy Consultant / Partner</option>
                    <option value="engineer">Technical Lead / Architect</option>
                    <option value="creator">Operator / Creative Strategist</option>
                  </select>
                </div>

                {/* Selector 2 */}
                <div>
                  <label className="block font-['Plus_Jakarta_Sans'] text-xs uppercase tracking-wider text-[#1b1c1a] mb-2 font-semibold">
                    2. Target Audience
                  </label>
                  <select
                    value={audience}
                    onChange={(e) => setAudience(e.target.value)}
                    className="w-full bg-white rounded-xs p-3 text-[#1b1c1a] font-['Plus_Jakarta_Sans'] text-sm shadow-xs border border-[#c1c8c2]/60 focus:outline-none focus:border-[#032217]"
                  >
                    <option value="investors">Early-stage Investors &amp; VCs</option>
                    <option value="peers">Executive Peers &amp; Hiring Leaders</option>
                    <option value="talent">Top-tier Talent &amp; Recruits</option>
                    <option value="enterprise">Enterprise B2B Decision Makers</option>
                  </select>
                </div>

                {/* Selector 3 */}
                <div>
                  <label className="block font-['Plus_Jakarta_Sans'] text-xs uppercase tracking-wider text-[#1b1c1a] mb-2 font-semibold">
                    3. Primary Intent
                  </label>
                  <select
                    value={intent}
                    onChange={(e) => setIntent(e.target.value)}
                    className="w-full bg-white rounded-xs p-3 text-[#1b1c1a] font-['Plus_Jakarta_Sans'] text-sm shadow-xs border border-[#c1c8c2]/60 focus:outline-none focus:border-[#032217]"
                  >
                    <option value="authority">Establish Unquestioned Authority</option>
                    <option value="inbound">Generate High-Ticket Inbound Clients</option>
                    <option value="culture">Showcase Vulnerable Culture &amp; Hiring</option>
                    <option value="contrarian">Challenge Prevailing Industry Myths</option>
                  </select>
                </div>
              </div>

              {/* Optional Custom Topic */}
              <div className="mb-6">
                <label className="block font-['Plus_Jakarta_Sans'] text-xs uppercase tracking-wider text-[#727974] mb-1 font-semibold">
                  Optional: Specific Topic / Recent Milestone
                </label>
                <input
                  type="text"
                  placeholder="e.g. Fired our largest client, Pivot to enterprise, Raising flat round..."
                  value={customTopic}
                  onChange={(e) => setCustomTopic(e.target.value)}
                  className="w-full bg-white rounded-xs p-3 text-[#1b1c1a] font-['Plus_Jakarta_Sans'] text-sm border border-[#c1c8c2]/60 focus:outline-none focus:border-[#032217]"
                />
              </div>

              <div className="flex justify-start mb-8">
                <button
                  onClick={handleGenerate}
                  className="bg-[#032217] text-white font-['Plus_Jakarta_Sans'] text-xs font-semibold px-8 py-3.5 rounded-xs shadow-md hover:bg-[#1a382b] transition-all flex items-center gap-2"
                >
                  <Wand2 className="w-4 h-4 text-[#c8ead7]" />
                  Generate Bespoke Angles →
                </button>
              </div>

              {/* Generated Output Cards */}
              <div className="bg-white p-6 rounded-md shadow-xs border-l-4 border-[#032217] border border-[#c1c8c2]/40">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-['Plus_Jakarta_Sans'] text-xs text-[#032217] uppercase tracking-widest font-semibold flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#1a382b]" /> Elena&apos;s Curated Angles:
                  </span>
                  <button
                    onClick={handleGenerate}
                    className="text-xs text-[#727974] hover:text-[#032217] flex items-center gap-1 font-['Plus_Jakarta_Sans']"
                  >
                    <RefreshCw className="w-3 h-3" /> Refresh
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {currentAngles.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-4 bg-[#fbf9f6] rounded-xs border border-[#c1c8c2]/40 relative group hover:border-[#1a382b]/50 transition-all flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-['Plus_Jakarta_Sans'] text-[11px] text-[#727974] uppercase tracking-wider font-semibold">
                            {item.format || `Framework 0${idx + 1}`}
                          </span>
                          <button
                            onClick={() => handleCopy(item.hook, idx)}
                            className="p-1 text-[#727974] hover:text-[#032217] rounded-xs hover:bg-[#efeeeb] transition-colors"
                            title="Copy to clipboard"
                          >
                            {copiedIndex === idx ? (
                              <Check className="w-3.5 h-3.5 text-emerald-600" />
                            ) : (
                              <Copy className="w-3.5 h-3.5" />
                            )}
                          </button>
                        </div>
                        <p className="font-['Playfair_Display'] text-base text-[#1b1c1a] font-normal leading-relaxed">
                          {item.hook}
                        </p>
                      </div>
                      <span className="text-xs text-[#424844] mt-3 pt-2 border-t border-[#c1c8c2]/25 block font-light">
                        {item.rationale}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            /* Draft Voice Refiner Mode */
            <div className="space-y-6">
              <div>
                <label className="block font-['Plus_Jakarta_Sans'] text-xs uppercase tracking-wider text-[#1b1c1a] mb-2 font-semibold">
                  Paste your raw thoughts or corporate draft:
                </label>
                <textarea
                  rows={4}
                  value={rawDraft}
                  onChange={(e) => setRawDraft(e.target.value)}
                  placeholder="e.g. We had a great quarter increasing revenue by 20%. I want to thank the whole team for their hard work and dedication..."
                  className="w-full bg-white rounded-xs p-4 text-[#1b1c1a] font-['Plus_Jakarta_Sans'] text-sm border border-[#c1c8c2]/60 focus:outline-none focus:border-[#032217]"
                />
              </div>

              <button
                onClick={handleRefineDraft}
                disabled={!rawDraft.trim()}
                className="bg-[#032217] disabled:opacity-50 text-white font-['Plus_Jakarta_Sans'] text-xs font-semibold px-8 py-3.5 rounded-xs shadow-md hover:bg-[#1a382b] transition-all flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-[#c8ead7]" />
                Filter Through Elena&apos;s Voice Desk →
              </button>

              {refinedResult && (
                <div className="bg-white p-6 rounded-md shadow-xs border border-[#1a382b]/30 space-y-4">
                  <div className="flex items-center justify-between border-b border-[#c1c8c2]/30 pb-2">
                    <span className="font-['Plus_Jakarta_Sans'] text-xs text-[#032217] uppercase tracking-widest font-semibold">
                      Refined Editorial Draft
                    </span>
                    <button
                      onClick={() => handleCopy(refinedResult, 99)}
                      className="text-xs text-[#727974] hover:text-[#032217] flex items-center gap-1 font-['Plus_Jakarta_Sans'] font-medium"
                    >
                      {copiedIndex === 99 ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                      Copy Draft
                    </button>
                  </div>
                  <p className="font-['Playfair_Display'] text-base italic text-[#1b1c1a] leading-relaxed whitespace-pre-line">
                    {refinedResult}
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
