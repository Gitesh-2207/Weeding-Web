// Helper to dynamically calculate weekday and formatted dates from the primary wedding date
const WEDDING_DATE_ISO = "2026-11-25T09:00:00+05:30";
const targetDateObj = new Date(WEDDING_DATE_ISO);

const weekdaysEn = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const weekdaysHi = ["रविवार", "सोमवार", "मंगलवार", "बुधवार", "गुरुवार", "शुक्रवार", "शनिवार"];

const calculatedWeekdayEn = weekdaysEn[targetDateObj.getDay()]; // Automatically calculates "Wednesday"
const calculatedWeekdayHi = weekdaysHi[targetDateObj.getDay()]; // Automatically calculates "बुधवार"

export const weddingData = {
  couple: {
    image: "/images/couple-hero.jpeg",
    heroImage: "/images/couple-hero.jpeg",
    stageImage: "/images/couple-stage.jpeg",
    candidImage: "/images/couple-candid.jpeg",
    ringsImage: "/images/engagement-rings.jpeg",
    groom: {
      firstName: "Abhay",
      lastName: "Patidar",
      fullName: "Abhay Patidar",
      family: "Patidar Family",
      parents: "Patidar Family",
      city: "Sundrel, Dhar, Madhya Pradesh, India",
      image: "/images/demo-groom.jpeg",
    },
    bride: {
      firstName: "Khushbu",
      lastName: "Patidar",
      fullName: "Khushbu Patidar",
      family: "Patidar Family",
      parents: "Patidar Family",
      city: "Sundrel, Dhar, Madhya Pradesh, India",
      image: "/images/demo-bride.png",
    },
    combinedName: "Khushbu Patidar & Abhay Patidar",
    shortCombinedName: "Khushbu & Abhay",
    monogram: "K & A",
    hashtag: "#KhushbuWedsAbhay",
  },
  date: {
    weddingDate: WEDDING_DATE_ISO,
    displayDate: "25 November 2026",
    displayDateOrdinal: "25th November, 2026",
    displayWeekday: calculatedWeekdayEn,
    displayWeekdayHi: calculatedWeekdayHi,
    displayDateWithWeekday: `${calculatedWeekdayEn}, 25 November 2026`,
    displayDateWithWeekdayHi: `${calculatedWeekdayHi}, २५ नवंबर २०२६`,
    displayYear: "2026",
    daysRange: "24 - 25 November 2026",
  },
  engagement: {
    label: "BEFORE THE WEDDING BELLS…",
    photos: [
      {
        id: "photo-1",
        title: "The Palace Twilight",
        caption: "Hand in hand beneath the royal arches",
        image: "/images/engagement-photo-4.jpeg",
        aspect: "wide",
      },
      {
        id: "photo-2",
        title: "The Beautiful Yes",
        caption: "The ring ceremony & an eternal promise",
        image: "/images/engagement-photo-1.jpeg",
        aspect: "portrait",
      },
      {
        id: "photo-3",
        title: "Under The Canopy of Lights",
        caption: "Laughter, music & twilight celebration",
        image: "/images/engagement-photo-2.jpeg",
        aspect: "portrait",
      },
      {
        id: "photo-4",
        title: "Whispers of Forever",
        caption: "Petals shower & boundless joy",
        image: "/images/engagement-photo-3.jpeg",
        aspect: "portrait",
      },
    ],
    video: {
      id: "clip-main",
      title: "The Beautiful Yes",
      subtitle: "Official Engagement Film • Ring Ceremony & Eternal Promise",
      tag: "ENGAGEMENT FILM",
      duration: "0:17",
      thumbnail: "/images/engagement-photo-1.jpeg",
      videoUrl: "/engclip.mp4",
    },
  },
  venue: {
    name: "Sundrel, Dhar",
    displayLine1: "SUNDREL, DHAR",
    displayLine2: "MADHYA PRADESH, INDIA",
    fullLocation: "Sundrel, Dhar, Madhya Pradesh, India",
    city: "Sundrel, Dhar",
    state: "Madhya Pradesh, India",
    mapQueryUrl: "https://www.google.com/maps/search/?api=1&query=Sundrel+Dhar+Madhya+Pradesh+India",
    airport: "Devi Ahilyabai Holkar Airport, Indore (IDR) — Approx. 85 km / 2 hours drive to Sundrel",
    railway: "Indore Junction / Ratlam Junction Railway Station — Well connected with express trains",
    carNotes: "Sundrel is well connected via Dhar & Indore road routes across Madhya Pradesh.",
  },
  events: [
    {
      id: "ganesh-pujan",
      tag: "SHUBH AARAMBH",
      title: "Ganesh Pujan",
      titleHi: "गणेश पूजन",
      subtitle: "Auspicious invocation and traditional prayers seeking Lord Ganesha's blessings.",
      subtitleHi: "प्रथम पूज्य श्री गणेश जी का पावन आह्वान एवं मंगलकामनाएं।",
      date: "24 November 2026",
      dateHi: "२४ नवंबर २०२६",
      time: "9:00 AM onwards",
      timeHi: "प्रातः ०९:०० बजे से",
      venue: "Chowk Mohalla, Sundrel, Dhar, Madhya Pradesh",
      venueHi: "चौक मोहल्ला, सुंदरैल, धार, मध्य प्रदेश",
      themeColor: "#C5A15A",
      bgGradient: "from-[#FFF8E7] via-[#FFF3D6] to-[#FFE8B2]",
      borderColor: "border-[#D4A017]",
      accentTag: "Sacred & Auspicious",
      icon: "Sparkles",
      image: "https://images.unsplash.com/photo-1590059390046-5381f9b7cbe3?auto=format&fit=crop&w=1200&q=80",
      attire: "Traditional Saffron, Ochre & Festive Ethnic Wear",
      details: [
        "Vedic rituals and auspicious invocation of Lord Ganesha",
        "Family prayers for lifelong joy, peace, and prosperity",
        "Traditional offerings, prasad, and sacred blessings",
      ],
      detailsHi: [
        "वैदिक मंत्रोच्चार एवं श्री गणेश जी का मंगल पूजन",
        "सुख, शांति और समृद्धि हेतु पारिवारिक प्रार्थना",
        "पारंपरिक प्रसाद वितरण एवं बड़ों का शुभाशीर्वाद",
      ]
    },
    {
      id: "haldi-ceremony",
      tag: "GULABI RANG • SUNEHRI SANG",
      title: "Haldi Ceremony",
      titleHi: "हल्दी रस्म",
      subtitle: "An afternoon adorned in sunshine yellow, marigolds, laughter, and timeless traditions.",
      subtitleHi: "पीत वर्ण, हंसी, उल्लास और मंगल संस्कारों से सजी एक सुनहरी दोपहर।",
      date: "24 November 2026",
      dateHi: "२४ नवंबर २०२६",
      time: "2:00 PM onwards",
      timeHi: "दोपहर ०२:०० बजे से",
      venue: "Chowk Mohalla, Sundrel, Dhar, Madhya Pradesh",
      venueHi: "चौक मोहल्ला, सुंदरैल, धार, मध्य प्रदेश",
      themeColor: "#C5A15A",
      bgGradient: "from-[#FFF8E7] via-[#FFF3D6] to-[#FFE8B2]",
      borderColor: "border-[#D4A017]",
      accentTag: "Marigold & Turmeric",
      icon: "Flower2",
      image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80",
      attire: "Sunshine Yellow, Marigold & Fresh Floral Ethnic Wear",
      details: [
        "Auspicious Haldi ceremonies with family & loved ones",
        "Folk wedding songs and joyful celebration beats",
        "Festive moments, haldi blessings, and sweet delicacies",
      ],
      detailsHi: [
        "स्नेही स्वजनों के साथ मांगलिक हल्दी रस्म",
        "पारंपरिक लोकगीत एवं ढोलक की मंगल थाप",
        "हल्दी का नेह, शुभाशीर्वाद एवं पारंपरिक मिष्ठान",
      ]
    },
    {
      id: "sangeet-ceremony",
      tag: "SWAR • SUR • SUROOR",
      title: "Sangeet Ceremony",
      titleHi: "संगीत संध्या",
      subtitle: "An evening filled with melodies, family celebrations, and joyful memories.",
      subtitleHi: "सुरमयी धुनों, परिवार के उल्लास और मंगल गीतों से सजी एक स्मरणीय संध्या।",
      date: "24 November 2026",
      dateHi: "२४ नवंबर २०२६",
      time: "8:00 PM onwards",
      timeHi: "सायं ०८:०० बजे से",
      venue: "Chowk Mohalla, Sundrel, Dhar, Madhya Pradesh",
      venueHi: "चौक मोहल्ला, सुंदरैल, धार, मध्य प्रदेश",
      themeColor: "#5D6244",
      bgGradient: "from-[#F7F8F2] via-[#EFEFE6] to-[#E2E6D5]",
      borderColor: "border-[#5D6244]",
      accentTag: "Emerald & Shimmer",
      icon: "Music",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
      attire: "Jewel Tones, Festive Bandhgalas & Glamour Kurtas",
      details: [
        "Choreographed family dance performances and celebrations",
        "Melodious music, festive beats, and memorable toasts",
        "Grand celebratory dinner with traditional flavours",
      ],
      detailsHi: [
        "परिवारजनों की मनमोहक नृत्य प्रस्तुतियां",
        "मधुर संगीत एवं मांगलिक गीतों की रसधारा",
        "पारंपरिक सुरुचिपूर्ण प्रीतिभोज",
      ]
    },
    {
      id: "baraat-aagman",
      tag: "THE GRAND PROCESSION",
      title: "Baraat Aagman",
      titleHi: "बारात आगमन",
      subtitle: "Royal arrival of the wedding procession with celebration, music, and boundless joy.",
      subtitleHi: "ढोल, शहनाई और उमंग के साथ बारात का भव्य एवं राजसी स्वागत।",
      date: "25 November 2026",
      dateHi: "२५ नवंबर २०२६",
      time: "9:00 AM onwards",
      timeHi: "प्रातः ०९:०० बजे से",
      venue: "Sundrel, Dhar, Madhya Pradesh",
      venueHi: "सुंदरैल, धार, मध्य प्रदेश",
      themeColor: "#6F2927",
      bgGradient: "from-[#FDFBF7] via-[#FFF5EE] to-[#FCEEE6]",
      borderColor: "border-[#6F2927]",
      accentTag: "Royal Celebration",
      icon: "Heart",
      image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80",
      attire: "Ivory, Champagne Gold, Festive Silk & Traditional Safas",
      details: [
        "Grand Baraat procession with band & celebratory dhol",
        "Warm ceremonial welcome by the family and loved ones",
        "Auspicious wedding rituals and family felicitations",
      ],
      detailsHi: [
        "बैंड-बाजे एवं ढोल के साथ बारात का भव्य प्रस्थान",
        "वर-पक्ष का पारंपरिक अगवानी व स्वागत सत्कार",
        "मांगलिक परिणय संस्कार एवं पारिवारिक अभिनंदन",
      ]
    }
  ],
  wardrobe: [
    {
      event: "Ganesh Pujan",
      eventHi: "गणेश पूजन",
      paletteName: "Auspicious Saffron & Ochre",
      colors: ["#E65100", "#F9A825", "#F6A834", "#FFF9EF"],
      colorNames: ["Deep Saffron", "Golden Ochre", "Warm Amber", "Ivory Silk"],
      ladies: "Graceful saffron or yellow cotton-silk sarees, traditional jewelry",
      gentlemen: "Classic saffron or beige kurtas with soft pyjamas or dhotis",
      tip: "Traditional and comfortable for sacred morning rituals.",
      image: "https://images.unsplash.com/photo-1590059390046-5381f9b7cbe3?auto=format&fit=crop&w=800&q=80"
    },
    {
      event: "Haldi Ceremony",
      eventHi: "हल्दी रस्म",
      paletteName: "Saffron Sunshine & Blush",
      colors: ["#F9D342", "#F6A834", "#F47A70", "#FFF3D6"],
      colorNames: ["Marigold Gold", "Raw Turmeric", "Gulabi Blush", "Ivory Silk"],
      ladies: "Sunny yellow organza lehengas, floral jewelry, easy breezy shararas",
      gentlemen: "Mustard or ivory chikankari kurtas with soft linen dhotis or trousers",
      tip: "Keep it light, comfortable, and ready for haldi blessings!",
      image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80"
    },
    {
      event: "Sangeet Ceremony",
      eventHi: "संगीत संध्या",
      paletteName: "Emerald Jewel & Metallic Sheen",
      colors: ["#1B4332", "#40916C", "#C5A15A", "#2B2D42"],
      colorNames: ["Deep Emerald", "Forest Green", "Antique Gold", "Midnight Onyx"],
      ladies: "Glimmering sequin lehengas, pre-draped cocktail sarees, sparkling accents",
      gentlemen: "Rich velvet bandhgalas, Indo-western jackets with pocket squares",
      tip: "Wear dancing footwear — the sangeet floor stays lively all evening!",
      image: "https://images.unsplash.com/photo-1544077960-604201fe74bc?auto=format&fit=crop&w=800&q=80"
    },
    {
      event: "Baraat Aagman",
      eventHi: "बारात आगमन",
      paletteName: "Royal Ivory & Vermilion",
      colors: ["#FFF9EF", "#C5A15A", "#6F2927", "#E8A598"],
      colorNames: ["Heritage Ivory", "Muted Gold", "Royal Burgundy", "Blush Petal"],
      ladies: "Traditional Banarasi silks, rich zari lehengas with heritage jewelry",
      gentlemen: "Raw silk sherwanis in ivory/beige paired with an auspicious safa (turban)",
      tip: "Traditional safas available for the wedding procession.",
      image: "https://images.unsplash.com/photo-1607190074257-dd4b7af0309f?auto=format&fit=crop&w=800&q=80"
    }
  ],
  gallery: [
    {
      id: 1,
      title: "Forever Begins Here",
      category: "Romantic Portrait",
      caption: "Khushbu & Abhay sharing a tender, timeless moment beneath the gentle breeze.",
      image: "/images/couple-hero.jpeg",
    },
    {
      id: 2,
      title: "A Sacred Promise",
      category: "Bridal Henna & Love",
      caption: "Bridal mehndi bearing their initials 'AK', resting with devotion upon the heart.",
      image: "/images/couple-hands-heart.jpeg",
    },
    {
      id: 3,
      title: "The Golden Rings",
      category: "Engagement Rituals",
      caption: "The sparkling rings symbolizing eternity, trust, and lifelong companionship.",
      image: "/images/engagement-rings.jpeg",
    },
    {
      id: 4,
      title: "Better Together",
      category: "Engagement Stage",
      caption: "A joyful celebration surrounded by roses, floral garlands, and boundless blessings.",
      image: "/images/couple-stage.jpeg",
    },
    {
      id: 5,
      title: "Candid Laughter & Smiles",
      category: "Candid Love",
      caption: "Spontaneous laughter, shared glances, and sweet promises for tomorrow.",
      image: "/images/couple-candid.jpeg",
    },
    {
      id: 6,
      title: "The Beautiful YES",
      category: "Ring Ceremony",
      caption: "The auspicious ring ceremony marking the beginning of our royal forever.",
      image: "/images/engagement-photo-1.jpeg",
    }
  ],
  hospitality: [
    {
      icon: "Hotel",
      title: "Guest Accommodations",
      desc: "Comfortable rooms and stay arrangements organized for all outstation family and guests in Sundrel & nearby hospitality hubs.",
      note: "Check-in assistance available upon arrival"
    },
    {
      icon: "Car",
      title: "Travel & Transit Assistance",
      desc: "Guidance and coordination for guests traveling from Indore Airport and surrounding railway stations.",
      note: "Please share travel schedule with our hospitality team"
    },
    {
      icon: "Clock",
      title: "Wedding Itinerary",
      desc: "Detailed event timings and celebration guide provided for all guests upon arrival.",
      note: "Digital updates available via Family Concierge"
    },
    {
      icon: "HeartHandshake",
      title: "Hospitality Helpdesk",
      desc: "Our family hospitality coordinators are available to assist you throughout your stay in Sundrel.",
      note: "Dedicated family helpline on site"
    }
  ],
  contacts: {
    hospitalityLead: "Patidar Family Coordinator",
    phone: "+91 98765 43210",
    email: "celebrations@khushbu-abhay.com",
    weddingPlanner: "Patidar Family Celebrations"
  }
};
