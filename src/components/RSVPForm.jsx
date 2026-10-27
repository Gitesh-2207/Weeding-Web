import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { FloralGarland, CornerFlourish } from './common/DecorativeElements';
import { Send, CheckCircle2, AlertCircle, Sparkles, Loader2, Info } from 'lucide-react';

export const RSVPForm = ({ t, lang }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    guests: '1',
    dietary: 'Pure Vegetarian',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) {
      errs.fullName = lang === 'hi' ? 'कृपया अपना नाम दर्ज करें' : 'Full name is required';
    }
    if (!formData.email.trim()) {
      errs.email = lang === 'hi' ? 'कृपया ईमेल दर्ज करें' : 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = lang === 'hi' ? 'कृपया वैध ईमेल दर्ज करें' : 'Please enter a valid email address';
    }
    if (!formData.phone.trim()) {
      errs.phone = lang === 'hi' ? 'कृपया मोबाइल नंबर दर्ज करें' : 'Phone number is required';
    } else if (!/^[+0-9\s-]{8,15}$/.test(formData.phone.trim())) {
      errs.phone = lang === 'hi' ? 'कृपया वैध मोबाइल नंबर दर्ज करें' : 'Please enter a valid phone number';
    }
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    // Simulate luxury submission experience
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);

      try {
        confetti({
          particleCount: 65,
          spread: 80,
          origin: { y: 0.6 },
          colors: ['#C5A15A', '#6F2927', '#F9A825', '#FFF9EF'],
        });
      } catch {
        // Confetti fallback for environments with animation restrictions
      }
    }, 1200);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      guests: '1',
      dietary: 'Pure Vegetarian',
      message: '',
    });
    setErrors({});
  };

  return (
    <section id="rsvp" className="py-24 px-4 sm:px-6 relative bg-paper-pattern overflow-hidden">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-4 py-1 rounded-full bg-cream-50 border border-gold/40 shadow-sm mb-3">
            <Sparkles className="w-3.5 h-3.5 text-gold-dark" />
            <span className="text-xs font-serif tracking-[0.25em] uppercase text-burgundy font-semibold">
              {t.rsvp.heading}
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-playfair font-semibold text-royal-brown tracking-wide">
            {t.rsvp.title}
          </h2>

          <p className="mt-3 text-base sm:text-lg font-cormorant italic text-royal-brown/85">
            "{t.rsvp.desc}"
          </p>

          <FloralGarland className="mt-4" />
        </div>

        {/* RSVP Card Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative p-8 sm:p-14 rounded-3xl bg-cream-card border-2 border-gold/60 shadow-royal-lg overflow-hidden"
        >
          <CornerFlourish className="absolute top-4 left-4 w-10 h-10" position="top-left" />
          <CornerFlourish className="absolute top-4 right-4 w-10 h-10" position="top-right" />
          <CornerFlourish className="absolute bottom-4 left-4 w-10 h-10" position="bottom-left" />
          <CornerFlourish className="absolute bottom-4 right-4 w-10 h-10" position="bottom-right" />

          {/* Inner Dashed Border */}
          <div className="absolute inset-3 border border-gold/30 border-dashed rounded-2xl pointer-events-none" />

          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="py-8 text-center space-y-4"
              >
                <div className="w-16 h-16 rounded-full bg-burgundy/10 text-burgundy border border-gold/50 flex items-center justify-center mx-auto shadow-sm">
                  <CheckCircle2 className="w-8 h-8 text-gold-dark" />
                </div>

                <h3 className="text-2xl sm:text-3xl font-playfair font-semibold text-burgundy">
                  {t.rsvp.successTitle}
                </h3>

                <p className="text-sm sm:text-base font-cormorant italic text-royal-brown max-w-md mx-auto">
                  {t.rsvp.successDesc}
                </p>

                <div className="p-4 rounded-xl bg-ivory-100 border border-gold/30 max-w-sm mx-auto text-xs font-serif text-royal-brown">
                  <p className="font-semibold text-burgundy mb-1">{formData.fullName}</p>
                  <p>{formData.guests} Guest(s) • {formData.dietary}</p>
                  {formData.message && (
                    <p className="mt-1 italic text-royal-brown/80 font-cormorant text-sm">
                      "{formData.message}"
                    </p>
                  )}
                </div>

                {/* Demonstration Notice */}
                <div className="flex items-center justify-center space-x-2 text-[11px] font-serif text-royal-brown/70 max-w-md mx-auto pt-2">
                  <Info className="w-3.5 h-3.5 shrink-0 text-gold-dark" />
                  <span>{t.rsvp.demoNotice}</span>
                </div>

                <button
                  onClick={handleReset}
                  className="mt-4 px-6 py-2.5 rounded-full border border-gold text-xs font-serif uppercase tracking-widest text-burgundy hover:bg-gold/10 transition-colors"
                >
                  Submit Another Response
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                noValidate
                className="space-y-6 relative z-10"
              >
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-serif uppercase tracking-wider text-royal-brown font-semibold mb-1.5">
                    {t.rsvp.fullName} *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder={t.rsvp.fullNamePlaceholder}
                    className={`w-full px-4 py-3 rounded-xl bg-ivory-50/80 border ${
                      errors.fullName ? 'border-red-500' : 'border-gold/50'
                    } focus:border-gold focus:ring-1 focus:ring-gold outline-none text-royal-brown font-serif text-sm transition-all`}
                  />
                  {errors.fullName && (
                    <p className="mt-1 text-xs text-red-600 flex items-center space-x-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.fullName}</span>
                    </p>
                  )}
                </div>

                {/* Email and Phone Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-serif uppercase tracking-wider text-royal-brown font-semibold mb-1.5">
                      {t.rsvp.email} *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={t.rsvp.emailPlaceholder}
                      className={`w-full px-4 py-3 rounded-xl bg-ivory-50/80 border ${
                        errors.email ? 'border-red-500' : 'border-gold/50'
                      } focus:border-gold focus:ring-1 focus:ring-gold outline-none text-royal-brown font-serif text-sm transition-all`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-600 flex items-center space-x-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-serif uppercase tracking-wider text-royal-brown font-semibold mb-1.5">
                      {t.rsvp.phone} *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder={t.rsvp.phonePlaceholder}
                      className={`w-full px-4 py-3 rounded-xl bg-ivory-50/80 border ${
                        errors.phone ? 'border-red-500' : 'border-gold/50'
                      } focus:border-gold focus:ring-1 focus:ring-gold outline-none text-royal-brown font-serif text-sm transition-all`}
                    />
                    {errors.phone && (
                      <p className="mt-1 text-xs text-red-600 flex items-center space-x-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.phone}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Guest count and Dietary Preference */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-serif uppercase tracking-wider text-royal-brown font-semibold mb-1.5">
                      {t.rsvp.guests}
                    </label>
                    <select
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-ivory-50/80 border border-gold/50 focus:border-gold outline-none text-royal-brown font-serif text-sm"
                    >
                      <option value="1">1 Person (Attending Solo)</option>
                      <option value="2">2 Persons (Couple)</option>
                      <option value="3">3 Persons (Family)</option>
                      <option value="4">4 Persons (Family)</option>
                      <option value="5+">5+ Persons (Large Family)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-serif uppercase tracking-wider text-royal-brown font-semibold mb-1.5">
                      {t.rsvp.dietary}
                    </label>
                    <select
                      name="dietary"
                      value={formData.dietary}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-ivory-50/80 border border-gold/50 focus:border-gold outline-none text-royal-brown font-serif text-sm"
                    >
                      <option value="Pure Vegetarian (Jain Available)">{t.rsvp.dietPureVeg}</option>
                      <option value="Pure Vegetarian">{t.rsvp.dietStandardVeg}</option>
                      <option value="Non-Vegetarian">{t.rsvp.dietNonVeg}</option>
                    </select>
                  </div>
                </div>

                {/* Message / Special Requests */}
                <div>
                  <label className="block text-xs font-serif uppercase tracking-wider text-royal-brown font-semibold mb-1.5">
                    {t.rsvp.message}
                  </label>
                  <textarea
                    name="message"
                    rows="3"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t.rsvp.messagePlaceholder}
                    className="w-full px-4 py-3 rounded-xl bg-ivory-50/80 border border-gold/50 focus:border-gold outline-none text-royal-brown font-serif text-sm"
                  />
                </div>

                {/* Demonstration Notice */}
                <div className="p-3 rounded-xl bg-ivory-100/70 border border-gold/25 flex items-start space-x-2 text-[11px] font-serif text-royal-brown/75">
                  <Info className="w-4 h-4 text-gold-dark shrink-0 mt-0.5" />
                  <span>{t.rsvp.demoNotice}</span>
                </div>

                {/* Submit Button */}
                <div className="text-center pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-10 py-4 rounded-full bg-burgundy hover:bg-burgundy-light text-[#FFF9EF] font-serif text-sm tracking-[0.2em] uppercase font-semibold shadow-royal border border-gold/60 transition-all duration-300 disabled:opacity-70 flex items-center justify-center space-x-3 mx-auto"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-gold" />
                        <span>{t.rsvp.submitting}</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-gold" />
                        <span>{t.rsvp.submitBtn}</span>
                        <Sparkles className="w-4 h-4 text-gold-light" />
                      </>
                    )}
                  </button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
