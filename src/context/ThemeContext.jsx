import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext({
  isDark: true,
  toggleTheme: () => {},
});

export function ThemeProvider({ children }) {
  // Initialize theme state with stored preference or default to dark
  const [isDark, setIsDark] = useState(() => {
    // Check if there's a stored theme preference
    const storedTheme = localStorage.getItem('theme');
    // If no stored preference, return true for dark mode
    if (storedTheme === null) return true;
    // Otherwise return the stored preference
    return storedTheme === 'dark';
  });

  // Update DOM and localStorage when theme changes
  useEffect(() => {
    const root = window.document.documentElement;
    
    // Apply theme class and store preference
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  // Toggle between light and dark modes
  const toggleTheme = () => {
    setIsDark(prev => !prev);
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Custom hook for accessing theme context
export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}