/** Original decorative planet — no game assets */
export function PlanetSVG({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 420 420"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <radialGradient id="pcore" cx="35%" cy="30%" r="65%">
          <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.95" />
          <stop offset="45%" stopColor="var(--haze)" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#1a0a08" stopOpacity="1" />
        </radialGradient>
        <linearGradient id="ring" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#7ec8ff" stopOpacity="0.15" />
          <stop offset="50%" stopColor="#fff" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#3cb37a" stopOpacity="0.2" />
        </linearGradient>
      </defs>
      <ellipse cx="210" cy="210" rx="188" ry="64" fill="none" stroke="url(#ring)" strokeWidth="10" opacity="0.55" transform="rotate(-18 210 210)" />
      <circle cx="210" cy="210" r="132" fill="url(#pcore)" />
      <path
        d="M110 200c30-40 70-55 100-40 40 20 70 10 100-20"
        fill="none"
        stroke="#000"
        strokeOpacity="0.25"
        strokeWidth="18"
        strokeLinecap="round"
      />
      <path
        d="M130 250c40 25 90 30 140 10"
        fill="none"
        stroke="#fff"
        strokeOpacity="0.12"
        strokeWidth="12"
        strokeLinecap="round"
      />
      <circle cx="160" cy="170" r="10" fill="#fff" opacity="0.15" />
    </svg>
  )
}
