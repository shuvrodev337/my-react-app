import { createContext, ReactNode, useContext } from "react";

type TMenuContext = { theme: string };
type TMenuListPropsType = { children: ReactNode };

const ThemeContext = createContext<TMenuContext | undefined>(undefined);

export const MenuList = ({ children }: TMenuListPropsType) => {
  const values = { theme: "dark" };
  return (
    <ThemeContext.Provider value={values}>
      <ul>{children}</ul>
    </ThemeContext.Provider>
  );
};

export const MenuItem = () => {
  const { theme } = useContext(ThemeContext) as TMenuContext;
  // console.log(theme);
  return <li>{theme}</li>;
};
