import { motion } from 'framer-motion'
import home from '../data/home.json'
import { PlanetSVG } from '../components/PlanetSVG'
import { SteamCTA } from '../components/SteamCTA'
import { useReducedMotion } from '../hooks/useReducedMotion'

export function Hero() {
  const reduced = useReducedMotion()
  return (
    <section
      id="accueil"
      className="relative z-[1] min-h-[100svh] scroll-mt-20 overflow-x-clip px-4 pb-14 pt-20 sm:pb-16 sm:pt-24 md:px-8"
    >
      <div className="mx-auto grid max-w-6xl min-w-0 items-center gap-8 sm:gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="min-w-0">
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-5 inline-flex max-w-full flex-wrap items-center gap-2 rounded-full border border-teal/30 px-3 py-1.5 font-mono text-[10px] tracking-[0.12em] text-teal sm:mb-7 sm:gap-2.5 sm:px-3.5 sm:text-[11px] sm:tracking-[0.18em]"
          >
            <span className="animate-pulse-dot h-1.5 w-1.5 shrink-0 rounded-full bg-green" />
            <span className="min-w-0 break-words">PORTAIL NON OFFICIEL · FAN ENCYCLOPEDIA</span>
          </motion.div>
          <motion.h1
            initial={reduced ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="font-display text-[clamp(2.1rem,8.5vw,4.5rem)] font-bold leading-[0.94] tracking-[-0.035em] text-cream md:text-6xl lg:text-7xl"
          >
            Rendre habitable{' '}
            <span className="text-amber">un monde mort</span>
          </motion.h1>
          <motion.p
            initial={reduced ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-3 font-display text-lg font-medium text-cream/70 sm:text-xl md:text-2xl"
          >
            {home.tagline}
          </motion.p>
          <motion.p
            initial={reduced ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12 }}
            className="mt-5 max-w-2xl text-base leading-relaxed text-cream/72 sm:mt-6 sm:text-lg md:text-xl"
          >
            {home.pitch}
          </motion.p>
          <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap">
            <a href="#etapes" className="btn-primary w-full sm:w-auto">
              Ouvrir l&apos;index de terraformation
            </a>
            <a href="#secrets" className="btn-secondary w-full sm:w-auto">
              Secrets &amp; easter eggs
            </a>
          </div>
          <ul className="mt-8 grid grid-cols-1 gap-px overflow-hidden rounded-md border border-cream/10 bg-cream/10 sm:grid-cols-3">
            {home.highlights.map((h) => (
              <li key={h.label} className="min-w-0 bg-[rgba(14,16,18,0.9)] p-4 md:p-5">
                <p className="label-mono break-words text-[10px] text-cream/50">{h.label}</p>
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
          className="relative mx-auto w-full max-w-[min(100%,22rem)] sm:max-w-md"
          aria-hidden
        >
          <div className="absolute inset-8 rounded-full bg-amber/25 opacity-40 blur-3xl" />
          <PlanetSVG className="relative w-full drop-shadow-[0_0_40px_rgba(87,217,196,0.25)]" />
        </motion.div>
      </div>
    </section>
  )
}
