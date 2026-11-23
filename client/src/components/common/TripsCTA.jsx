
import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { useApp } from '../../contexts/AppContext.jsx';

export function TripsCTA() {
  const { t, lang } = useApp();
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="trips-cta-section">
      <motion.div
        className="trips-cta-orbit trips-cta-orbit--one"
        animate={prefersReducedMotion ? {} : { rotate: 360 }}
        transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
      />

      <motion.div
        className="trips-cta-orbit trips-cta-orbit--two"
        animate={prefersReducedMotion ? {} : { rotate: -360 }}
        transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
      />

      <div className="container-xl trips-cta-inner">
        <motion.div
          className="trips-cta-content"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="trips-cta-eyebrow">
            <Sparkles size={15} />
            <span>{t.tripsCtaEyebrow}</span>
          </div>

          <h2>{t.tripsCtaTitle}</h2>

          <p>{t.tripsCtaText}</p>

          <NavLink to="/contact" className="trips-cta-button">
            <span>{t.tripsCtaButton}</span>
            <ArrowUpRight size={18} />
          </NavLink>
        </motion.div>

        <motion.div
          className="trips-cta-symbol"
          initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <div className="trips-cta-symbol-ring">
            {/* صورة مؤقتة - استبدلها باللوجو لاحقًا */}
            <img
              src="/assets/trips/trips-cta-pyramids.jpg"
              alt="Pyramids of Giza at sunset"
              loading="lazy"
            />
          </div>

          <span className="trips-cta-symbol-caption">
            {lang === 'ar' ? 'اكتشف مصر بطريقتك' : 'DISCOVER EGYPT YOUR WAY'}
          </span>
        </motion.div>
      </div>
    </section>
  );
}
