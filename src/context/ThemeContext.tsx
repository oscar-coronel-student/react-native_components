import { createContext } from "react";
import { ThemeColors } from "../theme/appTheme";


export type ThemeColor = 'light'|'dark';

interface ThemeContextProps {
    currentTheme: ThemeColor
    colors: ThemeColors

    setTheme: (theme: ThemeColor) => void
}


export const ThemeContext = createContext<ThemeContextProps>({} as ThemeContextProps);