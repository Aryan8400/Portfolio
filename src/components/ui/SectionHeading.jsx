import { motion } from 'framer-motion'

export default function SectionHeading({ tag, title, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6 }}
      className="mb-12 text-center md:mb-16"
    >
      {tag && (
        <span className="section-tag mb-3 inline-block rounded-full px-4 py-1 text-xs font-medium tracking-wider uppercase">
          {tag}
        </span>
      )}
      <h2 className="text-heading text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="text-body mx-auto mt-4 max-w-2xl text-base md:text-lg">{subtitle}</p>
      )}
    </motion.div>
  )
}
