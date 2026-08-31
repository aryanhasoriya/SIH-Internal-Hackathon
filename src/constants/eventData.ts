// Centralized Official Event Information
// Source of truth: Official College SIH Announcement

export const HACKATHON_DATE = "2026-09-01"; // Configurable countdown date target

export const EVENT_INFO = {
  name: "College Level Internal Hackathon 2026",
  shortName: "Internal Hackathon 2026",
  sihTarget: "Smart India Hackathon (SIH) 2026",
  level: "College Level Internal Hackathon",
  dateFormatted: "1st September 2026",
  dateDisplay: "01 SEPTEMBER 2026",
  presentation: "Idea / Problem Statement + PPT",
  prototype: "Working / Functional Prototype must be demonstrated",
  evaluation: "External Judges",
  shortlistCount: 50,
  shortlistText: "Best 50 Teams will be shortlisted based on performance for participation in Smart India Hackathon (SIH) 2026.",
  organizer: "College SIH, SPOC",
  spocName: "Ashwini Yerlekar",
  officialNotice: "Important Announcement – College Level Internal Hackathon 2026: The College is organizing a Central Level Internal Hackathon on 1st September 2026. This is an important selection round, so take the preparation seriously. Give your best and make your team among the Top 50! All the best!",
};

export const NAV_LINKS = [
  { label: "ABOUT", href: "#about" },
  { label: "PROCESS", href: "#process" },
  { label: "EVALUATION", href: "#evaluation" },
  { label: "TOP 50", href: "#top50" },
  { label: "PREPARATION", href: "#preparation" },
  { label: "DETAILS", href: "#details" },
  { label: "FAQ", href: "#faq" },
];

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "IDEA",
    subtitle: "Understand Problem Statement",
    description: "Present your selected problem statement and clearly explain your proposed solution and innovative approach.",
    image: "/assets/step-problem.png",
    accentColor: "#EA580C",
  },
  {
    step: "02",
    title: "PRESENT",
    subtitle: "Deliver Convincing PPT",
    description: "Prepare and deliver a concise, structured PPT explaining your idea, technical approach, and system architecture.",
    image: "/assets/step-ideate.png",
    accentColor: "#F97316",
  },
  {
    step: "03",
    title: "DEMONSTRATE",
    subtitle: "Working / Functional Prototype",
    description: "Demonstrate a real working or functional prototype live to prove feasibility and technical readiness.",
    image: "/assets/step-prototype.png",
    accentColor: "#16A34A",
  },
  {
    step: "04",
    title: "IMPRESS",
    subtitle: "External Judges Evaluation",
    description: "Convince the external judges that your solution and prototype deserve a place in the Top 50 teams.",
    image: "/assets/step-judges.png",
    accentColor: "#0F172A",
  },
];

export const EVALUATION_FLOW = [
  { step: "01", title: "IDEA / PROBLEM STATEMENT", desc: "Clarity of problem statement and proposed solution" },
  { step: "02", title: "PRESENTATION (PPT)", desc: "Concise, structured pitch and methodology" },
  { step: "03", title: "WORKING PROTOTYPE", desc: "Live demonstration of functional execution" },
  { step: "04", title: "EXTERNAL JUDGING", desc: "Rigorous review by independent external judges" },
  { step: "05", title: "TOP 50 SHORTLISTING", desc: "Best 50 teams advance towards SIH 2026" },
];

export const PREPARATION_CARDS = [
  {
    number: "01",
    title: "KNOW YOUR PROBLEM",
    description: "Understand the problem statement deeply. Analyze user requirements and ensure your proposed solution directly addresses the core issue.",
    tag: "Problem Analysis"
  },
  {
    number: "02",
    title: "PERFECT YOUR PITCH",
    description: "Make your PPT clear, concise and convincing. Structure your slides logically to explain the idea and technical architecture effectively.",
    tag: "Pitch Deck"
  },
  {
    number: "03",
    title: "BUILD YOUR PROTOTYPE",
    description: "A working / functional prototype must be demonstrated. Ensure all key modules function smoothly during live demonstration.",
    tag: "Working Build"
  },
  {
    number: "04",
    title: "BE READY FOR QUESTIONS",
    description: "Be prepared to explain your solution and implementation to external judges. Understand your codebase and architectural choices thoroughly.",
    tag: "Defense & Q&A"
  },
];

export const FAQ_LIST = [
  {
    question: "When is the Internal Hackathon?",
    answer: "The College Level Internal Hackathon will be conducted on 1st September 2026.",
  },
  {
    question: "What is the level of this hackathon?",
    answer: "It is the College Level Internal Hackathon and serves as the central internal selection round for Smart India Hackathon (SIH) 2026.",
  },
  {
    question: "What do teams need to present?",
    answer: "Teams need to present their idea / problem statement along with a concise, structured PPT.",
  },
  {
    question: "Is a working prototype required?",
    answer: "Yes. A working / functional prototype must be demonstrated during the evaluation.",
  },
  {
    question: "Who will evaluate the teams?",
    answer: "The teams will be evaluated by external judges.",
  },
  {
    question: "How many teams will be shortlisted?",
    answer: "The best 50 teams will be shortlisted based on their overall performance in the Internal Hackathon.",
  },
  {
    question: "What happens after the Internal Hackathon?",
    answer: "The shortlisted Top 50 teams will move forward for participation in the Smart India Hackathon (SIH) 2026 process.",
  },
];
