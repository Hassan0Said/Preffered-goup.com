
import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  AlertCircle,
  CheckCircle2,
  ChevronDown,
  Mail,
  MapPin,
  Phone,
  Send,
  ShieldCheck,
  UserRound,
} from 'lucide-react';

import { useApp } from '../contexts/AppContext.jsx';
import { PageIntro } from '../components/common/PageIntro.jsx';

const fields = ['name', 'email', 'phone', 'journeyType', 'message'];

const initialForm = {
  name: '',
  email: '',
  phone: '',
  journeyType: '',
  message: '',
};

function toEnglishDigits(value) {
  return value
    .replace(/[\u0660-\u0669]/g, digit =>
      String(digit.charCodeAt(0) - 0x0660)
    )
    .replace(/[\u06f0-\u06f9]/g, digit =>
      String(digit.charCodeAt(0) - 0x06f0)
    );
}

const ease = [0.22, 1, 0.36, 1];

const contentVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease },
  },
};

export function Contact() {
  const { t, lang } = useApp();

const contactHero = '/assets/contact/contact-hero-section.png';
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [successOpen, setSuccessOpen] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const sendButtonRef = useRef(null);
  const editButtonRef = useRef(null);
  const successButtonRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    if (!confirmOpen) return undefined;

    const frame = window.requestAnimationFrame(() => {
      sendButtonRef.current?.focus();
    });

    return () => window.cancelAnimationFrame(frame);
  }, [confirmOpen]);

  useEffect(() => {
    if (!successOpen) return undefined;

    const frame = window.requestAnimationFrame(() => {
      successButtonRef.current?.focus();
    });

    return () => window.cancelAnimationFrame(frame);
  }, [successOpen]);

  const validateField = (field, value) => {
    const clean = value.trim();

    if (field === 'name') {
      if (!clean) return t.nameRequired;
      if (Array.from(clean).length < 3) return t.nameMin;
    }

    if (field === 'email') {
      if (!clean) return t.emailRequired;
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/u.test(clean)) {
        return t.emailInvalid;
      }
    }

    if (field === 'phone') {
      if (!clean) return t.phoneRequired;
      if (!/^\d{11}$/.test(clean)) return t.phoneLength;
    }

    if (field === 'journeyType' && !clean) {
      return t.journeyRequired;
    }

    if (field === 'message') {
      if (!clean) return t.messageRequired;
      if (Array.from(clean).length < 10) return t.messageMin;
    }

    return '';
  };

  const update = field => event => {
    const value =
      field === 'phone'
        ? toEnglishDigits(event.target.value).replace(/[^0-9]/g, '')
        : event.target.value;

    setForm(previous => ({ ...previous, [field]: value }));
    setSubmitError('');

    if (touched[field]) {
      setErrors(previous => ({
        ...previous,
        [field]: validateField(field, value),
      }));
    }
  };

  const blur = field => () => {
    setTouched(previous => ({ ...previous, [field]: true }));
    setErrors(previous => ({
      ...previous,
      [field]: validateField(field, form[field]),
    }));
  };

  const submit = event => {
    event.preventDefault();

    const nextErrors = Object.fromEntries(
      fields.map(field => [field, validateField(field, form[field])])
    );

    setErrors(nextErrors);
    setTouched(Object.fromEntries(fields.map(field => [field, true])));

    const firstInvalid = fields.find(field => nextErrors[field]);

    if (firstInvalid) {
      setSubmitError(t.requiredFields);
      document.getElementById(`contact-${firstInvalid}`)?.focus();
      return;
    }

    setSubmitError('');
    setConfirmOpen(true);
  };

  const confirmSend = () => {
    setConfirmOpen(false);
    setForm(initialForm);
    setErrors({});
    setTouched({});
    setSubmitError('');
    setSuccessOpen(true);
  };

  const closeSuccess = () => {
    setSuccessOpen(false);
    formRef.current?.querySelector('input')?.focus();
  };

  const onDialogKeyDown = event => {
    if (event.key !== 'Tab') return;

    const first = sendButtonRef.current;
    const last = editButtonRef.current;

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last?.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first?.focus();
    }
  };

  const fieldError = field =>
    errors[field] ? (
      <motion.span
        className="field-error"
        id={`contact-${field}-error`}
        role="alert"
        initial={{ opacity: 0, y: -5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
      >
        <AlertCircle size={15} />
        {errors[field]}
      </motion.span>
    ) : null;

  const journeyName =
    form.journeyType === 'trips'
      ? t.journeyOptions[1]
      : form.journeyType === 'corporate'
        ? t.journeyOptions[2]
        : t.journeyOptions[0];

  return (
    <>
      <PageIntro
        eyebrow={t.contactEyebrow}
        title={t.contactTitle}
        text={t.contactText}
        accent="teal"
        className="contact-page-intro"
        image={contactHero}
      />

      <section className="section section-paper contact-section">
        <div className="container-xl contact-grid">

          <motion.aside
            className="contact-aside"
            variants={contentVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <p className="contact-aside-description">
              {t.connectText}
            </p>

            <div className="contact-list">
              <a href="tel:+201211112423">
                <span className="contact-list-icon">
                  <Phone size={19} />
                </span>
                <span dir='ltr'>+20 121 111 2423</span>
              </a>

              <a href="mailto:hello@preferred.eg">
                <span className="contact-list-icon">
                  <Mail size={19} />
                </span>
                <span>hello@preferred.eg</span>
              </a>

<a
  href="https://www.google.com/maps/search/?api=1&query=30.07561628235549,30.89614398015741"
  target="_blank"
  rel="noopener noreferrer"
>
  <span className="contact-list-icon">
    <MapPin size={19} />
  </span>
  <span>{t.cairo}</span>
</a>

<a
  href="https://maps.app.goo.gl/q1tLbQ28bJ2UBaNDA"
  target="_blank"
  rel="noopener noreferrer"
>
  <span className="contact-list-icon">
    <MapPin size={19} />
  </span>
  <span>{t.coast}</span>
</a>
            </div>
          </motion.aside>

          <motion.form
            ref={formRef}
            className="contact-form"
            onSubmit={submit}
            noValidate
            variants={contentVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            transition={{ delay: 0.12 }}
          >
            <div className="contact-form-heading">
              <span>
                {lang === 'ar' ? 'ابدأ رحلتك معنا' : 'LET’S GET STARTED'}
              </span>
              <h2>
                {lang === 'ar' ? 'أرسل لنا تفاصيل طلبك' : 'Tell us what you need'}
              </h2>
              <p>
                {lang === 'ar'
                  ? 'املأ البيانات التالية وسنتواصل معك لمساعدتك.'
                  : 'Fill in the details below and our team will get back to you.'}
              </p>
            </div>

            <div className="form-row">
              <div className={`field-group ${errors.name ? 'has-error' : ''}`}>
                <label htmlFor="contact-name">
                  <UserRound size={17} />
                  <span>{t.name}</span>
                </label>

                <div className="input-control">
                  <input
                    id="contact-name"
                    name="name"
                    autoComplete="name"
                    value={form.name}
                    onChange={update('name')}
                    onBlur={blur('name')}
                    minLength={3}
                    required
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={
                      errors.name ? 'contact-name-error' : undefined
                    }
                    placeholder={t.namePlaceholder}
                  />
                </div>

                {fieldError('name')}
              </div>

              <div className={`field-group ${errors.email ? 'has-error' : ''}`}>
                <label htmlFor="contact-email">
                  <Mail size={17} />
                  <span>{t.email}</span>
                </label>

                <div className="input-control">
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={form.email}
                    onChange={update('email')}
                    onBlur={blur('email')}
                    required
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={
                      errors.email ? 'contact-email-error' : undefined
                    }
                    placeholder={t.emailPlaceholder}
                  />
                </div>

                {fieldError('email')}
              </div>
            </div>

            <div className="form-row">
              <div className={`field-group ${errors.phone ? 'has-error' : ''}`}>
                <label htmlFor="contact-phone">
                  <Phone size={17} />
                  <span>{t.phone}</span>
                </label>

                <div className="input-control">
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    inputMode="numeric"
                    autoComplete="tel"
                    value={form.phone}
                    onChange={update('phone')}
                    onBlur={blur('phone')}
                    minLength={11}
                    maxLength={11}
                    pattern="[0-9]{11}"
                    required
                    aria-invalid={Boolean(errors.phone)}
                    aria-describedby={
                      errors.phone ? 'contact-phone-error' : undefined
                    }
                    placeholder={t.phonePlaceholder}
                  />
                </div>

                {fieldError('phone')}
              </div>

              <div
                className={`field-group ${
                  errors.journeyType ? 'has-error' : ''
                }`}
              >
                <label htmlFor="contact-journeyType">
                  <span>{t.journeyType}</span>
                </label>

                <div className="select-control">
                  <select
                    id="contact-journeyType"
                    name="journeyType"
                    value={form.journeyType}
                    onChange={update('journeyType')}
                    onBlur={blur('journeyType')}
                    required
                    aria-invalid={Boolean(errors.journeyType)}
                    aria-describedby={
                      errors.journeyType
                        ? 'contact-journeyType-error'
                        : undefined
                    }
                  >
                    <option value="" disabled>
                      {t.journeyPlaceholder}
                    </option>
                    <option value="fleet">{t.journeyOptions[0]}</option>
                    <option value="trips">{t.journeyOptions[1]}</option>
                    <option value="corporate">{t.journeyOptions[2]}</option>
                  </select>

                  <ChevronDown size={18} />
                </div>

                {fieldError('journeyType')}
              </div>
            </div>

            <div
              className={`field-group message-field ${
                errors.message ? 'has-error' : ''
              }`}
            >
              <label htmlFor="contact-message">
                <span>{t.message}</span>
              </label>

              <textarea
                id="contact-message"
                name="message"
                rows="5"
                value={form.message}
                onChange={update('message')}
                onBlur={blur('message')}
                minLength={10}
                required
                aria-invalid={Boolean(errors.message)}
                aria-describedby={
                  errors.message ? 'contact-message-error' : undefined
                }
                placeholder={t.messagePlaceholder}
              />

              {fieldError('message')}
            </div>

            {submitError && (
              <motion.div
                className="form-status form-status--error"
                role="alert"
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <AlertCircle size={20} />
                <span>{submitError}</span>
              </motion.div>
            )}

            <div className="form-footer">
              <button type="submit" className="button button-primary">
                {t.send}
                <Send size={17} />
              </button>

              <span className="form-footer-note">
                {lang === 'ar'
                  ? 'يرجى التأكد من صحة بيانات التواصل.'
                  : 'Please make sure your contact details are correct.'}
              </span>
            </div>
          </motion.form>
        </div>
      </section>

      {/* Confirmation modal */}
      <AnimatePresence>
        {confirmOpen && (
          <motion.div
            className="confirm-modal-backdrop"
            role="presentation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={event => event.stopPropagation()}
          >
            <motion.section
              className="confirm-modal"
              role="dialog"
              aria-modal="true"
              aria-labelledby="confirm-send-title"
              aria-describedby="confirm-send-description"
              onClick={event => event.stopPropagation()}
              onKeyDown={onDialogKeyDown}
              initial={{ opacity: 0, y: 28, scale: 0.94 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 15, scale: 0.97 }}
              transition={{
                type: 'spring',
                stiffness: 280,
                damping: 25,
              }}
            >
              <div className="confirm-modal-icon">
                <ShieldCheck size={28} />
              </div>

              <p className="confirm-modal-eyebrow">
                {t.confirmEyebrow}
              </p>

              <h2 id="confirm-send-title">
                {t.confirmTitle}
              </h2>

              <p
                id="confirm-send-description"
                className="confirm-modal-copy"
              >
                {t.confirmBody}
              </p>

              <div className="confirm-summary">
                <span>{t.name}</span>
                <strong>{form.name}</strong>

                <span>{t.email}</span>
                <strong>{form.email}</strong>

                <span>{t.journeyType}</span>
                <strong>{journeyName}</strong>
              </div>

              <div className="confirm-modal-actions">
                <button
                  ref={sendButtonRef}
                  type="button"
                  className="button button-primary"
                  onClick={confirmSend}
                >
                  {t.confirmSend}
                  <Send size={17} />
                </button>

                <button
                  ref={editButtonRef}
                  type="button"
                  className="button button-edit"
                  onClick={() => setConfirmOpen(false)}
                >
                  {t.editData}
                </button>
              </div>
            </motion.section>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Success modal */}
      <AnimatePresence>
        {successOpen && (
          <motion.div
            className="confirm-modal-backdrop success-modal-backdrop"
            role="presentation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={event => event.stopPropagation()}
          >
            <motion.section
              className="confirm-modal success-modal"
              role="dialog"
              aria-modal="true"
              aria-labelledby="success-modal-title"
              onClick={event => event.stopPropagation()}
              initial={{ opacity: 0, y: 28, scale: 0.92 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 15, scale: 0.97 }}
              transition={{
                type: 'spring',
                stiffness: 260,
                damping: 23,
              }}
            >
              <motion.div
                className="success-modal-icon"
                initial={{ scale: 0, rotate: -25 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{
                  type: 'spring',
                  stiffness: 240,
                  damping: 12,
                  delay: 0.12,
                }}
              >
                <CheckCircle2 size={48} strokeWidth={2.2} />
              </motion.div>

              <p className="confirm-modal-eyebrow">
                {lang === 'ar' ? 'اكتملت العملية' : 'SUCCESS'}
              </p>

              <h2 id="success-modal-title">
                {lang === 'ar'
                  ? 'تم إرسال طلبك بنجاح'
                  : 'Your request has been sent successfully'}
              </h2>

              <p className="confirm-modal-copy">
                {lang === 'ar'
                  ? 'شكرًا لثقتك بنا. نسعد بتواصلك، وسنعمل على مساعدتك في أقرب وقت.'
                  : 'Thank you for contacting us. We look forward to helping you.'}
              </p>

              <button
                ref={successButtonRef}
                type="button"
                className="button button-primary success-modal-button"
                onClick={closeSuccess}
              >
                {lang === 'ar' ? 'تمام' : 'Done'}
                <CheckCircle2 size={18} />
              </button>
            </motion.section>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
