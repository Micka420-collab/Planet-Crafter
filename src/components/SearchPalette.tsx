import { useEffect, useId, useMemo, useRef, useState } from 'react'
import { searchContent } from '../data/searchIndex'

export function SearchPalette({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [q, setQ] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)
  const listId = useId()
  const results = useMemo(() => searchContent(q), [q])

  useEffect(() => {
    if (!open) return
    setQ('')
    const t = window.setTimeout(() => inputRef.current?.focus(), 10)
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      window.clearTimeout(t)
      window.removeEventListener('keydown', onKey)
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-[80] flex items-start justify-center bg-void/80 p-3 pt-[max(1.25rem,env(safe-area-inset-top))] backdrop-blur-sm sm:p-4 sm:pt-[12vh]"
      role="dialog"
      aria-modal="true"
      aria-label="Recherche"
      onClick={onClose}
    >
      <div
        className="glass flex max-h-[min(88dvh,720px)] w-full max-w-xl flex-col overflow-hidden rounded-md"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="shrink-0 border-b border-cream/10 p-3 sm:p-4">
          <p className="label-mono mb-2 text-[10px]">Recherche · encyclopédie</p>
          <input
            ref={inputRef}
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Rechercher étapes, lore, DLC, rares…"
            className="w-full min-w-0 bg-transparent font-display text-base text-cream outline-none placeholder:text-cream/40"
            aria-controls={listId}
            aria-autocomplete="list"
            enterKeyHint="search"
          />
        </div>
        <ul id={listId} className="min-h-0 flex-1 overflow-y-auto overscroll-contain p-2" role="listbox">
          {q && results.length === 0 ? (
            <li className="px-3 py-4 text-sm text-cream/55">Aucun résultat.</li>
          ) : null}
          {results.map((r) => (
            <li key={r.id} role="option">
              <a
                href={`#${r.sectionId}`}
                className="block rounded-md px-3 py-3 hover:bg-teal/10"
                onClick={onClose}
              >
                <div className="flex flex-wrap items-baseline justify-between gap-x-2 gap-y-1">
                  <span className="min-w-0 break-words font-medium text-cream">{r.title}</span>
                  <span className="shrink-0 font-mono text-[10px] uppercase tracking-wider text-teal/80">
                    {r.section}
                  </span>
                </div>
                <p className="mt-1 line-clamp-2 text-xs text-cream/60">{r.blurb}</p>
              </a>
            </li>
          ))}
          {!q ? (
            <li className="px-3 py-4 text-sm text-cream/55">
              Tapez pour filtrer toute l&apos;encyclopédie. Esc pour fermer.
            </li>
          ) : null}
        </ul>
      </div>
    </div>
  )
}
