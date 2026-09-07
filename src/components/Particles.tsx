import { useEffect, useRef } from 'react'
import { useReducedMotion } from '../hooks/useReducedMotion'
import { useThemeStage } from '../hooks/useThemeStage'

export function Particles() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const reduced = useReducedMotion()
  const { stage } = useThemeStage()

  useEffect(() => {
    if (reduced) return
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let raf = 0
    let w = 0
    let h = 0
    const particles = Array.from({ length: 48 }, () => ({
      x: Math.random(),
      y: Math.random(),
      r: 0.6 + Math.random() * 1.8,
      vx: (Math.random() - 0.5) * 0.00035,
      vy: -0.00015 - Math.random() * 0.0004,
      a: 0.15 + Math.random() * 0.45,
    }))

    const resize = () => {
      w = window.innerWidth
      h = window.innerHeight
      canvas.width = w * devicePixelRatio
      canvas.height = h * devicePixelRatio
      canvas.style.width = `${w}px`
      canvas.style.height = `${h}px`
      ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0)
    }
    resize()
    window.addEventListener('resize', resize)

    const tick = () => {
      ctx.clearRect(0, 0, w, h)
      ctx.fillStyle = stage.accent
      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy
        if (p.y < -0.02) p.y = 1.02
        if (p.x < -0.02) p.x = 1.02
        if (p.x > 1.02) p.x = -0.02
        ctx.globalAlpha = p.a
        ctx.beginPath()
        ctx.arc(p.x * w, p.y * h, p.r, 0, Math.PI * 2)
        ctx.fill()
      }
      ctx.globalAlpha = 1
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [reduced, stage.accent])

  if (reduced) return null
  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[5] opacity-70"
    />
  )
}
