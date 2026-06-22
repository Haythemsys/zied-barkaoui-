import Image from 'next/image'
import Link from 'next/link'
import { STATS, CATEGORIES, CONTACT } from '@/lib/data'
import SectionHeader from '@/components/ui/SectionHeader'

export const metadata = {
  title: 'من نحن — À propos | Barkaoui Déco',
  description: 'زياد البركاوي — حرفي تونسي بخبرة +10 سنوات في الدهان والديكور بمنوبة وكامل تونس',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-void pt-24">
      {/* Hero section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/images/Messenger_creation_B523308D-0B34-4E8A-86D9-82FF3E033EFC.jpeg"
            alt="Barkaoui Déco"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-void via-void/80 to-void" />
        </div>
        <div className="relative z-10 container-site px-5 text-center">
          <span className="sec-badge">من نحن — À propos</span>
          <h1 className="text-[clamp(2.5rem,6vw,5rem)] font-black text-white mb-3">
            زياد البركاوي
          </h1>
          <p className="font-display italic text-[clamp(1.2rem,2.5vw,1.8rem)] text-gold-light mb-6">
            Artisan peintre & décorateur — Manouba, Tunisie
          </p>
          <div className="divider-olive mx-auto" />
        </div>
      </section>

      {/* Main content */}
      <section className="section-pad bg-deep">
        <div className="container-site px-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            {/* Story */}
            <div>
              <h2 className="text-2xl font-black text-white mb-4">القصة — L'histoire</h2>
              <div className="space-y-4 text-text-muted leading-loose">
                <p>
                  بدأ زياد البركاوي مسيرته الحرفية منذ أكثر من <strong className="text-olive-bright">10 سنوات</strong>،
                  انطلاقاً من منوبة، ليبني اسماً مميزاً في عالم الدهان والديكور في تونس.
                </p>
                <p>
                  ما يميز زياد ليس فقط الخبرة الطويلة، بل الشغف الحقيقي بالتفاصيل والرغبة في تحويل
                  كل مشروع إلى تحفة فنية. من الواجهات الخارجية الفخمة إلى الأسقف الزخرفية الرائعة،
                  كل عمل يحمل بصمة الحرفي المتمرس.
                </p>
                <p>
                  يعمل زياد في{' '}
                  <strong className="text-text-secondary">منوبة وكامل تراب الجمهورية التونسية</strong>،
                  مع التزام راسخ بالجودة، الدقة في المواعيد، والأسعار العادلة.
                </p>
                <p className="font-body text-sm text-text-ghost leading-relaxed border-r-2 border-olive-bright pr-4">
                  Zied Barkaoui a débuté sa carrière artisanale il y a plus de 10 ans à Manouba.
                  Sa passion pour les détails et son exigence de la perfection font de lui
                  un artisan de référence dans le domaine de la peinture et de la décoration en Tunisie.
                </p>
              </div>

              {/* Zone */}
              <div className="mt-8 p-5 card-glass rounded-xl">
                <h3 className="text-white font-bold mb-2 flex items-center gap-2">
                  <span>📍</span> منطقة التدخل
                </h3>
                <p className="text-text-muted text-sm">{CONTACT.zoneAr}</p>
                <p className="text-text-ghost text-xs font-body mt-1">{CONTACT.zoneFr}</p>
              </div>
            </div>

            {/* Image + stats */}
            <div>
              {/* Main image */}
              <div className="cinematic rounded-xl3 overflow-hidden mb-6 h-80">
                <Image
                  src="/images/Messenger_creation_937696CB-5392-4BF6-8943-48343CA8DDB0.jpeg"
                  alt="زياد البركاوي — عمل"
                  fill
                  className="object-cover"
                  sizes="(max-width:1024px) 100vw, 50vw"
                />
              </div>

              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-4">
                {STATS.map(s => (
                  <div key={s.value} className="card-dark p-5 text-center">
                    <div className="text-4xl font-black text-olive-bright mb-1">{s.value}</div>
                    <div className="text-xs text-text-muted">{s.labelAr}</div>
                    <div className="text-xs text-text-ghost font-body">{s.labelFr}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services summary */}
      <section className="section-pad bg-void">
        <div className="container-site px-5">
          <SectionHeader
            badge="التخصصات — Spécialités"
            titleAr="ما نقدمه"
            titleFr="Nos domaines d'expertise"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {CATEGORIES.map(cat => (
              <Link
                key={cat.key}
                href={`/portfolio/${cat.key}`}
                className="card-dark p-6 text-center group hover:border-olive-bright/40 transition-colors"
              >
                <div className="text-4xl mb-3">{cat.icon}</div>
                <h3 className="text-white font-bold mb-1">{cat.ar}</h3>
                <p className="text-xs font-display italic text-gold-light">{cat.fr}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-deep">
        <div className="container-site px-5 text-center">
          <h2 className="text-3xl font-black text-white mb-6">هل أنت مستعد لمشروعك القادم؟</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={`tel:${CONTACT.phone}`} className="btn btn-primary text-lg px-8 py-4">
              📞 {CONTACT.phoneFmt}
            </a>
            <a href={CONTACT.whatsapp} target="_blank" rel="noopener" className="btn btn-wa text-lg px-8 py-4">
              💬 WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
