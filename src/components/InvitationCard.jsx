import React from 'react';
import { motion } from 'framer-motion';
import { CornerFlourish, RoyalMandala, FloralGarland } from './common/DecorativeElements';
import { Calendar } from 'lucide-react';

export const InvitationCard = ({ data, t }) => {
  // --------------------------------------------------------------------------
  // EDITABLE PLACEHOLDERS: Easily replace or customize bride and groom names
  // --------------------------------------------------------------------------
  const brideName = data?.couple?.bride?.fullName || "Khushbu Patidar";
  const groomName = data?.couple?.groom?.fullName || "Abhay Patidar";

  return (
    <section id="invitation" className="py-20 sm:py-28 px-4 sm:px-6 relative bg-gradient-to-b from-[#F8F1E3] via-[#FFFDF9] to-[#F8F1E3] overflow-hidden">
      {/* Subtle background radial golden aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gold/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative p-6 sm:p-14 md:p-16 rounded-3xl bg-cream-card border-2 border-gold/60 shadow-royal-lg text-center overflow-hidden hover:shadow-gold-glow transition-shadow duration-700"
        >
          {/* Inner Dashed Border simulating double-printed traditional royal stationery */}
          <div className="absolute inset-3 sm:inset-5 md:inset-6 border border-gold/35 border-dashed rounded-2xl pointer-events-none" />

          {/* Delicate Corner Flourishes */}
          <CornerFlourish className="absolute top-3 left-3 sm:top-5 sm:left-5 w-8 h-8 sm:w-14 sm:h-14 opacity-80" position="top-left" />
          <CornerFlourish className="absolute top-3 right-3 sm:top-5 sm:right-5 w-8 h-8 sm:w-14 sm:h-14 opacity-80" position="top-right" />
          <CornerFlourish className="absolute bottom-3 left-3 sm:bottom-5 sm:left-5 w-8 h-8 sm:w-14 sm:h-14 opacity-80" position="bottom-left" />
          <CornerFlourish className="absolute bottom-3 right-3 sm:bottom-5 sm:right-5 w-8 h-8 sm:w-14 sm:h-14 opacity-80" position="bottom-right" />

          {/* Auspicious Rotating Royal Seal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-4 sm:mb-6"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 55, repeat: Infinity, ease: 'linear' }}
              className="inline-block"
            >
              <RoyalMandala size={48} className="text-gold" />
            </motion.div>
          </motion.div>

          {/* 1. Introductory Text */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mb-6 sm:mb-8"
          >
            <p className="text-xs sm:text-sm font-serif tracking-[0.26em] sm:tracking-[0.32em] uppercase text-gold-dark font-semibold">
              TOGETHER WITH THEIR FAMILIES
            </p>
            <p className="mt-2 text-sm sm:text-base md:text-lg font-cormorant italic text-royal-brown/90 tracking-wide">
              We Joyfully Invite You To Celebrate
            </p>
          </motion.div>

          <div className="h-[1px] w-28 sm:w-36 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-6 sm:mb-8 opacity-75" />

          {/* 2. Bride and Groom Names (Primary Visual Focus) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, delay: 0.25 }}
            className="my-5 sm:my-8 px-2"
          >
            {/* Bride's Name */}
            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-playfair font-semibold text-burgundy tracking-wide leading-tight drop-shadow-sm">
              {brideName}
            </h2>

            {/* Decorative Ampersand */}
            <div className="flex items-center justify-center space-x-4 my-2 sm:my-3">
              <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-r from-transparent to-gold" />
              <span className="font-script text-3xl sm:text-4xl md:text-5xl text-gold-dark italic select-none">
                &amp;
              </span>
              <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-l from-transparent to-gold" />
            </div>

            {/* Groom's Name */}
            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-playfair font-semibold text-burgundy tracking-wide leading-tight drop-shadow-sm">
              {groomName}
            </h2>
          </motion.div>

          {/* 3. Wedding Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-5 mb-7 sm:mb-9"
          >
            <p className="text-base sm:text-xl md:text-2xl font-cormorant italic text-royal-brown/90 tracking-wider">
              As They Begin Their Forever
            </p>
          </motion.div>

          {/* Sacred Hand & Mehndi Medallion */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="my-3 sm:my-5 flex justify-center"
          >
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full p-1 bg-gradient-to-tr from-gold via-cream-50 to-gold shadow-royal border border-gold/60">
              <div className="w-full h-full rounded-full overflow-hidden border border-gold/40">
                <img
                  src="/images/couple-hands-heart.jpeg"
                  alt="A Sacred Promise"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </motion.div>

          {/* Delicate Floral Garland Divider */}
          <FloralGarland className="my-4 sm:my-6 max-w-sm mx-auto opacity-80" />

          {/* 4. Wedding Date (Prominently Styled with Golden Accent) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, delay: 0.45 }}
            className="my-6 sm:my-8 py-4 sm:py-5 px-4 sm:px-10 rounded-2xl bg-gradient-to-r from-cream-50/80 via-ivory-100/95 to-cream-50/80 border border-gold/50 shadow-sm max-w-lg mx-auto"
          >
            <div className="flex items-center justify-center space-x-2 text-burgundy mb-1">
              <Calendar className="w-3.5 h-3.5 text-gold-dark shrink-0" />
              <span className="text-[11px] sm:text-xs font-serif uppercase tracking-[0.22em] font-semibold text-burgundy">
                Auspicious Wedding Dates
              </span>
            </div>

            <p className="text-2xl sm:text-3xl md:text-4xl font-playfair font-bold text-gold-dark tracking-wider my-1">
              24–25 November 2026
            </p>

            <p className="text-xs sm:text-sm font-serif text-royal-brown/75 tracking-wider uppercase">
              {data?.venue?.fullLocation || "Sundrel, Dhar, Madhya Pradesh, India"}
            </p>
          </motion.div>

          {/* 5. Closing Message */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="mt-6 sm:mt-8 pt-6 sm:pt-7 border-t border-gold/30"
          >
            <p className="text-sm sm:text-base md:text-lg font-cormorant italic text-royal-brown/90 leading-relaxed max-w-lg mx-auto px-2">
              Two families, one beautiful celebration,<br className="hidden sm:inline" />
              and a love story that will last a lifetime.
            </p>

            <div className="mt-5 flex justify-center items-center space-x-3 text-gold">
              <span className="text-xs text-burgundy">♦</span>
              <span className="text-xs sm:text-sm font-serif tracking-[0.2em] uppercase text-gold-dark font-medium">
                {t?.footer?.families || "Patidar Family"}
              </span>
              <span className="text-xs text-burgundy">♦</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default InvitationCard;
