/** Fixed cinematic backdrop: amber/teal glows + technical grid + stage haze */
export function Atmosphere() {
  return (
    <div className="atmosphere" aria-hidden>
      <div className="atmosphere-glow-amber" />
      <div className="atmosphere-glow-teal" />
      <div className="atmosphere-stage-haze" />
      <div className="atmosphere-grid" />
    </div>
  )
}
