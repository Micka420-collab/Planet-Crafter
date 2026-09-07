import game from '../data/game.json'
import { GlassPanel } from '../components/GlassPanel'
import { Section } from '../components/Section'

export function LeJeu() {
  return (
    <Section id={game.id} title={game.title} eyebrow="03 · Guide">
      <p className="mb-8 max-w-3xl text-base md:text-lg">{game.intro}</p>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {game.pillars.map((p) => (
          <GlassPanel key={p.title} as="article">
            <h3 className="font-headline text-xl font-semibold">{p.title}</h3>
            <p className="mt-2 text-sm">{p.body}</p>
          </GlassPanel>
        ))}
      </div>
      <GlassPanel className="mt-6">
        <h3 className="font-headline text-lg font-semibold">Boucle de progression</h3>
        <ol className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-5">
          {game.loop.map((step, i) => (
            <li key={step} className="rounded-xl border border-cream/10 bg-void/40 p-3 text-sm">
              <span className="text-[color:var(--accent)]">{i + 1}.</span> {step}
            </li>
          ))}
        </ol>
      </GlassPanel>
    </Section>
  )
}
