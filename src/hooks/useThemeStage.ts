import { createContext, useContext } from 'react'
import type { TIStage } from '../data/types'

export type ThemeStageCtx = {
  stageIndex: number
  setStageIndex: (i: number) => void
  stage: TIStage
  stages: TIStage[]
}

export const ThemeStageContext = createContext<ThemeStageCtx | null>(null)

export function useThemeStage(): ThemeStageCtx {
  const ctx = useContext(ThemeStageContext)
  if (!ctx) throw new Error('useThemeStage outside provider')
  return ctx
}
