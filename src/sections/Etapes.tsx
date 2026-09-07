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
    <Section id={stages.id} title={stages.title} eyebrow="01 · Terraformation">
      <p className="mb-3 max-w-3xl">{stages.intro}</p>
      <p className="mb-2 text-sm text-cream/55">{stages.unitNote}</p>
      <p className="mb-8 rounded-md border border-amber/40 bg-amber/10 px-4 py-3 text-sm text-cream">
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
              'rounded-md border p-4 text-left transition',
              i === stageIndex
                ? 'border-teal/60 bg-teal/10'
                : 'border-cream/10 bg-cream/5 hover:border-cream/20 hover:bg-cream/[0.07]',
            )}
          >
            <div className="flex items-center justify-between gap-2">
              <span className="font-headline font-semibold text-cream">{s.name}</span>
              <span className="text-xs text-cream/50">{s.threshold}</span>
            </div>
            <p className="mt-2 line-clamp-3 text-xs text-cream/65">{s.description}</p>
            {'thresholdNote' in s && s.thresholdNote ? (
              <p className="mt-2 text-[10px] text-amber">{s.thresholdNote}</p>
            ) : null}
          </button>
        ))}
      </div>

      <GlassPanel className="mt-8" as="article">
        <h3 className="font-headline text-lg font-semibold">
          Variante — {stagesSelenea.bodyName} ({stagesSelenea.kind})
        </h3>
        <p className="mt-2 text-sm text-cream/70">{stagesSelenea.intro}</p>
        <p className="mt-1 text-xs text-cream/45">
          Réf. data : {stages.planetVariants.selenea.file} · {stages.planetVariants.selenea.note}
        </p>
        <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {stagesSelenea.stages.map((s) => (
            <div key={s.id} className="rounded-md border border-cream/10 bg-cream/5 p-3">
              <div className="flex items-center justify-between gap-2">
                <span className="text-sm font-medium">{s.name}</span>
                <span className="text-[10px] text-cream/50">{s.threshold}</span>
              </div>
              <p className="mt-1 line-clamp-2 text-[11px] text-cream/60">{s.description}</p>
            </div>
          ))}
        </div>
      </GlassPanel>

    </Section>
  )
}
