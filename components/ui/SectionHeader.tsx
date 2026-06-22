import { cn } from '@/lib/cn'

interface Props {
  badge?: string
  titleAr: string
  titleFr?: string
  subAr?: string
  subFr?: string
  center?: boolean
  className?: string
}

export default function SectionHeader({ badge, titleAr, titleFr, subAr, subFr, center = true, className }: Props) {
  return (
    <div className={cn('mb-12', center && 'text-center', className)}>
      {badge && <span className="sec-badge">{badge}</span>}
      <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-black text-text-primary leading-tight">
        {titleAr}
      </h2>
      {titleFr && (
        <p className="display-fr text-[clamp(1rem,2.5vw,1.5rem)] mt-1 mb-3">
          {titleFr}
        </p>
      )}
      <div className={cn('divider-olive', center && 'mx-auto')} />
      {subAr && (
        <p className="text-text-muted text-[clamp(0.9rem,2vw,1.05rem)] leading-relaxed max-w-2xl mx-auto">
          {subAr}
        </p>
      )}
      {subFr && (
        <p className="text-text-ghost text-sm font-body mt-1 max-w-2xl mx-auto font-light">
          {subFr}
        </p>
      )}
    </div>
  )
}
