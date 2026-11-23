import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  Handshake,
  Building2,
  Sparkles,
} from 'lucide-react';

import { clientCatalog } from '../lib/content.js';
import { useApp } from '../contexts/AppContext.jsx';
import { PageIntro } from '../components/common/PageIntro.jsx';
import { ClientCard } from '../components/cards/ClientCard.jsx';

const smoothEase = [0.22, 1, 0.36, 1];

const contentVariants = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: smoothEase,
      staggerChildren: 0.14,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: smoothEase },
  },
};

export function Clients() {
  const { t, lang } = useApp();
  const clients = clientCatalog[lang];

  const clientsHero = '/assets/clients/cleint-hero-section.jpg';
  return (
    <>
      <PageIntro
        eyebrow={t.clientsEyebrow}
        title={t.clientsTitle}
        text={t.clientsText}
        accent="coral"
        className="clients-page-intro"
        image={clientsHero}
      />

      <section className="section section-paper clients-section">
        <div className="container-xl">
          <motion.div
            className="clients-heading"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: smoothEase }}
          >
            <motion.span
              className="clients-heading-icon"
              whileHover={{ rotate: 12, scale: 1.12 }}
              transition={{ type: 'spring', stiffness: 300, damping: 12 }}
            >
              <Handshake size={19} />
            </motion.span>

            <div>
              <span className="clients-heading-eyebrow">
                {lang === 'ar' ? 'نفخر بثقتهم' : 'TRUSTED PARTNERS'}
              </span>

              <h2>
                {lang === 'ar' ? 'شركاء النجاح' : 'Our Valued Partners'}
              </h2>
            </div>
          </motion.div>

          <div className="client-grid">
            {clients.map((client, index) => (
              <ClientCard
                key={`${client[0]}-${index}`}
                client={client}
                index={index}
                lang={lang}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="clients-partner-cta">
        <motion.div
          className="clients-cta-orb clients-cta-orb--one"
          aria-hidden="true"
          animate={{
            x: [0, 24, 0],
            y: [0, -20, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        <motion.div
          className="clients-cta-orb clients-cta-orb--two"
          aria-hidden="true"
          animate={{
            x: [0, -20, 0],
            y: [0, 18, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        <div className="container-xl clients-partner-cta-inner">
          <motion.div
            className="clients-cta-content"
            variants={contentVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
          >
            <motion.span
              className="clients-cta-eyebrow"
              variants={itemVariants}
            >
              <span className="clients-cta-eyebrow-icon">
                <Sparkles size={14} />
              </span>
              {lang === 'ar' ? 'لنبنِ شراكة ناجحة' : 'LET’S WORK TOGETHER'}
            </motion.span>

            <motion.h2 variants={itemVariants}>
              {lang === 'ar'
                ? 'هل ترغب في أن تكون شريك نجاحنا؟'
                : 'Want to become one of our partners?'}
            </motion.h2>

            <motion.p variants={itemVariants}>
              {lang === 'ar'
                ? 'يسعدنا التعاون مع شركتك وتقديم حلول تنقل تناسب احتياجات فريقك.'
                : 'We would love to work with your company and provide transportation solutions tailored to your team.'}
            </motion.p>

            <motion.div
              className="clients-cta-trust"
              variants={itemVariants}
            >
              <Building2 size={17} />
              <span>
                {lang === 'ar'
                  ? 'شراكات مبنية على الثقة والالتزام'
                  : 'Partnerships built on trust and commitment'}
              </span>
            </motion.div>
          </motion.div>

          <motion.div
            className="clients-cta-action"
            initial={{ opacity: 0, x: lang === 'ar' ? -35 : 35, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: smoothEase,
            }}
          >
            <motion.div
              className="clients-cta-action-icon"
              animate={{ y: [0, -7, 0], rotate: [0, 5, 0] }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <Handshake size={34} strokeWidth={1.5} />
            </motion.div>

            <motion.div
              whileHover={{ y: -5, scale: 1.035 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: 'spring', stiffness: 320, damping: 17 }}
            >
              <NavLink to="/contact" className="clients-cta-button">
                <span>{lang === 'ar' ? 'تواصل معنا' : 'Contact us'}</span>
                <motion.span
                  className="clients-cta-button-icon"
                  animate={{ x: lang === 'ar' ? [0, -4, 0] : [0, 4, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  <ArrowUpRight size={19} />
                </motion.span>
              </NavLink>
            </motion.div>

            <span className="clients-cta-action-caption">
              {lang === 'ar'
                ? 'خطوتك الأولى نحو تعاون مثمر'
                : 'Your first step towards a great partnership'}
            </span>
          </motion.div>
        </div>
      </section>
    </>
  );
}