# Designing for Probabilistic Systems

**Sunkova Academy · AI Design Courses · Course 03**
*Tear down AI products against the PAIR and HAX guidelines, then redesign them for clarity and recovery.*

| | |
|---|---|
| **Format** | Self-paced (online), with optional peer reviews |
| **Duration** | 4 weeks · 5–7 hours per week (about 22–26 hours total) |
| **Level** | Beginner |
| **Structure** | 4 modules, one per week; Module 4 is the redesign challenge |
| **You leave with** | A 10–15 slide teardown deck with 5 redesign recommendations for a bank or fintech chatbot used in Kenya |

---

## Welcome

Karibu! Ask a bank chatbot the same question twice and you might get two different answers. Ask it something slightly unusual ("Nimetuma pesa kwa number mbaya, nifanye nini?", meaning "I've sent money to the wrong number, what do I do?") and it might confidently tell you something unhelpful or even wrong. That's not just bad luck. It's what happens when **probabilistic** technology is designed as if it were **deterministic**.

This short course gives you the mindset and the two most respected toolkits in AI UX, **Google's People + AI Guidebook (PAIR)** and **Microsoft's Guidelines for Human-AI Interaction (HAX)**, and then has you use them on a product Kenyans rely on every day: a **bank or fintech chatbot**. You'll finish with a professional teardown deck you can show employers, pitch to a fintech, or use to start your AI design portfolio.

### Who this course is for
- Beginners and career switchers curious about AI product design.
- UX/UI designers, researchers, product managers, QA testers and customer-experience staff, especially in banking, fintech, SACCOs and telcos.
- Anyone who wants a solid, practical foundation before taking Sunkova's flagship *AI Product Design Foundations*.

### Prerequisites
- Comfort with a computer, a smartphone and basic slide tools (Google Slides, Canva, Figma or PowerPoint).
- **No coding and no design experience required.** Basic UX knowledge helps but isn't needed.
- Access to at least one bank, SACCO, telco or fintech chatbot (most are on WhatsApp or in-app), plus a free account on a public AI chatbot (ChatGPT, Gemini or Claude).

### Course outcomes
By the end, you will be able to:
1. Explain clearly why AI products behave differently from traditional software, and what that means for design.
2. Use the PAIR Guidebook's chapters and patterns to analyse an AI product.
3. Apply all 18 HAX guidelines to evaluate an AI experience.
4. Write evidence-based findings that link a screenshot to a guideline and a user impact.
5. Produce prioritised, sketched redesign recommendations for clarity and recovery.

### The Big Idea, the Essential Question, the Course Challenge

| | |
|---|---|
| **Big Idea** | **When the product can be wrong, honesty and recovery *are* the design.** |
| **Essential Question** | *What changes when the product can be "wrong", and how do we design for it?* |
| **Course Challenge** | Tear down a bank or fintech chatbot used in Kenya against the PAIR and HAX guidelines, and deliver a 10–15 slide deck with **5 redesign recommendations** that make it clearer, more honest and easier to recover from. |

In Module 1 you choose your chatbot and start an evidence log. Modules 2 and 3 add PAIR and HAX analysis. Module 4 turns everything into your redesign deck.

---

## How learning works (self-paced Challenge-Based Learning)

Each module follows the same cycle:
1. **Engage:** read the Essential Question and the challenge.
2. **Investigate:** watch the videos, read the notes, do the quick check, and keep your **Evidence Log** (a Google Doc, Notion page or FigJam board with screenshots and notes).
3. **Act:** complete the build challenge.
4. **Reflect:** answer the reflection prompts.

### The Sunkova 4-level rubric

| Level | What it means |
|---|---|
| **1 · Emerging** | Incomplete. The core requirement isn't met yet. |
| **2 · Developing** | It works, but there are gaps in quality or reasoning. |
| **3 · Proficient** | Meets the brief, with sound reasoning and documentation. |
| **4 · Exemplary** | Goes beyond the brief: user-validated and portfolio-grade. |

Reach **Proficient** on every criterion of the Module 4 challenge to earn the course certificate. Each module also earns a badge.

### Suggested pacing and checkpoints

| Week | Module | Est. hours | Checkpoint / badge |
|---|---|---|---|
| 1 | 1 · Deterministic vs probabilistic UX | 5–6 | Variability Log (20+ tests) · *Probabilistic Thinker* |
| 2 | 2 · PAIR Guidebook deep dive | 5–7 | PAIR analysis board · *PAIR Practitioner* |
| 3 | 3 · Microsoft HAX guidelines workshop | 5–7 | HAX audit sheet (18 guidelines) · *HAX Auditor* |
| 4 | 4 · Redesign challenge | 6–7 | Teardown deck + 5 recommendations · *Course certificate* |

---

## Tools to set up (all free)

| Tool | Use |
|---|---|
| **Google Slides, Canva, Figma or PowerPoint** | Your teardown deck |
| **FigJam** (free) or **Google Docs / Notion** | Evidence Log, analysis boards |
| **Google Sheets** | Variability Log, HAX audit sheet |
| **Your phone's screenshot and screen recorder** | Capturing evidence |
| **ChatGPT, Gemini or Claude** (free tiers) | Comparison testing |

**Safety rules for this course**
- **Never share your PIN, password, OTP or full account details** with any chatbot, even for testing. Use general questions only.
- **Blur or crop** your phone number, name, balances and transaction details from every screenshot.
- Don't attempt to trick, hack or overload any real chatbot. You're evaluating the experience, not testing its security.

