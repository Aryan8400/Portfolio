import { motion } from 'framer-motion'
import { personalInfo, aboutHighlights } from '../../data/portfolio'
import SectionHeading from '../ui/SectionHeading'
import GlassCard from '../ui/GlassCard'
import { staggerContainer, fadeInUp } from '../../utils/animations'
import { HiAcademicCap, HiCode, HiLocationMarker } from 'react-icons/hi'

const infoCards = [
  {
    icon: HiAcademicCap,
    label: 'Education',
    value: personalInfo.education,
  },
  {
    icon: HiCode,
    label: 'Role',
    value: personalInfo.role,
  },
  {
    icon: HiLocationMarker,
    label: 'Location',
    value: personalInfo.location,
  },
]

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="About Me"
          title="Crafting Digital Experiences"
          subtitle="A passionate developer dedicated to building impactful solutions"
        />

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-body text-base leading-relaxed md:text-lg">
              I&apos;m a{' '}
              <span className="text-heading font-medium">{personalInfo.role}</span>{' '}
              and {personalInfo.education.toLowerCase()} based in{' '}
              {personalInfo.location}. With over{' '}
              <span className="font-medium text-indigo-500 light:text-indigo-600">
                {personalInfo.yearsOfExperience}+ years
              </span>{' '}
              of experience, I specialize in building full-stack web
              applications that are fast, accessible, and user-friendly.
            </p>
            <p className="text-body mt-4 text-base leading-relaxed md:text-lg">
              From responsive frontends with React and Tailwind CSS to robust
              backends with Node.js and Express, I enjoy the entire development
              lifecycle. I&apos;m always eager to learn new technologies and
              take on challenging projects.
            </p>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-8 flex flex-wrap gap-2"
            >
              {aboutHighlights.map((skill) => (
                <motion.span
                  key={skill}
                  variants={fadeInUp}
                  className="skill-highlight rounded-lg px-3 py-1.5 text-sm font-medium"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1"
          >
            {infoCards.map((card) => (
              <motion.div key={card.label} variants={fadeInUp}>
                <GlassCard className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-500 light:bg-indigo-100 light:text-indigo-600">
                    <card.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-muted text-xs font-medium tracking-wider uppercase">
                      {card.label}
                    </p>
                    <p className="text-heading mt-0.5 font-medium">{card.value}</p>
                  </div>
                </GlassCard>
              </motion.div>
            ))}

            <motion.div variants={fadeInUp}>
              <GlassCard className="text-center">
                <p className="text-gradient text-4xl font-bold">
                  {personalInfo.yearsOfExperience}+
                </p>
                <p className="text-body mt-1 text-sm">
                  Years of Learning & Development
                </p>
              </GlassCard>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
