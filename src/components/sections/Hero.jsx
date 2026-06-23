import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { HiDownload, HiLocationMarker } from 'react-icons/hi'
import { FaGithub } from 'react-icons/fa'
import { personalInfo, typingRoles } from '../../data/portfolio'
import Button from '../ui/Button'
import { fadeInUp, slideInLeft, slideInRight } from '../../utils/animations'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center pt-20 pb-16"
    >
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <motion.div
          variants={slideInLeft}
          initial="hidden"
          animate="visible"
          className="order-2 lg:order-1"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mb-4 text-sm font-medium tracking-wider text-indigo-500 uppercase light:text-indigo-600"
          >
            Welcome to my web portfolio
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-heading text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
          >
            Hi, I&apos;m{' '}
            <span className="text-gradient">{personalInfo.name}</span>
          </motion.h1>

          <div className="text-subtle mt-4 h-10 text-xl font-semibold sm:text-2xl">
            <TypeAnimation
              sequence={typingRoles.flatMap((role) => [role, 2000])}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-indigo-500 light:text-indigo-600"
            />
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-body mt-6 max-w-lg text-base leading-relaxed md:text-lg"
          >
            {personalInfo.intro}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-muted mt-3 flex items-center gap-2 text-sm"
          >
            <HiLocationMarker className="h-4 w-4 text-indigo-500 light:text-indigo-600" />
            {personalInfo.location}
          </motion.div>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.8 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <Button href="#projects">View Projects</Button>
            <Button
              variant="secondary"
              href={personalInfo.resumeUrl}
              icon={HiDownload}
            >
              Download Resume
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-8"
          >
            <a
              href={personalInfo.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted inline-flex items-center gap-2 text-sm transition-colors hover:text-indigo-500 light:hover:text-indigo-600"
            >
              <FaGithub className="h-5 w-5" />
              @github
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          variants={slideInRight}
          initial="hidden"
          animate="visible"
          className="order-1 flex justify-center lg:order-2"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500/30 to-violet-500/30 blur-3xl light:from-indigo-400/25 light:to-violet-400/20" />
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="relative"
            >
              <div className="glass glow flex h-64 w-64 items-center justify-center overflow-hidden rounded-full border-2 border-indigo-500/20 sm:h-80 sm:w-80 light:border-indigo-300/40">
                <img
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  className="h-full w-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute -inset-4 rounded-full border border-dashed border-indigo-500/20 light:border-indigo-300/40"
            />
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="border-theme-md flex h-10 w-6 items-start justify-center rounded-full border-2 p-1"
        >
          <div className="h-2 w-1 rounded-full bg-indigo-500 light:bg-indigo-600" />
        </motion.div>
      </motion.div>
    </section>
  )
}
