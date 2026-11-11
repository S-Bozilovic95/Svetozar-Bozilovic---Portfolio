import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

export type Theme = "dark" | "light";

export const useTheme = () => {
  const [theme, setTheme] = useLocalStorage<Theme>("theme", "dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const handleToggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return { theme, handleToggleTheme };
};
