export type Confidence = 'canon' | 'community' | 'uncertain'

export type SearchEntry = {
  id: string
  title: string
  section: string
  sectionId: string
  keywords: string[]
  blurb: string
}

export type TIStage = {
  id: string
  name: string
  order: number
  threshold: string
  thresholdNote?: string
  sky: string
  haze: string
  accent: string
  description: string
  unlocks: string[]
}

export type ContentBlock = {
  title: string
  body: string
  bullets?: string[]
  warn?: string
  tip?: string
  /** Optional provenance label — UI may ignore until wired */
  confidence?: Confidence
}
