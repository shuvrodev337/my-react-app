import { createContext, Dispatch } from "react";

export type TThemeContext = {
  dark: boolean;
  setDark: Dispatch<React.SetStateAction<boolean>>;
};

export const ThemeContext = createContext<TThemeContext | undefined>(undefined);
