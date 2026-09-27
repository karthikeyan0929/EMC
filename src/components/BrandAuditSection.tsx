import React, { useState } from 'react';
import { HelpCircle, CheckCircle, ArrowRight } from 'lucide-react';

interface BrandAuditSectionProps {
  onWorkOnIt: () => void;
}

export const BrandAuditSection: React.FC<BrandAuditSectionProps> = ({ onWorkOnIt }) => {
  const [answers, setAnswers] = useState<Record<string, number>>({
    q1: 2,
    q2: 2,
    q3: 2,
    q4: 1,
    q5: 1
  });

  const [result, setResult] = useState<{
    badge: string;
    score: number;
    explanation: string;
  } | null>(null);

  const questions = [
    {
      id: 'q1',
      num: '01 of 05',
      question: 'When you read your last 3 LinkedIn posts aloud, do they sound like a conversation you’d have with a peer?',
      options: [
        { label: 'Yes, totally natural and authentic', val: 2 },
        { label: 'A bit stiff / corporate press-release style', val: 1 },
        { label: 'I haven’t posted original content in months', val: 0 }
      ]
    },
    {
      id: 'q2',
      num: '02 of 05',
      question: 'Do peers, prospective clients, or investors reach out directly referencing specific posts you shared?',
      options: [
        { label: 'Regularly (multiple times every month)', val: 2 },
        { label: 'Occasionally / rarely', val: 1 },
        { label: 'Almost never', val: 0 }
      ]
    },
    {
      id: 'q3',
      num: '03 of 05',
      question: 'How clear is your primary "point of view" or contrarian thesis in your industry?',
      options: [
        { label: 'Crystal clear and defensible', val: 2 },
        { label: 'In my head, but not clearly articulated online', val: 1 },
        { label: 'Blurry, safe, and generic', val: 0 }
      ]
    },
    {
      id: 'q4',
      num: '04 of 05',
      question: 'How consistent is your publishing cadence?',
      options: [
        { label: '2–3 high-caliber posts every week without fail', val: 2 },
        { label: 'Sporadic bursts followed by weeks of silence', val: 1 },
        { label: 'Dormant or purely lurking', val: 0 }
      ]
    },
    {
      id: 'q5',
      num: '05 of 05',
      question: 'If a premier recruit or partner reviews your profile, does it present a compelling narrative arc?',
      options: [
        { label: 'Unmistakably distinct and authoritative', val: 2 },
        { label: 'Standard CV bullet points without voice', val: 1 },
        { label: 'Outdated by multiple roles', val: 0 }
      ]
    }
  ];

  const handleCalculate = () => {
    const total = Object.values(answers).reduce((sum, v) => sum + v, 0);
    const maxScore = 10;
    const percentage = Math.round((total / maxScore) * 100);

    if (total >= 8) {
      setResult({
        score: percentage,
        badge: 'High Clarity (85%+)',
        explanation:
          'Your core ideas and voice are exceptionally distinct. Your next strategic horizon is scaling editorial frequency, refining deep-dive monograph dispatches, and converting executive reach into inbound opportunities.'
      });
    } else if (total >= 5) {
      setResult({
        score: percentage,
        badge: 'Latent Authority (55%)',
        explanation:
          'Your hard-won wisdom is evident, but your current LinkedIn voice slips into corporate conservatism. Partnering with a ghostwriter will immediately unlock defensible positioning and free up your executive schedule.'
      });
    } else {
      setResult({
        score: percentage,
        badge: 'Unrealized Digital Moat (<30%)',
        explanation:
          'You are currently conceding intellectual territory to peers with far less experience. A structured profile makeover and foundational editorial retainer will radically shift your market standing.'
      });
    }
  };

  return (
    <section className="w-full bg-white py-16 lg:py-24 border-b border-[#c1c8c2]/30">
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Explanatory Column */}
          <div className="lg:col-span-5 space-y-5">
            <span className="font-['Plus_Jakarta_Sans'] text-xs font-semibold text-[#1a382b] uppercase tracking-widest block">
              Executive Audit
            </span>
            <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl text-[#1b1c1a] font-normal">
              Is your LinkedIn voice clear?
            </h2>
            <p className="font-['Plus_Jakarta_Sans'] text-base text-[#424844] leading-relaxed font-light">
              Take this sixty-second mini-assessment to diagnose the resonance, consistency, and conversion strength of your personal footprint.
            </p>

            <div className="p-5 bg-[#f5f3f0] rounded-xs text-[#1b1c1a] space-y-2 border border-[#c1c8c2]/35">
              <div className="flex items-center gap-2 font-['Plus_Jakarta_Sans'] text-xs font-semibold uppercase text-[#032217]">
                <HelpCircle className="w-4 h-4 text-[#1a382b]" /> Immediate Diagnostic
              </div>
              <p className="font-['Plus_Jakarta_Sans'] text-xs text-[#424844] font-light leading-relaxed">
                Answer honestly — scores reflect current market clarity vs. executive peer saturation.
              </p>
            </div>
          </div>

          {/* Assessment Form Column */}
          <div className="lg:col-span-7 bg-[#fbf9f6] p-6 sm:p-8 rounded-md shadow-xs border border-[#c1c8c2]/40 space-y-6">
            <div className="space-y-6">
              {questions.map((q) => (
                <div key={q.id} className="space-y-2 pb-4 border-b border-[#c1c8c2]/25 last:border-0 last:pb-0">
                  <span className="font-['Plus_Jakarta_Sans'] text-[11px] text-[#1a382b] uppercase tracking-wider font-mono font-semibold block">
                    Question {q.num}
                  </span>
                  <p className="font-['Playfair_Display'] text-base text-[#1b1c1a] font-medium">
                    {q.question}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-2.5 pt-1.5">
                    {q.options.map((opt) => {
                      const isChecked = answers[q.id] === opt.val;
                      return (
                        <label
                          key={opt.val}
                          className={`flex items-center gap-2.5 p-3 rounded-xs cursor-pointer flex-1 text-xs font-['Plus_Jakarta_Sans'] transition-all border ${
                            isChecked
                              ? 'bg-white border-[#032217] shadow-xs text-[#1b1c1a] font-medium'
                              : 'bg-[#efeeeb] border-transparent text-[#424844] hover:bg-[#eae8e5]'
                          }`}
                        >
                          <input
                            type="radio"
                            name={q.id}
                            checked={isChecked}
                            onChange={() => setAnswers({ ...answers, [q.id]: opt.val })}
                            className="accent-[#032217]"
                          />
                          <span>{opt.label}</span>
                        </label>
                      );
                    })}
                  </div>
                </div>
              ))}

              <button
                onClick={handleCalculate}
                className="w-full py-3.5 bg-[#032217] text-white font-['Plus_Jakarta_Sans'] text-xs uppercase tracking-wider font-semibold rounded-xs shadow-md hover:bg-[#1a382b] transition-all flex items-center justify-center gap-2"
              >
                Calculate Diagnostic Result →
              </button>
            </div>

            {/* Diagnostic Results Box */}
            {result && (
              <div className="p-6 rounded-xs bg-white border border-[#1a382b]/30 space-y-4 animate-in fade-in duration-300">
                <div className="flex items-center justify-between border-b border-[#c1c8c2]/30 pb-3">
                  <span className="font-['Plus_Jakarta_Sans'] text-xs uppercase tracking-wider text-[#032217] font-bold flex items-center gap-1.5">
                    <CheckCircle className="w-4 h-4 text-emerald-600" /> Audit Score Diagnosis
                  </span>
                  <span className="px-3 py-1 bg-[#032217] text-white rounded-xs text-xs font-mono font-semibold">
                    {result.badge}
                  </span>
                </div>

                <p className="font-['Plus_Jakarta_Sans'] text-sm text-[#1b1c1a] leading-relaxed font-light">
                  {result.explanation}
                </p>

                <div className="pt-2 flex justify-end">
                  <button
                    onClick={onWorkOnIt}
                    className="inline-flex items-center gap-2 bg-[#032217] text-white px-5 py-2.5 rounded-xs font-['Plus_Jakarta_Sans'] text-xs font-semibold hover:bg-[#1a382b] transition-all"
                  >
                    Discuss Bespoke Positioning Retainers <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
