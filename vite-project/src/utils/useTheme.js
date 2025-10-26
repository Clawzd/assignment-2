// src/utils/useTheme.js
import { useEffect, useState } from "react";

export function useTheme() {
  const [theme, setTheme] = useState(
    () => document.body.getAttribute("data-theme") || "dark"
  );

  useEffect(() => {
    const handler = (e) => setTheme(e.detail);
    window.addEventListener("app-theme-change", handler);
    
    setTheme(document.body.getAttribute("data-theme") || "dark");
    return () => window.removeEventListener("app-theme-change", handler);
  }, []);

  return { theme, isDark: theme === "dark" };
}
