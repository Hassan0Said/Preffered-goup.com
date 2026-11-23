
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { homeFleetKeys, tripKeys } from '../lib/content.js';
import { useApp } from '../contexts/AppContext.jsx';
import { FleetCard } from '../components/cards/FleetCard.jsx';
import { SectionHeader } from '../components/common/SectionHeader.jsx';
import { Stats } from '../components/common/Stats.jsx';
import { TripCard } from '../components/cards/TripCard.jsx';

const CAROUSEL_MEDIA = [
  '/assets/trips/pyramids-golden-hour.webp',
  '/assets/trips/nubia-nile.webp',
  '/assets/cars/suv-premium.jpg',
  '/assets/trips/grand-egyptian-museum.jpg',
  '/assets/trips/alexandria-qaitbay.jpg',
];

const LUXURY_EASE = [0.22, 1, 0.36, 1];

function HeroCarousel({ lang, t }) {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const slides =
    lang === 'ar'
      ? [
          ['بداية من قلب التاريخ.', 'الجيزة.. حيث تبدأ الحكاية'],
          ['للنيل حكاية أخرى.', 'أسوان.. رحلة على مهل'],
          ['الطريق أجمل معك.', 'رفاهية تليق برحلتك'],
          ['عظمة لا يحدّها الزمن.', 'اكتشف سحر الحضارة المصرية'],
          ['نسمة بحر ومدينة تحكي.', 'الإسكندرية على مهل'],
        ]
      : [
          ['Begin in the heart of history.', 'Giza.. where the story begins'],
          ['The Nile has another story.', 'Aswan.. a journey at your own pace'],
          ['The road feels better with you.', 'Luxury that elevates every journey'],
          ['Grandeur beyond time.', 'Discover the magic of Egyptian heritage'],
          ['A sea breeze and a city of stories.', 'Alexandria, at your own pace'],
        ];

  const total = slides.length;

  const goToSlide = (nextIndex, dir) => {
    const normalized = ((nextIndex % total) + total) % total;
    setDirection(dir);
    setActive(normalized);
  };

  const handleNext = () => goToSlide(active + 1, 1);
  const handlePrev = () => goToSlide(active - 1, -1);

  useEffect(() => {
    if (paused) return undefined;

    const timer = setInterval(() => {
      setDirection(1);
      setActive((prev) => (prev + 1) % total);
    }, 5600);

    return () => clearInterval(timer);
  }, [paused, total]);

  const [headline, subtitle] = slides[active];
  const currentImage = CAROUSEL_MEDIA[active];

  return (
    <section
      className="luxury-carousel"
      aria-label="Preferred highlights"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="luxury-carousel-frame">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={`${lang}-${active}`}
            className="luxury-slide"
            custom={direction}
            initial={
              prefersReducedMotion
                ? { opacity: 0 }
                : { opacity: 0, x: direction > 0 ? 24 : -24 }
            }
            animate={{ opacity: 1, x: 0 }}
            exit={
              prefersReducedMotion
                ? { opacity: 0 }
                : { opacity: 0, x: direction > 0 ? -24 : 24 }
            }
            transition={{ duration: 0.48, ease: LUXURY_EASE }}
          >
            <img
              src={currentImage}
              alt={headline}
              className="luxury-slide-img"
            />

            <div className="luxury-slide-overlay" />

            <div className="container-xl luxury-slide-inner">
              <div className="luxury-slide-content">
                <h1 className="luxury-slide-title">{headline}</h1>
                <p className="luxury-slide-subtitle">{subtitle}</p>

                <div className="luxury-slide-actions">
                  <NavLink className="button button-primary" to="/fleet">
                    {t.exploreFleet}
                    <ArrowRight size={17} />
                  </NavLink>

                  <NavLink className="button button-champagne" to="/contact">
                    {t.planJourney}
                  </NavLink>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="luxury-carousel-controls" dir="ltr">
          <button
            type="button"
            className="carousel-arrow"
            onClick={handlePrev}
            aria-label={lang === 'ar' ? 'الشريحة السابقة' : 'Previous slide'}
          >
            <ArrowLeft size={18} />
          </button>

          <div
            className="carousel-dots"
            role="tablist"
            aria-label="Slide pagination"
          >
            {slides.map((_, index) => (
              <button
                key={index}
                type="button"
                role="tab"
                aria-selected={index === active}
                className={index === active ? 'active' : ''}
                onClick={() =>
                  goToSlide(index, index >= active ? 1 : -1)
                }
                aria-label={`Slide ${index + 1}`}
              />
            ))}
          </div>

          <button
            type="button"
            className="carousel-arrow"
            onClick={handleNext}
            aria-label={lang === 'ar' ? 'الشريحة التالية' : 'Next slide'}
          >
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}

export function Home() {
  const { t, lang } = useApp();
  const prefersReducedMotion = useReducedMotion();

  const revealProps = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.14 },
        transition: { duration: 0.55, ease: LUXURY_EASE },
      };

  return (
    <>
      <HeroCarousel lang={lang} t={t} />

      {/* 2. Most Popular Cars */}
      <motion.section
        className="section section-alt popular-cars-section"
        {...revealProps}
      >
        <div className="container-xl">
          <SectionHeader
            eyebrow={t.fleetEyebrow}
            title={t.fleetTitle}
            text={t.fleetText}
            action={{ label: t.details, to: '/fleet' }}
          />

          <div className="fleet-preview-grid">
            {homeFleetKeys.map((key, index) => (
              <FleetCard
                key={key}
                itemKey={key}
                index={index}
              />
            ))}
          </div>
        </div>
      </motion.section>

      {/* 3. Featured Trips */}
      <motion.section
        className="section section-main featured-trips-section"
        {...revealProps}
      >
        <div className="container-xl">
          <SectionHeader
            eyebrow={t.tripsEyebrow}
            title={t.tripsTitle}
            text={t.tripsText}
            action={{ label: t.details, to: '/trips' }}
          />

          <div className="editorial-trip-grid">
            {tripKeys.map((key, index) => (
              <TripCard
                key={key}
                itemKey={key}
                index={index}
              />
            ))}
          </div>
        </div>
      </motion.section>

      {/* 4. Animated Marquee */}
      <section className="luxury-marquee" aria-label="Brand statement">
        <div className="luxury-marquee-track">
          <span>BEYOND TRANSPORTATION. BEYOND EXPECTATIONS.</span>
          <i aria-hidden="true">✦</i>
          <span>BEYOND TRANSPORTATION. BEYOND EXPECTATIONS.</span>
          <i aria-hidden="true">✦</i>
          <span>BEYOND TRANSPORTATION. BEYOND EXPECTATIONS.</span>
          <i aria-hidden="true">✦</i>
          <span>BEYOND TRANSPORTATION. BEYOND EXPECTATIONS.</span>
          <i aria-hidden="true">✦</i>
        </div>
      </section>

      {/* 5. Animated Stats */}
      <motion.section
        className="section section-alt home-stats-section"
        {...revealProps}
      >
        <div className="container-xl">
          <SectionHeader
            eyebrow={t.aboutEyebrow}
            title={t.aboutTitle}
            text={t.aboutText}
            action={{ label: t.ourStory, to: '/about' }}
          />

          <Stats />
        </div>
      </motion.section>
    </>
  );
}
