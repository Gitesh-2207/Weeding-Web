import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { Heart, Sparkles, Flower2, Music, PartyPopper, Smile, Crown } from 'lucide-react';
import confetti from 'canvas-confetti';

export const AnimatedCouple = ({ t }) => {
  const [activeTab, setActiveTab] = useState('wedding');
  const [blessingCount, setBlessingCount] = useState(0);
  const [showHeartToast, setShowHeartToast] = useState(false);
  const cardRef = useRef(null);

  // 3D Tilt interaction on mouse move
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 180 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-12, 12]), springConfig);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const clientX = e.clientX - rect.left;
    const clientY = e.clientY - rect.top;
    mouseX.set(clientX / width - 0.5);
    mouseY.set(clientY / height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Harmonious harp/chime audio generator using Web Audio API
  const playBlessingChime = () => {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      const ctx = new AudioContext();

      const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6 (Celebratory Indian harp chime)
      notes.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.08);

        gain.gain.setValueAtTime(0.18, ctx.currentTime + idx * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + idx * 0.08 + 0.6);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(ctx.currentTime + idx * 0.08);
        osc.stop(ctx.currentTime + idx * 0.08 + 0.65);
      });
    } catch {
      // Ignore audio failure if autoplay policy or browser restriction
    }
  };

  const triggerPetalShower = () => {
    setBlessingCount((prev) => prev + 1);
    setShowHeartToast(true);
    playBlessingChime();

    // Trigger rich multi-angle confetti flower petals and golden stars
    const count = 45;
    const defaults = {
      origin: { y: 0.7 },
      colors: ['#C5A15A', '#E3A857', '#C44D58', '#FF6B6B', '#FFD166', '#5D6244'],
      shapes: ['circle', 'square'],
      disableForReducedMotion: true
    };

    confetti({
      ...defaults,
      particleCount: Math.floor(count * 0.7),
      spread: 60,
      startVelocity: 35,
      scalar: 1.2
    });

    confetti({
      ...defaults,
      particleCount: Math.floor(count * 0.5),
      spread: 100,
      startVelocity: 45,
      decay: 0.92,
      scalar: 1.4
    });

    setTimeout(() => {
      setShowHeartToast(false);
    }, 3200);
  };

  const ceremonyItems = [
    {
      id: 'wedding',
      label: t.coupleAnimation?.tabs?.wedding || "Royal Forever",
      icon: Crown,
      image: "/images/couple-hero.jpeg",
      themeColor: "from-amber-700 via-rose-700 to-amber-900",
      accentBorder: "border-[#C5A15A]",
      story: t.coupleAnimation?.stories?.wedding || {
        tag: "25 November 2026 • The Auspicious Vow",
        quote: "Hand in hand, entering the sacred realm of forever with grace, devotion, and timeless royal love.",
        dialogueBride: "Ready for our forever journey, Abhay! 💖",
        dialogueGroom: "The happiest groom in the world, Khushbu! ✨"
      }
    },
    {
      id: 'haldi',
      label: t.coupleAnimation?.tabs?.haldi || "Candid Romance",
      icon: Flower2,
      image: "/images/couple-candid.jpeg",
      themeColor: "from-yellow-600 via-amber-500 to-orange-600",
      accentBorder: "border-amber-400",
      story: t.coupleAnimation?.stories?.haldi || {
        tag: "24 November 2026 • Moments of Joy",
        quote: "Spontaneous laughter, shared glances, and sweet promises beneath open skies.",
        dialogueBride: "Every moment with you is special! 🌸",
        dialogueGroom: "My forever smile begins with you! 💛"
      }
    },
    {
      id: 'sangeet',
      label: t.coupleAnimation?.tabs?.sangeet || "Better Together",
      icon: Music,
      image: "/images/couple-stage.jpeg",
      themeColor: "from-indigo-900 via-purple-800 to-pink-700",
      accentBorder: "border-purple-400",
      story: t.coupleAnimation?.stories?.sangeet || {
        tag: "Celebration Night • Rings & Roses",
        quote: "Surrounded by loved ones, flowers, and the glow of celebration as our families unite.",
        dialogueBride: "A dream evening filled with love! 💐",
        dialogueGroom: "Forever and always, Better Together! 💫"
      }
    }
  ];

  const currentItem = ceremonyItems.find((item) => item.id === activeTab) || ceremonyItems[0];

  return (
    <section id="couple" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#F8F1E3] via-[#FFF9EF] to-[#F8F1E3] overflow-hidden">
      {/* Background Decorative Radial Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-gold/15 via-rose-200/20 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-gold/10 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-burgundy/5 rounded-full blur-2xl pointer-events-none" />

      {/* Floating Animated Golden Sparkles Background Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(9)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-gold-dark/40 select-none"
            style={{
              top: `${12 + (i * 10)}%`,
              left: `${8 + (i * 10)}%`,
            }}
            animate={{
              y: [-12, 12, -12],
              scale: [0.8, 1.25, 0.8],
              opacity: [0.3, 0.8, 0.3],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 4 + (i % 3) * 1.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.4,
            }}
          >
            ✦
          </motion.div>
        ))}
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-cream-50 border border-gold/40 shadow-sm mb-3.5"
          >
            <Sparkles className="w-3.5 h-3.5 text-gold-dark animate-spin-slow" />
            <span className="font-serif text-[11px] uppercase tracking-[0.22em] text-royal-brown font-semibold">
              {t.coupleAnimation?.badge || "THE ROYAL COUPLE"}
            </span>
            <Sparkles className="w-3.5 h-3.5 text-gold-dark animate-spin-slow" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-burgundy tracking-tight"
          >
            {t.coupleAnimation?.title || "Khushbu & Abhay"}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-2.5 font-cormorant italic text-lg sm:text-xl text-royal-brown/85 max-w-xl mx-auto"
          >
            "{t.coupleAnimation?.subtitle || "Two Hearts, One Soul, A Lifetime of Shared Dreams"}"
          </motion.p>
        </div>

        {/* Ceremony Story Switcher Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1.5 rounded-full bg-[#FFF9EF]/90 border border-gold/50 shadow-royal backdrop-blur-md">
            {ceremonyItems.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative flex items-center space-x-2 px-4 sm:px-6 py-2 rounded-full font-serif text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 ${
                    isActive
                      ? 'text-[#FFF9EF] font-semibold shadow-md'
                      : 'text-royal-brown/80 hover:text-burgundy'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTabBadge"
                      className="absolute inset-0 bg-gradient-to-r from-burgundy via-burgundy-light to-burgundy rounded-full shadow-inner"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center space-x-1.5">
                    <Icon className="w-3.5 h-3.5" />
                    <span>{tab.label}</span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Central 3D Interactive Animated Cartoon Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Interactive 3D Cartoon Avatar Card */}
          <div className="lg:col-span-7 flex flex-col items-center justify-center">
            <div
              className="relative perspective-1000 w-full max-w-[420px] sm:max-w-[460px]"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              ref={cardRef}
            >
              {/* Outer Golden Aura Mandala (Continuous Gentle Rotation) */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-6 border border-dashed border-gold/40 rounded-[2.5rem] pointer-events-none -z-10"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-3 border border-gold/25 rounded-[2.2rem] pointer-events-none -z-10"
              />

              {/* 3D Tilting Card Container */}
              <motion.div
                style={{
                  rotateX,
                  rotateY,
                  transformStyle: "preserve-3d"
                }}
                animate={{
                  y: [-6, 6, -6],
                }}
                transition={{
                  duration: 4.8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                onClick={triggerPetalShower}
                className="cursor-pointer relative rounded-3xl p-3 sm:p-4 bg-gradient-to-b from-[#FFF9EF] to-[#F3E7D3] border-2 border-gold/60 shadow-royal group overflow-hidden"
              >
                {/* Metallic Sheen diagonal sweep */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-20" />

                {/* Animated Speech Bubbles for Bride & Groom */}
                <div className="absolute top-4 left-4 right-4 z-20 flex justify-between pointer-events-none">
                  {/* Groom Bubble */}
                  <motion.div
                    key={`groom-${activeTab}`}
                    initial={{ opacity: 0, scale: 0.8, y: -10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 260 }}
                    className="max-w-[170px] bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-2xl rounded-bl-sm border border-gold/50 shadow-md text-[11px] font-serif text-royal-brown"
                  >
                    <span className="font-semibold text-burgundy block text-[10px]">Abhay 🤴</span>
                    {currentItem.story.dialogueGroom}
                  </motion.div>

                  {/* Bride Bubble */}
                  <motion.div
                    key={`bride-${activeTab}`}
                    initial={{ opacity: 0, scale: 0.8, y: -10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ delay: 0.35, type: "spring", stiffness: 260 }}
                    className="max-w-[170px] bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-2xl rounded-br-sm border border-rose-300 shadow-md text-[11px] font-serif text-royal-brown"
                  >
                    <span className="font-semibold text-rose-700 block text-[10px]">Khushbu 👸</span>
                    {currentItem.story.dialogueBride}
                  </motion.div>
                </div>

                {/* Main Cartoon Illustration with Smooth Fade and Scale Transition */}
                <div className="relative rounded-2xl overflow-hidden aspect-square border border-gold/40 shadow-inner bg-[#F8F1E3]">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={currentItem.image}
                      src={currentItem.image}
                      alt={`Khushbu and Abhay cartoon in ${currentItem.label}`}
                      initial={{ opacity: 0, scale: 1.05, filter: "blur(4px)" }}
                      animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                      exit={{ opacity: 0, scale: 0.95, filter: "blur(4px)" }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                      className="w-full h-full object-cover select-none transition-transform duration-700 group-hover:scale-105"
                    />
                  </AnimatePresence>

                  {/* Gentle Floating Rose Garland Accents overlay */}
                  <motion.div
                    animate={{
                      y: [-4, 4, -4],
                      rotate: [-1, 1, -1]
                    }}
                    transition={{
                      duration: 3.2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute bottom-3 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-burgundy/85 backdrop-blur-md border border-gold/50 text-[#FFF9EF] font-serif text-[11px] tracking-widest uppercase flex items-center space-x-2 shadow-lg whitespace-nowrap"
                  >
                    <Heart className="w-3.5 h-3.5 text-rose-300 fill-rose-300 animate-pulse" />
                    <span>Khushbu & Abhay • 2026</span>
                    <Heart className="w-3.5 h-3.5 text-rose-300 fill-rose-300 animate-pulse" />
                  </motion.div>
                </div>

                {/* Bottom Interactive Hint */}
                <div className="pt-2.5 pb-1 text-center">
                  <span className="text-[11px] font-serif text-royal-brown/70 italic flex items-center justify-center space-x-1">
                    <Sparkles className="w-3 h-3 text-gold-dark" />
                    <span>{t.coupleAnimation?.interactiveHint || "Click image or button below to shower flowers & blessings"}</span>
                    <Sparkles className="w-3 h-3 text-gold-dark" />
                  </span>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right Column: Love Story, Auspicious Vows & Blessing Action */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-6">
            {/* Story Card */}
            <motion.div
              key={`story-${activeTab}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-[#FFF9EF]/95 backdrop-blur-md rounded-2xl p-6 sm:p-7 border border-gold/50 shadow-royal relative"
            >
              {/* Corner Floral Ornaments */}
              <div className="absolute top-2 left-2 text-gold-dark/40 font-serif text-xs">✤</div>
              <div className="absolute top-2 right-2 text-gold-dark/40 font-serif text-xs">✤</div>
              <div className="absolute bottom-2 left-2 text-gold-dark/40 font-serif text-xs">✤</div>
              <div className="absolute bottom-2 right-2 text-gold-dark/40 font-serif text-xs">✤</div>

              <div className="flex items-center space-x-2 text-gold-dark font-serif text-xs uppercase tracking-widest font-semibold mb-2">
                <span>✦</span>
                <span>{currentItem.story.tag}</span>
                <span>✦</span>
              </div>

              <h3 className="font-playfair text-2xl font-bold text-burgundy mb-3">
                {currentItem.label}
              </h3>

              <p className="font-cormorant text-lg text-royal-brown leading-relaxed italic">
                "{currentItem.story.quote}"
              </p>

              {/* Ceremony Highlight Badges */}
              <div className="mt-5 pt-4 border-t border-gold/25 flex flex-wrap gap-2">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-serif bg-gold/15 text-royal-brown border border-gold/30">
                  <Smile className="w-3 h-3 mr-1.5 text-gold-dark" />
                  Pure Love & Smiles
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-serif bg-rose-50 text-rose-800 border border-rose-200">
                  <Heart className="w-3 h-3 mr-1.5 text-rose-600 fill-rose-600" />
                  Made for Each Other
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-serif bg-amber-50 text-amber-900 border border-amber-200">
                  <PartyPopper className="w-3 h-3 mr-1.5 text-amber-600" />
                  Sundrel, Dhar
                </span>
              </div>
            </motion.div>

            {/* Shower Blessings Interactive Button with Live Heart Counter */}
            <div className="flex flex-col items-center sm:items-start space-y-3">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.96 }}
                onClick={triggerPetalShower}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-burgundy via-burgundy-light to-burgundy text-[#FFF9EF] font-serif tracking-[0.16em] uppercase text-xs sm:text-sm font-semibold shadow-royal hover:shadow-gold-hover border border-gold/60 flex items-center justify-center space-x-3 transition-all duration-300 relative group overflow-hidden"
              >
                {/* Shimmer sweep effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                <Flower2 className="w-4 h-4 text-gold-light group-hover:rotate-45 transition-transform duration-300" />
                <span>{t.coupleAnimation?.blessButton || "Shower Flower Petals"}</span>
                <Heart className="w-4 h-4 text-rose-300 fill-rose-300 animate-bounce" />

                {blessingCount > 0 && (
                  <span className="ml-2 px-2 py-0.5 rounded-full bg-gold text-royal-brown font-bold text-xs shadow-inner">
                    +{blessingCount}
                  </span>
                )}
              </motion.button>

              {/* Toast Feedback when blessings are showered */}
              <AnimatePresence>
                {showHeartToast && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.9 }}
                    className="p-3 bg-cream-50 border border-gold/60 rounded-xl shadow-lg flex items-center space-x-2.5 text-xs font-serif text-burgundy"
                  >
                    <Sparkles className="w-4 h-4 text-gold-dark" />
                    <span>{t.coupleAnimation?.blessedMessage || "Heartfelt Thanks for Your Loving Blessings!"}</span>
                    <Heart className="w-3.5 h-3.5 text-rose-600 fill-rose-600" />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
