import React, { useState, useRef, useEffect, useCallback } from 'react';
import { ArrowLeftRight, Sparkles } from 'lucide-react';

interface VoiceSample {
  id: string;
  theme: string;
  before: string;
  after: string;
}

const VOICE_SAMPLES: VoiceSample[] = [
  {
    id: 'leadership',
    theme: 'Leadership & Active Listening',
    before:
      'Leadership is an important and critical operational skill for senior professionals who want to succeed in high-growth companies. Effective communication and active listening have been shown to optimize overall team performance.',
    after:
      '“I used to think leadership meant having all the answers in the room. Then I became responsible for people who didn’t need answers from me — they needed someone willing to bear the quiet burden of listening.”'
  },
  {
    id: 'culture',
    theme: 'Team Culture & High Standards',
    before:
      'Our organization prioritizes cultural alignment and core values over raw technical metrics during the recruitment process to foster a collaborative and sustainable working environment across all business units.',
    after:
      '“We just declined to hire the most technically gifted engineer who interviewed this quarter. Why? Because the moment someone treats junior staff with condescension, they cost more in team attrition than any code they ship.”'
  },
  {
    id: 'pivot',
    theme: 'Strategy Pivot & Capital Discipline',
    before:
      'Due to shifting market conditions and customer feedback loops, our leadership team decided to deprecate secondary feature suites to reallocate developer bandwidth toward our primary monetization funnel.',
    after:
      '“Last month, we killed our most popular free feature. It hurt. 4,000 users complained. But it bought our engineering team the oxygen to build what 40 enterprise clients were begging to pay $50,000 for.”'
  }
];

export const VoiceComparisonSlider: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState<number>(50); // percentage
  const [activeSampleIndex, setActiveSampleIndex] = useState<number>(0);
  const isDragging = useRef<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const sample = VOICE_SAMPLES[activeSampleIndex];

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    let pos = ((clientX - rect.left) / rect.width) * 100;
    if (pos < 5) pos = 5;
    if (pos > 95) pos = 95;
    setSliderPosition(pos);
  }, []);

  useEffect(() => {
    const handleMouseUp = () => {
      isDragging.current = false;
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging.current) {
        handleMove(e.clientX);
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (isDragging.current && e.touches[0]) {
        handleMove(e.touches[0].clientX);
      }
    };

    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchend', handleMouseUp);
    window.addEventListener('touchmove', handleTouchMove);

    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchend', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [handleMove]);

  return (
    <section className="w-full bg-[#fbf9f6] py-16 lg:py-24 border-b border-[#c1c8c2]/30">
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="max-w-2xl mx-auto text-center mb-10">
          <span className="font-['Plus_Jakarta_Sans'] text-xs font-semibold text-[#1a382b] uppercase tracking-widest block mb-2">
            The Difference Is in the Voice
          </span>
          <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl text-[#1b1c1a] font-normal">
            From corporate memo to human magnetism.
          </h2>
          <p className="font-['Plus_Jakarta_Sans'] text-sm text-[#424844] mt-2 font-light leading-relaxed">
            Drag the tactile divider below to experience how the exact same leadership insight transforms when filtered through high-craft ghostwriting.
          </p>

          {/* Sample Switcher Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            {VOICE_SAMPLES.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => setActiveSampleIndex(idx)}
                className={`px-3 py-1.5 rounded-xs font-['Plus_Jakarta_Sans'] text-xs font-medium transition-all ${
                  activeSampleIndex === idx
                    ? 'bg-[#032217] text-white shadow-xs'
                    : 'bg-[#efeeeb] text-[#424844] hover:bg-[#eae8e5] border border-[#c1c8c2]/40'
                }`}
              >
                {s.theme}
              </button>
            ))}
          </div>
        </div>

        {/* Drag Comparison Widget Frame */}
        <div className="max-w-3xl mx-auto relative select-none bg-[#efeeeb] rounded-lg p-3 sm:p-4 shadow-xs border border-[#c1c8c2]/40">
          <div
            ref={containerRef}
            className="relative w-full h-[320px] sm:h-[240px] rounded-sm overflow-hidden bg-[#eae8e5] cursor-ew-resize"
            onMouseDown={(e) => {
              isDragging.current = true;
              handleMove(e.clientX);
            }}
            onTouchStart={(e) => {
              isDragging.current = true;
              if (e.touches[0]) handleMove(e.touches[0].clientX);
            }}
          >
            {/* Right: After (Elena Vance Craft) - Full Base Layer */}
            <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-center bg-[#032217] text-white">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-3.5 h-3.5 text-[#c8ead7]" />
                <span className="font-['Plus_Jakarta_Sans'] text-[11px] text-[#c8ead7] uppercase tracking-widest font-semibold">
                  After · Elena Vance Craft
                </span>
              </div>
              <p className="font-['Playfair_Display'] text-base sm:text-lg italic leading-relaxed text-[#fbf9f6]">
                {sample.after}
              </p>
            </div>

            {/* Left: Before (Raw Corporate Draft) - Clipped Top Layer */}
            <div
              className="absolute inset-y-0 left-0 overflow-hidden bg-white text-[#1b1c1a] p-6 sm:p-8 flex flex-col justify-center shadow-md border-r border-[#c1c8c2]"
              style={{ width: `${sliderPosition}%` }}
            >
              <div className="w-[660px] sm:w-[680px]">
                <span className="font-['Plus_Jakarta_Sans'] text-[11px] text-[#727974] uppercase tracking-widest mb-2 font-semibold block">
                  Before · Raw Corporate Draft
                </span>
                <p className="font-['Plus_Jakarta_Sans'] text-sm sm:text-base leading-relaxed text-[#5f5e61] font-light">
                  {sample.before}
                </p>
              </div>
            </div>

            {/* Tactile Slider Handle */}
            <div
              className="absolute inset-y-0 flex items-center justify-center pointer-events-none"
              style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
            >
              <div className="w-0.5 h-full bg-white shadow-lg"></div>
              <div className="absolute w-9 h-9 rounded-full bg-white text-[#032217] shadow-xl flex items-center justify-center border border-[#c1c8c2]/50">
                <ArrowLeftRight className="w-4 h-4 text-[#032217]" />
              </div>
            </div>
          </div>

          <p className="text-center font-['Plus_Jakarta_Sans'] text-xs text-[#727974] uppercase tracking-wider mt-3 font-semibold">
            Same strategic lesson. Completely different resonance.
          </p>
        </div>
      </div>
    </section>
  );
};
