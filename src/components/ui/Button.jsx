import { motion } from 'framer-motion'

const variants = {
  primary:
    'bg-indigo-600 text-white hover:bg-indigo-500 shadow-lg shadow-indigo-500/25 light:shadow-indigo-500/15',
  secondary: 'btn-secondary',
  ghost: 'text-body hover:text-heading hover:bg-surface',
}

export default function Button({
  children,
  variant = 'primary',
  href,
  onClick,
  className = '',
  icon: Icon,
  ...props
}) {
  const baseClasses = `inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-medium transition-all duration-300 ${variants[variant]} ${className}`

  const content = (
    <>
      {Icon && <Icon className="h-4 w-4" />}
      {children}
    </>
  )

  if (href) {
    return (
      <motion.a
        href={href}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        className={baseClasses}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        {...props}
      >
        {content}
      </motion.a>
    )
  }

  return (
    <motion.button
      type="button"
      onClick={onClick}
      className={baseClasses}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      {...props}
    >
      {content}
    </motion.button>
  )
}
