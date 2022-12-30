import React, { useContext } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { DarkModeContext } from './contexts/DarkModeContext';

export default function TodoTap({ lists, filters, filter, handleFilter }) {
  // 객체로 provider을 받아옴
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  // filtering 재정의

  return (
    <div className='header'>
      <button className='darkModeToggle' onClick={toggleDarkMode}>
        {!darkMode && <FaMoon size={24} />}
        {darkMode && <FaSun size={24} />}
      </button>
      <ul className='taps'>
        {filters.map((value, index) => (
          <li key={index}>
            <button onClick={() => handleFilter(value)}>{value}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
