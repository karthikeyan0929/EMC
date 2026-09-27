export interface MonographPost {
  id: string;
  category: 'founder' | 'leadership' | 'transition' | 'opinion';
  authorInitials: string;
  authorName: string;
  authorTitle: string;
  avatarBg: string;
  avatarTextColor: string;
  title: string;
  excerpt: string[];
  fullPost: string;
  metrics: {
    impressions: string;
    secondary: string;
  };
  objective: string;
  approach: string;
}

export const MONOGRAPH_POSTS: MonographPost[] = [
  {
    id: 'post1',
    category: 'founder',
    authorInitials: 'AK',
    authorName: 'Alex K.',
    authorTitle: 'Founder & CEO · B2B SaaS (Series A)',
    avatarBg: 'bg-[#c8ead7]',
    avatarTextColor: 'text-[#022115]',
    title: 'The Fireable Customer & The Unspoken Metric',
    excerpt: [
      'We fired our biggest customer this morning.',
      'They represented 28% of our recurring ARR. My co-founder and I stared at the dashboard for two hours before making the call.',
      'Here is why it was the most profitable decision we ever made...'
    ],
    fullPost: `We fired our biggest customer this morning.

They represented 28% of our recurring ARR. My co-founder and I stared at the dashboard for two hours before making the call.

Every SaaS advisor warns you about customer concentration. What they don't tell you is how toxic concentration feels in daily standups: product roadmaps hijacked, support queues overwhelmed, team morale pulverized.

When we terminated the contract, our ARR dropped. But our development speed quadrupled. Within 90 days, we closed 6 enterprise logos aligned with our real vision.

True growth isn't saying yes to every dollar. It's defending your company's sanity.`,
    metrics: {
      impressions: '418K Impressions',
      secondary: '1,240 Reposts · 89 Inbound DMs'
    },
    objective: 'Reposition the CEO as an uncompromising operational leader focused on long-term margins over cosmetic vanity ARR.',
    approach: 'Opened with a stark, controversial confession line. Replaced emotional tension with rigorous unit economics and clear organizational values.'
  },
  {
    id: 'post2',
    category: 'leadership',
    authorInitials: 'SL',
    authorName: 'Sarah L.',
    authorTitle: 'VP of Product · Global Fintech',
    avatarBg: 'bg-[#e4e1e5]',
    avatarTextColor: 'text-[#1b1b1e]',
    title: 'The Quiet Engineer & The Performance Myth',
    excerpt: [
      'The smartest engineer on my team hasn\'t said a single word in our 9:00 AM sprint standups for six months.',
      'Last week, another manager recommended I put him on a performance improvement plan for “lack of executive presence.”',
      'Instead, I cancelled his attendance in four meetings...'
    ],
    fullPost: `The smartest engineer on my team hasn't said a single word in our 9:00 AM sprint standups for six months.

Last week, another manager recommended I put him on a performance improvement plan for 'lack of executive presence.'

Instead, I cancelled his attendance in four mandatory sync meetings and gave him absolute uninterrupted autonomy.

Result? He solved a data pipeline latency issue that had baffled three senior consultants for a quarter.

Don't mistake extroversion for competence. Great organizations protect their quiet builders.`,
    metrics: {
      impressions: '892K Impressions',
      secondary: '3,120 Comments · 4 Keynote Invites'
    },
    objective: 'Demonstrate nuanced empathetic management to attract top senior product engineers disillusioned by noisy workplace politics.',
    approach: 'Challenged the corporate cliché of "Executive Presence" by elevating deep focus, asynchronous rigor, and deliberate architectural leadership.'
  },
  {
    id: 'post3',
    category: 'transition',
    authorInitials: 'MD',
    authorName: 'Marcus D.',
    authorTitle: 'Independent General Counsel & Board Member',
    avatarBg: 'bg-[#fdddb9]',
    avatarTextColor: 'text-[#281803]',
    title: 'Giving Up The Corner Office Partnership',
    excerpt: [
      'I voluntarily gave up my corner office partnership at a Big Four firm on my 44th birthday.',
      'My peers told me I was throwing away twenty years of compound equity. Here is what they didn\'t know...',
      'The actual risk wasn\'t leaving. The risk was staying numb...'
    ],
    fullPost: `I voluntarily gave up my corner office partnership at a Big Four firm on my 44th birthday.

My peers told me I was throwing away twenty years of compound equity. Here is what they didn't know: equity in an institution that drains your intellectual vitality is debt in disguise.

Today, I advise four visionary tech boards on my own terms. The work is deeper, the stakes are real, and I haven't worn a corporate lanyard in 300 days.

Your expertise belongs to you. Not to a building with someone else's name on it.`,
    metrics: {
      impressions: '290K Impressions',
      secondary: '45 Retainer Inquiries in 14 Days'
    },
    objective: 'Establish an independent General Counsel\'s private advisory firm by legitimizing non-linear career pivots and intellectual sovereignty.',
    approach: 'Used authentic vulnerability paired with seasoned philosophical clarity to attract high-autonomy founders and forward-thinking boards.'
  },
  {
    id: 'post4',
    category: 'opinion',
    authorInitials: 'RH',
    authorName: 'Rachel H.',
    authorTitle: 'Partner · Early Stage Climate Tech Fund',
    avatarBg: 'bg-[#eae8e5]',
    avatarTextColor: 'text-[#032217]',
    title: 'The Appendix Slide 42 Thesis',
    excerpt: [
      'Unpopular opinion: 90% of pitch decks fail not because the TAM is too small, but because founders hide their weirdest thesis in appendix slide 42.',
      'Venture capitalists are starved for conviction, not consensus...',
      'Here are 3 counterintuitive frameworks we look for...'
    ],
    fullPost: `Unpopular opinion: 90% of pitch decks fail not because the TAM is too small, but because founders hide their weirdest thesis in appendix slide 42.

Venture capitalists are starved for conviction, not consensus.

Stop tailoring your slides to look like every other AI-wrapper that passed through an accelerator. If you have an unhinged, deeply considered belief about where your market is heading — make it slide 1.

The right partners don't invest in polish. We invest in high-conviction oddities.`,
    metrics: {
      impressions: '340K Impressions',
      secondary: '120 High-Quality Deal Memos'
    },
    objective: 'Position early-stage venture partner as an intellectually honest investor seeking contrarian edge over buzzwords.',
    approach: 'Subverted polished VC etiquette by pointing out how consensus pitch decks breed mediocre, uninspired companies.'
  }
];

