import { useEffect, useState } from "react"
import { ThemeColor, ThemeContext } from "../context/ThemeContext"
import { darkColors, lightColors } from "../theme/appTheme"
import { Appearance, AppState, useColorScheme } from "react-native"


interface Props {
    children: JSX.Element|React.ReactNode
}

export const ThemeProvider = ({
    children
}: Props) => {

    const colorScheme = useColorScheme();
    const [currentTheme, setCurrentTheme] = useState<ThemeColor>('light');

    const setTheme = ( theme: ThemeColor ) => {
        setCurrentTheme(theme);
    }

    useEffect(() => {
        if( colorScheme === 'dark' ){
            setCurrentTheme('dark');
        } else {
            setCurrentTheme('light');
        }
    }, [colorScheme]);


    useEffect(() => {
        const subscription = AppState.addEventListener('change', (stateStatus) => {
            const colorScheme = Appearance.getColorScheme();
            setCurrentTheme( colorScheme === 'dark' ? 'dark' : 'light' );
        });
        return () => {
            subscription.remove();
        }
    }, []);


    return <>
        <ThemeContext.Provider
            value={{
                currentTheme,
                colors: currentTheme === 'light' ? lightColors : darkColors,
                setTheme: setTheme
            }}
        >
            { children }
        </ThemeContext.Provider>
    </>
}
