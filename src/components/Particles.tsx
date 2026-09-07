import { useEffect, useRef } from 'react'
import { useReducedMotion } from '../hooks/useReducedMotion'

const PALETTE = ['#C9762F', '#EDE6DA', '#57D9C4']

/** Drifting dust particles — Claude Design atmosphere */
export function Particles() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const reduced = useReducedMotion()

  useEffect(() => {
    if (reduced) return
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let raf = 0
    let w = 0
    let h = 0
    const particles = Array.from({ length: 36 }, (_, i) => ({
      x: Math.random(),
      y: 0.85 + Math.random() * 0.2,
      r: 0.8 + Math.random() * 1.6,
      vx: 0.00008 + Math.random() * 0.00012,
      vy: -0.00018 - Math.random() * 0.00035,
      a: 0.25 + Math.random() * 0.45,
      color: PALETTE[i % PALETTE.length]!,
      life: Math.random(),
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
      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy
        p.life += 0.0015
        if (p.y < -0.05 || p.life > 1) {
          p.x = Math.random()
          p.y = 1.02
          p.life = 0
        }
        const fade = p.life < 0.12 ? p.life / 0.12 : p.life > 0.88 ? (1 - p.life) / 0.12 : 1
        ctx.globalAlpha = p.a * fade
        ctx.fillStyle = p.color
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
  }, [reduced])

  if (reduced) return null
  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 opacity-70"
    />
  )
}
