import home from '../data/home.json'

export function Footer() {
  return (
    <footer className="border-t border-white/10 px-4 py-12 md:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 text-sm text-white/55">
        <p className="font-display text-lg text-white/80">Prime Portal</p>
        <p>{home.disclaimer}</p>
        <p>
          Fan site indépendant — aucune affiliation avec Miju Games ou Valve / Steam. Assets
          originaux (CSS/SVG) uniquement.
        </p>
        <p className="text-xs">
          © {new Date().getFullYear()} Prime Portal (fan). Contenu synthétisé ; seuils TI sujets
          aux patches.
        </p>
      </div>
    </footer>
  )
}
