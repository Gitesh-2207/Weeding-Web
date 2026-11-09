import React, { useState, useEffect, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Analytics } from '@vercel/analytics/react';
import { weddingData } from './data/weddingData';
import { translations } from './data/translations';
import { PetalsOverlay } from './components/common/PetalsOverlay';
import { ScrollProgressBar } from './components/common/ScrollProgressBar';
import { LanguageToggle } from './components/LanguageToggle';
import { WelcomeLanding } from './components/WelcomeLanding';
import { HeroSection } from './components/HeroSection';
import { Countdown } from './components/Countdown';
import { FamilyInvitation } from './components/FamilyInvitation';
import { EngagementClips } from './components/EngagementClips';
import { WeddingEvents } from './components/WeddingEvents';
import { WeddingGallery } from './components/WeddingGallery';
import { VenueSection } from './components/VenueSection';
import { WelcomeCeremony } from './components/WelcomeCeremony';
import { Footer } from './components/Footer';
import { FloatingMusicControl } from './components/common/FloatingMusicControl';
import { Sparkles } from 'lucide-react';

const STORAGE_LANG_KEY = 'wedding_invitation_lang';

export default function App() {
  const [lang, setLang] = useState(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem(STORAGE_LANG_KEY);
        if (saved === 'hi' || saved === 'en') return saved;
      } catch {
        // Ignore localStorage read errors
      }
    }
    return 'en';
  });

  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false);
  const t = translations[lang] || translations.en;

  // Persist language selection & sync html lang attribute
  const handleSetLang = useCallback((newLang) => {
    setLang(newLang);
    try {
      localStorage.setItem(STORAGE_LANG_KEY, newLang);
    } catch {
      // Ignore localStorage write errors
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  // Lock body scroll while the initial welcome cover is active
  useEffect(() => {
    if (!isEnvelopeOpen) {
      document.body.style.overflow = 'hidden';
      window.scrollTo(0, 0);
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isEnvelopeOpen]);

  return (
    <div className={`min-h-screen bg-[#F8F1E3] text-[#42362C] font-lora relative selection:bg-[#C5A15A]/25 selection:text-[#6F2927] ${lang === 'hi' ? 'font-devanagari' : ''}`}>
      {/* Royal Scroll Progress Indicator */}
      <ScrollProgressBar />

      {/* Royal Welcome Screen: "Tap to Enter" minimal overlay */}
      <AnimatePresence mode="wait">
        {!isEnvelopeOpen && (
          <WelcomeLanding
            data={weddingData}
            onOpen={() => setIsEnvelopeOpen(true)}
            t={t}
            lang={lang}
          />
        )}
      </AnimatePresence>

      {/* Floating Background Piano Music Control */}
      <FloatingMusicControl t={t} lang={lang} />

      {/* Floating Petals Animation */}
      <PetalsOverlay count={16} />

      {/* Floating Language Switcher */}
      <div className="fixed top-4 right-4 z-40">
        <LanguageToggle lang={lang} setLang={handleSetLang} />
      </div>

      {/* Re-open Welcome Screen Floating Button */}
      {isEnvelopeOpen && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 }}
          onClick={() => setIsEnvelopeOpen(false)}
          className="fixed bottom-5 left-5 z-40 flex items-center space-x-2 px-3.5 py-2 rounded-full bg-[#FFF9EF]/95 border border-gold/70 shadow-royal hover:shadow-gold-glow backdrop-blur-md text-burgundy hover:text-gold-dark text-xs font-serif uppercase tracking-wider transition-all duration-300 group"
          aria-label={t.cover.reopenAria}
        >
          <Sparkles className="w-3.5 h-3.5 text-gold-dark group-hover:scale-110 transition-transform" />
          <span className="font-medium hidden sm:inline">
            {t.cover.reopenBtn}
          </span>
        </motion.button>
      )}

      {/* Single Page Seamless Content Flow */}
      <motion.main
        initial={{ opacity: 0 }}
        animate={isEnvelopeOpen ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className={`relative flex flex-col ${!isEnvelopeOpen ? 'pointer-events-none select-none invisible h-0 overflow-hidden' : ''}`}
      >
        {/* Hero Section */}
        <HeroSection
          data={weddingData}
          t={t}
          lang={lang}
        />

        {/* Real-time Wedding Countdown */}
        <Countdown
          data={weddingData}
          t={t}
          lang={lang}
        />

        {/* Two Families, One Celebration - Family Invitation */}
        <FamilyInvitation
          data={weddingData}
          t={t}
          lang={lang}
        />

        {/* Engagement Memories & Video Clips */}
        <EngagementClips
          data={weddingData}
          t={t}
          lang={lang}
        />

        {/* Four Chapters Celebrations */}
        <WeddingEvents
          data={weddingData}
          t={t}
          lang={lang}
        />

        {/* Real Couple Photo Gallery & Lightbox */}
        <WeddingGallery
          data={weddingData}
          t={t}
          lang={lang}
        />

        {/* Destination Venue Information */}
        <VenueSection
          data={weddingData}
          t={t}
          lang={lang}
        />

        {/* Welcome Ceremony Section directly below Venue/Map */}
        <WelcomeCeremony
          lang={lang}
          t={t}
        />

        {/* Wedding Footer */}
        <Footer
          t={t}
          lang={lang}
        />
      </motion.main>

      {/* Vercel Web Analytics */}
      <Analytics />
    </div>
  );
}