**Core references (bookmark these)**
- Google PAIR, *People + AI Guidebook*: https://pair.withgoogle.com/guidebook/ (patterns: https://pair.withgoogle.com/guidebook/patterns)
- Microsoft, *HAX Toolkit*: https://www.microsoft.com/en-us/haxtoolkit/ · Guidelines: https://www.microsoft.com/en-us/haxtoolkit/ai-guidelines/ · Design Library: https://www.microsoft.com/en-us/haxtoolkit/design-library/
- The original research paper, Amershi et al. (2019), *Guidelines for Human-AI Interaction* (PDF): https://www.microsoft.com/en-us/research/uploads/prod/2019/01/Guidelines-for-Human-AI-Interaction-camera-ready.pdf

---

# Module 1 · Deterministic vs Probabilistic UX

**Week 1 · ~5–6 hours · Badge: Probabilistic Thinker**

### Essential Question
> **What changes when the product can be "wrong"?**

### Learning objectives
1. Explain, in plain words, how a large language model produces answers.
2. Compare deterministic and probabilistic products using everyday Kenyan examples.
3. Recognise hallucinations, inconsistency and over-confidence in real chatbots.
4. Explain mental models, and why calibrated trust matters.
5. Collect structured evidence of AI behaviour in a Variability Log.

### Watch

