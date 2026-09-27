import React from 'react';

export const ProcessSection: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Discover',
      desc: 'We map your career arc, sacred beliefs, pet peeves, and unpublished business wins via voice memos or a candid 45-minute salon call.'
    },
    {
      num: '02',
      title: 'Find the Story',
      desc: 'I mine the conversational ore for sharp narrative tension, proprietary contrarian angles, and emotionally sticky turning points.'
    },
    {
      num: '03',
      title: 'Write & Shape',
      desc: 'Drafting posts with rigorous editorial pacing: arresting first lines, cinematic spacing, and no corporate padding.'
    },
    {
      num: '04',
      title: 'Refine',
      desc: 'Asynchronous 3-minute reviews inside your private Notion desk. Leave simple voice notes or one-click approvals.'
    },
    {
      num: '05',
      title: 'Publish & Measure',
      desc: 'We schedule the assets for optimal European and US executive time zones, logging qualitative reach and inbound network interest.'
    }
  ];

  return (
    <section className="w-full bg-white py-16 lg:py-24 border-b border-[#c1c8c2]/30" id="process">
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="mb-12">
          <span className="font-['Plus_Jakarta_Sans'] text-xs font-semibold text-[#1a382b] uppercase tracking-widest block mb-2">
            The Monograph Method
          </span>
          <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl text-[#1b1c1a] font-normal">
            From thought to post in five measured steps.
          </h2>
          <p className="font-['Plus_Jakarta_Sans'] text-sm text-[#424844] max-w-xl mt-1 font-light leading-relaxed">
            A bespoke production pipeline designed to demand the minimum possible effort from your executive calendar while yielding maximum literary precision.
          </p>
        </div>

        {/* 5-Step Process Sequence */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {steps.map((step) => (
            <div
              key={step.num}
              className="bg-[#fbf9f6] p-5 rounded-md shadow-xs hover:shadow-md transition-all space-y-3 border border-[#c1c8c2]/35 group hover:border-[#1a382b]/40 flex flex-col justify-between"
            >
              <div>
                <div className="w-8 h-8 rounded-full bg-[#efeeeb] flex items-center justify-center font-mono font-bold text-xs text-[#032217] mb-3 group-hover:bg-[#c8ead7] transition-colors">
                  {step.num}
                </div>
                <h3 className="font-['Playfair_Display'] text-lg text-[#1b1c1a] font-semibold mb-2">
                  {step.title}
                </h3>
                <p className="font-['Plus_Jakarta_Sans'] text-xs text-[#424844] leading-relaxed font-light">
                  {step.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-[#c1c8c2]/25 text-[10px] uppercase tracking-wider text-[#727974] font-semibold font-mono">
                Stage {step.num}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
