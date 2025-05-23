import { FC, useMemo, useState } from 'react'
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext'

const defaultTheme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.lIGHT

const ThemeProvider: FC = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme)

  const defaultThemeProps = useMemo(() => ({ theme: theme, setTheme: setTheme }), [theme])

  return <ThemeContext.Provider value={defaultThemeProps}>{children}</ThemeContext.Provider>
}

export default ThemeProvider
