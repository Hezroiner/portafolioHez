import { createContext, useContext, useState } from 'react'

type Theme = 'light' | 'dark'
type Language = 'es' | 'en'

interface AppContextProps {
  theme: Theme
  language: Language
  toggleTheme: () => void
  toggleLanguage: () => void
}

const AppContext = createContext<AppContextProps | undefined>(undefined)

export const useAppContext = () => {
  const context = useContext(AppContext)
  if (!context) throw new Error('AppContext debe usarse dentro de AppProvider')
  return context
}

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme>('dark')
  const [language, setLanguage] = useState<Language>('es')

  const toggleTheme = () => setTheme(prev => (prev === 'dark' ? 'light' : 'dark'))
  const toggleLanguage = () => setLanguage(prev => (prev === 'es' ? 'en' : 'es'))

  return (
    <AppContext.Provider value={{ theme, language, toggleTheme, toggleLanguage }}>
      <div
        className={`transition-all duration-500 ${theme === 'dark' ? 'bg-dark text-white' : 'bg-light text-dark'}`}
        style={{ minHeight: '100vh' }}
      >

        {children}
      </div>
    </AppContext.Provider>
  )
}
