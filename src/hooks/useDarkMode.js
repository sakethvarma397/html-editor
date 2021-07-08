import { useEffect, useState } from "react";

const useDarkMode = () => {
  const [theme, setTheme] = useState(() => {
    try {
      let initialTheme = window.localStorage.getItem("theme");
      return initialTheme ? initialTheme : "light";
    } catch {
      return "light";
    }
  });

  useEffect(() => {
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  return [theme, setTheme];
};

export default useDarkMode;
