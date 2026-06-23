import { motion } from 'framer-motion'
import { experienceTimeline } from '../../data/portfolio'
import SectionHeading from '../ui/SectionHeading'
import { fadeInUp } from '../../utils/animations'
import {
  HiAcademicCap,
  HiBookOpen,
  HiBriefcase,
} from 'react-icons/hi'

const typeConfig = {
  education: { icon: HiAcademicCap, color: 'bg-indigo-500', label: 'Education' },
  learning: { icon: HiBookOpen, color: 'bg-violet-500', label: 'Learning' },
  internship: { icon: HiBriefcase, color: 'bg-emerald-500', label: 'Internship' },
  work: { icon: HiBriefcase, color: 'bg-emerald-500', label: 'Work Experience' },
}

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="Experience"
          title="My Journey"
          subtitle="A timeline of web development education, training, and professional growth"
        />

        <div className="relative mx-auto max-w-3xl">
          <div className="absolute top-0 bottom-0 left-6 w-px bg-gradient-to-b from-indigo-500/50 via-violet-500/30 to-transparent md:left-1/2 md:-translate-x-px" />

          {experienceTimeline.map((item, index) => {
            const config = typeConfig[item.type]
            const Icon = config.icon
            const isEven = index % 2 === 0

            return (
              <motion.div
                key={`${item.title}-${item.year}`}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: index * 0.1 }}
                className={`relative mb-12 flex items-start gap-6 md:gap-0 ${
                  isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className={`hidden flex-1 md:block ${isEven ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                  <span className="text-sm font-medium text-indigo-500 light:text-indigo-600">{item.year}</span>
                  <h3 className="text-heading mt-1 text-lg font-semibold">{item.title}</h3>
                  <p className="text-muted text-sm">{item.organization}</p>
                </div>

                <div className="timeline-ring relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-4 bg-page md:absolute md:left-1/2 md:-translate-x-1/2">
                  <div className={`flex h-8 w-8 items-center justify-center rounded-full ${config.color}`}>
                    <Icon className="h-4 w-4 text-white" />
                  </div>
                </div>

                <div className={`flex-1 pl-16 md:pl-0 ${isEven ? 'md:pl-12' : 'md:pr-12 md:text-right'}`}>
                  <div className="glass rounded-2xl p-5">
                    <div className="md:hidden">
                      <span className="text-sm font-medium text-indigo-500 light:text-indigo-600">{item.year}</span>
                      <h3 className="text-heading mt-1 text-lg font-semibold">{item.title}</h3>
                      <p className="text-muted text-sm">{item.organization}</p>
                    </div>
                    <p className="text-body mt-3 text-sm leading-relaxed md:mt-0">
                      {item.description}
                    </p>
                    <span className={`mt-3 inline-block rounded-full px-3 py-1 text-xs font-medium md:mt-3 ${
                      item.type === 'education'
                        ? 'bg-indigo-500/10 text-indigo-400 light:bg-indigo-50 light:text-indigo-600'
                        : item.type === 'learning'
                          ? 'bg-violet-500/10 text-violet-400 light:bg-violet-50 light:text-violet-600'
                          : 'bg-emerald-500/10 text-emerald-400 light:bg-emerald-50 light:text-emerald-600'
                    }`}>
                      {config.label}
                    </span>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
