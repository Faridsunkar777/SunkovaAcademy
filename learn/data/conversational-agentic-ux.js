/* Auto-generated from Jaylen markdown — Conversational & Agentic UX */
(window.SUNKOVA_COURSES = window.SUNKOVA_COURSES || {})["conversational-agentic-ux"] = {
  slug: "conversational-agentic-ux",
  title: "Conversational & Agentic UX",
  category: "AI Design",
  categorySlug: "ai-design",
  format: "self-paced",
  image: "../assets/images/course-conversational.webp",
  summary: "Prototype WhatsApp-first agents with failure states, handoffs and multilingual flows.",

  overview: {
    whoFor: "Beginners and career switchers interested in conversation design, chatbots and AI agents; UX/UI designers who want to add conversational and agentic design to their skills; Customer-experience staff, product managers and founders at Kenyan SMEs, SACCOs, clinics and pharmacies who want to design better WhatsApp experiences",
    prereqs: "Comfort using a computer and WhatsApp; curiosity about how conversations work. **Helpful but not required:** basic UX ideas (users, flows, prototypes) and basic Figma. If you've done Sunkova's *AI Product Design Foundations*, this course deepens its Module 3. **No coding needed.**. Speaking some Swahili helps a lot. If you don't, you'll partner with a fluent speaker for testing (this is part of the method, not a workaround).",
    duration: "6 weeks · 6–8 hours per week (about 40–45 hours total)",
    format: "Self-paced (online), with optional peer reviews and monthly live office hours",
    outcomes: ["Write natural sample dialogues with consistent persona, tone and turn-taking.", "Design multilingual flows that handle code-switching between English, Swahili and Sheng.", "Choose autonomy levels for agent actions, and design confirmations, undo and permissions.", "Design for edge cases and graceful human handoff.", "Prototype a working agent in Voiceflow or Botpress and stress-test it using LLMs and real people.", "Package your work as a portfolio-ready dialogue pack, spec and demo."],
    tools: ["FigJam / Figma", "Notion or Google Docs", "Voiceflow", "ChatGPT, Claude or Gemini", "Google Sheets", "Loom or your phone's screen recorder"]
  },

  bigIdea: "Conversation is the interface, and trust is the product.",
  essentialQuestion: "How should an AI that talks, and acts, behave?",
  courseChallenge: "Design and prototype a WhatsApp-first AI agent for a real Kenyan service, either a pharmacy refill agent or a matatu SACCO parcel tracker, that understands code-switching, acts safely and always offers a path to a human.",

  weeklyPlan: [
    {
      "week": 1,
      "focus": "1 · Conversation design fundamentals",
      "session": null,
      "due": null
    },
    {
      "week": 2,
      "focus": "2 · Multilingual & code-switching",
      "session": null,
      "due": null
    },
    {
      "week": 3,
      "focus": "3 · Agentic UX: autonomy, confirmations, undo",
      "session": null,
      "due": null
    },
    {
      "week": 4,
      "focus": "4 · Edge cases & human handoff",
      "session": null,
      "due": null
    },
    {
      "week": 5,
      "focus": "5 · Prototype in Voiceflow/Botpress + LLM testing",
      "session": null,
      "due": null
    },
    {
      "week": 6,
      "focus": "6 · Ship challenge",
      "session": null,
      "due": null
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
        "after": "06",
        "label": "Module 06 challenge submitted and peer-reviewed"
      }
    ]
  },

  modules: [
    {
      id: "01",
      title: "Conversation Design Fundamentals",
      summary: "Conversation Design Fundamentals",
      hours: 6.0,
      status: "published",
      content: {
        essentialQuestion: "What makes a conversation with a machine feel natural, and when should it *not* feel human?",
        objectives: ["Explain the Cooperative Principle and apply it to bot messages.", "Design turn-taking that keeps the conversation moving.", "Create a persona with a consistent tone of voice.", "Write sample dialogues for a happy path.", "Avoid the \"too human\" trap (the ELIZA effect)."],
        watch: [
          {
            "type": "video",
            "title": "The Conversation Design Workflow  —  AI Training",
            "channel": "Conversation Design Institute",
            "url": "https://www.youtube.com/watch?v=smkpfY8zjEE",
            "length": "~8 min",
            "why": "The step-by-step process conversation designers follow, from research to testing."
          },
          {
            "type": "video",
            "title": "Applying Built-in Hacks of Conversation to Your Voice UI (Google I/O '17)",
            "channel": "Google for Developers",
            "url": "https://www.youtube.com/watch?v=wuDP_eygsvs",
            "length": "~40 min",
            "why": "A classic talk by Google's James Giangola on the Cooperative Principle. Its lessons apply to chat as much as voice."
          },
          {
            "type": "video",
            "title": "The Four Dimensions of Tone of Voice in UX Writing",
            "channel": "NNgroup",
            "url": "https://www.youtube.com/watch?v=0ar4DezKKGI",
            "length": "~3 min",
            "why": "A simple framework for defining your bot's tone."
          },
          {
            "type": "video",
            "title": "ELIZA Effect: Why We Fall in Love with AI",
            "channel": "NNgroup",
            "url": "https://www.youtube.com/watch?v=b_m5vPwfPdI",
            "length": "~4 min",
            "why": "Why people over-attribute intelligence to chatbots, and what that means for design."
          },
          {
            "type": "reading",
            "title": "Google, *Learn about conversation*: · Google, *Create a persona*: · Google, *Write sample dialogs*",
            "channel": "Reading",
            "url": "https://developers.google.com/assistant/conversation-design/learn-about-conversation",
            "length": "—",
            "why": "Keep open while you work"
          }
        ],
        notes: `**1. Conversation is something humans are already experts at**

You've been having conversations your whole life, so you already know the rules, even if you've never named them. When a bot breaks those rules, people notice instantly. Conversation design is the craft of making a machine follow the rules people expect.

**2. The Cooperative Principle (Grice's maxims)**

| Maxim | Rule | Bot that breaks it | Bot that follows it |
|---|---|---|---|
| **Quality** | Say what's true; don't claim what you can't back up | "Your parcel will arrive at 3pm." (It doesn't know.) | "Your parcel left Nairobi at 10:15. Nakuru arrivals are usually 1–2pm." |
| **Quantity** | Give as much information as needed, no more | A 200-word reply about SACCO history | "Parcel KX-2231 is at Nakuru office ✅ Pick up by 6pm today." |
| **Relevance** | Stay on topic and use context | Asking for the waybill number the user just typed | "Got it, KX-2231. Checking now…" |
| **Manner** | Be clear and orderly | Jargon: "Consignment status: in transit (code 4)" | "On the way. It's on the 11am matatu." |

**3. Turn-taking on WhatsApp**

Each bot turn should do three things: **acknowledge** (show it understood), **inform or act**, and **hand the turn back** with a clear next step.

> **User:** Nataka ku-refill dawa yangu ya pressure
> **Bot:** Sawa! 👍 I can see your last refill was *Amlodipine 5mg × 30* on 12 Sept. Order the same again?
> [Yes, same order] [Change something] [Talk to pharmacist]

Tips: keep most messages **under ~50 words**, put one question per turn, use **quick-reply buttons or numbered options** (WhatsApp supports interactive buttons and lists on the Business Platform), and **avoid asking for information you already have**.

**4. Persona and tone**

A persona isn't a cartoon character. It's a set of **consistent choices**. NN/g describes four tone dimensions: **funny ↔ serious**, **formal ↔ casual**, **respectful ↔ irreverent** and **enthusiastic ↔ matter-of-fact**. A pharmacy bot might be *serious, semi-formal, respectful and calm*. A parcel bot might be *light, casual, respectful and efficient*.

**Persona sheet template:**
- **Name** (optional): e.g. "Dawa Assistant" (honest), rather than a human-sounding name that implies a person.
- **Role and scope:** what it does and doesn't do.
- **Tone:** 3–4 words, plus the NN/g dimensions.
- **Language behaviour:** mirrors the user's language (more in Module 2).
- **Says:** "Sawa", "Asante", "Pole for the delay". **Never says:** "I'm a real person", slang that could offend, or medical opinions.

**5. Don't over-humanise**

The **ELIZA effect** is people's tendency to believe a chatbot understands far more than it does. If your bot says "I totally understand how you feel, my friend 😊", people may over-trust it, share sensitive details or feel betrayed when it fails. Be warm but **honest**: introduce it as an assistant, show its limits, and offer a human.

**6. Sample dialogues come first**

Before drawing any flowchart, **write the conversation as a script**. Read it out loud with someone. If it sounds like a form being read aloud, rewrite it. Sample dialogues are the fastest, cheapest prototype there is.

**Common mistakes**
- Greeting messages that are 5 lines long before the user can say anything.
- Asking open questions ("How can I help?") with no examples. Users don't know what's possible.
- Inconsistent tone (formal in one message, Sheng jokes in the next).
- Pretending to be a human.

**Glossary**
- **Turn:** one message (or a group of messages) from one participant.
- **Persona:** the consistent personality and voice of the assistant.
- **Sample dialogue:** a written script of an example conversation.
- **Happy path:** the ideal, smooth conversation with no problems.
- **ELIZA effect:** attributing human understanding to a simple program.`,
        quickCheck: [
          {
            "q": "Which maxim does a bot break if it asks for your phone number twice?",
            "a": "**Relevance**: it ignores context it already has. (It arguably also breaks Quantity, since it adds unnecessary turns.)"
          },
          {
            "q": "What three things should every bot turn do?",
            "a": "Acknowledge, inform or act, and hand the turn back with a clear next step."
          },
          {
            "q": "Why might \"How can I help?\" alone be a weak opening?",
            "a": "Users don't know what the bot can do. Offer examples or buttons to set the right mental model."
          },
          {
            "q": "Give two of the NN/g tone dimensions.",
            "a": "Any two of: funny↔serious, formal↔casual, respectful↔irreverent, enthusiastic↔matter-of-fact."
          },
          {
            "q": "Why shouldn't a pharmacy bot claim to be \"Nurse Akinyi\"?",
            "a": "It's deceptive. It inflates trust (the ELIZA effect) and may lead users to treat its replies as professional medical advice."
          }
        ],
        challenge: {
          scenario: `Choose **Dawa Refill** or **Mzigo Tracker** (see the course overview). The client wants to "hear" the assistant before investing in building it.`,
          build: "Complete the 4 deliverables below.",
          deliverables: ["**A user snapshot:** talk to 2 people who match your scenario's users (e.g. someone who reorders medication, or someone who sends parcels by matatu). Ask: *Tell me about the last time you…* Note their words, frustrations and the language they use.", "**A persona sheet** using the template above.", "**3 happy-path sample dialogues** for the top 3 user jobs (e.g. reorder the same medicine; check where a parcel is; arrange pickup).", "**A \"read-aloud\" note:** you read each dialogue aloud with someone playing the user. Note what sounded wrong, and show the fix."],
          constraints: ["Bot messages ≤ 50 words each (with rare exceptions you can justify).", "At least one dialogue starts with a user message that is **not** a neat sentence (e.g. \"mzigo yangu?\").", "The assistant must be honest that it's an assistant."],
          hints: ["(1 hr) Do the 2 short conversations and write down exact phrases.", "(45 min) Fill in the persona sheet, choosing your tone dimensions deliberately.", "(1.5 hrs) Write the dialogues in a table: `Speaker | Message | Buttons/options | Notes`.", "(30 min) Read them aloud. Every time you stumble, rewrite.", "(30 min) Do a quick check against Grice's maxims: does each bot turn pass all four?"],
          submissionFormat: "A single Notion page or PDF (\"Dialogue Pack v1\") with the snapshot, persona and dialogues, plus the read-aloud fixes.",
          rubric: [
            {
              "criterion": "Naturalness and turn-taking",
              "emerging": "Robotic, long or confusing turns",
              "developing": "Mostly natural; some turns lack a clear next step",
              "proficient": "Concise turns that acknowledge, act and hand back; buttons used well",
              "exemplary": "Sounds authentically Kenyan; validated by read-aloud with a real user"
            },
            {
              "criterion": "Persona and tone",
              "emerging": "No persona or an inconsistent tone",
              "developing": "Persona defined but not reflected consistently",
              "proficient": "Clear persona, applied consistently, honest about being an assistant",
              "exemplary": "Tone choices justified by user research; includes thoughtful \"never say\" rules"
            },
            {
              "criterion": "Grounding in users",
              "emerging": "No user input",
              "developing": "Users mentioned but generic",
              "proficient": "Dialogues use real phrases from 2 user conversations",
              "exemplary": "Insights from users changed the scope or flow, documented"
            }
          ],
          stretch: `Write a fourth dialogue for a returning user, where the bot uses memory appropriately ("Same as last month?") without being creepy.

**✅ Checkpoint 1:** persona sheet ☐ · 3 dialogues ☐ · read-aloud fixes ☐ · submitted ☐`
        },
        reflect: ["Which line in your dialogues changed the most after reading aloud? Why?", "Where is the line between \"warm\" and \"pretending to be human\" for your assistant?", "What surprised you about how your 2 users described the task?"]
      }
    },
    {
      id: "02",
      title: "Multilingual & Code-Switching (English / Swahili / Sheng)",
      summary: "Multilingual & Code-Switching (English / Swahili / Sheng)",
      hours: 6.0,
      status: "published",
      content: {
        essentialQuestion: "How do we design an assistant for people who speak three languages in one sentence?",
        objectives: ["Explain code-switching and why it matters for Kenyan users.", "Choose a language strategy (detect, mirror, offer a switch) for your assistant.", "Build a Sheng/Swahili glossary and test set from real user language.", "Recognise where AI models perform worse for African languages, and design for it.", "Run a code-switch test and record failures."],
        watch: [
          {
            "type": "video",
            "title": "How to Make Your Chatbot Speak Your User's Language — Every Time",
            "channel": "Botpress",
            "url": "https://www.youtube.com/watch?v=QAB-sJGFPQs",
            "length": "~13 min",
            "why": "Practical techniques for language detection and consistent replies in the user's language."
          },
          {
            "type": "video",
            "title": "The RIGHT Way to Build a Multi-Language Chatbot",
            "channel": "Botpress",
            "url": "https://www.youtube.com/watch?v=7v3TZZQA40E",
            "length": "~2 min",
            "why": "A quick summary of the recommended approach."
          },
          {
            "type": "video",
            "title": "Beyond Swahili: Designing Inclusive AI for Bantu Languages",
            "channel": "Microsoft Research (MSR Africa, Nairobi seminar)",
            "url": "https://www.youtube.com/watch?v=yo-mIcwj0FU",
            "length": "~66 min",
            "why": "Why Swahili is better supported than other Bantu languages, the challenge of code-switching, and how to avoid erasing linguistic diversity. Watch the first 25–30 minutes if short on time."
          },
          {
            "type": "video",
            "title": "Evaluating the Cultural Relevance of AI Models and Products: Insights from the YUX Team",
            "channel": "Microsoft Research",
            "url": "https://www.youtube.com/watch?v=6qYFPTkgsGQ",
            "length": "~67 min *(optional)",
            "why": "African design researchers (YUX) on testing whether AI products fit local cultures."
          }
        ],
        notes: `**1. What is code-switching?**

**Code-switching** is moving between languages in a conversation, or even within one sentence. In Nairobi it's normal:

> *"Boss, mzigo yangu ilifika? Nili-send jana from Eldoret."*

That one message mixes English ("Boss", "send", "from"), Swahili grammar ("ilifika", "jana") and an English verb with a Swahili prefix ("Nili-send"). **Sheng** adds its own slang ("mzigo" is standard Swahili for luggage or parcel, but words like "mbao" for 20 bob, "doh" for money and "mse" for a guy come from Sheng and change quickly over time and between neighbourhoods).

If your assistant only works in "textbook" English or "textbook" Swahili, it fails most real users.

**2. Language strategies**

| Strategy | How it works | Pros | Cons |
|---|---|---|---|
| **Force a menu** ("1 English, 2 Kiswahili") | The user must choose first | Simple | Annoying; fails code-switchers |
| **Detect and mirror** | Detect the dominant language of each message and reply in it | Feels natural | Detection can be wrong on short or mixed messages |
| **Mirror plus switch option** ✅ | Detect and mirror, *and* always allow "Type ENGLISH / KISWAHILI to switch" | Natural and gives control | Needs testing |
| **Fixed language per user** | Remember the user's preference | Consistent | Ignores people who switch naturally |

For most Kenyan WhatsApp agents, **mirror + switch option** is the best start. When the message is genuinely mixed, reply in **simple Swahili-English**, the way a friendly shop attendant would. Don't reply in heavy Sheng unless your users truly want that. Sheng is personal and generational, and a bank or pharmacy speaking Sheng can feel fake.

**3. Where AI struggles**

Large language models are trained mostly on English text. Swahili is relatively well represented compared with many African languages, but quality is still often lower than in English, and **Sheng, regional languages (Kikuyu, Dholuo, Luhya, Kalenjin, Somali…) and code-switched text are much weaker**. Common failures:
- misreading Sheng words, or "correcting" them;
- replying in stiff, overly formal Swahili;
- switching to English in the middle of a Swahili conversation;
- mistranslating key terms (dosages, money, place names);
- cultural mismatches (e.g. inappropriate greetings or examples).

**4. Design moves**

- **Build a glossary** from real users: the terms your users use, what they mean, and how the bot should reply. For example: \`"mzigo" = parcel\`, \`"kufika" = arrive\`, \`"stage" = matatu stop\`, \`"dawa" = medicine\`, \`"refill" (same in both)\`.
- **Keep critical info language-proof:** amounts (KES 850), dates (12/10), parcel numbers and medicine names are shown the same way in every language.
- **Confirm understanding** on important items: "Just to confirm: *Amlodipine 5mg*, 30 tablets?"
- **Allow voice notes** where possible (a lot of people find speaking easier than typing), but remember that speech recognition for Swahili and accented English varies, so always confirm what was understood.
- **Test with fluent speakers** of each language you support, not just Google Translate.

**5. The code-switch test**

Create **20 test messages** from real phrasing: 5 English, 5 Swahili, 5 mixed and 5 Sheng-heavy or misspelled. Run them through an LLM acting as your assistant (with your persona and language rules in the prompt). For each one, record: *Understood? Replied in the right language? Natural? Any errors in key info?*

**Common mistakes**
- Assuming "supports Swahili" means it supports *your users'* Swahili.
- Translating English dialogues word for word instead of writing natural Swahili.
- Using Sheng from social media that your users don't actually use.
- Letting key numbers or names get translated or reformatted.

**Glossary**
- **Code-switching:** mixing languages within a conversation or sentence.
- **Sheng:** a Swahili-English based urban language/slang originating in Nairobi; it changes quickly.
- **Language detection:** automatically identifying which language a message is in.
- **Low-resource language:** a language with relatively little digital training data.
- **Glossary / lexicon:** a list of terms and how your system should interpret and use them.`,
        quickCheck: [
          {
            "q": "Why is \"Force a menu\" often a poor first experience?",
            "a": "It adds friction before the user gets help, and it doesn't reflect how code-switchers actually speak."
          },
          {
            "q": "A user writes in mixed Sheng-English. What should the bot reply in?",
            "a": "Usually simple, friendly Swahili-English (mirroring the mix, but not heavy Sheng), with an option to switch language."
          },
          {
            "q": "Name two common AI failures with Swahili or Sheng.",
            "a": "Any two: misreading Sheng, stiff or formal Swahili, switching to English mid-chat, mistranslating key terms, and cultural mismatches."
          },
          {
            "q": "Which information should stay identical in every language?",
            "a": "Critical information: amounts, dates, reference/parcel numbers, medicine names and doses."
          },
          {
            "q": "Why test with fluent speakers rather than relying on a translation tool?",
            "a": "Translation tools miss naturalness, tone and local usage, and can introduce errors in critical terms. Fluent speakers catch what sounds wrong."
          }
        ],
        challenge: {
          scenario: "Your client's customers speak English, Swahili and Sheng, often all at once. Make your assistant work for them.",
          build: "Complete the 4 deliverables below.",
          deliverables: ["**A language strategy (1 page):** your chosen strategy, the switch command, rules for mixed messages, what stays language-proof, and voice-note handling.", "**A glossary** of 25+ terms collected from at least 2 real users (or from public WhatsApp-style phrasing you observe, without copying personal data).", "**Translated/adapted dialogues:** your 3 Module 1 dialogues, plus Swahili and code-switched versions *written naturally, not translated word for word*, and reviewed by a fluent speaker.", "**A code-switch test log:** 20 test messages run through an LLM role-playing your assistant, with results and the top 3 failure patterns."],
          constraints: ["At least **5 Sheng-heavy or misspelled** messages in your test set.", "A fluent Swahili speaker must review your Swahili dialogues. Note their changes.", "Key information (amounts, numbers, names) must appear identically in all language versions."],
          hints: ["Write your system prompt for the LLM test: persona + scope + language rules from your strategy.", "Paste it into ChatGPT, Claude or Gemini, then send your 20 messages one by one (start a fresh chat for each group of 5).", "Log each result in Google Sheets: `Message | Language type | Understood? | Reply language correct? | Natural? | Key info correct? | Notes`.", "Find the patterns (e.g. \"Switches to English when the user uses English verbs\").", "Update your prompt rules to fix the top pattern, then re-run those messages."],
          submissionFormat: "The Dialogue Pack v2 (Notion/PDF) with the strategy, glossary and dialogues, plus a Google Sheets test log link.",
          rubric: [
            {
              "criterion": "Language strategy",
              "emerging": "No clear strategy",
              "developing": "A strategy chosen but rules for mixed messages unclear",
              "proficient": "Clear mirror/switch rules, language-proof key info, voice handling considered",
              "exemplary": "Strategy justified with user evidence; handles edge cases like shared phones or elderly users"
            },
            {
              "criterion": "Naturalness of multilingual dialogues",
              "emerging": "Word-for-word translations",
              "developing": "Mostly natural; some stiff phrases",
              "proficient": "Natural Swahili and code-switched versions, reviewed by a fluent speaker",
              "exemplary": "Validated with real users of different ages and areas"
            },
            {
              "criterion": "Testing rigour",
              "emerging": "Fewer than 20 messages or no Sheng",
              "developing": "20 messages, little analysis",
              "proficient": "20+ messages including 5+ Sheng/misspelled; patterns identified; a fix re-tested",
              "exemplary": "Includes regional-language messages; failure patterns quantified and fed back into the design"
            }
          ],
          stretch: `Add 5 test messages in another Kenyan language your users speak (e.g. Kikuyu or Dholuo), document how the AI performs, and design a graceful response for unsupported languages.

**✅ Checkpoint 2:** strategy ☐ · glossary ☐ · reviewed dialogues ☐ · test log ☐ · submitted ☐`
        },
        reflect: ["Which of your own assumptions about \"how Kenyans talk\" did testing challenge?", "How should your assistant behave when it *doesn't* understand someone's language?", "Who might still be excluded by your language strategy?"]
      }
    },
    {
      id: "03",
      title: "Agentic UX: Autonomy Levels, Confirmations, Undo",
      summary: "Agentic UX: Autonomy Levels, Confirmations, Undo",
      hours: 6.0,
      status: "published",
      content: {
        essentialQuestion: "When should an AI act on someone's behalf, and how do we keep them in control?",
        objectives: ["Explain the difference between a chatbot (answers) and an agent (acts).", "Assign an autonomy level to each agent action, based on reversibility, cost and sensitivity.", "Design clear confirmations that show exactly what will happen.", "Design undo, cancellation and notification patterns.", "Write an autonomy and permissions spec a developer could build from."],
        watch: [
          {
            "type": "video",
            "title": "AI agent design patterns",
            "channel": "Google Cloud Tech",
            "url": "https://www.youtube.com/watch?v=GDm_uH6VxPY",
            "length": "~8 min",
            "why": "What agents are and the common patterns behind them, in plain language."
          },
          {
            "type": "video",
            "title": "Config 2024: Defining the relationship (between humans and AI) (Sam Whitmore & Jason Yuan)",
            "channel": "Figma",
            "url": "https://www.youtube.com/watch?v=xwGm957Dzss",
            "length": "~20 min",
            "why": "Designers on the roles AI can play for people, and how that shapes the interface."
          },
          {
            "type": "video",
            "title": "Who's In Charge? Designing Trustworthy Agentic Experiences",
            "channel": "UXPA International",
            "url": "https://www.youtube.com/watch?v=hYngUsxXrOA",
            "length": "~59 min",
            "why": "A UX-focused talk on keeping users in control of AI agents. Watch at least the first 30 minutes."
          },
          {
            "type": "reading",
            "title": "Knight First Amendment Institute, *Levels of Autonomy for AI Agents* (describes the user's role as operator, collaborato",
            "channel": "Reading",
            "url": "https://www.knightcolumbia.org/content/levels-of-autonomy-for-ai-agents-1",
            "length": "—",
            "why": "Keep open while you work"
          }
        ],
        notes: `**1. From answering to acting**

A **chatbot** tells you things: "Your parcel is in Nakuru." An **agent** *does* things: it books a pickup slot, places a medicine order, sends an M-Pesa payment request or notifies the receiver. Doing things is powerful, and risky. The core design question shifts from *"Is the answer good?"* to *"Should the AI be allowed to do this, and how does the user stay in charge?"*

**2. An autonomy scale for your actions**

| Level | Agent behaviour | User's role | Dawa Refill example | Mzigo Tracker example |
|---|---|---|---|---|
| **0 · Inform** | Answers only | Operator | "Your last refill was 12 Sept." | "KX-2231 is at Nakuru office." |
| **1 · Suggest** | Proposes; the user acts | Decider | "You're due 12 Oct. Want to reorder?" | "Want me to notify the receiver?" |
| **2 · Prepare + confirm** | Prepares the action and waits for an explicit yes | Approver | Shows the order summary → [Confirm order] | Shows the pickup slot → [Confirm] |
| **3 · Act + notify + undo** | Acts, then informs, with an undo window | Monitor | "Reminder set for 10 Oct ✅ Reply STOP to cancel." | "Receiver notified ✅ (Undo)" |
| **4 · Autonomous** | Acts silently | Observer | Rarely appropriate | Rarely appropriate |

**3. How to choose the level: the R-C-S test**

For each action, ask:
- **R, Reversible?** Can it be undone easily and fully? (A reminder: yes. A dispatched delivery: not really.)
- **C, Costly?** Does it cost money, time or a trip? (M-Pesa payments, rider dispatch.)
- **S, Sensitive?** Does it involve health, money, identity or sharing data with others? (Telling a receiver *what's* in a parcel; medication details.)

**Any "yes" pushes the level down.** Irreversible + costly + sensitive = **Level 1 or 2 at most**, with a human option.

**4. Designing a good confirmation**

A confirmation must show **exactly what will happen**, in plain words, before it happens:

> 🧾 **Confirm your order**
> Amlodipine 5mg × 30 tablets
> Pickup: Afya Bora, Kiambu Rd branch · Tomorrow after 10am
> Total: **KES 850** (pay at pickup or by M-Pesa)
> [✅ Confirm] [✏️ Change] [❌ Cancel]

Good confirmations are **specific** (amounts, names, times), **scannable**, **easy to change**, and use an explicit action word ("Confirm order", not just "OK"). Avoid confirming *everything*, though. Too many confirmations train people to tap "yes" without reading (*confirmation fatigue*). Save them for actions that fail the R-C-S test.

**About M-Pesa:** in a real system, payment would be triggered as an STK push that the user approves *on their own phone with their PIN*. That's a second, built-in confirmation. Your agent should never ask users to share their M-Pesa PIN in the chat. Make that a rule in your persona's "never" list.

**5. Undo, cancel, notify**

- **Undo window:** "Order placed. Reply UNDO within 10 minutes to cancel." State the time limit clearly.
- **Cancel later:** explain how and until when ("You can cancel until the rider leaves").
- **Notify:** always confirm completed actions with a receipt-style message (what, when, a reference number).
- **Global controls:** let users stop reminders and notifications entirely ("Reply STOP"), in line with HAX G17 (provide global controls).

**6. Permissions: what can the agent see and touch?**

List the **data and systems** each action needs: order history, phone number, location, the receiver's number. Ask *does it really need this?* (data minimisation). For example, the parcel bot needs the waybill number and the receiver's phone, but it doesn't need the sender's ID number.

**The autonomy and permissions spec (template):**

| Action | Autonomy level | Trigger | Confirmation shown | Undo / cancel | Data accessed | Human fallback |
|---|---|---|---|---|---|---|
| Reorder last prescription | 2 | User asks / reminder | Medicine, qty, branch, price | Cancel until packed | Order history | Pharmacist chat |

**Common mistakes**
- Giving the agent Level 3–4 on payments "because it's faster".
- Vague confirmations ("Proceed?").
- Confirming trivial actions, which causes fatigue.
- Undo that doesn't really undo, or has a hidden time limit.
- Accessing more data than needed.

**Glossary**
- **Agent:** an AI system that can take actions in other systems.
- **Autonomy level:** how much the agent may do without the user's explicit approval.
- **Confirmation fatigue:** users approving without reading because they're asked too often.
- **Undo window:** a period during which an action can be reversed.
- **Permission:** the data or system access an agent is allowed.
- **STK push:** an M-Pesa payment prompt that pops up on the user's phone for PIN approval.`,
        quickCheck: [
          {
            "q": "Apply the R-C-S test to \"dispatch a boda rider to deliver medicine.\"",
            "a": "Not really reversible once dispatched, costly (rider time and fees), and sensitive (health items, home location). So Level 2: prepare and confirm, with a cancel option until dispatch."
          },
          {
            "q": "What four things should a medicine order confirmation include?",
            "a": "For example: the medicine and quantity, the pickup or delivery details, the price, and clear Confirm/Change/Cancel options."
          },
          {
            "q": "What's confirmation fatigue, and how do you avoid it?",
            "a": "Users tap \"yes\" without reading because they're asked too often. Avoid it by confirming only actions that fail the R-C-S test."
          },
          {
            "q": "Should the agent ever ask for an M-Pesa PIN in chat?",
            "a": "**Never.** Payment approval happens on the user's own phone via the M-Pesa prompt."
          },
          {
            "q": "What does \"data minimisation\" mean for a parcel tracker?",
            "a": "Only collect and use what's needed (e.g. waybill and receiver number), not ID numbers or unnecessary personal details."
          }
        ],
        challenge: {
          scenario: `The client's operations manager asks: *"What exactly will this bot be allowed to do? What if it does something wrong?"* Answer with a spec and designed confirmations.`,
          build: "Complete the 4 deliverables below.",
          deliverables: ["**An action inventory:** every action your agent could take (aim for 6–10).", "**An autonomy and permissions spec** (using the template), with an R-C-S rating for each action.", "**Designed confirmation, undo and receipt messages** for your 3 riskiest actions (in Figma or as WhatsApp-style mock-ups), in English and Swahili.", "**A \"never\" list:** actions the agent must never take (e.g. ask for a PIN, change a prescription, release a parcel without the receiver's code)."],
          constraints: ["**Every irreversible action needs an explicit confirmation.**", "At least one action must use **Level 3 (act + notify + undo)**, with a clear undo window.", "Every action must list the data accessed and a human fallback."],
          hints: ["Walk through your Module 1 dialogues and underline every verb the bot *does* (book, order, notify, remind…).", "Rate each with R-C-S, then assign a level. Write one sentence justifying it.", "Design confirmations using the \"show exactly what will happen\" pattern.", "Ask a friend to read each confirmation in 5 seconds and tell you what will happen. If they can't, simplify.", "Write the \"never\" list with your client hat on: *what would get us in the news for the wrong reasons?*"],
          submissionFormat: "The spec (Google Sheet or Notion table) plus a Figma link to the confirmation/undo/receipt designs.",
          rubric: [
            {
              "criterion": "Autonomy reasoning",
              "emerging": "Levels missing or arbitrary",
              "developing": "Levels assigned; reasoning thin",
              "proficient": "Every action has an R-C-S rating and justified level",
              "exemplary": "Trade-offs between speed and safety discussed; validated with a user or \"client\""
            },
            {
              "criterion": "Confirmation and undo design",
              "emerging": "No confirmations",
              "developing": "Confirmations vague or missing for some irreversible actions",
              "proficient": "Specific, scannable confirmations; working undo window; receipts",
              "exemplary": "Passes the 5-second test with real people; bilingual and accessible"
            },
            {
              "criterion": "Permissions and safety",
              "emerging": "Data access not considered",
              "developing": "Data listed but not minimised",
              "proficient": "Minimal data per action; human fallback for each; a clear \"never\" list",
              "exemplary": "Considers shared phones, third parties (receivers, family) and misuse scenarios"
            }
          ],
          stretch: `Add a "trust ladder": a design for how the agent could earn *more* autonomy over time (e.g. auto-reorder after 3 successful confirmed orders, only with opt-in).

**✅ Checkpoint 3:** inventory ☐ · spec ☐ · 3 confirmation designs ☐ · never list ☐ · submitted ☐`
        },
        reflect: ["Which action did you most want to automate, and why did (or didn't) you?", "How would you explain your autonomy choices to a sceptical SACCO chairperson?", "What could go wrong if a family member uses the same phone?"]
      }
    },
    {
      id: "04",
      title: "Edge Cases & Human Handoff Patterns",
      summary: "Edge Cases & Human Handoff Patterns",
      hours: 6.0,
      status: "published",
      content: {
        essentialQuestion: "What happens when the conversation goes wrong, and how do we hand over to a human without losing the user's trust?",
        objectives: ["Identify and prioritise edge cases using a structured method.", "Design repair strategies for misunderstanding (re-prompts, escalating help).", "Design for no-input, out-of-scope, abuse and system-failure situations.", "Design a graceful human handoff that passes context.", "Map the complete conversation flow, including recovery paths."],
        watch: [
          {
            "type": "video",
            "title": "Usability Heuristic 9: Help Users Recognize, Diagnose and Recover from Errors",
            "channel": "NNgroup",
            "url": "https://www.youtube.com/watch?v=cCun-ReLTFI",
            "length": "~2 min",
            "why": "The classic heuristic behind every good recovery path."
          },
          {
            "type": "video",
            "title": "Sorry, but your chatbot probably sucks  —  Humans Talking Agents",
            "channel": "Voiceflow",
            "url": "https://www.youtube.com/watch?v=jcSJlF0GhTI",
            "length": "~23 min",
            "why": "Practitioners on why so many chatbots frustrate customers."
          },
          {
            "type": "video",
            "title": "Don't let a broken chatbot ruin your customer's experience  —  Humans Talking Agents S02E01",
            "channel": "Voiceflow",
            "url": "https://www.youtube.com/watch?v=GTj-iycmN8A",
            "length": "~25 min",
            "why": "Failure, escalation and keeping customers' trust."
          },
          {
            "type": "video",
            "title": "How to build a call escalation AI phone agent in Voiceflow [Call Forwarding Tool]",
            "channel": "Voiceflow",
            "url": "https://www.youtube.com/watch?v=szqThBcOp0Y",
            "length": "~7 min *(optional)",
            "why": "A concrete look at how escalation to a human is built in a tool."
          },
          {
            "type": "reading",
            "title": "PAIR Guidebook, *Errors + Graceful Failure*",
            "channel": "Reading",
            "url": "https://pair.withgoogle.com/chapter/errors-failing/",
            "length": "—",
            "why": "Keep open while you work"
          }
        ],
        notes: `**1. Edge cases are the real product**

The happy path is maybe 60% of real conversations. The rest is typos, wrong numbers, angry users, half-answers, network drops, and requests nobody planned for. **Users judge your assistant by how it handles the hard moments.**

**2. A checklist for finding edge cases**

| Category | Dawa Refill examples | Mzigo Tracker examples |
|---|---|---|
| **No match** (didn't understand) | "Ile dawa ya sukari" (the user doesn't know the name) | "Mzigo ya Kamau" (no waybill) |
| **Invalid input** | A medicine not in their history | Waybill "KX-22" (too short) |
| **Out of scope** | "Is it OK to take this with alcohol?" | "What's the fare to Eldoret?" |
| **No input** | The user goes silent mid-order | The user doesn't reply about pickup |
| **Business exception** | Out of stock; the prescription has expired | The parcel is delayed or lost |
| **Emotional** | A worried, urgent user | An angry user ("Mmeniibia!" — "You've robbed me!") |
| **Safety / abuse** | Requests for someone else's medication; self-harm signals | Threats, insults, fraud attempts |
| **System failure** | Pharmacy system down | Tracking database unreachable |
| **Context** | A shared phone (a different family member) | The receiver asks instead of the sender |

Prioritise by **frequency × harm**: fix the common ones and the dangerous ones first.

**3. Repair: escalating help**

When the bot doesn't understand, don't repeat the same "Sorry, I didn't get that." **Escalate the help**:
1. **First miss:** rephrase and narrow it down. "Sorry, which medicine? You can type the name or choose: [Amlodipine] [Metformin] [Something else]"
2. **Second miss:** give an example and options. "You can find the name on the box or your last receipt, e.g. *Metformin 500mg*. Or send a photo of the box 📷"
3. **Third miss:** **offer a human**. "Let me get a pharmacist to help you. 👩🏾‍⚕️"

Never loop more than twice without offering a person.

**4. Special cases**
- **Out of scope:** say what you *can't* do, why if helpful, and where to go. "I can't give medical advice, but a pharmacist can answer that. Shall I connect you?"
- **No input:** after a sensible time, send one gentle nudge ("Still there? Your order is saved"), then stop. Don't spam.
- **Angry users:** acknowledge without being defensive, act quickly, and offer a human early. "Pole sana for the delay. Let me check right away."
- **Safety signals:** for health emergencies or self-harm signals, *stop the flow* and give emergency contacts and a human. (Ask your client for the correct local numbers and verify them.)
- **System failure:** be honest and give a fallback. "Our tracking system is down right now. Call the Nakuru office on [number], or I'll message you when it's back."

**5. The human handoff, done well**

| Do | Don't |
|---|---|
| Tell the user a person is taking over, and *when* ("within 15 min, 8am–8pm") | Silently stop replying |
| Pass the context (summary, waybill or order, what was tried) to the agent | Make the user repeat everything |
| Offer an out-of-hours alternative (call-back, office number) | Leave people waiting overnight with no info |
| Let users ask for a human any time ("Type AGENT or MTU") | Hide the option after 5 loops |
| Close the loop afterwards ("Was your issue solved?") | End abruptly |

**Handoff summary for staff (example):**
> *Customer: +2547XX… · Waybill KX-2231 · Issue: parcel shows "delivered" but customer says not received · Tried: confirmed receiver name · Mood: frustrated · Language: Swahili/English*

**Common mistakes**
- The "I didn't understand" loop.
- The handoff black hole: "An agent will contact you" with no time and no follow-up.
- Treating angry users with cheerful emojis.
- No plan for when the AI or the backend system is down.

**Glossary**
- **Edge case:** a less common or unexpected situation the design must handle.
- **No-match:** the system can't interpret the user's input.
- **Repair / re-prompt:** strategies to get a conversation back on track.
- **Escalating help:** each retry gives more support, ending with a human.
- **Handoff:** transferring a conversation to a human agent, with context.`,
        quickCheck: [
          {
            "q": "What's the maximum number of failed attempts before offering a human?",
            "a": "Two. Offer a person on the third attempt (or earlier for urgent or emotional situations)."
          },
          {
            "q": "Name two edge cases that are about *context* rather than input.",
            "a": "For example: a shared phone with a different family member, the receiver asking instead of the sender, or a returning user with an old order."
          },
          {
            "q": "What three things should a handoff message tell the user?",
            "a": "That a person is taking over, when they'll reply (with hours), and an alternative if out of hours. Ideally, also that they won't need to repeat themselves."
          },
          {
            "q": "How should the bot respond to \"Mmeniibia!\" (\"You've robbed me!\")?",
            "a": "Acknowledge and apologise without being defensive (\"Pole sana…\"), act quickly (check the status), and offer a human early."
          },
          {
            "q": "Why is \"frequency × harm\" useful?",
            "a": "It helps you prioritise: fix the common problems and the dangerous ones first."
          }
        ],
        challenge: {
          scenario: "The client says: *\"Our biggest fear is the bot making customers angrier than before.\"* Show them it won't.",
          build: "Complete the 4 deliverables below.",
          deliverables: ["**An edge-case inventory:** at least 12 edge cases across at least 6 categories, each scored on frequency × harm.", "**A complete conversation flow** (FigJam): the happy path plus your **top 6 edge cases**, with repair paths, marking confirmations (orange), handoffs (purple) and safety exits (red).", "**Sample dialogues** for 4 edge cases, including one angry user and one system failure (bilingual where natural).", "**A handoff design:** the user-facing messages (in hours / out of hours) *and* the staff-facing context summary."],
          constraints: ["No loop may repeat more than twice without offering a human.", "A path to a human must be reachable from **every** point in the flow.", "At least one **safety exit** (e.g. a health emergency or a fraud attempt)."],
          hints: ["Use the checklist above to brainstorm, aiming for 20 ideas, then score and pick.", "Write the escalating-help messages (miss 1, miss 2, miss 3) once, then reuse the pattern.", "Build the flow in FigJam: start with the happy path in the middle and branch the edge cases outward.", "Role-play the angry-user dialogue with a friend who's told to be genuinely annoyed.", "Show the staff summary to someone who has worked in customer service. Would it help them?"],
          submissionFormat: "A FigJam flow link, the Dialogue Pack v3 (Notion/PDF) with the edge-case dialogues, and the handoff designs.",
          rubric: [
            {
              "criterion": "Edge-case coverage",
              "emerging": "Fewer than 6 edge cases",
              "developing": "6–11 edge cases, or few categories",
              "proficient": "12+ edge cases across 6+ categories, prioritised",
              "exemplary": "Edge cases sourced from real users or staff; includes subtle context cases"
            },
            {
              "criterion": "Repair and recovery",
              "emerging": "Dead ends or \"I didn't understand\" loops",
              "developing": "Some repair; inconsistent",
              "proficient": "Escalating help; max two loops; human always reachable; safety exit",
              "exemplary": "Recovery paths tested with people; the tone fits emotional states"
            },
            {
              "criterion": "Handoff quality",
              "emerging": "No handoff",
              "developing": "Handoff exists but no timing or context",
              "proficient": "Clear user messages (in and out of hours) plus a useful staff summary",
              "exemplary": "Closes the loop; validated by a customer-service person"
            },
            {
              "criterion": "Flow clarity",
              "emerging": "Unreadable",
              "developing": "Readable but incomplete",
              "proficient": "Complete, colour-coded and easy to follow",
              "exemplary": "Developer-ready, with a legend and states"
            }
          ],
          stretch: `Design a "frustration detector": the signals (repeated messages, caps, certain words in English, Swahili or Sheng) that trigger an early handoff, and test it on 10 messages.

**✅ Checkpoint 4:** inventory ☐ · flow ☐ · 4 edge dialogues ☐ · handoff design ☐ · submitted ☐`
        },
        reflect: ["Which edge case would have hurt users most if you hadn't designed for it?", "How does your handoff respect the human staff as well as the customer?", "Did writing the angry-user dialogue change how you think about tone?"]
      }
    },
    {
      id: "05",
      title: "Prototype in Voiceflow/Botpress + Dialogue Testing with LLMs",
      summary: "Prototype in Voiceflow/Botpress + Dialogue Testing with LLMs",
      hours: 7.0,
      status: "published",
      content: {
        essentialQuestion: "How do we turn scripts and flows into something people can actually talk to, and break it before users do?",
        objectives: ["Build a working conversational prototype in Voiceflow *or* Botpress.", "Combine structured flow steps (buttons, confirmations) with AI-generated responses safely.", "Use an LLM to simulate tricky users and stress-test your agent.", "Understand the limits of \"synthetic users\" and when you need real people.", "Keep a structured test log and iterate."],
        watch: [
          {
            "type": "video",
            "title": "Get Started with Voiceflow (2026)",
            "channel": "Voiceflow",
            "url": "https://www.youtube.com/watch?v=1Fn-ajfdQ0Y",
            "length": "~15 min",
            "why": "The official beginner walkthrough, if you choose Voiceflow."
          },
          {
            "type": "video",
            "title": "Build a Customer Support Chatbot in 10 Minutes (Botpress Tutorial)",
            "channel": "Botpress",
            "url": "https://www.youtube.com/watch?v=qDufkFpw-V8",
            "length": "~15 min",
            "why": "The official quick build, if you choose Botpress."
          },
          {
            "type": "video",
            "title": "Getting Started: Botpress Studio",
            "channel": "Botpress",
            "url": "https://www.youtube.com/watch?v=ryNPbXV135s",
            "length": "~1.5 min *(optional)",
            "why": "A very quick tour of the Botpress interface."
          },
          {
            "type": "video",
            "title": "Synthetic Users: AI \"Participants\"",
            "channel": "NNgroup",
            "url": "https://www.youtube.com/watch?v=q_fdcbwHJKQ",
            "length": "~4 min",
            "why": "Why AI-simulated users are useful for stress tests but can't replace real people."
          },
          {
            "type": "reading",
            "title": "Voiceflow docs: · Botpress quickstart",
            "channel": "Reading",
            "url": "https://docs.voiceflow.com/",
            "length": "—",
            "why": "Keep open while you work"
          }
        ],
        notes: `**1. Choosing your tool**

| | **Voiceflow** | **Botpress** |
|---|---|---|
| Feels like | A visual canvas of blocks: very designer-friendly | A visual studio plus knowledge bases and AI "autonomous" nodes |
| Good for | Mapping flows exactly like your FigJam diagram | Quickly adding AI answers from documents; WhatsApp integration |
| Free plan | Yes (limits apply; check the current plan) | Yes (limits and AI usage credits apply; check the current plan) |

Either works for this course. **Choose the one that feels easier after 20 minutes of playing.**

**2. Structure where it matters, AI where it helps**

The best prototypes **mix**:
- **Structured steps** (fixed messages, buttons, conditions) for anything risky: **confirmations, payments, prescriptions, data collection, handoffs**. These must behave the same way every time.
- **AI-generated responses** (an LLM step with your persona prompt) for flexible tasks: understanding messy input ("ile dawa ya sukari"), answering FAQs from a knowledge base, rephrasing politely.

> **Rule:** *the AI can understand and talk; the structured flow decides and acts.* For example, the AI extracts "Metformin" from a messy message, but the order confirmation is a fixed, structured message with buttons.

**3. Building it, step by step**

1. **Start from your flow** (Module 4). Build the happy path first: greeting → identify the need → gather info → confirm → receipt.
2. **Add variables:** \`{medicine}\`, \`{qty}\`, \`{branch}\` or \`{waybill}\`, \`{receiver_phone}\`. Use made-up test data.
3. **Add an AI step** for understanding input. Give it your persona, scope and language rules (from Modules 1–2) and ask it to extract the key fields.
4. **Add the knowledge base** (optional): a short, fictional FAQ document (opening hours, delivery areas, fees).
5. **Build the repair paths:** no-match → re-prompt → examples → human.
6. **Add the handoff:** in a prototype, this can be a message plus a "staff summary" shown at the end.
7. **Test in the built-in chat or simulator** after every few steps.

**4. Dialogue testing with LLMs: your stress-test crew**

You can ask ChatGPT, Claude or Gemini to **play difficult users** and throw them at your prototype. Example prompt:

\`\`\`
You are role-playing a customer of a Nairobi pharmacy chatting on WhatsApp.
Persona: 58-year-old woman in Thika, mixes Swahili and English, types short
messages with some spelling mistakes, doesn't know her medicine's exact name,
a bit impatient. Goal: reorder her diabetes medicine for pickup tomorrow.
Write ONLY your next message each time I paste the bot's reply. Stay in character.
\`\`\`

Copy each persona message into your prototype, paste the bot's reply back to the LLM, and continue. Create **5 personas**: an impatient elderly user, a Sheng-speaking young user, an angry customer, someone asking off-topic questions, and someone trying to misuse the bot (e.g. asking for someone else's order).

**5. Know the limits of synthetic users**

LLM "users" are great for **finding breaks fast**, but they:
- are often too polite, too logical, or write unnaturally good Swahili;
- don't experience real emotions, data costs or bad network;
- can't tell you whether they'd *trust* or *use* the product.

So **always test with real people too**: at least 2 this week and more in Module 6.

**6. The test log**

| Test ID | Persona / tester | Scenario | What broke | Severity (1–3) | Fix | Re-tested? |
|---|---|---|---|---|---|---|

Fix the severity-3 issues first, and keep a version number on your prototype (v0.1, v0.2…).

**Common mistakes**
- Letting the AI decide on and perform risky actions without a structured confirmation.
- Building everything before testing anything.
- Testing only with LLM personas.
- Using real customer data or phone numbers in test data.
- Forgetting to re-test after a fix.

**Glossary**
- **Block / node:** one step in a visual conversation builder.
- **Variable:** a stored value (e.g. a waybill number) used later in the conversation.
- **Knowledge base:** documents the AI can draw answers from.
- **Synthetic user:** an AI that simulates a user for testing.
- **Simulator:** the built-in chat window for testing your agent.`,
        quickCheck: [
          {
            "q": "Which parts of your agent should be structured rather than AI-generated?",
            "a": "Confirmations, payments, prescriptions and orders, data collection, handoffs: anything risky or that must be consistent."
          },
          {
            "q": "Why give the LLM tester a detailed persona?",
            "a": "So it behaves like a realistic, specific (and difficult) user rather than a generic polite one."
          },
          {
            "q": "Name two limitations of synthetic users.",
            "a": "Any two: they're too polite or logical, they write unnaturally, they lack real emotions and context (network, data cost), and they can't judge trust or real intent to use."
          },
          {
            "q": "What's the rule \"AI talks, flow acts\" protecting against?",
            "a": "Unpredictable AI outputs triggering risky, irreversible actions without a consistent, explicit confirmation."
          },
          {
            "q": "What should you do right after fixing a severity-3 issue?",
            "a": "Re-test that scenario (and ideally related ones) to confirm the fix works and didn't break anything else."
          }
        ],
        challenge: {
          scenario: "The client wants to *talk* to the assistant before Module 6's real-user tests.",
          build: "Complete the 4 deliverables below.",
          deliverables: ["**A working prototype** in Voiceflow or Botpress covering: the happy path; at least **3 edge cases** with repair; **1 confirmation** for an irreversible action; the **human handoff**; and **language mirroring** for English, Swahili and mixed input.", "**An LLM stress test:** 5 synthetic personas × 1 conversation each, plus **2 real people** testing it.", "**A test log** with at least 10 issues found, severity rated, and the top 3 fixed and re-tested.", "**A short changelog** (v0.1 → v0.2 → …)."],
          constraints: ["Risky actions must go through a **structured confirmation step**, never only an AI reply.", "Only fictional test data (names, phone numbers, medicines, waybills).", "Stay within the free plan (no paid upgrades needed)."],
          hints: ["(1 hr) Learn your chosen tool with its official video and build a \"hello world\" agent.", "(2–3 hrs) Build the happy path from your flow, and test it after every few blocks.", "(1 hr) Add the edge cases, repair and handoff.", "(1 hr) Run the 5 synthetic persona conversations and log the issues.", "(1 hr) Test with 2 real people (share the prototype link or sit with them).", "(1 hr) Fix the top 3, re-test, and update the changelog."],
          submissionFormat: `A prototype share link (or a screen recording if your plan doesn't allow sharing), plus the test log (Google Sheets) and changelog.`,
          rubric: [
            {
              "criterion": "Prototype functionality",
              "emerging": "Doesn't run, or happy path only partly works",
              "developing": "Happy path works; edge cases or handoff missing",
              "proficient": "Happy path, 3+ edge cases, confirmation, handoff and language mirroring all work",
              "exemplary": "Robust under stress tests; well-structured and documented"
            },
            {
              "criterion": "Safe architecture",
              "emerging": "AI performs risky actions directly",
              "developing": "Some structured steps, inconsistently applied",
              "proficient": "All risky actions use structured confirmations; AI used for understanding and talking",
              "exemplary": "Clear documentation of what's AI vs structured, and why"
            },
            {
              "criterion": "Testing rigour",
              "emerging": "Little or no testing",
              "developing": "Synthetic personas only",
              "proficient": "5 synthetic plus 2 real testers; 10+ issues logged; top 3 fixed and re-tested",
              "exemplary": "Testing reveals non-obvious issues; fixes verified with real users"
            }
          ],
          stretch: `Connect the prototype to a WhatsApp test number (see Module 6's Botpress video), or add voice-note handling.

**✅ Checkpoint 5:** prototype ☐ · 5 personas ☐ · 2 real testers ☐ · test log ☐ · changelog ☐ · submitted ☐`
        },
        reflect: ["What broke in testing that you'd never have caught by reading your flow?", "How did synthetic personas differ from the real people who tested your bot?", "Where did you choose structure over AI, and was it the right call?"]
      }
    },
    {
      id: "06",
      title: "Ship Challenge: Pharmacy Refill or SACCO Parcel Tracker Agent",
      summary: "Ship Challenge: Pharmacy Refill or SACCO Parcel Tracker Agent",
      hours: 7.0,
      status: "published",
      content: {
        essentialQuestion: "Is our agent ready for real people, and can we prove it?",
        objectives: ["Run usability tests of a conversational agent with real target users.", "Measure conversation quality using a simple scorecard.", "Make final improvements based on evidence.", "Package a professional dialogue pack and autonomy/permissions spec.", "Present the agent in a short, compelling demo."],
        watch: [
          {
            "type": "video",
            "title": "How To Setup a Mobile Usability Test",
            "channel": "NNgroup",
            "url": "https://www.youtube.com/watch?v=NdqTbpyvaIg",
            "length": "~3 min",
            "why": "Practical setup tips for testing on phones."
          },
          {
            "type": "video",
            "title": "Wizard of Oz Method in UX",
            "channel": "NNgroup",
            "url": "https://www.youtube.com/watch?v=gDsb0vW_LM8",
            "length": "~4 min",
            "why": "A backup method if part of your agent isn't built: a human plays that part."
          },
          {
            "type": "video",
            "title": "How to Connect your AI Chatbot to WhatsApp [2026]",
            "channel": "Botpress",
            "url": "https://www.youtube.com/watch?v=Fs6dIxgEKoY",
            "length": "~5 min *(optional)",
            "why": "If you want to test on real WhatsApp (connecting requires a Meta business setup)."
          },
          {
            "type": "reading",
            "title": "Microsoft HAX Guidelines, used as your final self-audit checklist",
            "channel": "Reading",
            "url": "https://www.microsoft.com/en-us/haxtoolkit/ai-guidelines/",
            "length": "—",
            "why": "Keep open while you work"
          }
        ],
        notes: `**1. Testing conversational agents with real people**

Recruit **5 real target users** (people who reorder medicine, or who send or receive parcels by matatu). Sessions take 15–25 minutes, in person or over a video call with screen share.

- **Give scenarios, not scripts:** "Your blood pressure tablets are running out and you want to pick them up tomorrow. Use this chat to sort it out." Don't tell them what words to type.
- **Watch and stay quiet.** Note where they hesitate, retype, or look confused.
- **After the task, ask:** *Did you get what you needed? Was anything confusing? Would you trust this to place a real order? Did it feel like it understood you?*
- **Testing on real WhatsApp** is ideal but optional. Your tool's web chat on the tester's phone is fine.

**2. A simple conversation scorecard**

Score every test conversation:

| Measure | How to score |
|---|---|
| **Task success** | Completed / completed with help / failed |
| **Turns to complete** | Count the user messages (fewer is usually better) |
| **No-match rate** | The share of user messages the bot didn't understand |
| **Language fit** | Did the bot reply in the right language? (Yes/No for each turn) |
| **Handoff appropriate?** | Was a human offered when needed, and not when it wasn't? |
| **Trust rating** | Ask: "How much would you trust this to do it for real?" (1–5) |
| **Safety** | Any unsafe response or action? (It must be zero) |

Five users won't give you statistics, but they **will** show you patterns. Present the numbers alongside quotes.

**3. Final iteration: fix what matters**

Rank the issues by **frequency × harm** (just like Module 4). Fix the top issues, re-test with at least 1–2 people, and record the before/after.

**4. Packaging your work**

Your final package is what a client or employer will see:

- **Dialogue pack:** persona, language strategy and glossary, happy-path and edge-case sample dialogues, repair patterns, and handoff messages.
- **Autonomy and permissions spec:** the updated table, the "never" list, and your design rationale.
- **Flow diagram:** the final, colour-coded version.
- **Test report:** method, scorecard results, top findings and the changes made.
- **Demo video (3 minutes):** the problem (30 sec) → the happy path (60 sec) → an edge case plus handoff (60 sec) → what you learned (30 sec).

**5. A final self-audit with the HAX guidelines**

Before you ship, check at least these: **G1** (is it clear what it can do?), **G2** (how well?), **G9** (easy correction?), **G10** (scopes services when in doubt?), **G11** (explains why?), **G16** (conveys the consequences of actions?), **G17** (global controls like STOP?).

**Common mistakes**
- Testing with only 1–2 people, or with friends who aren't target users.
- Presenting only the happy path in the demo.
- A spec that doesn't match what the prototype actually does.
- No before/after evidence for changes.

**Glossary**
- **Scorecard:** a small set of measures used to judge quality consistently.
- **No-match rate:** the percentage of user messages the system failed to understand.
- **Task success:** whether the user achieved their goal.
- **Self-audit:** checking your own work against a standard (e.g. HAX).`,
        quickCheck: [
          {
            "q": "Why give testers scenarios rather than scripts?",
            "a": "Scripts make people type *your* words. Scenarios reveal how real users naturally phrase things."
          },
          {
            "q": "Name four measures on the conversation scorecard.",
            "a": "Any four: task success, turns to complete, no-match rate, language fit, appropriate handoff, trust rating, safety."
          },
          {
            "q": "What's the acceptable number of unsafe responses?",
            "a": "**Zero.** Any unsafe response must be fixed before shipping."
          },
          {
            "q": "What should the 3-minute demo include besides the happy path?",
            "a": "An edge case with recovery and a human handoff, plus what you learned."
          },
          {
            "q": "Which HAX guideline asks you to convey the consequences of user actions?",
            "a": "**G16**: convey the consequences of user actions."
          }
        ],
        challenge: {
          scenario: `It's launch-readiness day. *Afya Bora Pharmacy* (Dawa Refill) or *Rift Shuttle SACCO* (Mzigo Tracker) will decide whether to fund a real pilot based on your package.`,
          build: "Complete the 5 deliverables below.",
          deliverables: ["**A clickable or working agent prototype** (final version) with a share link or screen recording.", "**A dialogue pack** (final): persona, language strategy and glossary, 6+ sample dialogues (happy path plus at least 5 edge cases, at least 2 in Swahili or code-switched), repair patterns and handoff messages.", "**An autonomy and permissions spec** (final), with the \"never\" list.", "**A test report:** 5 real target users, scorecard results, top findings, changes made and a re-test.", "**A 3-minute demo video**, plus a short **HAX self-audit** (7+ guidelines)."],
          constraints: ["Test with **5 real target users**, not classmates or relatives who don't fit the profile.", "Must handle **code-switching**, offer a **path to a human** from anywhere, and **confirm every irreversible action**.", "**Zero unsafe responses** in your final test round.", "Fictional data only."],
          hints: ["**Day 1:** recruit 5 testers (try a chemist, a matatu stage, your chama or church group) and prepare the scenarios and consent script.", "**Days 2–3:** run the tests and fill in the scorecard straight afterwards.", "**Day 4:** prioritise, fix the top issues and re-test with 1–2 people.", "**Day 5:** update the dialogue pack, spec and flow so they match the final prototype.", "**Day 6:** record the demo, do the HAX self-audit, and submit.", "**Day 7:** post your project with **#SunkovaBuilds**, and request 2 peer reviews."],
          submissionFormat: `One Notion page or PDF portfolio package linking to the prototype, FigJam flow, Google Sheets test log/scorecard and demo video.`,
          rubric: [
            {
              "criterion": "Naturalness and language",
              "emerging": "Robotic; English-only",
              "developing": "Natural in one language; code-switching weak",
              "proficient": "Natural, concise, consistent persona; handles English, Swahili and mixed input",
              "exemplary": "Validated by diverse real users; feels authentically local"
            },
            {
              "criterion": "Edge-case and recovery design",
              "emerging": "Happy path only",
              "developing": "Some edge cases; loops or dead ends remain",
              "proficient": "5+ edge cases with escalating help; human reachable everywhere; safety exit",
              "exemplary": "Recovery validated in testing; handles emotional and context cases gracefully"
            },
            {
              "criterion": "Trust and safety (autonomy spec)",
              "emerging": "No spec or confirmations",
              "developing": "Spec incomplete; some irreversible actions unconfirmed",
              "proficient": "Complete spec; every irreversible action confirmed; undo and receipts; \"never\" list; zero unsafe responses",
              "exemplary": "Autonomy choices evidenced by testing; privacy and shared-phone risks addressed"
            },
            {
              "criterion": "Prototype fidelity",
              "emerging": "Not clickable or doesn't run",
              "developing": "Works on the happy path only",
              "proficient": "Working prototype matching the spec and dialogue pack",
              "exemplary": "Polished, robust, possibly on real WhatsApp; easy for a client to try"
            },
            {
              "criterion": "Testing and evidence",
              "emerging": "Fewer than 5 users or no scorecard",
              "developing": "5 users but weak method or no iteration",
              "proficient": "5 target users, scorecard, prioritised fixes, re-test",
              "exemplary": "Clear before/after improvement; insights that would convince a client to fund a pilot"
            },
            {
              "criterion": "Communication",
              "emerging": "Disorganised package",
              "developing": "Complete but hard to follow",
              "proficient": "Clear package and a 3-minute demo showing a happy path, an edge case and the handoff",
              "exemplary": "Portfolio-grade: compelling story, crisp visuals, honest about limitations"
            }
          ],
          stretch: null
        },
        reflect: ["What's the single biggest change between your Module 1 dialogues and your final agent?", "Would you trust your agent with your own mother's medicine order or your own parcel? What would it take?", "What's the next skill you want to build: live AI prototyping, evals, or responsible AI?"]
      }
    }
  ],

  capstone: null
};
