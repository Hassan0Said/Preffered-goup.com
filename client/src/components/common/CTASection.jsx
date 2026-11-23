import React from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowUpRight } from './ArrowUpRight.jsx';
import { useApp } from '../../contexts/AppContext.jsx';

export function CTASection() { const { t } = useApp(); return <section className="cta-section"><div className="container-xl cta-inner"><div><div className="eyebrow"><span className="eyebrow-dot" />{t.contactEyebrow}</div><h2>{t.contactTitle}</h2></div><NavLink className="button button-light" to="/contact">{t.contact}<ArrowUpRight size={18} /></NavLink></div></section>; }
