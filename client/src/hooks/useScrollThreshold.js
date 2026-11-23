import { useEffect, useState } from 'react';

export function useScrollThreshold(threshold) {
  const [passed, setPassed] = useState(() => typeof window !== 'undefined' && window.scrollY > threshold);
  useEffect(() => {
    const update = () => setPassed(window.scrollY > threshold);
    window.addEventListener('scroll', update, { passive: true });
    update();
    return () => window.removeEventListener('scroll', update);
  }, [threshold]);
  return passed;
}
