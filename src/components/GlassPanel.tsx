import type { ReactNode } from 'react'
import { cn } from '../lib/cn'

export function GlassPanel({
  children,
  className,
  as: Tag = 'div',
}: {
  children: ReactNode
  className?: string
  as?: 'div' | 'article' | 'section' | 'aside'
}) {
  return <Tag className={cn('glass rounded-2xl p-5 md:p-6', className)}>{children}</Tag>
}
