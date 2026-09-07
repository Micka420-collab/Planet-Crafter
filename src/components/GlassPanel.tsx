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
  return <Tag className={cn('glass min-w-0 rounded-md p-4 sm:p-5 md:p-6', className)}>{children}</Tag>
}
