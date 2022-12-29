import React, { useState, useContext, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { DarkModeContext } from './contexts/DarkModeContext';

export default function TodoTap() {
  const [tap, setTap] = useState('All');
  // 객체로 provider을 받아옴
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  // DarkMode toggle
  const updateDarkMode = (darkMode) => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    }
  };

  useEffect(() => {
    const isDark =
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches);
  });

  return (
    <div className='header'>
      <button className='darkModeToggle' onClick={toggleDarkMode}>
        {!darkMode && <FaMoon size={24} />}
        {darkMode && <FaSun size={24} />}
      </button>
      <div className='taps'>
        <input
          type='button'
          name='all'
          value={'All'}
          onClick={() => setTap('All')}
        />
        <input
          type='button'
          name='active'
          value={'Active'}
          onClick={() => setTap('Active')}
        />
        <input
          type='button'
          name='completed'
          value={'Completed'}
          onClick={() => setTap('Completed')}
        />
      </div>
    </div>
  );
}