| # | Video | Channel | Length | Why watch |
|---|---|---|---|---|
| 1 | [Large Language Models explained briefly](https://www.youtube.com/watch?v=LPZh9BOjkQs) | 3Blue1Brown | ~8 min | A beautifully clear visual explanation of how chatbots predict text. |
| 2 | [AI Literacy](https://www.youtube.com/watch?v=73dqaOS5Bio) | NNgroup | ~5 min | What people need to understand about AI to use it well. |
| 3 | [ELIZA Effect: Why We Fall in Love with AI](https://www.youtube.com/watch?v=b_m5vPwfPdI) | NNgroup | ~4 min | Why people over-trust chatbots that sound human. |
| 4 | [[1hr Talk] Intro to Large Language Models](https://www.youtube.com/watch?v=zjkBMFhNj_g) | Andrej Karpathy | ~1 hr *(optional deep dive)* | A respected AI researcher explains LLMs for a general audience. Great if you want to go further. |

**Reading:** NN/g, *AI Hallucinations: What Designers Need to Know*: https://www.nngroup.com/articles/ai-hallucinations/

### Learn

**1. Two kinds of software**

**Deterministic** software follows fixed rules: the same input always gives the same output. Dial `*334#`, choose "Balance", enter your PIN, and you get your balance. Every time, the same way. If something fails, the system knows exactly what failed ("Wrong PIN").

**Probabilistic** software, like AI, works on *likelihoods*. A large language model (LLM) has learned patterns from huge amounts of text. When you ask it something, it predicts, one piece at a time, which words are most likely to come next. It doesn't "look up" a fact in a database unless the product is specifically built to do so, and even then, it may summarise wrongly.

**2. What that means in practice**

| Behaviour | What you'll see | Kenyan example |
|---|---|---|
| **Variability** | The same question gets different answers | Ask "How do I reverse an M-Pesa transaction?" three times and get three slightly different sets of steps |
| **Hallucination** | Fluent, confident, false information | The bot invents a short code, a fee or a branch that doesn't exist |
| **Over-confidence** | No signal of doubt, even when wrong | "Your loan limit is KES 5,000" when it can't actually see your account |
| **Sensitivity to wording** | Small changes in phrasing change the answer | "Fuliza charges" vs "Fuliza fees" vs "bei ya Fuliza" |
| **Language gaps** | Better in English than in Swahili or Sheng | Correct steps in English; vague or wrong in Swahili |
| **Scope confusion** | It answers things it shouldn't | A bank bot giving investment or medical advice |

**3. Designing for a range, not a single outcome**

In deterministic design, you design *the* screen for each state. In probabilistic design, you design for a **range of possible outputs**, from excellent to harmful. That means asking:
- What does a *great* answer look like? An *acceptable* one? A *harmful* one?
- How will the user **know** which one they got?
- What can they **do** if it's wrong (correct, retry, reach a human)?

**4. Mental models and calibrated trust**

A **mental model** is what the user *believes* about how the product works. Common wrong beliefs:
- "The bot can see my account." (It often can't.)
- "It's a real person typing." (The ELIZA effect.)
- "If it sounds sure, it's right."

When mental models are wrong, people **over-trust** (and act on wrong information, which is dangerous with money) or **under-trust** (and abandon a useful tool). Good AI design aims for **calibrated trust**: people trust the AI exactly as much as it deserves, for each kind of task.

**5. Collecting evidence: the Variability Log**

To design for probabilistic behaviour, you need to *see* it. A Variability Log records repeated tests:

| # | Prompt (exact words) | Language | Try 1 summary | Try 2 summary | Try 3 summary | Consistent? | Correct? (how verified) | Confidence shown? | Notes |
|---|---|---|---|---|---|---|---|---|---|

**Verify correctness** against official sources, such as the bank's or telco's website, terms and published tariffs. Don't assume.

**Common mistakes**
- Testing each question once (you'll miss the variability).
- Assuming an answer is right because it sounds professional.
- Only testing in English.
- Sharing personal financial details while testing. **Don't.**

**Glossary**
- **Deterministic:** same input, same output, every time.
- **Probabilistic:** outputs are based on likelihoods and can vary.
- **LLM:** a large language model, the text-predicting AI behind most chatbots.
- **Hallucination:** a confident but false AI output.
- **Mental model:** a user's belief about how a system works.
- **Calibrated trust:** trust that matches the system's actual reliability.

### Quick check

1. Is the M-Pesa USSD menu deterministic or probabilistic? Why?
2. What's a hallucination? Give a fintech example.
3. Why should you ask the same question three times when testing?
4. Name two wrong mental models users might have about a bank chatbot.
5. What's "calibrated trust"?

<details>
<summary><strong>Show answers</strong></summary>

1. Deterministic. It follows fixed rules and menus, and the same input gives the same result.
2. A confident but false output. For example, the bot invents a fee, a short code or a policy that doesn't exist.
3. To see whether the answers vary (variability), and how much.
4. Any two: "It can see my account", "It's a real person", "If it sounds sure, it's correct", "It knows the latest fees and policies".
5. Trust that matches how reliable the system actually is, for that task.

</details>

### Challenge: The Variability Log

**Scenario.** *KaziPesa*, a (fictional) Nairobi fintech, is about to launch its own AI assistant. Before designing it, their team wants evidence of how existing AI assistants used in Kenya actually behave.

**What to build**
1. **Choose your chatbot:** a bank, SACCO, telco or fintech chatbot that's available in Kenya (on WhatsApp, a website or in-app). This will be your **teardown product for the whole course**. Also pick a public AI chatbot (ChatGPT, Gemini or Claude) for comparison.
2. **A Variability Log** of at least **20 tests**: 10 prompts × at least 2 tries each on your chosen chatbot, *plus* 5 of those prompts on the public chatbot for comparison.
3. **A one-page summary:** the 3 most important behaviours you observed (e.g. "Inconsistent fee information"), with evidence and why they matter to users.
4. **A "mental model" sketch:** what a typical user probably believes the bot can do vs what it actually can.

**Constraints**
- Include at least **3 Swahili or Sheng prompts**, **2 out-of-scope prompts** (e.g. "Which stock should I buy?") and **2 "can it see my account?" prompts** (e.g. "What's my balance?"), *without* sharing real details.
- Verify correctness for at least **5 answers** against an official source, and link the source.
- Blur all personal information in screenshots.

**Step-by-step hints**
1. (30 min) List 10 realistic customer questions, e.g. "How do I reverse a wrong transaction?", "Loan interest rate?", "Nimesahau PIN" ("I've forgotten my PIN"), "Branch open Saturday?", "Can I get a loan without payslip?"
2. (1.5 hrs) Ask each question twice (in a new session if possible) and screenshot everything.
3. (45 min) Run 5 of them on the public chatbot.
4. (45 min) Verify 5 answers against official websites or tariffs.
5. (1 hr) Fill in the log, spot the patterns, and write the summary.
6. (30 min) Sketch the mental model (two columns: *believes* vs *reality*).

**Submission format.** A Google Sheets log link, plus a PDF or Doc summary with screenshots, uploaded to the course platform.

**Rubric**

| Criterion | 1 · Emerging | 2 · Developing | 3 · Proficient | 4 · Exemplary |
|---|---|---|---|---|
| **Evidence quality** | Fewer than 20 tests, or no screenshots | 20 tests but missing required prompt types | 20+ tests incl. Swahili/Sheng, out-of-scope and account prompts; clear screenshots | Systematic, well-organised log that another designer could reuse |
| **Verification** | No verification | 1–4 answers verified | 5+ answers verified against linked official sources | Verification reveals specific factual errors or outdated information |
| **Insight** | Observations without meaning | Patterns noted but impact unclear | 3 key behaviours with evidence and user impact | Insights connect behaviours to probabilistic causes, with a clear mental-model gap |

**Stretch goal.** Ask 2 real people to use the chatbot for one task while you watch. Do their mental models match your sketch?

**✅ Checkpoint 1:** chatbot chosen ☐ · 20+ tests ☐ · 5 verified ☐ · summary ☐ · mental-model sketch ☐

### Reflect
1. Which response surprised you most, and why?
2. Did the chatbot behave differently in Swahili or Sheng? What might that mean for users?
3. How would *you* have known whether an answer was wrong, if you hadn't checked?

---

# Module 2 · PAIR Guidebook Deep Dive

**Week 2 · ~5–7 hours · Badge: PAIR Practitioner**

### Essential Question
> **How do we design AI around people's needs, from the first idea to the moment it fails?**

### Learning objectives
1. Navigate the PAIR Guidebook's six chapters and its question-based pattern library.
2. Apply the ideas of user needs, defining success and the precision/recall trade-off.
3. Analyse how a product shapes mental models, explains itself and builds trust.
4. Evaluate feedback, control, and error and failure design using PAIR.
5. Produce a PAIR analysis of your chosen chatbot.

### Watch

| # | Video | Channel | Length | Why watch |
|---|---|---|---|---|
| 1 | [Getting Started with the People + AI Guidebook](https://www.youtube.com/watch?v=n3HsvqBJrlY) | Google Design | ~4 min | A quick orientation to the guidebook. |
| 2 | [Designing Human-Centered AI Products (Google I/O'19)](https://www.youtube.com/watch?v=rf83vRxLWFQ) | Google Design | ~38 min | PAIR's leads walk through key chapters: whether AI adds value, data needs, explainability and trust. |
| 3 | [Research@ NYC: PAIR Guidebook](https://www.youtube.com/watch?v=fgk_mK9XlRs) | Google Research | ~17 min | The guidebook's editor and a PAIR designer on how it's been updated for generative AI. |
| 4 | [Design is [Smart] – Human-Centered Machine Learning](https://www.youtube.com/watch?v=cNW89xkMYLo) | Google Design | ~4 min *(optional)* | A short, early take on putting people first in machine learning. |

**Readings (the core of this module):** the PAIR chapters
- *User Needs + Defining Success*: https://pair.withgoogle.com/chapter/user-needs/
- *Data Collection + Evaluation*: https://pair.withgoogle.com/chapter/data-collection/
- *Mental Models*: https://pair.withgoogle.com/chapter/mental-models/
- *Explainability + Trust*: https://pair.withgoogle.com/chapter/explainability-trust/
- *Feedback + Control*: https://pair.withgoogle.com/chapter/feedback-controls/
- *Errors + Graceful Failure*: https://pair.withgoogle.com/chapter/errors-failing/
- *Design patterns*: https://pair.withgoogle.com/guidebook/patterns

> Don't try to read everything in one sitting. Read one chapter a day, and apply it to your chatbot straight away.

### Learn

**1. What PAIR is**

The **People + AI Guidebook** comes from Google's People + AI Research (PAIR) team. It's a free set of methods, best practices and examples, based on input from more than a hundred Googlers, industry experts and academic research. It has **six chapters** that follow the product journey, plus a **pattern library** organised around questions teams actually ask, for example: *When and how should I use AI in my product? How do I onboard users to new AI features? How do I explain my AI system to users? How do I help users build and calibrate trust? What's the right balance of user control and automation? How do I support users when something goes wrong?*

**2. The six chapters, applied to a bank chatbot**

| Chapter | Key idea | Questions to ask about *your* chatbot |
|---|---|---|
| **User Needs + Defining Success** | Start from real needs; decide whether AI adds unique value; define what "success" means, including the trade-offs | What jobs do customers bring to it? Would a simple menu be better for some? What does the bank count as success: fewer calls, or solved problems? |
| **Data Collection + Evaluation** | Your AI is only as good as its data; consider representativeness and quality | Does it seem to know Kenyan products, fees and Swahili? Where might its knowledge be missing or out of date? |
| **Mental Models** | Help users form accurate beliefs about what the AI can do; set expectations at onboarding | Does the welcome message explain what it can and can't do? Does it say whether it can see the account? |
| **Explainability + Trust** | Explain enough for users to make good decisions; help trust match reliability | Does it show sources ("per our tariff guide")? Does it signal uncertainty? |
| **Feedback + Control** | Let users give feedback and stay in control | Can users rate answers, correct it or choose options? Do they know what happens with feedback? |
| **Errors + Graceful Failure** | Errors will happen. Design for discovery, recovery and handoff | When it fails, does it explain, offer alternatives and connect you to a human? |

**3. Precision vs recall: a key PAIR idea, in simple words**

Imagine a fraud-alert AI that flags suspicious transactions:
- **High precision:** when it flags something, it's usually really fraud, but it may *miss* some fraud.
- **High recall:** it catches almost all fraud, but also flags many innocent transactions (annoying customers buying stock in bulk for their duka).

You can't maximise both. **Which mistake is worse for users** decides the balance. For a chatbot answering "Can I reverse this transaction?", a wrong confident "Yes" (a false positive) may cost someone real money, so caution matters more than coverage.

**4. Explain for decisions, not completeness**

Users don't need to know how the model works. They need enough to decide **"Should I act on this?"** Good explanations are short and specific: *"Based on our published tariff (updated Sept 2026)"*, *"I can't see your account. Check your balance in the app"*. Over-explaining overwhelms. Under-explaining misleads.

**5. Graceful failure**

Failure is when the AI can't help or gets it wrong. Graceful failure means the user still has a way forward:
- the bot *recognises* the limit ("I'm not able to help with that");
- it *explains* simply;
- it *offers paths* (try rephrasing, use the app, call the contact centre, chat to an agent);
- it *preserves context* so the user doesn't start over.

**6. How to do a PAIR analysis**

For each chapter, write:
1. **What the product does** (with a screenshot from your Module 1 log).
2. **PAIR principle** (quote or paraphrase the chapter).
3. **Gap or strength.**
4. **User impact** (who's affected, and how badly).
5. **Opportunity** (an early redesign idea, refined in Module 4).

**Common mistakes**
- Summarising the guidebook instead of *applying* it.
- Skipping the "Data" chapter because "I can't see their data". You *can* infer gaps from the behaviour (e.g. out-of-date fees, weak Swahili).
- Only noting problems. Note strengths too.

**Glossary**
- **PAIR:** People + AI Research, Google's team behind the guidebook.
- **Design pattern:** a reusable solution to a common design problem.
- **Precision / recall:** how often the AI's positive calls are right, vs how many of the true cases it catches.
- **Onboarding:** the first experience that sets expectations.
- **Graceful failure:** failing in a way that still leaves the user a path forward.

### Quick check

1. Name the six PAIR chapters.
2. In the fraud-alert example, what does high recall cost customers?
3. What's the purpose of an explanation in an AI product, according to this module?
4. Give two signs of graceful failure.
5. How can you comment on a chatbot's *data* without seeing its data?

<details>
<summary><strong>Show answers</strong></summary>

1. User Needs + Defining Success; Data Collection + Evaluation; Mental Models; Explainability + Trust; Feedback + Control; Errors + Graceful Failure.
2. More false alarms. Innocent transactions get flagged, which annoys customers and may block their payments.
3. To give users just enough understanding to decide whether to act on the output, not to explain the whole model.
4. Any two: it recognises the limit, explains simply, offers alternative paths (including a human), and preserves context.
5. By inferring from its behaviour, such as outdated information, poor Swahili or Sheng understanding, or missing local products.

</details>

### Challenge: PAIR Analysis Board

**Scenario.** KaziPesa's product lead says: *"We keep hearing about PAIR. Show us what it reveals about a real chatbot, in a way our team can learn from."*

**What to build**
1. **A PAIR analysis board** (FigJam or a Google Doc) with one section for **each of the 6 chapters**, applied to your chosen chatbot, using the 5-part format (what it does → principle → gap/strength → impact → opportunity).
2. **At least 2 PAIR patterns** from the pattern library that your chatbot *should* use, each with a link and an explanation of how it applies.
3. **A "success definition" rewrite:** what success *should* mean for this chatbot from the customer's point of view (e.g. "% of customers whose problem was solved without calling", not just "number of chats").

**Constraints**
- Every section must include **evidence** (a screenshot or log entry from Module 1, or a new test).
- At least **2 strengths** must be noted.
- Plain language: a bank's customer-care team lead should understand every point.

**Step-by-step hints**
1. Read one chapter, then immediately fill in its section using your log.
2. Run 3–5 new tests if you need evidence for a chapter (e.g. try giving feedback to the bot).
3. Browse the pattern library by question (e.g. *How do I support users when something goes wrong?*) and pick the 2 most relevant patterns.
4. For the success rewrite, ask a friend: "What would make a bank chatbot *successful* for you?"

**Submission format.** A FigJam board link or Doc/PDF uploaded to the course platform.

**Rubric**

| Criterion | 1 · Emerging | 2 · Developing | 3 · Proficient | 4 · Exemplary |
|---|---|---|---|---|
| **Coverage and accuracy of PAIR** | Fewer than 4 chapters, or misread | All 6 chapters, some superficial | All 6 accurately applied with evidence; 2 relevant patterns | Insightful connections between chapters (e.g. a mental-model gap causing error-recovery failure) |
| **Evidence and impact** | Claims without evidence | Evidence for some sections | Evidence and clear user impact for every section | Impact prioritised by severity and supported by real user observation |
| **Opportunities** | None | Generic ("improve the UX") | Specific, feasible opportunities for each section; a strong success rewrite | Opportunities already hint at a coherent redesign direction |

**Stretch goal.** Use one PAIR chapter worksheet (from the guidebook's workshop materials: https://pair.withgoogle.com/guidebook/workshop) as if you were the bank's team, and fill it in.

**✅ Checkpoint 2:** 6 chapter sections ☐ · 2 patterns ☐ · success rewrite ☐ · submitted ☐

### Reflect
1. Which PAIR chapter best explains your chatbot's biggest weakness?
2. Did any chapter change how you think about AI products *you* use every day?
3. What's one PAIR idea you'd want every Kenyan fintech to adopt tomorrow?

---

# Module 3 · Microsoft HAX Guidelines Workshop

**Week 3 · ~5–7 hours · Badge: HAX Auditor**

### Essential Question
> **How should an AI system behave at the start, during use, when it's wrong, and over time?**

### Learning objectives
1. Explain the four phases of the HAX guidelines and all 18 guidelines.
2. Run a structured HAX audit, rating each guideline.
3. Distinguish violations, partial applications, strengths and non-applicable guidelines.
4. Prioritise findings by user impact.
5. Connect HAX findings with your PAIR analysis.

### Watch

| # | Video | Channel | Length | Why watch |
|---|---|---|---|---|
| 1 | [Guidelines for Human-AI Interaction with Dr. Saleema Amershi](https://www.youtube.com/watch?v=Kj33wtIMG-Y) | Scott Hanselman (Hanselminutes) | ~29 min | The lead researcher explains how and why the 18 guidelines were made. |
| 2 | [Tutorial: Create human-centered AI with the Human-AI eXperience (HAX) Toolkit](https://www.youtube.com/watch?v=PNoGW3KkEAs) | Microsoft Research | ~40 min | The HAX team walks through the guidelines and the toolkit's tools. |
| 3 | [Create human-centered AI with the Human-AI eXperience (HAX) Toolkit webinar](https://www.youtube.com/watch?v=JppYmctp0a8) | Microsoft Research | ~47 min *(optional)* | A deeper session on the Workbook, Design Patterns and Playbook. |

**Readings:** HAX *Guidelines*: https://www.microsoft.com/en-us/haxtoolkit/ai-guidelines/ · HAX *Design Library* (examples for each guideline): https://www.microsoft.com/en-us/haxtoolkit/design-library/ · HAX *Workbook*: https://www.microsoft.com/en-us/haxtoolkit/workbook/

### Learn

**1. Where HAX comes from**

Microsoft researchers synthesised more than 20 years of guidance on human-AI interaction into **18 guidelines**, then tested them with practitioners across many AI products. They were published at CHI 2019, a leading human-computer interaction conference. The guidelines are grouped by **when** in the experience they matter.

**2. The 18 guidelines, with bank chatbot examples**

| # | Guideline | What "good" looks like in a Kenyan bank chatbot |
|---|---|---|
| **Initially** | | |
| G1 | Make clear what the system can do | "I can help with account opening, loans info, card issues and branch hours." |
| G2 | Make clear how well the system can do what it can do | "I can explain fees, but for your exact balance, use the app." |
| **During interaction** | | |
| G3 | Time services based on context | It doesn't push a loan offer while the user is reporting fraud |
| G4 | Show contextually relevant information | Shows the reversal steps *for M-Pesa-to-bank* when that's the context |
| G5 | Match relevant social norms | Respectful greetings, appropriate formality, Swahili when the user uses Swahili |
| G6 | Mitigate social biases | Doesn't assume gender, tribe or income from a name or language |
| **When wrong** | | |
| G7 | Support efficient invocation | Easy to call up help ("Type MENU or HELP") |
| G8 | Support efficient dismissal | Easy to skip suggestions or close offers |
| G9 | Support efficient correction | "Did you mean *loan* or *Fuliza*?" Easy to fix a misunderstanding |
| G10 | Scope services when in doubt | When unsure, asks a clarifying question or narrows the help instead of guessing |
| G11 | Make clear why the system did what it did | "I'm showing this because you asked about card fees." |
| **Over time** | | |
| G12 | Remember recent interactions | Doesn't ask for the same detail twice in one chat |
| G13 | Learn from user behaviour | Adapts to preferences (e.g. language) over time, appropriately |
| G14 | Update and adapt cautiously | Changes don't suddenly disrupt familiar flows |
| G15 | Encourage granular feedback | 👍/👎 plus reasons, rather than just a vague rating |
| G16 | Convey the consequences of user actions | "Blocking your card will stop all payments, including standing orders." |
| G17 | Provide global controls | Controls such as language preference, stopping notifications or opting out |
| G18 | Notify users about changes | "New: you can now check loan status here." |

**3. Rating each guideline**

For each guideline, record one of:
- ✅ **Applied well:** a strength (with evidence).
- ⚠️ **Partly applied:** present but weak.
- ❌ **Violated:** missing or broken, with harm to users.
- ➖ **Not applicable** (or couldn't test). Explain why.

Then rate **severity** for each ⚠️ and ❌: **1 = minor**, **2 = causes confusion or extra effort**, **3 = could cause financial loss, lock-out or serious distress**.

**4. Writing a strong HAX finding**

> **G2 ❌ (severity 3).** When asked "What's my loan limit?", the bot answered "Your limit is up to KES 50,000" (screenshot 7). It can't see account data, but it doesn't say so. **Impact:** customers may plan around a limit they don't have, and apply and get rejected, damaging trust. **Recommendation:** state the capability boundary and link to the in-app limit check.

**5. Guidelines interact**

Some guidelines pull against each other. **G13 (learn from behaviour)** can clash with privacy expectations, and **G3 (timing)** with business goals (pushing offers). Showing that you see these **trade-offs** is what makes an audit professional.

**6. Connecting HAX and PAIR**

PAIR helps you understand *why* things go wrong across the product journey. HAX gives you a precise checklist of *behaviours*. In your final deck, a finding can cite both: "Violates HAX G10; reflects the PAIR *Mental Models* gap identified in Module 2."

**Common mistakes**
- Marking guidelines ❌ without evidence.
- Forcing every guideline to apply. ➖ is a valid, honest answer.
- Treating all violations as equal (always rate severity).
- Confusing G9 (correction) with G10 (scoping when in doubt).

**Glossary**
- **HAX:** Human-AI eXperience, Microsoft's toolkit for human-centered AI.
- **Invocation / dismissal:** calling the AI up / getting rid of it.
- **Scoping:** narrowing what the AI tries to do when it's uncertain.
- **Global controls:** settings that affect the AI's overall behaviour.
- **Severity:** how much harm a problem can cause.

### Quick check

1. What are the four HAX phases?
2. A bot keeps asking for your account type even after you've told it. Which guideline does that violate?
3. When unsure, a bot guesses wildly. Which guideline would help?
4. What does a severity of 3 mean in this course?
5. Give an example of two HAX guidelines that can conflict.

<details>
<summary><strong>Show answers</strong></summary>

1. Initially, During interaction, When wrong, Over time.
2. **G12**: remember recent interactions.
3. **G10**: scope services when in doubt (e.g. ask a clarifying question).
4. It could cause financial loss, account lock-out or serious distress.
5. For example, G13 (learn from user behaviour) vs privacy expectations, or G3 (timing) vs business pressure to push offers.

</details>

### Challenge: The 18-Guideline HAX Audit

**Scenario.** KaziPesa wants a checklist-based audit their QA team can repeat on any chatbot. Show them how it's done on your chosen product.

**What to build**
1. **A HAX audit sheet** (Google Sheets) with all **18 guidelines** rated ✅/⚠️/❌/➖, with evidence (a screenshot reference) and severity for every ⚠️/❌.
2. **The top 8 findings,** written in the strong-finding format (guideline → evidence → impact → recommendation).
3. **A trade-offs note:** at least one place where guidelines conflict for your chatbot, and how you'd balance them.
4. **A PAIR–HAX link table:** for your top 5 findings, the related PAIR chapter.

**Constraints**
- All 18 guidelines must be addressed (➖ needs a reason).
- At least **3 new tests** run specifically for "over time" guidelines (G12–G18), such as giving feedback, returning to the chat, or looking for controls.
- At least **2 strengths** (✅) noted.

**Step-by-step hints**
1. Set up the sheet with these columns: `Guideline | Rating | Evidence (screenshot #) | What happens | User impact | Severity | Recommendation`.
2. Go through your Module 1 log and tag each screenshot with guidelines.
3. Run the extra tests for G7–G9 (invoke, dismiss, correct) and G12–G18.
4. Sort by severity, then write up the top 8.
5. Look at the HAX Design Library examples for the guidelines you rated ❌, to spark ideas for Module 4.

**Submission format.** A Google Sheets link, plus a Doc/PDF with the top 8 findings, trade-offs and link table.

**Rubric**

| Criterion | 1 · Emerging | 2 · Developing | 3 · Proficient | 4 · Exemplary |
|---|---|---|---|---|
| **Completeness and accuracy** | Fewer than 18 guidelines, or misapplied | All 18 addressed; some ratings unsupported | All 18 accurately rated with evidence; justified ➖ | Nuanced ratings showing a deep understanding of each guideline |
| **Finding quality** | Vague findings | Findings specific but impact or severity unclear | Top 8 findings with evidence, impact, severity and recommendations | Findings a QA or design team could act on immediately; strong use of HAX Design Library examples |
| **Systems thinking** | No trade-offs or links | Trade-offs mentioned superficially | A clear trade-off analysis and a PAIR–HAX link table | Reveals root causes that connect multiple findings |

**Stretch goal.** Run the same HAX audit (quickly) on the public chatbot from Module 1, and compare the scores side by side.

**✅ Checkpoint 3:** 18 guidelines rated ☐ · top 8 findings ☐ · trade-offs ☐ · PAIR–HAX table ☐ · submitted ☐

### Reflect
1. Which HAX phase is your chatbot weakest in? Why do you think that is?
2. Which guideline was hardest to judge, and how did you decide?
3. How might a bank's business goals push its chatbot *away* from good HAX practice?

---

# Module 4 · Redesign Challenge: A Bank/Fintech Chatbot Used in Kenya

**Week 4 · ~6–7 hours · Earns the course certificate**

### Essential Question
> **How do we redesign an AI chatbot so people know what it can do, can tell when it's wrong, and can always recover?**

### Learning objectives
1. Prioritise findings into a focused set of redesign recommendations.
2. Redesign conversational moments for clarity, honesty and recovery.
3. Present before/after designs with clear rationale.
4. Tell a persuasive, evidence-based story in a 10–15 slide deck.
5. Validate at least one redesign with a real person.

### Watch

| # | Video | Channel | Length | Why watch |
|---|---|---|---|---|
| 1 | [Sorry, but your chatbot probably sucks \| Humans Talking Agents](https://www.youtube.com/watch?v=jcSJlF0GhTI) | Voiceflow | ~23 min | Practitioners on the most common reasons chatbots frustrate customers, and what to do instead. |
| 2 | [Designing money: how to build a trustworthy brand in the age of AI ft. Chris Warner \| Config 2026](https://www.youtube.com/watch?v=vnVAF8o4bwE) | Figma | ~23 min | How trust is designed in financial products as AI arrives. |
| 3 | [Building Trust in UX](https://www.youtube.com/watch?v=UW8SQr6cA7o) | NNgroup | ~8 min | The fundamentals of how users decide whether to trust a digital product. |
| 4 | [Humanizing AI Does Not Help Your Users](https://www.youtube.com/watch?v=SgYj7gxhmtE) | NNgroup | ~4 min | Why a "human-like" bank bot can backfire. |

**Reading:** NN/g, *Explainable AI in Chat Interfaces*: https://www.nngroup.com/articles/explainable-ai/

### Learn

**1. From findings to recommendations**

By now you have a lot of findings: your Variability Log, the PAIR analysis and the HAX audit. A client can't act on 30 issues. Your job now is to **prioritise** and **redesign**.

Use a simple scoring grid:

| Finding | Severity (1–3) | Frequency (1–3: how often users hit it) | Effort to fix (1 = easy, 3 = hard) | Priority = (Severity × Frequency) ÷ Effort |
|---|---|---|---|---|

Pick the **top 5** and group related findings into one recommendation where it makes sense (e.g. three G1/G2 findings become one "honest capability onboarding" recommendation).

**2. Five redesign patterns that fix most fintech chatbot problems**

| Pattern | Fixes | Before → After |
|---|---|---|
| **Honest capability onboarding** | Wrong mental models (HAX G1, G2; PAIR Mental Models) | "Hi! How can I help?" → "Habari! I can help with cards, loans info, transfers and branch hours. I **can't see your balance**. Use the app for that. What do you need?" + buttons |
| **Clarify, don't guess** | Confident wrong answers (G10; PAIR Errors) | Long generic paragraph → "Do you mean a **wrong M-Pesa transfer** or a **wrong bank transfer**?" [M-Pesa] [Bank] |
| **Cite and date the facts** | Hallucinated or outdated fees (G11; PAIR Explainability) | "The fee is KES 50" → "The fee is KES 50 (source: *Tariff Guide, updated Sept 2026*). [View tariffs]" |
| **Consequence-first confirmations** | Risky actions (G16) | "Card blocked." → "Blocking your card stops **all** card payments, including subscriptions. You can unblock in the app. [Block card] [Cancel]" |
| **Escalating help + warm handoff** | Loops and dead ends (G9; PAIR Graceful Failure) | "Sorry, I didn't understand" ×3 → re-prompt → options → "Let me connect you to an agent (about 5 min). I'll share our chat so you don't repeat yourself." |

**3. Fintech-specific must-haves in Kenya**
- **A fraud-safety message:** the bot should state clearly and repeatedly that it will **never ask for your PIN, password or OTP**, and say how to report suspected fraud through the bank's official channels. Scams via fake "customer care" numbers are common, so the bot is part of your defence.
- **Language parity:** important information (fees, steps, warnings) must be as clear in Swahili as in English.
- **Low-data design:** short messages, buttons over long text, and no heavy images.
- **A clear human route:** with hours, and with what to do out of hours (e.g. the official contact centre number shown in the app).

**4. Showing before and after**

For each recommendation, show:
1. **Before:** a screenshot (blurred) or a faithful recreation.
2. **After:** a redesigned WhatsApp-style or in-app mock-up (Figma, Canva or a tidy hand sketch photographed).
3. **Why:** the guideline(s), the user impact and how the design fixes it.
4. **How we'd know it works:** one metric (e.g. "fewer repeat questions", "handoff rate", "task success in testing").

**5. Validate with one real person**

Show the before and after of your top recommendation to someone who uses mobile banking. Ask: *"What would you do next? Which one do you trust more, and why?"* Add their quote to your deck. One real voice is very persuasive.

**6. The deck structure (10–15 slides)**

1. Title + one-line summary of the problem
2. Context: the chatbot, its users, why it matters
3. Method: Variability Log, PAIR, HAX, how many tests, languages
4. Key behaviours observed (probabilistic patterns)
5. The mental-model gap (believes vs reality)
6. PAIR highlights
7. HAX scorecard (a visual summary of the 18 guidelines)
8–12. **Recommendations 1–5** (before/after + why + metric), one per slide
13. What the chatbot does well (keep these!)
14. Validation quote + next steps
15. Appendix link (full log and audit)

**Common mistakes**
- Recommendations that are really just "use AI better".
- Pretty "after" screens with no evidence or rationale.
- Ignoring Swahili users in the redesign.
- Too much text per slide (one idea per slide).
- Being harsh about the product team. Be respectful, because someone worked hard on it, and they might be your future employer.

**Glossary**
- **Recommendation:** a specific, actionable proposed change.
- **Before/after:** a side-by-side comparison of the current and proposed designs.
- **Prioritisation grid:** a method for ranking issues by severity, frequency and effort.
- **Warm handoff:** a transfer to a human that includes the conversation context.
- **Language parity:** equal quality and clarity across supported languages.

### Quick check

1. In the priority formula, why divide by effort?
2. Which redesign pattern addresses a bot that can't see accounts but answers balance questions?
3. Name two fintech-specific must-haves for Kenyan chatbots.
4. What four things should each recommendation slide include?
5. Why include what the chatbot does well?

<details>
<summary><strong>Show answers</strong></summary>

1. So that high-impact problems that are *easy* to fix rise to the top: quick wins.
2. **Honest capability onboarding** (HAX G1/G2), plus redirecting to the app for balances.
3. Any two: the fraud-safety message ("never ask for PIN/OTP"), language parity, low-data design, a clear human route with hours.
4. Before, after, why (guideline + impact), and how we'd know it works (a metric).
5. It shows balanced, credible judgement, protects good features from being removed, and keeps the tone respectful.

</details>

### Challenge: The Teardown & Redesign Deck

**Scenario.** You've been invited to present to KaziPesa's product and customer-care leads. They'll use your deck to brief their own chatbot design and, if it's good, to approach the bank whose chatbot you reviewed. Make it clear, fair and actionable.

**Deliverables (the course deliverable)**
1. **A teardown deck of 10–15 slides** following (or improving on) the structure above.
2. **5 redesign recommendations,** each with a before/after, a rationale tied to specific **PAIR and/or HAX** guidance, user impact and a success metric.
3. **One validation quote** from a real mobile-banking user on your top recommendation.
4. **An appendix link** to your Variability Log, PAIR board and HAX audit.

**Constraints**
- Every recommendation must cite at least one **specific HAX guideline (G1–G18)** or **PAIR chapter/pattern**, *and* a user impact.
- At least **one recommendation must improve the Swahili or code-switched experience.**
- At least **one recommendation must improve error recovery or human handoff.**
- All personal information must be blurred. Be respectful: critique the design, not the people.

**Step-by-step hints**
1. (1 hr) Put all your findings into the prioritisation grid and pick the top 5.
2. (2–3 hrs) Design the "after" for each. Start with the words (the copy) and then lay them out.
3. (30 min) Show your top before/after to one mobile-banking user and capture their quote.
4. (1.5 hrs) Build the deck, one idea per slide, with large readable text.
5. (30 min) Rehearse a 5-minute walkthrough. If a slide takes more than 30 seconds to explain, simplify it.
6. (Optional) Record a 5-minute Loom walkthrough for your portfolio.

**Submission format.** A deck link (view access) plus a PDF export, uploaded to the course platform. Optionally, post it with **#SunkovaBuilds**.

**Rubric** *(reach Proficient on every criterion to earn the certificate)*

| Criterion | 1 · Emerging | 2 · Developing | 3 · Proficient | 4 · Exemplary |
|---|---|---|---|---|
| **Depth of analysis** | Few findings; happy path only | Findings present but shallow or one-language | Evidence from 20+ tests, PAIR and HAX; includes Swahili/Sheng and edge cases | Reveals root causes and patterns; validated with real users |
| **Accurate use of guidelines** | Guidelines missing or misapplied | Cited, but loosely | Every recommendation correctly cites HAX and/or PAIR with user impact | Precise, nuanced use, including trade-offs between guidelines |
| **Quality of recommendations** | Vague or not actionable | Specific but unprioritised or missing before/after | 5 prioritised recommendations with before/after, rationale and metric; meets the Swahili and recovery constraints | Recommendations are elegant, feasible and validated; a team could implement them next sprint |
| **Visual communication and storytelling** | Hard to follow | Readable but cluttered | Clear structure, one idea per slide, annotated visuals, 10–15 slides | Portfolio-grade, persuasive and respectful; a real fintech could act on it |

**Stretch goals**
- Build a **clickable prototype** of your redesigned conversation (Figma, or a free Voiceflow/Botpress project) and test it with 2 people.
- Add a **"metrics plan" slide** showing how the bank could measure improvement after launch (task success, handoff rate, repeat-question rate, 👍/👎 ratio).
- Write a short **LinkedIn article** summarising your top 3 insights (anonymise the product if you prefer).

**✅ Final checkpoint:** deck (10–15 slides) ☐ · 5 recommendations ☐ · Swahili rec ☐ · recovery rec ☐ · validation quote ☐ · appendix ☐ · submitted ☐

### Reflect
1. If you could change only *one* thing about the chatbot tomorrow, which would it be, and why?
2. How has this course changed the way you use AI tools yourself?
3. What do you want to learn next: conversation design, live prototyping, or AI evaluation?

---

*Hongera! You've completed Designing for Probabilistic Systems. Keep going with **Conversational & Agentic UX** (self-paced, 6 weeks), or join the live flagship **AI Product Design Foundations** (8 weeks, real client, Demo Day).*
