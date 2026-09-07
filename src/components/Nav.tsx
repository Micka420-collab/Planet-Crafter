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

  useEffect(() => {
    if (!open) return
    const onResize = () => {
      if (window.matchMedia('(min-width: 1024px)').matches) setOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [open])

  return (
    <header className="sticky top-0 z-50 border-b border-cream/10 bg-void/78 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl min-w-0 items-center gap-2 px-4 py-2.5 sm:gap-3 sm:py-3 md:px-8">
        <a
          href="#accueil"
          className="flex min-w-0 shrink items-center gap-2 text-cream sm:gap-2.5"
        >
          <span className="relative grid h-8 w-8 shrink-0 place-items-center rounded-full border border-teal sm:h-7 sm:w-7">
            <span className="animate-pulse-dot h-2 w-2 rounded-full bg-amber" />
            <span className="animate-spin-slow pointer-events-none absolute -inset-1 rounded-full border border-dashed border-teal/40" />
          </span>
          <span className="min-w-0 leading-tight">
            <span className="block truncate font-mono text-[9px] tracking-[0.2em] text-teal sm:text-[10px] sm:tracking-[0.24em]">
              SENTINEL CORP
            </span>
            <span className="block truncate font-display text-sm font-bold tracking-tight sm:text-[15px]">
              Planet Crafter
            </span>
          </span>
        </a>

        <nav
          className="hidden min-w-0 flex-1 flex-wrap items-center gap-0.5 font-mono text-xs lg:flex"
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

        <div className="ml-auto flex shrink-0 items-center gap-1.5 sm:gap-2">
          <button
            type="button"
            onClick={onOpenSearch}
            className="inline-flex h-11 min-w-11 items-center justify-center gap-2 rounded border border-cream/15 bg-cream/5 px-2.5 font-mono text-xs text-cream/70 hover:bg-cream/10 sm:h-auto sm:min-w-0 sm:px-3 sm:py-2"
            aria-label="Ouvrir la recherche"
          >
            <span className="hidden sm:inline">Rechercher</span>
            <kbd className="hidden rounded border border-cream/20 bg-void/60 px-1.5 py-0.5 font-mono text-[10px] sm:inline">
              ⌘K
            </kbd>
            <span className="font-mono text-sm sm:hidden" aria-hidden>
              ⌕
            </span>
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
            className="inline-flex h-11 min-w-11 items-center justify-center rounded border border-cream/15 bg-cream/5 px-3 font-mono text-xs lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? 'Fermer' : 'Menu'}
          </button>
        </div>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-cream/10 bg-void/95 px-4 py-3 backdrop-blur-xl lg:hidden"
        >
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-1.5">
            {PRIMARY_NAV.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className={cn(
                  'nav-pill flex min-h-11 items-center font-mono text-sm',
                  active === s.id && 'nav-pill-active',
                )}
                onClick={() => setOpen(false)}
              >
                {s.label}
              </a>
            ))}
            {NAV_SECTIONS.filter((s) => !PRIMARY_NAV.some((p) => p.id === s.id)).map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="flex min-h-11 items-center rounded px-3 py-2 text-sm text-cream/65 hover:bg-cream/5"
                onClick={() => setOpen(false)}
              >
                {s.label}
              </a>
            ))}
            <a
              href={home.steamUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-coral col-span-full mt-1 min-h-11 justify-center sm:hidden"
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
