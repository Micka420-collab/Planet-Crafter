import stagesData from '../data/stages.json'
import { useThemeStage } from '../hooks/useThemeStage'
import { GlassPanel } from './GlassPanel'

export function TIStageSlider() {
  const { stageIndex, setStageIndex, stage } = useThemeStage()
  const stages = stagesData.stages

  return (
    <GlassPanel className="mb-8">
      <div className="flex flex-col gap-4">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="label-mono text-cream/50">Simulateur d&apos;étape TI</p>
            <p className="font-headline mt-1 text-2xl font-semibold text-cream">{stage.name}</p>
            <p className="font-mono text-sm text-teal">
              Seuil : {stage.threshold}
              {stage.thresholdNote ? ` — ${stage.thresholdNote}` : ''}
            </p>
          </div>
          <p className="font-mono text-xs text-cream/50">
            {stageIndex + 1} / {stages.length}
          </p>
        </div>
        <label className="sr-only" htmlFor="ti-slider">
          Étape de terraformation
        </label>
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
        <div className="flex justify-between font-mono text-[11px] text-cream/40">
          <span>0 Ti · stérile</span>
          <span>4 TTi · achevé</span>
        </div>
        <p className="text-sm text-cream/75">{stage.description}</p>
        <ul className="flex flex-wrap gap-2">
          {stage.unlocks.map((u) => (
            <li
              key={u}
              className="rounded-full border border-cream/15 bg-cream/5 px-3 py-1 font-mono text-xs text-cream/80"
            >
              {u}
            </li>
          ))}
        </ul>
      </div>
    </GlassPanel>
  )
}
