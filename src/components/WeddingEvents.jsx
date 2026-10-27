import React from 'react';
import { motion } from 'framer-motion';
import { CornerFlourish, FloralGarland } from './common/DecorativeElements';
import { Calendar, Clock, Sparkles, Shirt, Heart, Music2, Sun, Flame } from 'lucide-react';

// Custom Event Illustrations in traditional Indian artistic style
const GaneshPujanIllustration = () => (
  <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 sm:w-20 sm:h-20" aria-hidden="true">
    <circle cx="60" cy="60" r="52" fill="#FEF3C7" fillOpacity="0.45" stroke="#C5A15A" strokeWidth="1" strokeDasharray="3 3" />
    <circle cx="60" cy="60" r="44" stroke="#D4A853" strokeWidth="0.75" />
    {/* Diya Base */}
    <path d="M40 76 C40 86, 80 86, 80 76 Z" fill="#D97706" />
    <path d="M36 75 C42 80, 78 80, 84 75 C82 72, 38 72, 36 75 Z" fill="#F59E0B" />
    {/* Sacred Flame */}
    <path d="M60 42 C64 54, 70 60, 60 72 C50 60, 56 54, 60 42 Z" fill="url(#flameGrad)" />
    <circle cx="60" cy="64" r="3" fill="#FFFBEB" />
    {/* Ganesha Tilak Motif */}
    <path d="M60 22 L63 32 L60 36 L57 32 Z" fill="#B45309" />
    <path d="M53 34 Q60 38 67 34" stroke="#B45309" strokeWidth="1.5" strokeLinecap="round" />
    {/* Marigold Petals Base */}
    <circle cx="34" cy="78" r="4" fill="#F59E0B" />
    <circle cx="86" cy="78" r="4" fill="#F59E0B" />
    <circle cx="46" cy="85" r="3" fill="#D97706" />
    <circle cx="74" cy="85" r="3" fill="#D97706" />
    <defs>
      <linearGradient id="flameGrad" x1="60" y1="42" x2="60" y2="72" gradientUnits="userSpaceOnUse">
        <stop stopColor="#F59E0B" />
        <stop offset="0.6" stopColor="#EF4444" />
        <stop offset="1" stopColor="#B45309" />
      </linearGradient>
    </defs>
  </svg>
);

const HaldiIllustration = () => (
  <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 sm:w-20 sm:h-20" aria-hidden="true">
    <circle cx="60" cy="60" r="52" fill="#FEF08A" fillOpacity="0.4" stroke="#EAB308" strokeWidth="1" strokeDasharray="3 3" />
    {/* Brass Urli Bowl */}
    <path d="M30 68 C34 90, 86 90, 90 68 C84 62, 36 62, 30 68 Z" fill="#CA8A04" />
    <path d="M26 66 C34 70, 86 70, 94 66 C90 62, 30 62, 26 66 Z" fill="#EAB308" />
    {/* Fresh Haldi Turmeric Mound */}
    <path d="M38 64 C42 46, 78 46, 82 64 Z" fill="#FACC15" />
    {/* Floating Marigolds in Urli */}
    <circle cx="48" cy="58" r="5" fill="#EA580C" />
    <circle cx="72" cy="58" r="5" fill="#F59E0B" />
    <circle cx="60" cy="52" r="6" fill="#FBBF24" />
    {/* Sunshine Rays Sparkles */}
    <path d="M60 20 L60 28" stroke="#EAB308" strokeWidth="2" strokeLinecap="round" />
    <path d="M88 32 L82 38" stroke="#EAB308" strokeWidth="2" strokeLinecap="round" />
    <path d="M32 32 L38 38" stroke="#EAB308" strokeWidth="2" strokeLinecap="round" />
    <circle cx="60" cy="60" r="2.5" fill="#FFFBEB" />
  </svg>
);

