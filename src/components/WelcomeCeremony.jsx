import React from 'react';
import { motion } from 'framer-motion';
import { CornerFlourish, FloralGarland } from './common/DecorativeElements';

export const WelcomeCeremony = ({ lang = 'en' }) => {
  // 1. Welcome Ceremony Details
  const ceremonyDetails = [
    {
      category: "Grandfathers",
      categoryHi: "दादाजी (Grandfathers)",
      names: "Subhashchandra Ji, Chandrashekhar Ji",
      namesHi: "सुभाषचंद्र जी, चंद्रशेखर जी",
    },
    {
      category: "Paternal Aunts' Husbands (Fufaji)",
      categoryHi: "फूफाजी (Fufaji)",
      names: "Mahendra Ji, Mahadev Ji, Jagdish Ji, Dinesh Ji, Priyank Ji",
      namesHi: "महेंद्र जी, महादेव जी, जगदीश जी, दिनेश जी, प्रियंक जी",
    },
    {
      category: "Sisters' Husbands (Jijaji)",
      categoryHi: "जीजाजी (Jijaji)",
      names: "Vinit Ji",
      namesHi: "विनीत जी",
    },
    {
      category: "Maternal Uncles (Mamaji)",
      categoryHi: "मामाजी (Mamaji)",
      names: "Mahadev Ji, Jitendra Ji",
      namesHi: "महादेव जी, जितेंद्र जी",
    },
    {
      category: "Maternal Aunts' Husbands (Mausaji)",
      categoryHi: "मौसाजी (Mausaji)",
      names: "Nitesh Ji",
      namesHi: "नितेश जी",
    },
  ];

  // 2. Awaiting Your Presence Details
  const awaitingPresenceDetails = [
    {
      category: "Eldest Uncle (Bade Papa)",
      categoryHi: "बड़े पापा (Bade Papa)",
      names: "Raghavendra Ji Patidar",
      namesHi: "राघवेंद्र जी पाटीदार",
    },
    {
      category: "Uncles (Uncle Ji)",
      categoryHi: "अंकल जी (Uncle Ji)",
      names: "Mahendra Ji, Jitendra Ji, Mukesh Ji, Surendra Ji Patidar",
      namesHi: "महेंद्र जी, जितेंद्र जी, मुकेश जी, सुरेंद्र जी पाटीदार",
    },
    {
      category: "Brothers (Bhaiya)",
      categoryHi: "भैया (Bhaiya)",
      names: "Ankit, Ritik, Gitesh, Jaideep, Ram",
      namesHi: "अंकित, रितिक, गीतेश, जयदीप, राम",
    },
    {
      category: "Sisters (Bahan)",
      categoryHi: "बहन (Bahan)",
      names: "Himanshi, Leena, Prisha (Mukati Family)",
      namesHi: "हिमांषी, लीना, दिशा (मुकाती परिवार)",
    },
  ];

  // 3. Invited By Our Hosts Details
  const hostDetails = [
    {
      category: "Mrs. Shakuntala Bai",
      categoryHi: "श्रीमती शकुंतला बाई",
      names: "Late Parmanand Ji",
      namesHi: "स्व. परमानंद जी",
    },
    {
      category: "Mrs. Mamta Bai",
      categoryHi: "श्रीमती ममता बाई",
      names: "Mr. Rajesh Ji",
      namesHi: "राजेश जी",
    },
    {
      category: "Mrs. Alka Bai",
      categoryHi: "श्रीमती अलका बाई",
      names: "Mr. Mukesh Ji",
      namesHi: "मुकेश जी",
    },
  ];

  const isHindi = lang === 'hi';

  return (
    <section
      id="welcome-ceremony"
      className="py-8 sm:py-10 px-4 sm:px-6 relative bg-gradient-to-b from-[#F8F1E3] via-[#FFF9EF] to-[#F8F1E3] overflow-hidden"
    >
      <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">

        {/* =========================================================================
            PART 1: WELCOME CEREMONY
           ========================================================================= */}
        <div>
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-4 sm:mb-5">
            <FloralGarland className="mb-3 sm:mb-4" />

            <h2 className="text-3xl sm:text-5xl font-playfair font-semibold text-royal-brown tracking-wide">
              {isHindi ? 'स्वागत समारोह' : 'Welcome Ceremony'}
            </h2>
          </div>

          {/* Welcome Ceremony Card */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="relative rounded-3xl bg-cream-card border-2 border-gold/50 shadow-royal-lg overflow-hidden p-4 sm:p-6 md:p-8 hover:shadow-gold-glow transition-shadow duration-700"
          >
            {/* Ornate Corner Flourishes */}
            <CornerFlourish className="absolute top-3 left-3 w-8 h-8 sm:w-10 sm:h-10 pointer-events-none z-10" position="top-left" />
            <CornerFlourish className="absolute top-3 right-3 w-8 h-8 sm:w-10 sm:h-10 pointer-events-none z-10" position="top-right" />
            <CornerFlourish className="absolute bottom-3 left-3 w-8 h-8 sm:w-10 sm:h-10 pointer-events-none z-10" position="bottom-left" />
            <CornerFlourish className="absolute bottom-3 right-3 w-8 h-8 sm:w-10 sm:h-10 pointer-events-none z-10" position="bottom-right" />

            {/* Inner Dashed Royal Border */}
            <div className="absolute inset-3 sm:inset-5 border border-gold/25 border-dashed rounded-2xl pointer-events-none" />

            {/* List of Dignitaries & Family Members */}
            <div className="relative z-10 divide-y divide-gold/25">
              {ceremonyDetails.map((item, index) => (
                <div
                  key={index}
                  className="py-3 sm:py-3.5 first:pt-1 last:pb-1 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 sm:gap-6"
                >
                  {/* Category Heading */}
                  <div className="flex items-center space-x-2.5 shrink-0 sm:max-w-[48%]">
                    <span className="text-gold text-xs sm:text-sm shrink-0">✦</span>
                    <h3 className="font-playfair font-bold text-base sm:text-lg md:text-xl text-burgundy tracking-wide">
                      {isHindi ? item.categoryHi : item.category}:
                    </h3>
                  </div>

                  {/* Respective Names */}
                  <div className="pl-5 sm:pl-0 sm:text-right flex-1">
                    <p className="font-serif text-base sm:text-lg md:text-xl text-royal-brown font-medium leading-relaxed">
                      {isHindi ? item.namesHi : item.names}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* =========================================================================
            PART 2: AWAITING YOUR PRESENCE
           ========================================================================= */}
        <div>
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-4 sm:mb-5">
            <FloralGarland className="mb-3 sm:mb-4" />

            <h2 className="text-3xl sm:text-5xl font-playfair font-semibold text-royal-brown tracking-wide">
              {isHindi ? 'दर्शनाभिलाषी' : 'Awaiting Your Presence'}
            </h2>
          </div>

          {/* Awaiting Your Presence Card */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="relative rounded-3xl bg-cream-card border-2 border-gold/50 shadow-royal-lg overflow-hidden p-4 sm:p-6 md:p-8 hover:shadow-gold-glow transition-shadow duration-700"
          >
            {/* Ornate Corner Flourishes */}
            <CornerFlourish className="absolute top-3 left-3 w-8 h-8 sm:w-10 sm:h-10 pointer-events-none z-10" position="top-left" />
            <CornerFlourish className="absolute top-3 right-3 w-8 h-8 sm:w-10 sm:h-10 pointer-events-none z-10" position="top-right" />
            <CornerFlourish className="absolute bottom-3 left-3 w-8 h-8 sm:w-10 sm:h-10 pointer-events-none z-10" position="bottom-left" />
            <CornerFlourish className="absolute bottom-3 right-3 w-8 h-8 sm:w-10 sm:h-10 pointer-events-none z-10" position="bottom-right" />

            {/* Inner Dashed Royal Border */}
            <div className="absolute inset-3 sm:inset-5 border border-gold/25 border-dashed rounded-2xl pointer-events-none" />

            {/* List of Relatives & Siblings */}
            <div className="relative z-10 divide-y divide-gold/25">
              {awaitingPresenceDetails.map((item, index) => (
                <div
                  key={index}
                  className="py-3 sm:py-3.5 first:pt-1 last:pb-1 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 sm:gap-6"
                >
                  {/* Category Heading */}
                  <div className="flex items-center space-x-2.5 shrink-0 sm:max-w-[48%]">
                    <span className="text-gold text-xs sm:text-sm shrink-0">✦</span>
                    <h3 className="font-playfair font-bold text-base sm:text-lg md:text-xl text-burgundy tracking-wide">
                      {isHindi ? item.categoryHi : item.category}:
                    </h3>
                  </div>

                  {/* Respective Names */}
                  <div className="pl-5 sm:pl-0 sm:text-right flex-1">
                    <p className="font-serif text-base sm:text-lg md:text-xl text-royal-brown font-medium leading-relaxed">
                      {isHindi ? item.namesHi : item.names}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* =========================================================================
            PART 3: INVITED BY OUR HOSTS
           ========================================================================= */}
        <div>
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-4 sm:mb-5">
            <FloralGarland className="mb-3 sm:mb-4" />

            <h2 className="text-3xl sm:text-5xl font-playfair font-semibold text-royal-brown tracking-wide">
              {isHindi ? 'विनीत' : 'Invited By Our Hosts'}
            </h2>
          </div>

          {/* Invited By Our Hosts Card */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="relative rounded-3xl bg-cream-card border-2 border-gold/50 shadow-royal-lg overflow-hidden p-4 sm:p-6 md:p-8 hover:shadow-gold-glow transition-shadow duration-700"
          >
            {/* Ornate Corner Flourishes */}
            <CornerFlourish className="absolute top-3 left-3 w-8 h-8 sm:w-10 sm:h-10 pointer-events-none z-10" position="top-left" />
            <CornerFlourish className="absolute top-3 right-3 w-8 h-8 sm:w-10 sm:h-10 pointer-events-none z-10" position="top-right" />
            <CornerFlourish className="absolute bottom-3 left-3 w-8 h-8 sm:w-10 sm:h-10 pointer-events-none z-10" position="bottom-left" />
            <CornerFlourish className="absolute bottom-3 right-3 w-8 h-8 sm:w-10 sm:h-10 pointer-events-none z-10" position="bottom-right" />

            {/* Inner Dashed Royal Border */}
            <div className="absolute inset-3 sm:inset-5 border border-gold/25 border-dashed rounded-2xl pointer-events-none" />

            {/* List of Hosts */}
            <div className="relative z-10 divide-y divide-gold/25">
              {hostDetails.map((item, index) => (
                <div
                  key={index}
                  className="py-3 sm:py-3.5 first:pt-1 last:pb-1 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 sm:gap-6"
                >
                  {/* Host Name (Left) */}
                  <div className="flex items-center space-x-2.5 shrink-0 sm:max-w-[48%]">
                    <span className="text-gold text-xs sm:text-sm shrink-0">✦</span>
                    <h3 className="font-playfair font-bold text-base sm:text-lg md:text-xl text-burgundy tracking-wide">
                      {isHindi ? item.categoryHi : item.category}:
                    </h3>
                  </div>

                  {/* Co-Host / Spouse Name (Right) */}
                  <div className="pl-5 sm:pl-0 sm:text-right flex-1">
                    <p className="font-serif text-base sm:text-lg md:text-xl text-royal-brown font-medium leading-relaxed">
                      {isHindi ? item.namesHi : item.names}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
