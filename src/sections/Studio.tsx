import studio from '../data/studio.json'
import { GlassPanel } from '../components/GlassPanel'
import { Section } from '../components/Section'

export function Studio() {
  return (
    <Section id={studio.id} title={studio.title} eyebrow="Crédits">
      <div className="grid gap-4 md:grid-cols-2">
        <GlassPanel>
          <dl className="space-y-3">
            {studio.facts.map((f) => (
              <div key={f.label} className="flex flex-col gap-0.5 sm:flex-row sm:justify-between sm:gap-4">
                <dt className="text-xs uppercase tracking-wider text-white/45">{f.label}</dt>
                <dd className="font-medium sm:text-right">{f.value}</dd>
              </div>
            ))}
          </dl>
        </GlassPanel>
        <GlassPanel>
          <h3 className="font-headline text-lg font-semibold">Bande-originale</h3>
          <p className="mt-2 text-sm">{studio.ost}</p>
          <p className="mt-4 text-xs text-white/55">{studio.note}</p>
        </GlassPanel>
      </div>
    </Section>
  )
}
