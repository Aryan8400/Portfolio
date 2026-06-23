import { motion } from 'framer-motion'
import { skillCategories } from '../../data/portfolio'
import SectionHeading from '../ui/SectionHeading'
import GlassCard from '../ui/GlassCard'
import SkillBar from '../ui/SkillBar'
import { staggerContainer, fadeInUp } from '../../utils/animations'
import {
  HiColorSwatch,
  HiServer,
  HiDatabase,
  HiCog,
} from 'react-icons/hi'

const categoryIcons = {
  Frontend: HiColorSwatch,
  Backend: HiServer,
  Database: HiDatabase,
  Tools: HiCog,
}

const categoryColors = {
  Frontend: 'from-blue-500/20 to-indigo-500/20 text-blue-400 light:from-blue-100 light:to-indigo-100 light:text-blue-600',
  Backend: 'from-emerald-500/20 to-teal-500/20 text-emerald-400 light:from-emerald-100 light:to-teal-100 light:text-emerald-600',
  Database: 'from-amber-500/20 to-orange-500/20 text-amber-400 light:from-amber-100 light:to-orange-100 light:text-amber-600',
  Tools: 'from-violet-500/20 to-purple-500/20 text-violet-400 light:from-violet-100 light:to-purple-100 light:text-violet-600',
}

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="Skills"
          title="Technical Expertise"
          subtitle="A dashboard overview of my technical proficiency across the stack"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 gap-6 md:grid-cols-2"
        >
          {Object.entries(skillCategories).map(([category, skills]) => {
            const Icon = categoryIcons[category]
            const colorClass = categoryColors[category]

            return (
              <motion.div key={category} variants={fadeInUp}>
                <GlassCard className="h-full">
                  <div className="mb-6 flex items-center gap-3">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${colorClass}`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-heading text-lg font-semibold">{category}</h3>
                      <p className="text-muted text-xs">
                        {skills.length} technologies
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {skills.map((skill, index) => (
                      <SkillBar
                        key={skill.name}
                        name={skill.name}
                        level={skill.level}
                        delay={index * 0.1}
                      />
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
