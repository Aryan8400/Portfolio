import { personalInfo, navLinks } from '../../data/portfolio'
import { useScrollTo } from '../../hooks/useScroll'
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa'

const socialIcons = [
  { icon: FaGithub, href: personalInfo.social.github, label: 'GitHub' },
  { icon: FaLinkedin, href: personalInfo.social.linkedin, label: 'LinkedIn' },
  { icon: FaFacebook, href: personalInfo.social.facebook, label: 'Facebook' },
]

export default function Footer() {
  const scrollTo = useScrollTo()
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-theme py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="text-center md:text-left">
            <p className="text-heading text-lg font-semibold">
              {personalInfo.name.split(' ')[0]}
              <span className="text-indigo-500 light:text-indigo-600">.</span>
            </p>
            <p className="text-muted mt-1 text-sm">
              © {year} {personalInfo.name}. All rights reserved.
            </p>
          </div>

          <ul className="flex flex-wrap justify-center gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => scrollTo(link.href)}
                  className="text-muted hover:text-heading text-sm transition-colors"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          <div className="flex gap-4">
            {socialIcons.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="icon-btn hover:border-indigo-500/30 hover:text-indigo-500 light:hover:text-indigo-600 flex h-10 w-10 items-center justify-center rounded-xl transition-all"
                aria-label={label}
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
