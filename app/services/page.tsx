import Image from 'next/image'
import Link from 'next/link'
import { CATEGORIES, GALLERY } from '@/lib/data'
import SectionHeader from '@/components/ui/SectionHeader'

export const metadata = {
  title: 'الخدمات — Services | Barkaoui Déco',
  description: '5 تخصصات في الدهان والديكور — دهان، بلاكو، جبس ديكور، حدادة، بريكولاج',
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-void pt-24">
      <section className="section-pad">
        <div className="container-site px-5">
          <SectionHeader
            badge="خدماتنا — Nos Services"
            titleAr="خمسة تخصصات، معيار واحد: الإتقان"
            titleFr="Cinq spécialités, un seul standard : l'excellence"
            subAr="نقدم خدمات متكاملة للمنازل والمحلات التجارية بجودة لا تُساوم عليها"
          />

          <div className="space-y-20">
            {CATEGORIES.map((cat, idx) => {
              const imgs = GALLERY.filter(g => g.category === cat.key).slice(0, 4)
              const isEven = idx % 2 === 0

              return (
                <div
                  key={cat.key}
                  id={cat.key}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${!isEven ? 'lg:grid-flow-dense' : ''}`}
                >
                  {/* Text */}
                  <div className={!isEven ? 'lg:col-start-2' : ''}>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-4xl">{cat.icon}</span>
                      <div>
                        <h2 className="text-3xl font-black text-white leading-tight">{cat.ar}</h2>
                        <p className="font-display italic text-gold-light text-lg">{cat.fr}</p>
                      </div>
                    </div>
                    <div className="divider-olive" />
                    <p className="text-text-muted leading-relaxed mb-3">{cat.descAr}</p>
                    <p className="text-text-ghost text-sm font-body leading-relaxed mb-8">{cat.descFr}</p>

                    {/* Features list */}
                    <ul className="space-y-2 mb-8">
                      {getFeatures(cat.key).map((f, i) => (
                        <li key={i} className="flex items-center gap-3 text-sm text-text-muted">
                          <span className="w-5 h-5 rounded-full bg-olive-glow border border-olive-border flex items-center justify-center flex-shrink-0">
                            <span className="text-olive-bright text-xs">✓</span>
                          </span>
                          {f}
                        </li>
                      ))}
                    </ul>

                    <div className="flex gap-3">
                      <Link href={`/portfolio/${cat.key}`} className="btn btn-primary">
                        مشاهدة الأعمال
                      </Link>
                      <Link href="/contact" className="btn btn-outline">
                        طلب عرض سعر
                      </Link>
                    </div>
                  </div>

                  {/* Images grid */}
                  <div className={`grid grid-cols-2 gap-3 ${!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                    {imgs.map((img, i) => (
                      <div
                        key={img.file}
                        className={`cinematic rounded-xl2 overflow-hidden ${i === 0 ? 'row-span-2' : ''}`}
                        style={{ aspectRatio: i === 0 ? '3/4' : '4/3' }}
                      >
                        <Image
                          src={`/images/${img.file}`}
                          alt={img.labelFr}
                          fill
                          className="object-cover"
                          sizes="(max-width:1024px) 50vw, 25vw"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

function getFeatures(cat: string): string[] {
  const map: Record<string, string[]> = {
    peinture: [
      'دهان داخلي وخارجي بمواد عالية الجودة',
      'تأثيرات رخامية وجدارية احترافية',
      'معالجة واجهات الفيلات والمنازل',
      'استعمال ماركات موثوقة: Astral, V33, Tollens',
      'تشطيب نهائي دقيق وأنيق',
    ],
    placo: [
      'تركيب بلاكو بلاتر بمعايير اوروبية',
      'فوكس بلافون هندسي وزخرفي',
      'إضاءة LED مدمجة ومخفية',
      'نيشات وعناصر معمارية بالبلاكو',
      'عزل صوتي وحراري',
    ],
    platre: [
      'جبس ديكور زخرفي فني فريد',
      'أسقف منحوتة بتأثيرات ثلاثية الأبعاد',
      'رسومات جدارية وتأثيرات مزخرفة',
      'دائرة جبسية مركزية وعناصر كلاسيكية',
      'تشطيب يدوي بدقة الحرفي المتمرس',
    ],
    ferronnerie: [
      'أبواب ونوافذ حديدية مزخرفة',
      'بوابات خارجية فنية وراقية',
      'درابزين الدرج وحواجز الشرفة',
      'أعمال لحام ومعالجة مضادة للصدأ',
      'تشطيب إيبوكسي أو دهان حراري',
    ],
    bricolage: [
      'صيانة منزلية شاملة وسريعة',
      'تركيب مكيفات وسخانات وتجهيزات',
      'تسليك قنوات وإصلاح تسريبات',
      'تهيئة محلات تجارية ومكاتب',
      'خدمة 7/7 بأسعار منافسة',
    ],
  }
  return map[cat] ?? []
}
