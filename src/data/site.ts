import {
  Bot,
  BotMessageSquare,
  BrainCircuit,
  BriefcaseBusiness,
  ChartNoAxesCombined,
  CheckCircle2,
  Clapperboard,
  DatabaseZap,
  FileCheck2,
  Gauge,
  Globe2,
  Headphones,
  Layers3,
  LockKeyhole,
  Megaphone,
  Network,
  PanelTop,
  Rocket,
  Scale,
  ServerCog,
  ShieldCheck,
  Sparkles,
  Timer,
  Zap,
  type LucideIcon,
} from "lucide-react"

export type IconItem = {
  title: string
  description: string
  icon: LucideIcon
}

export type FaqItem = {
  question: string
  answer: string
  category: string
}

export const languages = ["English", "Hindi", "Marathi"] as const

export const currencies = ["USD", "INR", "AED", "EUR"] as const

export const services: IconItem[] = [
  {
    title: "AI Automation",
    description:
      "Workflow automation, intelligent assistants, document processing, and custom AI copilots.",
    icon: Bot,
  },
  {
    title: "AI Agent Development",
    description:
      "Custom AI agents, chatbots, workflow assistants, CRM/ERP copilots, and support automation.",
    icon: BotMessageSquare,
  },
  {
    title: "Website & App Development",
    description:
      "Modern web apps, SaaS platforms, portals, APIs, and enterprise-grade integrations.",
    icon: PanelTop,
  },
  {
    title: "ERP & CRM Development",
    description:
      "ERP implementation, CRM flows, inventory, finance, HR, and operational dashboards.",
    icon: DatabaseZap,
  },
  {
    title: "Power BI Dashboard",
    description:
      "Executive dashboards, data models, KPI reporting, forecasting, and self-service analytics.",
    icon: ChartNoAxesCombined,
  },
  {
    title: "Social Media Marketing",
    description:
      "Instagram, Facebook, LinkedIn, content planning, ad campaigns, and brand growth calendars.",
    icon: Megaphone,
  },
  {
    title: "Video Making & Editing",
    description:
      "Promotional videos, reels, corporate films, product demos, AI video creation, and motion graphics.",
    icon: Clapperboard,
  },
  {
    title: "IT Infrastructure Services",
    description:
      "Cloud migration, network modernization, security hardening, monitoring, and support.",
    icon: ServerCog,
  },
]

export const solutions: IconItem[] = [
  {
    title: "Lead-to-Cash Automation",
    description: "Connect sales, quoting, invoicing, delivery, and reporting into one system.",
    icon: Zap,
  },
  {
    title: "AI Customer Support",
    description: "Ticket triage, knowledge assistants, response drafting, and support analytics.",
    icon: Headphones,
  },
  {
    title: "Executive Intelligence",
    description: "Decision dashboards that unify operations, finance, sales, and delivery data.",
    icon: BrainCircuit,
  },
  {
    title: "Secure Client Portals",
    description: "Role-based portals for projects, documents, approvals, and service requests.",
    icon: LockKeyhole,
  },
]

export const industries: IconItem[] = [
  {
    title: "Professional Services",
    description: "Automation and analytics for consulting, agencies, finance, and operations.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Manufacturing",
    description: "ERP, inventory, quality, procurement, and production visibility systems.",
    icon: Layers3,
  },
  {
    title: "Retail & Distribution",
    description: "Order flows, warehouse insights, customer automation, and BI reporting.",
    icon: Globe2,
  },
  {
    title: "Healthcare & Wellness",
    description: "Secure digital workflows, scheduling, compliance-aware reporting, and portals.",
    icon: ShieldCheck,
  },
]

export const technologies = [
  "React",
  "TypeScript",
  "Node.js",
  "Python",
  "OpenAI",
  "Power BI",
  "Azure",
  "AWS",
  "PostgreSQL",
  "Microsoft 365",
  "ERPNext",
  "Docker",
] as const

