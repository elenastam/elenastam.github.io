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
      subtitle: "Redesigning the Project Builder",
      
      // 1. Problem (3-Bullet Reset)
      problem: {
        title: "The Problem",
        description: "The Project Builder was the main bottleneck in the workflow:", [cite: 349-351]
        bullets: [
          "Time-intensive — ~7m 35s per project.", [cite: 353]
          "Manual and error-prone.", [cite: 354]
          "Not structured for automation.", [cite: 358-359]
        ]
      },
  
      // 2. My Role (The High-Impact Version)
      role: {
        title: "My Role",
        subtitle: "Lead UX Designer — End-to-End Ownership",
        bullets: [
          "Defined interaction architecture and UI system for 700+ users.", [cite: 361-363]
          "Established AI interaction patterns and components adopted across the design system.", [cite: 45, 370]
          "Led cross-functional workshops and validated direction with executive stakeholders.", [cite: 362, 366]
        ]
      },
  
      // 3. Strategic Challenge
      challenge: {
        title: "The Strategic Challenge",
        constraints: [
          { 
            label: "Single-Commit Constraint", 
            text: "All data submitted in one transaction—no drafts. The UX had to feel flexible while technically behaving as a single atomic action." [cite: 379]
          },
          { 
            label: "Compliance Constraint", 
            text: "Certain project types required explicit human validation before AI could proceed. Enforce this without slowing standard workflows." [cite: 381-382]
          }
        ]
      },
  
      // 4. Iterations (Surgical Version)
      iterations: [
        {
          title: "Iteration 1 — Sequential Flow",
          description: "AI-assisted steps revealed progressively.", [cite: 387-388]
          insight: "Users lacked visibility into what the AI was doing → low trust." [cite: 395-397]
        },
        {
          title: "Iteration 2 — Persistent Context",
          description: "Introduced a split-screen layout with a fixed brief and AI-assisted form.", [cite: 401, 403]
          insight: "Visibility—not guidance—built trust." [cite: 414-416]
        }
      ],
  
      // 5. Final Solution & Lifecycle (One-Time AI Trust Mention)
      solution: {
        title: "Final Solution",
        description: "A split-screen architecture with a locked client brief (source of truth) on the left and AI-assisted configuration on the right. AI-filled fields are visually distinguished (blue tint + badge), allowing users to instantly verify system-generated inputs.", [cite: 441-442, 465-470, 722-723]
        lifecycle: "AI Lifecycle: From initial context to AI-assisted completion—with full visibility at every step." [cite: 425-436]
      },
  
      // 6. Strategic AI Unlock (Cleaned)
      unlock: {
        title: "AI Features Enabled",
        features: [
          "Task automation — projects generate tasks automatically.", [cite: 503-507]
          "SearchAgent seeding — eliminates duplicate data entry.", [cite: 508-511]
          "Sourcing assignment — removes manual coordination." [cite: 505, 515]
        ]
      },
  
      // 7. Impact & Takeaways (Tighter)
      impact: {
        summary: "The Project Builder became the foundation for automation across the client workflow.", [cite: 332]
        stats: [
          { label: "Faster Setup", value: "20%" }, [cite: 338, 539]
          { label: "AI Features", value: "3" }, [cite: 340, 540]
          { label: "Compliance Errors", value: "0" } [cite: 339, 541]
        ],
        quote: "The new flow feels like having an assistant pre-read the brief for me." [cite: 545]
      },
  
      next: [
        "Improve AI accuracy through user feedback loops.", [cite: 559]
        "Expand design system patterns across workflows.", [cite: 561]
        "Enable reusable project templates." [cite: 564]
      ],
  
      takeaways: [
        "Constraints shape design — the single-commit limitation led to the split-screen solution.", [cite: 568]
        "AI trust is visual — users trust what they can verify instantly.", [cite: 572]
        "Structure enables automation — good UX starts with structured data." [cite: 574]
      ]
    }
  };
  
  window.PORTFOLIO_CONTENT = PORTFOLIO_CONTENT;