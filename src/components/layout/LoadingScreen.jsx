import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { personalInfo } from '../../data/portfolio'

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(onComplete, 400)
          return 100
        }
        return prev + 4
      })
    }, 30)

    return () => clearInterval(interval)
  }, [onComplete])

  return (
    <AnimatePresence>
      <motion.div
        className="bg-page fixed inset-0 z-[100] flex flex-col items-center justify-center"
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <div className="text-heading mb-6 text-4xl font-bold tracking-tight md:text-5xl">
            {personalInfo.name.split(' ')[0]}
            <span className="text-gradient">.</span>
          </div>
          <div className="progress-track mx-auto h-1 w-48 overflow-hidden rounded-full">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-violet-500"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-muted mt-4 text-sm">Loading portfolio...</p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
