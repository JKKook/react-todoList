import React, { useState, useContext } from 'react';
import { FaSun } from 'react-icons/fa';
import { DarkModeContext } from './contexts/DarkModeContext';

export default function TodoTap() {
  const [tap, setTap] = useState('All');
  // 객체로 provider을 받아옴
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  return (
    <div className='header'>
      <button className='darkModeToggle' onClick={() => toggleDarkMode()}>
        <FaSun size={24} />
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