export const projects: IconItem[] = [
  {
    title: "AI Document Workflow",
    description: "Automated intake, classification, approval routing, and compliance logging.",
    icon: FileCheck2,
  },
  {
    title: "Global KPI Command Center",
    description: "Power BI dashboards for multi-region revenue, delivery, and customer health.",
    icon: Gauge,
  },
  {
    title: "Secure Service Desk",
    description: "Ticketing workflow, SLA routing, asset records, and executive support metrics.",
    icon: Network,
  },
]

export const trustBadges = [
  { title: "NDA Protected", icon: FileCheck2 },
  { title: "GDPR Ready", icon: Scale },
  { title: "Secure Delivery", icon: ShieldCheck },
  { title: "Global Support", icon: Globe2 },
  { title: "Scalable Architecture", icon: Layers3 },
  { title: "24/7 Assistance", icon: Headphones },
  { title: "Fast Implementation", icon: Rocket },
  { title: "Enterprise Security", icon: LockKeyhole },
] as const

export const faqCategories = [
  "AI Automation",
  "Software Development",
  "ERP",
  "Power BI",
  "IT Infrastructure",
  "Cloud",
  "Pricing",
  "Support",
] as const

export const faqs: FaqItem[] = [
  {
    category: "AI Automation",
    question: "What AI automation services can Nexora AI build?",
    answer:
      "Nexora AI can design assistants, workflow automation, document intelligence, customer support bots, reporting copilots, and integrations with business systems.",
  },
  {
    category: "Software Development",
    question: "Do you build custom web portals and SaaS products?",
    answer:
      "Yes. The architecture supports secure portals, dashboards, APIs, admin panels, and production-ready web applications.",
  },
  {
    category: "ERP",
    question: "Can ERP be integrated with existing tools?",
    answer:
      "Yes. ERP workflows can connect with finance, inventory, CRM, HR, reporting, and external APIs after a discovery audit.",
  },
  {
    category: "Power BI",
    question: "Can you create executive dashboards?",
    answer:
      "Yes. Nexora AI can model data and create dashboards for revenue, operations, customer health, finance, and delivery KPIs.",
  },
  {
    category: "IT Infrastructure",
    question: "Do you support infrastructure modernization?",
    answer:
      "Yes. Services can include audits, cloud readiness, network hardening, monitoring, backups, access controls, and support processes.",
  },
  {
    category: "Cloud",
    question: "Which cloud platforms are supported?",
    answer:
      "Cloud planning can support Azure, AWS, Microsoft 365, and hybrid environments depending on the client stack.",
  },
  {
    category: "Pricing",
    question: "How is project pricing estimated?",
    answer:
      "Pricing depends on service type, project size, timeline, integrations, compliance requirements, and delivery model.",
  },
  {
    category: "Support",
    question: "Can worldwide clients request support?",
    answer:
      "Yes. Support workflows are designed for global teams, remote delivery, ticket tracking, and ongoing maintenance.",
  },
]

export const resources: IconItem[] = [
  {
    title: "AI Automation Checklist",
    description: "A planning checklist for automation readiness, data quality, and workflow fit.",
    icon: Sparkles,
  },
  {
    title: "ERP Implementation Guide",
    description: "A guide for scope, process mapping, migration, rollout, and adoption planning.",
    icon: DatabaseZap,
  },
  {
    title: "Power BI Dashboard Guide",
    description: "A dashboard planning guide for KPIs, modeling, governance, and storytelling.",
    icon: ChartNoAxesCombined,
  },
  {
    title: "IT Infrastructure Audit Checklist",
    description: "A review checklist for security, resilience, access, endpoints, and cloud posture.",
    icon: ServerCog,
  },
]

export const statusItems = [
  { label: "Website", value: "Operational", icon: CheckCircle2 },
  { label: "API", value: "Operational", icon: CheckCircle2 },
  { label: "Support", value: "Operational", icon: CheckCircle2 },
  { label: "Client Portal", value: "Coming Soon", icon: Timer },
] as const

export const costServiceMultipliers = {
  "AI Automation": 1.35,
  "AI Agent Development": 1.4,
  "Website & App Development": 1.2,
  "ERP & CRM Development": 1.45,
  "Power BI Dashboard": 0.95,
  "Social Media Marketing": 0.75,
  "Video Making & Editing": 0.7,
  "IT Infrastructure Services": 1.15,
} as const
