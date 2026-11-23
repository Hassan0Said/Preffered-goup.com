import React from 'react';
import {
  FaWhatsapp,
  FaFacebookMessenger,
  FaTiktok,
  FaPhone,
  FaEnvelope,
  FaInstagram,
  FaFacebookF,
} from 'react-icons/fa6';
import { Phone, Mail, MessageCircle, Globe2 } from 'lucide-react';

export function WhatsAppIcon({ size = 20, className = '' }) {
  return (
    <FaWhatsapp
      size={size}
      color="#25D366"
      className={`social-icon social-icon--whatsapp ${className}`.trim()}
      aria-hidden="true"
    />
  );
}

export function MessengerIcon({ size = 20, className = '' }) {
  return (
    <FaFacebookMessenger
      size={size}
      color="#0084FF"
      className={`social-icon social-icon--messenger ${className}`.trim()}
      aria-hidden="true"
    />
  );
}

export function TikTokIcon({ size = 19, className = '' }) {
  return (
    <FaTiktok
      size={size}
      className={`social-icon social-icon--tiktok ${className}`.trim()}
      aria-hidden="true"
    />
  );
}

export function PhoneIcon({ size = 18, className = '' }) {
  return (
    <FaPhone
      size={size}
      color="#10B981"
      className={`social-icon social-icon--phone ${className}`.trim()}
      aria-hidden="true"
    />
  );
}

export function MailIcon({ size = 18, className = '' }) {
  return (
    <FaEnvelope
      size={size}
      color="#EA4335"
      className={`social-icon social-icon--mail ${className}`.trim()}
      aria-hidden="true"
    />
  );
}

export function InstagramIcon({ size = 19, className = '' }) {
  return (
    <FaInstagram
      size={size}
      color="#E4405F"
      className={`social-icon social-icon--instagram ${className}`.trim()}
      aria-hidden="true"
    />
  );
}

export function FacebookIcon({ size = 19, className = '' }) {
  return (
    <FaFacebookF
      size={size}
      color="#1877F2"
      className={`social-icon social-icon--facebook ${className}`.trim()}
      aria-hidden="true"
    />
  );
}