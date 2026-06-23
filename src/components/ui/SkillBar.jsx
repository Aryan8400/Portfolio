import { motion } from 'framer-motion'

export default function SkillBar({ name, level, delay = 0 }) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-sm">
        <span className="text-subtle font-medium">{name}</span>
        <span className="font-medium text-indigo-500 light:text-indigo-600">{level}%</span>
      </div>
      <div className="progress-track h-2 overflow-hidden rounded-full">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-violet-500"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  )
}
