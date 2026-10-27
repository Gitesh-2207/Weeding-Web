# Royal Indian Wedding Invitation — Khushbu Patidar & Abhay Patidar

A luxurious, interactive digital wedding invitation website crafted with **React.js, Vite, Tailwind CSS, and Framer Motion**, celebrating the auspicious wedding of **Khushbu Patidar & Abhay Patidar** on **25 November 2026** in **Sundrel, Dhar, Madhya Pradesh, India**.

---

## ⚜️ Key Features & Architectural Highlights

### 1. Royal Wedding Hero Section
- **Palace Arch Illustration**: Elegant archways with hanging chandeliers.
- **Couple Names**: Arranged in calligraphic typography (*Khushbu Patidar & Abhay Patidar*), celebration subtitle, and venue badge.
- **Scroll Indicator**: Micro-animated gold pill indicator inviting guests to explore further.

### 2. Live Countdown Timer
- **Real-Time Precision**: Custom React hook `useCountdown.js` counting down accurately to **25 November 2026**.
- **Royal Numerals**: Serif typography inside cream cards with gold corner dashes and subtle shadows.
- **Dynamic Weekday Calculation**: Dynamically computes Wednesday from the target wedding date.

### 3. Printed Royal Invitation Card
- **Stationery Aesthetic**: Traditional double-layered card with ornamental golden corner flourishes.
- **Heritage Lineage**: Formally presents the Patidar Family with Vedic blessings.
- **Blessings & Timings**: Auspicious Vivah Mandap details.

### 4. "Four Chapters, One Story" (Wedding Events)
Interactive tabs with dynamic image displays, themes, and schedules:
1. **Ganesh Pujan**: 24 November 2026, 9:00 AM onwards (Chowk Mohalla, Sundrel, Dhar, MP)
2. **Haldi Ceremony**: 24 November 2026, 2:00 PM onwards (Chowk Mohalla, Sundrel, Dhar, MP)
3. **Sangeet Ceremony**: 24 November 2026, 8:00 PM onwards (Chowk Mohalla, Sundrel, Dhar, MP)
4. **Baraat Aagman**: 25 November 2026, 9:00 AM onwards (Sundrel, Dhar, MP)

### 5. Wardrobe Planner
- **Editorial Fashion Guide**: Curated color swatches for each evening (Marigold, Turmeric, Blush, Emerald, Burgundy, Antique Gold).
- **Styling Advice**: Tailored suggestions for ladies and gentlemen.

### 6. "Moments of Love" Photo Gallery & Lightbox
- High-resolution celebration photography.
- Gold hover overlay with category badges and captions.
- Fullscreen interactive lightbox modal with navigation.

### 7. Guest Hospitality ("With Our Compliments")
- Accommodations assistance for guests in Sundrel and nearby hubs.
- Transit guidance from Indore Airport (IDR) and railway hubs.
- Family assistance helpline on site.

### 8. Destination Venue & Google Maps Navigation
- Displays:
  **SUNDREL, DHAR**  
  **MADHYA PRADESH, INDIA**
- **"View Location on Maps"** button that opens Google Maps with a direct search for *Sundrel, Dhar, Madhya Pradesh, India*.

### 9. Frontend RSVP Form
- Client-side validation for name, email, and phone number.
- Dietary preferences and personal message for the couple.
- Transparent notice indicating that submissions are frontend demonstrations.

### 10. Bilingual Language Switcher (EN | हिंदी)
- Header switch (`EN | हिंदी`) supporting both English and Hindi.
- Integrated with *Noto Serif Devanagari* for authentic Hindi typography.

### 11. Floating Shehnai Background Music
- Floating player with animated equalizer bars.
- Built-in Web Audio API synthesizer playing soothing classical Indian Raag Yaman tones as an automatic fallback.

---

## 🚀 How to Run Locally

```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# 3. Build for production (e.g. Vercel, Netlify, GitHub Pages)
npm run build
```
