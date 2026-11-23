
import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import {
  Globe2,
  Menu,
  Moon,
  Sun,
  X,
  House,
  CarFront,
  MapPinned,
  Info,
  Phone,
  Users,
  Compass,
} from 'lucide-react';

import { navItems } from '../../lib/content.js';
import { useApp } from '../../contexts/AppContext.jsx';
import { useScrollThreshold } from '../../hooks/useScrollThreshold.js';
import { Logo } from '../brand/Logo.jsx';
import { ArrowUpRight } from '../common/ArrowUpRight.jsx';

const MotionNavLink = motion(NavLink);

const HEADER_EASE = [0.22, 1, 0.36, 1];

const iconMap = {
  '/': House,
  '/fleet': CarFront,
  '/trips': MapPinned,
  '/about': Info,
  '/contact': Phone,
  '/clients': Users,
};

const iconVariants = {
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

const linkVariants = {
  rest: {
    y: 0,
  },
  hover: {
    y: -2,
    transition: {
      duration: 0.25,
      ease: HEADER_EASE,
    },
  },
};

function NavigationLink({ path, label, mobile = false, index = 0 }) {
  const Icon = iconMap[path] || Compass;

  return (
    <motion.div
      className={mobile ? 'mobile-nav-item' : 'desktop-nav-item'}
      initial={mobile ? { opacity: 0, x: 12 } : false}
      animate={mobile ? { opacity: 1, x: 0 } : undefined}
      transition={{
        delay: mobile ? index * 0.045 : 0,
        duration: 0.25,
        ease: HEADER_EASE,
      }}
      whileHover="hover"
      whileTap="tap"
      variants={linkVariants}
    >
      <MotionNavLink
        to={path}
        className={({ isActive }) => (isActive ? 'active' : '')}
      >
        <motion.span
          className="nav-link-icon"
          variants={iconVariants}
          aria-hidden="true"
        >
          <Icon size={16} strokeWidth={1.8} />
        </motion.span>

        <span className="nav-link-text">{label}</span>

        {mobile && <ArrowUpRight />}
      </MotionNavLink>
    </motion.div>
  );
}

export function Header() {
  const { lang, setLang, theme, setTheme, t } = useApp();
  const scrolled = useScrollThreshold(24);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!open) return undefined;

    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  const hasHero = [
    '/',
    '/fleet',
    '/about',
    '/contact',
    '/trips',
    '/clients',
  ].includes(location.pathname);

  const isOverHero = hasHero && !scrolled && !open;
  const navDir = lang === 'ar' ? 'rtl' : 'ltr';

  const toggleLang = () => setLang(lang === 'en' ? 'ar' : 'en');
  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  const headerClasses = [
    'site-header',
    scrolled ? 'is-scrolled' : '',
    isOverHero ? 'is-over-hero' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <header className={headerClasses}>
      <div className="container-xl header-inner">
        <Logo />

        <nav
          className="desktop-nav"
          aria-label="Primary navigation"
          dir={navDir}
        >
          {navItems.map(([path, key], index) => (
            <NavigationLink
              key={path}
              path={path}
              label={t[key]}
              index={index}
            />
          ))}
        </nav>

        <div className="header-actions">
          <button
            type="button"
            className="icon-button lang-button"
            onClick={toggleLang}
            aria-label={`Switch to ${t.switchTo}`}
          >
            <Globe2 size={17} />
            <span>{t.switchTo}</span>
          </button>

          <button
            type="button"
            className="icon-button theme-button"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? t.light : t.dark}
          >
            {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
          </button>

          <button
            type="button"
            className="menu-button"
            onClick={() => setOpen((prev) => !prev)}
            aria-expanded={open}
            aria-label={open ? t.close : t.menu}
          >
            {open ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <>
            <motion.button
              type="button"
              className="mobile-menu-scrim"
              aria-label={t.close}
              onClick={() => setOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.22 }}
            />

            <motion.div
              className={`mobile-menu mobile-menu--${navDir}`}
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{
                duration: 0.24,
                ease: HEADER_EASE,
              }}
            >
              <div className="mobile-menu-inner">
                <nav aria-label="Mobile navigation" dir={navDir}>
                  {navItems.map(([path, key], index) => (
                    <NavigationLink
                      key={path}
                      path={path}
                      label={t[key]}
                      mobile
                      index={index}
                    />
                  ))}
                </nav>

                {/* Mobile Language and Theme Actions */}
                <div className="mobile-menu-actions" dir={navDir}>
                  <button
                    type="button"
                    className="icon-button lang-button"
                    onClick={toggleLang}
                    aria-label={`Switch to ${t.switchTo}`}
                  >
                    <Globe2 size={17} />
                    <span>{t.switchTo}</span>
                  </button>

                  <button
                    type="button"
                    className="icon-button theme-button"
                    onClick={toggleTheme}
                    aria-label={theme === 'dark' ? t.light : t.dark}
                  >
                    {theme === 'dark' ? (
                      <Sun size={17} />
                    ) : (
                      <Moon size={17} />
                    )}
                    <span>{theme === 'dark' ? t.light : t.dark}</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
