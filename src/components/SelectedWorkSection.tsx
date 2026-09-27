import React, { useState } from 'react';
import { TrendingUp, X, ArrowRight, Share2, BookmarkCheck } from 'lucide-react';
import { MONOGRAPH_POSTS, MonographPost } from '../data/content';

interface SelectedWorkSectionProps {
  onDiscussPost: (post: MonographPost) => void;
}

export const SelectedWorkSection: React.FC<SelectedWorkSectionProps> = ({ onDiscussPost }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeModalPost, setActiveModalPost] = useState<MonographPost | null>(null);
  const [savedPosts, setSavedPosts] = useState<Record<string, boolean>>({});

  const filterButtons = [
    { id: 'all', label: 'All' },
    { id: 'founder', label: 'Founder Story' },
    { id: 'leadership', label: 'Leadership' },
    { id: 'transition', label: 'Career Transition' },
    { id: 'opinion', label: 'Opinion' },
  ];

  const filteredPosts =
    selectedCategory === 'all'
      ? MONOGRAPH_POSTS
      : MONOGRAPH_POSTS.filter((p) => p.category === selectedCategory);

  const toggleSave = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setSavedPosts((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section className="w-full bg-[#f5f3f0] py-16 lg:py-24 border-b border-[#c1c8c2]/30" id="selected-work">
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header & Filters */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="font-['Plus_Jakarta_Sans'] text-xs font-semibold text-[#1a382b] uppercase tracking-widest block mb-2">
              Curated Folio
            </span>
            <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl text-[#1b1c1a] font-normal">
              Selected work in the wild.
            </h2>
            <p className="font-['Plus_Jakarta_Sans'] text-sm text-[#424844] mt-1 font-light">
              Real LinkedIn posts ghostwritten for confidential clients. Names anonymized per executive agreements.
            </p>
          </div>

          {/* Interactive Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {filterButtons.map((btn) => {
              const active = selectedCategory === btn.id;
              return (
                <button
                  key={btn.id}
                  onClick={() => setSelectedCategory(btn.id)}
                  className={`px-4 py-2 rounded-xs font-['Plus_Jakarta_Sans'] text-xs font-semibold tracking-wider transition-all cursor-pointer ${
                    active
                      ? 'bg-[#032217] text-white shadow-xs'
                      : 'bg-[#efeeeb] text-[#424844] hover:bg-[#eae8e5] border border-[#c1c8c2]/40'
                  }`}
                >
                  {btn.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Post Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredPosts.map((post) => {
            const isSaved = !!savedPosts[post.id];
            return (
              <div
                key={post.id}
                className="bg-white rounded-md p-6 sm:p-7 shadow-xs hover:shadow-md transition-all flex flex-col justify-between border border-[#c1c8c2]/40 group"
              >
                <div className="space-y-4">
                  {/* LinkedIn Header Simulation */}
                  <div className="flex items-center justify-between border-b border-[#c1c8c2]/25 pb-3">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 rounded-full ${post.avatarBg} ${post.avatarTextColor} flex items-center justify-center font-semibold text-xs border border-[#c1c8c2]/30`}
                      >
                        {post.authorInitials}
                      </div>
                      <div className="leading-tight">
                        <div className="flex items-center gap-1.5">
                          <span className="font-['Plus_Jakarta_Sans'] text-xs text-[#1b1c1a] font-semibold">
                            {post.authorName}
                          </span>
                          <span className="text-[10px] text-[#727974]">· 1st</span>
                        </div>
                        <span className="font-['Plus_Jakarta_Sans'] text-[11px] text-[#424844] block">
                          {post.authorTitle}
                        </span>
                        <span className="font-['Plus_Jakarta_Sans'] text-[10px] text-[#727974] tracking-wide uppercase">
                          Ghostwritten by Elena Vance Desk
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={(e) => toggleSave(post.id, e)}
                      title={isSaved ? 'Bookmarked' : 'Save to Study'}
                      className={`p-1.5 rounded-xs transition-colors ${
                        isSaved ? 'text-[#032217] bg-[#efeeeb]' : 'text-[#727974] hover:bg-[#f5f3f0]'
                      }`}
                    >
                      <BookmarkCheck className={`w-4 h-4 ${isSaved ? 'fill-[#032217]' : ''}`} />
                    </button>
                  </div>

                  {/* Post Title & Text Excerpt */}
                  <div className="space-y-2.5">
                    <h4 className="font-['Playfair_Display'] text-lg font-semibold text-[#1b1c1a]">
                      {post.title}
                    </h4>
                    <div className="font-['Plus_Jakarta_Sans'] text-sm text-[#1b1c1a] space-y-2 leading-relaxed font-light">
                      {post.excerpt.map((p, idx) => (
                        <p key={idx} className={idx === post.excerpt.length - 1 ? 'text-[#424844] italic' : ''}>
                          {p}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Metrics & Deep Dive Trigger */}
                <div className="mt-6 pt-4 bg-[#f5f3f0] rounded-xs p-3.5 border border-[#c1c8c2]/30">
                  <div className="flex flex-wrap items-center justify-between text-xs text-[#424844] mb-2.5 gap-2">
                    <span className="flex items-center gap-1 font-semibold text-[#032217]">
                      <TrendingUp className="w-4 h-4 text-[#1a382b]" /> {post.metrics.impressions}
                    </span>
                    <span className="text-[11px] font-mono">{post.metrics.secondary}</span>
                  </div>

                  <button
                    onClick={() => setActiveModalPost(post)}
                    className="w-full text-center py-2 font-['Plus_Jakarta_Sans'] text-xs uppercase tracking-wider text-[#032217] font-semibold hover:bg-white transition-colors rounded-xs border border-transparent hover:border-[#c1c8c2]/50 flex items-center justify-center gap-1.5"
                  >
                    Read Deep Dive &amp; Strategy Breakdown →
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Monograph Deep Dive Modal */}
      {activeModalPost && (
        <div
          className="fixed inset-0 z-50 bg-[#1b1c1a]/50 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setActiveModalPost(null)}
        >
          <div
            className="bg-white rounded-md max-w-2xl w-full p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto relative border border-[#c1c8c2]/60 animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveModalPost(null)}
              className="absolute top-5 right-5 p-1 text-[#727974] hover:text-[#1b1c1a] hover:bg-[#f5f3f0] rounded-xs transition-colors"
              aria-label="Close monograph modal"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="font-['Plus_Jakarta_Sans'] text-xs font-semibold text-[#1a382b] uppercase tracking-widest block mb-2">
              Executive Monograph Breakdown
            </span>
            <h3 className="font-['Playfair_Display'] text-2xl sm:text-3xl text-[#1b1c1a] mb-6">
              {activeModalPost.title}
            </h3>

            <div className="space-y-4">
              {/* Strategic Objective Box */}
              <div className="bg-[#f5f3f0] p-4 rounded-xs border border-[#c1c8c2]/35">
                <span className="font-['Plus_Jakarta_Sans'] text-[11px] text-[#727974] uppercase tracking-wider font-semibold block mb-1">
                  Strategic Objective
                </span>
                <p className="font-['Plus_Jakarta_Sans'] text-sm text-[#1b1c1a] leading-relaxed">
                  {activeModalPost.objective}
                </p>
              </div>

              {/* Storytelling & Voice Mechanism */}
              <div className="bg-[#efeeeb] p-4 rounded-xs border border-[#c1c8c2]/35">
                <span className="font-['Plus_Jakarta_Sans'] text-[11px] text-[#727974] uppercase tracking-wider font-semibold block mb-1">
                  Storytelling &amp; Voice Mechanism
                </span>
                <p className="font-['Plus_Jakarta_Sans'] text-sm text-[#1b1c1a] leading-relaxed">
                  {activeModalPost.approach}
                </p>
              </div>

              {/* Full Unabridged Post Excerpt */}
              <div className="bg-[#fbf9f6] p-5 rounded-xs border border-[#1a382b]/20">
                <div className="flex items-center justify-between mb-3 border-b border-[#c1c8c2]/30 pb-2">
                  <span className="font-['Plus_Jakarta_Sans'] text-[11px] text-[#032217] uppercase tracking-wider font-semibold">
                    Unabridged Post Excerpt
                  </span>
                  <span className="font-mono text-[10px] text-[#727974]">
                    {activeModalPost.metrics.impressions}
                  </span>
                </div>
                <div className="font-['Plus_Jakarta_Sans'] text-sm text-[#1b1c1a] space-y-3 leading-relaxed whitespace-pre-line font-light italic">
                  {activeModalPost.fullPost}
                </div>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="mt-6 pt-4 border-t border-[#c1c8c2]/30 flex flex-wrap items-center justify-between gap-3">
              <button
                onClick={() => {
                  const post = activeModalPost;
                  setActiveModalPost(null);
                  onDiscussPost(post);
                }}
                className="inline-flex items-center gap-2 font-['Plus_Jakarta_Sans'] text-xs font-semibold text-white bg-[#032217] px-5 py-2.5 rounded-xs hover:bg-[#1a382b] transition-colors"
              >
                Discuss a Similar Strategy for Your Profile →
              </button>

              <button
                onClick={() => setActiveModalPost(null)}
                className="px-4 py-2 rounded-xs bg-[#efeeeb] text-[#1b1c1a] font-['Plus_Jakarta_Sans'] text-xs font-medium hover:bg-[#eae8e5] transition-colors"
              >
                Close Analysis
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
