import { motion } from 'framer-motion'
import home from '../data/home.json'
import { PlanetSVG } from '../components/PlanetSVG'
import { SteamCTA } from '../components/SteamCTA'
import { useReducedMotion } from '../hooks/useReducedMotion'

export function Hero() {
  const reduced = useReducedMotion()
  return (
    <section id="accueil" className="relative min-h-[100svh] scroll-mt-20 px-4 pb-16 pt-28 md:px-8">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <motion.p
            initial={reduced ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--accent)]"
          >
            Fan encyclopedia · FR
          </motion.p>
          <motion.h1
            initial={reduced ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl"
          >
            {home.title}
            <span className="mt-3 block text-2xl font-semibold text-white/70 md:text-3xl">
              {home.tagline}
            </span>
          </motion.h1>
          <motion.p
            initial={reduced ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12 }}
            className="mt-6 max-w-2xl text-lg text-white/80 md:text-xl"
          >
            {home.pitch}
          </motion.p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-3">
            {home.highlights.map((h) => (
              <li key={h.label} className="glass rounded-xl p-4">
                <p className="text-xs uppercase tracking-wider text-[color:var(--accent)]">{h.label}</p>
                <p className="mt-1 text-sm text-white/80">{h.text}</p>
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
          style={reduced ? undefined : { transform: 'translateZ(0)' }}
        >
          <div className="absolute inset-8 rounded-full bg-[color:var(--haze)] opacity-30 blur-3xl" />
          <PlanetSVG className="relative w-full drop-shadow-[0_0_40px_color-mix(in_oklab,var(--accent)_35%,transparent)]" />
          <p className="mt-4 text-center text-xs text-white/45">
            Art SVG original · thème réactif au slider TI
          </p>
        </motion.div>
      </div>
      <p className="mx-auto mt-16 max-w-6xl text-center text-sm text-white/45">
        Faites défiler : ciel barren → bleu → verdoyant. Ou pilotez le slider d&apos;étapes.
      </p>
    </section>
  )
}
