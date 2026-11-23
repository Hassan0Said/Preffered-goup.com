import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Mail,
  MapPin,
  Phone,
  House,
  CarFront,
  MapPinned,
  Info,
  Users,
  Compass,
  ArrowUpRight,
} from 'lucide-react';

import { useApp } from '../../contexts/AppContext.jsx';
import { Logo } from '../brand/Logo.jsx';

const HEADER_EASE = [0.22, 1, 0.36, 1];

// Same smooth icon movement used by the header navigation.
const footerIconVariants = {
  rest: {
    y: 0,
    rotate: 0,
    scale: 1,
  },
  hover: {
    y: -4,
    rotate: -8,
    scale: 1.12,
    transition: {
      duration: 0.28,
      ease: HEADER_EASE,
    },
  },
  tap: {
    y: 2,
    rotate: 8,
    scale: 0.9,
    transition: {
      duration: 0.12,
    },
  },
};

// Contact links move gently while their icons use the header's liquid-like motion.
const footerContactVariants = {
  rest: { x: 0 },
  hover: {
    x: 4,
    transition: { duration: 0.25, ease: HEADER_EASE },
  },
  tap: { x: 0 },
};

const footerLinks = {
  company: [
    { path: '/', key: 'home', icon: House },
    { path: '/about', key: 'about', icon: Info },
    { path: '/clients', key: 'clients', icon: Users },
    { path: '/contact', key: 'contact', icon: Phone },
  ],
  explore: [
    { path: '/fleet', key: 'fleet', icon: CarFront },
    { path: '/trips', key: 'trips', icon: MapPinned },
  ],
};

function FooterNavLink({ path, label, Icon }) {
  return (
    <motion.div
      className="footer-nav-item"
      initial="rest"
      whileHover="hover"
      whileTap="tap"
    >
      <NavLink
        to={path}
        className={({ isActive }) => (isActive ? 'active' : '')}
      >
        <motion.span
          className="footer-link-icon"
          variants={footerIconVariants}
          aria-hidden="true"
        >
          <Icon size={16} strokeWidth={1.8} />
        </motion.span>

        <span className="footer-link-text">{label}</span>

        <ArrowUpRight className="footer-link-arrow" size={13} />
      </NavLink>
    </motion.div>
  );
}

function FooterContactLink({ href, children, Icon }) {
  return (
    <motion.a
      href={href}
      className="footer-contact-link"
      initial="rest"
      whileHover="hover"
      whileTap="tap"
      variants={footerContactVariants}
    >
      <motion.span
        className="footer-contact-icon"
        variants={footerIconVariants}
        aria-hidden="true"
      >
        <Icon size={15} strokeWidth={1.8} />
      </motion.span>
      <span>{children}</span>
    </motion.a>
  );
}

export function Footer() {
  const { t } = useApp();

  return (
    <footer className="site-footer">
      <div className="container-xl">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <Logo />

            <p>{t.footerText}</p>

            <div className="footer-brand-caption">
              <span className="footer-caption-line" />
              <span>{t.tripsEyebrow}</span>
            </div>
          </div>

          {/* Company */}
          <div className="footer-col">
            <h4>{t.company}</h4>

            {footerLinks.company.map(({ path, key, icon: Icon }) => (
              <FooterNavLink
                key={path}
                path={path}
                label={t[key]}
                Icon={Icon}
              />
            ))}
          </div>

          {/* Explore */}
          <div className="footer-col">
            <h4>{t.explore}</h4>

            {footerLinks.explore.map(({ path, key, icon: Icon }) => (
              <FooterNavLink
                key={path}
                path={path}
                label={t[key]}
                Icon={Icon}
              />
            ))}
          </div>

          {/* Contact */}
          <div className="footer-contact">
            <h4>{t.connect}</h4>

            <FooterContactLink href="tel:+201000000000" Icon={Phone}>
              +20 100 000 0000
            </FooterContactLink>

            <FooterContactLink href="mailto:hello@preferred.eg" Icon={Mail}>
              hello@preferred.eg
            </FooterContactLink>

            <FooterContactLink
              href="https://www.google.com/maps/search/?api=1&query=Cairo%2C+Egypt"
              Icon={MapPin}
            >
              {t.cairo}
            </FooterContactLink>
          </div>

          {/* Map */}
          <motion.div
            className="footer-map"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: HEADER_EASE }}
          >
            <div className="footer-map-heading">
              <span className="footer-map-icon">
                <Compass size={16} />
              </span>
              <span>{t.cairo}</span>
            </div>

            <a
              className="footer-map-frame"
              href="https://www.google.com/maps/search/?api=1&query=Cairo%2C+Egypt"
              target="_blank"
              rel="noreferrer"
              aria-label="Open Cairo on Google Maps"
            >
              <iframe
                title="Cairo map"
                src="https://maps.google.com/maps?q=Cairo%2C%20Egypt&z=11&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              <span className="footer-map-overlay">
                <MapPinned size={18} />
                <span>{t.cairo}</span>
                <ArrowUpRight size={14} />
              </span>
            </a>
          </motion.div>
        </div>

        <div className="footer-bottom">
          <span>{t.rights}</span>
        </div>
      </div>
    </footer>
  );
}
