import React, { useState, useEffect } from 'react';
import { LanguageToggle } from './LanguageToggle';
import { Menu, X } from 'lucide-react';

export const Navbar = ({ data, t, lang, setLang }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#invitation', label: t.nav.invitation },
    { href: '#events', label: t.nav.events },
    { href: '#venue', label: t.nav.venue, highlight: true },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#FFF9EF]/92 backdrop-blur-md shadow-md border-b border-gold/30 py-2.5'
          : 'bg-gradient-to-b from-[#F8F1E3]/95 via-[#F8F1E3]/80 to-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Monogram Logo */}
        <a
          href="#hero"
          className="group flex items-center space-x-2 text-burgundy transition-transform hover:scale-105"
        >
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-gold/70 flex items-center justify-center bg-cream-50 shadow-inner">
            <span className="font-script text-lg sm:text-xl text-burgundy group-hover:text-gold-dark transition-colors">
              {data.couple.monogram || "K&A"}
            </span>
          </div>
          <div className="hidden sm:block text-left">
            <span className="block font-playfair text-sm font-semibold tracking-wider text-royal-brown">
              {data.couple.combinedName}
            </span>
            <span className="block text-[10px] uppercase tracking-[0.2em] text-gold-dark font-serif">
              {data.date.displayYear}
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-xs font-serif tracking-[0.16em] uppercase transition-all duration-200 relative group py-1 ${
                link.highlight
                  ? 'px-4 py-1.5 rounded-full bg-burgundy text-[#FFF9EF] hover:bg-burgundy-light shadow-sm'
                  : 'text-royal-brown/90 hover:text-burgundy'
              }`}
            >
              {link.label}
              {!link.highlight && (
                <span className="absolute bottom-0 left-1/2 w-0 h-[1.5px] bg-gold group-hover:w-full group-hover:left-0 transition-all duration-300" />
              )}
            </a>
          ))}
        </nav>

        {/* Right Section: Language Toggle & Mobile Hamburger */}
        <div className="flex items-center space-x-3">
          <LanguageToggle lang={lang} setLang={setLang} />

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-full border border-gold/40 text-royal-brown hover:text-burgundy bg-cream-50/80"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-cream-50/98 backdrop-blur-xl border-b border-gold/40 shadow-royal px-6 py-6 animate-fadeIn">
          <div className="flex flex-col space-y-4 text-center">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className={`text-sm font-serif tracking-[0.18em] uppercase py-2 transition-colors ${
                  link.highlight
                    ? 'mx-auto px-6 py-2 rounded-full bg-burgundy text-[#FFF9EF] font-semibold'
                    : 'text-royal-brown hover:text-burgundy border-b border-gold/15'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
