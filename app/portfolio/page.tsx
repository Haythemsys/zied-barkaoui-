import SectionHeader from '@/components/ui/SectionHeader'
import GalleryGrid from '@/components/ui/GalleryGrid'

export const metadata = {
  title: 'معرض الأعمال — Portfolio | Barkaoui Déco',
  description: '36 صورة من إنجازات زياد البركاوي في الدهان والديكور — دهان، بلاكو، جبس، حدادة، بريكولاج',
}

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-void pt-24">
      <section className="section-pad">
        <div className="container-site px-5">
          <SectionHeader
            badge="معرض الأعمال — Portfolio"
            titleAr="كل الإنجازات"
            titleFr="Toutes nos réalisations"
            subAr="36 إنجاز حقيقي — صنّف حسب الخدمة أو تصفّح الكل"
            subFr="Filtrez par spécialité ou parcourez l'ensemble de nos réalisations"
          />
          <GalleryGrid />
        </div>
      </section>
    </div>
  )
}
