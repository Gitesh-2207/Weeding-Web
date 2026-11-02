import React from 'react';
import { ChevronDown } from 'lucide-react';

/**
 * ScrollExploreIndicator
 * An elegant, animated royal wedding scroll-down indicator on the left side.
 * 
 * Features:
 * - Warm orange-and-cream palette with primary accent color #E8A84E
 * - Minimal mouse-scroll icon, small label "SCROLL TO EXPLORE", and double chevrons
 * - Subtle gentle bounce animation indicating downward exploration
 * - Click smoothly scrolls to the next section (Countdown / targetId)
 * - Accessible with keyboard controls and prefers-reduced-motion support
 */
export const ScrollExploreIndicator = ({
  lang = 'en',
  targetId = 'countdown',
  className = '',
}) => {
  const handleScrollToNext = (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    const nextSection = document.getElementById(targetId);
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
    }
  };

  const labelText = lang === 'hi' ? 'स्क्रॉल करें' : 'SCROLL TO EXPLORE';

  return (
    <button
      type="button"
      onClick={handleScrollToNext}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleScrollToNext(e);
        }
      }}
      aria-label={lang === 'hi' ? 'मांगलिक उत्सव देखने के लिए नीचे स्क्रॉल करें' : 'Scroll to explore celebration'}
      title={lang === 'hi' ? 'नीचे स्क्रॉल करें' : 'Scroll down to explore'}
      className={`group flex flex-col items-center justify-center cursor-pointer select-none outline-none focus-visible:ring-2 focus-visible:ring-[#E8A84E]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#F8F1E3] rounded-full px-2 py-2.5 transition-all duration-300 ${className}`}
    >
      {/* Minimal Mouse-Scroll Icon */}
      <div
        className="relative w-5 h-8 sm:w-5.5 sm:h-8.5 rounded-full border-[1.5px] border-[#E8A84E] bg-[#FFF9EF]/90 shadow-[0_2px_8px_rgba(232,168,78,0.22)] flex items-start justify-center p-1 group-hover:border-[#C58832] group-hover:shadow-[0_2px_14px_rgba(232,168,78,0.4)] transition-all duration-300"
        aria-hidden="true"
      >
        {/* Animated descending wheel dot in primary accent #E8A84E */}
        <span className="w-1 h-2 rounded-full bg-[#E8A84E] scroll-mouse-wheel" />
      </div>

      {/* Vertical Hairline Divider */}
      <div
        className="w-[1.5px] h-3 sm:h-4 bg-gradient-to-b from-[#E8A84E]/80 via-[#E8A84E]/40 to-transparent my-1 transition-opacity duration-300 group-hover:from-[#E8A84E]"
        aria-hidden="true"
      />

      {/* Small Luxury Label: "SCROLL TO EXPLORE" */}
      <span
        className={`text-[8px] sm:text-[9px] md:text-[10px] font-serif uppercase tracking-[0.24em] font-medium text-[#E8A84E] group-hover:text-[#C58832] transition-colors duration-300 whitespace-nowrap [writing-mode:vertical-lr] rotate-180 py-1.5 select-none ${
          lang === 'hi' ? 'font-devanagari tracking-[0.18em]' : 'font-cormorant'
        }`}
      >
        {labelText}
      </span>

      {/* Animated Gently Bouncing Chevrons */}
      <div
        className="flex flex-col items-center -space-y-1.5 mt-0.5 text-[#E8A84E] scroll-chevron-bounce"
        aria-hidden="true"
      >
        <ChevronDown className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#E8A84E] transition-transform duration-300 group-hover:scale-110" />
        <ChevronDown className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#E8A84E]/60 -mt-2 transition-transform duration-300 group-hover:scale-110" />
      </div>
    </button>
  );
};
