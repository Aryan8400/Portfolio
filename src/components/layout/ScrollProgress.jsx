import { motion } from 'framer-motion'
import { useScrollProgress } from '../../hooks/useScroll'

export default function ScrollProgress() {
  const progress = useScrollProgress()

  return (
    <motion.div
      className="fixed top-0 right-0 left-0 z-[60] h-[2px] origin-left bg-gradient-to-r from-indigo-500 via-violet-500 to-purple-500"
      style={{ scaleX: progress / 100 }}
      initial={{ scaleX: 0 }}
    />
  )
}
