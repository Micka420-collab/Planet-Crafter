import home from '../data/home.json'

export function SteamCTA({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={
        compact
          ? ''
          : 'rounded-md border border-coral/40 bg-gradient-to-r from-coral/20 to-[rgba(14,16,18,0.7)] p-5 md:p-6'
      }
    >
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-headline text-lg font-semibold text-cream md:text-xl">
            Jouer sur Steam
          </p>
          <p className="mt-1 max-w-xl text-sm text-cream/70">{home.ctaNote}</p>
        </div>
        <a
          href={home.steamUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-coral shrink-0 px-5 py-3 text-sm"
        >
          Voir sur Steam →
        </a>
      </div>
    </div>
  )
}
