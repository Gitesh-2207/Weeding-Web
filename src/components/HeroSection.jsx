import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { RoyalMandala, FloralGarland, HangingToran } from './common/DecorativeElements';
import { ScrollExploreIndicator } from './common/ScrollExploreIndicator';
import { Calendar, MapPin } from 'lucide-react';

export const HeroSection = ({ data, t, lang }) => {
  const { scrollY } = useScroll();
  const archY = useTransform(scrollY, [0, 600], [0, 80]);
  const toranY = useTransform(scrollY, [0, 400], [0, -35]);

  // Smooth scroll-driven fade out for the scroll explore indicator
  const scrollIndicatorOpacity = useTransform(scrollY, [0, 130], [1, 0]);
  const scrollIndicatorY = useTransform(scrollY, [0, 130], [0, 16]);
  const scrollIndicatorPointerEvents = useTransform(scrollY, (y) => (y > 90 ? 'none' : 'auto'));

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-between pt-16 sm:pt-20 pb-10 sm:pb-12 px-4 sm:px-6 overflow-hidden bg-paper-pattern"
    >
      {/* Decorative Traditional Toran Hanging from Top with subtle scroll parallax */}
      <motion.div style={{ y: toranY }} className="absolute top-2 left-0 right-0 z-10 hidden sm:block pointer-events-none">
        <HangingToran count={15} />
      </motion.div>

      {/* Decorative Palace Arch Background Illustration Silhouette with Parallax */}
      <motion.div style={{ y: archY }} className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-30 select-none">
        <svg
          viewBox="0 0 800 900"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full max-w-4xl h-full object-contain text-gold"
        >
          {/* Traditional Mughal / Rajput Arch Lines */}
          <path
            d="M100 900V450C100 250 240 100 400 100C560 100 700 250 700 450V900"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeDasharray="6 4"
          />
          <path
            d="M150 900V460C150 280 260 160 400 160C540 160 650 280 650 460V900"
            stroke="currentColor"
            strokeWidth="1"
          />
          <path
            d="M400 60 C370 120, 310 160, 400 220 C490 160, 430 120, 400 60 Z"
            fill="currentColor"
            opacity="0.15"
          />
          {/* Hanging Chandelier / Jhumka motif */}
          <line x1="400" y1="220" x2="400" y2="300" stroke="currentColor" strokeWidth="1" />
          <circle cx="400" cy="305" r="5" fill="currentColor" />
        </svg>
      </motion.div>

      <div className="flex-1 flex flex-col items-center justify-center max-w-4xl mx-auto text-center z-10 my-auto">
        {/* Top Auspicious Symbol */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-4"
        >
          <RoyalMandala size={52} className="text-gold" />
          <div className="inline-block mt-3 px-4 py-1 rounded-full bg-cream-50/90 border border-gold/40 shadow-sm">
            <span className="text-[11px] sm:text-xs tracking-[0.28em] font-serif uppercase text-burgundy font-semibold">
              {t.hero.badge}
            </span>
          </div>
        </motion.div>

        {/* Introduction text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-xs sm:text-sm font-serif tracking-[0.3em] uppercase text-royal-brown/80 mb-3"
        >
          {lang === 'hi' ? 'शुभ परिणय संस्कार' : 'THE WEDDING OF'}
        </motion.p>

        {/* Central Couple Names */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.35, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="my-3 sm:my-5"
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-script text-burgundy tracking-wide filter drop-shadow-sm leading-tight">
            {data.couple.bride.fullName}
          </h1>

          <div className="flex items-center justify-center my-2 sm:my-3 space-x-4">
            <div className="h-[1px] w-16 sm:w-28 bg-gradient-to-r from-transparent via-gold to-gold/70" />
            <span className="text-2xl sm:text-4xl font-script text-gold-dark italic">
              &amp;
            </span>
            <div className="h-[1px] w-16 sm:w-28 bg-gradient-to-l from-transparent via-gold to-gold/70" />
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-script text-burgundy tracking-wide filter drop-shadow-sm leading-tight">
            {data.couple.groom.fullName}
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-base sm:text-xl font-cormorant italic text-royal-brown font-medium max-w-lg mx-auto my-3 tracking-wide"
        >
          "{t.hero.subtitle}"
        </motion.p>

        {/* Royal Arch Couple Portrait Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.55, duration: 0.8 }}
          className="my-3 sm:my-4 relative"
        >
          <div className="relative mx-auto w-36 sm:w-44 h-48 sm:h-56 rounded-t-full rounded-b-3xl p-1.5 bg-gradient-to-b from-gold via-cream-50 to-gold shadow-royal-lg border border-gold/70 group hover:shadow-gold-glow transition-all duration-500">
            <div className="w-full h-full rounded-t-full rounded-b-2xl overflow-hidden relative bg-cream-50">
              <img
                src={data?.couple?.heroImage || "/images/couple-hero.jpeg"}
                alt={`${data.couple.bride.fullName} & ${data.couple.groom.fullName}`}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-burgundy/40 via-transparent to-transparent pointer-events-none" />
            </div>
            {/* Elegant Name Badge Tag */}
            <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 px-3.5 py-0.5 rounded-full bg-cream-50/95 border border-gold/70 text-[10px] sm:text-[11px] font-serif uppercase tracking-widest text-burgundy font-semibold shadow-sm whitespace-nowrap">
              Abhay &amp; Khushbu
            </div>
          </div>
        </motion.div>

        {/* Garland separator */}
        <FloralGarland className="my-2 max-w-md" />

        {/* Date and Venue Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.8 }}
          className="mt-4 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-royal-brown"
        >
          <div className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-cream-card border border-gold/40 shadow-sm">
            <Calendar className="w-4 h-4 text-gold-dark" />
            <span className="font-playfair text-sm sm:text-base font-semibold tracking-wide">
              {data.date.displayDate}
            </span>
          </div>
          <div className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-cream-card border border-gold/40 shadow-sm">
            <MapPin className="w-4 h-4 text-burgundy" />
            <span className="font-serif text-xs sm:text-sm tracking-wider uppercase font-medium">
              {data.venue.fullLocation}
            </span>
          </div>
        </motion.div>
      </div>

      {/* Enhanced "Scroll to Explore the Celebration" Section */}
      <motion.div
        style={{
          opacity: scrollIndicatorOpacity,
          y: scrollIndicatorY,
          pointerEvents: scrollIndicatorPointerEvents,
        }}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="z-10 mt-6 sm:mt-8 mb-1 flex flex-col items-center"
      >
        <ScrollExploreIndicator
          t={t}
          lang={lang}
          targetId="countdown"
        />
      </motion.div>
    </section>
  );
};
