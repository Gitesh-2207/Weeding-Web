import React from 'react';

export const LanguageToggle = ({ lang, setLang }) => {
  return (
    <div className="inline-flex items-center p-1 rounded-full bg-[#FFF9EF]/85 backdrop-blur-md border border-gold/40 shadow-sm text-xs font-serif tracking-wider">
      <button
        onClick={() => setLang('en')}
        className={`px-3 py-1 rounded-full transition-all duration-300 ${
          lang === 'en'
            ? 'bg-burgundy text-[#FFF9EF] shadow-sm font-semibold'
            : 'text-royal-brown hover:text-gold'
        }`}
        aria-label="Switch to English"
      >
        EN
      </button>
      <span className="text-gold/40 mx-0.5">•</span>
      <button
        onClick={() => setLang('hi')}
        className={`px-3 py-1 rounded-full transition-all duration-300 font-devanagari ${
          lang === 'hi'
            ? 'bg-burgundy text-[#FFF9EF] shadow-sm font-semibold'
            : 'text-royal-brown hover:text-gold'
        }`}
        aria-label="हिंदी भाषा चुनें"
      >
        हिंदी
      </button>
    </div>
  );
};
