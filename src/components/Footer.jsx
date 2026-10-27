import React from 'react';
import { RoyalMandala, FloralGarland } from './common/DecorativeElements';
import { ArrowUp } from 'lucide-react';

export const Footer = ({ data, t }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-20 px-4 sm:px-6 bg-[#FAF4E8] bg-paper-pattern border-t-2 border-gold/40 text-center overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Top Mandala */}
        <div className="mb-4">
          <RoyalMandala size={58} className="text-gold" />
        </div>

        <p className="text-xs font-serif uppercase tracking-[0.3em] text-burgundy font-semibold mb-2">
          {t.footer.madeWithLove}
        </p>

        {/* Closing Sentiment */}
        <h3 className="text-3xl sm:text-5xl font-script text-burgundy leading-tight my-2">
          "{t.footer.quote}"
        </h3>

        <p className="text-sm sm:text-base font-cormorant italic text-royal-brown/90 mt-2 max-w-lg mx-auto">
          {t.footer.waiting}
        </p>

        <FloralGarland className="my-6 max-w-md mx-auto" />

        {/* Couple & Family Signature */}
        <div className="space-y-1 mb-8">
          <p className="text-2xl sm:text-3xl font-playfair font-semibold text-royal-brown">
            {data.couple.combinedName}
          </p>
          <p className="text-xs sm:text-sm font-serif tracking-widest uppercase text-gold-dark font-medium">
            {data.date.displayDate} • {data.venue.fullLocation}
          </p>
          <p className="text-xs font-cormorant italic text-royal-brown/80 pt-2">
            {t.footer.withLove}
          </p>
          <p className="text-sm font-serif uppercase tracking-[0.18em] text-burgundy font-semibold">
            {t.footer.families}
          </p>
        </div>

        {/* Scroll To Top Button */}
        <div className="pt-4 border-t border-gold/25 flex flex-col items-center">
          <button
            onClick={scrollToTop}
            className="group flex items-center space-x-2 px-5 py-2 rounded-full bg-cream-50/90 border border-gold/50 shadow-sm text-xs font-serif uppercase tracking-widest text-royal-brown hover:text-burgundy hover:border-gold transition-all"
            aria-label={t.footer.scrollTop}
          >
            <span>{t.footer.scrollTop}</span>
            <ArrowUp className="w-3.5 h-3.5 text-gold group-hover:-translate-y-1 transition-transform" />
          </button>

          <p className="mt-8 text-[11px] font-serif tracking-wider text-royal-brown/60">
            {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};
