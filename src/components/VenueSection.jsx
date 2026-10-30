import React from 'react';
import { motion } from 'framer-motion';
import { FloralGarland, CornerFlourish } from './common/DecorativeElements';
import { MapPin, Navigation, ExternalLink } from 'lucide-react';

export const VenueSection = ({ data, t, lang }) => {
  const mapEmbedUrl =
    import.meta.env.VITE_GOOGLE_MAPS_EMBED_URL ||
    "https://maps.google.com/maps?q=Sundrel%2C+Madhya+Pradesh&t=&z=13&ie=UTF8&iwloc=&output=embed";
  const googleMapsUrl =
    import.meta.env.VITE_GOOGLE_MAPS_NAV_URL ||
    data?.venue?.mapQueryUrl ||
    "https://www.google.com/maps/search/?api=1&query=Sundrel+Dhar+Madhya+Pradesh+India";

  return (
    <section id="venue" className="py-8 sm:py-10 px-4 sm:px-6 relative bg-gradient-to-b from-[#F8F1E3] via-[#FFF9EF] to-[#F8F1E3] overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-5 sm:mb-6">
          <div className="inline-flex items-center space-x-2 px-4 py-1 rounded-full bg-cream-50 border border-gold/40 shadow-sm mb-3">
            <Navigation className="w-3.5 h-3.5 text-gold-dark" />
            <span className="text-xs font-serif tracking-[0.25em] uppercase text-burgundy font-semibold">
              {t.venue.heading}
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-playfair font-semibold text-royal-brown tracking-wide">
            {t.venue.title}
          </h2>

          <p className="mt-3 text-base sm:text-lg font-cormorant italic text-royal-brown/85">
            "{t.venue.desc}"
          </p>

          <FloralGarland className="mt-4" />
        </div>

        {/* Map Container */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl bg-cream-card border-2 border-gold/50 shadow-royal-lg overflow-hidden p-3 sm:p-5"
        >
          <CornerFlourish className="absolute top-3 left-3 w-10 h-10 pointer-events-none z-10" position="top-left" />
          <CornerFlourish className="absolute top-3 right-3 w-10 h-10 pointer-events-none z-10" position="top-right" />

          {/* Location Bar / Info */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 px-4 py-3 mb-3 bg-white/70 backdrop-blur-sm rounded-2xl border border-gold/30">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-burgundy/10 border border-gold/40 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-burgundy" />
              </div>
              <div>
                <h3 className="font-playfair font-semibold text-royal-brown text-lg sm:text-xl">
                  {lang === 'hi' ? 'ग्राम सुंदरैल (धार), मध्य प्रदेश' : 'Sundrel, Dhar, Madhya Pradesh'}
                </h3>
                <p className="text-xs sm:text-sm font-serif text-royal-brown/75">
                  {lang === 'hi' ? 'मध्य प्रदेश, भारत • पिनकोड: 454552' : 'Madhya Pradesh, India • PIN: 454552'}
                </p>
              </div>
            </div>

            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-2 px-6 py-2.5 rounded-full bg-burgundy hover:bg-burgundy-light text-[#FFF9EF] font-serif text-xs sm:text-sm tracking-[0.12em] uppercase font-semibold shadow-royal border border-gold/50 transition-all duration-300 group self-start sm:self-auto shrink-0"
            >
              <Navigation className="w-3.5 h-3.5 text-gold group-hover:scale-110 transition-transform" />
              <span>{t.venue.viewMap || "Open in Google Maps"}</span>
              <ExternalLink className="w-3.5 h-3.5 text-gold-light" />
            </a>
          </div>

          {/* Interactive Google Map iframe */}
          <div className="relative w-full h-[420px] sm:h-[520px] rounded-2xl overflow-hidden border border-gold/40 shadow-inner">
            <iframe
              title="Sundrel Village Map Location"
              src={mapEmbedUrl}
              className="w-full h-full border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};



