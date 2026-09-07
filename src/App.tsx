import { useCallback, useEffect, useMemo, useState } from 'react'
import stagesData from './data/stages.json'
import type { TIStage } from './data/types'
import { Footer } from './components/Footer'
import { Nav } from './components/Nav'
import { Particles } from './components/Particles'
import { SearchPalette } from './components/SearchPalette'
import { ThemeStageContext } from './hooks/useThemeStage'
import { useScrollProgress } from './hooks/useScrollProgress'
import { useReducedMotion } from './hooks/useReducedMotion'
import { Hero } from './sections/Hero'
import { LeJeu } from './sections/LeJeu'
import { Etapes } from './sections/Etapes'
import { Systemes } from './sections/Systemes'
import { Exploration } from './sections/Exploration'
import { Lore } from './sections/Lore'
import { Rares } from './sections/Rares'
import { Endings } from './sections/Endings'
import { DLC } from './sections/DLC'
import { Studio } from './sections/Studio'
import { Secrets } from './sections/Secrets'
import { Specs } from './sections/Specs'
import { Sources } from './sections/Sources'

function stageFromScroll(progress: number, count: number): number {
  return Math.min(count - 1, Math.max(0, Math.round(progress * (count - 1))))
}

export default function App() {
  const stages = stagesData.stages as TIStage[]
  const scrollProgress = useScrollProgress()
  const reduced = useReducedMotion()
  const [manual, setManual] = useState(false)
  const [stageIndex, setStageIndexState] = useState(0)
  const [searchOpen, setSearchOpen] = useState(false)

  const setStageIndex = useCallback((i: number) => {
    setManual(true)
    setStageIndexState(i)
  }, [])

  useEffect(() => {
    if (manual || reduced) return
    setStageIndexState(stageFromScroll(scrollProgress, stages.length))
  }, [scrollProgress, manual, reduced, stages.length])

  const stage = stages[stageIndex] ?? stages[0]

  useEffect(() => {
    const root = document.documentElement
    root.style.setProperty('--sky', stage.sky)
    root.style.setProperty('--haze', stage.haze)
    root.style.setProperty('--accent', stage.accent)
    root.style.setProperty('--fog', `color-mix(in oklab, ${stage.haze} 28%, transparent)`)
  }, [stage])

  const ctx = useMemo(
    () => ({ stageIndex, setStageIndex, stage, stages }),
    [stageIndex, setStageIndex, stage, stages],
  )

  return (
    <ThemeStageContext.Provider value={ctx}>
      <a className="skip-link" href="#accueil">
        Aller au contenu
      </a>
      <div className="grain sky-wash relative min-h-screen">
        <Particles />
        <Nav onOpenSearch={() => setSearchOpen(true)} />
        <main>
          <Hero />
          <LeJeu />
          <Etapes />
          <Systemes />
          <Exploration />
          <Lore />
          <Rares />
          <Endings />
          <DLC />
          <Studio />
          <Secrets />
          <Specs />
          <Sources />
        </main>
        <Footer />
        <SearchPalette open={searchOpen} onClose={() => setSearchOpen(false)} />
      </div>
    </ThemeStageContext.Provider>
  )
}
