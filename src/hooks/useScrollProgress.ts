import { useEffect, useState } from 'react'

export function useScrollProgress(): number {
  const [p, setP] = useState(0)
  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement
      const max = doc.scrollHeight - doc.clientHeight
      setP(max > 0 ? doc.scrollTop / max : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return p
}
