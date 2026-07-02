import { useEffect, useState } from "react"

import { currencies, languages } from "@/data/site"
import { readPreference, savePreference } from "@/utils"

export function PreferenceSelectors() {
  const [language, setLanguage] = useState<(typeof languages)[number]>("English")
  const [currency, setCurrency] = useState<(typeof currencies)[number]>("USD")

  useEffect(() => {
    const savedLanguage = readPreference("nexora_language")
    const savedCurrency = readPreference("nexora_currency")

    if (languages.includes(savedLanguage as (typeof languages)[number])) {
      setLanguage(savedLanguage as (typeof languages)[number])
    }

    if (currencies.includes(savedCurrency as (typeof currencies)[number])) {
      setCurrency(savedCurrency as (typeof currencies)[number])
    }
  }, [])

  function updateLanguage(value: (typeof languages)[number]) {
    setLanguage(value)
    savePreference("nexora_language", value)
  }

  function updateCurrency(value: (typeof currencies)[number]) {
    setCurrency(value)
    savePreference("nexora_currency", value)
  }

  return (
    <div className="flex items-center gap-2">
      <select
        aria-label="Select language"
        className="h-9 rounded-lg border border-border bg-navy-900 px-2 text-xs text-foreground"
        onChange={(event) => updateLanguage(event.target.value as (typeof languages)[number])}
        value={language}
      >
        {languages.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
      <select
        aria-label="Select currency"
        className="h-9 rounded-lg border border-border bg-navy-900 px-2 text-xs text-foreground"
        onChange={(event) => updateCurrency(event.target.value as (typeof currencies)[number])}
        value={currency}
      >
        {currencies.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>
  )
}
