
import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  Sparkles,
  Route,
  Users,
  Handshake,
} from 'lucide-react';

import { useApp } from '../contexts/AppContext.jsx';
import { PageIntro } from '../components/common/PageIntro.jsx';
import { Stats } from '../components/common/Stats.jsx';
import { Logo } from '../components/brand/Logo.jsx';

const smoothEase = [0.22, 1, 0.36, 1];

const sectionVariants = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: smoothEase,
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: smoothEase,
    },
  },
};

export function About() {
  const { t, lang } = useApp();
  const aboutHero = '/assets/About/About-hero-section.jpg';
  const isArabic = lang === 'ar';

  const features = [
    {
      icon: ShieldCheck,
      number: '01',
      title: isArabic ? 'الأمان والموثوقية' : 'Safety & Reliability',
      text: isArabic
        ? 'نضع سلامة الركاب وراحتهم في مقدمة أولوياتنا في كل رحلة.'
        : 'Passenger safety and comfort come first in every journey.',
    },
    {
      icon: Route,
      number: '02',
      title: isArabic ? 'حلول تنقل متكاملة' : 'Complete Mobility',
      text: isArabic
        ? 'نوفر حلول نقل مرنة تناسب مختلف الاحتياجات والوجهات.'
        : 'Flexible transportation solutions tailored to different needs and destinations.',
    },
    {
      icon: Users,
      number: '03',
      title: isArabic ? 'الاهتمام بالتفاصيل' : 'People First',
      text: isArabic
        ? 'نهتم بتجربة كل عميل ونسعى لبناء علاقات طويلة الأمد.'
        : 'We care about every customer experience and build lasting relationships.',
    },
  ];

  return (
    <>
      <PageIntro
        eyebrow={t.aboutEyebrow}
        title={t.aboutTitle}
        text={t.aboutText}
        accent="gold"
        image={aboutHero}
        className="about-page-intro"
      />

      {/* About Story */}
      <section className="section section-dark about-story-section">
        <div className="container-xl">

          <motion.div
            className="about-story-grid"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Brand Story Card */}
            <motion.div
              className="about-note"
              variants={itemVariants}
              whileHover={{ y: -7 }}
              transition={{ duration: 0.35, ease: smoothEase }}
            >
              {/* Card Heading */}
              <div className="about-note-top">
                <span className="about-note-label">
                  {isArabic ? 'هويتنا' : 'WHO WE ARE'}
                </span>

                <span className="about-note-heading-line" />
              </div>

              {/* Quote Mark */}
              <span className="large-mark">“</span>

              {/* Brand Quote */}
              <p className="about-note-quote">
                {isArabic ? (
                  <>
                    تجمع <strong>Preferred</strong> بين النقل الموثوق ونظرة
                    أكثر إنسانية للسفر. كل تفصيلة مقصودة، وكل طريق يمنحك
                    مساحة أكبر لاكتشاف مصر.
                  </>
                ) : (
                  t.aboutText
                )}
              </p>

              {/* Divider */}
              <div className="about-note-divider" />

              {/* Card Footer */}
              <div className="about-note-footer">
                <div className="about-note-brand">
                  <Logo compact />
                </div>

                <div className="about-note-signature">
                  <strong>Preferred</strong>
                  <span>{t.signature}</span>
                </div>
              </div>

              {/* Decoration */}
              <div className="about-note-decoration" />
            </motion.div>

            {/* Main Story */}
            <motion.div
              className="about-story-content"
              variants={itemVariants}
            >
              <span className="about-section-eyebrow">
                <span />
                {isArabic ? 'قصتنا ورؤيتنا' : 'OUR STORY & VISION'}
              </span>

              <h2 className="display-title">
                {t.aboutHeadlineBefore}{' '}
                <em>{t.aboutHeadlineAccent}</em>{' '}
                {t.aboutHeadlineAfter}
              </h2>

              <p className="body-copy">
                {t.aboutText} {t.aboutBodySecond}
              </p>

              <div className="about-story-divider" />

              <div className="about-story-bottom">
                <div className="about-story-promise">
                  <Sparkles size={19} />
                  <span>
                    {isArabic
                      ? 'تجربة تنقل تستحق ثقتك'
                      : 'A transportation experience worth your trust'}
                  </span>
                </div>

                <NavLink
                  className="button button-primary about-contact-button"
                  to="/contact"
                >
                  <span>{t.contact}</span>
                  <ArrowRight size={17} />
                </NavLink>
              </div>
            </motion.div>
          </motion.div>

          {/* Why Choose Us */}
          <motion.div
            className="about-features-section"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div
              className="about-features-heading"
              variants={itemVariants}
            >
              <div>
                <span className="about-section-eyebrow">
                  <span />
                  {isArabic ? 'ما يميزنا' : 'WHY CHOOSE US'}
                </span>

                <h2>
                  {isArabic
                    ? 'أكثر من مجرد وسيلة نقل'
                    : 'More Than Just Transportation'}
                </h2>
              </div>

              <p>
                {isArabic
                  ? 'نؤمن أن الرحلة المميزة تبدأ بالاهتمام بكل تفصيلة.'
                  : 'We believe every great journey begins with attention to every detail.'}
              </p>
            </motion.div>

            <div className="about-features-grid">
              {features.map((feature) => {
                const Icon = feature.icon;

                return (
                  <motion.article
                    className="about-feature-card"
                    key={feature.number}
                    variants={itemVariants}
                    whileHover={{ y: -9 }}
                    transition={{ duration: 0.3, ease: smoothEase }}
                  >
                    <div className="about-feature-top">
                      <span className="about-feature-icon">
                        <Icon size={23} strokeWidth={1.7} />
                      </span>

                      <span className="about-feature-number">
                        {feature.number}
                      </span>
                    </div>

                    <h3>{feature.title}</h3>

                    <p>{feature.text}</p>

                    <div className="about-feature-line" />

                    <ArrowUpRight
                      className="about-feature-arrow"
                      size={19}
                    />
                  </motion.article>
                );
              })}
            </div>
          </motion.div>

        </div>
      </section>

      {/* Company Statistics */}
      <div className="about-stats-spacing">
        <Stats />
      </div>
    </>
  );
}
