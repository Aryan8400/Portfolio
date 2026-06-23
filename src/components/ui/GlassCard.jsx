import { motion } from 'framer-motion'

export default function GlassCard({ children, className = '', hover = true, ...props }) {
  return (
    <motion.div
      className={`glass glass-hover rounded-2xl p-6 transition-all duration-300 ${className}`}
      whileHover={hover ? { y: -4 } : undefined}
      transition={{ duration: 0.3 }}
      {...props}
    >
      {children}
    </motion.div>
  )
}
