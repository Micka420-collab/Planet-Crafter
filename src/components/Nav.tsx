import { useEffect, useState } from 'react'
import { NAV_SECTIONS } from '../data/searchIndex'
import { useScrollProgress } from '../hooks/useScrollProgress'
import { cn } from '../lib/cn'

export function Nav({ onOpenSearch }: { onOpenSearch: () => void }) {
  const progress = useScrollProgress()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

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

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition',
        scrolled ? 'bg-black/55 backdrop-blur-xl' : 'bg-transparent',
      )}
    >
      <div
        className="h-0.5 origin-left bg-[color:var(--accent)] transition-transform"
        style={{ transform: `scaleX(${progress})` }}
        aria-hidden
      />
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 md:px-8">
        <a href="#accueil" className="font-display text-lg font-bold tracking-tight">
          Prime<span className="text-[color:var(--accent)]">Portal</span>
        </a>
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Sections">
          {NAV_SECTIONS.slice(0, 8).map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="rounded-lg px-2.5 py-1.5 text-xs font-medium text-white/70 hover:bg-white/5 hover:text-white"
            >
              {s.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onOpenSearch}
            className="hidden items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-xs text-white/70 hover:bg-white/10 sm:inline-flex"
            aria-label="Ouvrir la recherche"
          >
            <span>Rechercher</span>
            <kbd className="rounded border border-white/20 bg-black/40 px-1.5 py-0.5 font-mono text-[10px]">
              ⌘K
            </kbd>
          </button>
          <button
            type="button"
            className="rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-xs lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            Menu
          </button>
        </div>
      </div>
      {open ? (
        <div id="mobile-nav" className="border-t border-white/10 bg-black/80 px-4 py-3 backdrop-blur-xl lg:hidden">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-2">
            {NAV_SECTIONS.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="rounded-lg px-3 py-2 text-sm text-white/80 hover:bg-white/5"
                onClick={() => setOpen(false)}
              >
                {s.label}
              </a>
            ))}
            <button
              type="button"
              className="col-span-2 rounded-lg border border-white/15 px-3 py-2 text-sm"
              onClick={() => {
                setOpen(false)
                onOpenSearch()
              }}
            >
              Recherche ⌘K
            </button>
          </div>
        </div>
      ) : null}
    </header>
  )
}
