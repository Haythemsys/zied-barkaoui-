import { VIDEOS, CATEGORIES, CONTACT } from '@/lib/data'
import SectionHeader from '@/components/ui/SectionHeader'
import Link from 'next/link'

export const metadata = {
  title: 'فيديوهات — Vidéos | Barkaoui Déco',
  description: 'شاهد أعمالنا بالصوت والصورة — فيديوهات ميدانية من مشاريع زياد البركاوي',
}

export default function VideosPage() {
  return (
    <div className="min-h-screen bg-void pt-24">
      <section className="section-pad">
        <div className="container-site px-5">
          <SectionHeader
            badge="فيديوهات — Vidéos"
            titleAr="أعمالنا بالصوت والصورة"
            titleFr="Nos réalisations en vidéo"
            subAr="شاهد كيف ننجز المشاريع على أرض الواقع — احترافية ودقة في كل خطوة"
            subFr="Découvrez notre savoir-faire en action sur nos chantiers"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {VIDEOS.map((v, i) => {
              const cat = CATEGORIES.find(c => c.key === v.category)
              return (
                <div key={v.file} className="card-dark overflow-hidden group">
                  <div className="relative bg-[#0d0d0d]">
                    <video
                      controls
                      preload="metadata"
                      className="w-full max-h-[260px] object-contain"
                    >
                      <source src={`/videos/${v.file}`} type="video/mp4" />
                      متصفحك لا يدعم تشغيل الفيديو
                    </video>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-lg">{cat?.icon}</span>
                      <span className="sec-badge" style={{ marginBottom: 0, fontSize: '0.65rem' }}>
                        {cat?.fr}
                      </span>
                    </div>
                    <h3 className="text-white font-bold">{v.titleAr}</h3>
                    <p className="text-text-muted text-sm font-body font-light mt-1">{v.titleFr}</p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Link to portfolio */}
          <div className="text-center border-t border-[rgba(163,184,71,0.12)] pt-10">
            <p className="text-text-muted mb-4">شاهد أيضاً معرض الصور الكامل</p>
            <Link href="/portfolio" className="btn btn-primary px-8 py-3">
              معرض الأعمال — Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-deep border-t border-[rgba(163,184,71,0.12)]">
        <div className="container-site px-5 text-center">
          <h2 className="text-3xl font-black text-white mb-3">أعجبك العمل؟</h2>
          <p className="text-text-muted mb-6">اتصل بنا للحصول على عرض سعر مجاني</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={`tel:${CONTACT.phone}`} className="btn btn-primary text-base px-8 py-3">
              📞 {CONTACT.phoneFmt}
            </a>
            <a href={CONTACT.whatsapp} target="_blank" rel="noopener" className="btn btn-wa text-base px-8 py-3">
              💬 WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
