# Eventify — Featured Events Page

## Technologies Used
- **Next.js 16** (App Router)
- **TypeScript** — fully typed components and API routes
- **Tailwind CSS** — responsive utility-first styling
- **Next.js API Routes** — REST endpoints for events and registrations

## Features
- Responsive event grid (mobile, tablet, desktop)
- Skeleton loader while events load
- Search bar that filters events by name in real-time
- Register modal with form validation and success state
- Create Event modal to add new events dynamically
- Category badges with distinct color coding
- Sticky glassmorphism navbar

## How to Run
```bash
npm install
npm run dev
```
Open http://localhost:3000

## Bonus Features Added
- Search/filter by event name
- Dynamic JSON loading via `/api/events`
- Registration via `/api/register` POST endpoint
- Create new events (persisted in-memory during session)
- Skeleton loading animation

## Data Storage Note
Currently using: in-memory store + JSON file (demo)
Recommended for production: PostgreSQL via Prisma ORM
