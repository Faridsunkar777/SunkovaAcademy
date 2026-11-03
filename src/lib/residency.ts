/**
 * Internal working copy of the six-month engineering residency concept.
 * The six stages reflect the founding-team curriculum proposal (3 Nov 2026).
 * This is a presentation draft, not a published enrolment commitment.
 */
export const residencyStages = [
  {
    number: "01",
    when: "WEEKS 01–04",
    title: "Understand the problem",
    focus: "Frame a challenge, interview users and test an idea in FigJam.",
    evidence: "Mentor-approved discovery board.",
  },
  {
    number: "02",
    when: "WEEKS 05–08",
    title: "Work inside a real codebase",
    focus: "Git, React / Next.js, accessible UI and code review.",
    evidence: "Reviewed pull requests to an existing product.",
  },
  {
    number: "03",
    when: "WEEKS 09–12",
    title: "Connect the whole product",
    focus: "APIs, authentication, PostgreSQL / Supabase and validation.",
    evidence: "Working, tested end-to-end feature.",
  },
  {
    number: "04",
    when: "WEEKS 13–16",
    title: "Solve a business challenge",
    focus: "Commerce, inventory, payment sandboxes and business rules.",
    evidence: "Feature demonstrated against acceptance criteria.",
  },
  {
    number: "05",
    when: "WEEKS 17–22",
    title: "Learn to deliver reliably",
    focus: "Testing, deployment, debugging and incident response.",
    evidence: "Staged release and troubleshooting record.",
  },
  {
    number: "06",
    when: "WEEKS 23–26",
    title: "Demonstrate the work",
    focus: "Team capstone, technical decisions, demo and handover.",
    evidence: "Product demo and individual contribution record.",
  },
] as const;

export const discoveryBoard = [
  ["01", "Challenge & context", "What is the challenge, who experiences it, and what are we assuming?"],
  ["02", "Interview approach", "Who should we speak with, and how will we ask open-ended questions?"],
  ["03", "User evidence", "What did relevant people actually say or do? Capture anonymised observations."],
  ["04", "Synthesis", "What patterns, journeys and frustrations emerged from the evidence?"],
  ["05", "Root problem", "Why is this happening? Use a problem statement and a 'How might we…?' question."],
  ["06", "Alternatives", "What different responses could help, including one without building software?"],
  ["07", "Decision factors", "What is desirable, feasible, viable, risky or still unknown?"],
  ["08", "Prototype & feedback", "What did users think of the flow, and what should we change?"],
  ["09", "MVP hypothesis", "What is the smallest useful release and how would we know it helped?"],
  ["10", "Review outcome", "Proceed, reframe or pause—with reviewer feedback and a next step."],
] as const;

export const residencyOutcomes = [
  "Research-backed challenge and FigJam decision trail",
  "Reviewed pull requests showing individual contributions",
  "API-backed features with tests and clear decisions",
  "Staged release and debugging or incident record",
  "Team demo, technical handover and reflection",
] as const;
