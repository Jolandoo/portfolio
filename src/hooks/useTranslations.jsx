import { createContext, useContext, useEffect, useMemo, useState } from "react"
import { translations } from "../data/translations.js"

const LanguageContext = createContext(null)

const STORAGE_KEY = "portfolio.lang"

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    if (typeof window === "undefined") return "fr"
    const saved = window.localStorage.getItem(STORAGE_KEY)
    return saved === "en" || saved === "fr" ? saved : "fr"
  })

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, lang)
    document.documentElement.lang = lang
  }, [lang])

  const value = useMemo(
    () => ({
      lang,
      setLang,
      toggle: () => setLang((l) => (l === "fr" ? "en" : "fr")),
      t: translations[lang],
    }),
    [lang],
  )

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  )
}

export function useTranslations() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error("useTranslations must be used inside LanguageProvider")
  return ctx
}
