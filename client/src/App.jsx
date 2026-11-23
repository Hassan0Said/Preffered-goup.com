import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppProvider } from './contexts/AppContext.jsx';
import { PageShell } from './components/layout/PageShell.jsx';
import { Home } from './pages/Home.jsx';
import { About } from './pages/About.jsx';
import { Clients } from './pages/Clients.jsx';
import { Contact } from './pages/Contact.jsx';
import { Fleet } from './pages/Fleet.jsx';
import { NotFound } from './pages/NotFound.jsx';
import { Trips } from './pages/Trips.jsx';

export default function App() {
  return <AppProvider><BrowserRouter><PageShell><Routes><Route path="/" element={<Home />} /><Route path="/fleet" element={<Fleet />} /><Route path="/trips" element={<Trips />} /><Route path="/clients" element={<Clients />} /><Route path="/about" element={<About />} /><Route path="/contact" element={<Contact />} /><Route path="*" element={<NotFound />} /></Routes></PageShell></BrowserRouter></AppProvider>;
}
