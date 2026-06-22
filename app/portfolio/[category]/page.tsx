import { notFound } from 'next/navigation'
import Link from 'next/link'
import { CATEGORIES, type Category } from '@/lib/data'
import SectionHeader from '@/components/ui/SectionHeader'
import GalleryGrid from '@/components/ui/GalleryGrid'

interface Props { params: Promise<{ category: string }> }

export async function generateStaticParams() {
  return CATEGORIES.map(c => ({ category: c.key }))
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params
  const cat = CATEGORIES.find(c => c.key === category)
  if (!cat) notFound()

  return (
    <div className="min-h-screen bg-void pt-24">
      <section className="section-pad">
        <div className="container-site px-5">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-text-muted mb-8 font-body">
            <Link href="/" className="hover:text-olive-bright transition-colors">الرئيسية</Link>
            <span>/</span>
            <Link href="/portfolio" className="hover:text-olive-bright transition-colors">معرض الأعمال</Link>
            <span>/</span>
            <span className="text-olive-bright">{cat.ar}</span>
          </div>

          <SectionHeader
            badge={`${cat.icon} ${cat.fr}`}
            titleAr={cat.ar}
            titleFr={cat.fr}
            subAr={cat.descAr}
            subFr={cat.descFr}
          />

          <GalleryGrid category={cat.key as Category} />

          {/* Other categories */}
          <div className="mt-16 pt-10 border-t border-[rgba(163,184,71,0.12)]">
            <p className="text-center text-sm text-text-muted mb-6">اكتشف خدماتنا الأخرى</p>
            <div className="flex flex-wrap justify-center gap-3">
              {CATEGORIES.filter(c => c.key !== cat.key).map(c => (
                <Link key={c.key} href={`/portfolio/${c.key}`} className="btn btn-outline text-sm">
                  {c.icon} {c.ar}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
