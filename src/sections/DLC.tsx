import dlc from '../data/dlc.json'
import { GlassPanel } from '../components/GlassPanel'
import { Section } from '../components/Section'

export function DLC() {
  return (
    <Section id={dlc.id} title={dlc.title} eyebrow="Chronologie">
      <p className="mb-8 max-w-3xl">{dlc.intro}</p>
      <ol className="relative space-y-4 border-l border-white/15 pl-6">
        {dlc.timeline.map((t) => (
          <li key={t.title + t.date} className="relative">
            <span
              className="absolute -left-[1.6rem] top-1.5 h-3 w-3 rounded-full bg-[color:var(--accent)] shadow-[0_0_12px_var(--accent)]"
              aria-hidden
            />
            <GlassPanel className="!p-4">
              <p className="text-xs uppercase tracking-wider text-white/45">{t.date}</p>
              <h3 className="font-headline text-lg font-semibold">{t.title}</h3>
              <p className="mt-1 text-sm text-white/75">{t.body}</p>
            </GlassPanel>
          </li>
        ))}
      </ol>

      <h3 className="mb-3 mt-8 font-headline text-lg font-semibold">Corps jouables</h3>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {dlc.playableBodies.map((b) => (
          <GlassPanel key={b.name} className="!p-4">
            <p className="font-medium">{b.name}</p>
            <p className="text-xs uppercase tracking-wide text-white/45">{b.kind}</p>
            <p className="mt-1 text-xs text-white/65">{b.note}</p>
          </GlassPanel>
        ))}
      </div>

      <p className="mt-6 text-sm text-white/55">{dlc.tip}</p>
    </Section>
  )
}
