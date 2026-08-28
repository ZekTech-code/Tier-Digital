export const analyticsPosts = [
  {
    slug: "full-funnel-attribution-without-guesswork",
    title: "Full-Funnel Attribution Without the Guesswork",
    excerpt:
      "Platform-reported ROAS and reality have diverged. Here's the measurement stack we use to make confident budget decisions with imperfect data.",
    category: "Analytics",
    author: "Priya Nair",
    authorRole: "Analytics Lead",
    date: "Jun 3, 2026",
    readTime: "9 min read",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    content: [
      {
        heading: "Accept that no single number is truth",
        paragraphs: [
          "Meta reports one ROAS, GA4 reports another, your attribution platform reports a third, and your bank account reports the truth. Chasing perfect attribution is a dead end. The goal is triangulation: multiple imperfect signals that point in the same direction.",
        ],
      },
      {
        heading: "The measurement stack we trust",
        paragraphs: [
          "We combine server-side tracking via the Conversions API, blended MER (marketing efficiency ratio) as the north star, geo-lift tests for incrementality on big spends, and post-purchase surveys for self-reported attribution. Each covers the blind spots of the others.",
        ],
        list: [
          "MER: total revenue ÷ total ad spend, reviewed weekly — the honest headline number",
          "Conversions API: restores event signal lost to browser restrictions",
          "Geo-lift tests: the closest thing to a true causal answer money can buy",
          "Post-purchase surveys: customers will happily tell you where they came from",
        ],
      },
      {
        heading: "Make decisions on trends, not days",
        paragraphs: [
          "Daily platform numbers are noise. We review pacing weekly and make structural budget decisions monthly. Teams that react to daily fluctuations end up perpetually resetting their learning phases — and paying for it in performance.",
        ],
      },
    ],
  },
  {
    slug: "mer-explained-metric-cfo-cares-about",
    title: "MER Explained: The Only Metric Your CFO Actually Cares About",
    excerpt:
      "ROAS lies by omission. MER — marketing efficiency ratio — tells you what your marketing is really doing to the bank account. Here's how to use it.",
    category: "Analytics",
    author: "Priya Nair",
    authorRole: "Analytics Lead",
    date: "May 20, 2026",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop",
    content: [
      {
        heading: "What MER actually measures",
        paragraphs: [
          "MER is brutally simple: total revenue divided by total marketing spend, across every channel, over a period. No attribution modeling, no last-click politics, no platform self-grading. If you spent $80k last month and booked $320k, your MER is 4.0.",
          "Its power is precisely its bluntness. Platforms claim credit for conversions that would have happened anyway; MER cannot lie that way, because it never assigns credit at all.",
        ],
      },
      {
        heading: "How to run a business on MER",
        paragraphs: [
          "Set a target MER from your margins: if gross margin is 60% and you need operating profit, your break-even MER might be 1.7 — meaning anything above that creates real money. Then manage weekly pacing against that line instead of platform dashboards.",
        ],
        list: [
          "Compute it weekly and monthly; daily MER is too noisy to act on",
          "Watch trend direction over absolute value — a falling MER precedes trouble",
          "Pair with new-vs-returning revenue split to know what's actually driving moves",
          "Use platform ROAS for tactical optimization only, never for budget truth",
        ],
      },
      {
        heading: "Where MER misleads",
        paragraphs: [
          "MER lags: today's spend may pay off next month, especially for considered purchases. And it blends everything — a great email month can mask deteriorating paid efficiency. That's why MER is the north star, not the only instrument: pair it with channel-level diagnostics and you get both truth and explanation.",
        ],
      },
    ],
  },
  {
    slug: "conversions-api-setup-right-way",
    title: "Conversions API Setup: Doing It Right (Most Accounts Don't)",
    excerpt:
      "A half-configured Conversions API is worse than none — it feeds the algorithm confident nonsense. Here's the setup checklist we run on every new account.",
    category: "Analytics",
    author: "Priya Nair",
    authorRole: "Analytics Lead",
    date: "May 6, 2026",
    readTime: "7 min read",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop",
    content: [
      {
        heading: "Why server-side stopped being optional",
        paragraphs: [
          "Browser-side pixels now miss a large share of events — iOS restrictions, ad blockers, cookie lifetimes measured in days. The Conversions API sends events directly from your server, restoring signal the browser can't lose. Accounts that implement it properly typically recover 10–30% of previously invisible conversions.",
          "But deduplication matters: send the same event from pixel and server without matching event IDs and you'll double-count yourself into false confidence.",
        ],
      },
      {
        heading: "The setup checklist",
        paragraphs: [
          "This is the sequence we run on every new engagement. Skipping steps produces the 'confident nonsense' problem — data that looks fine and quietly poisons optimization.",
        ],
        list: [
          "Event Match Quality above 6.0 on priority events — hash email, phone, and external ID",
          "Event IDs matched between pixel and CAPI for perfect deduplication",
          "Priority events mapped: Purchase, InitiateCheckout, AddToCart, Lead",
          "Value and currency passed on every purchase event — no exceptions",
          "Events Manager error rate monitored weekly, not just at launch",
        ],
      },
      {
        heading: "Verify, then verify again",
        paragraphs: [
          "After setup, compare CAPI-received events against your backend orders for a two-week window. Discrepancies above 5% mean something is dropping or duplicating. We also keep a UTM-based spreadsheet reconciliation as the final sanity check — boring, and it catches what dashboards hide.",
        ],
      },
    ],
  },
  {
    slug: "geo-lift-testing-small-budget",
    title: "Geo-Lift Testing on a Small Budget: Yes, You Can Afford Incrementality",
    excerpt:
      "True incrementality testing used to require enterprise budgets. Not anymore. A practical guide to geo experiments that fit inside six figures of annual spend.",
    category: "Analytics",
    author: "Priya Nair",
    authorRole: "Analytics Lead",
    date: "Apr 22, 2026",
    readTime: "8 min read",
    image:
      "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?q=80&w=1200&auto=format&fit=crop",
    content: [
      {
        heading: "The question platforms can't answer",
        paragraphs: [
          "Attribution tells you what platforms claim. Geo-lift tells you what actually happened. By holding some regions out of ad delivery and comparing them against exposed regions, you measure causality directly: did the ads create sales, or just relabel them?",
          "Historically this required holdouts big enough to matter statistically — enterprise territory. Modern platform tooling and smarter design have shrunk the minimum viable test dramatically.",
        ],
      },
      {
        heading: "Designing a test that fits your budget",
        paragraphs: [
          "The trick is choosing comparisons carefully. Matched-market designs pair similar regions — one treated, one held out — which squeezes far more signal from smaller spends than naive splits.",
        ],
        list: [
          "Pick 2–4 region pairs matched on population and historical sales similarity",
          "Run 4–6 weeks minimum; shorter tests drown in weekly noise",
          "Keep total spend during test unchanged — moving budgets contaminates results",
          "Read results on revenue-per-capita deltas, not raw revenue",
        ],
      },
      {
        heading: "What to do with the answer",
        paragraphs: [
          "Expect humbling results: narrow retargeting frequently shows near-zero incremental lift, while prospecting shows less than reported but more than skeptics guess. Both findings are gold — they tell you where the next dollar actually earns money.",
          "One honest lift test per quarter beats a year of dashboard archaeology.",
        ],
      },
    ],
  },
  {
    slug: "dashboards-drive-decisions",
    title: "Dashboards That Drive Decisions (Instead of Just Looking Impressive)",
    excerpt:
      "Most marketing dashboards are decoration. The difference between reporting theater and a decision instrument comes down to five design choices.",
    category: "Analytics",
    author: "Priya Nair",
    authorRole: "Analytics Lead",
    date: "Apr 8, 2026",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=1200&auto=format&fit=crop",
    content: [
      {
        heading: "Reporting theater is real",
        paragraphs: [
          "Walk into most marketing teams and you'll find a beautiful dashboard nobody acts on. Forty charts, twelve sources, zero decisions. A dashboard earns its existence only when someone can look at it and know what to do next — everything else is expense.",
        ],
      },
      {
        heading: "Five rules for dashboards that work",
        paragraphs: [
          "Every dashboard we ship follows these rules. They're restrictive on purpose — constraint is what turns data into instruments.",
        ],
        list: [
          "One question per dashboard: 'are we hitting plan?' not 'everything about marketing'",
          "Targets on every metric — a number without a threshold is trivia",
          "Trend context always: sparklines beside every KPI, never naked current values",
          "Action column: each metric names what we do if it's red",
          "Weekly cadence enforced — refreshed automatically, reviewed in one standing meeting",
        ],
      },
      {
        heading: "Kill the vanity shelf",
        paragraphs: [
          "Impressions, follower counts, and engagement rates don't belong on leadership dashboards unless they connect to revenue in one hop. Move them to channel teams where they're diagnostic, and keep the executive view to a single screen: spend, MER, new-customer revenue, contribution margin, and the quarter's one strategic bet.",
        ],
      },
    ],
  },
  {
    slug: "cohort-analysis-reading-ltv",
    title: "Cohort Analysis for Beginners: Finally Reading LTV Correctly",
    excerpt:
      "Blended LTV is a fortune teller's average. Cohort analysis shows you what's actually happening to each month's customers — and it's easier than it looks.",
    category: "Analytics",
    author: "Priya Nair",
    authorRole: "Analytics Lead",
    date: "Mar 25, 2026",
    readTime: "7 min read",
    image:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1200&auto=format&fit=crop",
    content: [
      {
        heading: "Why averages deceive",
        paragraphs: [
          "Say your blended LTV is $140. Useful? Barely. It mixes December gift-buyers who never return with March subscribers who reorder faithfully. Blended numbers hide exactly the information you need: which acquisition months, channels, or offers produce customers worth having.",
          "Cohort analysis fixes this by grouping customers by when they arrived and tracking each group's behavior over time separately.",
        ],
      },
      {
        heading: "Build your first cohort table",
        paragraphs: [
          "You need only three columns to start: acquisition month, customers acquired, and cumulative revenue per customer at 30/60/90 days. Most platforms export this; a spreadsheet finishes the job.",
        ],
        list: [
          "Rows = acquisition months; columns = months since purchase",
          "Each cell = average cumulative revenue per customer in that cohort",
          "Color-scale the table — decay patterns jump out visually",
          "Add a repeat-rate row per cohort to separate frequency from value effects",
        ],
      },
      {
        heading: "Decisions cohorts unlock",
        paragraphs: [
          "Within a quarter of running cohort views, teams typically discover things blended metrics concealed: that a 'high-ROAS' discount campaign acquires one-and-done buyers, that a modest channel quietly produces the best 90-day values, or that a UX change improved repeat rates measurably.",
          "That's the whole game: stop asking how much customers are worth on average, and start asking which customers are worth acquiring more of.",
        ],
      },
    ],
  },
];
