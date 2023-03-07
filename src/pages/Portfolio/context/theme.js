import {
  createContext, useContext, useState, useEffect
} from "react";

const ThemeContext = createContext();

export function ThemeProvider ({ children }) {
  const getCurrentTheme = () => window.matchMedia("(prefers-color-scheme: dark)").matches ? 'dark' : 'light';
  const [theme, setTheme] = useState(getCurrentTheme());

  function changeTheme(newTheme){
    if(newTheme === theme) return null;
    const element = document.querySelector('.portfolio');
    element.classList.remove(theme)
    setTheme(newTheme);
  }

  const themeListener = (event) => {
    const newPreferColor = event.matches ? 'dark' : 'light';
    setTheme(newPreferColor);
  }

  useEffect(() => {
    const themePreference = window.matchMedia("(prefers-color-scheme: dark)");
    themePreference.addEventListener('change', themeListener)
    return () => themePreference.removeEventListener('change', themeListener);
  }, [])

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext);
