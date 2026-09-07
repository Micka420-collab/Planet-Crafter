import lore from '../data/lore.json'
import { GlassPanel } from '../components/GlassPanel'
import { Section } from '../components/Section'

const confidenceLabel: Record<string, string> = {
  canon: 'canon',
  community: 'communauté',
  uncertain: 'incertain',
}

export function Lore() {
  return (
    <Section id={lore.id} title={lore.title} eyebrow="04 · Lore">
      <p className="mb-8 max-w-3xl">{lore.intro}</p>
      <div className="grid gap-4 md:grid-cols-2">
        {lore.entries.map((e) => (
          <GlassPanel key={e.name} as="article">
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="font-headline text-xl font-semibold">{e.name}</h3>
              {'confidence' in e && e.confidence ? (
                <span className="rounded-full border border-cream/20 px-2 py-0.5 text-[10px] uppercase tracking-wide text-cream/55">
                  {confidenceLabel[e.confidence] ?? e.confidence}
                </span>
              ) : null}
            </div>
            <p className="mt-2 text-sm">{e.body}</p>
          </GlassPanel>
        ))}
      </div>
      <p className="mt-6 text-sm text-cream/55">{lore.tone}</p>
    </Section>
  )
}
