import React from 'react';
import { motion } from 'framer-motion';
import { FloralGarland, CornerFlourish } from './common/DecorativeElements';
import { Palette, Feather } from 'lucide-react';

export const WardrobePlanner = ({ data, t }) => {
  return (
    <section id="wardrobe" className="py-24 px-4 sm:px-6 relative bg-paper-pattern overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-1 rounded-full bg-cream-50 border border-gold/40 shadow-sm mb-3">
            <Palette className="w-3.5 h-3.5 text-gold-dark" />
            <span className="text-xs font-serif tracking-[0.25em] uppercase text-burgundy font-semibold">
              {t.wardrobe.heading}
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-playfair font-semibold text-royal-brown tracking-wide">
            {t.wardrobe.title}
          </h2>

          <p className="mt-3 text-base sm:text-lg font-cormorant italic text-royal-brown/85 max-w-xl mx-auto">
            "{t.wardrobe.desc}"
          </p>

          <FloralGarland className="mt-4" />
        </div>

        {/* Editorial Fashion Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {data.wardrobe.map((item, index) => (
            <motion.div
              key={item.event}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12, duration: 0.7 }}
              className="relative p-6 sm:p-8 rounded-3xl bg-cream-card border border-gold/50 shadow-royal hover:shadow-royal-lg transition-all duration-300 flex flex-col justify-between group"
            >
              <CornerFlourish className="absolute top-4 left-4 w-8 h-8" position="top-left" />
              <CornerFlourish className="absolute top-4 right-4 w-8 h-8" position="top-right" />

              <div>
                {/* Event Name & Palette Tag */}
                <div className="text-center pb-4 border-b border-gold/25">
                  <span className="text-xs font-serif uppercase tracking-[0.2em] text-gold-dark font-medium">
                    {item.paletteName}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-playfair font-semibold text-burgundy mt-1">
                    {lang === 'hi' ? item.eventHi || item.event : item.event}
                  </h3>
                </div>

                {/* Editorial Visual Image */}
                <div className="my-5 relative h-52 sm:h-64 rounded-2xl overflow-hidden border border-gold/30">
                  <img
                    src={item.image}
                    alt={item.event}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                  {/* Floating Color Swatches Bar */}
                  <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-xl bg-white/90 backdrop-blur-md border border-gold/40 flex items-center justify-around shadow-sm">
                    {item.colors.map((color, cIdx) => (
                      <div key={cIdx} className="flex flex-col items-center">
                        <div
                          className="w-6 h-6 sm:w-7 sm:h-7 rounded-full shadow-inner border border-gold/40 transition-transform hover:scale-110"
                          style={{ backgroundColor: color }}
                          title={item.colorNames[cIdx]}
                        />
                        <span className="text-[9px] sm:text-[10px] font-serif uppercase tracking-wider text-royal-brown mt-1 font-medium truncate max-w-[65px]">
                          {item.colorNames[cIdx]}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Wardrobe Styling Advice */}
                <div className="space-y-3 text-xs sm:text-sm font-serif">
                  <div className="p-3 rounded-xl bg-[#F8F1E3]/80 border border-gold/25">
                    <span className="font-semibold text-burgundy uppercase tracking-wider text-[11px] block mb-0.5">
                      {t.wardrobe.ladiesLabel}:
                    </span>
                    <p className="text-royal-brown/90 leading-relaxed font-cormorant text-base font-medium">
                      {item.ladies}
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-[#F8F1E3]/80 border border-gold/25">
                    <span className="font-semibold text-gold-dark uppercase tracking-wider text-[11px] block mb-0.5">
                      {t.wardrobe.gentlemenLabel}:
                    </span>
                    <p className="text-royal-brown/90 leading-relaxed font-cormorant text-base font-medium">
                      {item.gentlemen}
                    </p>
                  </div>
                </div>
              </div>

              {/* Styling Note / Footer */}
              <div className="mt-4 pt-3 border-t border-gold/20 flex items-center space-x-2 text-xs font-serif text-royal-brown/80 italic">
                <Feather className="w-3.5 h-3.5 text-gold-dark shrink-0" />
                <span>{item.tip}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
