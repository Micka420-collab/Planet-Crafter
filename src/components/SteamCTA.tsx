import home from '../data/home.json'

export function SteamCTA({ compact = false }: { compact?: boolean }) {
  return (
    <div className={compact ? '' : 'glass rounded-2xl p-5 md:p-6'}>
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-headline text-lg font-semibold md:text-xl">Jouer sur Steam</p>
          <p className="mt-1 max-w-xl text-sm text-white/70">{home.ctaNote}</p>
        </div>
        <a
          href={home.steamUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-xl bg-[color:var(--accent)] px-5 py-3 text-sm font-semibold text-black transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
        >
          Ouvrir la page Steam
          <span className="ml-2" aria-hidden>
            ↗
          </span>
        </a>
      </div>
    </div>
  )
}
