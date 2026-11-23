
import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Home, Sparkles } from 'lucide-react';
import { useApp } from '../contexts/AppContext.jsx';

import './NotFound.css';

export function NotFound() {
  const { t, lang } = useApp();
  const isArabic = lang === 'ar';

  return (
    <main className="not-found">
      {/* Animated background */}
      <div className="nf-background">
        <span className="nf-glow nf-glow-blue" />
        <span className="nf-glow nf-glow-orange" />
        <span className="nf-glow nf-glow-yellow" />

        <span className="nf-floating-number nf-number-one">404</span>
        <span className="nf-floating-number nf-number-two">?</span>
        <span className="nf-floating-number nf-number-three">404</span>

        <span className="nf-star nf-star-one">✦</span>
        <span className="nf-star nf-star-two">✧</span>
        <span className="nf-star nf-star-three">✦</span>
        <span className="nf-star nf-star-four">✧</span>
      </div>

      <div className="not-found-content">
        {/* Top label */}
        <motion.div
          className="nf-top-label"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <Sparkles size={15} />
          <span>PREFERRED · LOST PAGE DETECTED</span>
        </motion.div>

        {/* 404 visual */}
        <motion.div
          className="not-found-art"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <div className="nf-number-shadow">404</div>

          <motion.div
            className="nf-character-wrap"
            animate={{
              y: [0, -12, 0],
              rotate: [0, 2, -2, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <div className="nf-character-aura" />

            <svg
              className="nf-character"
              viewBox="0 0 260 270"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Sad lost cartoon character"
            >
              {/* Shadow */}
              <ellipse
                cx="130"
                cy="250"
                rx="67"
                ry="10"
                fill="currentColor"
                opacity=".12"
              />

              {/* Body */}
              <path
                d="M72 170 C65 205 76 238 105 244 L155 244 C184 238 195 205 188 170 Z"
                fill="var(--nf-character-body)"
                stroke="var(--nf-character-outline)"
                strokeWidth="5"
              />

              {/* Feet */}
              <ellipse cx="100" cy="241" rx="24" ry="10" fill="var(--nf-character-outline)" />
              <ellipse cx="160" cy="241" rx="24" ry="10" fill="var(--nf-character-outline)" />

              {/* Arms */}
              <path
                d="M75 181 C51 185 42 207 52 220"
                stroke="var(--nf-character-outline)"
                strokeWidth="13"
                strokeLinecap="round"
              />
              <path
                d="M185 181 C209 185 218 207 208 220"
                stroke="var(--nf-character-outline)"
                strokeWidth="13"
                strokeLinecap="round"
              />

              {/* Hands */}
              <circle cx="52" cy="220" r="9" fill="var(--nf-character-body)" stroke="var(--nf-character-outline)" strokeWidth="4" />
              <circle cx="208" cy="220" r="9" fill="var(--nf-character-body)" stroke="var(--nf-character-outline)" strokeWidth="4" />

              {/* Head */}
              <path
                d="M130 24 C81 24 53 58 53 111 C53 160 83 191 130 191 C177 191 207 160 207 111 C207 58 179 24 130 24Z"
                fill="var(--nf-character-face)"
                stroke="var(--nf-character-outline)"
                strokeWidth="5"
              />

              {/* Hair / top detail */}
              <path
                d="M87 37 C93 12 119 9 130 25 C145 5 173 17 175 39"
                fill="none"
                stroke="var(--nf-character-outline)"
                strokeWidth="9"
                strokeLinecap="round"
              />

              {/* Eyebrows */}
              <path
                d="M82 88 Q99 75 114 88"
                stroke="var(--nf-character-outline)"
                strokeWidth="6"
                strokeLinecap="round"
              />
              <path
                d="M146 88 Q162 75 178 88"
                stroke="var(--nf-character-outline)"
                strokeWidth="6"
                strokeLinecap="round"
              />

              {/* Eyes */}
              <g className="nf-eyes">
                <ellipse cx="99" cy="111" rx="10" ry="13" fill="#17213F" />
                <ellipse cx="161" cy="111" rx="10" ry="13" fill="#17213F" />
                <circle cx="102" cy="107" r="3.5" fill="#FFFFFF" />
                <circle cx="164" cy="107" r="3.5" fill="#FFFFFF" />
              </g>

              {/* Tears */}
              <path
                className="nf-tear nf-tear-left"
                d="M89 126 C89 126 80 140 80 147 C80 153 84 157 90 157 C96 157 100 153 100 147 C100 140 89 126 89 126Z"
                fill="var(--nf-royal-blue)"
              />
              <path
                className="nf-tear nf-tear-right"
                d="M171 126 C171 126 162 140 162 147 C162 153 166 157 172 157 C178 157 182 153 182 147 C182 140 171 126 171 126Z"
                fill="var(--nf-royal-blue)"
              />

              {/* Sad mouth */}
              <path
                d="M113 166 Q130 149 147 166"
                stroke="var(--nf-character-outline)"
                strokeWidth="6"
                strokeLinecap="round"
              />

              {/* Cheeks */}
              <ellipse cx="76" cy="139" rx="11" ry="6" fill="var(--nf-red)" opacity=".35" />
              <ellipse cx="184" cy="139" rx="11" ry="6" fill="var(--nf-red)" opacity=".35" />

              {/* Small question mark */}
              <g className="nf-question-mark">
                <circle cx="207" cy="43" r="21" fill="var(--nf-yellow)" />
                <text
                  x="207"
                  y="51"
                  textAnchor="middle"
                  fontSize="26"
                  fontWeight="900"
                  fill="var(--nf-navy)"
                >
                  ?
                </text>
              </g>
            </svg>

            <motion.div
              className="nf-speech-bubble"
              animate={{
                rotate: [2, -2, 2],
                y: [0, -4, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              {isArabic ? 'هي راحت فين؟!' : 'WHERE AM I?!'}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Text content */}
        <motion.div
          className="nf-message"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.7 }}
        >
          <div className="eyebrow">
            <span className="eyebrow-dot" />
            {t.lostRoute}
          </div>

          <h1>
            {isArabic ? (
              <>
                أوووبس! <span>إنت تايه؟</span>
              </>
            ) : (
              <>
                OOPS! <span>ARE YOU LOST?</span>
              </>
            )}
          </h1>

          <p className="nf-description">
            {isArabic
              ? 'حتى صاحبنا الصغير مش لاقي الصفحة دي! شكلها أخدت أجازة من غير ما تقولنا 😂'
              : "Even our little friend can't find this page! Looks like it went on vacation without telling us. 😂"}
          </p>

          <p className="nf-secondary-message">
            {isArabic
              ? 'متقلقش، هنرجعك للمكان الصح.'
              : "Don't worry, we'll get you back on track."}
          </p>

          <div className="nf-actions">
            <NavLink className="nf-home-button" to="/">
              <Home size={19} />
              <span>{t.backHome}</span>
              <ArrowLeft size={18} className="nf-button-arrow" />
            </NavLink>
          </div>

          <div className="nf-footer-note">
            <span className="nf-footer-line" />
            <span>
              {isArabic
                ? 'كل الطرق بتوصل للصفحة الرئيسية 😉'
                : 'ALL ROADS LEAD HOME'}
            </span>
            <span className="nf-footer-line" />
          </div>
        </motion.div>
      </div>
    </main>
  );
}
