import { createContext, useState, useContext, ReactNode } from 'react';

// criei o type do contexto do tema
type ThemeContextType = {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
};

// criei o type do provider do tema
type ThemeProviderProps = {
  children: ReactNode;
};

// criei o contexto do tema
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// criei e exportei o provider do tema
export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children} 
    </ThemeContext.Provider>
  );
};

// criei e importei o custon hook do tema
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
