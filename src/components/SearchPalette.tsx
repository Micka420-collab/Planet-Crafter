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
      className="fixed inset-0 z-[80] flex items-start justify-center bg-black/70 p-4 pt-[12vh] backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label="Recherche"
      onClick={onClose}
    >
      <div
        className="glass w-full max-w-xl overflow-hidden rounded-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="border-b border-white/10 p-3">
          <input
            ref={inputRef}
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Rechercher étapes, lore, DLC, rares…"
            className="w-full bg-transparent text-base outline-none placeholder:text-white/40"
            aria-controls={listId}
            aria-autocomplete="list"
          />
        </div>
        <ul id={listId} className="max-h-[50vh] overflow-y-auto p-2" role="listbox">
          {q && results.length === 0 ? (
            <li className="px-3 py-4 text-sm text-white/55">Aucun résultat.</li>
          ) : null}
          {results.map((r) => (
            <li key={r.id} role="option">
              <a
                href={`#${r.sectionId}`}
                className="block rounded-xl px-3 py-3 hover:bg-white/5"
                onClick={onClose}
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="font-medium">{r.title}</span>
                  <span className="text-[10px] uppercase tracking-wider text-white/45">{r.section}</span>
                </div>
                <p className="mt-1 line-clamp-2 text-xs text-white/60">{r.blurb}</p>
              </a>
            </li>
          ))}
          {!q ? (
            <li className="px-3 py-4 text-sm text-white/55">
              Tapez pour filtrer toute l&apos;encyclopédie. Esc pour fermer.
            </li>
          ) : null}
        </ul>
      </div>
    </div>
  )
}