const SangeetIllustration = () => (
  <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 sm:w-20 sm:h-20" aria-hidden="true">
    <circle cx="60" cy="60" r="52" fill="#FCE7F3" fillOpacity="0.45" stroke="#F472B6" strokeWidth="1" strokeDasharray="3 3" />
    {/* Indian Dholak Drum */}
    <g transform="rotate(-15 60 60)">
      <ellipse cx="60" cy="62" rx="28" ry="16" fill="#9A3412" />
      <ellipse cx="34" cy="62" rx="6" ry="14" fill="#78350F" stroke="#FDE68A" strokeWidth="1.5" />
      <ellipse cx="86" cy="62" rx="6" ry="14" fill="#78350F" stroke="#FDE68A" strokeWidth="1.5" />
      {/* Drum Tuning Ropes */}
      <path d="M38 52 L60 62 L82 52 M38 72 L60 62 L82 72 M48 48 L60 76 M72 48 L60 76" stroke="#FEF08A" strokeWidth="1" opacity="0.85" />
    </g>
    {/* Floating Musical Notes & Sparkles */}
    <path d="M78 28 C78 24, 88 20, 92 24 L92 38 C90 36, 84 36, 82 40 C80 43, 84 46, 88 44 C92 42, 94 38, 94 30 L94 22 C90 18, 78 22, 78 28 Z" fill="#D97706" />
    <path d="M28 32 C30 26, 40 28, 40 36 L40 46 C38 44, 34 44, 32 47 C30 50, 34 53, 38 51 C41 49, 42 45, 42 40 L42 32 C38 28, 28 28, 28 32 Z" fill="#EA580C" />
    {/* Sparkling Stars */}
    <circle cx="30" cy="78" r="2.5" fill="#F59E0B" />
    <circle cx="94" cy="68" r="2" fill="#F59E0B" />
    <circle cx="62" cy="22" r="2" fill="#D97706" />
  </svg>
);

const MandapIllustration = () => (
  <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 sm:w-20 sm:h-20" aria-hidden="true">
    <circle cx="60" cy="60" r="52" fill="#FFE4E6" fillOpacity="0.4" stroke="#E11D48" strokeWidth="1" strokeDasharray="3 3" />
    {/* Grand Mandap Pillars */}
    <rect x="34" y="44" width="6" height="42" rx="2" fill="#D4A853" />
    <rect x="80" y="44" width="6" height="42" rx="2" fill="#D4A853" />
    {/* Mandap Floral Arch & Canopy */}
    <path d="M28 46 Q60 22 92 46 L90 50 Q60 28 30 50 Z" fill="#991B1B" />
    <path d="M26 44 Q60 16 94 44" stroke="#D4A853" strokeWidth="2" fill="none" />
    {/* Hanging Floral Toran Garland */}
    <path d="M34 50 Q46 58 58 50 Q70 58 82 50" stroke="#F59E0B" strokeWidth="2" fill="none" strokeDasharray="3 2" />
    {/* Sacred Havan Kund Base & Eternal Flame */}
    <path d="M50 82 L70 82 L66 88 L54 88 Z" fill="#78350F" />
    <path d="M60 64 C64 72, 66 76, 60 82 C54 76, 56 72, 60 64 Z" fill="url(#mandapFlame)" />
    {/* Two Hearts Love Knot */}
    <path d="M56 36 C53 32, 47 34, 48 38 C49 42, 56 46, 56 46 C56 46, 63 42, 64 38 C65 34, 59 32, 56 36 Z" fill="#BE123C" />
    <defs>
      <linearGradient id="mandapFlame" x1="60" y1="64" x2="60" y2="82" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FBBF24" />
        <stop offset="0.6" stopColor="#DC2626" />
        <stop offset="1" stopColor="#991B1B" />
      </linearGradient>
    </defs>
  </svg>
);

