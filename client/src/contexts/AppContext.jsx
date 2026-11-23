import React, { useEffect, useState } from 'react';
import { copy } from '../i18n/config.js';

export function useApp() {
  return React.useContext(AppContext);
}
const AppContext = React.createContext(null);

export function AppProvider({ children }) {
  const [lang, setLang] = useState(() => localStorage.getItem('preferred-lang') || 'en');
  const [theme, setTheme] = useState(() => localStorage.getItem('preferred-theme') || 'dark');
  useEffect(() => {
    localStorage.setItem('preferred-lang', lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [lang]);
  useEffect(() => {
    localStorage.setItem('preferred-theme', theme);
    document.documentElement.dataset.theme = theme;
  }, [theme]);
  const t = copy[lang];
  return <AppContext.Provider value={{ lang, setLang, theme, setTheme, t }}>{children}</AppContext.Provider>;
}
