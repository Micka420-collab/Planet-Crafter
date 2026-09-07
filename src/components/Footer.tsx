import home from '../data/home.json'
import { PRIMARY_NAV } from '../data/searchIndex'

export function Footer() {
  return (
    <footer className="relative z-[1] border-t border-cream/10 bg-void/92 px-4 py-12 md:px-8">
      <div className="mx-auto grid max-w-6xl gap-8 text-sm sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="label-mono mb-3 !text-cream/40">Pages</p>
          <div className="grid gap-2">
            {PRIMARY_NAV.filter((s) => s.id !== 'accueil').map((s) => (
              <a key={s.id} href={`#${s.id}`} className="text-cream/70 hover:text-cream">
                {s.label}
              </a>
            ))}
          </div>
        </div>
        <div>
          <p className="label-mono mb-3 !text-cream/40">Officiel</p>
          <div className="grid gap-2">
            <a
              href={home.steamUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cream/70 hover:text-cream"
            >
              Page Steam
            </a>
            <a
              href="https://www.gog.com/en/game/the_planet_crafter"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cream/70 hover:text-cream"
            >
              GOG
            </a>
            <a
              href="https://mijugames.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cream/70 hover:text-cream"
            >
              Miju Games
            </a>
          </div>
        </div>
        <div>
          <p className="label-mono mb-3 !text-cream/40">Marque</p>
          <p className="font-display text-base font-bold text-cream">Planet Crafter</p>
          <p className="mt-1 font-mono text-[10px] tracking-[0.2em] text-teal">SENTINEL CORP</p>
          <p className="mt-3 text-cream/55">Portail fan · encyclopédie FR</p>
        </div>
        <div>
          <p className="label-mono mb-3 !text-cream/40">Avertissement</p>
          <p className="leading-relaxed text-cream/58">{home.disclaimer}</p>
          <p className="mt-3 text-xs text-cream/45">
            © {new Date().getFullYear()} — contenu synthétisé ; seuils TI sujets aux patches.
          </p>
        </div>
      </div>
    </footer>
  )
}
