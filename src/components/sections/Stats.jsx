import { motion } from 'framer-motion'
import { stats } from '../../data/portfolio'
import AnimatedCounter from '../ui/AnimatedCounter'
import { staggerContainer, fadeInUp } from '../../utils/animations'

export default function Stats() {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="glass grid grid-cols-2 gap-6 rounded-3xl p-8 md:grid-cols-4 md:gap-8 md:p-12"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeInUp}
              className="text-center"
            >
              <p className="text-gradient text-3xl font-bold md:text-4xl lg:text-5xl">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-muted mt-2 text-xs font-medium md:text-sm">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
