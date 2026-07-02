export function saveRecord<TRecord extends Record<string, unknown>>(
  key: string,
  record: TRecord,
) {
  if (typeof window === "undefined") {
    return
  }

  const existing = window.localStorage.getItem(key)
  const records = existing ? (JSON.parse(existing) as TRecord[]) : []

  window.localStorage.setItem(
    key,
    JSON.stringify([
      ...records,
      {
        ...record,
        id: crypto.randomUUID(),
        createdAt: new Date().toISOString(),
      },
    ]),
  )
}

export function readPreference(key: string) {
  if (typeof window === "undefined") {
    return null
  }

  return window.localStorage.getItem(key)
}

export function savePreference(key: string, value: string) {
  if (typeof window === "undefined") {
    return
  }

  window.localStorage.setItem(key, value)
}
