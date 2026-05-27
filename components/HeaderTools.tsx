'use client';

import { useEffect, useState } from 'react';

const ACCENTS = ['cyan', 'purple', 'pink', 'green', 'amber'] as const;
type Accent = (typeof ACCENTS)[number];

const DAYS = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
const MONTHS = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

function fmtDate(d: Date) {
  return `${DAYS[d.getDay()]} · ${String(d.getDate()).padStart(2, '0')} ${MONTHS[d.getMonth()]} ${d.getFullYear()}`;
}

export function HeaderTools() {
  const [theme, setTheme] = useState<'night' | 'day'>('night');
  const [accent, setAccent] = useState<Accent>('cyan');
  const [dateStr, setDateStr] = useState('');

  useEffect(() => {
    const t = (localStorage.getItem('bt:theme') as 'night' | 'day') || 'night';
    const a = (localStorage.getItem('bt:accent') as Accent) || 'cyan';
    setTheme(t);
    setAccent(a);
    setDateStr(fmtDate(new Date()));
  }, []);

  function toggleTheme() {
    const next = theme === 'day' ? 'night' : 'day';
    setTheme(next);
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('bt:theme', next);
  }

  function cycleAccent() {
    const next = ACCENTS[(ACCENTS.indexOf(accent) + 1) % ACCENTS.length];
    setAccent(next);
    document.documentElement.setAttribute('data-accent', next);
    localStorage.setItem('bt:accent', next);
  }

  return (
    <>
      {dateStr && <span className="header-date">{dateStr}</span>}
      <div className="header-tools">
        <button
          className="icon-btn"
          onClick={cycleAccent}
          title="Change accent color"
          aria-label="Accent color"
          style={{ color: 'var(--accent)', borderColor: 'var(--accent)' }}
        >
          ●
        </button>
        <button
          className="icon-btn"
          onClick={toggleTheme}
          title="Light / Dark"
          aria-label="Toggle theme"
        >
          {theme === 'day' ? '☀' : '☾'}
        </button>
      </div>
    </>
  );
}
