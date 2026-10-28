import { useState, useEffect } from "react";
import { NavigatorNav, NavigatorLink } from "./Navigation.style";

export function Navigation() {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  const [showFloating, setShowFloating] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.body.classList.add("dark-theme");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-theme");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  // Показываем хедер, когда мышка у самого верха экрана
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (e.clientY <= 40) {
        setShowFloating(true);
      } else if (e.clientY > 90) { 
        // Прячем, если мышка ушла сильно ниже всплывшего хедера
        setShowFloating(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <NavigatorNav 
      $showFloating={showFloating}
      onMouseLeave={() => setShowFloating(false)} // Дополнительно прячем, если ушли с самого хедера
    >
      <NavigatorLink to="/">Home</NavigatorLink>
      <NavigatorLink to="/movie">Movies</NavigatorLink>

      <div>
        <label className="theme-switch">
          <input 
            type="checkbox" 
            checked={isDark} 
            onChange={() => setIsDark(!isDark)} 
          />
          <span className="slider"></span>
        </label>
      </div>
    </NavigatorNav>
  );
}