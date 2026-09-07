import secrets from '../data/secrets.json'
import { GlassPanel } from '../components/GlassPanel'
import { Section } from '../components/Section'

export function Secrets() {
  return (
    <Section id={secrets.id} title={secrets.title} eyebrow="05 · Secrets">
      <p className="mb-8 max-w-3xl">{secrets.intro}</p>
      <div className="grid gap-4 md:grid-cols-2">
        {secrets.items.map((item) => (
          <GlassPanel key={item.title} as="article">
            <div className="mb-2 inline-flex rounded-full border border-cream/15 px-2 py-0.5 text-[10px] uppercase tracking-wider text-cream/55">
              {item.source}
            </div>
            <h3 className="font-headline text-lg font-semibold">{item.title}</h3>
            <p className="mt-2 text-sm">{item.body}</p>
          </GlassPanel>
        ))}
      </div>
    </Section>
  )
}
