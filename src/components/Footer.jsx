import React from 'react';
import { RoyalMandala } from './common/DecorativeElements';
import { ArrowUp } from 'lucide-react';

export const Footer = ({ data, t }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-8 sm:py-10 px-4 sm:px-6 bg-[#FAF4E8] bg-paper-pattern border-t-2 border-gold/40 text-center overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Top Mandala */}
        <div className="mb-2">
          <RoyalMandala size={52} className="text-gold" />
        </div>

        {/* Family Signature */}
        <div className="space-y-1.5 my-3">
          <p className="text-xl sm:text-2xl md:text-3xl font-cormorant italic text-gold-dark font-medium leading-relaxed">
            {t.footer.withLove}
          </p>
          <p className="text-sm sm:text-base md:text-lg font-serif uppercase tracking-[0.2em] text-burgundy font-bold">
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

          <p className="mt-4 text-[11px] font-serif tracking-wider text-royal-brown/60">
            {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};
