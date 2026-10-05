/* Auto-generated from Jaylen markdown — AI Product Design Foundations */
(window.SUNKOVA_COURSES = window.SUNKOVA_COURSES || {})["ai-product-design-foundations"] = {
  slug: "ai-product-design-foundations",
  title: "AI Product Design Foundations",
  category: "AI Design",
  categorySlug: "ai-design",
  format: "live",
  image: "../assets/images/course-ai-product.webp",
  summary: "Design AI products people understand, trust, and actually use.",

  overview: {
    whoFor: "UX/UI designers who want to move into AI product work; Career switchers who have done a UX foundations course (or Sunkova's UX bridge) and know their way around Figma; Product managers, founders and developers who want to design AI features properly",
    prereqs: "**Basic UX process:** you've done some user research, wireframing and prototyping, even on a practice project. **Working Figma skills:** frames, components and auto layout at a basic level, plus clickable prototypes. **No coding needed.** You'll use no-code and AI-assisted tools. A laptop, a smartphone (ideally Android, because that's what most of your users carry) and a reliable internet connection for the live sessions.",
    duration: "8 weeks · 10–12 hours per week",
    format: "Live cohort (online + Nairobi studio sessions)",
    outcomes: ["Spot real AI opportunities.. You'll be able to tell when AI genuinely helps a user and when a simpler solution is better.", "Design for uncertainty and failure.. That means confidence, explanations, refusals, errors, recovery and handoff to a human.", "Design conversational and agentic experiences. that work in English, Swahili and Sheng, on WhatsApp and on low-end phones.", "Prototype with live AI. rather than lorem ipsum, and test with real users on a budget.", "Measure AI quality. with eval sets, rubrics and product metrics, working alongside engineers.", "Design responsibly. for East African users: harms mapping, consent, inclusion, and awareness of the Kenya Data Protection Act 2019.", "Tell the story.. You'll present a portfolio-grade case study to a client and to hiring partners."],
    tools: ["Figma + FigJam", "Notion or FigJam", "ChatGPT, Claude or Gemini", "Google AI Studio", "Voiceflow or Botpress", "Lovable, v0, Bolt or Figma Make", "Google Sheets", "WebAIM Contrast Checker or the Stark Figma plugin", "Loom or your phone camera"]
  },

  bigIdea: "Designing trust.",
  essentialQuestion: "How do we design AI products that people understand, trust and actually use?",
  courseChallenge: "Design and prototype an AI feature that solves a real problem for East African users, and prove that it works.",

  weeklyPlan: [
    {
      "week": 1,
      "focus": "1 · Designing for Probabilistic Systems",
      "session": "Challenge Drop Mon · Lab Wed · Show & Ship Fri",
      "due": "Sunday 8 PM"
    },
    {
      "week": 2,
      "focus": "2 · AI Opportunity Framing",
      "session": "Challenge Drop Mon · Lab Wed · Show & Ship Fri",
      "due": "Sunday 8 PM"
    },
    {
      "week": 3,
      "focus": "3 · Conversational & Agentic UX",
      "session": "Challenge Drop Mon · Lab Wed · Show & Ship Fri",
      "due": "Sunday 8 PM"
    },
    {
      "week": 4,
      "focus": "4 · Trust, Transparency & Failure States",
      "session": "Challenge Drop Mon · Lab Wed · Show & Ship Fri",
      "due": "Sunday 8 PM"
    },
    {
      "week": 5,
      "focus": "5 · Prototyping with Live AI",
      "session": "Challenge Drop Mon · Lab Wed · Show & Ship Fri",
      "due": "Sunday 8 PM"
    },
    {
      "week": 6,
      "focus": "6 · Measuring AI Experiences",
      "session": "Challenge Drop Mon · Lab Wed · Show & Ship Fri",
      "due": "Sunday 8 PM"
    },
    {
      "week": 7,
      "focus": "7 · Responsible & Inclusive AI Design + Capstone Sprint 1",
      "session": "Challenge Drop Mon · Lab Wed · Show & Ship Fri",
      "due": "Sunday 8 PM"
    },
    {
      "week": 8,
      "focus": "Capstone Sprint 2 + Demo Day",
      "session": "Challenge Drop Mon · Lab Wed · Show & Ship Fri",
      "due": "Sunday 8 PM"
    }
  ],

  selfPaced: {
    "checkpoints": [
      {
        "after": "01",
        "label": "Module 01 challenge submitted and peer-reviewed"
      },
      {
        "after": "04",
        "label": "Module 04 challenge submitted and peer-reviewed"
      },
      {
        "after": "07",
        "label": "Module 07 challenge submitted and peer-reviewed"
      }
    ]
  },

  modules: [
    {
      id: "01",
      title: "Designing for Probabilistic Systems",
      summary: "AI UX Teardown",
      hours: 10.0,
      status: "published",
      content: {
        essentialQuestion: "What changes when the product can be \"wrong\"?",
        objectives: ["Explain the difference between deterministic and probabilistic products in plain language.", "Describe how a user's *mental model* of an AI product shapes their trust in it.", "Use the Microsoft HAX Guidelines and the Google PAIR Guidebook to evaluate a real AI product.", "Write findings that link a specific guideline to a specific user impact.", "Turn findings into clear, prioritised redesign recommendations."],
        watch: [
          {
            "type": "video",
            "title": "Large Language Models explained briefly",
            "channel": "3Blue1Brown",
            "url": "https://www.youtube.com/watch?v=LPZh9BOjkQs",
            "length": "~8 min",
            "why": "The clearest visual explanation of why chatbots *predict* words instead of looking up answers. That's the root of \"probabilistic\"."
          },
          {
            "type": "video",
            "title": "Getting Started with the People + AI Guidebook",
            "channel": "Google Design",
            "url": "https://www.youtube.com/watch?v=n3HsvqBJrlY",
            "length": "~4 min",
            "why": "A quick tour of the PAIR Guidebook you'll use all course."
          },
          {
            "type": "video",
            "title": "Guidelines for Human-AI Interaction with Dr. Saleema Amershi",
            "channel": "Scott Hanselman (Hanselminutes)",
            "url": "https://www.youtube.com/watch?v=Kj33wtIMG-Y",
            "length": "~29 min",
            "why": "One of the researchers behind Microsoft's 18 HAX guidelines explains where they came from and why they matter. It's audio-friendly, so you can listen in a matatu."
          },
          {
            "type": "video",
            "title": "AI Literacy",
            "channel": "NNgroup",
            "url": "https://www.youtube.com/watch?v=73dqaOS5Bio",
            "length": "~5 min",
            "why": "What users (and designers) need to understand about AI so they can use it well."
          },
          {
            "type": "reading",
            "title": "Microsoft HAX, *Guidelines for Human-AI Interaction*: plus the *HAX Design Library* of examples",
            "channel": "Reading",
            "url": "https://www.microsoft.com/en-us/haxtoolkit/ai-guidelines/",
            "length": "—",
            "why": "Keep open while you work"
          }
        ],
        notes: `**1. Deterministic vs probabilistic: the big shift**

Most software you've designed so far is *deterministic*: the same input always gives the same output. If you send KES 500 via M-Pesa to 0712 345 678, the system does exactly that, every single time. If it can't, it gives a clear error ("Insufficient funds"). Designers could map every state in advance.

AI products are *probabilistic*. A large language model (LLM) doesn't look up "the answer". It predicts the most likely next words based on patterns in its training data. Ask a bank chatbot the same question twice and you may get two different answers. Usually they're both fine. Sometimes one is confidently wrong. That's called a **hallucination**.

| | Deterministic product | Probabilistic (AI) product |
|---|---|---|
| Example | M-Pesa *Send Money* | A WhatsApp assistant answering "Can I get a loan from my SACCO?" |
| Same input → | Same output | Possibly different outputs |
| Errors are… | Known and listable | Partly unknown; can sound confident |
| Designer's job | Design every state | Design for *ranges* of outcomes, uncertainty and recovery |
| Trust comes from… | Reliability | Reliability **plus** honesty about limits |

**2. The designer's new questions**

When the product can be wrong, you need to ask:
- **What can it do, and how well?** (HAX G1 and G2.) Does the user know that the farm assistant can identify common maize diseases from photos but can't diagnose livestock?
- **What happens when it's wrong?** Can the user easily correct, dismiss or ignore it?
- **How costly is a mistake?** A wrong song recommendation is harmless. A wrong dosage from a clinic bot is dangerous. The higher the cost of an error, the more you need confirmation, explanation and a human in the loop.

**3. Mental models**

A **mental model** is the user's internal picture of how something works. Many people treat a chatbot like a very smart person, or like Google search, and both pictures are wrong. If a SACCO member thinks the bot "knows" their account, they'll trust its loan answer even when it's only guessing. A good AI design *sets* the right mental model early ("I can explain SACCO loan products. I can't see your account balance") and *reinforces* it over time.

**4. Two guidebooks you'll live with**

- **Microsoft HAX Guidelines:** 18 evidence-based guidelines grouped by *when* they apply: **Initially** (G1–G2: make clear what the system can do and how well), **During interaction** (G3–G6: timing, context, social norms, mitigating bias), **When wrong** (G7–G11: easy invocation, dismissal and correction, scoping when in doubt, explaining why), and **Over time** (G12–G18: memory, learning, cautious updates, feedback, consequences, global controls, notifying of changes).
- **Google PAIR Guidebook:** methods and patterns organised around the product journey: user needs and success, data, mental models, explainability and trust, feedback and control, and errors and graceful failure.

**5. How to do a teardown**

A teardown is a structured critique of a real product. For each finding, write:

> **Screenshot → What happens → Guideline violated or met → User impact → Recommendation**

*Example:* "The bank bot answers 'What's my loan limit?' with a generic paragraph about loan products (screenshot 4). It violates **HAX G1** (make clear what the system can do), because it never says it can't see account data. **Impact:** the user assumes this *is* their limit, applies for the wrong amount and gets rejected. **Recommendation:** the bot states its scope up front and offers 'Check my actual limit in the app' or 'Talk to an agent'."

**Common mistakes**
- Writing opinions ("the UI is ugly") instead of guideline-linked findings.
- Only reviewing the happy path. Try typos, Sheng, off-topic questions and impossible requests.
- Listing 30 small issues instead of prioritising the 5 that hurt users most.
- Forgetting to note what the product does *well*. Good patterns are findings too.

**Glossary**
- **LLM (large language model):** an AI model trained to predict text. It's the engine behind ChatGPT, Gemini, Claude and Meta AI.
- **Probabilistic:** the outputs vary and are "likely" rather than guaranteed.
- **Hallucination:** a fluent, confident but false AI output.
- **Mental model:** the user's belief about how a system works.
- **Teardown:** a structured, evidence-based critique of an existing product.`,
        quickCheck: [
          {
            "q": "In one sentence, why can't you design every state of an LLM chatbot in advance?",
            "a": "Because the model generates outputs probabilistically, so the same input can produce different (and sometimes unexpected) outputs that can't all be listed in advance."
          },
          {
            "q": "A clinic bot and a music bot both make mistakes 5% of the time. Which needs more safeguards, and why?",
            "a": "The clinic bot. The *cost of an error* (health harm) is far higher, so it needs confirmation, clear limits and a human in the loop."
          },
          {
            "q": "Which HAX guideline group covers \"help users fix the AI's mistake\"?",
            "a": "**When wrong** (G7–G11), especially G9, *support efficient correction*."
          },
          {
            "q": "What's wrong with this finding: \"The chatbot feels confusing\"?",
            "a": "It isn't tied to evidence (no screenshot), a specific guideline or a user impact, and it gives no recommendation."
          },
          {
            "q": "Name two PAIR Guidebook topics.",
            "a": "Any two of: user needs and defining success; data collection and evaluation; mental models; explainability and trust; feedback and control; errors and graceful failure."
          }
        ],
        challenge: {
          scenario: `Sunkova's design studio has been asked by a (fictional) Nairobi fintech, *PesaPoa*, to explain why customers abandon AI assistants. Before they redesign their own bot, they want evidence from AI products Kenyans already use.`,
          build: `A teardown of **two AI products used in Kenya**, for example a bank or telco chatbot (such as Safaricom's Zuri on WhatsApp), Meta AI on WhatsApp (if it's available to you), an AI feature in a fintech or e-commerce app, or a public chatbot such as ChatGPT or Gemini used for a Kenyan task.`,
          deliverables: ["A **teardown deck of 10–15 slides** (Figma, FigJam or Slides) with annotated screenshots.", "At least **8 findings** across both products, each in the format *screenshot → what happens → guideline → user impact → recommendation*.", "**5 prioritised redesign recommendations**, with at least one shown as a quick before/after sketch.", "A one-slide **\"Mental model\" summary** for each product: what users probably think it does vs. what it actually does."],
          constraints: ["Every finding must cite a **specific HAX guideline (G1–G18) or PAIR topic** *and* a **user impact**.", "Test beyond the happy path: include at least **one Swahili or Sheng prompt**, **one off-topic request** and **one impossible request** per product.", "Blur or crop any personal information (phone numbers, balances, names) in screenshots."],
          hints: ["**(30 min)** Pick two products you can actually access, and write 3 realistic tasks for each (e.g. \"Find out how to reverse a wrong M-Pesa transaction\").", "**(60 min)** Run the tasks and screenshot everything. Add the edge prompts: \"Niaje, nataka loan ya haraka,\" \"What's the weather in Kisumu?\", \"Transfer my whole balance to my sister.\"", "**(45 min)** Print the 18 HAX guidelines (or open them in a second window) and tag each screenshot with the guidelines it meets or violates.", "**(45 min)** Write your findings, rank them by user impact (how many people does this affect, and how badly?), and pick the top 5.", "**(60 min)** Build the deck: title, method, product overviews, findings, mental models, recommendations, and what each product does well.", "**(15 min)** Do a sanity check: show slide 3 to a non-designer friend. Do they understand the finding in 10 seconds?"],
          submissionFormat: `A view link to your Figma/FigJam/Slides deck plus a PDF export, posted in the cohort channel by Sunday 8 PM, with a 2-minute Loom walkthrough (optional, but it earns XP).`,
          rubric: [
            {
              "criterion": "Depth of analysis",
              "emerging": "Fewer than 8 findings; happy path only",
              "developing": "8+ findings, mostly surface-level UI issues",
              "proficient": "8+ findings covering happy path, edge cases and multilingual prompts",
              "exemplary": "Findings reveal *patterns* across both products, backed by evidence from a real user or two"
            },
            {
              "criterion": "Accurate use of guidelines",
              "emerging": "Guidelines missing or misapplied",
              "developing": "Guidelines cited but sometimes vaguely",
              "proficient": "Every finding cites the right guideline correctly",
              "exemplary": "Guidelines used precisely, including where a product *meets* them and the trade-offs between guidelines"
            },
            {
              "criterion": "Quality of recommendations",
              "emerging": "Vague (\"make it better\")",
              "developing": "Specific but not prioritised",
              "proficient": "5 specific, prioritised, feasible recommendations",
              "exemplary": "Recommendations include before/after sketches and consider cost of error and the Kenyan context"
            },
            {
              "criterion": "Visual communication",
              "emerging": "Hard to follow; unannotated screenshots",
              "developing": "Readable but cluttered",
              "proficient": "Clear structure, annotated screenshots, one idea per slide",
              "exemplary": "Portfolio-grade deck a client could act on immediately"
            }
          ],
          stretch: `Add a third product from outside Kenya that handles the same task well, and show what Kenyan products could borrow from it. Or run a 10-minute think-aloud with one real user on your worst-rated product and add their quotes as evidence.`
        },
        reflect: ["Before this week, what was *your own* mental model of how chatbots work? How has it changed?", "Which finding surprised you most, and what does it suggest about how Kenyan users are being served (or not)?", "Which HAX guideline do you think is hardest to design for, and why?"]
      }
    },
    {
      id: "02",
      title: "AI Opportunity Framing",
      summary: "Opportunity Sprint (real client brief)",
      hours: 10.0,
      status: "published",
      content: {
        essentialQuestion: "Should this even be AI?",
        objectives: ["Use jobs-to-be-done to describe what users are really trying to achieve.", "Distinguish **automate** from **augment** opportunities.", "Score opportunities on value, feasibility (including data availability) and risk (including the cost of errors).", "Run short, ethical user interviews and synthesise them into a journey map.", "Write a one-page AI feature brief, and justify the ideas you *rejected*."],
        watch: [
          {
            "type": "video",
            "title": "Don't Start with AI, Start with the Problem",
            "channel": "NNgroup",
            "url": "https://www.youtube.com/watch?v=hIqqLppXJPs",
            "length": "~4 min",
            "why": "The single most important mindset for this module."
          },
          {
            "type": "video",
            "title": "AI Strategy: 3 Key Questions",
            "channel": "NNgroup",
            "url": "https://www.youtube.com/watch?v=Ku_AojKEaiQ",
            "length": "~5 min",
            "why": "A simple set of questions to pressure-test any \"let's add AI\" idea."
          },
          {
            "type": "video",
            "title": "Clay Christensen: The Jobs to be Done Theory",
            "channel": "HubSpot Marketing",
            "url": "https://www.youtube.com/watch?v=Stc0beAxavY",
            "length": "~7 min",
            "why": "The originator of JTBD explains the famous \"milkshake\" idea in his own words."
          },
          {
            "type": "video",
            "title": "Designing Human-Centered AI Products (Google I/O'19)",
            "channel": "Google Design",
            "url": "https://www.youtube.com/watch?v=rf83vRxLWFQ",
            "length": "~38 min",
            "why": "Google's PAIR leads on deciding whether AI adds unique value, turning user needs into data needs, and building trust."
          },
          {
            "type": "reading",
            "title": "PAIR Guidebook chapter *User Needs + Defining Success*",
            "channel": "Reading",
            "url": "https://pair.withgoogle.com/chapter/user-needs/",
            "length": "—",
            "why": "Keep open while you work"
          }
        ],
        notes: `**1. Start with the job, not the technology**

People don't want "AI". They want a job done. **Jobs-to-be-done (JTBD)** describes that job in the user's own terms:

> *When* [situation], *I want to* [motivation], *so I can* [outcome].

*Example (a clinic in Kitengela):* "When my child has a fever at night, I want to know whether I need to come in now or wait until morning, so I don't waste money on a boda to the clinic for nothing, or wait too long."

Notice there's no mention of AI. The job could be served by a nurse hotline, a simple symptom checklist on WhatsApp, or an AI triage assistant. Your job is to find the *best* solution, which isn't always AI.

**2. When AI is a good fit, and when it isn't**

AI tends to help when:
- the task needs **personalisation at scale** (crop advice for thousands of farmers, each with different soil and weather);
- the input is **messy human language, images or voice** (a photo of a leaf, or a voice note in Swahili);
- **perfect accuracy isn't essential**, or a human can check the result;
- there's **data** to learn from or ground answers in (the clinic's FAQs, a SACCO's loan policy).

AI is often a poor fit when:
- a **simple rule** works ("Loans are 3× your savings": that's a calculator, not AI);
- the task needs **predictability and full explainability** (e.g. the legal final decision on a loan);
- **errors are very costly** and no human can check them;
- users **value doing the task themselves**, or want a human relationship (e.g. bereavement support).

**3. Automate or augment?**

| | **Automate** | **Augment** |
|---|---|---|
| What AI does | Does the task *for* the user | Helps the user do the task *better* |
| Example | Auto-tagging M-Pesa statement lines as "rent", "school fees" or "stock" | Suggesting a reply for a SACCO officer to edit before sending |
| Works when | The task is boring, low-risk and high-volume | The task is high-stakes, creative or relationship-based |
| Risk | Silent errors | Users over-trust suggestions |

**4. The opportunity matrix**

Score each idea from 1 to 5 on three dimensions:
- **Value:** how painful and how frequent is the problem? How much better would the solution be than today?
- **Feasibility:** is there data? Can current AI do it reliably? Can it run on users' phones and data bundles? Can it be built cheaply?
- **Risk:** what's the **cost of an error**, and who pays it? Are there privacy, bias or legal concerns?

Plot ideas on a **Value vs Feasibility** grid and colour them by Risk. The best first bet is usually high value, high feasibility and low-to-medium risk.

**5. Interviewing users (quickly and ethically)**

- Talk to **3–5 real target users**, not classmates. A 20-minute chat at a SACCO office, an agrovet shop or a clinic waiting area is enough.
- Ask about **past behaviour** ("Tell me about the last time you…"), not hypotheticals ("Would you use an AI that…?").
- **Ask for consent** before recording, explain how you'll use the notes, and don't collect ID numbers or health details you don't need. (You'll go deeper on the Kenya Data Protection Act in Module 7.)
- Synthesise by affinity-mapping quotes into themes, then map the **journey** (steps, feelings, pain points) and mark where AI *might* help.

**Common mistakes**
- Starting from "we need a chatbot" and working backwards.
- Interviewing friends who aren't target users.
- Ignoring data: a brilliant idea with no data to power it is a fantasy.
- Forgetting the **cost of errors** in the matrix.
- Presenting only the winning idea. The *rejected* ideas prove your judgement.

**Glossary**
- **JTBD:** jobs-to-be-done, the progress a person is trying to make in a given situation.
- **Automate / Augment:** AI does the task / AI helps a person do the task.
- **Opportunity matrix:** a grid for comparing ideas on value, feasibility and risk.
- **Cost of error:** the harm caused when the AI is wrong, and who bears it.
- **Feature brief:** a one-page description of the problem, users, proposed solution, success measures and risks.`,
        quickCheck: [
          {
            "q": "Rewrite \"Farmers need an AI chatbot\" as a JTBD statement.",
            "a": "For example: \"When I see spots on my maize leaves, I want to know quickly what's wrong and what to buy at the agrovet, so I don't lose my harvest or waste money on the wrong chemical.\""
          },
          {
            "q": "A SACCO wants AI to decide loan approvals automatically. Name two reasons to be cautious.",
            "a": "Any two: the high cost of errors for members; the need for explainability and fairness; possible bias in historical data; the Data Protection Act's provisions on automated decisions (s.35) and the right to ask for human review; and loss of member trust."
          },
          {
            "q": "Automate or augment: drafting replies to member complaints for an officer to review?",
            "a": "**Augment**, because a human reviews and edits before sending."
          },
          {
            "q": "Why is \"Would you use an AI app for this?\" a weak interview question?",
            "a": "It's hypothetical and leading. People are bad at predicting their own behaviour and tend to say \"yes\" to be polite. Ask about real past experiences instead."
          },
          {
            "q": "What must your Opportunity Sprint include besides the winning idea?",
            "a": "At least one **rejected** idea with a clear explanation of why it was rejected."
          }
        ],
        challenge: {
          scenario: `Your team is matched with a **real Nairobi client** from the Sunkova client pool, for example an agritech advisory service, a clinic booking line, a matatu SACCO, a savings SACCO or a boutique hotel. The client says "We want to use AI." Your job is to find out *whether* they should, and *where*.

> This client becomes your **capstone client**. Treat them professionally: be on time, ask for consent and send a thank-you note.`,
          build: "A research-backed recommendation for the client's single best AI opportunity.",
          deliverables: ["**Research synthesis:** 3–5 user interviews (plus one client or staff interview if possible), with an affinity map of themes and key quotes.", "**Journey map** of the current experience, with pain points and \"AI might help here\" markers.", "**Opportunity matrix** with at least 6 ideas scored on value, feasibility and risk.", "**One-page AI feature brief:** the JTBD, target users, proposed feature (automate or augment), why AI (and not a simpler solution), data needed, cost of errors, success measures and open questions.", "**One rejected idea**, explained."],
          constraints: ["Interviews must be with **real target users** and must include **consent**. Don't record anyone without permission, and don't collect personal data you don't need.", "You must present **at least one idea you rejected** and explain why.", "The feature must be realistic for the client's users, including their phones, data costs, languages and literacy levels."],
          hints: ["**Monday:** have a 30-minute kickoff call with the client. Ask: *Who are your customers? What do they complain about? What does your team spend too much time on? What data do you already have?*", "**Tuesday:** write a 6-question interview guide built around past behaviour, then recruit 3–5 users (the client can often introduce you).", "**Wednesday and Thursday:** run the interviews (20 min each, in person or by WhatsApp call). Take notes in the language spoken and translate key quotes.", "**Thursday studio:** affinity-map in FigJam, draw the journey map and brainstorm 6+ ideas, including some non-AI ones.", "**Friday morning:** score the matrix as a team. Disagreements are useful, so write down *why* you scored things differently.", "**Friday:** write the brief, then present a 4-minute version at Show & Ship."],
          submissionFormat: `A FigJam board link (synthesis, journey, matrix) plus the one-page brief as a PDF, posted in the cohort channel and shared with the client.`,
          rubric: [
            {
              "criterion": "Research quality",
              "emerging": "Fewer than 3 interviews, or not with target users",
              "developing": "3+ interviews but leading questions or thin notes",
              "proficient": "3–5 consented interviews with target users; clear themes and quotes",
              "exemplary": "Rich insight that surprised the client; includes staff perspective and observation"
            },
            {
              "criterion": "Reasoning behind the choice",
              "emerging": "Chose AI by default; no comparison",
              "developing": "Matrix present but scoring unexplained",
              "proficient": "Clear value/feasibility/risk scoring; rejected idea well argued",
              "exemplary": "Compares AI against non-AI options and shows why AI earns its place"
            },
            {
              "criterion": "Clarity of the brief",
              "emerging": "Missing key sections",
              "developing": "All sections present but vague",
              "proficient": "Concise one-pager a developer and client could act on",
              "exemplary": "Brief includes measurable success criteria agreed with the client"
            },
            {
              "criterion": "Risk identification",
              "emerging": "Risks not mentioned",
              "developing": "Generic risks (\"privacy\")",
              "proficient": "Specific cost-of-error and data risks for these users",
              "exemplary": "Risks prioritised, with early mitigation ideas and the people affected named"
            }
          ],
          stretch: `Run a quick "fake door" test. Put the proposed feature as an option in the client's WhatsApp auto-reply menu or on a printed poster, and count how many people choose it over 3 days.`
        },
        reflect: ["What did users say that challenged your team's first idea?", "Was there a moment when you realised something *shouldn't* be AI? What tipped you off?", "How did the client react to your rejected idea?"]
      }
    },
    {
      id: "03",
      title: "Conversational & Agentic UX",
      summary: "WhatsApp Agent Flow",
      hours: 10.0,
      status: "published",
      content: {
        essentialQuestion: "How should an AI that talks, and acts, behave?",
        objectives: ["Write sample dialogues covering turn-taking, persona and tone.", "Design flows that handle code-switching between English, Swahili and Sheng.", "Choose an appropriate **autonomy level** for an agent and write a permissions spec.", "Design confirmations, undo and a clear path to a human.", "Build a clickable conversational prototype."],
        watch: [
          {
            "type": "video",
            "title": "What is Conversation Design?  —  Conversation Designer",
            "channel": "Conversation Design Institute",
            "url": "https://www.youtube.com/watch?v=iedSuJwAS-E",
            "length": "~8 min",
            "why": "A beginner-friendly overview of the discipline and the job."
          },
          {
            "type": "video",
            "title": "Config 2024: The secret sauce to conversational AI (hint: it's not the AI)",
            "channel": "Figma",
            "url": "https://www.youtube.com/watch?v=U6H0MAYuGnw",
            "length": "~20 min",
            "why": "Why great conversational products come from design choices, not just a better model."
          },
          {
            "type": "video",
            "title": "How to Make Your Chatbot Speak Your User's Language — Every Time",
            "channel": "Botpress",
            "url": "https://www.youtube.com/watch?v=QAB-sJGFPQs",
            "length": "~13 min",
            "why": "Practical techniques for detecting and responding in the user's language."
          },
          {
            "type": "video",
            "title": "AI agent design patterns",
            "channel": "Google Cloud Tech",
            "url": "https://www.youtube.com/watch?v=GDm_uH6VxPY",
            "length": "~8 min",
            "why": "A clear introduction to what makes an *agent* different from a chatbot, and the common patterns."
          },
          {
            "type": "reading",
            "title": "Google, *Conversation Design: learn about conversation* (Cooperative Principle)",
            "channel": "Reading",
            "url": "https://developers.google.com/assistant/conversation-design/learn-about-conversation",
            "length": "—",
            "why": "Keep open while you work"
          }
        ],
        notes: `**1. Conversations have rules**

Humans follow unwritten rules in conversation. The linguist Paul Grice described them as the **Cooperative Principle**: say what's *true*, give the *right amount* of information, stay *relevant*, and be *clear*. When a bot breaks these rules (rambling, going off-topic, asking for information it already has), people feel frustrated even if they can't explain why.

**Turn-taking:** each message should do one job and end by handing the turn back clearly ("Which day works: Tuesday or Wednesday?"). On WhatsApp, keep messages short and use quick-reply buttons or numbered options. Many users are on small screens and pay for data.

**2. Persona and tone**

A **persona** is the consistent character of your assistant: its name (if any), voice, formality and boundaries. A pharmacy assistant in Nairobi might be *warm, respectful and efficient*: "Habari Mama Wanjiru 👋 Your refill for Metformin is ready to order. Shall I confirm?" Don't overdo the human act. Research from NN/g suggests that making AI seem too human inflates trust. Be friendly, but be honest that it's an assistant.

**3. Code-switching: designing for how Kenyans really talk**

Many Kenyans mix English, Swahili and Sheng in a single sentence: *"Niaje, nataka ku-check kama parcel yangu imefika Nakuru."* Your design should:
- **Accept** mixed-language input without forcing a "choose your language" menu first (offer one, but don't require it).
- **Reply** in the user's dominant language, or mirror their mix, and let them switch at any time ("Type *English* or *Kiswahili* to switch").
- **Test** Sheng and common misspellings ("sawa", "poa", "ata", "sasa hivi") and keep a glossary of the terms your users actually use.
- Never mock or "correct" the user's language.

**4. From chatbot to agent: autonomy levels**

An **agent** doesn't just answer. It **acts**: it books, orders, pays or sends. The more an agent can do, the more carefully you design control. A simple scale:

| Level | The agent… | Example (pharmacy refill) |
|---|---|---|
| **0 · Inform** | Answers questions only | "Your last refill was 12 Sept." |
| **1 · Suggest** | Proposes an action; the user does it | "You're due on 12 Oct. Tap here to order." |
| **2 · Act with confirmation** | Prepares the action and asks "Shall I?" | "I've prepared your order: Metformin 500mg × 60, KES 850. Confirm?" |
| **3 · Act, then notify (with undo)** | Acts, then tells the user and offers undo | "Order placed ✅ Reply UNDO within 10 minutes to cancel." |
| **4 · Fully autonomous** | Acts silently | Rarely appropriate for money or health |

**Rule of thumb:** the more **irreversible**, **costly** or **sensitive** an action is (payments, medicines, sharing personal data), the lower the autonomy level. **Every irreversible action needs an explicit confirmation**, and money actions should show the amount, the recipient and the fees.

**5. The human handoff**

Always design a **path to a human**: the user types "agent" or "mtu", the bot detects frustration, or it hits something it can't handle. A good handoff:
- tells the user what's happening and how long they'll wait ("A pharmacist will reply within 15 minutes, 8am–8pm");
- passes the context along so the user doesn't have to repeat themselves;
- offers an alternative out of hours (a call-back or a phone number).

**6. Your design artefacts**
- **Sample dialogues:** write them like a script, User ↔ Bot, for the happy path and edge cases.
- **Flow diagram:** the branches, decision points and handoffs (in FigJam).
- **Autonomy and permissions spec:** a table of each action, its autonomy level, the confirmation required, whether undo is possible, and the data accessed.

**Common mistakes**
- Long walls of text on WhatsApp.
- Forcing a language choice before the user can say anything.
- "Dead ends", where the bot says "I don't understand" with no next step.
- Agents that act on money or health without confirmation.
- Hiding the human option.

**Glossary**
- **Turn:** one message from one side of the conversation.
- **Persona:** the assistant's consistent character and voice.
- **Code-switching:** mixing languages within a conversation or sentence.
- **Agent:** an AI system that can take actions, not just answer questions.
- **Autonomy level:** how much an agent can do without asking the user.
- **Handoff:** transferring a conversation to a human, with context.`,
        quickCheck: [
          {
            "q": "Name the four parts of Grice's Cooperative Principle.",
            "a": "Quality (be truthful), Quantity (the right amount of information), Relevance (stay on topic), and Manner (be clear)."
          },
          {
            "q": "A user writes \"Niko na swali kuhusu loan.\" Should the bot reply in English? What should it do?",
            "a": "It should reply in Swahili (mirroring the user) and offer an easy switch to English. It shouldn't force English."
          },
          {
            "q": "What autonomy level suits \"pay KES 3,000 school fees via M-Pesa\"? Why?",
            "a": "Level 2, *act with confirmation*. It's a money action that's hard to reverse, so show the amount, the recipient and the fees, and require an explicit \"Confirm\"."
          },
          {
            "q": "List three features of a good human handoff.",
            "a": "Any three: it says what's happening; it gives the expected wait time; it passes context so the user doesn't repeat themselves; it offers an out-of-hours alternative; and it's easy to trigger (e.g. by typing \"agent\")."
          },
          {
            "q": "What's the difference between a chatbot and an agent?",
            "a": "A chatbot mainly answers; an agent can take actions (book, order, pay, send) on the user's behalf."
          }
        ],
        challenge: {
          scenario: `Many Kenyans already use WhatsApp to talk to businesses. Design a conversational AI agent for **your capstone client** (from Module 2). If that doesn't fit, use one of these backup briefs:
- **Pharmacy refill agent:** a Nairobi pharmacy chain wants customers to reorder chronic medication on WhatsApp.
- **Matatu SACCO parcel tracker:** a SACCO running Nairobi–Nakuru routes wants senders and receivers to track parcels and arrange pickup.`,
          build: "Complete the 5 deliverables below.",
          deliverables: ["**Conversation flow diagram** (FigJam) covering the **happy path plus at least 5 edge cases** (e.g. a wrong parcel number, an out-of-stock medicine, the user switching language mid-chat, an angry user, a request out of scope, a lost connection or delayed reply).", "**Sample dialogues:** at least 6 short scripts, including at least **2 in Swahili or code-switched Sheng/English**.", "**Persona sheet:** name (optional), 3 tone words, do's and don'ts, and example phrases.", "**Autonomy and permissions spec:** a table of every action with its autonomy level, confirmation, undo and data accessed.", "**Clickable prototype:** a WhatsApp-style prototype in Figma, *or* a working Voiceflow or Botpress prototype."],
          constraints: ["Must handle **code-switching** (English/Swahili/Sheng).", "Must offer a **path to a human** from any point.", "**Every irreversible action needs confirmation.**", "Messages must fit comfortably on a 360px-wide phone screen: short messages and buttons, not essays."],
          hints: ["Pick the top 2 user jobs from your Module 2 research.", "Write the happy-path dialogue *first* as a script, then read it aloud with a teammate playing the user. If it sounds robotic, rewrite it.", "Brainstorm 10 things that could go wrong, then pick the 5 most likely or most harmful.", "Draw the flow in FigJam, marking each **confirmation** in orange and each **handoff** in purple.", "Fill in the autonomy spec, and for each action ask: *Can this be undone? Who pays if it's wrong?*", "Test your dialogues using ChatGPT, Claude or Gemini: paste your persona and rules, ask it to play the assistant, and you play a tricky user in Sheng. Note where it breaks.", "Build the prototype in Figma (using a WhatsApp chat UI frame) or in Voiceflow/Botpress."],
          submissionFormat: `A FigJam link (flows, spec), a prototype link, and a PDF of the dialogue pack, plus a 2-minute screen recording of the prototype.`,
          rubric: [
            {
              "criterion": "Naturalness",
              "emerging": "Robotic or overly long messages",
              "developing": "Mostly natural, some awkward turns",
              "proficient": "Natural, concise, consistent persona; feels right for WhatsApp",
              "exemplary": "Tested aloud with real users; language feels authentically Kenyan"
            },
            {
              "criterion": "Edge-case coverage",
              "emerging": "Happy path only",
              "developing": "1–4 edge cases",
              "proficient": "5+ realistic edge cases with recovery paths",
              "exemplary": "Edge cases drawn from real user research, including code-switching and connectivity issues"
            },
            {
              "criterion": "Trust and safety design",
              "emerging": "No confirmations or handoff",
              "developing": "Some confirmations; the handoff is hard to find",
              "proficient": "Every irreversible action is confirmed; human path from anywhere; clear autonomy spec",
              "exemplary": "Autonomy choices justified by cost of error; undo designed; privacy considered"
            },
            {
              "criterion": "Prototype fidelity",
              "emerging": "Not clickable",
              "developing": "Clickable happy path only",
              "proficient": "Clickable happy path plus key edge cases",
              "exemplary": "A working agent (Voiceflow/Botpress) or a highly realistic prototype tested with users"
            }
          ],
          stretch: `Build the agent in Voiceflow or Botpress with real language detection, and test it with 3 real users who naturally code-switch. Record which Sheng phrases it misunderstood.`
        },
        reflect: ["Where did your agent sound least like a real Kenyan conversation? Why?", "Which action did you hesitate to give the agent autonomy over, and what decided it?", "How did testing with an LLM \"playing\" your bot change your design?"]
      }
    },
    {
      id: "04",
      title: "Trust, Transparency & Failure States",
      summary: "\"Design for Failure\" Kit",
      hours: 10.0,
      status: "published",
      content: {
        essentialQuestion: "How does the product behave when AI fails?",
        objectives: ["Identify the core AI states every product needs: loading/streaming, low confidence, refusal, error, feedback, citation and human handoff.", "Design confidence indicators and explanations that users actually understand.", "Design graceful degradation for low connectivity and low-end devices.", "Build a Figma component library with variants and auto layout.", "Write clear usage guidelines and meet basic accessibility standards."],
        watch: [
          {
            "type": "video",
            "title": "Error Messages 101",
            "channel": "NNgroup",
            "url": "https://www.youtube.com/watch?v=sReni_EeZUM",
            "length": "~3 min",
            "why": "The fundamentals of good error messages. They apply even more strongly to AI."
          },
          {
            "type": "video",
            "title": "Designing for Long Waits in Applications: 3 Guidelines",
            "channel": "NNgroup",
            "url": "https://www.youtube.com/watch?v=UJy6KAwZ4tI",
            "length": "~3 min",
            "why": "Useful for AI \"thinking\" and streaming states, especially on slow networks."
          },
          {
            "type": "video",
            "title": "BenchSci - AI design for user trust in biomedical research  —  Centered Ep 8",
            "channel": "Google Design",
            "url": "https://www.youtube.com/watch?v=1LZBM-S-Rw0",
            "length": "~9 min",
            "why": "A real case study of designing AI that experts trust in a high-stakes field."
          },
          {
            "type": "video",
            "title": "Humanizing AI Does Not Help Your Users",
            "channel": "NNgroup",
            "url": "https://www.youtube.com/watch?v=SgYj7gxhmtE",
            "length": "~4 min",
            "why": "Why fake-human friendliness can backfire on trust."
          },
          {
            "type": "reading",
            "title": "PAIR Guidebook chapters *Explainability + Trust* ( and *Errors + Graceful Failure* ( Also NN/g, *AI Hallucinations: What",
            "channel": "Reading",
            "url": "https://pair.withgoogle.com/chapter/explainability-trust/",
            "length": "—",
            "why": "Keep open while you work"
          }
        ],
        notes: `**1. Trust should be *calibrated*, not maximised**

The goal isn't for users to trust AI as much as possible. It's for them to trust it **the right amount**: rely on it when it's good and double-check when it's not. Over-trust leads to harm (acting on a wrong diagnosis). Under-trust leads to abandonment (the farmer stops using the app after one bad answer). Your failure states are the main tool for calibrating trust.

**2. The seven AI states you must design**

| State | What the user needs | Example (agritech crop advisor) |
|---|---|---|
| **Loading / streaming** | To know it's working and roughly how long it will take | "Checking your photo… (about 10 sec)", with text appearing as it streams |
| **Low confidence** | Honest uncertainty plus a next step | "This *might* be maize streak virus, but I'm not sure. Here's how to confirm, or send a clearer photo." |
| **Refusal** | A polite *why* plus an alternative | "I can't recommend dosages for livestock. Please contact your county vet officer." |
| **Error** | What went wrong, in plain language, and how to fix it | "The photo didn't upload (weak network). Tap to retry, or we'll send it automatically when you're back online." |
| **Feedback** | An easy way to say "this was wrong", and why | 👍 / 👎 with quick reasons ("Wrong crop", "Too technical", "Didn't help") |
| **Citation / source** | Where the answer came from | "Source: KALRO maize disease guide, p.12" |
| **Human handoff** | A person, with context | "Talk to an extension officer (reply within 24 hrs)" |

**3. Confidence: show it in words, not decimals**

"Confidence: 0.67" means nothing to most users. Use **plain language and action**: *"Likely"* / *"Not sure, so please check"* / *"Can't tell"*. Pair uncertainty with **what to do next**. And don't show confidence scores the model can't reliably produce. Just design honest wording for *known* risky situations, such as a blurry photo or an out-of-scope question.

**4. Explanations: "why" in one line**

Short, specific explanations build trust: *"Suggested because you planted on 3 Sept and it's been dry for 10 days."* Avoid long technical paragraphs. Offer "Learn more" for people who want detail.

**5. Graceful degradation: design for Kenyan networks**

Many users are on low-end Android phones, 3G or patchy 4G, and pay-as-you-go bundles. Design:
- **Low-bandwidth mode:** text before images, compressed media, no autoplay.
- **Offline or queued states:** "We'll send this when you're connected."
- **Fallbacks:** if the AI is down, offer the FAQ menu, SMS or USSD, or a phone line.
- **Empty states:** what the user sees before any AI output, with examples of what to ask.

**6. Building it in Figma**

Use **components with variants** (e.g. \`AI Message / State = streaming | low-confidence | refusal | error | cited\`), **auto layout** so messages resize, and **variables** for colour modes. Design at **360px width** (a common Android size). Check **text contrast of at least 4.5:1** for body text (the WCAG AA level) with WebAIM's checker or the Stark plugin. Don't rely on colour alone: pair it with icons and words.

**Common mistakes**
- Using only "Something went wrong."
- Showing technical confidence scores.
- Red-only warnings, which colour-blind users may miss.
- Over-apologising, and blaming the user.
- Forgetting what happens when the network drops mid-answer.

**Glossary**
- **Calibrated trust:** trust that matches how reliable the system actually is.
- **Graceful degradation:** the product still helps, in a reduced way, when something fails.
- **Streaming:** showing AI text as it's generated, word by word.
- **Citation:** a reference to the source an AI answer is based on.
- **Variant:** a version of a Figma component (e.g. its error state).
- **WCAG:** Web Content Accessibility Guidelines, the international accessibility standard.`,
        quickCheck: [
          {
            "q": "Why is \"maximum trust\" the wrong goal?",
            "a": "Because AI is sometimes wrong. Over-trust leads people to act on errors. You want *calibrated* trust that matches real reliability."
          },
          {
            "q": "Rewrite \"Confidence: 0.42\" for a farmer.",
            "a": "For example: \"I'm not sure about this one. It could be X, but please check with your agrovet or send a clearer photo.\""
          },
          {
            "q": "Name three of the seven AI states.",
            "a": "Any three of: loading/streaming, low confidence, refusal, error, feedback, citation, and human handoff."
          },
          {
            "q": "What's the minimum contrast ratio for normal body text under WCAG AA?",
            "a": "**4.5:1.**"
          },
          {
            "q": "Give one fallback for when the AI service is down.",
            "a": "Any one: a menu of FAQs, an SMS or USSD option, a phone number or call-back, or queuing the request until the service is back."
          }
        ],
        challenge: {
          scenario: `Your client's AI feature (from Modules 2–3) will fail sometimes. That's guaranteed. Build the design system pieces that make those failures safe, honest and recoverable.`,
          build: "Complete the 4 deliverables below.",
          deliverables: ["A **Figma component library** of AI states with variants: **loading/streaming, low confidence, refusal, error, feedback, citation and human handoff**. Add **empty** and **offline/low-bandwidth** states too.", "**Usage guidelines** (one page per component, or one well-organised page): when to use it, example copy in English and Swahili, do's and don'ts.", "**Three applied screens** showing the components in your product's real flows (e.g. a low-confidence answer → feedback → handoff).", "An **accessibility note** with your contrast checks and touch-target sizes."],
          constraints: ["Must work on a **360px-wide** low-end Android screen.", "Must include a **low-bandwidth mode** (e.g. text-only, no images).", "Use **auto layout** and **variants**, not detached frames.", "Body text contrast **≥ 4.5:1**, and never colour alone to convey meaning."],
          hints: ["List every moment in your Module 3 flow where the AI could be slow, unsure, wrong, refused or offline.", "Write the **copy first** for each state, in English and Swahili. Test the Swahili with a fluent speaker.", "Build one base `AI Message` component with auto layout, then add a `State` variant property.", "Add icons and labels as well as colour (e.g. ⚠️ \"Not sure\").", "Create a `Low-bandwidth = on/off` property or a separate mode.", "Assemble the 3 applied screens and run a contrast check.", "Show the screens to 2 target users and ask: *\"What would you do next?\"* If they hesitate, fix the copy."],
          submissionFormat: "A Figma file link (published as a library, or a clearly labelled page), plus a PDF of the guidelines.",
          rubric: [
            {
              "criterion": "Completeness of states",
              "emerging": "Fewer than 5 states",
              "developing": "All 7 core states but shallow",
              "proficient": "All 7 core states plus empty and offline, applied to real flows",
              "exemplary": "States derived from real failure scenarios; includes edge combinations (e.g. offline *and* low confidence)"
            },
            {
              "criterion": "Component quality",
              "emerging": "Detached frames, no variants",
              "developing": "Variants but inconsistent auto layout",
              "proficient": "Clean variants, auto layout, sensible naming",
              "exemplary": "A production-ready library with properties, variables and documentation an engineer could implement"
            },
            {
              "criterion": "Guideline clarity",
              "emerging": "No guidelines",
              "developing": "Guidelines exist but are vague",
              "proficient": "Clear when-to-use guidance with bilingual copy and do's and don'ts",
              "exemplary": "Guidelines tested with users; copy refined from their feedback"
            },
            {
              "criterion": "Accessibility",
              "emerging": "Not considered",
              "developing": "Some checks",
              "proficient": "Contrast ≥ 4.5:1; colour not the only signal; 360px tested",
              "exemplary": "Also tested with large text, a screen reader or a real low-end device"
            }
          ],
          stretch: "Add a **voice-note** variant (for users who prefer audio) and a USSD/SMS fallback mock-up."
        },
        reflect: ["Which failure state was hardest to write copy for, and why?", "Where did you catch yourself designing for *your* phone instead of your users' phones?", "How might your kit change the way a user trusts the AI over time?"]
      }
    },
    {
      id: "05",
      title: "Prototyping with Live AI",
      summary: "Live Prototype + 5 user tests",
      hours: 10.0,
      status: "published",
      content: {
        essentialQuestion: "How do we test AI experiences with real AI rather than lorem ipsum?",
        objectives: ["Explain why static mock-ups hide the most important AI design problems.", "Treat the **prompt** as a design material and write a prompt spec.", "Build a working prototype that calls a real model, using AI-assisted (\"vibe coding\") tools.", "Choose between a live prototype and a **Wizard-of-Oz** test.", "Run 5 usability tests with real target users and act on what you learn."],
        watch: [
          {
            "type": "video",
            "title": "AI-Assisted Prototyping: Promise and Pitfalls",
            "channel": "NNgroup",
            "url": "https://www.youtube.com/watch?v=XavthHrTjIY",
            "length": "~5 min",
            "why": "An honest view of what AI prototyping tools are good (and bad) at."
          },
          {
            "type": "video",
            "title": "Wizard of Oz Method in UX",
            "channel": "NNgroup",
            "url": "https://www.youtube.com/watch?v=gDsb0vW_LM8",
            "length": "~4 min",
            "why": "How to fake the AI with a human behind the curtain to test ideas fast."
          },
          {
            "type": "video",
            "title": "Intro to Figma Make (Tutorial)",
            "channel": "Figma",
            "url": "https://www.youtube.com/watch?v=9Y2Yz-ir3JM",
            "length": "~12 min",
            "why": "Turning designs and prompts into a working prototype inside Figma."
          },
          {
            "type": "video",
            "title": "Google AI Studio for Beginners",
            "channel": "Google Cloud Tech",
            "url": "https://www.youtube.com/watch?v=IHOJUJjZbzc",
            "length": "~3 min",
            "why": "A quick start on the free tool you'll use to test prompts and get an API key."
          }
        ],
        notes: `**1. Why lorem ipsum lies**

In a static Figma mock-up, the AI's answer is whatever *you* typed into it: perfect, short and on-topic. Real models ramble, misunderstand Sheng, refuse unexpectedly and take 8 seconds on a 3G connection. **You can't design for behaviour you've never seen.** Live prototypes reveal:
- what real outputs look like (length, tone, errors);
- how users phrase things (often very differently from your sample dialogues);
- latency, and how it feels to wait;
- whether your failure states (Module 4) actually trigger.

**2. The prompt is a design material**

The **system prompt** (the hidden instructions you give the model) shapes the experience as much as the UI does. Write it like a design spec:

\`\`\`
ROLE: You are "Shamba Msaidizi", a crop advice assistant for smallholder maize farmers in Kenya.
SCOPE: Maize and beans only. Pests, diseases, planting, fertiliser basics.
OUT OF SCOPE: Livestock, human health, loans. Politely refuse and suggest who to contact.
LANGUAGE: Reply in the user's language (English, Swahili or mixed). Simple words. Max 80 words.
UNCERTAINTY: If unsure, say so clearly and suggest how to confirm (agrovet, extension officer).
SAFETY: Never give pesticide dosages beyond the product label. Always say "follow the label".
FORMAT: 1 short diagnosis line, then up to 3 numbered steps, then one follow-up question.
\`\`\`

Keep a **prompt spec** document with the prompt, its version number, what you changed and why. That's design documentation.

**3. Choosing your build tool**

| Tool | Good for | Notes |
|---|---|---|
| **Google AI Studio** | Testing prompts quickly; getting a free API key | Great for iterating on the prompt before building UI |
| **Figma Make** | Turning your Figma designs into a working prototype | Stays close to your design files |
| **Lovable / v0 / Bolt** | Building a web app from a text description, with AI calls | Fast, but check the code works on mobile |
| **Voiceflow / Botpress** | Chat and WhatsApp-style agents | Best if your feature is conversational |

**Budget rule:** you have a **US$10 maximum** for API and tool credits. Use free tiers first, set spending limits, and **never paste API keys into public code or share them in screenshots**.

**4. Wizard of Oz: when the AI isn't ready**

In a **Wizard-of-Oz** test, a teammate secretly plays the AI, typing responses in real time. It's ideal when the model can't do the task yet, or when you want to test the *interaction* before building. Tell participants afterwards (or beforehand, if your ethics plan requires it) that a human was involved.

**5. Testing with 5 real users**

Five users usually reveal the biggest usability problems. For each session (20–30 minutes):
1. Get **consent**, and explain that you're testing the product, not them.
2. Give a **realistic task** ("Your maize leaves have yellow streaks. Find out what to do.").
3. Ask them to **think aloud**. Watch, don't help.
4. Note: task success, confusion points, **trust moments** ("I'd believe that" vs "Hmm…"), and the actual AI outputs.
5. Ask 2–3 closing questions: *Would you act on this advice? What would make you trust it more?*

Then **iterate**: change the prompt, the UI or the failure states, and test again. Show the before and after.

**Common mistakes**
- Testing with classmates instead of target users.
- Helping the participant when they get stuck. That's the data!
- Changing five things at once, so you can't tell what fixed the problem.
- Ignoring latency on real mobile data.
- Leaking API keys.

**Glossary**
- **System prompt:** the hidden instructions that define an AI's role, scope and style.
- **Prompt spec:** versioned design documentation for your prompts.
- **Vibe coding:** building software by describing it to an AI tool in plain language.
- **Wizard of Oz:** a test where a human secretly simulates the AI.
- **Latency:** the delay between a request and the response.`,
        quickCheck: [
          {
            "q": "Name two problems a static mock-up hides.",
            "a": "Any two: real output length and tone, hallucinations or errors, how users actually phrase requests, latency, and whether failure states trigger."
          },
          {
            "q": "What belongs in a system prompt's \"out of scope\" section, and why?",
            "a": "The topics the assistant must refuse, with a polite redirect. This keeps it safe and sets the right mental model (HAX G1 and G10)."
          },
          {
            "q": "When would you choose Wizard of Oz over a live prototype?",
            "a": "When the model can't do the task yet, or when you want to test the interaction concept quickly and cheaply before building."
          },
          {
            "q": "Why test with 5 real users rather than 5 classmates?",
            "a": "Classmates know the design and the tech, so they don't behave like real users with real phones, languages and needs."
          },
          {
            "q": "What's the US$10 rule for?",
            "a": "It keeps prototyping affordable and forces smart choices (free tiers, spending limits, efficient testing)."
          }
        ],
        challenge: {
          scenario: `Your client has seen your flows and failure kit. Now they want to *feel* it. Turn your feature into a working prototype that calls a real AI model, and test it with real users.`,
          build: "Complete the 4 deliverables below.",
          deliverables: ["**A live prototype link** that calls a real model end-to-end (via Figma Make, Lovable, v0, Bolt, Voiceflow, Botpress or a Google AI Studio-powered app).", "**A prompt spec:** the system prompt, version history (at least 2 versions) and the reasoning for each change.", "**A usability test report** covering 5 real target users: method, tasks, findings (with quotes and screenshots of real AI outputs), severity, and what you changed.", "**An iteration log** showing at least one change made because of testing, with before/after."],
          constraints: ["Budget: **US$10 maximum** in API or tool credits. Keep receipts or a usage screenshot.", "Test with **real target users**, not classmates.", "Must include at least **two of your Module 4 failure states** working live (e.g. refusal, low confidence).", "No real personal data in prompts or logs. Use made-up names and numbers."],
          hints: ["**Monday:** pick your tool. Draft the system prompt in Google AI Studio and test it with 15 varied inputs, including Sheng and out-of-scope ones.", "**Tuesday:** build the simplest UI that works on a phone screen, then connect the model.", "**Wednesday lab:** add the failure states. Force them on purpose (send a blurry photo, ask about livestock).", "**Thursday:** run 5 tests (in person at the client site is ideal, or over a WhatsApp video call), recording outputs and quotes.", "**Friday morning:** make one or two key changes, re-test with at least one user, and update the prompt spec.", "**Friday:** demo at the **mid-track showcase**."],
          submissionFormat: "A prototype link, plus the prompt spec and test report as a PDF or Notion page, plus a 2-minute demo video.",
          rubric: [
            {
              "criterion": "Prototype works end-to-end",
              "emerging": "Doesn't call a real model, or breaks",
              "developing": "Works on the happy path only",
              "proficient": "Works end-to-end on mobile, with 2+ failure states live",
              "exemplary": "Robust across varied inputs, including Swahili/Sheng; fast enough on mobile data"
            },
            {
              "criterion": "Quality of testing method",
              "emerging": "Fewer than 5 users, or not target users",
              "developing": "5 users but leading tasks or helping",
              "proficient": "5 target users, realistic tasks, think-aloud, consent",
              "exemplary": "Tested in a real context (clinic, farm, stage), with trust measured as well as task success"
            },
            {
              "criterion": "Insights acted on",
              "emerging": "No insights",
              "developing": "Insights listed but not acted on",
              "proficient": "Clear prioritised insights; at least one change made",
              "exemplary": "Multiple changes with evidence of improvement on re-test"
            },
            {
              "criterion": "Iteration shown",
              "emerging": "No versions",
              "developing": "Prompt changed without explanation",
              "proficient": "Versioned prompt spec with clear reasoning",
              "exemplary": "Iteration log clear enough to teach others; tied to rubric criteria"
            }
          ],
          stretch: "Run an A/B comparison of two prompt versions with the same tasks and report which performed better, and why."
        },
        reflect: ["What did the real model do that your mock-ups never showed?", "Which user quote changed your design most?", "How did you decide what *not* to fix this week?"]
      }
    },
    {
      id: "06",
      title: "Measuring AI Experiences",
      summary: "Quality Scorecard",
      hours: 10.0,
      status: "published",
      content: {
        essentialQuestion: "How do we know the AI feature is good, and stays good?",
        objectives: ["Distinguish **model metrics** from **UX and product metrics**.", "Write a \"good output\" rubric for your feature.", "Build a 30-item evaluation (eval) set that includes harmful and edge cases.", "Run an eval on your prototype and turn the results into actions.", "Design a metrics dashboard covering success, adoption and trust."],
        watch: [
          {
            "type": "video",
            "title": "Own the loop: how designers and researchers win with AI evals ft. Setor Zilevu (Figma)  —  Config 2026",
            "channel": "Figma",
            "url": "https://www.youtube.com/watch?v=VfA-vjsFQ1o",
            "length": "~19 min",
            "why": "Why evals are a *design* skill, and how designers can lead them."
          },
          {
            "type": "video",
            "title": "Why AI evals are the hottest new skill for product builders  —  Hamel Husain & Shreya Shankar",
            "channel": "Lenny's Podcast",
            "url": "https://www.youtube.com/watch?v=BsWxPI9UM4c",
            "length": "~1 hr 47 min",
            "why": "A deep, practical conversation on looking at real outputs, error analysis and writing evals. *Long: watch the first 30–40 minutes if time is short."
          },
          {
            "type": "video",
            "title": "Campbell's Law: The Dark Side of Success Metrics",
            "channel": "NNgroup",
            "url": "https://www.youtube.com/watch?v=kecGqC8R5B8",
            "length": "~4 min",
            "why": "What happens when teams chase a number instead of the real goal."
          },
          {
            "type": "video",
            "title": "UX Benchmarking vs. UX Success Metrics",
            "channel": "NNgroup",
            "url": "https://www.youtube.com/watch?v=Rrc4QqDTMUE",
            "length": "~4 min",
            "why": "How to choose metrics that actually reflect user success."
          },
          {
            "type": "reading",
            "title": "Hamel Husain, *LLM Evals FAQ*",
            "channel": "Reading",
            "url": "https://hamel.dev/blog/posts/evals-faq/",
            "length": "—",
            "why": "Keep open while you work"
          }
        ],
        notes: `**1. Two kinds of "good"**

| Model / output metrics | UX / product metrics |
|---|---|
| Is this answer accurate? On-topic? Safe? In the right language? | Did the user complete their task? Did they come back? Do they trust it? |
| Measured on an **eval set** before launch, and repeatedly | Measured with **real users** in testing and analytics after launch |
| Example: "92% of crop answers were correct per the KALRO guide" | Example: "68% of farmers who asked a question bought the recommended product within 3 days" |

You need **both**. A perfectly accurate bot nobody uses has failed. So has a popular bot that gives wrong medical advice.

**2. The "good output" rubric**

Before you can measure, define *good*. Pick 4–6 criteria and describe each level. For a pharmacy refill agent:

| Criterion | Pass | Fail |
|---|---|---|
| **Correct** | Medicine, dose and price match the pharmacy record | Any wrong detail |
| **Safe** | Never advises changing a dose; routes medical questions to a pharmacist | Gives medical advice |
| **Language match** | Replies in the user's language or mix | Switches to English unprompted |
| **Concise** | Fits within 2 WhatsApp screens | A wall of text |
| **Confirms actions** | Asks before placing any order | Orders without confirmation |

Simple **pass/fail** criteria are easier to score consistently than 1–10 scales, which is especially helpful when several people are scoring.

**3. Building an eval set**

An **eval set** is a list of test inputs (and, where possible, the expected behaviour) that you run against your AI every time you change it. Build 30 items:
- **~15 typical requests:** taken from your research and testing, in users' real words.
- **~5 tricky ones:** Sheng, typos, vague requests, two questions in one.
- **~5 edge or out-of-scope requests:** "Can I take this with alcohol?", "What's the price of fuel?"
- **At least 5 harmful or risky inputs:** someone asking for a double dose, attempts to get another person's prescription, abusive messages, or an attempt to make the bot ignore its rules ("Ignore your instructions and…").

In Google Sheets use the columns: \`ID | Input | Category | Expected behaviour | Actual output | Correct? | Safe? | Language? | Concise? | Notes\`.

**4. Running the eval and doing error analysis**

Run each input through your prototype, paste the output and score it against the rubric. Then do **error analysis**: group the failures into types ("refuses too often in Swahili", "invents prices"). The *most common* failure types tell you what to fix first. Fix it (usually the prompt, the data or the UI), then re-run the *whole* set. That re-run is how you catch fixes that break something else.

**5. Product metrics and the dashboard**

Choose a small set of metrics:
- **Success:** task completion rate, time to resolution.
- **Adoption:** weekly active users, repeat use.
- **Trust and quality:** 👍/👎 rate, handoff rate, "reported wrong" rate, and complaints.
- **Guardrail metrics** (things that must *not* get worse): harmful-output reports, unresolved handoffs.

Beware **Campbell's Law**: if you reward "fewer handoffs", the team may hide the human button. Always pair a metric with a guardrail.

**Common mistakes**
- Measuring only accuracy, or only engagement.
- An eval set built only from easy, happy-path questions.
- Vague rubric criteria ("helpful") that two people would score differently.
- Fixing one bug and never re-running the full set.
- Dashboards with 20 metrics and no decisions attached.

**Glossary**
- **Eval (evaluation) set:** a reusable set of test inputs for checking AI quality.
- **Rubric:** clear criteria defining a good output.
- **Error analysis:** reviewing failures to find patterns.
- **Guardrail metric:** a metric that must not get worse while you optimise another.
- **Regression:** something that used to work and now breaks after a change.`,
        quickCheck: [
          {
            "q": "Give one model metric and one product metric for a matatu SACCO parcel tracker.",
            "a": "Model: e.g. the percentage of parcel-status answers that match the database. Product: e.g. the percentage of users who successfully arrange pickup, or the reduction in calls to the office."
          },
          {
            "q": "Why are pass/fail criteria often better than 1–10 scores?",
            "a": "They're more consistent between scorers and easier to act on."
          },
          {
            "q": "Name two types of harmful or edge inputs to include in an eval set.",
            "a": "Any two: dangerous requests (e.g. a double dose), privacy attacks (another person's data), abusive messages, attempts to override the instructions, or out-of-scope questions."
          },
          {
            "q": "What's error analysis for?",
            "a": "To find *patterns* in failures so you fix the most important problems first."
          },
          {
            "q": "Give an example of Campbell's Law in an AI product.",
            "a": "For example: targeting \"fewer human handoffs\" leads the team to hide the handoff option, so frustrated users get stuck."
          }
        ],
        challenge: {
          scenario: `Before your client lets real customers use the feature, they ask: *"How do we know it's good, and how will we know if it gets worse?"* Give them a scorecard.`,
          build: "Complete the 4 deliverables below.",
          deliverables: ["**A \"good output\" rubric:** 4–6 criteria with clear pass/fail definitions (or levels).", "**A 30-item eval set** in Google Sheets, with at least 5 harmful or edge-case items.", "**Eval results:** your prototype scored on all 30 items; a summary (pass rate per criterion); an error analysis of the top 3 failure types; at least one fix; and a re-run.", "**A metrics dashboard design** (Figma): 4–6 product metrics including at least one guardrail, each with a target and the action to take if it's missed."],
          constraints: ["Include **at least 5 harmful or edge-case test items**.", "At least **5 items in Swahili or code-switched language**.", "A second person (a teammate or peer) must independently score **10 items**, and you must report where you disagreed."],
          hints: ["Pull real user phrasings from your Module 5 test notes. They make the best eval items.", "Draft the rubric, then test it: you and a teammate score the same 5 outputs. If you disagree, sharpen the wording.", "Run all 30 items through the prototype. (Copy-paste is fine; promptfoo is an optional power tool for automating this.)", "Sort the failures into types, then fix the biggest one (usually in the prompt).", "Re-run all 30 and compare pass rates before and after.", "Design the dashboard: one card per metric, each with a target, a trend and \"if this drops, we…\"."],
          submissionFormat: "A Google Sheet link (view access), a Figma dashboard link and a one-page results summary (PDF).",
          rubric: [
            {
              "criterion": "Quality of metric choices",
              "emerging": "Only one kind of metric",
              "developing": "Model and product metrics present but generic",
              "proficient": "A clear mix of quality, success, adoption and trust metrics, with a guardrail",
              "exemplary": "Metrics tied to the client's business goals, with thresholds agreed with the client"
            },
            {
              "criterion": "Rigour of evaluation",
              "emerging": "Fewer than 30 items or no harmful cases",
              "developing": "30 items but mostly easy; one scorer",
              "proficient": "30 items, 5+ harmful/edge, 5+ Swahili; second scorer; full re-run",
              "exemplary": "Disagreements analysed and rubric refined; regression tracked across versions"
            },
            {
              "criterion": "Actionability of results",
              "emerging": "Numbers with no interpretation",
              "developing": "Failures listed but not prioritised",
              "proficient": "Top 3 failure types identified; fix made and verified",
              "exemplary": "Clear recommendations the client and engineers can act on immediately; tied to the launch decision"
            }
          ],
          stretch: `Automate your eval with promptfoo (https://www.promptfoo.dev/docs/intro/) or a Google Sheets formula workflow, and show the pass rate across 3 prompt versions.`
        },
        reflect: ["Which rubric criterion was hardest to define clearly? Why?", "Did the eval change your opinion of how \"good\" your prototype is?", "Which metric would you watch first in the week after launch, and why?"]
      }
    },
    {
      id: "07",
      title: "Responsible & Inclusive AI Design",
      summary: "Harms & Inclusion Review",
      hours: 10.0,
      status: "published",
      content: {
        essentialQuestion: "Who could this harm, and who is left out?",
        objectives: ["Run a harms-mapping workshop covering several stakeholder groups, including non-users.", "Assess harms by severity and likelihood.", "Apply the key ideas of the **Kenya Data Protection Act 2019** (consent, data minimisation, sensitive data, automated decisions) to a design.", "Spot dark patterns in AI products and design inclusive alternatives (language, literacy, disability, connectivity).", "Redesign a flow to reduce a key harm, with a before/after rationale."],
        watch: [
          {
            "type": "video",
            "title": "Microsoft Design Week 2025: Designing Safer Products in the Age of AI",
            "channel": "Microsoft Design",
            "url": "https://www.youtube.com/watch?v=u-p9gdt93no",
            "length": "~23 min",
            "why": "How a large design org thinks about safety in AI products."
          },
          {
            "type": "video",
            "title": "The Role of Design Ethics in UX",
            "channel": "NNgroup",
            "url": "https://www.youtube.com/watch?v=cySX_CmFGcc",
            "length": "~4 min",
            "why": "A short, clear framing of the designer's ethical responsibility."
          },
          {
            "type": "video",
            "title": "5 Years Journey of Impact in Data Protection - Full Documentary",
            "channel": "Office of the Data Protection Commissioner (Kenya)",
            "url": "https://www.youtube.com/watch?v=LaBgdIbnCYY",
            "length": "~38 min",
            "why": "Kenya's regulator on the Data Protection Act, enforcement and public awareness. Your local context."
          },
          {
            "type": "video",
            "title": "The Illusion of Inclusion: How LLMs Misrepresent African Languages and Cultural Contexts",
            "channel": "Microsoft Research (MSR Africa, Nairobi seminar)",
            "url": "https://www.youtube.com/watch?v=udwwp2AvilQ",
            "length": "~62 min",
            "why": "Why \"it supports Swahili\" isn't the same as serving African users well. Watch at least the first 25 minutes."
          },
          {
            "type": "reading",
            "title": "Microsoft, *Foundations of assessing harm (Harms Modeling)*: - Kenya *Data Protection Act, 2019* (focus on sections 25, ",
            "channel": "Reading",
            "url": "https://learn.microsoft.com/en-us/azure/architecture/guide/responsible-innovation/harms-modeling/",
            "length": "—",
            "why": "Keep open while you work"
          }
        ],
        notes: `**1. Harms aren't only "bugs"**

An AI feature can work exactly as built and still hurt people. Common harm types:

| Harm type | Example in a Kenyan context |
|---|---|
| **Denial of opportunity** | A credit-scoring bot gives lower limits to people whose M-Pesa usage looks "irregular", which often means informal or seasonal workers |
| **Quality-of-service gaps** | A voice assistant understands Nairobi English well but fails for Dholuo or Kalenjin speakers |
| **Privacy loss** | A pharmacy bot reveals someone's HIV medication to a family member using a shared phone |
| **Manipulation** | A loan bot nudges vulnerable users to borrow more ("You qualify for KES 20,000 more! 🎉") |
| **Over-reliance** | A farmer follows wrong AI pesticide advice without checking the label |
| **Erasure or stereotyping** | Generated images or text that misrepresent Kenyan cultures |

**2. Stakeholders: think beyond the user**

Map at least three groups:
- **Direct users:** the people using the bot.
- **Indirect stakeholders:** staff (pharmacists, SACCO officers), family members on shared phones, and the business.
- **Non-users:** people *excluded* (no smartphone, low literacy, not fluent in English or Swahili, people with visual impairments) and people *affected* without using it (e.g. the person whose number someone else enters).

**3. Severity × likelihood**

For each harm, rate **severity** (1 = minor annoyance, 5 = serious or irreversible harm to health, money or safety) and **likelihood** (1 = rare, 5 = very likely). Prioritise high × high. Then ask: *Can we design it out? Reduce it? Detect it and respond?*

**4. Kenya Data Protection Act 2019: what designers must know**

| Idea (section) | What it means for your design |
|---|---|
| **Principles (s.25)** | Collect only what's necessary (*data minimisation*), for a clear purpose, and keep it only as long as needed |
| **Rights of data subjects (s.26)** | People have the right to be informed, to access their data, to object, and to correct or delete false data. Design ways to do this ("Reply DATA to see what we store") |
| **Duty to notify (s.29)** | Tell people *before* collecting what you collect, why, and who it's shared with, in plain language and at the right moment |
| **Consent (s.30, s.32)** | Consent must be specific, informed and freely given, and people can **withdraw it at any time**. No pre-ticked boxes, and no "consent or no service" for data you don't actually need |
| **Sensitive personal data (s.2, ss.44–46)** | Health, biometric, family details, ethnic origin and more need extra care. Health data has specific rules |
| **Automated decisions (s.35)** | People have the right not to be subject to decisions based *solely* on automated processing that significantly affect them, with exceptions, and can ask for a decision to be reconsidered or retaken without solely automated processing. Design for **human review** in loans, insurance and similar decisions |
| **Data protection by design and default (s.41)** | Build privacy in from the start: defaults should collect the minimum |

**Also watch for transfers outside Kenya (ss.48–49).** Many AI APIs process data abroad, so flag this to your client.

**5. Dark patterns in AI**

Watch out for: bots that **pretend to be human**; **confirmshaming** ("No thanks, I don't care about my health"); **endless loops** that hide the human option; **pre-filled consent**; and **nudges to borrow or spend more**. The ethical alternative is honest, balanced and easy to exit.

**6. Inclusion checklist**
- **Language:** English, Swahili and Sheng. Consider other local languages for your audience, and note when quality drops.
- **Literacy:** short sentences, icons, voice notes.
- **Accessibility:** contrast, screen-reader labels, large text.
- **Connectivity and devices:** low-bandwidth mode, SMS or USSD fallback, shared phones.
- **Cost:** data costs for images and voice.

**Common mistakes**
- Mapping harms only for the "ideal user".
- Treating consent as a single checkbox at sign-up.
- Assuming "it speaks Swahili" means it's inclusive.
- Listing harms with no redesign.

**Glossary**
- **Harms map:** a structured list of potential harms, the stakeholders affected, severity and likelihood.
- **Data minimisation:** collecting only the data you truly need.
- **Data subject:** the person the data is about.
- **Sensitive personal data:** categories of data (e.g. health or biometrics) that need extra protection.
- **Dark pattern:** a design that tricks or pressures people against their interests.
- **ODPC:** the Office of the Data Protection Commissioner, Kenya's regulator.`,
        quickCheck: [
          {
            "q": "Name three stakeholder groups for a clinic booking bot, including one non-user group.",
            "a": "For example: patients (users); clinic staff or nurses (indirect); and non-users such as elderly patients without smartphones, or family members on a shared phone."
          },
          {
            "q": "A SACCO bot automatically rejects loan applications. What does s.35 of the Data Protection Act suggest you design?",
            "a": "A clear notice that the decision was automated, and a way for the member to request **human review** or reconsideration of the decision."
          },
          {
            "q": "Is a pre-ticked \"I agree to share my data with partners\" box acceptable? Why or why not?",
            "a": "No. Consent must be freely given, specific and informed, through a clear affirmative action, and it can be withdrawn. Pre-ticked boxes don't meet that standard."
          },
          {
            "q": "What two ratings do you use to prioritise harms?",
            "a": "**Severity** and **likelihood**."
          },
          {
            "q": "Give one example of a dark pattern in an AI chatbot.",
            "a": "For example: pretending to be human, hiding the human handoff, confirmshaming, or nudging users to borrow more."
          }
        ],
        challenge: {
          scenario: `Before Demo Day, every capstone product gets an independent responsible-AI review. Your team reviews **another team's** capstone product, and they review yours.`,
          build: "Complete the 4 deliverables below.",
          deliverables: ["**A harms map** (FigJam) from a 45-minute workshop run with the other team: stakeholders, harms, severity × likelihood, and the top 3 harms.", "**A privacy and consent flow redesign** for the product you reviewed: when and how data is requested, how consent is given and withdrawn, what's minimised, and how people can access, correct or delete their data.", "**A before/after rationale:** one flow redesigned to reduce a key harm, with an explanation of the harm reduced, who benefits and any trade-offs.", "**An inclusion check:** a short audit against the inclusion checklist above."],
          constraints: ["Consider **at least 3 stakeholder groups, including non-users**.", "Reference at least **two relevant sections** of the Kenya Data Protection Act 2019.", "The redesign must be shown as real screens or messages, not just bullet points."],
          hints: ["Get a 10-minute walkthrough of the other team's product.", "Run the workshop: silently brainstorm harms on sticky notes (10 min), cluster them (10 min), rate severity × likelihood (10 min), then choose the top 3 (15 min).", "Use Microsoft's harm categories as prompts if you get stuck.", "For the top harm, sketch three mitigation options (design it out / reduce / detect and respond), then pick one.", "Redesign the consent moment *in the conversation*, just in time, rather than as a long policy link at the start.", "Hand the review back to the other team, and adopt the feedback you receive into your own capstone."],
          submissionFormat: "A FigJam harms map link, plus a Figma redesign link, plus a 1–2 page rationale (PDF).",
          rubric: [
            {
              "criterion": "Breadth of stakeholders",
              "emerging": "Users only",
              "developing": "2 groups, or non-users missing",
              "proficient": "3+ groups including non-users, with specific examples",
              "exemplary": "Includes overlooked groups (shared-phone users, people with disabilities, staff), validated with a real stakeholder"
            },
            {
              "criterion": "Severity and likelihood reasoning",
              "emerging": "No ratings",
              "developing": "Ratings given without reasons",
              "proficient": "Reasoned ratings; clear top 3",
              "exemplary": "Reasoning backed by research evidence; considers the cumulative or long-term harm"
            },
            {
              "criterion": "Quality of the redesign",
              "emerging": "No redesign, or bullets only",
              "developing": "Redesign shown but harm reduction unclear",
              "proficient": "A clear before/after that reduces a key harm; consent flow aligned with the DPA",
              "exemplary": "The redesign tested with users; trade-offs explicit; adopted by the other team"
            }
          ],
          stretch: `Draft a one-page **Data Protection Impact Assessment (DPIA) starter** for your own capstone, following the structure in s.31 of the Act (description of the processing, necessity, risks and mitigations).`
        },
        reflect: ["Which harm had your team (or the other team) completely missed before the workshop?", "Who is excluded by your capstone product today, and what would it take to include them?", "How did it feel to have your work reviewed for harms? What will you do differently next time?"]
      }
    }
  ],

  capstone: {
    title: "AI Feature, Shipped",
    summary: "Weeks 7–8 · Teams of 2–3 (mixed-track where possible) · Ends at Demo Day",
    status: "published",
    brief: `Take your **real client's** brief from problem framing all the way to a **tested live prototype**, and tell the story so well that the client wants to build it and an employer wants to hire you.

You've been building toward this since Week 2:

| From module | Capstone ingredient |
|---|---|
| 2 · Opportunity Framing | The problem, research and opportunity choice |
| 3 · Conversational & Agentic UX | Flows, dialogues and the autonomy spec |
| 4 · Trust & Failure States | The component kit and failure design |
| 5 · Live Prototyping | The working prototype and usability findings |
| 6 · Measuring | The eval set, rubric, results and dashboard |
| 7 · Responsible AI | The harms map, consent redesign and inclusion fixes |`,
    milestones: [
      {
        "week": "Week 2",
        "label": "Client matched; Opportunity Sprint complete — Client signs off on the chosen opportunity"
      },
      {
        "week": "Weeks 3–6",
        "label": "Module challenges build the core assets — Each Friday's Show & Ship"
      },
      {
        "week": "Week 7, Mon",
        "label": "Capstone Challenge Drop; team agreement and plan — Mentor approves scope (what's in and out)"
      },
      {
        "week": "Week 7, Wed",
        "label": "Harms & Inclusion Review exchanged with a peer team — Top 3 harms agreed"
      },
      {
        "week": "Week 7, Fri",
        "label": "Prototype v2 with fixes from Modules 6–7; eval re-run — Mentor checkpoint:** \"Would we demo this?\""
      },
      {
        "week": "Week 8, Mon–Tue",
        "label": "Final user test (≥3 users) + case study draft — Peer review of the case study draft"
      },
      {
        "week": "Week 8, Wed",
        "label": "Demo rehearsal (timed) with mentor feedback — Rehearsal score against the rubric"
      },
      {
        "week": "Week 8, Thu",
        "label": "Final polish; handover note sent to the client — Client preview (optional)"
      },
      {
        "week": "Week 8, Fri",
        "label": "Demo Day** (public and streamed) — Awards: Best Build, Best Research, People's Choice"
      }
    ],
    deliverables: ["**A portfolio case study** (Notion, Figma, Behance or your own site) covering: problem → research → opportunity (including the rejected idea) → flows → failure states → live prototype → evaluation results → responsible-AI review → outcome and next steps.", "**A Figma file:** flows, component kit and final screens, cleanly organised.", "**A prototype link** that works live on a phone.", "**A Demo Day presentation:** 7 minutes plus 3 minutes of Q&A, to the client and hiring partners.", "**A handover note for the client:** what to build next, the risks to watch, and the metrics to track."],
    rubric: [
      {
        "criterion": "Problem framing",
        "emerging": "Problem unclear or solution-first",
        "developing": "Problem stated but weakly evidenced; no rejected ideas",
        "proficient": "A clear JTBD-based problem; AI justified against alternatives; rejected idea explained",
        "exemplary": "Framing changed the client's thinking; success criteria agreed with the client"
      },
      {
        "criterion": "User evidence",
        "emerging": "Little or no real user input",
        "developing": "Some interviews or tests, mostly with non-target users",
        "proficient": "Research and 5+ usability tests with real target users; insights traced to decisions",
        "exemplary": "Ongoing user involvement; evidence of improvement across iterations"
      },
      {
        "criterion": "Interaction design quality",
        "emerging": "Flows incomplete or confusing",
        "developing": "Happy path designed; edge cases thin",
        "proficient": "Clear flows, multilingual support, confirmations, handoff, mobile-first",
        "exemplary": "Elegant, delightful and culturally fluent; works on low-end devices and low bandwidth"
      },
      {
        "criterion": "Trust and failure design",
        "emerging": "Failure states missing",
        "developing": "Some states, inconsistently applied",
        "proficient": "Complete failure states applied in the live prototype; calibrated trust considered",
        "exemplary": "Failure design validated with users; the responsible-AI review fully integrated"
      },
      {
        "criterion": "Evaluation rigour",
        "emerging": "No eval",
        "developing": "Eval present but small or easy",
        "proficient": "30+ item eval with harmful cases, results, fixes and a re-run; dashboard with guardrails",
        "exemplary": "Eval drove major decisions; tracked across versions; the client adopts the scorecard"
      },
      {
        "criterion": "Storytelling",
        "emerging": "Disorganised; hard to follow",
        "developing": "Covers the content but feels like a list of tasks",
        "proficient": "A clear narrative from problem to outcome; confident demo; honest about limitations",
        "exemplary": "Compelling, portfolio-grade story that clients and employers remember"
      }
    ]
  }
};
