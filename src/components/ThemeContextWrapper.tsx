import { useState, useEffect } from "react";
import { ThemeContext, themes } from "./ThemeContext";

export default function ThemeContextWrapper(props: any) {
  const [theme, setTheme] = useState(themes.dark);

  function changeTheme(theme: any) {
    setTheme(theme);
  }

  useEffect(() => {
    switch (theme) {
      case themes.light:
        document.body.classList.add("main");
        break;
      case themes.dark:
      default:
        document.body.classList.remove("main");
        break;
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme: theme, changeTheme: changeTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}