export interface ServiceDetail {
  number: string;
  title: string;
  tagline: string;
  badge: string;
  forWhom: string;
  deliverables: string;
  timeline: string;
}

export const SERVICES: ServiceDetail[] = [
  {
    number: '01',
    title: 'LinkedIn Executive Ghostwriting',
    tagline: 'End-to-end thought leadership content from voice memo to publish-ready copy.',
    badge: 'Full Retainer',
    forWhom: 'CEOs, Managing Partners, and Tier-1 Tech Founders short on writing hours.',
    deliverables: '8-12 bespoke long & short-form posts/month, hook variations, and custom analytics reviews.',
    timeline: 'Single 45-minute monthly voice download call. We handle everything else.'
  },
  {
    number: '02',
    title: 'Personal Branding & Positioning',
    tagline: 'Carving your defensible intellectual moat in crowded executive ecosystems.',
    badge: 'Strategic Sprint',
    forWhom: 'Leaders transitioning between ventures, raising capital, or aiming for board seats.',
    deliverables: 'Comprehensive Voice Codex, Audience Segmentation Blueprint & 3 Distinct Content Pillars.',
    timeline: '3-week intensive sprint with 2 collaborative working workshops.'
  },
  {
    number: '03',
    title: 'Founder & Builder Storytelling',
    tagline: 'Translating product milestones, culture lessons, and technical breakthroughs into compelling narrative.',
    badge: 'Venture Focused',
    forWhom: 'Seed to Series C Founders hiring top talent and building organic investor pipeline.',
    deliverables: 'Origin story essays, build-in-public dispatches, customer victory vignettes, launch hooks.',
    timeline: 'Bi-weekly publishing cadence with proactive industry newsjacking hooks.'
  },
  {
    number: '04',
    title: 'LinkedIn Profile Messaging & Makeover',
    tagline: 'Transforming your static digital resume into a high-converting editorial landing page.',
    badge: 'One-Time Asset',
    forWhom: 'Any leader preparing to publish regularly or launch a major initiative.',
    deliverables: 'Magnetic headline, "About" manifesto narrative, banner art strategy, curated featured media.',
    timeline: '5 business days with one comprehensive refinement iteration.'
  }
];

export interface PricingTier {
  id: string;
  tag: string;
  title: string;
  description: string;
  cadence: string;
  usdPrice: string;
  inrPrice: string;
  featured?: boolean;
  features: string[];
  ctaText: string;
}

export const PRICING_TIERS: PricingTier[] = [
  {
    id: 'sprint',
    tag: 'Foundational',
    title: 'Advisory Sprint',
    description: 'For leaders wishing to kickstart their personal presence with clear strategic scaffolding.',
    cadence: 'One-time Sprint · 3 Weeks',
    usdPrice: '$2,400',
    inrPrice: '₹1,95,000',
    features: [
      'Complete Voice Audit & Positioning Dossier',
      'LinkedIn Profile Architecture Redesign',
      '4 Initial Anchor Flagship Posts',
      '30-Day Self-Publishing Playbook'
    ],
    ctaText: 'Apply for Sprint →'
  },
  {
    id: 'retainer',
    tag: 'Ongoing Leverage',
    title: 'Thought Leadership Retainer',
    description: 'Complete monthly turnkey executive ghostwriting and high-craft storytelling.',
    cadence: 'Per Month · 3-Month Minimum Desk',
    usdPrice: '$4,800',
    inrPrice: '₹3,90,000',
    featured: true,
    features: [
      '8 Bespoke Posts / Month',
      'Single 45-Min Monthly Async Download',
      'Inbound Comment Response Strategies',
      'Unlimited Iterations within 48hr Window',
      'Dedicated Private Notion Review Desk'
    ],
    ctaText: 'Reserve Retainer Seat →'
  },
  {
    id: 'authority',
    tag: 'Full Executive Advisory',
    title: 'Executive Authority Suite',
    description: 'For venture-backed founders and C-suite leaders who demand comprehensive multi-channel presence.',
    cadence: 'Per Month · Bespoke White-Glove Desk',
    usdPrice: '$7,500',
    inrPrice: '₹6,10,000',
    features: [
      '12 Ghostwritten LinkedIn Posts / Month',
      '1 Long-form Substack / Op-Ed Dispatch',
      'PR Newsjacking & Podcast Pitch Hooks',
      'Dedicated Private WhatsApp Voice Channel'
    ],
    ctaText: 'Inquire for Availability →'
  }
];

