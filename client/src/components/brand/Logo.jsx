import React from 'react';
import { NavLink } from 'react-router-dom';

export function Logo({ compact = false }) {
  return (
    <NavLink
      to="/"
      className={`brand ${compact ? 'brand--compact' : ''}`}
      aria-label="Preferred home"
    >
      <span className="brand-image-wrapper">
        <img
          src="/assets/logo/logo.jpeg"
          alt="Preferred"
          className="brand-image"
        />
      </span>
      <span className="brand-caption">Preferred</span>
    </NavLink>
  );
}