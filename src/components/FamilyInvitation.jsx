import React from 'react';
import { motion } from 'framer-motion';
import { CornerFlourish, FloralGarland } from './common/DecorativeElements';
import { Heart } from 'lucide-react';

// Sacred Indian Lotus Motif representing divine blessings, purity and respect for elders
const LotusMotif = ({ className = "w-10 h-10", color = "#D4A853" }) => (
  <svg
    viewBox="0 0 80 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    {/* Central Lotus Petal */}
    <path
      d="M40 8 C44 22, 48 34, 40 48 C32 34, 36 22, 40 8 Z"
      fill={color}
      fillOpacity="0.25"
      stroke={color}
      strokeWidth="1.25"
    />
    {/* Inner Left & Right Petals */}
    <path
      d="M40 48 C30 36, 20 30, 24 16 C30 26, 36 38, 40 48 Z"
      fill={color}
      fillOpacity="0.18"
      stroke={color}
      strokeWidth="1"
    />
    <path
      d="M40 48 C50 36, 60 30, 56 16 C50 26, 44 38, 40 48 Z"
      fill={color}
      fillOpacity="0.18"
      stroke={color}
      strokeWidth="1"
    />
    {/* Outer Flared Petals */}
    <path
      d="M40 48 C26 42, 10 38, 12 26 C20 34, 30 42, 40 48 Z"
      stroke={color}
      strokeWidth="1"
      fill={color}
      fillOpacity="0.1"
    />
    <path
      d="M40 48 C54 42, 70 38, 68 26 C60 34, 50 42, 40 48 Z"
      stroke={color}
      strokeWidth="1"
      fill={color}
      fillOpacity="0.1"
    />
    {/* Base Padam Curve */}
    <path
      d="M22 50 Q40 56 58 50"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <circle cx="40" cy="52" r="2" fill={color} />
  </svg>
);

