import type { SearchEntry } from './types'
import home from './home.json'
import game from './game.json'
import stages from './stages.json'
import stagesSelenea from './stages-selenea.json'
import systems from './systems.json'
import exploration from './exploration.json'
import lore from './lore.json'
import rares from './rares.json'
import endings from './endings.json'
import dlc from './dlc.json'
import studio from './studio.json'
import secrets from './secrets.json'
import specs from './specs.json'
import sources from './sources.json'

export const NAV_SECTIONS = [
  { id: 'accueil', label: 'Accueil' },
  { id: 'le-jeu', label: 'Le jeu' },
  { id: 'etapes', label: 'Étapes TI' },
  { id: 'systemes', label: 'Systèmes' },
  { id: 'exploration', label: 'Exploration' },
  { id: 'lore', label: 'Lore' },
  { id: 'rares', label: 'Rares' },
  { id: 'fins', label: 'Fins' },
  { id: 'dlc', label: 'DLC' },
  { id: 'studio', label: 'Studio' },
  { id: 'secrets', label: 'Secrets' },
  { id: 'specs', label: 'Specs' },
  { id: 'sources', label: 'Sources' },
] as const

function entry(
  id: string,
  title: string,
  section: string,
  sectionId: string,
  blurb: string,
  keywords: string[] = [],
): SearchEntry {
  return { id, title, section, sectionId, blurb, keywords }
}

export const searchEntries: SearchEntry[] = [
  entry('home', home.title, 'Accueil', 'accueil', home.pitch, [
    'prime',
    'portal',
    'pitch',
    'steam',
    'skeo',
    'selenea',
    'humble',
    'toxicity',
  ]),
  ...game.pillars.map((p, i) =>
    entry(`game-${i}`, p.title, 'Le jeu', 'le-jeu', p.body, [
      'survival',
      'coop',
      'crafting',
      p.title.toLowerCase(),
    ]),
  ),
  ...stages.stages.map((s) =>
    entry(`stage-${s.id}`, s.name, 'Étapes TI', 'etapes', s.description, [
      'ti',
      'terraformation',
      '4 tti',
      s.threshold,
      s.name.toLowerCase(),
      s.id === 'complete' ? 'complete 4 tti' : '',
    ].filter(Boolean)),
  ),
  ...stagesSelenea.stages.map((s) =>
    entry(`sel-${s.id}`, `Selenea — ${s.name}`, 'Étapes TI', 'etapes', s.description, [
      'selenea',
      'lune',
      '5 tti',
      'ti',
      s.threshold,
      s.name.toLowerCase(),
    ]),
  ),
  ...systems.pillars.map((p) =>
    entry(`sys-${p.id}`, p.name, 'Systèmes', 'systemes', p.body, [
      'heat',
      'oxygène',
      'pression',
      'biomasse',
      p.id,
    ]),
  ),
  entry('rockets', systems.rockets.title, 'Systèmes', 'systemes', systems.rockets.body, [
    'rocket',
    'multiplicateur',
    'interplanetary',
    'voyage',
  ]),
  entry('meteors', systems.meteors.title, 'Systèmes', 'systemes', systems.meteors.body, [
    'météore',
    'meteor',
  ]),
  entry('fuses', systems.fuses.title, 'Systèmes', 'systemes', systems.fuses.body, [
    'fuse',
    'boost',
  ]),
  ...systems.extras.map((x, i) =>
    entry(`sys-extra-${i}`, x.title, 'Systèmes', 'systemes', x.body, [
      'drones',
      't3',
      'underground',
      'souterrain',
      'pod',
      'skeo',
      'interplanetary',
      'rocket',
    ]),
  ),
  entry('hud', exploration.hud.title, 'Exploration', 'exploration', exploration.hud.body, [
    'coords',
    'hud',
    'carte',
    'map unlock',
  ]),
  entry('map', exploration.map.title, 'Exploration', 'exploration', exploration.map.body, [
    'carte',
    'map',
    'brouillard',
    'unlock',
  ]),
  ...exploration.biomes.map((b, i) =>
    entry(`biome-${i}`, b.name, 'Exploration', 'exploration', b.blurb, [
      'biome',
      'cascades',
      'skeo',
      b.name.toLowerCase(),
    ]),
  ),
  entry('wrecks', exploration.wrecks.title, 'Exploration', 'exploration', exploration.wrecks.body, [
    'épave',
    'wreck',
    'cascades',
    'skeo',
  ]),
  ...lore.entries.map((e, i) =>
    entry(`lore-${i}`, e.name, 'Lore', 'lore', e.body, [
      'warden',
      'sentinel',
      'miju',
      'ikhlas',
      'starform',
      'robotics',
      'skeo',
      'canon',
      'communauté',
      e.confidence ?? '',
    ].filter(Boolean)),
  ),
  ...rares.categories.map((c, i) =>
    entry(`rare-${i}`, c.name, 'Rares', 'rares', c.body, [
      'golden',
      'crate',
      'seed',
      'effigie',
      'pleom',
      'iterra',
      'detector',
      'warden',
      'communauté',
    ]),
  ),
  ...endings.routes.map((r) =>
    entry(`end-${r.id}`, r.name, 'Fins', 'fins', r.summary, [
      'clés',
      'keys',
      '10',
      '13',
      'subversion',
      'paradise',
      'ancient',
      'warden',
      'detector',
    ]),
  ),
  ...dlc.timeline.map((t, i) =>
    entry(`dlc-${i}`, t.title, 'DLC', 'dlc', t.body, [
      'humble',
      'toxicity',
      'moons',
      'selenea',
      'skeo',
      '2.0',
      'console',
      'ps5',
      'xbox',
      'underground',
      'pod',
    ]),
  ),
  ...dlc.playableBodies.map((b, i) =>
    entry(`body-${i}`, b.name, 'DLC', 'dlc', `${b.kind} — ${b.note}`, [
      'prime',
      'humble',
      'toxicity',
      'selenea',
      'skeo',
      'lune',
      'planète',
      b.name.toLowerCase(),
    ]),
  ),
  entry('studio', studio.studio, 'Studio', 'studio', studio.ost, [
    'benjamin young',
    'ost',
    'miju',
  ]),
  ...secrets.items.map((s, i) =>
    entry(`secret-${i}`, s.title, 'Secrets', 'secrets', s.body, [
      'easter',
      'communauté',
      'secret',
      'starform',
      'cascades',
      'golden',
    ]),
  ),
  entry('achievements', 'Achievements', 'Specs', 'specs', specs.achievements.note, [
    '55',
    'succès',
    'trophy',
  ]),
  ...sources.links.map((l, i) =>
    entry(`src-${i}`, l.name, 'Sources', 'sources', l.why, [
      'lien',
      'steam',
      'wiki',
      'skeo',
      'fandom',
      'aroged',
      'gamerant',
    ]),
  ),
]

export function searchContent(query: string): SearchEntry[] {
  const q = query.trim().toLowerCase()
  if (!q) return []
  const terms = q.split(/\s+/)
  return searchEntries
    .map((e) => {
      const hay = `${e.title} ${e.blurb} ${e.section} ${e.keywords.join(' ')}`.toLowerCase()
      const score = terms.reduce((acc, t) => acc + (hay.includes(t) ? 1 : 0), 0)
      return { e, score }
    })
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score || a.e.title.localeCompare(b.e.title))
    .map((x) => x.e)
    .slice(0, 24)
}
