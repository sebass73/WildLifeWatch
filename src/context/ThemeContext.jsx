import { createContext, useState } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const initialTheme = "success";
  const [theme, setTheme] = useState(initialTheme);

  const handleTheme = () => {
    theme === "success" ? setTheme("info ") : setTheme(initialTheme);
  };

  const data = {
    theme,
    handleTheme,
  };

  return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>;
};

export { ThemeProvider };
export default ThemeContext;
