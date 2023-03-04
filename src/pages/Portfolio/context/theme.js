import {
  createContext, useContext, useState
} from "react";

const ThemeContext = createContext();

export function ThemeProvider ({ children }) {
  const [theme, setTheme] = useState('light');

  function changeTheme(newTheme){
    if(newTheme === theme) return null;
    const element = document.querySelector('.portfolio');
    element.classList.remove(theme)
    setTheme(newTheme);
  }

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext);
