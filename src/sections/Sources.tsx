import sources from '../data/sources.json'
import { GlassPanel } from '../components/GlassPanel'
import { Section } from '../components/Section'
import { SteamCTA } from '../components/SteamCTA'

export function Sources() {
  return (
    <Section id={sources.id} title={sources.title} eyebrow="Dossier · Sources">
      <p className="mb-8 max-w-3xl">{sources.intro}</p>
      <ul className="grid gap-3 md:grid-cols-2">
        {sources.links.map((l) => (
          <li key={l.url}>
            <GlassPanel className="h-full !p-4">
              <a
                href={l.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-headline text-lg font-semibold text-teal hover:underline"
              >
                {l.name} ↗
              </a>
              <p className="mt-2 text-sm text-cream/70">{l.why}</p>
            </GlassPanel>
          </li>
        ))}
      </ul>
      <div className="mt-8">
        <SteamCTA />
      </div>
    </Section>
  )
}
