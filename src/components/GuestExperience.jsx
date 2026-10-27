import React from 'react';
import { motion } from 'framer-motion';
import { FloralGarland, CornerFlourish } from './common/DecorativeElements';
import { Hotel, Car, Clock, HeartHandshake, Phone, Mail, ShieldCheck } from 'lucide-react';

const iconsMap = {
  Hotel: Hotel,
  Car: Car,
  Clock: Clock,
  HeartHandshake: HeartHandshake,
};

export const GuestExperience = ({ data, t }) => {
  return (
    <section id="hospitality" className="py-24 px-4 sm:px-6 relative bg-paper-pattern overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-1 rounded-full bg-cream-50 border border-gold/40 shadow-sm mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-gold-dark" />
            <span className="text-xs font-serif tracking-[0.25em] uppercase text-burgundy font-semibold">
              {t.hospitality.heading}
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-playfair font-semibold text-royal-brown tracking-wide">
            {t.hospitality.title}
          </h2>

          <p className="mt-3 text-base sm:text-lg font-cormorant italic text-royal-brown/85">
            "{t.hospitality.desc}"
          </p>

          <FloralGarland className="mt-4" />
        </div>

        {/* Hospitality Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {data.hospitality.map((item, index) => {
            const IconComponent = iconsMap[item.icon] || HeartHandshake;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: index * 0.14, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -5, transition: { duration: 0.25 } }}
                className="relative p-6 sm:p-8 rounded-2xl bg-cream-card border border-gold/40 shadow-royal hover:border-gold hover:shadow-gold-glow transition-all duration-300"
              >
                <CornerFlourish className="absolute top-3 left-3 w-6 h-6 opacity-60" position="top-left" />
                <CornerFlourish className="absolute top-3 right-3 w-6 h-6 opacity-60" position="top-right" />

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-2xl bg-burgundy/10 text-burgundy flex items-center justify-center shrink-0 border border-gold/40">
                    <IconComponent className="w-6 h-6 text-gold-dark" />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl font-playfair font-semibold text-burgundy">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm font-serif text-royal-brown/90 leading-relaxed">
                      {item.desc}
                    </p>

                    <div className="mt-4 pt-3 border-t border-gold/20 flex items-center space-x-2 text-xs font-serif text-gold-dark font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                      <span>{item.note}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Dedicated Concierge Desk Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-cream-50 via-ivory-100 to-cream-50 border border-gold/60 shadow-royal max-w-4xl mx-auto text-center"
        >
          <p className="text-xs font-serif uppercase tracking-[0.2em] text-burgundy font-semibold mb-1">
            {t.hospitality.helpline}
          </p>
          <h4 className="text-xl sm:text-2xl font-playfair font-semibold text-royal-brown">
            {data.contacts.hospitalityLead} • {t.hospitality.contactPerson}
          </h4>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm font-serif">
            <a
              href={`tel:${data.contacts.phone.replace(/\s+/g, '')}`}
              className="flex items-center space-x-2 text-royal-brown hover:text-burgundy transition-colors px-4 py-2 rounded-full bg-white/70 border border-gold/30"
            >
              <Phone className="w-4 h-4 text-gold-dark" />
              <span>{data.contacts.phone}</span>
            </a>
            <a
              href={`mailto:${data.contacts.email}`}
              className="flex items-center space-x-2 text-royal-brown hover:text-burgundy transition-colors px-4 py-2 rounded-full bg-white/70 border border-gold/30"
            >
              <Mail className="w-4 h-4 text-burgundy" />
              <span>{data.contacts.email}</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
