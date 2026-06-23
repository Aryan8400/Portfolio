import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa'
import { HiMail, HiLocationMarker } from 'react-icons/hi'
import { personalInfo } from '../../data/portfolio'
import SectionHeading from '../ui/SectionHeading'
import GlassCard from '../ui/GlassCard'
import Button from '../ui/Button'
import { fadeInUp } from '../../utils/animations'

const socialLinks = [
  { icon: FaGithub, href: personalInfo.social.github, label: 'GitHub' },
  { icon: FaLinkedin, href: personalInfo.social.linkedin, label: 'LinkedIn' },
  { icon: FaFacebook, href: personalInfo.social.facebook, label: 'Facebook' },
]

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('')

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('sending')

    setTimeout(() => {
      setStatus('success')
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => setStatus(''), 3000)
    }, 1000)
  }

  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="Contact"
          title="Let's Work Together"
          subtitle="Have a project in mind? I'd love to hear from you"
        />

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <GlassCard>
              <h3 className="text-heading text-xl font-semibold">Get in Touch</h3>
              <p className="text-body mt-2 text-sm leading-relaxed">
                I&apos;m currently open to new opportunities and collaborations.
                Feel free to reach out through the form or connect on social media.
              </p>

              <div className="mt-6 space-y-4">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-body flex items-center gap-3 text-sm transition-colors hover:text-indigo-500 light:hover:text-indigo-600"
                >
                  <HiMail className="h-5 w-5 text-indigo-500 light:text-indigo-600" />
                  {personalInfo.email}
                </a>
                <div className="text-body flex items-center gap-3 text-sm">
                  <HiLocationMarker className="h-5 w-5 text-indigo-500 light:text-indigo-600" />
                  {personalInfo.location}
                </div>
              </div>

              <div className="mt-8 flex gap-3">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon-btn hover:border-indigo-500/30 hover:text-indigo-500 light:hover:text-indigo-600 flex h-11 w-11 items-center justify-center rounded-xl transition-all"
                    aria-label={label}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </GlassCard>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-3"
          >
            <GlassCard>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="text-subtle mb-2 block text-sm font-medium">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="input-field w-full rounded-xl px-4 py-3 text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="text-subtle mb-2 block text-sm font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className="input-field w-full rounded-xl px-4 py-3 text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="text-subtle mb-2 block text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell me about your project..."
                    className="input-field w-full resize-none rounded-xl px-4 py-3 text-sm"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full"
                  disabled={status === 'sending'}
                >
                  {status === 'sending'
                    ? 'Sending...'
                    : status === 'success'
                      ? 'Message Sent!'
                      : 'Send Message'}
                </Button>

                <p className="text-muted text-center text-xs">
                  EmailJS integration ready — add your service credentials in Contact.jsx
                </p>
              </form>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
