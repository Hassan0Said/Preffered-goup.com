import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { useScrollThreshold } from '../../hooks/useScrollThreshold.js';

export function BackToTop() { const visible = useScrollThreshold(440); return <AnimatePresence>{visible && <motion.button className="floating-button back-top" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 12 }} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Back to top"><ArrowUp /></motion.button>}</AnimatePresence>; }
