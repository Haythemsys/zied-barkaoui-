'use client'
import { useState } from 'react'
import Image from 'next/image'
import { GALLERY, CATEGORIES, type Category } from '@/lib/data'
import { cn } from '@/lib/cn'

interface Props {
  category?: Category
  limit?: number
}

export default function GalleryGrid({ category, limit }: Props) {
  const [filter, setFilter] = useState<Category | 'all'>(category ?? 'all')
  const [lightbox, setLightbox] = useState<number | null>(null)

  const items = GALLERY
    .filter(img => filter === 'all' || img.category === filter)
    .slice(0, limit)

  const allItems = GALLERY.filter(img => filter === 'all' || img.category === filter)

  const lb = lightbox !== null ? allItems[lightbox] : null
  const prev = () => setLightbox(l => l !== null ? (l - 1 + allItems.length) % allItems.length : null)
  const next = () => setLightbox(l => l !== null ? (l + 1) % allItems.length : null)

  return (
    <>
      {/* Filter bar — only show if no fixed category */}
      {!category && (
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <button onClick={() => setFilter('all')} className={cn('filter-btn', filter === 'all' && 'active')}>
            الكل — Tout
          </button>
          {CATEGORIES.map(cat => (
            <button
              key={cat.key}
              onClick={() => setFilter(cat.key)}
              className={cn('filter-btn', filter === cat.key && 'active')}
            >
              {cat.ar}
            </button>
          ))}
        </div>
      )}

      {/* Masonry gallery */}
      <div className="masonry">
        {items.map((img, i) => (
          <div
            key={img.file}
            className="masonry-item cinematic cursor-pointer group"
            onClick={() => {
              const idx = allItems.findIndex(x => x.file === img.file)
              setLightbox(idx)
            }}
          >
            <Image
              src={`/images/${img.file}`}
              alt={img.labelFr}
              width={600}
              height={450}
              className="w-full h-auto"
              loading={i < 6 ? 'eager' : 'lazy'}
            />
            <div className="absolute inset-0 z-10 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white text-sm font-bold leading-tight">{img.labelAr}</span>
              <span className="text-olive-bright text-xs font-body mt-0.5">{img.labelFr}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lb && (
        <div
          className="lightbox"
          onClick={(e) => { if (e.target === e.currentTarget) setLightbox(null) }}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-4 left-4 text-white text-2xl w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            ✕
          </button>
          <button
            onClick={next}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-3xl w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            ‹
          </button>
          <button
            onClick={prev}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-3xl w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            ›
          </button>
          <Image
            src={`/images/${lb.file}`}
            alt={lb.labelFr}
            width={1200}
            height={900}
            className="max-w-[90vw] max-h-[80vh] object-contain rounded-xl"
            priority
          />
          <div className="text-center">
            <p className="text-white font-bold">{lb.labelAr}</p>
            <p className="text-text-muted text-sm font-body">{lb.labelFr}</p>
          </div>
        </div>
      )}
    </>
  )
}
