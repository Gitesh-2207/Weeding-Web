import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCountdown } from '../hooks/useCountdown';
import { RoyalMandala } from './common/DecorativeElements';
import { Clock, Sparkles } from 'lucide-react';

export const Countdown = ({ data, t, lang }) => {
  const { days, hours, minutes, seconds, isExpired, isToday } = useCountdown(data.date.weddingDate);

  const units = [
    { label: t.countdown.days, shortLabel: lang === 'hi' ? 'दिन' : 'DAYS', value: days },
    { label: t.countdown.hours, shortLabel: lang === 'hi' ? 'घंटे' : 'HOURS', value: hours },
    { label: t.countdown.minutes, shortLabel: lang === 'hi' ? 'मिनट' : 'MINUTES', value: minutes },
    { label: t.countdown.seconds, shortLabel: lang === 'hi' ? 'सेकंड' : 'SECONDS', value: seconds, isLive: true },
  ];

  return (
    <section id="countdown" className="py-20 px-3 sm:px-6 relative bg-gradient-to-b from-[#F8F1E3] via-[#FFF9EF] to-[#F8F1E3] overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gold/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Section Heading */}
        <div className="mb-10 sm:mb-12">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-cream-50/90 border border-gold/50 shadow-sm mb-3.5">
            <Clock className="w-3.5 h-3.5 text-gold-dark" />
            <span className="text-[11px] sm:text-xs font-serif tracking-[0.25em] uppercase text-burgundy font-semibold">
              {t.countdown.tag}
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-playfair font-semibold text-royal-brown tracking-wide">
            {t.countdown.title}
          </h2>

          <p className="mt-2 text-xs sm:text-sm md:text-base font-serif text-gold-dark font-medium tracking-[0.2em] uppercase">
            {data.date.displayDateWithWeekday || data.date.displayDate}
          </p>

          <div className="h-[1px] w-32 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-4" />
        </div>

        {/* Expired / Auspicious Day Status */}
        {isToday && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-6 mb-8 rounded-2xl bg-burgundy text-[#FFF9EF] border-2 border-gold shadow-gold-glow max-w-xl mx-auto"
          >
            <Sparkles className="w-8 h-8 text-gold mx-auto mb-2 animate-bounce" />
            <p className="font-playfair text-xl sm:text-2xl font-bold tracking-wide">
              {t.countdown.weddingToday}
            </p>
          </motion.div>
        )}

        {isExpired && !isToday && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-6 mb-8 rounded-2xl bg-cream-card border border-gold shadow-royal max-w-xl mx-auto"
          >
            <RoyalMandala size={44} className="mx-auto mb-2 text-gold" />
            <p className="font-playfair text-xl sm:text-2xl font-bold text-burgundy">
              {t.countdown.weddingPassed}
            </p>
          </motion.div>
        )}

        {/* Amazing One-Line Royal Countdown Cassette Banner */}
        {!isExpired && (
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative mx-auto max-w-4xl"
          >
            {/* Shimmering Outer Border Box */}
            <div className="relative p-1 rounded-3xl bg-gradient-to-r from-gold/30 via-gold to-gold/30 shadow-royal-lg">
              {/* Inner Luxury Panel */}
              <div className="relative overflow-hidden rounded-[22px] bg-gradient-to-r from-[#FFFDF9] via-[#FFF9EF] to-[#FFFDF9] py-6 px-3 sm:py-8 sm:px-8 border border-gold/40">
                {/* Diagonal Light Sweep Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full animate-[shimmer_5s_infinite_ease-in-out] pointer-events-none" />

                {/* Subtle Filigree Corners */}
                <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-gold/60 pointer-events-none" />
                <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-gold/60 pointer-events-none" />
                <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-gold/60 pointer-events-none" />
                <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-gold/60 pointer-events-none" />

                {/* Single-Line Row Container */}
                <div className="flex flex-nowrap items-center justify-between sm:justify-center sm:space-x-5 md:space-x-8 text-center select-none">
                  {units.map((unit, index) => (
                    <React.Fragment key={unit.label}>
                      {/* Individual Countdown Cell */}
                      <div className="flex-1 sm:flex-initial flex flex-col items-center justify-center min-w-0 px-1 sm:px-3">
                        {/* Digit Container with Animated Roll-up */}
                        <div className="relative h-12 sm:h-16 md:h-20 flex items-center justify-center overflow-hidden">
                          <AnimatePresence mode="popLayout">
                            <motion.span
                              key={unit.value}
                              initial={{ y: 22, opacity: 0, filter: 'blur(3px)' }}
                              animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                              exit={{ y: -22, opacity: 0, filter: 'blur(3px)' }}
                              transition={{ duration: 0.35, ease: 'easeOut' }}
                              className="font-playfair text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-burgundy filter drop-shadow-[0_1px_2px_rgba(111,41,39,0.15)]"
                            >
                              {unit.value}
                            </motion.span>
                          </AnimatePresence>

                          {/* Live Pulse Dot on Seconds */}
                          {unit.isLive && (
                            <span className="absolute -top-0.5 right-0 flex h-2 w-2">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75" />
                              <span className="relative inline-flex rounded-full h-2 w-2 bg-gold" />
                            </span>
                          )}
                        </div>

                        {/* Label */}
                        <div className="mt-1 sm:mt-2 flex items-center justify-center space-x-1">
                          <span className="text-[10px] sm:text-xs md:text-sm font-serif tracking-[0.16em] sm:tracking-[0.25em] uppercase text-royal-brown/85 font-semibold">
                            {unit.shortLabel}
                          </span>
                        </div>
                      </div>

                      {/* Ornate Gold Star Separator between items (only between cells) */}
                      {index < units.length - 1 && (
                        <div className="flex flex-col items-center justify-center px-0.5 sm:px-1 text-gold/70 select-none">
                          <span className="text-sm sm:text-xl md:text-2xl animate-pulse font-serif">
                            ✦
                          </span>
                          <span className="w-1 h-1 rounded-full bg-burgundy/40 mt-1 hidden sm:block" />
                        </div>
                      )}
                    </React.Fragment>
                  ))}
                </div>

                {/* Bottom Auspicious Sub-caption */}
                <div className="mt-5 pt-4 border-t border-gold/20 flex items-center justify-center space-x-2 text-[11px] sm:text-xs font-serif text-royal-brown/70 tracking-widest uppercase">
                  <span>✨</span>
                  <span>{lang === 'hi' ? 'शुभ विवाह की मंगल प्रतीक्षा' : 'Until We Celebrate The Sacred Vows'}</span>
                  <span>✨</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};
