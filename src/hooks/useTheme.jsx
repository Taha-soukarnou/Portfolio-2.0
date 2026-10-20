import { useEffect, useState } from 'react'

function useTheme() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem('theme') ?? 'dark'
  )

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggle = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))

  return { theme, toggle }
}

export default useTheme