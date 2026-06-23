import { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext(null)

function applyTheme(theme) {
  document.documentElement.classList.remove('light', 'dark')
  document.documentElement.classList.add(theme)
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    const saved = typeof window !== 'undefined'
      ? localStorage.getItem('theme') || 'dark'
      : 'dark'
    if (typeof window !== 'undefined') applyTheme(saved)
    return saved
  })

  useEffect(() => {
    applyTheme(theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isDark: theme === 'dark' }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider')
  }
  return context
}
