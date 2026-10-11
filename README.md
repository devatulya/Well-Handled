# Well Handled

> **Everything behind your brand, well handled.**  
> A dedicated management firm for businesses and ventures. We run tech, creative, content, ads, automation, and founder presence end-to-end. You stay focused on the business — you give your opinion and approval, we execute.

---

## Overview

**Well Handled** operates as an in-house execution partner for modern founders. Instead of managing fragmented vendor lists, chasing freelancers, or juggling production schedules, founders work with a single unified firm across every brand surface:

- **We Propose**: Direction, scope, and creative concepts arrive fully resolved.
- **You Approve**: One decisive call, not an endless project to manage.
- **We Execute**: Built, shipped, hosted, maintained, and reported on weekly.

---

## Services

1. **Tech** — High-performance bespoke websites, web apps, and mobile applications engineered and maintained as a unified digital system.
2. **Personalised UGC** — Creator-led advertising pipelines shaped around target customer psychology and high-retention performance hooks.
3. **Personal & Commercial Branding** — Brand positioning, founder storytelling, and scroll-stopping campaign concepts before production starts.
4. **Design & Editing** — Cohesive graphic design, performance ad variations, long-form video grading, reels, and brand asset libraries held to one visual standard.
5. **Meta Ads** — Campaign account architecture, structured creative testing cadence, and scalable ad spend management reported in plain numbers.
6. **AI Automation** — Connected backend workflows linking lead capture, inboxes, CRMs, and operations to move routine work forward automatically.
7. **Weekly Sync & Feedback** — Weekly update calls providing a clear picture of what shipped, what is next, and what requires approval.

---

## Tech Stack

- **Framework**: [TanStack Start](https://tanstack.com/start) & [TanStack Router](https://tanstack.com/router)
- **Frontend**: [React 19](https://react.dev/), [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Motion](https://motion.dev/) (Framer Motion)
- **Backend / Database**: [Supabase](https://supabase.com/)
- **Bundler & Server Engine**: [Vite](https://vitejs.dev/) with [Nitro](https://nitro.unjs.io/)

---

## Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (v18+) or [Bun](https://bun.sh/) installed.

### Installation

Clone the repository and install dependencies:

```bash
# Clone the repository
git clone https://github.com/devatulya/Well-Handled.git

# Navigate to the project directory
cd Well-Handled

# Install dependencies (using npm or bun)
npm install
# or
bun install
```

### Environment Setup

Create a `.env` file in the root directory and configure your Supabase keys:

```env
VITE_SUPABASE_URL="https://your-project.supabase.co"
VITE_SUPABASE_PUBLISHABLE_KEY="your-publishable-key"
VITE_SUPABASE_PROJECT_ID="your-project-id"
```

### Running Locally

Start the local development server:

```bash
npm run dev
# or
bun dev
```

Visit `http://localhost:5173` in your browser.

### Building for Production

Compile the production bundle:

```bash
npm run build
```

---

## Project Structure

```text
Well-Handled/
├── public/                 # Static assets (favicons, robots.txt)
├── src/
│   ├── assets/             # Optimized brand imagery and media
│   ├── components/         # Reusable UI components (header, lead-form, reveals)
│   ├── integrations/       # Supabase client and auth middleware
│   ├── lib/                # Utilities, analytics, anti-spam, site config
│   ├── routes/             # TanStack file-based routing
│   │   ├── index.tsx       # Homepage
│   │   ├── founder.tsx     # Founder profile page
│   │   ├── services.$slug  # Dynamic service breakdown pages
│   │   └── __root.tsx      # Root layout, head tags & scroll handling
│   ├── styles.css          # Tailwind CSS design system and utilities
│   └── router.tsx          # Router configuration
├── package.json            # Minimal, high-performance dependencies
└── vite.config.ts          # Vite and Nitro configuration
```

---

## License

Private and proprietary. © 2026 Well Handled. All rights reserved.
