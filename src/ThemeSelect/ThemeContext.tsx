import { createContext, type ReactNode } from "react";

interface Theme {
    primaryColor: string;
    secondaryColor: string;
}

interface ThemeProviderProps {
    children: ReactNode;
}

export const ThemeContext = createContext<Theme>({
    primaryColor: "#1677ff",
    secondaryColor: "#ff4d4f",
});

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
    const theme: Theme = {
        primaryColor: "#1677ff",
        secondaryColor: "#ff4d4f",
    };

    return (
        <ThemeContext.Provider value={theme}>
            {children}
        </ThemeContext.Provider>
    );
};