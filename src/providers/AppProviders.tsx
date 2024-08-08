import { ThemeProvider } from "./ThemeProvider";


interface AppProvidersProps {
    children: JSX.Element
}

export const AppProviders = ({
    children
}: AppProvidersProps) => {
    return <>
        <ThemeProvider>
            {children}
        </ThemeProvider>
    </>
}
