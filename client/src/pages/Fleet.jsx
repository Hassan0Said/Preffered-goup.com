
import React, { useMemo, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { CarFront, ShieldCheck, Users } from 'lucide-react';
import { fullFleetKeys } from '../lib/content.js';
import { useApp } from '../contexts/AppContext.jsx';
import { FleetCard } from '../components/cards/FleetCard.jsx';
import { PageIntro } from '../components/common/PageIntro.jsx';

const FLEET_EASE = [0.22, 1, 0.36, 1];

  const categories = {
    all: fullFleetKeys,

    vans: [
      'oldHiace',
      'newHiace',
      'h1',
      'hyundaiStaria',
      'v300',
    ],

    coaches: [
      'coaster',
      'mitsubishiBus',
      'superJet',
    ],

    sedans: [
      'mercedesE200',
      'mercedesS500',
      'corolla',
      'accent',
      'mg5',
      'elantra',
      'elantraMD',
    ],

    suvs: [
      'mercedesGLC300',
      'gClass',
      'rangeRover',
      'landCruiser',
      'nissanPatrol',
      'jeepGrand',
      'mgG50',
      'jetour',
      'fortuner',
      'tucson',
      'newSportage',
      'sportage',
      'kiaGrand',
      'tiggo7',
      'eclipse',
      'zs',
    ],
  };

export function Fleet() {
  const { t, lang } = useApp();
  const prefersReducedMotion = useReducedMotion();
  const isAr = lang === 'ar';

  const fleetHero = '/assets/cars/fleet-lineup-van-suv-coach.jpg';

  const [filter, setFilter] = useState('all');

  const visibleKeys = useMemo(
    () => categories[filter] || fullFleetKeys,
    [filter]
  );

  const highlights = isAr
    ? [
        {
          id: 'variety',
          title: 'تنوع السيارات',
          description:
            'خيارات متعددة من السيدان والـ SUV والفان والكوستر لتناسب طبيعة كل مشوار.',
          Icon: CarFront,
        },
        {
          id: 'spaces',
          title: 'مساحات مختلفة تناسب الأفراد والعائلات والمجموعات',
          description:
            'سعات مقاعد وحقائب مدروسة سواء كنت تتنقل بمفردك أو مع عائلتك أو ضمن مجموعة.',
          Icon: Users,
        },
        {
          id: 'comfort',
          title: 'تجربة تنقل مريحة',
          description:
            'سيارات مجهزة ومعتنى بها باستمرار لضمان رحلة سلسة وهادئة من البداية للنهاية.',
          Icon: ShieldCheck,
        },
      ]
    : [
        {
          id: 'variety',
          title: 'Vehicle Variety',
          description:
            'A curated range of sedans, SUVs, vans, and coasters tailored to every itinerary.',
          Icon: CarFront,
        },
        {
          id: 'spaces',
          title: 'Spaces for Individuals, Families & Groups',
          description:
            'Thoughtful seating and luggage capacities for solo travelers, families, and larger groups.',
          Icon: Users,
        },
        {
          id: 'comfort',
          title: 'Comfortable Travel Experience',
          description:
            'Well-maintained vehicles prepared for a smooth, calm journey from pickup to drop-off.',
          Icon: ShieldCheck,
        },
      ];

  const sectionHeading = isAr
    ? 'اكتشف أسطول سياراتنا'
    : 'Explore Our Fleet';

  const sectionSubtext = isAr
    ? 'اختر السيارة الأنسب لرحلتك حسب الفئة وعدد الركاب.'
    : 'Choose the right vehicle for your journey by category and passenger capacity.';

  const activeCategoryLabel = t.fleetFilters?.[filter] || filter;

  const countText = isAr
    ? `${visibleKeys.length} ${
        visibleKeys.length === 1 ? 'سيارة' : 'سيارات'
      } في فئة "${activeCategoryLabel}"`
    : `${visibleKeys.length} ${
        visibleKeys.length === 1 ? 'vehicle' : 'vehicles'
      } in "${activeCategoryLabel}"`;

  return (
    <>
      <PageIntro
        eyebrow={t.fleetEyebrow}
        title={t.fleetTitle}
        text={t.fleetText}
        className="fleet-page-intro"
        image={fleetHero}
        lang={lang}
      />

      {/* Fleet Highlights */}
      <section
        className="section fleet-highlights-section"
        aria-label={isAr ? 'مميزات الأسطول' : 'Fleet highlights'}
      >
        <div className="container-xl">
          <div className="fleet-highlights-head">
            <h2>
              {isAr
                ? 'تنقل براحة وثقة في كل رحلة'
                : 'Travel with Comfort and Confidence on Every Journey'}
            </h2>
          </div>

          <div className="fleet-highlights-grid">
            {highlights.map(
              ({ id, title, description, Icon }, idx) => (
                <motion.div
                  key={id}
                  className="fleet-highlight-card"
                  initial={
                    prefersReducedMotion
                      ? false
                      : { opacity: 0, y: 18 }
                  }
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.42,
                    delay: Math.min(idx * 0.07, 0.21),
                    ease: FLEET_EASE,
                  }}
                >
                  <div
                    className="fleet-highlight-icon"
                    aria-hidden="true"
                  >
                    <Icon size={20} />
                  </div>

                  <h3>{title}</h3>
                  <p>{description}</p>
                </motion.div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Fleet Catalog */}
      <section className="section section-paper fleet-catalog-section">
        <div className="container-xl">
          <div className="fleet-catalog-header">
            <div className="fleet-catalog-copy">
              <h2>{sectionHeading}</h2>
              <p>{sectionSubtext}</p>
            </div>

            <div className="fleet-count-badge" aria-live="polite">
              {countText}
            </div>
          </div>

          <div className="fleet-filters-bar">
            <div
              className="fleet-filters"
              role="tablist"
              aria-label={t.fleetFiltersLabel}
            >
              {Object.entries(t.fleetFilters).map(([key, label]) => (
                <button
                  key={key}
                  type="button"
                  role="tab"
                  aria-selected={filter === key}
                  className={filter === key ? 'active' : ''}
                  onClick={() => setFilter(key)}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          <div className="fleet-full-grid">
            {visibleKeys.map((key, index) => (
              <FleetCard
                key={key}
                itemKey={key}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
