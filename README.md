# Eventify — Featured Events Page

![Eventify OG Image](public/ogImage.png)

---

## 📌 Project Overview

Eventify is a modern, fully responsive event discovery platform built for Pakistan's growing event scene. It allows users to browse events, search by name, register for events, and even create new events — all in a clean, red & white theme.

---

## 🎨 Design & Theme

| Element | Color |
|---------|-------|
| Background | White `#ffffff` |
| Primary Accent | Red `#dc2626` |
| Dark Elements | Black `#111111` |
| Text Secondary | Gray `#6b7280` |

**Typography:** Inter (via Google Fonts) — clean, modern sans-serif

---

## 🛠 Tech Stack

| Technology | Purpose |
|-----------|---------|
| **Next.js 16** | React framework with App Router |
| **TypeScript** | Type-safe development |
| **Tailwind CSS v4** | Utility-first styling (CSS-based config) |
| **Next.js API Routes** | REST API for events, registrations, contact |

---

## 📂 Project Structure

```
featured-events/
├── app/
│   ├── components/           # Reusable UI components
│   │   ├── Navbar.tsx        # Sticky navigation with mobile menu
│   │   ├── Hero.tsx          # Landing hero section with image
│   │   ├── SearchBar.tsx     # Event search input
│   │   ├── EventCard.tsx     # Individual event display card
│   │   ├── Loader.tsx        # Skeleton loading animation
│   │   ├── RegisterModal.tsx # Event registration form modal
│   │   ├── CreateEventModal.tsx # Create new event modal
│   │   ├── ContactSection.tsx # Contact form with info panel
│   │   └── Footer.tsx        # Email-signature style footer
│   ├── api/                  # API Routes
│   │   ├── events/route.ts   # GET all events
│   │   ├── register/route.ts # POST registration
│   │   └── contact/route.ts  # POST contact message
│   ├── types/
│   │   └── event.ts          # TypeScript interfaces
│   ├── page.tsx              # Main page (Home)
│   ├── layout.tsx            # Root layout with metadata
│   └── globals.css           # Global styles + Tailwind config
├── data/
│   └── events.json          # Sample event data
├── public/
│   ├── heroImage.png         # Hero section illustration
│   └── ogImage.png          # OG image for social sharing
├── package.json
├── tsconfig.json
└── README.md
```

---

## ✨ Features

### 1. **Sticky Navigation Bar**
- Fixed at top with backdrop blur effect
- Desktop links + mobile hamburger menu
- "Create Event" CTA button
- Active link indicator on "Service"

### 2. **Hero Section**
- Full-height landing area (90vh)
- Tagline: "Discover Events Near You"
- Social media icons (Facebook, Twitter/X, LinkedIn, YouTube)
- CTA buttons: "Browse Events" & "Contact Us"
- Dashboard illustration image

### 3. **Featured Events Section**
- Fetches events from `/api/events`
- Live search bar (filters by event name)
- Skeleton loader while fetching
- Event cards with category badges
- Hover animations on cards
- "Register Now" button opens modal

### 4. **About Section**
- Platform description
- Stats: 500+ Events, 12k+ Registrations, 8 Cities
- Quote block with offset design

### 5. **Contact Section**
- Contact form (Name, Email, Message)
- Info panel with phone, email, website
- Social media icons
- Success/error feedback messages

### 6. **Footer**
- Brand identity block
- Contact information
- Red address/social bar
- Copyright notice

### 7. **Modals**
- **Register Modal:** Form validation, success screen
- **Create Event Modal:** Full form to add new events dynamically

---

## 🔌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/events` | Returns all events from `data/events.json` |
| `POST` | `/api/register` | Registers a user for an event |
| `GET` | `/api/register` | Returns all registrations (for admin) |
| `POST` | `/api/contact` | Submits a contact message |
| `GET` | `/api/contact` | Returns all messages (for admin) |

### Example: Get Events
```bash
GET /api/events
Response: [
  {
    "id": 1,
    "name": "Tech Summit 2026",
    "date": "2026-04-10",
    "time": "10:00 AM",
    "location": "Gulberg Arena, Lahore",
    "description": "Pakistan's biggest annual tech conference...",
    "category": "Technology",
    "seats": 200
  }
]
```

### Example: Register for Event
```bash
POST /api/register
Body: { "eventId": 1, "eventName": "Tech Summit 2026", "name": "John Doe", "email": "john@example.com", "phone": "+92..." }
Response: { "success": true, "registration": { ... } }
```

---

## 📊 TypeScript Interfaces

Located in `app/types/event.ts`:

```typescript
interface Event {
  id: number;
  name: string;
  date: string;
  time: string;
  location: string;
  description: string;
  category: string;
  seats: number;
}

interface Registration {
  id: string;
  eventId: number;
  eventName: string;
  name: string;
  email: string;
  phone: string;
  registeredAt: string;
}

interface ContactMessage {
  id: string;
  name: string;
  email: string;
  message: string;
  sentAt: string;
}
```

---

## 🎭 Tailwind CSS v4 Configuration

Tailwind v4 uses CSS-based configuration in `globals.css`:

```css
@import "tailwindcss";

@theme {
  --color-brand-red: #dc2626;
  --color-brand-red-dark: #b91c1c;
  --color-brand-red-light: #fef2f2;
  --color-brand-black: #111111;
  --font-sans: "Inter", ui-sans-serif, system-ui, sans-serif;
}
```

**No `tailwind.config.ts` needed** — all customization lives in `globals.css`.

---

## 🚀 How to Clone & Run

### Prerequisites
- Node.js 18+ installed
- npm or yarn

### Steps

1. **Clone the repository**
```bash
git clone <your-repo-url>
cd featured-events
```

2. **Install dependencies**
```bash
npm install
```

3. **Add images to public folder**
```bash
# Place your images in the public folder:
# - public/heroImage.png  (Hero illustration)
# - public/ogImage.png     (Social sharing image, 1200x630 recommended)
```

4. **Run the development server**
```bash
npm run dev
```

5. **Open in browser**
```
http://localhost:3000
```

---

## 📁 Data Storage

| Environment | Storage |
|------------|---------|
| **Demo/Development** | In-memory array + `data/events.json` |

---



---

## 📱 Responsive Breakpoints

| Breakpoint | Class | Width |
|------------|-------|-------|
| Mobile | Default | < 768px |
| Tablet | `md:` | ≥ 768px |
| Desktop | `lg:` | ≥ 1024px |

---

## 🎯 Key Implementation Details

1. **Client Components:** Components with interactivity use `"use client"` directive
2. **API Routes:** Next.js Route Handlers in `app/api/` directory
3. **Type Safety:** All components, props, and API responses are fully typed
4. **SEO:** Metadata with OG tags for social sharing
5. **Accessibility:** Semantic HTML, ARIA labels, keyboard navigation

---

## 📄 License

MIT License — feel free to use for personal or commercial projects.

---

## 🙏 Credits

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS

