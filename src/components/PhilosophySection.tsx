import React from 'react';

export const PhilosophySection: React.FC = () => {
  const principles = [
    {
      num: '01',
      title: 'Authenticity',
      desc: 'Write like a thoughtful person speaking over espresso, not an automated press release engineered for corporate compliance.',
      test: 'Would you say this sentence aloud to a trusted peer?'
    },
    {
      num: '02',
      title: 'Story',
      desc: 'People forget bulleted directives by lunch. They remember the crucible moment you nearly lost a multimillion-dollar contract for years.',
      test: 'Is there a visceral stake or turning point?'
    },
    {
      num: '03',
      title: 'Clarity',
      desc: 'Great ideas do not require obfuscating jargon or thesaurus gymnastics. True mastery is conveying sophisticated intuition simply.',
      test: 'Can an intelligent outsider grasp the core thesis instantly?'
    },
    {
      num: '04',
      title: 'Consistency',
      desc: 'A distinctive reputation is not built on a single viral flash. It is earned paragraph by paragraph, deliberate post by deliberate post.',
      test: 'Does this build compounding equity over 12 months?'
    }
  ];

  return (
    <section className="w-full bg-white py-16 lg:py-24 border-b border-[#c1c8c2]/30" id="philosophy">
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="font-['Plus_Jakarta_Sans'] text-xs font-semibold text-[#1a382b] uppercase tracking-widest block mb-2">
              Editorial Philosophy
            </span>
            <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl text-[#1b1c1a] font-normal">
              What makes people stop scrolling?
            </h2>
          </div>
          <p className="font-['Plus_Jakarta_Sans'] text-sm text-[#424844] max-w-md font-light">
            Four non-negotiable principles engineered to turn transient scrollers into loyal intellectual advocates.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {principles.map((item) => (
            <div
              key={item.num}
              className="bg-[#f5f3f0] p-6 rounded-md shadow-xs hover:shadow-md transition-all flex flex-col justify-between h-full border border-[#c1c8c2]/35 group hover:border-[#1a382b]/40"
            >
              <div>
                <span className="font-['Playfair_Display'] text-4xl text-[#032217] font-normal block mb-3 group-hover:text-[#1a382b] transition-colors">
                  {item.num}
                </span>
                <span className="font-['Plus_Jakarta_Sans'] text-xs font-semibold text-[#727974] uppercase tracking-wider block mb-1">
                  Principle
                </span>
                <h3 className="font-['Playfair_Display'] text-xl text-[#1b1c1a] font-semibold mb-3">
                  {item.title}
                </h3>
                <p className="font-['Plus_Jakarta_Sans'] text-sm text-[#424844] leading-relaxed font-light">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-3 bg-[#efeeeb] rounded-xs p-3 text-xs text-[#424844] border border-[#c1c8c2]/40">
                <span className="font-semibold text-[#032217] block mb-0.5">Test:</span>
                {item.test}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
