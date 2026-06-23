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
          subtitle="Professional certifications and learning milestones"
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
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500/20 to-violet-500/20 light:from-indigo-100 light:to-violet-100">
                  <HiBadgeCheck className="h-7 w-7 text-indigo-500 light:text-indigo-600" />
                </div>
                <h3 className="text-heading font-semibold">{cert.title}</h3>
                <p className="text-muted mt-1 text-sm">{cert.issuer}</p>
                <p className="mt-3 text-xs font-medium text-indigo-500 light:text-indigo-600">{cert.year}</p>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
