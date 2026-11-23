import React from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowUpRight } from './ArrowUpRight.jsx';

export function SectionHeader({ eyebrow, title, text, action }) {
  return <div className="section-header"><div><div className="eyebrow"><span className="eyebrow-dot" />{eyebrow}</div><h2>{title}</h2></div><div className="section-header-side"><p>{text}</p>{action && <NavLink className="text-link" to={action.to}>{action.label}<ArrowUpRight size={16} /></NavLink>}</div></div>;
}
