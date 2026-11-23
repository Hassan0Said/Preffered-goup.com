import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Compass, UsersRound, Zap } from 'lucide-react';
import { fleetCatalog } from '../../lib/content.js';
import { useApp } from '../../contexts/AppContext.jsx';
import { VehicleVisual } from './VehicleVisual.jsx';

export function FleetCard({ itemKey, index }) {
  const { lang, t } = useApp();
  const { pathname } = useLocation();
  const prefersReducedMotion = useReducedMotion();

  const entry = fleetCatalog[lang]?.[itemKey] || fleetCatalog.en[itemKey] || [];
  const [name, rawSeats, fuel, brand, speed] = entry;
  const seats = itemKey === 'kiaGrand' ? 4 : rawSeats;

  return (
    <motion.article
      className="auto-card"
      initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.16 }}
      transition={{
        duration: 0.45,
        delay: Math.min(index * 0.07, 0.28),
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={prefersReducedMotion ? {} : { y: -6 }}
    >
      <div className="auto-card-media">
        <VehicleVisual kind={itemKey} />
      </div>

      <div className="auto-card-body">
        <div className="auto-card-top">
          <h3>{name}</h3>
        </div>

        <div className="auto-specs">
          <span title={t.passengers}>
            <UsersRound size={15} />
            {seats} {t.passengers}
          </span>

          <span>
            <Zap size={15} />
            {fuel}
          </span>

          <span>
            <Compass size={15} />
            {brand}
          </span>

          <span>
            <ArrowRight size={15} />
            {speed}
          </span>
        </div>

        <div className="auto-card-footer">
          <NavLink className="auto-detail-link" to="/contact">
            <span>{t.quote}</span>
            <ArrowRight size={15} className="auto-arrow-icon" />
          </NavLink>

          {pathname !== '/fleet' && (
            <NavLink className="auto-secondary-link" to="/fleet">
              {t.details}
            </NavLink>
          )}
        </div>
      </div>
    </motion.article>
  );
}