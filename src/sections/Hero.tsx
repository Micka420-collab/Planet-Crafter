import { motion } from 'framer-motion'
import home from '../data/home.json'
import { PlanetSVG } from '../components/PlanetSVG'
import { SteamCTA } from '../components/SteamCTA'
import { useReducedMotion } from '../hooks/useReducedMotion'

export function Hero() {
  const reduced = useReducedMotion()
  return (
    <section id="accueil" className="relative z-[1] min-h-[100svh] scroll-mt-20 px-4 pb-16 pt-24 md:px-8">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-teal/30 px-3.5 py-1.5 font-mono text-[11px] tracking-[0.18em] text-teal"
          >
            <span className="animate-pulse-dot h-1.5 w-1.5 rounded-full bg-green" />
            PORTAIL NON OFFICIEL · FAN ENCYCLOPEDIA
          </motion.div>
          <motion.h1
            initial={reduced ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="font-display text-4xl font-bold leading-[0.94] tracking-[-0.035em] text-cream md:text-6xl lg:text-7xl"
          >
            Rendre habitable{' '}
            <span className="text-amber">un monde mort</span>
          </motion.h1>
          <motion.p
            initial={reduced ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-3 font-display text-xl font-medium text-cream/70 md:text-2xl"
          >
            {home.tagline}
          </motion.p>
          <motion.p
            initial={reduced ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12 }}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-cream/72 md:text-xl"
          >
            {home.pitch}
          </motion.p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#etapes" className="btn-primary">
              Ouvrir l&apos;index de terraformation
            </a>
            <a href="#secrets" className="btn-secondary">
              Secrets &amp; easter eggs
            </a>
          </div>
          <ul className="mt-8 grid gap-px overflow-hidden rounded-md border border-cream/10 bg-cream/10 sm:grid-cols-3">
            {home.highlights.map((h) => (
              <li key={h.label} className="bg-[rgba(14,16,18,0.9)] p-4 md:p-5">
                <p className="label-mono text-[10px] text-cream/50">{h.label}</p>
                <p className="mt-2 text-sm text-cream/80">{h.text}</p>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <SteamCTA />
          </div>
        </div>
        <motion.div
          initial={reduced ? false : { opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="absolute inset-8 rounded-full bg-amber/25 opacity-40 blur-3xl" />
          <PlanetSVG className="relative w-full drop-shadow-[0_0_40px_rgba(87,217,196,0.25)]" />
          <p className="mt-4 text-center font-mono text-[10px] tracking-wider text-cream/45">
            ART SVG ORIGINAL · THÈME RÉACTIF AU SLIDER TI
          </p>
        </motion.div>
      </div>
      <p className="mx-auto mt-16 max-w-6xl text-center font-mono text-xs tracking-wide text-cream/40">
        Faites défiler : ciel barren → bleu → verdoyant. Ou pilotez le slider d&apos;étapes.
      </p>
    </section>
  )
}