export interface FaqItem {
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'How do you capture my authentic voice without me writing?',
    answer: 'During our initial onboarding sprint, I conduct an in-depth Voice Dissection. I analyze your past presentations, unedited emails, recorded podcasts, and conversational cadence. We identify your linguistic rhythm — sentence length, preferred idioms, contrarian axioms, and natural vocabulary. By post three, clients often remark they cannot tell where their raw thought ended and my edit began.'
  },
  {
    question: 'Do we sign strict Non-Disclosure Agreements (NDAs)?',
    answer: 'Absolutely. Every engagement is bound by a comprehensive mutual NDA before our first deep-dive interview. Your name, corporate metrics, deal anecdotes, and proprietary methods remain 100% confidential. I take zero public attribution unless explicitly requested.'
  },
  {
    question: 'How much time does this actually require from my week?',
    answer: 'Less than one hour per month. We hold one focused 45-minute audio download call to gather ideas, perspectives, and recent experiences. Post drafts are presented in your private dashboard for rapid 2-minute approvals or voice note tweaks.'
  },
  {
    question: 'What is your policy on generative AI tools like ChatGPT?',
    answer: 'Zero AI drafting. Period. Algorithmic prose homogenizes thought, relies on generic adverbs, and creates reputational vulnerability. Every sentence produced by my desk is drafted and refined by human hands with literary intent.'
  },
  {
    question: 'Can my in-house communications or marketing team review before posting?',
    answer: 'Yes. Many C-suite clients invite their Chief of Staff, Head of Communications, or PR counsel into our private Notion workspace. We maintain clear compliance checks without stalling creative momentum.'
  },
  {
    question: 'What happens if a draft doesn\'t hit the mark?',
    answer: 'Retainer agreements include unlimited revisions within a 48-hour feedback window. Because we ground every piece in your recorded audio notes, major structural rewrites are rare, but fine-tuning tone is always seamless.'
  }
];

export interface IdeaAngle {
  hook: string;
  rationale: string;
  format: string;
}

export const IDEA_PRESETS: Record<string, IdeaAngle[]> = {
  'founder-investors-authority': [
    {
      hook: '“The costly operational mistake we made at $1M ARR that no one talks about in investor updates.”',
      rationale: 'Vulnerability + hard numbers builds immediate investor respect and signals capital discipline.',
      format: 'Post-Mortem Story'
    },
    {
      hook: '“Why we turned down 3 term sheets with higher valuations to take clean terms from a boutique fund.”',
      rationale: 'Positions the founder as a shrewd long-term steward who values governance over cosmetic vanity.',
      format: 'Contrarian Decision Monograph'
    }
  ],
  'founder-talent-culture': [
    {
      hook: '“3 counter-intuitive rules for hiring senior executives when you cannot match Big Tech salaries.”',
      rationale: 'Draws top tier talent curious about high-autonomy, outcome-driven culture.',
      format: 'Hiring Playbook'
    },
    {
      hook: '“We fired our highest performing individual contributor this month. Here is why the whole team thanked us.”',
      rationale: 'Demonstrates psychological safety and intolerance for brilliant jerks.',
      format: 'Cultural Turning Point'
    }
  ],
  'executive-peers-authority': [
    {
      hook: '“Most quarterly business reviews are theater. Here is the 1-page template our leadership team uses instead.”',
      rationale: 'High peer utility and instant repost value among VP-level operators.',
      format: 'Artifact & System Breakdown'
    },
    {
      hook: '“The hardest lesson I learned managing a 200-person division through an unannounced reorganization.”',
      rationale: 'High gravitas narrative with emotional stakes and tactical takeaways.',
      format: 'Executive Crucible'
    }
  ],
  'consultant-enterprise-inbound': [
    {
      hook: '“Enterprise software audits show 62% of purchased licenses go unused. Here is how CFOs should reclaim that spend in 30 days.”',
      rationale: 'Taps directly into executive budget anxiety with high ROI advisory appeal.',
      format: 'Incisive Diagnostic'
    },
    {
      hook: '“Why digital transformation roadmaps fail before the first vendor contract is signed.”',
      rationale: 'Positions your advisory firm as the independent truth-teller who prevents multimillion-dollar waste.',
      format: 'Myth Buster'
    }
  ]
};
