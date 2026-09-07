import rares from '../data/rares.json'
import { GlassPanel } from '../components/GlassPanel'
import { Section } from '../components/Section'

export function Rares() {
  return (
    <Section id={rares.id} title={rares.title} eyebrow="05 · Collection">
      <p className="mb-8 max-w-3xl">{rares.intro}</p>
      <div className="grid gap-4 md:grid-cols-2">
        {rares.categories.map((c) => (
          <GlassPanel key={c.name} as="article">
            <h3 className="font-headline text-xl font-semibold">{c.name}</h3>
            <p className="mt-2 text-sm">{c.body}</p>
          </GlassPanel>
        ))}
      </div>
      <p className="mt-6 text-sm text-cream/60">{rares.advice}</p>
    </Section>
  )
}
