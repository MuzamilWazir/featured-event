# Eventify — Featured Events Page

## Technologies Used
- Next.js 16 (App Router)
- TypeScript — fully typed components and API routes
- Tailwind CSS — responsive utility-first styling
- Next.js API Routes — REST endpoints for events and registrations

## Color Theme
- Background: White (#ffffff)
- Primary Accent: Red (#dc2626)
- Text / Dark Elements: Black (#111111) and Gray-900 (#111827)

## Features
- Responsive layout — mobile, tablet, desktop
- Sticky glassmorphism navbar with mobile hamburger menu
- Hero section with dashboard illustration (white/red/black)
- Skeleton loader while events fetch from API
- Live search bar filtering events by name
- Event cards with category badges and hover animations
- Register modal with form validation and success screen
- Create Event modal to add new events dynamically
- About section with stats and quote block
- Contact section with form + info panel
- Footer in email-signature style (red/black/white)

## How to Run
```bash
npm install
npm run dev
```
Open http://localhost:3000

## Data Storage
- Demo: in-memory array + events.json file
- Production: PostgreSQL via Prisma ORM, or Supabase (free tier)

## API Endpoints
GET  /api/events    — returns all events
POST /api/register  — registers a user for an event
POST /api/contact   — submits a contact form message

## Bonus Features Added
- TypeScript throughout (interfaces, typed props, typed API)
- Search/filter by event name
- Dynamic JSON loading via /api/events
- Registration via /api/register POST endpoint
- Create new events (persisted in-memory during session)
- Skeleton loading animation
- Mobile responsive with hamburger menu
