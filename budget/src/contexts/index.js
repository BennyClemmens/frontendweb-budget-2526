import { createContext } from 'react';

const defaultContextAsFallback = {
  darkmode: false, // TODO: import from config/.env cfr backend?
  toggleTheme: () => {
    console.log('toggleTheme not yet implemented');
  },
};

export const ThemeContext = createContext(defaultContextAsFallback);
