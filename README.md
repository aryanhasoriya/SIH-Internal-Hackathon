# College Level Internal Hackathon 2026

Official Invitation & Announcement microsite for the **College Level Internal Hackathon 2026** — the central selection round for **Smart India Hackathon (SIH) 2026**.

Organized by **College SIH Cell**  
**SPOC**: Ashwini Yerlekar  
**Event Date**: 1st September 2026  

---

## 🌟 Key Highlights

- **Selection Target**: Best **50 Teams** will be shortlisted based on performance for participation in Smart India Hackathon (SIH) 2026.
- **Evaluation**: Independent evaluation by **External Judges**.
- **Requirement**: Idea / Problem Statement + PPT presentation and live demonstration of a **Working / Functional Prototype**.
- **Visual Design**: Inspired by modern editorial design systems with vibrant SIH branding (Warm Orange & Emerald Green).

---

## 🚀 How to Run

### Option 1: Direct File Opening (No Server Needed)
Double-click index.html in the root folder to open the standalone website directly in any modern browser.

### Option 2: Local Development Server
`ash
# Install dependencies
npm install

# Start local dev server
npm run dev

# Build for production
npm run build
`

---

## 📂 Project Architecture

`
sih_internal/
├── assets/                    # Standalone optimized static assets & fonts
├── public/assets/             # Public assets for Vite server
├── src/
│   ├── components/            # Modular React components
│   │   ├── Navbar.tsx         # Sticky navigation with college & SIH logos
│   │   ├── Hero.tsx           # Editorial Hero composition & stats
│   │   ├── Countdown.tsx      # Live dynamic countdown to September 1, 2026
│   │   ├── About.tsx          # Selection round overview & 3D Hackathon graphic
│   │   ├── Process.tsx        # 4-step interactive challenge flow
│   │   ├── Evaluation.tsx     # External judging pipeline flow
│   │   ├── Top50.tsx          # Large typography & animated counter to 50
│   │   ├── Preparation.tsx    # Actionable guidance cards
│   │   ├── EventDetails.tsx   # Official parameter grid
│   │   ├── FAQ.tsx            # Animated FAQ accordion
│   │   ├── FinalCTA.tsx       # Closing banner with SPOC message
│   │   ├── Footer.tsx         # Official attribution
│   │   ├── ScrollProgress.tsx # Top scroll progress indicator
│   │   └── BackToTop.tsx      # Smooth scroll-to-top button
│   ├── constants/             # Centralized event constants & announcements
│   ├── App.tsx                # Main application layout
│   ├── index.css              # Tailwind CSS & typography
│   └── main.tsx
├── index.html                 # Production standalone HTML
└── vite.config.ts
`

---

## 📜 License & Attribution

© 2026 College SIH Cell. All rights reserved.  
Internal Selection Round for Smart India Hackathon 2026.
