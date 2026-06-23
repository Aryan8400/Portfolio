import { useTheme } from '../../context/ThemeContext'

export default function GradientBackground() {
  const { isDark } = useTheme()

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div
        className="absolute -top-1/2 -left-1/2 h-full w-full animate-pulse rounded-full blur-[120px]"
        style={{ backgroundColor: isDark ? 'var(--gradient-blob-1)' : 'var(--gradient-blob-1)' }}
      />
      <div
        className="absolute -right-1/2 -bottom-1/2 h-full w-full rounded-full blur-[120px]"
        style={{
          backgroundColor: 'var(--gradient-blob-2)',
          animation: 'pulse 4s ease-in-out infinite',
        }}
      />
      <div
        className="absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[100px]"
        style={{ backgroundColor: 'var(--gradient-blob-3)' }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse at top, var(--gradient-radial), transparent 70%)`,
        }}
      />
      {isDark ? null : (
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-slate-100/60" />
      )}
    </div>
  )
}
