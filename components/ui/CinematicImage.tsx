import Image from 'next/image'
import { cn } from '@/lib/cn'

interface Props {
  src: string
  alt: string
  className?: string
  imgClassName?: string
  fill?: boolean
  width?: number
  height?: number
  priority?: boolean
  variant?: 'default' | 'hero' | 'card'
  overlay?: boolean
  children?: React.ReactNode
}

export default function CinematicImage({
  src, alt, className, imgClassName, fill, width, height,
  priority, variant = 'default', overlay = true, children
}: Props) {
  return (
    <div
      className={cn(
        'cinematic',
        variant === 'hero' && 'cinematic-hero',
        className
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill={fill}
        width={!fill ? (width ?? 800) : undefined}
        height={!fill ? (height ?? 600) : undefined}
        priority={priority}
        className={cn('object-cover', imgClassName)}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />
      {children && (
        <div className="absolute inset-0 z-10 flex flex-col justify-end p-5">
          {children}
        </div>
      )}
    </div>
  )
}
