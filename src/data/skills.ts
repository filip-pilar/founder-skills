export type Category = "Writing" | "Design" | "Growth" | "Video" | "Coaching" | "User Research" | "Shipping";
export type InteractionType = "text-input" | "visual-input" | "conversational" | "planning";

export interface Skill {
  id: string;
  name: string;
  category: Category;
  description: string;
  type: InteractionType;
  whenToUse: string[];
  whatToProvide: string[];
  whatYouGet: string[];
  examplePrompts: string[];
  relatedSkills: string[];
  downloadFile: string;
}

export const skills: Skill[] = [
  {
    id: "copywriter",
    name: "Copywriter",
    category: "Writing",
    description: "Cuts your copy down to what works. Clear first, clever never.",
    type: "text-input",
    whenToUse: [
      "You have a landing page, email, or bio that needs to be shorter, clearer, or more honest",
      "You need a cold email, tweet, launch post, ad copy, product description, or investor update",
      "You have existing copy that needs a full teardown — not a gentle review",
      "You're staring at a blank page and need 3 angles to choose from",
    ],
    whatToProvide: [
      "Existing copy to rewrite",
      "Description of what you need (landing page, email, bio, etc.)",
      "What action you want the reader to take after reading",
      "Product and audience context for brainstorming (one sentence is fine)",
    ],
    whatYouGet: [
      "3 positioning angles with headline/subhead/CTA, each labeled by emotional lever, with a recommended starting point",
      "Line-by-line cut list with reasoning, then a rewrite shown side-by-side with the original",
      "Draft with editing notes explaining structural choices and a party test pass",
      "Hemingway grade-level check and congruence check on every rewrite",
    ],
    examplePrompts: [
      "Here's my landing page copy: [paste]. Rewrite it — it feels too long and generic.",
      "I need a cold email to pitch my AI tutoring tool to independent tutors. Keep it short.",
      "Help me write a bio for Twitter. I make developer tools for solo founders.",
    ],
    relatedSkills: ["cold-outreach", "storytelling", "content-strategy"],
    downloadFile: "copywriter.zip",
  },
  {
    id: "cold-outreach",
    name: "Cold Outreach",
    category: "Writing",
    description:
      "Send cold messages that sound human — targeting, framing, and drafting using the party-greeting method, not templates",
    type: "text-input",
    whenToUse: [
      "You need to reach a stranger — customer, mentor, partner, or investor",
      "You wrote a cold message and want honest feedback before sending",
      "You need to figure out who to contact before you write anything",
      "You want to rewrite outreach that isn't getting replies",
      "Someone replied to your cold outreach and you're not sure how to follow up",
    ],
    whatToProvide: [
      "For draft review: your message as-is",
      "For new outreach: who you want to reach, why, and context about your product",
      "For targeting: what you're building and who you think should use it",
    ],
    whatYouGet: [
      "For writing: a message drafted as a genuine conversation using the party-greeting framework",
      'For review: a "would I reply to this while busy?" assessment with specific cuts',
      "For targeting: who to reach first and the funnel math showing why 5 direct conversations beat 1,000 impressions",
      "For follow-up: how to close the loop fast and turn a reply into an ongoing relationship",
    ],
    examplePrompts: [
      "I want to reach out to indie hackers who might use my analytics tool. Help me write a DM.",
      "Review this cold email I wrote to a potential mentor: [paste]",
      "I need to find and contact 5 potential early users for my bookmark manager.",
    ],
    relatedSkills: ["copywriter", "launch-plan", "growth-playbook"],
    downloadFile: "cold-outreach.zip",
  },
  {
    id: "storytelling",
    name: "Storytelling",
    category: "Writing",
    description: "Close the gap between what you build and why it matters",
    type: "conversational",
    whenToUse: [
      'You keep getting asked "why are you building this?" and never have a good answer',
      "Your pitch feels flat and people don't know what to do after hearing it",
      "You need to define your brand voice or personal narrative",
      "You're writing an About page or origin story",
      "You're navigating a pivot, shutdown, or rebrand and don't know how to tell people",
    ],
    whatToProvide: [
      "The raw, unpolished version of why you started (the more personal, the better)",
      "What you're building and why",
      "Current narrative attempts (pitch, about page, etc.)",
    ],
    whatYouGet: [
      "Core narrative arc (before state, inciting incident, vision)",
      "Your narrative rewritten for three audiences: yourself, your past self, and one real person",
      "A transformation statement: what changes for your audience because you exist",
      "Voice guide: what you sound like at your best",
      "Emotionally-mapped communication plan for pivots, shutdowns, or rebrands",
    ],
    examplePrompts: [
      'I keep getting asked "why are you building this?" and I never have a good answer.',
      "Help me find my story. I'm a former teacher building EdTech.",
      "I have a pitch deck but the story feels flat. Here's what I have: [paste]",
    ],
    relatedSkills: ["copywriter", "content-strategy", "video-starter"],
    downloadFile: "storytelling.zip",
  },
  {
    id: "design-advisor",
    name: "Design Advisor",
    category: "Design",
    description: "Design planning and critique for non-designers — from blank page to shipped product",
    type: "visual-input",
    whenToUse: [
      "You have a landing page, app screen, deck, or social asset that looks off but you can't pinpoint why",
      "You're designing a page from scratch and need a layout plan",
      "You want a prioritized list of design fixes ranked by impact",
      "You're stuck debating tools or aesthetics instead of shipping",
    ],
    whatToProvide: [
      "Screenshot of your design (landing page, app, deck, social asset)",
      "URL to review",
      "Description of a page you need to design from scratch",
    ],
    whatYouGet: [
      "CHATS visual audit (pass/fail per element for critiques, preemptive guidance for new designs)",
      "Ranked list of max 5 fixes by impact",
      "Text wireframe with information hierarchy (for new designs)",
      "Section-by-section layout plan with copy direction per section",
      "Dribbble trap warnings, reference site suggestions",
    ],
    examplePrompts: [
      "[paste screenshot] — what's wrong with my landing page?",
      "I need to design a pricing page. I have 3 tiers. Help me plan the layout.",
      "Review my site — give me the top 5 things to fix.",
      "I've been going back and forth between Figma and Canva for a week. I just need to make a landing page.",
    ],
    relatedSkills: ["copywriter", "mvp-sprint", "launch-plan"],
    downloadFile: "design-advisor.zip",
  },
  {
    id: "growth-playbook",
    name: "Growth Playbook",
    category: "Growth",
    description:
      "Diagnoses your actual growth stage, tells you whether to market or sell, and prescribes complete experiment plans — not a framework deck",
    type: "planning",
    whenToUse: [
      "Growth is flat and you don't know what to focus on",
      "You just launched and need your first 50 users who love your product",
      "You have users but retention is terrible",
      "You're posting on social media but nothing is converting",
      "You want growth experiments designed from a funnel diagnosis — not just a list of ideas to try",
    ],
    whatToProvide: [
      "Current metrics (users, revenue, conversion rates)",
      "Description of your stage and what you've tried",
      "Your product and target audience",
    ],
    whatYouGet: [
      "Stage diagnosis (pre-launch, early, plateau)",
      "Marketing vs. selling gate decision with funnel math proof",
      "Direct outreach playbook with 5-7 specific places to find your first users",
      "First-touch conversation script (understand first, pitch never)",
      "AARRR funnel diagnostic with specific leak identified",
      "8-10 complete micro-experiments (2-3 days each) with hypothesis, metric, and kill/double-down criteria — no need to chain to Experiment Lab",
      "Compounding funnel math with your numbers",
      "Sherpa milestone roadmap (10 who love it → 100 → 1,000)",
    ],
    examplePrompts: [
      "I have 12 users but growth is flat. Most came from my Twitter.",
      "I just launched. How do I get my first 50 users?",
      "We're at 500 users but retention is terrible. What should I focus on?",
    ],
    relatedSkills: ["experiment-lab", "launch-plan", "content-strategy"],
    downloadFile: "growth-playbook.zip",
  },
  {
    id: "experiment-lab",
    name: "Experiment Lab",
    category: "Growth",
    description:
      "Isolate one variable, set kill criteria, and compress experiments to 2-3 days so you actually learn something",
    type: "planning",
    whenToUse: [
      "You want to test a hypothesis but need a clean experiment design",
      "You ran an experiment and need help interpreting the results",
      "You're stuck and need a sprint of quick experiments to break through",
      "You keep running experiments but never learn anything — too many variables, no measurement, no stopping rules",
    ],
    whatToProvide: [
      "What you want to test",
      "Results from a completed experiment",
      "Request for an experiment sprint",
    ],
    whatYouGet: [
      "Single-variable experiment design with kill criteria, scoped to 2-3 days",
      "Results analysis with kill/iterate/double-down decision — plus a distribution multiplication plan if it worked",
      "Root cause analysis and next experiment design when results say kill",
      "Sprint of 8-10 micro-experiments scoped to 2-3 days each",
    ],
    examplePrompts: [
      "I want to test whether shorter videos get more engagement.",
      "I ran a pricing experiment — $9 vs $19. Here are the results: [data]",
      "I'm stuck. Design me a 2-week experiment sprint to break through.",
      "I'm at $2K MRR and nothing is moving. Design me a sprint to find what works.",
    ],
    relatedSkills: ["growth-playbook", "content-strategy", "launch-plan"],
    downloadFile: "experiment-lab.zip",
  },
  {
    id: "launch-plan",
    name: "Launch Plan",
    category: "Growth",
    description:
      "Launch prep, launch day content, and recovery if it flopped",
    type: "planning",
    whenToUse: [
      "You're launching next week and need a preparation plan",
      "You have a launch date set but don't know what to post or say",
      "You launched and got zero signups — need a recovery plan",
      "You're about to blast social media but haven't talked to anyone directly yet",
    ],
    whatToProvide: [
      "What you're launching and when",
      "Current state of readiness",
      "Your bio, landing page, and social feed (for the congruence check)",
      "Post-launch situation if recovering from a quiet launch",
    ],
    whatYouGet: [
      "Pre-launch congruence check (bio, landing page, feed alignment)",
      "Sell-before-market sequence",
      "5 named humans to contact on launch day",
      "DM drafts to warm contacts",
      "First-48-hours content playbook",
      "Diagnosis: did you market when you should have sold?",
    ],
    examplePrompts: [
      "I'm launching my SaaS next Tuesday. What should I do this week to prepare?",
      "I launched 3 days ago and got zero signups. How do I recover?",
      "I have a launch date next Friday but no idea what to post or who to DM.",
    ],
    relatedSkills: ["cold-outreach", "content-strategy", "mvp-sprint"],
    downloadFile: "launch-plan.zip",
  },
  {
    id: "content-strategy",
    name: "Content Strategy",
    category: "Growth",
    description: "Build an audience from zero — or fix the one that's stuck",
    type: "conversational",
    whenToUse: [
      "You have zero followers and don't know where to start",
      "You've been posting consistently with no engagement",
      "You need content ideas for your specific niche",
      "You need help choosing platforms or writing your bio",
    ],
    whatToProvide: [
      "Current social presence (or lack thereof)",
      "What you're building and who it's for",
      "Existing content that isn't working",
    ],
    whatYouGet: [
      "Starting from zero: bio rewrite via party test (3 options), platform pick, 30-day plan",
      "Content ideas: 10 angles split timeless/trending, filtered through your unique genius",
      "Bio help: 3 options via party test with congruence check against your feed",
      "Stuck: cycle-of-frustration diagnosis and quality vs. distribution split (is it your content or your reach?)",
    ],
    examplePrompts: [
      "I have 0 followers. I build AI tools for writers. Where do I start?",
      "I've been posting on Twitter for 2 months and getting zero engagement.",
      "Give me 10 content ideas for my B2B SaaS targeting recruiters.",
      "My posts get impressions but no one follows — what am I doing wrong?",
    ],
    relatedSkills: ["copywriter", "video-starter", "storytelling"],
    downloadFile: "content-strategy.zip",
  },
  {
    id: "video-starter",
    name: "Video Starter",
    category: "Video",
    description: "Plan one video, make it good",
    type: "conversational",
    whenToUse: [
      "You want to make a video but don't know where to start",
      "You have an idea for a video and need help structuring it",
      "Your last video flopped and you want to know why",
      "You heard a song and want to build a video around it",
    ],
    whatToProvide: [
      "Video topic idea",
      "A song or vibe you're drawn to",
      "Creators or videos you admire",
      "A video that flopped (for diagnosis)",
    ],
    whatYouGet: [
      "Video concept with emotional arc, shot list, and music direction",
      "Timeless-vs-meme classification for your idea",
      "Three reference videos to study (steal-like-an-artist method)",
      "Song selection or music-direction guidance",
      "Diagnosis of why a video didn't work",
      "One-variable experiment plan for your next video",
    ],
    examplePrompts: [
      "I want to make a video about how I built my app in a weekend. Help me plan it.",
      "My last YouTube video got 47 views. Here's the title and thumbnail: [describe]",
      "I heard a song that would be perfect for a video about my product launch. Help me build the video around it.",
    ],
    relatedSkills: ["content-strategy", "storytelling", "copywriter"],
    downloadFile: "video-starter.zip",
  },
  {
    id: "decision-coach",
    name: "Decision Coach",
    category: "Coaching",
    description: "Opinionated frameworks that end with a real recommendation, not 'it depends'",
    type: "conversational",
    whenToUse: [
      "You're torn between two or more options and can't decide",
      "You need to prioritize but everything feels equally important",
      "You suspect you're making an emotional decision disguised as logic",
      "You have a gut feeling but haven't put any numbers to it",
      "You feel stuck, paralyzed, or plateaued — and you're not sure it's even a 'decision'",
    ],
    whatToProvide: [
      "The decision you're stuck on",
      "Options you're considering",
      "Context about stakes and constraints",
    ],
    whatYouGet: [
      "A clear, opinionated recommendation — not 'it depends'",
      "Decision framed using calibration spectrum",
      "Upside/downside analysis (not pro/con)",
      "Emotional vs. logical separation",
      "Order-of-magnitude math",
      "Conviction audit — how confident are you, really?",
      "Single scoreboard metric to filter every decision",
      "A-plus problem — the one thing to move this week",
      "Local minimum diagnosis — are small tweaks hiding the need for a bigger jump?",
      "On-season / off-season check",
    ],
    examplePrompts: [
      "Should I pivot from B2C to B2B? I have 200 free users but no revenue.",
      "I can't decide whether to raise money or bootstrap. Help me think through it.",
      "I have three feature ideas and can only build one this month.",
      "I've been grinding for months and nothing's moving. I don't even know what decision I need to make.",
    ],
    relatedSkills: ["unblock", "weekly-review", "experiment-lab"],
    downloadFile: "decision-coach.zip",
  },
  {
    id: "unblock",
    name: "Unblock",
    category: "Coaching",
    description: "Pinpoint which type of stuck you are and get the specific framework to break out",
    type: "conversational",
    whenToUse: [
      "You feel stuck and can't articulate why",
      "You've been procrastinating on something important",
      "Everything feels overwhelming and you can't start anything",
      "You keep building instead of launching",
      "You're doing everything alone and have no one to bounce ideas off",
      "You're putting in effort but getting zero traction",
      "You keep debating whether to quit or pivot but can't decide",
    ],
    whatToProvide: [
      "What's going on (can be vague)",
      "What you've tried so far",
    ],
    whatYouGet: [
      "Diagnosis of your stuck type (local minimum, perfectionism, burnout, solo player trap, wrong audience, or emotional decision)",
      "Named pattern with an explanation of why it happens",
      "Targeted framework for your specific stuck type",
      "A prescribed next action from the matching framework",
    ],
    examplePrompts: [
      "I don't know what's wrong. I just can't make progress.",
      "I've been procrastinating on launching for weeks. I keep finding more things to build.",
      "Everything feels overwhelming. I have too many things to do and can't start any of them.",
      "I've been grinding for months but nobody's signing up. I don't know if it's the product or the market.",
      "I'm thinking about pivoting but I can't tell if it's a real signal or if I'm just tired.",
    ],
    relatedSkills: ["decision-coach", "weekly-review", "mvp-sprint"],
    downloadFile: "unblock.zip",
  },
  {
    id: "weekly-review",
    name: "Weekly Review",
    category: "Coaching",
    description: "Friday ritual — 7 named frameworks (AARRR, Hold Strongly/Hold Loosely, On-Season/Off-Season, and more), same order every week",
    type: "conversational",
    whenToUse: [
      "It's Friday and you want to run your weekly reflection",
      "You want the same sharp questions every Friday so you notice patterns you'd otherwise miss",
      "You need to close out the week and name one clear intention for the next",
      "Not for diagnosing a specific stuck moment — use Unblock for that",
    ],
    whatToProvide: [
      "Show up on Friday — that's it",
      "Answers to each step's questions as you go",
      "No prep needed, the skill guides the whole ritual",
    ],
    whatYouGet: [
      "Guided walkthrough of all 7 steps — AARRR metrics, Hold Strongly/Hold Loosely, On-Season/Off-Season, and more",
      "Direct feedback when something is off — no scoreboard metric, no fun for 3 weeks, nothing changing",
      "Pattern recognition built over weeks of repetition",
      "One clear intention for next week, pressure-tested with three hard questions",
    ],
    examplePrompts: [
      "It's Friday. Let's do the review.",
      "Weekly review time. This week I shipped the landing page and talked to 3 users.",
      "Friday check-in. Rough week — didn't get much done.",
    ],
    relatedSkills: ["decision-coach", "unblock", "experiment-lab"],
    downloadFile: "weekly-review.zip",
  },
  {
    id: "user-interview",
    name: "User Interview",
    category: "User Research",
    description: "Have real conversations with users — not surveys, not pitches, not scripts",
    type: "conversational",
    whenToUse: [
      "You have user calls coming up and need to prepare questions",
      "You just talked to users and need to debrief and extract insights",
      "You can't find anyone to talk to about your product",
      "You're about to send a survey or post 'looking for beta testers' instead of having real conversations",
    ],
    whatToProvide: [
      "What your product does and who it's for",
      "Upcoming user conversations to prepare for",
      "Notes from user conversations just completed",
      "Struggle finding users to talk to",
    ],
    whatYouGet: [
      "5-7 conversation prompts that help you understand users before pitching — plus a framework for handling rejection",
      "Debrief analysis: trust the complaint, doubt the fix — plus pattern analysis and a concrete action plan",
      "List of 3-5 specific places to find users this week",
      "Outreach plan with a plan to close the loop within 24 hours",
    ],
    examplePrompts: [
      "I have 3 user calls tomorrow. Help me prepare questions.",
      "I just talked to 5 users. Here's what they said: [notes]. What should I change?",
      "I can't find anyone to talk to about my productivity app. Help.",
    ],
    relatedSkills: ["experiment-lab", "growth-playbook", "cold-outreach"],
    downloadFile: "user-interview.zip",
  },
  {
    id: "mvp-sprint",
    name: "MVP Sprint",
    category: "Shipping",
    description: "Go from fresh idea or unfinished project to live MVP in one week",
    type: "planning",
    whenToUse: [
      "You have a fresh idea and need to scope a buildable v1",
      "You've been building for too long and need to cut scope and ship",
      "You need to figure out the simplest version that's actually useful",
    ],
    whatToProvide: [
      "A fresh idea you want to build",
      "An unfinished project that needs to ship this week",
      "Context on what you're building and who it's for",
    ],
    whatYouGet: [
      "Aggressive scope-down to one-week build",
      "Local minimum diagnosis: are you optimizing in a valley or building toward something real?",
      "Useful > Usable > Beautiful hierarchy applied",
      "What to cut and what to keep — with a ship date",
      "The toy version question: what's the dumbest, simplest version that could be useful?",
    ],
    examplePrompts: [
      "I have an idea for a habit tracker with AI coaching. Help me scope a v1.",
      "I've been building my app for 3 months and still haven't launched. Help me cut scope.",
      "What's the simplest version of my product that's actually useful to one person?",
    ],
    relatedSkills: ["launch-plan", "design-advisor", "unblock"],
    downloadFile: "mvp-sprint.zip",
  },
];

export const categories: { name: Category; skills: string[] }[] = [
  { name: "Writing", skills: ["copywriter", "cold-outreach", "storytelling"] },
  { name: "Design", skills: ["design-advisor"] },
  { name: "Growth", skills: ["growth-playbook", "experiment-lab", "launch-plan", "content-strategy"] },
  { name: "Video", skills: ["video-starter"] },
  { name: "Coaching", skills: ["decision-coach", "unblock", "weekly-review"] },
  { name: "User Research", skills: ["user-interview"] },
  { name: "Shipping", skills: ["mvp-sprint"] },
];

export function getSkillById(id: string): Skill | undefined {
  return skills.find((s) => s.id === id);
}

export function getSkillsByCategory(): Map<Category, Skill[]> {
  const map = new Map<Category, Skill[]>();
  for (const cat of categories) {
    const catSkills = cat.skills.map((id) => getSkillById(id)).filter((s): s is Skill => !!s);
    map.set(cat.name, catSkills);
  }
  return map;
}
