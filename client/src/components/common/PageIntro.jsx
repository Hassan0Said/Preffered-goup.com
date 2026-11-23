
import React from 'react';

export function PageIntro({
  eyebrow,
  title,
  text,
  accent = 'coral',
  className = '',
  image = '',
}) {
  const isFleetHero = className.includes('fleet-page-intro');

  return (
    <section
      className={`page-intro page-intro--${accent} ${
        image ? 'page-intro--photo' : ''
      } ${className}`}
      style={image ? { '--page-image': `url(${image})` } : undefined}
    >
      {isFleetHero ? (
        <div className="container-xl page-intro-inner fleet-hero-inner">
          <h1>تحرّك بأناقة</h1>
        </div>
      ) : (
        <div className="container-xl page-intro-inner">
          <div className="eyebrow">
            <span className="eyebrow-dot" />
            {eyebrow}
          </div>

          <h1>{title}</h1>
          <p>{text}</p>
          <div className="intro-line" />
        </div>
      )}
    </section>
  );
}
