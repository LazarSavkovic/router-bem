import React, { useContext, useState } from 'react'

const ThemeContext = React.createContext()
const ToggleThemeContext = React.createContext()

export default function ThemeProvider({ children }) {
    const [darkTheme, setDarkTheme] = useState(false)

    function toggleTheme() {
        setDarkTheme(!darkTheme)
    }

    return (
        <ThemeContext.Provider value={darkTheme} >
            <ToggleThemeContext.Provider value={toggleTheme} >
                {children}
            </ToggleThemeContext.Provider>
        </ThemeContext.Provider>
    )

}

export function useThemeContext() {
    return useContext(ThemeContext)
}
export function useToggleThemeContext() {
    return useContext(ToggleThemeContext)
} 