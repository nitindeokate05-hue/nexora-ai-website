# Nexora AI Website

Premium React + TypeScript + Vite website for Nexora AI, an AI automation and IT services brand serving worldwide clients.

## Project Folder

```text
D:\Nexora AI\Website\nexora-ai-website
```

## Requirements

- Node.js 20+
- npm 10+

## Setup

```bash
npm install
npm run dev
```

Local URL:

```text
http://localhost:5173
```

## Production Build

```bash
npm run build
```

## Preview Build

```bash
npm run preview
```

Default preview URL:

```text
http://localhost:4173
```

## Scripts

```bash
npm run dev
npm run build
npm run preview
npm run lint
```

## Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- React Router
- Lucide React
- Shadcn-style reusable primitives

## Included Features

- Premium dark navy, electric blue, and purple gradient design system
- Responsive navigation with mobile hamburger menu
- AI Cost Calculator with localStorage enquiry saving
- AI Proposal Generator with localStorage saving
- Free Consultation booking page and form
- Client Portal coming soon page
- Support ticket placeholder with localStorage saving
- Searchable Knowledge Base / FAQ
- Resource Center cards
- Global trust badges
- Status page placeholder
- Language selector
- Currency selector
- SEO meta title and description updates per route
- Open Graph defaults
- Cookie consent banner
- AI chatbot placeholder
- Lead capture popup
- Sticky WhatsApp button
- Back-to-top button
- Lazy-loaded route pages

## Routes

```text
/
/services
/solutions
/industries
/technologies
/projects
/careers
/about
/blog
/contact
/book-consultation
/client-login
/support
/status
/privacy-policy
/terms
/cookie-policy
/gdpr-notice
```

## Local Storage Keys

```text
nexora_cost_enquiries
nexora_proposal_requests
nexora_consultation_bookings
nexora_support_tickets
nexora_leads
nexora_language
nexora_currency
nexora_cookie_consent
nexora_lead_popup_dismissed
```

## Notes

The calculator, proposal generator, booking, support, chatbot, and lead capture workflows are front-end placeholders. They save demo data to browser localStorage and are ready for future API integration.
