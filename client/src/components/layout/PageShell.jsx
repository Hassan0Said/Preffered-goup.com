import React from 'react';
import { useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Header } from './Header.jsx';
import { Footer } from './Footer.jsx';
import { FloatingContact } from '../common/FloatingContact.jsx';
import { BackToTop } from '../common/BackToTop.jsx';

export function PageShell({ children }) {
  const { pathname } = useLocation();
  return (
    <>
      <Header />
      <main>
        <AnimatePresence mode="wait">
          <motion.div key={pathname} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: .35 }}>
            {children}
          </motion.div>
        </AnimatePresence>
      </main>
      <FloatingContact />
      <BackToTop />
      <Footer />
    </>
  );
}
