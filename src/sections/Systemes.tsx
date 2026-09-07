import systems from '../data/systems.json'
import { GlassPanel } from '../components/GlassPanel'
import { Section } from '../components/Section'

export function Systemes() {
  return (
    <Section id={systems.id} title={systems.title} eyebrow="03 · Guide · Systèmes">
      <p className="mb-8 max-w-3xl">{systems.intro}</p>
      <div className="grid gap-4 md:grid-cols-2">
        {systems.pillars.map((p) => (
          <GlassPanel key={p.id} as="article">
            <h3 className="font-headline text-xl font-semibold">
              <span aria-hidden className="mr-2">
                {p.icon}
              </span>
              {p.name}
            </h3>
            <p className="mt-2 text-sm">{p.body}</p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-xs text-cream/65">
              {p.tips.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </GlassPanel>
        ))}
      </div>
      <div className="mt-4 grid gap-4 lg:grid-cols-3">
        {[systems.rockets, systems.meteors, systems.fuses].map((block) => (
          <GlassPanel key={block.title} as="article">
            <h3 className="font-headline text-lg font-semibold">{block.title}</h3>
            <p className="mt-2 text-sm">{block.body}</p>
            <ul className="mt-3 space-y-1 text-xs text-cream/60">
              {block.notes.map((n) => (
                <li key={n}>• {n}</li>
              ))}
            </ul>
          </GlassPanel>
        ))}
      </div>
      <div className="mt-4 grid gap-4 lg:grid-cols-3">
        {systems.extras.map((block) => (
          <GlassPanel key={block.title} as="article">
            <h3 className="font-headline text-lg font-semibold">{block.title}</h3>
            <p className="mt-2 text-sm">{block.body}</p>
            <ul className="mt-3 space-y-1 text-xs text-cream/60">
              {block.notes.map((n) => (
                <li key={n}>• {n}</li>
              ))}
            </ul>
          </GlassPanel>
        ))}
      </div>
    </Section>
  )
}
