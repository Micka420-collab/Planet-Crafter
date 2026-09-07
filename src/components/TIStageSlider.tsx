import stagesData from '../data/stages.json'
import { useThemeStage } from '../hooks/useThemeStage'
import { GlassPanel } from './GlassPanel'

export function TIStageSlider() {
  const { stageIndex, setStageIndex, stage } = useThemeStage()
  const stages = stagesData.stages

  return (
    <GlassPanel className="mb-8 min-w-0 overflow-hidden">
      <div className="flex min-w-0 flex-col gap-4">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div className="min-w-0 flex-1">
            <p className="label-mono text-cream/50">Simulateur d&apos;étape TI</p>
            <p className="font-headline mt-1 break-words text-xl font-semibold text-cream sm:text-2xl">
              {stage.name}
            </p>
            <p className="break-words font-mono text-xs text-teal sm:text-sm">
              Seuil : {stage.threshold}
              {stage.thresholdNote ? ` — ${stage.thresholdNote}` : ''}
            </p>
          </div>
          <p className="shrink-0 font-mono text-xs text-cream/50">
            {stageIndex + 1} / {stages.length}
          </p>
        </div>
        <label className="sr-only" htmlFor="ti-slider">
          Étape de terraformation
        </label>
        <div className="slider-ti-wrap">
          <input
            id="ti-slider"
            className="slider-ti"
            type="range"
            min={0}
            max={stages.length - 1}
            step={1}
            value={stageIndex}
            onChange={(e) => setStageIndex(Number(e.target.value))}
            aria-valuetext={stage.name}
          />
        </div>
        <div className="flex justify-between gap-2 font-mono text-[10px] text-cream/40 sm:text-[11px]">
          <span className="min-w-0">0 Ti · stérile</span>
          <span className="min-w-0 text-right">4 TTi · achevé</span>
        </div>
        <p className="text-sm text-cream/75">{stage.description}</p>
        <ul className="flex flex-wrap gap-2">
          {stage.unlocks.map((u) => (
            <li
              key={u}
              className="max-w-full break-words rounded-full border border-cream/15 bg-cream/5 px-3 py-1.5 font-mono text-xs text-cream/80"
            >
              {u}
            </li>
          ))}
        </ul>
      </div>
    </GlassPanel>
  )
}
