import dlc from '../data/dlc.json'
import { GlassPanel } from '../components/GlassPanel'
import { Section } from '../components/Section'

export function DLC() {
  return (
    <Section id={dlc.id} title={dlc.title} eyebrow="02 · Mondes">
      <p className="mb-8 max-w-3xl">{dlc.intro}</p>
      <ol className="relative space-y-4 border-l border-cream/15 pl-6">
        {dlc.timeline.map((t) => (
          <li key={t.title + t.date} className="relative">
            <span
              className="absolute -left-[1.6rem] top-1.5 h-3 w-3 rounded-full bg-teal shadow-[0_0_12px_rgba(87,217,196,0.5)]"
              aria-hidden
            />
            <GlassPanel className="!p-4">
              <p className="text-xs uppercase tracking-wider text-cream/45">{t.date}</p>
              <h3 className="font-headline text-lg font-semibold">{t.title}</h3>
              <p className="mt-1 text-sm text-cream/75">{t.body}</p>
            </GlassPanel>
          </li>
        ))}
      </ol>

      <h3 className="mb-3 mt-8 font-headline text-lg font-semibold">Corps jouables</h3>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {dlc.playableBodies.map((b) => (
          <GlassPanel key={b.name} className="!p-4">
            <p className="font-medium">{b.name}</p>
            <p className="text-xs uppercase tracking-wide text-cream/45">{b.kind}</p>
            <p className="mt-1 text-xs text-cream/65">{b.note}</p>
          </GlassPanel>
        ))}
      </div>

      <p className="mt-6 text-sm text-cream/55">{dlc.tip}</p>
    </Section>
  )
}
