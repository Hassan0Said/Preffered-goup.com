import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, MessageCircle, X } from 'lucide-react';
import { FaWhatsapp, FaFacebookF, FaInstagram } from 'react-icons/fa6';
import { useApp } from '../../contexts/AppContext.jsx';
import { TikTokIcon, MessengerIcon } from './SocialIcons.jsx';

export function FloatingContact() {
  const { t } = useApp();
  const [open, setOpen] = useState(false);

  const items = [
    {
      icon: <FaWhatsapp size={20} color="#25D366" aria-hidden="true" />,
      label: t.whatsapp,
      href: 'https://wa.me/201211112423',
      className: 'whatsapp',
    },
    {
      icon: <FaFacebookF size={18} color="#1877F2" aria-hidden="true" />,
      label: t.facebook || 'Facebook',
      href: 'https://www.facebook.com/share/19yRLB6tAF/?mibextid=wwXIfr',
      className: 'facebook',
    },
    {
      icon: <FaInstagram size={20} color="#E4405F" aria-hidden="true" />,
      label: t.instagram,
      href: 'https://www.instagram.com/preferred_group?hvrq=MTAyMnRyZzZ3ZWpkdQ==',
      className: 'instagram',
    },
    {
      icon: <TikTokIcon size={19} />,
      label: t.tiktok,
      href: 'https://www.tiktok.com/@preferred.group?_r=1&_t=ZS-9BZM5yiBmo4',
      className: 'tiktok',
    },
    {
      icon: <Mail size={19} color="#EA4335" aria-hidden="true" />,
      label: t.gmail,
      href: 'mailto:hello@preferred.eg',
      className: 'gmail',
    },
    {
      icon: <MapPin size={19} color="#EA4335" aria-hidden="true" />,
      label: t.location,
      href: 'https://www.google.com/maps/search/?api=1&query=30.07561628235549,30.89614398015741',
      className: 'location',
    },
  ];

  return (
    <div className={`floating-contact ${open ? 'is-open' : ''}`}>
      <div className="contact-bubbles">
        {items.map((item, index) => (
          <motion.a
            key={`${item.className}-${index}`}
            href={item.href}
            className={`contact-bubble ${item.className}`}
            initial={{ opacity: 0, scale: 0.6, y: 12 }}
            animate={{
              opacity: open ? 1 : 0,
              scale: open ? 1 : 0.6,
              y: open ? 0 : 12,
            }}
            transition={{ delay: open ? index * 0.045 : 0 }}
            aria-label={item.label}
          >
            {item.icon}
            <span>{item.label}</span>
          </motion.a>
        ))}
      </div>

      <button
        type="button"
        className="floating-button contact-launcher"
        onClick={() => setOpen(!open)}
        aria-label={t.connect}
      >
        {open ? <X /> : <MessageCircle />}
        <span>{t.connect}</span>
      </button>
    </div>
  );
}