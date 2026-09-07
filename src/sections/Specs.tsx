import specs from '../data/specs.json'
import { GlassPanel } from '../components/GlassPanel'
import { Section } from '../components/Section'

export function Specs() {
  return (
    <Section id={specs.id} title={specs.title} eyebrow="Technique">
      <div className="grid gap-4 lg:grid-cols-3">
        <GlassPanel as="article">
          <h3 className="font-headline text-lg font-semibold">PC — minimum</h3>
          <p className="mt-1 text-xs text-white/45">{specs.pcSpecs.note}</p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-white/75">
            {specs.pcSpecs.minimum.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </GlassPanel>
        <GlassPanel as="article">
          <h3 className="font-headline text-lg font-semibold">PC — recommandé</h3>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-white/75">
            {specs.pcSpecs.recommended.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </GlassPanel>
        <GlassPanel as="article">
          <h3 className="font-headline text-lg font-semibold">
            {specs.achievements.count} achievements
          </h3>
          <p className="mt-2 text-sm">{specs.achievements.note}</p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {specs.achievements.categories.map((c) => (
              <li key={c} className="rounded-full border border-white/15 px-2.5 py-1 text-xs">
                {c}
              </li>
            ))}
          </ul>
        </GlassPanel>
      </div>
      <GlassPanel className="mt-4">
        <h3 className="font-headline text-lg font-semibold">Langues</h3>
        <p className="mt-2 text-sm text-white/70">{specs.languages.note}</p>
        <p className="mt-3 text-sm">{specs.languages.interface.join(' · ')}</p>
      </GlassPanel>
    </Section>
  )
}
