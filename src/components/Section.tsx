import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { useReducedMotion } from '../hooks/useReducedMotion'

export function Section({
  id,
  title,
  eyebrow,
  children,
}: {
  id: string
  title: string
  eyebrow?: string
  children: ReactNode
}) {
  const reduced = useReducedMotion()
  return (
    <section id={id} className="relative z-[1] scroll-mt-28 px-4 py-16 md:px-8 md:py-24">
      <motion.div
        initial={reduced ? false : { opacity: 0, y: 28 }}
        whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-10% 0px' }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto max-w-6xl"
      >
        <header className="mb-8 md:mb-10">
          {eyebrow ? <p className="label-mono mb-3">{eyebrow}</p> : null}
          <h2 className="font-display text-3xl font-bold tracking-tight text-cream md:text-4xl lg:text-5xl">
            {title}
          </h2>
        </header>
        <div className="prose-dense">{children}</div>
      </motion.div>
    </section>
  )
}
