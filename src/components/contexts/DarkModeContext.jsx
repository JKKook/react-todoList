import React, { createContext, useState, useContext, useEffect } from 'react';

export const DarkModeContext = createContext();

export function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    updateDarkMode(!darkMode);
  };

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
    toggleDarkMode(isDark);
  }, []);

  return (
    // 자식 컴포넌트들을 프로바이더로 감싸고, 자식 컴포넌트에 전달하고 싶은 데이터가 있다면
    // value에 제공하면 된다
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}
export const useDarkMode = () => useContext(DarkModeContext);
