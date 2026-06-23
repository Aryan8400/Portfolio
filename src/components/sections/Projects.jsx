import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaPlay } from 'react-icons/fa'
import { projects } from '../../data/portfolio'
import SectionHeading from '../ui/SectionHeading'
import GlassCard from '../ui/GlassCard'
import Button from '../ui/Button'
import { staggerContainer, fadeInUp } from '../../utils/animations'

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="Projects"
          title="Featured Work"
          subtitle="A selection of projects that showcase my skills and passion for development"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 gap-8 md:grid-cols-2"
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={fadeInUp}>
              <GlassCard className="group flex h-full flex-col overflow-hidden p-0" hover>
                <div
                  className={`relative h-48 overflow-hidden bg-gradient-to-br ${project.gradient}`}
                >
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={`${project.title} preview`}
                      className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center">
                      <span className="text-6xl">{project.icon}</span>
                    </div>
                  )}
                  {project.isCompany && (
                    <span className="glass absolute top-4 left-4 rounded-full px-3 py-1 text-xs font-medium text-indigo-400 light:text-indigo-600">
                      Company Project
                    </span>
                  )}
                  {project.placeholder && (
                    <span className="glass absolute top-4 right-4 rounded-full px-3 py-1 text-xs font-medium text-subtle">
                      Coming Soon
                    </span>
                  )}
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-heading text-xl font-bold">{project.title}</h3>
                  {project.subtitle && (
                    <p className="mt-1 text-xs font-medium text-indigo-500 light:text-indigo-600">
                      {project.subtitle}
                    </p>
                  )}
                  <p className="text-body mt-2 flex-1 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mt-4">
                    <p className="text-muted mb-2 text-xs font-medium tracking-wider uppercase">
                      Key Features
                    </p>
                    <ul className="grid grid-cols-1 gap-1.5 sm:grid-cols-2">
                      {project.features.map((feature) => (
                        <li
                          key={feature}
                          className="text-body flex items-center gap-1.5 text-xs"
                        >
                          <span className="h-1 w-1 shrink-0 rounded-full bg-indigo-500 light:bg-indigo-600" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="tag-pill rounded-md px-2 py-1 text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className={`mt-6 flex gap-3 ${project.video ? 'flex-wrap' : ''}`}>
                    {project.github && project.github !== '#' && (
                      <Button
                        variant="secondary"
                        href={project.github}
                        icon={FaGithub}
                        className="flex-1 px-4 py-2.5 text-xs"
                      >
                        GitHub
                      </Button>
                    )}
                    {project.demo && project.demo !== '#' && (
                      <Button
                        href={project.demo}
                        icon={FaExternalLinkAlt}
                        className="flex-1 px-4 py-2.5 text-xs"
                      >
                        Live Demo
                      </Button>
                    )}
                    {project.video && (
                      <Button
                        variant="secondary"
                        href={project.video}
                        icon={FaPlay}
                        className="w-full px-4 py-2.5 text-xs sm:w-auto sm:flex-1"
                      >
                        Watch Demo
                      </Button>
                    )}
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
