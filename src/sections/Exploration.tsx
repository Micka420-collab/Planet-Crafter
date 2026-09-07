import exploration from '../data/exploration.json'
import { GlassPanel } from '../components/GlassPanel'
import { Section } from '../components/Section'

export function Exploration() {
  return (
    <Section id={exploration.id} title={exploration.title} eyebrow="03 · Guide · Exploration">
      <p className="mb-8 max-w-3xl">{exploration.intro}</p>
      <div className="grid gap-4 lg:grid-cols-2">
        <GlassPanel as="article">
          <h3 className="font-headline text-xl font-semibold">{exploration.hud.title}</h3>
          <p className="mt-2 text-sm">{exploration.hud.body}</p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-xs text-cream/65">
            {exploration.hud.tips.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </GlassPanel>
        <GlassPanel as="article">
          <h3 className="font-headline text-xl font-semibold">{exploration.map.title}</h3>
          <p className="mt-2 text-sm">{exploration.map.body}</p>
        </GlassPanel>
      </div>
      <h3 className="mb-3 mt-8 font-headline text-lg font-semibold">Biomes (aperçu)</h3>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {exploration.biomes.map((b) => (
          <GlassPanel key={b.name} className="!p-4">
            <p className="font-medium">{b.name}</p>
            <p className="mt-1 text-xs text-cream/65">{b.blurb}</p>
          </GlassPanel>
        ))}
      </div>
      <GlassPanel className="mt-4" as="article">
        <h3 className="font-headline text-xl font-semibold">{exploration.wrecks.title}</h3>
        <p className="mt-2 text-sm">{exploration.wrecks.body}</p>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-xs text-cream/65">
          {exploration.wrecks.tips.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </GlassPanel>
    </Section>
  )
}
