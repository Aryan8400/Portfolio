import { useEffect, useRef } from 'react'
import { useTheme } from '../../context/ThemeContext'

export default function ParticleBackground() {
  const canvasRef = useRef(null)
  const { isDark } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let animationId
    let particles = []

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const createParticles = () => {
      const count = Math.min(60, Math.floor((window.innerWidth * window.innerHeight) / 15000))
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5 + 0.5,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * (isDark ? 0.5 : 0.35) + (isDark ? 0.1 : 0.15),
      }))
    }

    const particleRgb = getComputedStyle(document.documentElement)
      .getPropertyValue('--particle-rgb')
      .trim() || '99, 102, 241'

    const lineOpacity = isDark ? 0.08 : 0.1

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((p, i) => {
        p.x += p.vx
        p.y += p.vy

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${particleRgb}, ${p.opacity})`
        ctx.fill()

        particles.slice(i + 1).forEach((p2) => {
          const dx = p.x - p2.x
          const dy = p.y - p2.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 120) {
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.strokeStyle = `rgba(${particleRgb}, ${lineOpacity * (1 - dist / 120)})`
            ctx.stroke()
          }
        })
      })

      animationId = requestAnimationFrame(draw)
    }

    resize()
    createParticles()
    draw()

    const handleResize = () => {
      resize()
      createParticles()
    }

    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', handleResize)
    }
  }, [isDark])

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none fixed inset-0 -z-10 ${isDark ? 'opacity-60' : 'opacity-40'}`}
      aria-hidden="true"
    />
  )
}
