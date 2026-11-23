import React from 'react';
import { Compass } from 'lucide-react';

const heroImage = `${import.meta.env.BASE_URL}assets/cars/suv-premium.webp`;

export function HeroIllustration() {
  return <div className="hero-visual hero-visual-photo"><img className="hero-photo" src={heroImage} alt="Preferred luxury vehicle in Egypt" loading="eager" /><div className="hero-photo-overlay" /><div className="hero-stamp"><Compass size={17} /><span>EST. 2018<br /><b>EGYPT</b></span></div></div>;
}
