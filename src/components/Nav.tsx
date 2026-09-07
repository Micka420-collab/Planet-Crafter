import { useEffect, useState } from 'react'
import home from '../data/home.json'
import { NAV_SECTIONS, PRIMARY_NAV } from '../data/searchIndex'
import { cn } from '../lib/cn'

export function Nav({ onOpenSearch }: { onOpenSearch: () => void }) {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('accueil')

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        onOpenSearch()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onOpenSearch])

  useEffect(() => {
    const ids = PRIMARY_NAV.map((s) => s.id)
    const observers: IntersectionObserver[] = []
    for (const id of ids) {
      const el = document.getElementById(id)
      if (!el) continue
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry?.isIntersecting) setActive(id)
        },
        { rootMargin: '-35% 0px -55% 0px', threshold: 0 },
      )
      obs.observe(el)
      observers.push(obs)
    }
    return () => observers.forEach((o) => o.disconnect())
  }, [])

  return (
    <header className="sticky top-0 z-50 border-b border-cream/10 bg-void/78 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-4 px-4 py-3 md:px-8">
        <a href="#accueil" className="flex items-center gap-2.5 text-cream">
          <span className="relative grid h-7 w-7 place-items-center rounded-full border border-teal">
            <span className="animate-pulse-dot h-2 w-2 rounded-full bg-amber" />
            <span className="animate-spin-slow pointer-events-none absolute -inset-1 rounded-full border border-dashed border-teal/40" />
          </span>
          <span className="leading-tight">
            <span className="block font-mono text-[10px] tracking-[0.24em] text-teal">
              SENTINEL CORP
            </span>
            <span className="block font-display text-[15px] font-bold tracking-tight">
              Planet Crafter
            </span>
          </span>
        </a>

        <nav
          className="hidden flex-1 flex-wrap items-center gap-0.5 font-mono text-xs lg:flex"
          aria-label="Sections principales"
        >
          {PRIMARY_NAV.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={cn('nav-pill', active === s.id && 'nav-pill-active')}
            >
              {s.label}
            </a>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <button
            type="button"
            onClick={onOpenSearch}
            className="hidden items-center gap-2 rounded border border-cream/15 bg-cream/5 px-3 py-2 font-mono text-xs text-cream/70 hover:bg-cream/10 sm:inline-flex"
            aria-label="Ouvrir la recherche"
          >
            <span>Rechercher</span>
            <kbd className="rounded border border-cream/20 bg-void/60 px-1.5 py-0.5 font-mono text-[10px]">
              ⌘K
            </kbd>
          </button>
          <a
            href={home.steamUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-coral hidden sm:inline-flex"
          >
            Steam
          </a>
          <button
            type="button"
            className="rounded border border-cream/15 bg-cream/5 px-3 py-2 font-mono text-xs lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            Menu
          </button>
        </div>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-cream/10 bg-void/90 px-4 py-3 backdrop-blur-xl lg:hidden"
        >
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-2">
            {PRIMARY_NAV.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="nav-pill font-mono text-sm"
                onClick={() => setOpen(false)}
              >
                {s.label}
              </a>
            ))}
            {NAV_SECTIONS.filter((s) => !PRIMARY_NAV.some((p) => p.id === s.id)).map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="rounded px-3 py-2 text-sm text-cream/65 hover:bg-cream/5"
                onClick={() => setOpen(false)}
              >
                {s.label}
              </a>
            ))}
            <button
              type="button"
              className="col-span-2 rounded border border-cream/15 px-3 py-2 font-mono text-sm"
              onClick={() => {
                setOpen(false)
                onOpenSearch()
              }}
            >
              Recherche ⌘K
            </button>
            <a
              href={home.steamUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-coral col-span-2 justify-center sm:hidden"
              onClick={() => setOpen(false)}
            >
              Voir sur Steam
            </a>
          </div>
        </div>
      ) : null}

      <div className="header-gradient-bar" aria-hidden />
    </header>
  )
}
