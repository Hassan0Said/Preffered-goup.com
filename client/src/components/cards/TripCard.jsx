
import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Clock3, MapPin } from 'lucide-react';
import { useApp } from '../../contexts/AppContext.jsx';
import { TripVisual } from './TripVisual.jsx';

export function TripCard({ itemKey, index = 0, tripData: customTripData }) {
  const { t } = useApp();
  const prefersReducedMotion = useReducedMotion();

  const tripData = customTripData || t.trip?.[itemKey] || [];

  const [name, desc, third, fourth] = tripData;

  const duration = customTripData ? '' : third;
  const place = customTripData ? third : fourth;

  return (
    <motion.article
      className={`editorial-trip-card editorial-trip-card--${index % 3}`}
      initial={prefersReducedMotion ? false : { opacity: 0, y: 38, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{
        duration: 0.65,
        delay: (index % 6) * 0.07,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={
        prefersReducedMotion
          ? {}
          : { y: -7, transition: { duration: 0.3 } }
      }
    >
      <TripVisual kind={itemKey} />

      <div className="editorial-trip-scrim" />

      <div className="editorial-trip-overlay">
        <div className="editorial-trip-meta">
          {place && (
            <span>
              <MapPin size={14} />
              {place}
            </span>
          )}

          {duration && (
            <span>
              <Clock3 size={14} />
              {duration}
            </span>
          )}
        </div>

        <h3 className="editorial-trip-title">{name}</h3>

        <div className="editorial-trip-reveal">
          <p className="editorial-trip-desc">{desc}</p>

          <NavLink className="editorial-trip-cta" to="/contact">
            <span>{t.learnMore}</span>
            <ArrowRight size={16} className="editorial-arrow-icon" />
          </NavLink>
        </div>
      </div>
    </motion.article>
  );
}
