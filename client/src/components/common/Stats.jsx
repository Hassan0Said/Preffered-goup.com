import React, { useEffect, useState } from 'react';
import { useInView } from 'framer-motion';
import { useApp } from '../../contexts/AppContext.jsx';

export function Stats() { const { t } = useApp(); const stats = [['27', t.stats[0]], ['500+', t.stats[1]], ['12', t.stats[2]], ['8', t.stats[3]]]; return <div className="stats-grid">{stats.map(([number, label]) => <Stat key={label} number={number} label={label} />)}</div>; }

export function Stat({ number, label }) { const ref = React.useRef(null); const inView = useInView(ref, { once: true }); const [shown, setShown] = useState('0'); useEffect(() => { if (!inView) return; const numeric = parseInt(number, 10); if (Number.isNaN(numeric)) { setShown(number); return; } let current = 0; const id = setInterval(() => { current += Math.ceil(numeric / 18); if (current >= numeric) { current = numeric; clearInterval(id); } setShown(`${current}${number.includes('+') ? '+' : ''}`); }, 44); return () => clearInterval(id); }, [inView, number]); return <div className="stat" ref={ref}><strong>{shown}</strong><span>{label}</span></div>; }
