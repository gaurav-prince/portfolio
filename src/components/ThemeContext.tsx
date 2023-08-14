import { createContext } from "react";

export const themes = {
  dark: "dark",
  light: "main",
};

export const ThemeContext = createContext({
  theme: themes.dark,
  changeTheme: (_theme: any) => {},
});
