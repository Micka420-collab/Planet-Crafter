import studio from '../data/studio.json'
import { GlassPanel } from '../components/GlassPanel'
import { Section } from '../components/Section'

export function Studio() {
  return (
    <Section id={studio.id} title={studio.title} eyebrow="06 · Studio">
      <div className="grid gap-4 md:grid-cols-2">
        <GlassPanel>
          <p className="label-mono mb-5">Fiche studio</p>
          <dl className="space-y-3 font-mono text-sm">
            {studio.facts.map((f) => (
              <div
                key={f.label}
                className="flex flex-col gap-0.5 border-b border-cream/8 pb-3 last:border-0 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4"
              >
                <dt className="text-xs uppercase tracking-wider text-cream/45">{f.label}</dt>
                <dd className="text-cream sm:text-right">{f.value}</dd>
              </div>
            ))}
          </dl>
        </GlassPanel>
        <GlassPanel>
          <p className="label-mono mb-5">Bande-originale</p>
          <p className="text-sm text-cream/78">{studio.ost}</p>
          <p className="mt-4 text-xs text-cream/55">{studio.note}</p>
        </GlassPanel>
      </div>
    </Section>
  )
}
