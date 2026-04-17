const PORTFOLIO_CONTENT = {
  nav: {
    name: "Elena Stamatopoulou",
    links: [
      { label: "Work", href: "index.html" },
      { label: "About", href: "about.html" }
    ]
  },

  projectBuilder: {
    title: "From 7 Minutes to Seconds",
    positioning: "A redesign that turned a manual workflow into an AI-powered system used by 700+ employees.",
    subtitle: "Redesigning the Project Builder",
    
    problem: {
      title: "The Problem",
      description: "The Project Builder was the main bottleneck in the workflow:",
      bullets: [
        "Time-intensive — ~7m 35s per project",
        "Manual and error-prone",
        "Not structured for automation"
      ]
    },

    role: {
      title: "My Role",
      subtitle: "Lead UX Designer — End-to-End Ownership",
      bullets: [
        "Defined interaction architecture and UI system at scale (700+ users)",
        "Established AI interaction patterns adopted across the design system",
        "Led cross-functional workshops and validated direction with executive stakeholders"
      ]
    },

    challenge: {
      title: "The Strategic Challenge",
      constraints: [
        { 
          label: "Single-Commit Constraint", 
          text: "All data submitted in one transaction—no drafts. The UX had to feel flexible while technically behaving as a single atomic action."
        },
        { 
          label: "Compliance Constraint", 
          text: "Certain project types required explicit human validation before AI could proceed. Had to enforce this without slowing standard workflows."
        }
      ]
    },

    iterations: [
      {
        title: "Iteration 1 — Sequential Flow",
        description: "AI-assisted steps revealed progressively.",
        insight: "Users lacked visibility into what the AI was doing → low trust."
      },
      {
        title: "Iteration 2 — Persistent Context",
        description: "Introduced a split-screen layout with a fixed brief and AI-assisted form.",
        insight: "Visibility—not guidance—built trust."
      }
    ],

    solution: {
      title: "Final Solution",
      description: "A split-screen architecture with a locked client brief (source of truth) on the left and AI-assisted configuration on the right. AI-filled fields are visually distinguished (blue tint + badge), enabling instant verification.",
      lifecycle: "AI Lifecycle: From initial context to AI-assisted completion, with full visibility at every step."
    },

    unlock: {
      title: "AI Features Enabled",
      features: [
        "Task automation — projects generate tasks automatically",
        "SearchAgent seeding — eliminates duplicate data entry",
        "Sourcing assignment — removes manual coordination"
      ]
    },

    impact: {
      summary: "The Project Builder became the foundation for automation across the client workflow.",
      stats: [
        { label: "AI Features Enabled", value: "3", subtext: "Task automation, SearchAgent seeding, sourcing assignment" },
        { label: "Compliance Errors", value: "0", subtext: "Validated and sustained in live testing" },
        { label: "Faster Setup", value: "20%", subtext: "Reduction in manual data entry" }
      ],
      quote: "The new flow feels like having an assistant pre-read the brief for me."
    },

    next: [
      "Improve AI accuracy through user feedback loops",
      "Expand design system patterns across workflows",
      "Enable reusable project templates"
    ],

    takeaways: [
      "Constraints shape design — the single-commit limitation led to the split-screen solution",
      "AI trust is visual — users trust what they can verify instantly",
      "Structure enables automation — good UX starts with structured data"
    ]
  },

  // 🚀 THIS IS THE NEW SEARCHAGENT SECTION
  searchAgent: {
    title: "SearchAgent: Brief-Aware AI Discovery",
    positioning: "Evolving an expert discovery engine from manual database filtering to AI-driven semantic ranking.",
    subtitle: "V1 established the infrastructure. V2 made it intelligent.",
    
    problem: {
      title: "The Problem",
      description: "Associates were spending hours scrolling raw search results to find experts for complex Private Equity briefs:",
      bullets: [
        "Time-to-First-List was the primary competitive bottleneck",
        "Manual filtering created high cognitive load and search fatigue",
        "Trust gap: Users relied on LinkedIn because internal AI was a 'black box'"
      ]
    },

    role: {
      title: "My Role",
      subtitle: "Sole UX Designer — End-to-End Ownership",
      bullets: [
        "Led global research study with 15 MBB account holders to define V2 strategy",
        "Negotiated technical trade-offs with Data Science to define ranking logic",
        "Designed the 'Explainable AI' pattern adopted as the new company standard",
        "Trained 200+ associates on the new workflow to drive adoption"
      ]
    },

    research: {
      title: "The 15-User Study",
      insight: "70% of Power Users prioritised a 'ready-to-use shortlist' over broader data access.",
      patterns: [
        { label: "Trust Metric", text: "Users define quality by expert recency (last 12 months) and prior screening." },
        { label: "80/20 Rule", text: "80% of users are company-agnostic; they need 'any' customer of a competitor." }
      ]
    },

    solution: {
      title: "Final Solution",
      description: "A brief-aware discovery engine that uses LLMs to re-rank expert pools by project relevance. The 'Suggested' tab offers a curated starting point with transparency labels explaining the AI's logic.",
      impact: "Ranking-related support tickets dropped from 10% to 2% post-launch."
    },

    impact: {
      stats: [
        { label: "Adoption Growth", value: "2% → 18%", subtext: "From niche tool to primary discovery workflow" },
        { label: "Operational Capacity", value: "~315 hrs", subtext: "Reclaimed per month from manual filtering" },
        { label: "Primary KPI", value: "10%", subtext: "Decrease in Time-to-First-List" }
      ]
    },

    takeaways: [
      "Trust is the foundation — accuracy is useless if the AI is a black box",
      "Research makes trade-offs defensible — 15-user data allowed us to descope features confidently",
      "Simplicity is earned — move from 6 views to 1 consolidated 'Suggested' tab"
    ]
  }
};

window.PORTFOLIO_CONTENT = PORTFOLIO_CONTENT;