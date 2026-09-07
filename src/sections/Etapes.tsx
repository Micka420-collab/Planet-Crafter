import stages from '../data/stages.json'
import stagesSelenea from '../data/stages-selenea.json'
import { GlassPanel } from '../components/GlassPanel'
import { Section } from '../components/Section'
import { TIStageSlider } from '../components/TIStageSlider'
import { useThemeStage } from '../hooks/useThemeStage'
import { cn } from '../lib/cn'

export function Etapes() {
  const { stageIndex, setStageIndex } = useThemeStage()
  return (
    <Section id={stages.id} title={stages.title} eyebrow="Progression">
      <p className="mb-3 max-w-3xl">{stages.intro}</p>
      <p className="mb-2 text-sm text-white/55">{stages.unitNote}</p>
      <p className="mb-8 rounded-xl border border-amber-400/30 bg-amber-400/10 px-4 py-3 text-sm text-amber-100">
        {stages.variance}
      </p>
      <TIStageSlider />
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {stages.stages.map((s, i) => (
          <button
            key={s.id}
            type="button"
            onClick={() => setStageIndex(i)}
            className={cn(
              'rounded-2xl border p-4 text-left transition',
              i === stageIndex
                ? 'border-[color:var(--accent)] bg-white/10'
                : 'border-white/10 bg-white/5 hover:bg-white/8',
            )}
          >
            <div className="flex items-center justify-between gap-2">
              <span className="font-headline font-semibold">{s.name}</span>
              <span className="text-xs text-white/50">{s.threshold}</span>
            </div>
            <p className="mt-2 line-clamp-3 text-xs text-white/65">{s.description}</p>
            {'thresholdNote' in s && s.thresholdNote ? (
              <p className="mt-2 text-[10px] text-amber-200/80">{s.thresholdNote}</p>
            ) : null}
          </button>
        ))}
      </div>

      <GlassPanel className="mt-8" as="article">
        <h3 className="font-headline text-lg font-semibold">
          Variante — {stagesSelenea.bodyName} ({stagesSelenea.kind})
        </h3>
        <p className="mt-2 text-sm text-white/70">{stagesSelenea.intro}</p>
        <p className="mt-1 text-xs text-white/45">
          Réf. data : {stages.planetVariants.selenea.file} · {stages.planetVariants.selenea.note}
        </p>
        <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {stagesSelenea.stages.map((s) => (
            <div key={s.id} className="rounded-xl border border-white/10 bg-white/5 p-3">
              <div className="flex items-center justify-between gap-2">
                <span className="text-sm font-medium">{s.name}</span>
                <span className="text-[10px] text-white/50">{s.threshold}</span>
              </div>
              <p className="mt-1 line-clamp-2 text-[11px] text-white/60">{s.description}</p>
            </div>
          ))}
        </div>
      </GlassPanel>

      <GlassPanel className="mt-6">
        <p className="text-sm">
          Astuce : le slider (étapes Prime) modifie les variables CSS{' '}
          <code className="text-[color:var(--accent)]">--sky</code>,{' '}
          <code className="text-[color:var(--accent)]">--haze</code> et{' '}
          <code className="text-[color:var(--accent)]">--accent</code> pour toute la page.
        </p>
      </GlassPanel>
    </Section>
  )
}
