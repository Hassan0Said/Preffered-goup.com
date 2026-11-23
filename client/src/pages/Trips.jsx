
import React from 'react';
import { destinationKeys, destinationCatalog } from '../lib/content.js';
import { useApp } from '../contexts/AppContext.jsx';
import { PageIntro } from '../components/common/PageIntro.jsx';
import { TripsCTA } from '../components/common/TripsCTA.jsx';
import { TripCard } from '../components/cards/TripCard.jsx';
import { Sparkles } from 'lucide-react';

export function Trips() {
  const { t, lang } = useApp();

const tripHero = '/assets/trips/trips_hero_section.jpg';
  return (
    <>
      <PageIntro
        eyebrow={t.tripsEyebrow}
        title={t.trips}
        text={t.tripsText}
        accent="teal"
        image={tripHero}
        className="trips-page-intro"
      />

      <section className="section section-paper">
        <div className="container-xl">
          <div className="route-label trips-route-title">الرحلات</div>
          <div className="trip-grid trip-grid-full">
            {destinationKeys.map((key, index) => (
              <TripCard
                key={key}
                itemKey={key}
                index={index}
                tripData={destinationCatalog[lang][key]}
              />
            ))}
          </div>

          <div className="trip-note">
            <Sparkles size={19} />
            <span>
              {lang === 'ar'
                ? 'يمكن تخصيص كل رحلة حسب وقتك وإيقاعك.'
                : 'Every route can be tailored to your time and rhythm.'}
            </span>
          </div>
        </div>
      </section>

      <TripsCTA />
    </>
  );
}
