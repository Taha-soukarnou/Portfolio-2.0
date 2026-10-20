import { Sun, Moon } from 'lucide-react'
import useTheme from '../../hooks/useTheme'

function ThemeToggle() {
  const { theme, toggle } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      role="switch"
      aria-checked={isDark}
      aria-label="Toggle dark mode"
      onClick={toggle}
      className="relative h-8 w-16 shrink-0 rounded-full border border-line bg-card transition-colors duration-300 hover:border-accent"
    >
      <Sun size={14} className="absolute left-2 top-1/2 -translate-y-1/2 text-muted" />
      <Moon size={14} className="absolute right-2 top-1/2 -translate-y-1/2 text-muted" />
      <span
        className={`absolute left-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-accent text-on-accent transition-transform duration-300 ease-out ${
          isDark ? 'translate-x-[30px]' : 'translate-x-0'
        }`}
      >
        {isDark ? <Moon size={14} /> : <Sun size={14} />}
      </span>
    </button>
  )
}

export default ThemeToggle