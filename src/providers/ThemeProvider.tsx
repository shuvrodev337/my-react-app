import { ReactNode, useState } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

type TThemeContextPropsType = {
  children: ReactNode;
};

const ThemeProvider = ({ children }: TThemeContextPropsType) => {
  const [dark, setDark] = useState(false);

  const values = {
    dark,
    setDark,
  };
  return (
    <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
