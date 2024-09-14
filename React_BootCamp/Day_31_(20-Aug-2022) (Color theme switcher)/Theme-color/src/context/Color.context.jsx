import React, { createContext, useState } from 'react'

export const ColorContext = createContext()

export const ColorProvider =({children}) => {
    const [themeColor, setThemeColor] = useState('dark')

    const toggleTheme = () => {
      setThemeColor((color) => color == 'light' ? 'dark':'light')
    }

const value = {
    themeColor,
    toggleTheme,
}


return (
    <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
)

}