export const WeddingEvents = ({ data: _data, t: _t, lang: _lang }) => {
  // Explicitly configured 4 chronological wedding events
  const timelineEvents = [
    {
      number: "01",
      badge: "SHUBH AARAMBH",
      title: "Ganesh Pujan",
      tagline: "A Sacred Beginning",
      description: "With the blessings of Lord Ganesha, we begin this beautiful celebration with prayers, positivity, and happiness.",
      date: "24 November 2026",
      time: "9:00 AM onwards",
      venue: "Chowk Mohalla, Sundrel, Dhar, MP",
      themeBorder: "border-[#D4A853]/60 hover:border-[#D4A853]",
      themeBg: "bg-gradient-to-br from-[#FFFDF9] via-[#FFF9ED] to-[#FFF3DC]",
      accentColor: "text-[#B45309]",
      markerBg: "bg-gradient-to-br from-[#FEF3C7] to-[#FDE68A] text-[#B45309]",
      markerIcon: Flame,
      illustration: <GaneshPujanIllustration />,
      isGrandFinale: false,
    },
    {
      number: "02",
      badge: "GULABI RANG • SUNEHRI SANG",
      title: "Haldi Ceremony",
      tagline: "A Little Haldi, A Lot of Happiness!",
      description: "Surrounded by sunshine, laughter, and the warmth of our loved ones, let's paint this day in shades of yellow.",
      date: "24 November 2026",
      time: "2:00 PM onwards",
      dressCode: "Yellow & Traditional",
      venue: "Chowk Mohalla, Sundrel, Dhar, MP",
      themeBorder: "border-[#F59E0B]/60 hover:border-[#F59E0B]",
      themeBg: "bg-gradient-to-br from-[#FFFDF9] via-[#FFFBEB] to-[#FEF9C3]",
      accentColor: "text-[#D97706]",
      markerBg: "bg-gradient-to-br from-[#FEF08A] to-[#FDE047] text-[#A16207]",
      markerIcon: Sun,
      illustration: <HaldiIllustration />,
      isGrandFinale: false,
    },
    {
      number: "03",
      badge: "SWAR • SUR • SUROOR",
      title: "Sangeet Night",
      tagline: "Let's Dance Into Forever!",
      description: "An evening of music, magical moments, endless dancing, and unforgettable memories.",
      date: "24 November 2026",
      time: "8:00 PM onwards",
      dressCode: "Festive Glamour & Jewel Tones",
      venue: "Chowk Mohalla, Sundrel, Dhar, MP",
      themeBorder: "border-[#F472B6]/60 hover:border-[#F472B6]",
      themeBg: "bg-gradient-to-br from-[#FFFDF9] via-[#FFF7ED] to-[#FFE4E6]",
      accentColor: "text-[#BE185D]",
      markerBg: "bg-gradient-to-br from-[#FCE7F3] to-[#FBCFE8] text-[#BE185D]",
      markerIcon: Music2,
      illustration: <SangeetIllustration />,
      isGrandFinale: false,
    },
    {
      number: "04",
      badge: "THE SACRED UNION",
      title: "Wedding Ceremony",
      tagline: "The Day We Become One",
      description: "With the blessings of our families and the love of everyone dear to us, we invite you to witness our sacred union and celebrate the beginning of our forever.",
      date: "25 November 2026",
      time: "9:00 AM onwards • Baraat & Vivah",
      dressCode: "Royal Ethnic & Traditional Silk",
      venue: "Sundrel, Dhar, Madhya Pradesh",
      themeBorder: "border-2 border-[#D4A853] hover:border-[#9B7832]",
      themeBg: "bg-gradient-to-br from-[#FFFDF9] via-[#FFF5ED] to-[#FFE8E8]",
      accentColor: "text-[#6F2927]",
      markerBg: "bg-gradient-to-br from-[#FFE4E6] to-[#FECDD3] text-[#991B1B]",
      markerIcon: Heart,
      illustration: <MandapIllustration />,
      isGrandFinale: true,
    },
  ];

  return (
    <section id="events" className="py-24 sm:py-32 px-4 sm:px-6 relative bg-gradient-to-b from-[#F8F1E3] via-[#FFFDF9] to-[#F8F1E3] overflow-hidden">
      {/* Background Soft Ambiance Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#D4A853]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[#F59E0B]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* 5. Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-20 sm:mb-28"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-cream-50 border border-[#D4A853]/50 shadow-sm mb-3.5">
            <Sparkles className="w-3.5 h-3.5 text-[#D4A853]" />
            <span className="text-xs font-serif tracking-[0.25em] uppercase text-burgundy font-semibold">
              CHRONOLOGICAL TIMELINE
            </span>
            <Sparkles className="w-3.5 h-3.5 text-[#D4A853]" />
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-playfair font-semibold text-burgundy tracking-wide leading-tight">
            Our Wedding Celebrations
          </h2>

          <p className="mt-3.5 text-base sm:text-xl font-cormorant italic text-royal-brown/90 tracking-wide max-w-xl mx-auto">
            Four beautiful moments, countless precious memories.
          </p>

          <FloralGarland className="mt-5 max-w-sm mx-auto" />
        </motion.div>

        {/* 2. Timeline Layout Container */}
        <div className="relative">
          
          {/* Vertical Connecting Line - Desktop (Centered) */}
          <div className="absolute left-1/2 -translate-x-1/2 top-8 bottom-8 w-[2px] bg-gradient-to-b from-transparent via-[#D4A853] to-transparent opacity-80 hidden lg:block" />
          <div className="absolute left-1/2 -translate-x-1/2 top-12 bottom-12 w-[1px] bg-white/60 hidden lg:block" />

          {/* Vertical Connecting Line - Mobile & Tablet (Left-aligned) */}
          <div className="absolute left-6 sm:left-8 top-6 bottom-6 w-[2px] bg-gradient-to-b from-transparent via-[#D4A853] to-transparent opacity-80 lg:hidden" />

          {/* Chronological Event Cards List */}
          <div className="space-y-12 sm:space-y-16 lg:space-y-24">
            {timelineEvents.map((event, index) => {
              const isEven = index % 2 === 1; // Alternates left/right on desktop
              const MarkerIconComponent = event.markerIcon;

              return (
                <div
                  key={event.number}
                  className="relative flex flex-col lg:flex-row items-center w-full"
                >
                  {/* Central Timeline Circular Marker */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    whileHover={{ scale: 1.15 }}
                    className={`absolute z-20 flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-[#D4A853] shadow-md transition-shadow hover:shadow-gold-glow cursor-pointer ${
                      event.markerBg
                    } ${
                      // Desktop: Exactly at center line
                      'lg:left-1/2 lg:-translate-x-1/2 ' +
                      // Mobile: On the left timeline line
                      'left-6 sm:left-8 -translate-x-1/2 top-6 lg:top-1/2 lg:-translate-y-1/2'
                    } ${event.isGrandFinale ? 'ring-4 ring-[#D4A853]/30' : ''}`}
                    title={event.title}
                  >
                    <MarkerIconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
                    {event.isGrandFinale && (
                      <span className="absolute -inset-1 rounded-full border border-[#D4A853] animate-ping opacity-40 pointer-events-none" />
                    )}
                  </motion.div>

                  {/* Desktop Left-Side Card Column (Empty when card is on right) */}
                  <div className={`hidden lg:block lg:w-1/2 ${isEven ? 'order-1' : 'order-1 pr-12 text-right'}`}>
                    {!isEven && (
                      <TimelineCard
                        event={event}
                        isLeft={true}
                      />
                    )}
                  </div>

                  {/* Desktop Right-Side Card Column (Empty when card is on left) */}
                  <div className={`w-full lg:w-1/2 ${isEven ? 'lg:order-2 lg:pl-12' : 'lg:order-2'} pl-14 sm:pl-20 lg:pl-12`}>
                    {(isEven || typeof window === 'undefined') && (
                      <div className="hidden lg:block">
                        <TimelineCard
                          event={event}
                          isLeft={false}
                        />
                      </div>
                    )}

                    {/* Mobile Card Rendering (Always on right of mobile timeline line) */}
                    <div className="block lg:hidden w-full">
                      <TimelineCard
                        event={event}
                        isLeft={false}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 6. Final Timeline Decoration */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20 sm:mt-28 text-center max-w-2xl mx-auto px-4"
        >
          <div className="h-[1px] w-32 sm:w-48 bg-gradient-to-r from-transparent via-[#D4A853] to-transparent mx-auto mb-6" />

          <p className="font-playfair text-lg sm:text-2xl md:text-3xl font-semibold text-burgundy tracking-wide leading-relaxed">
            Two Families. One Beautiful Beginning. Forever Together.
          </p>

          <div className="mt-4 flex items-center justify-center space-x-3 text-[#D4A853]">
            <span className="text-xs text-burgundy">♦</span>
            <span className="text-xs font-serif tracking-[0.25em] uppercase text-gold-dark font-medium">
              शुभ विवाह • मांगलिक प्रसंग
            </span>
            <span className="text-xs text-burgundy">♦</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

// Subcomponent: Premium Individual Event Card
const TimelineCard = ({ event, isLeft }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -35 : 35, y: 20 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -5, transition: { duration: 0.25 } }}
      className={`relative w-full rounded-3xl p-6 sm:p-8 md:p-9 border shadow-royal hover:shadow-gold-glow transition-all duration-300 text-left overflow-hidden ${
        event.themeBg
      } ${event.themeBorder} ${
        event.isGrandFinale ? 'shadow-royal-lg ring-1 ring-[#D4A853]/60' : ''
      }`}
    >
      {/* Corner Ornaments */}
      <CornerFlourish className="absolute top-3 left-3 w-7 h-7 sm:w-9 sm:h-9 opacity-65 pointer-events-none" position="top-left" />
      <CornerFlourish className="absolute top-3 right-3 w-7 h-7 sm:w-9 sm:h-9 opacity-65 pointer-events-none" position="top-right" />

      {/* Grand Finale Ribbon Badge for Wedding Ceremony */}
      {event.isGrandFinale && (
        <div className="absolute top-0 right-10 bg-gradient-to-r from-burgundy to-burgundy-light text-[#FFF9EF] text-[10px] font-serif uppercase tracking-[0.2em] font-semibold px-4 py-1 rounded-b-lg border-b border-x border-[#D4A853]/70 shadow-sm">
          Grand Finale
        </div>
      )}

      {/* Card Header: Event Number & Visual Illustration */}
      <div className="flex items-start justify-between gap-4 mb-4">
        <div>
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cream-50/90 border border-[#D4A853]/40 shadow-xs mb-2">
            <span className="text-[11px] font-serif uppercase tracking-widest text-[#B45309] font-bold">
              EVENT {event.number}
            </span>
            <span className="text-[10px] text-[#D4A853]">♦</span>
            <span className="text-[10px] font-serif uppercase tracking-wider text-royal-brown/80 font-medium">
              {event.badge}
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl md:text-4xl font-playfair font-semibold text-burgundy tracking-wide mt-1">
            {event.title}
          </h3>

          <p className="text-xs sm:text-sm font-serif italic text-gold-dark font-medium mt-1">
            "{event.tagline}"
          </p>
        </div>

        {/* Thematic Event Visual Illustration */}
        <div className="shrink-0 p-1.5 rounded-2xl bg-white/70 border border-[#D4A853]/30 shadow-inner">
          {event.illustration}
        </div>
      </div>

      {/* Event Description */}
      <p className="text-xs sm:text-sm md:text-base font-cormorant italic text-royal-brown/95 leading-relaxed mb-6 pt-2 border-t border-[#D4A853]/25">
        "{event.description}"
      </p>

      {/* Event Meta Badges: Date, Time & Dress Code */}
      <div className="pt-4 border-t border-[#D4A853]/30 flex flex-wrap items-center gap-2.5 sm:gap-3 text-xs font-serif">
        {/* Date Badge */}
        <div className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full bg-cream-50/90 border border-[#D4A853]/40 text-royal-brown font-medium shadow-xs">
          <Calendar className="w-3.5 h-3.5 text-burgundy shrink-0" />
          <span>{event.date}</span>
        </div>

        {/* Time Badge (where available) */}
        {event.time && (
          <div className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full bg-cream-50/90 border border-[#D4A853]/40 text-royal-brown font-medium shadow-xs">
            <Clock className="w-3.5 h-3.5 text-[#B45309] shrink-0" />
            <span>{event.time}</span>
          </div>
        )}

        {/* Dress Code Badge (where available) */}
        {event.dressCode && (
          <div className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full bg-[#FFFBEB] border border-[#F59E0B]/50 text-[#B45309] font-medium shadow-xs">
            <Shirt className="w-3.5 h-3.5 text-[#F59E0B] shrink-0" />
            <span className="font-semibold">{event.dressCode}</span>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default WeddingEvents;
