import { createContext, useContext, useState } from "react";
import { GeistProvider, CssBaseline } from '@geist-ui/core';

const ThemeChangerContext = createContext<any>('dark');

export const useThemeChangerContext = () => useContext<{
    themeType: string;
    switchThemes: () => void;
}>(ThemeChangerContext);

export const ThemeChangerProvider = (props: { children: JSX.Element; }) => {
    const [themeType, setThemeType] = useState('dark');
    const switchThemes = () => {
        setThemeType(last => (last === 'dark' ? 'light' : 'dark'));
    };
    return (
        <GeistProvider themeType={themeType}>
            <CssBaseline />
            <ThemeChangerContext.Provider value={{ themeType, switchThemes }}>
                {props.children}
            </ThemeChangerContext.Provider>
        </GeistProvider>
    );
};