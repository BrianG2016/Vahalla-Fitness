export function invokeName(text, name) {
  if (!name) return text
  const has = new RegExp(`\\b${name}\\b`, 'i').test(text)
  return has ? text : `${name}, ${text}`
}