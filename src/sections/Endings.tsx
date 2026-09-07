import endings from '../data/endings.json'
import { GlassPanel } from '../components/GlassPanel'
import { Section } from '../components/Section'

export function Endings() {
  return (
    <Section id={endings.id} title={endings.title} eyebrow="Late game">
      <p className="mb-6 max-w-3xl">{endings.intro}</p>
      <div
        className="mb-8 rounded-2xl border border-rose-400/40 bg-rose-500/10 px-4 py-4 text-sm text-rose-50"
        role="alert"
      >
        {endings.warning}
      </div>
      <div className="grid gap-4 lg:grid-cols-3">
        {endings.routes.map((r) => (
          <GlassPanel key={r.id} as="article">
            <h3 className="font-headline text-xl font-semibold">{r.name}</h3>
            <p className="mt-1 text-xs uppercase tracking-wider text-[color:var(--accent)]">{r.keys}</p>
            <p className="mt-3 text-sm">{r.summary}</p>
            <ol className="mt-3 list-decimal space-y-1 pl-5 text-xs text-white/65">
              {r.steps.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ol>
          </GlassPanel>
        ))}
      </div>
      <GlassPanel className="mt-6">
        <h3 className="font-headline text-lg font-semibold">Checklist anti-spoiler technique</h3>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-white/70">
          {endings.checklist.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
      </GlassPanel>
    </Section>
  )
}
