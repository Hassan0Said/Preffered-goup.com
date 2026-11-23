
import React from 'react';
import { motion } from 'framer-motion';

const asset = path => `${import.meta.env.BASE_URL}assets/${path}`;

const clientLogos = {
  questEgypt: asset('clients/quest-egypt.webp'),
  givaudan: asset('clients/givaudan.webp'),
  lg: asset('clients/lg.webp'),
  wazzef: asset('clients/wazzef.webp'),
  alphaLogistic: asset('clients/alpha-logistic.webp'),
  marbella: asset('clients/marbella.webp'),
  alSafi: asset('clients/al-safi.webp'),
  banqueMisr: asset('clients/banque-misr.webp'),
  careem: asset('clients/careem.webp'),
  uber: asset('clients/uber.webp'),
  noon: asset('clients/noon.webp'),
  kellorid: asset('clients/kellorid.webp'),
  globalPharma: asset('clients/global-pharma.webp'),
  orascom: asset('clients/orascom.webp'),
  arabAmbassadors: asset('clients/arab-ambassadors.webp'),
};

const logoKeys = [
  'questEgypt',
  'givaudan',
  'lg',
  'wazzef',
  'alphaLogistic',
  'marbella',
  'alSafi',
  'banqueMisr',
  'careem',
  'uber',
  'noon',
  'kellorid',
  'globalPharma',
  'orascom',
  'arabAmbassadors',
];

export function ClientCard({ client, index, lang }) {
  const [name, initials] = client;
  const logo = clientLogos[logoKeys[index]];

  return (
    <motion.article
      className="client-card"
      initial={{ opacity: 0, y: 28, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        delay: (index % 5) * 0.07,
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -9,
        transition: { duration: 0.3 },
      }}
    >
      <div className="client-card-glow" aria-hidden="true" />

      <div className="client-logo-area">
        {logo ? (
          <img
            className="client-logo-image"
            src={logo}
            alt={`${name} logo`}
            loading="lazy"
          />
        ) : (
          <span className="client-logo-placeholder">
            {initials || name.slice(0, 2)}
          </span>
        )}
      </div>

      <div className="client-card-divider" />

      <h3 className="client-company-name">{name}</h3>

      <span className="client-partner-label">
        {lang === 'ar' ? 'شريك نجاح' : 'Valued Partner'}
      </span>
    </motion.article>
  );
}