export const FamilyInvitation = ({ data }) => {
  // --------------------------------------------------------------------------
  // EDITABLE DETAILS: Replace images, names, and family titles as needed
  // --------------------------------------------------------------------------
  const brideName = data?.couple?.bride?.fullName || "Khushbu Patidar";
  const groomName = data?.couple?.groom?.fullName || "Abhay Patidar";
  const brideFamilyName = data?.couple?.bride?.family || "The Patidar Family";
  const groomFamilyName = data?.couple?.groom?.family || "The Patidar Family";

  // Actual/Demo image paths
  const brideImage = data?.couple?.bride?.image || "/images/demo-bride.png";
  const groomImage = data?.couple?.groom?.image || "/images/demo-groom.jpeg";

  // City / Location
  const brideCity = data?.couple?.bride?.shortCity || "Sundrel (M.P.)";
  const groomCity = data?.couple?.groom?.shortCity || "Mandleshwar (M.P.)";

  return (
    <section
      id="family-invitation"
      className="py-8 sm:py-10 px-4 sm:px-6 relative bg-gradient-to-b from-[#F8F1E3] via-[#FFFDF9] to-[#F8F1E3] overflow-hidden"
    >
      {/* Background Soft Golden Ambiance Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-[#D4A853]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 35, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="relative p-5 sm:p-8 md:p-10 rounded-3xl bg-cream-card border-2 border-[#D4A853]/60 shadow-royal-lg text-center overflow-hidden hover:shadow-gold-glow transition-shadow duration-700"
        >
          {/* Inner Dashed Royal Border */}
          <div className="absolute inset-3 sm:inset-5 md:inset-6 border border-[#D4A853]/35 border-dashed rounded-2xl pointer-events-none" />

          {/* Delicate Corner Flourishes */}
          <CornerFlourish
            className="absolute top-3 left-3 sm:top-5 sm:left-5 w-8 h-8 sm:w-14 sm:h-14 opacity-75"
            position="top-left"
            color="#D4A853"
          />
          <CornerFlourish
            className="absolute top-3 right-3 sm:top-5 sm:right-5 w-8 h-8 sm:w-14 sm:h-14 opacity-75"
            position="top-right"
            color="#D4A853"
          />
          <CornerFlourish
            className="absolute bottom-3 left-3 sm:bottom-5 sm:left-5 w-8 h-8 sm:w-14 sm:h-14 opacity-75"
            position="bottom-left"
            color="#D4A853"
          />
          <CornerFlourish
            className="absolute bottom-3 right-3 sm:bottom-5 sm:right-5 w-8 h-8 sm:w-14 sm:h-14 opacity-75"
            position="bottom-right"
            color="#D4A853"
          />

          {/* Traditional Lotus Blossom Top Emblem */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-center justify-center mb-2 sm:mb-3"
          >
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-cream-50/90 border border-[#D4A853]/50 shadow-sm flex items-center justify-center mb-2">
              <LotusMotif className="w-8 h-8 text-[#D4A853]" color="#D4A853" />
            </div>
          </motion.div>

          {/* 1. Top Label */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mb-2 sm:mb-3"
          >
            <p className="text-xs sm:text-sm font-serif tracking-[0.28em] sm:tracking-[0.32em] uppercase text-[#D4A853] font-semibold">
              WITH THE BLESSINGS OF OUR ELDERS
            </p>

            {/* Ornamental Divider beneath label */}
            <div className="flex items-center justify-center space-x-3 mt-3">
              <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-r from-transparent to-[#D4A853]" />
              <span className="text-xs text-burgundy">♦</span>
              <span className="text-xs text-[#D4A853]">❧</span>
              <span className="text-xs text-burgundy">♦</span>
              <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-l from-transparent to-[#D4A853]" />
            </div>
          </motion.div>

          {/* 2. Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, delay: 0.25 }}
            className="my-2 sm:my-3 px-2"
          >
            <div className="flex items-center justify-center gap-3 sm:gap-4">
              <span className="hidden md:inline-block text-[#D4A853]/60 text-lg">✦</span>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-playfair font-semibold text-burgundy tracking-wide leading-tight drop-shadow-sm">
                Two Families, One Celebration
              </h2>
              <span className="hidden md:inline-block text-[#D4A853]/60 text-lg">✦</span>
            </div>
          </motion.div>

          {/* 3. Two Image Cards: Bride & Groom */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, delay: 0.3 }}
            className="my-4 sm:my-6 max-w-2xl mx-auto"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 items-center relative">
              {/* Center Decorative Interlocking Knot (Visible on Tablet/Desktop) */}
              <div className="hidden sm:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-[#FFFDF9] border-2 border-[#D4A853] shadow-md items-center justify-center">
                <Heart className="w-5 h-5 text-burgundy fill-burgundy/20 animate-pulse" />
              </div>

              {/* Bride Image Card */}
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.35 }}
                className="group relative rounded-t-[2.75rem] rounded-b-2xl p-3 sm:p-3.5 bg-gradient-to-b from-[#FFFDF9] via-[#FFF9EF] to-[#F8F1E3] border border-[#D4A853]/60 shadow-royal hover:shadow-gold-glow transition-all duration-500 text-center"
              >
                {/* Arch-shaped Image Frame */}
                <div className="relative rounded-t-[2.5rem] rounded-b-xl overflow-hidden aspect-[3/4] border border-[#D4A853]/40 shadow-inner bg-cream-50">
                  <img
                    src={brideImage}
                    alt={brideName}
                    loading="lazy"
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                  {/* Corner Accent in frame */}
                  <div className="absolute top-3 left-3 text-[10px] font-serif uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-white/90 text-burgundy shadow-xs border border-[#D4A853]/50">
                    The Bride
                  </div>
                </div>

                {/* Bride Details */}
                <div className="pt-4 pb-2 px-2">
                  <h3 className="font-playfair text-xl sm:text-2xl font-semibold text-burgundy tracking-wide">
                    {brideName}
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm font-cormorant italic text-royal-brown/85">
                    Daughter of {brideFamilyName}
                  </p>
                  <p className="mt-0.5 text-[11px] font-serif uppercase tracking-wider text-[#84662B]">
                    {brideCity}
                  </p>
                </div>
              </motion.div>

              {/* Groom Image Card */}
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.35 }}
                className="group relative rounded-t-[2.75rem] rounded-b-2xl p-3 sm:p-3.5 bg-gradient-to-b from-[#FFFDF9] via-[#FFF9EF] to-[#F8F1E3] border border-[#D4A853]/60 shadow-royal hover:shadow-gold-glow transition-all duration-500 text-center"
              >
                {/* Arch-shaped Image Frame */}
                <div className="relative rounded-t-[2.5rem] rounded-b-xl overflow-hidden aspect-[3/4] border border-[#D4A853]/40 shadow-inner bg-cream-50">
                  <img
                    src={groomImage}
                    alt={groomName}
                    loading="lazy"
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                  {/* Corner Accent in frame */}
                  <div className="absolute top-3 right-3 text-[10px] font-serif uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-white/90 text-burgundy shadow-xs border border-[#D4A853]/50">
                    The Groom
                  </div>
                </div>

                {/* Groom Details */}
                <div className="pt-4 pb-2 px-2">
                  <h3 className="font-playfair text-xl sm:text-2xl font-semibold text-burgundy tracking-wide">
                    {groomName}
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm font-cormorant italic text-royal-brown/85">
                    Son of {groomFamilyName}
                  </p>
                  <p className="mt-0.5 text-[11px] font-serif uppercase tracking-wider text-[#84662B]">
                    {groomCity}
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* 4. Invitation Message */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="my-3 sm:my-4 max-w-xl mx-auto px-2"
          >
            <p className="text-sm sm:text-base md:text-lg font-cormorant italic text-royal-brown/95 leading-relaxed tracking-wide">
              With immense joy and the blessings of our elders,<br className="hidden sm:inline" />
              our families invite you to be a part of<br className="hidden sm:inline" />
              this beautiful union.
            </p>

            <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg font-cormorant italic text-royal-brown/95 leading-relaxed tracking-wide">
              Your presence will make our celebration<br className="hidden sm:inline" />
              even more special and memorable.
            </p>
          </motion.div>

          {/* Delicate Center Floral Garland Divider */}
          <FloralGarland className="my-3 sm:my-4 max-w-xs mx-auto opacity-75" />

          {/* 5. Family Names Section */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="mt-4 sm:mt-5 pt-4 sm:pt-5 border-t border-[#D4A853]/30"
          >
            <p className="font-script text-3xl sm:text-4xl text-gold-dark italic select-none mb-3">
              With Love,
            </p>

            <div className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3 px-6 py-3 rounded-full bg-cream-50/80 border border-[#D4A853]/40 shadow-xs max-w-lg mx-auto">
              <span className="font-serif text-xs sm:text-sm md:text-base uppercase tracking-[0.2em] font-semibold text-[#84662B]">
                {brideFamilyName}
              </span>
              <span className="text-[#D4A853] font-script text-xl italic">&amp;</span>
              <span className="font-serif text-xs sm:text-sm md:text-base uppercase tracking-[0.2em] font-semibold text-[#84662B]">
                {groomFamilyName}
              </span>
            </div>

            <p className="mt-4 text-[11px] sm:text-xs font-serif uppercase tracking-[0.25em] text-royal-brown/65">
              Patidar Pariwar • Sundrel, Dhar (M.P.)
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FamilyInvitation;
