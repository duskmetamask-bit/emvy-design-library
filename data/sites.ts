// EMVY Design Library — Curated quality website breakdowns
// Sector focus: AI agencies, SaaS, fintech, automation

export interface SiteEntry {
  id: string;
  name: string;
  url: string;
  sector: string;
  status: "live" | "archived";
  reviewedAt: string;
  
  // Research
  whatWorks: string[];
  
  // Identity
  designVibe: string[];       // e.g. ["dark mode", "minimal", "bold typography"]
  colorPalette: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    text: string;
  };
  typography: {
    heading: string;
    body: string;
  };
  
  // Layout & Structure
  pageStructure: string[];
  heroStyle: string;
  ctaStyle: string;
  socialProofStyle: string;
  
  // Components
  standoutComponents: string[];
  navigationStyle: string;
  footerStyle: string;
  
  // Content
  headlineFormula: string;
  valuePropStyle: string;
  copyTone: string;
  
  // APIs/Integrations
  techStack: string[];
  
  // Prototype
  prototypeUrl?: string;
  prototypeRepo?: string;
  inspiredBy: string[];  // design elements borrowed
  
  notes: string;
}

export const sites: SiteEntry[] = [
  // 1. LINEAR
  {
    id: "linear",
    name: "Linear",
    url: "https://linear.app",
    sector: "Project Management / Dev Tools",
    status: "live",
    reviewedAt: "2025-05-17",
    
    whatWorks: [
      "Dark mode by default — feels premium and technical",
      "Keyboard-first messaging throughout the product",
      "Minimal navigation — just enough to not get lost",
      "Black-and-white with neon accent — timeless contrast",
      "The product IS the marketing — no fluff copy",
      "Issue tracker as landing page hero — shows, doesn't tell",
    ],
    
    designVibe: ["dark mode", "minimal", "developer-focused", "premium", "functional"],
    colorPalette: {
      primary: "#000000",
      secondary: "#1a1a1a",
      accent: "#8b5cf6",  // purple accent
      background: "#0a0a0a",
      text: "#ffffff",
    },
    typography: {
      heading: "Inter (Black weight)",
      body: "Inter",
    },
    
    pageStructure: [
      "Navigation (minimal top bar)",
      "Hero — product demo as the headline",
      "Feature grid (3-column icons + short copy)",
      "Integration logos",
      "Customer logos",
      "Pricing (3 tiers)",
      "Footer (minimal)",
    ],
    heroStyle: "Product screenshot with overlaid headline — the app IS the hero image",
    ctaStyle: "Single prominent button: 'Get Started' — no clutter",
    socialProofStyle: "Logo wall below hero — 'Used by teams at Vercel, GitHub, Stripe...'",
    standoutComponents: [
      "Keyboard shortcut overlay (shows depth of product)",
      "Dark sidebar navigation",
      "Issue card component (replicated from product)",
      "Gradient borders on cards (subtle purple)",
    ],
    navigationStyle: "Top bar: Logo | Product | Docs | Pricing | Blog | Sign in | Get Started",
    footerStyle: "Minimal: Logo | © year | Privacy | Terms | Twitter link",
    
    headlineFormula: "[Product noun] for [audience]. [Verb] without [drawback].",
    valuePropStyle: "Feature-first, benefit-led, no corporate speak",
    copyTone: "Technical, confident, minimal. Short sentences. No adjectives.",
    
    techStack: ["Next.js", "TypeScript", "Tailwind", "Radix UI"],
    
    inspiredBy: ["GitHub's dark mode", "Stripe's minimalism", "Apple's product pages"],
    
    notes: "Gold standard for developer-tool marketing. Every EMVY product site should aspire to this level of restraint.",
  },

  // 2. VERCEL
  {
    id: "vercel",
    name: "Vercel",
    url: "https://vercel.com",
    sector: "Infrastructure / Dev Tools",
    status: "live",
    reviewedAt: "2025-05-17",
    
    whatWorks: [
      "Deployment as a concept — makes the complex feel simple",
      "Hero shows real product, not a stock illustration",
      "Clean grid layout — breathes well",
      "Documentation-style detail without being boring",
      "The 'Ship' CTA — action-oriented word choice",
      "Shows actual customer sites, not faceless logos",
    ],
    
    designVibe: ["white space heavy", "minimal", "clean grid", "technical but approachable"],
    colorPalette: {
      primary: "#000000",
      secondary: "#fafafa",
      accent: "#000000",
      background: "#ffffff",
      text: "#000000",
    },
    typography: {
      heading: "Geist (or Inter)",
      body: "Geist (or Inter)",
    },
    
    pageStructure: [
      "Navigation: Logo | Product | Solutions | Templates | Docs | Blog | Deploy free",
      "Hero: Headline + subhead + Deploy button + product screenshot",
      "Feature sections (alternating layout)",
      "Template gallery (visual grid)",
      "Customer showcase",
      "Pricing",
      "Footer: Full sitemap",
    ],
    heroStyle: "Split: left text, right animated product screenshot — static on scroll, animates",
    ctaStyle: "Black 'Deploy' button — high contrast on white",
    socialProofStyle: "Customer logos + 'Trusted by teams at...' below hero",
    standoutComponents: [
      "Animated globe/network visualization",
      "Terminal-style code snippets that animate",
      "Card grid with hover effects",
      "Sticky nav that gains a background on scroll",
    ],
    navigationStyle: "Full top bar with dropdowns — Product | Solutions | Templates | Docs | Blog",
    footerStyle: "Full 4-column sitemap footer — comprehensive",
    
    headlineFormula: "[Verb] [noun] with [differentiator]. [Context].",
    valuePropStyle: "Infrastructure-first, developer empathy",
    copyTone: "Confident, direct. Short. 'Ship your next idea.'",
    
    techStack: ["Next.js", "Tailwind", "Framer Motion"],
    
    inspiredBy: ["Stripe's clarity", "Linear's minimalism", "Apple's product confidence"],
    
    notes: "Excellent at making infrastructure feel approachable. The template gallery is a great conversion tool — shows before you buy.",
  },

  // 3. STRIPE
  {
    id: "stripe",
    name: "Stripe",
    url: "https://stripe.com",
    sector: "Fintech / Payments",
    status: "live",
    reviewedAt: "2025-05-17",
    
    whatWorks: [
      "Documentation IS the product — every page teaches something",
      "Clean financial UI — makes money feel manageable",
      "Copy that explains complex things simply",
      "No stock photos — illustrations and real UI only",
      "Pricing is transparent and upfront",
      "Case studies with specific numbers, not fluff",
    ],
    
    designVibe: ["clean", "white space", "illustrated", "trustworthy", "professional"],
    colorPalette: {
      primary: "#635bff",  // stripe purple
      secondary: "#0a2540", // dark navy
      accent: "#635bff",
      background: "#ffffff",
      text: "#1a1a1a",
    },
    typography: {
      heading: "Camphor or similar clean sans",
      body: "Camphor or similar clean sans",
    },
    
    pageStructure: [
      "Nav: Logo | Products | Solutions | Developers | Pricing | Docs | Sign in",
      "Hero: Simple headline + subhead + two CTAs + illustration",
      "Feature sections (alternating text + visual)",
      "Integration logos",
      "Stats: 'X billions processed by Y companies'",
      "Case studies (expandable)",
      "Footer: Comprehensive sitemap",
    ],
    heroStyle: "Centered headline, two CTAs (Start now | Contact sales), illustration of cards/UI",
    ctaStyle: "Primary: filled purple button | Secondary: outline or text link",
    socialProofStyle: "Stats bar: '$X processed | Y countries | Z companies'",
    standoutComponents: [
      "The 'card' illustration that moves subtly",
      "Expandable FAQ accordion",
      "Code snippets in dark terminal style",
      "Sticky 'Get started' bar on scroll",
    ],
    navigationStyle: "Full nav with mega-menu dropdowns — Products | Solutions | Developers | Docs",
    footerStyle: "Full sitemap: Products | Industries | Developers | Company | Support | Compliance",
    
    headlineFormula: "The way to [verb] on the internet. [Differentiator].",
    valuePropStyle: "Product-focused, developer empathy, trust-first",
    copyTone: "Precise, clear, confident. No marketing fluff — just facts and features.",
    
    techStack: ["Next.js", "Tailwind", "Custom CMS"],
    
    inspiredBy: ["Apple's clarity", "Linear's minimalism", "Financial trust signals"],
    
    notes: "The gold standard for fintech. Their API docs are the product. EMVY's 'docs as marketing' approach should take notes from this.",
  },

  // 4. RAMP
  {
    id: "ramp",
    name: "Ramp",
    url: "https://ramp.com",
    sector: "Fintech / Expense Management",
    status: "live",
    reviewedAt: "2025-05-17",
    
    whatWorks: [
      "Money-back guarantee front and center — builds trust instantly",
      "Dark mode with warm accent (orange) — premium but energetic",
      "The product UI in marketing — shows real results, not mockups",
      "Stats everywhere — 'Save $X and Y hours'",
      "Simple pricing (1 plan, not 47 tiers)",
      "Customer logos are real companies, not placeholder names",
    ],
    
    designVibe: ["dark mode", "warm accent", "trustworthy", "premium fintech", "high contrast"],
    colorPalette: {
      primary: "#1a1a1a",
      secondary: "#252525",
      accent: "#f97316",  // warm orange
      background: "#0f0f0f",
      text: "#ffffff",
    },
    typography: {
      heading: "Söhne or Inter Bold",
      body: "Söhne or Inter",
    },
    
    pageStructure: [
      "Nav: Logo | Product | Cards | Fleet | Accounting | Pricing | For startups | Login",
      "Hero: Bold headline + subhead + 'Get Started' + product screenshot",
      "'Save time and money' — stats banner",
      "Feature grid (icon + short headline + 1 sentence)",
      "Integration logos",
      "Customer logos + quotes",
      "Single pricing tier",
      "Footer",
    ],
    heroStyle: "Dark background, white headline, orange CTA button, product UI screenshot",
    ctaStyle: "Orange filled button — 'Start saving' or 'Get started free'",
    socialProofStyle: "'The all-in-one finance platform' + logos + specific dollar amounts saved",
    standoutComponents: [
      "The card component (physical Ramp card photography)",
      "Stats counter animation (numbers tick up)",
      "Dark gradient backgrounds on sections",
      "Single-pricing card (no tiers to confuse)",
    ],
    navigationStyle: "Top bar with centered nav items + prominent orange CTA",
    footerStyle: "Multi-column: Product | Company | Resources | Legal | Social links",
    
    headlineFormula: "Save [money/time] with [product]. No [drawback].",
    valuePropStyle: "Savings-first, time-second — quantify everything",
    copyTone: "Bold, direct. 'Save $X.' Not 'We help you potentially save money.'",
    
    techStack: ["Next.js", "Tailwind", "Framer"],
    
    inspiredBy: ["Modern fintech aesthetics", "Dark mode + warm accent contrast"],
    
    notes: "Great at quantified value props. Every claim has a number. EMVY should do this — 'Build X in Y hours' not just 'Fast delivery.'",
  },

  // 5. NOTION
  {
    id: "notion",
    name: "Notion",
    url: "https://notion.so",
    sector: "Productivity / Workspace",
    status: "live",
    reviewedAt: "2025-05-17",
    
    whatWorks: [
      "The product IS the marketing — they show the tool, not stock photos",
      "Templates marketplace as a conversion funnel",
      "Clean, approachable, human — not corporate",
      "The 'Build with AI' section feels natural, not bolted on",
      "Customer stories with real team photos, not stock",
      "Navigation is simple — barely there",
    ],
    
    designVibe: ["clean", "light mode", "approachable", "human", "template-rich"],
    colorPalette: {
      primary: "#ffffff",
      secondary: "#f7f6f3",
      accent: "#e16259",  // notion red/terracotta
      background: "#ffffff",
      text: "#37352f",
    },
    typography: {
      heading: "SF Pro or Inter",
      body: "SF Pro or Inter",
    },
    
    pageStructure: [
      "Nav: Logo | Product | Solutions | Templates | Pricing | Download | Sign in",
      "Hero: Headline + subhead + product screenshot + two CTAs",
      "Template grid (visual, colorful)",
      "Feature sections (alternating)",
      "AI section (highlighted differently)",
      "Customer stories",
      "Pricing",
      "Footer",
    ],
    heroStyle: "Clean white background, product screenshot dominates, minimal text",
    ctaStyle: "Red/terracotta filled buttons — 'Get Notion' — text is human",
    socialProofStyle: "Customer logo strip + 'Used by teams at...' + real team photos in stories",
    standoutComponents: [
      "Template card grid (colorful, varied thumbnails)",
      "The 'workspace' screenshot that adapts",
      "AI-powered workspace preview",
      "Minimal footer — logo + links only",
    ],
    navigationStyle: "Simple top bar — just enough nav, not overwhelming",
    footerStyle: "Minimal: Logo | © | Privacy | Terms | Twitter | YouTube",
    
    headlineFormula: "The [workspace/tool] for [audience]. [One line description].",
    valuePropStyle: "Tool-first, use-case second — shows, doesn't describe",
    copyTone: "Human, simple, warm. Not technical. 'Your wiki, docs, and projects. All in one place.'",
    
    techStack: ["React", "Next.js", "Tailwind"],
    
    inspiredBy: ["Apple's simplicity", "Clean productivity tools"],
    
    notes: "Great at showing the product directly. Templates are the conversion — people see value immediately. EMVY could use 'templates' as a funnel for TeachWise.",
  },

  // 6. ANTHROPIC
  {
    id: "anthropic",
    name: "Anthropic",
    url: "https://anthropic.com",
    sector: "AI / LLM",
    status: "live",
    reviewedAt: "2025-05-17",
    
    whatWorks: [
      "Trust-first — safety and responsibility front and center",
      "Clean white design — stands out from dark-mode AI competitors",
      "The 'Constitutional AI' differentiator — explains what makes them different",
      "Documentation is exceptional — becomes the standard",
      "No flashy hero — just clear, confident messaging",
      "Pricing is simple and transparent",
    ],
    
    designVibe: ["clean", "white space", "trustworthy", "responsible AI", "minimal"],
    colorPalette: {
      primary: "#ffffff",
      secondary: "#f5f5f5",
      accent: "#d97706",  // warm amber
      background: "#ffffff",
      text: "#1a1a1a",
    },
    typography: {
      heading: "Inter",
      body: "Inter",
    },
    
    pageStructure: [
      "Nav: Logo | Anthropic | Claude | Research | Safety | Company | Docs | Sign in",
      "Hero: Simple headline + subhead + two CTAs + abstract illustration",
      "Values section (3 columns: Safety, Helpfulness, Transparency)",
      "Product: Claude (with animated demo)",
      "Use cases grid",
      "Research papers section",
      "Footer",
    ],
    heroStyle: "Centered text on white — minimal and confident. An abstract gradient blob.",
    ctaStyle: "Filled amber buttons — 'Get Claude API' | 'Talk to Claude'",
    socialProofStyle: "'Trusted by leading companies' — simple logo strip",
    standoutComponents: [
      "The abstract gradient background (warm, not neon)",
      "Claude chat interface demo",
      "Safety/responsibility messaging without being preachy",
      "Clean pricing table for API",
    ],
    navigationStyle: "Full nav but minimal — doesn't overwhelm",
    footerStyle: "Multi-column: Product | Research | Company | Developers | Legal",
    
    headlineFormula: "[Product] is [adjective] AI that [verb].",
    valuePropStyle: "Safety-first, then capability — positions them as responsible",
    copyTone: "Confident, measured, trustworthy. Not hype. 'AI that's honest, harmless, and helpful.'",
    
    techStack: ["Next.js", "Tailwind"],
    
    inspiredBy: ["Apple's responsible innovation messaging", "White space minimalism"],
    
    notes: "Stands out in a sea of dark-mode AI companies. Clean white design signals 'we're different — we're responsible.' Great for EMVY's positioning if we go trust-first route.",
  },

  // 7. N8N
  {
    id: "n8n",
    name: "n8n",
    url: "https://n8n.io",
    sector: "Automation / Workflow",
    status: "live",
    reviewedAt: "2025-05-17",
    
    whatWorks: [
      "Open-source credibility — 'open workflow automation' front and center",
      "Dark mode default — developer-friendly",
      "Workflow screenshots in hero — shows the product immediately",
      "'Try it out' — low friction, interactive entry",
      "Clear pricing (self-hosted free vs cloud paid)",
      "Integration list is massive — shows scale",
    ],
    
    designVibe: ["dark mode", "developer-focused", "open source", "technical", "clean"],
    colorPalette: {
      primary: "#20a4f3",  // n8n blue
      secondary: "#1e1e1e",
      accent: "#20a4f3",
      background: "#171932",
      text: "#ffffff",
    },
    typography: {
      heading: "Inter",
      body: "Inter",
    },
    
    pageStructure: [
      "Nav: Logo | Product | Solutions | Pricing | Docs | Blog | Community | Enterprise",
      "Hero: Headline + subhead + workflow screenshot + 'Try it out'",
      "Feature grid",
      "Integration logos (massive wall)",
      "How it works (3 steps)",
      "Pricing",
      "Footer",
    ],
    heroStyle: "Dark with blue accent — product workflow screenshot as hero visual",
    ctaStyle: "Blue filled button — 'Get started free' or 'Try it out'",
    socialProofStyle: "Community stats: 'X workflows run | Y integrations | Z users'",
    standoutComponents: [
      "The workflow canvas screenshot (shows real product)",
      "Integration logo wall (huge, impressive)",
      "Pricing toggle (self-hosted vs cloud)",
      "Code snippet in dark terminal style",
    ],
    navigationStyle: "Full nav, developer-focused sections",
    footerStyle: "Multi-column: Product | Solutions | Developers | Community | Company",
    
    headlineFormula: "[Open-source/Workflow automation] that [verb]. [Key differentiator].",
    valuePropStyle: "Technical-first but accessible, developer empathy",
    copyTone: "Technical, direct, open-source community vibe",
    
    techStack: ["Next.js", "Tailwind"],
    
    inspiredBy: ["Dark mode developer tools", "GitHub aesthetics"],
    
    notes: "Great for automation-heavy services like EMVY's n8n workflows. The integration wall is a massive social proof signal — 'we connect to everything.'",
  },

  // 8. FIGMA
  {
    id: "figma",
    name: "Figma",
    url: "https://figma.com",
    sector: "Design Tools",
    status: "live",
    reviewedAt: "2025-05-17",
    
    whatWorks: [
      "Design tool itself IS the website — interactive demo is the hero",
      "The product screenshot IS the hero image — no mockups",
      "Community and templates drive adoption",
      "Clean, creative, not corporate",
      "Shows both the tool AND what you can make with it",
      "Free tier as a conversion funnel",
    ],
    
    designVibe: ["clean", "white space", "creative", "collaborative", "tool-focused"],
    colorPalette: {
      primary: "#ffffff",
      secondary: "#f5f5f5",
      accent: "#a259ff",  // figma purple
      background: "#ffffff",
      text: "#1e1e1c",
    },
    typography: {
      heading: "Inter",
      body: "Inter",
    },
    
    pageStructure: [
      "Nav: Logo | Product | Solutions | Enterprise | Community | Pricing | Sign in | Try Figma free",
      "Hero: Headline + product screenshot (live/animated) + CTA",
      "What you can make (gallery of designs)",
      "For teams section",
      "Enterprise banner",
      "Pricing",
      "Footer",
    ],
    heroStyle: "Product screenshot (live editor) with design overlaid — shows the tool AND what it makes",
    ctaStyle: "Purple filled button — 'Try Figma free' — low friction entry",
    socialProofStyle: "Logo wall: 'Trusted by designers at...' + enterprise logos",
    standoutComponents: [
      "Interactive product demo (you can click around the editor)",
      "Design gallery grid (shows what's possible)",
      "Template/Community section",
      "Clean white design with colorful design work as content",
    ],
    navigationStyle: "Simple top bar with prominent 'Try free' CTA",
    footerStyle: "Multi-column: Product | Solutions | Enterprise | Community | Resources",
    
    headlineFormula: "[Design tool] for [audience] who [verb].",
    valuePropStyle: "Creative-first, capability second",
    copyTone: "Creative, collaborative, empowering. 'Design together, in real time.'",
    
    techStack: ["React", "Next.js", "Canvas/WebGL"],
    
    inspiredBy: ["Apple's creative tools", "Google Docs' collaborative feel"],
    
    notes: "The interactive demo is the holy grail of product marketing. Shows the actual product. EMVY could do this for TeachWise — actual lesson planner demo as the hero.",
  },

  // 9. BOTPRESS
  {
    id: "botpress",
    name: "Botpress",
    url: "https://botpress.com",
    sector: "AI / Chatbots",
    status: "live",
    reviewedAt: "2025-05-17",
    
    whatWorks: [
      "Dark mode with blue accent — feels technical and modern",
      "Clear value prop: 'Build AI agents without code'",
      "Visual flow builder screenshot in hero",
      "Use cases clearly laid out",
      "Template library as entry point",
      "Pricing is simple and transparent",
    ],
    
    designVibe: ["dark mode", "developer-focused", "AI", "technical", "clean"],
    colorPalette: {
      primary: "#20a4f3",  // blue
      secondary: "#1a1a2e",
      accent: "#20a4f3",
      background: "#0f0f1a",
      text: "#ffffff",
    },
    typography: {
      heading: "Inter",
      body: "Inter",
    },
    
    pageStructure: [
      "Nav: Logo | Product | Solutions | Pricing | Docs | Blog | GitHub | Get started",
      "Hero: Headline + subhead + visual flow screenshot + CTA",
      "Feature grid",
      "Use cases",
      "Template gallery",
      "Pricing",
      "Footer",
    ],
    heroStyle: "Dark hero with blue accents — visual flow builder screenshot",
    ctaStyle: "Blue filled button — 'Start building free' — low friction",
    socialProofStyle: "Stats: 'X agents deployed | Y integrations'",
    standoutComponents: [
      "Visual flow builder screenshot",
      "Integration logos",
      "Template card grid",
      "Dark gradient backgrounds",
    ],
    navigationStyle: "Full nav with prominent 'Get started' CTA",
    footerStyle: "Multi-column: Product | Solutions | Developers | Company",
    
    headlineFormula: "Build [type of AI] without [drawback].",
    valuePropStyle: "No-code first, AI second — accessibility over hype",
    copyTone: "Direct, technical but accessible. 'Build AI agents without code.'",
    
    techStack: ["Next.js", "Tailwind"],
    
    inspiredBy: ["Dark mode AI tools", "n8n aesthetics"],
    
    notes: "Very similar positioning to what EMVY could do for AI agents. The template library approach is smart — people get value before they commit.",
  },

  // 10. SYNTHESIA
  {
    id: "synthesia",
    name: "Synthesia",
    url: "https://synthesia.io",
    sector: "AI / Video",
    status: "live",
    reviewedAt: "2025-05-17",
    
    whatWorks: [
      "AI avatar video in the hero — product demo IS the marketing",
      "Clear demo video — 60 seconds and you understand the product",
      "Use cases clearly broken down (Training, Marketing, etc.)",
      "Social proof with enterprise logos",
      "'No camera, no actors' — removes friction immediately",
      "Simple pricing with video minutes",
    ],
    
    designVibe: ["clean", "video-first", "enterprise", "professional", "trustworthy"],
    colorPalette: {
      primary: "#ffffff",
      secondary: "#f8fafc",
      accent: "#6366f1",  // indigo
      background: "#ffffff",
      text: "#1e293b",
    },
    typography: {
      heading: "Inter",
      body: "Inter",
    },
    
    pageStructure: [
      "Nav: Logo | Product | Solutions | For Enterprise | Pricing | Blog | Login | Get started free",
      "Hero: Headline + subhead + demo video (autoplay muted) + CTA",
      "Logo strip: 'Used by X% of Fortune 100'",
      "Use cases (3 cards: Training, Marketing, Customer Service)",
      "How it works (3 steps)",
      "Template gallery",
      "Testimonials",
      "Pricing",
      "Footer",
    ],
    heroStyle: "Centered headline + embedded demo video (autoplay, muted) — shows avatars immediately",
    ctaStyle: "Indigo filled button — 'Create your first video free' — 0 friction",
    socialProofStyle: "Enterprise logo wall + 'No actors, no cameras, no studios' tagline",
    standoutComponents: [
      "Autoplay demo video (AI avatar talking)",
      "Use case cards with icons",
      "Template gallery with video thumbnails",
      "Simple 3-step how it works",
    ],
    navigationStyle: "Full nav with 'Get started free' very prominent",
    footerStyle: "Multi-column: Product | Solutions | Enterprise | Resources | Legal",
    
    headlineFormula: "Create [type of video] with [key differentiator]. No [common friction].",
    valuePropStyle: "Friction-removal first: no actors, no cameras, no studios",
    copyTone: "Professional, clear, removes objections immediately",
    
    techStack: ["Next.js", "Tailwind"],
    
    inspiredBy: ["Enterprise SaaS", "Video-first products"],
    
    notes: "The demo video in the hero is perfect for AI products — you understand it in 30 seconds. EMVY should consider embedded AI demos on key service pages.",
  },

  // 11. GITHUB COPILOT
  {
    id: "github-copilot",
    name: "GitHub Copilot",
    url: "https://github.com/features/copilot",
    sector: "AI / Developer Tools",
    status: "live",
    reviewedAt: "2026-05-18",

    whatWorks: [
      "The demo IS the product — real VS Code + Copilot chat UI, not a mockup",
      "Dark mode with vibrant purple/blue glow effect creates depth and focus",
      "Short punchy 3-word headline: 'Command your craft.'",
      "Eyebrow tags with subtle cursor blink animation add life to static text",
      "River alternating sections create rhythm without monotony",
      "CSS-only animations — no JS animation libraries (GPU-accelerated)",
      "Real customer photo + specific stat (94% productivity) for credibility",
      "Marquee logo bar with pause control — social proof that doesn't feel static",
      "Limited palette — dark grey + white + purple product color + green action color",
      "Mona Sans variable font with tight tracking on headings",
    ],

    designVibe: ["dark mode", "high-tech", "developer-focused", "premium", "AI-forward"],
    colorPalette: {
      primary: "#6e40c9",    // Copilot purple
      secondary: "#21262d", // Card surface
      accent: "#3fb950",    // Action green
      background: "#0d1117", // Near-black
      text: "#f0f6fc",      // Primary text
    },
    typography: {
      heading: "Mona Sans (variable, custom)",
      body: "System font stack (Apple/Segoe/Roboto)",
    },

    pageStructure: [
      "Sticky GitHub header (64px, blur backdrop)",
      "Product sub-nav (48px, Copilot-focused)",
      "Hero: full viewport, centered, glow effect + product demo",
      "Social proof logo marquee (grayscale, auto-scroll)",
      "3-column feature cards (dark surface, icon + headline + description)",
      "Workflow section: 3x 'river' alternating 50/50 text/visual sections",
      "Customer story: dark card + photo + specific stat + quote",
      "Enterprise section",
      "Pricing: toggle individual/business, 3-tier cards",
      "FAQ accordion (single column, chevron animation)",
      "Closing CTA banner (gradient)",
      "4-column footer",
    ],
    heroStyle: "Full viewport, centered, dark gradient bg + purple/blue radial glow behind real VS Code + Copilot chat mockup",
    ctaStyle: "Green filled primary ('Get started') + dark outlined secondary ('See plans & pricing')",
    socialProofStyle: "Grayscale logo marquee (Duolingo, GM, Mercado Libre, Shopify, Stripe, Coca-Cola), auto-scrolling with pause button",

    standoutComponents: [
      "Purple/blue radial glow behind hero visual (CSS box-shadow + gradient)",
      "Mona Sans variable font with text-wrap: balance",
      "Eyebrow tag with cursor blink animation (CSS @keyframes)",
      "50/50 alternating river sections for feature deep-dives",
      "CSS-only marquee scroll animation",
      "Card hover: border color shift + translateY(-2px) + shadow lift",
      "Sticky header with backdrop-filter: blur(12px)",
      "Real product UI as hero visual — not stock photography",
    ],
    navigationStyle: "Sticky top header (GitHub global nav) + product sub-nav below",
    footerStyle: "4-column: Platform | Ecosystem | Support | Company + newsletter signup + social icons",

    headlineFormula: "[Command verb] + [your craft]. — 3 words max, action-oriented",
    valuePropStyle: "Product demo first, features second — show don't tell",
    copyTone: "Confident, direct, technical but accessible. No fluff. Short punchy sentences.",

    techStack: ["Next.js", "Primer Brand (GitHub design system)", "Mona Sans variable font", "Octicons (SVG icons)"],

    inspiredBy: ["AI developer tools", "Dark mode SaaS", "GitHub brand"],

    notes: "Best-in-class developer tool landing page. The glow effect + real product UI as hero is the key combo. EMVY should use real product screenshots as hero imagery, not mockups or stock photos.",
  },
];