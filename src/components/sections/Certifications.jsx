import { motion } from 'framer-motion'
import { HiBadgeCheck } from 'react-icons/hi'
import { certifications } from '../../data/portfolio'
import SectionHeading from '../ui/SectionHeading'
import GlassCard from '../ui/GlassCard'
import { staggerContainer, fadeInUp } from '../../utils/animations'

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="Certifications"
          title="Credentials & Achievements"
          subtitle="Certifications validating my web development and cloud skills"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {certifications.map((cert) => (
            <motion.div key={cert.title} variants={fadeInUp}>
              <GlassCard className="relative h-full text-center">
                {cert.placeholder && (
                  <span className="tag-pill absolute top-3 right-3 rounded-full px-2 py-0.5 text-[10px]">
                    Placeholder
                  </span>
                )}
                {cert.image ? (
                  <div className="mx-auto mb-4 h-20 w-20 overflow-hidden rounded-3xl border border-indigo-200 bg-white/10 shadow-inner">
                    <img
                      src={cert.image}
                      alt={`${cert.title} badge`}
                      className="h-full w-full object-contain"
                    />
                  </div>
                ) : (
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500/20 to-violet-500/20 light:from-indigo-100 light:to-violet-100">
                    <HiBadgeCheck className="h-7 w-7 text-indigo-500 light:text-indigo-600" />
                  </div>
                )}
                <h3 className="text-heading font-semibold">{cert.title}</h3>
                <p className="text-muted mt-1 text-sm">{cert.issuer}</p>
                <p className="mt-3 text-xs font-medium text-indigo-500 light:text-indigo-600">{cert.year}</p>
                {cert.url && (
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block text-sm font-medium text-indigo-500 transition-colors hover:text-indigo-600 light:hover:text-indigo-500"
                  >
                    View Badge
                  </a>
                )}
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
