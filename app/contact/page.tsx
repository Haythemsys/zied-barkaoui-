import { CONTACT } from '@/lib/data'
import SectionHeader from '@/components/ui/SectionHeader'

export const metadata = {
  title: 'اتصل بنا — Contact | Barkaoui Déco',
  description: 'تواصل مع زياد البركاوي للحصول على عرض سعر مجاني — هاتف، WhatsApp، إيميل',
}

const CONTACT_CARDS = [
  {
    icon: '📞',
    labelAr: 'الهاتف',
    labelFr: 'Téléphone',
    value: CONTACT.phoneFmt,
    href: `tel:${CONTACT.phone}`,
    hoverColor: '#A3B847',
  },
  {
    icon: '💬',
    labelAr: 'واتساب',
    labelFr: 'WhatsApp',
    value: 'ابدأ محادثة',
    valueFr: 'Commencer une discussion',
    href: CONTACT.whatsapp,
    external: true,
    hoverColor: '#25D366',
  },
  {
    icon: '✉️',
    labelAr: 'البريد الإلكتروني',
    labelFr: 'Email',
    value: CONTACT.email,
    href: `mailto:${CONTACT.email}`,
    hoverColor: '#C8A43A',
  },
  {
    icon: '📍',
    labelAr: 'منطقة الخدمة',
    labelFr: "Zone d'intervention",
    value: CONTACT.zoneAr,
    valueFr: CONTACT.zoneFr,
    href: null,
    hoverColor: '#A3B847',
  },
  {
    icon: '🕐',
    labelAr: 'أوقات العمل',
    labelFr: 'Horaires',
    value: '7 أيام في الأسبوع',
    valueFr: '7j/7 sur rendez-vous',
    href: null,
    hoverColor: '#C8A43A',
  },
]

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-void pt-24">
      <section className="section-pad">
        <div className="container-site px-5 max-w-4xl">
          <SectionHeader
            badge="تواصل معنا — Contact"
            titleAr="نحن في خدمتك"
            titleFr="Nous sommes à votre service"
            subAr="تواصل معنا الآن للحصول على عرض سعر مجاني وبدون التزام"
            subFr="Contactez-nous pour un devis gratuit et sans engagement"
          />

          {/* Cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {CONTACT_CARDS.map((c) => {
              const inner = (
                <div className="card-dark p-6 text-center group-hover:border-olive-bright/40 transition-colors h-full">
                  <div className="text-4xl mb-3">{c.icon}</div>
                  <div className="text-xs text-text-muted uppercase tracking-widest font-body mb-1">{c.labelFr}</div>
                  <div className="text-sm text-text-muted mb-1">{c.labelAr}</div>
                  <div className="text-base font-bold text-white mt-2">{c.value}</div>
                  {c.valueFr && <div className="text-xs text-text-ghost font-body mt-1">{c.valueFr}</div>}
                </div>
              )

              if (!c.href) return <div key={c.labelAr}>{inner}</div>
              return (
                <a
                  key={c.labelAr}
                  href={c.href}
                  target={c.external ? '_blank' : undefined}
                  rel={c.external ? 'noopener noreferrer' : undefined}
                  className="group block"
                >
                  {inner}
                </a>
              )
            })}
          </div>

          {/* Big WhatsApp CTA */}
          <a
            href={CONTACT.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-wa w-full justify-center text-xl py-5 rounded-xl3 mb-8"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            راسلنا على WhatsApp — Écrire sur WhatsApp
          </a>

          {/* Assurance box */}
          <div className="card-glass rounded-xl p-6 text-center">
            <h3 className="text-white font-black text-lg mb-3">لماذا تختارنا؟</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                ['✅', 'جودة مضمونة', 'Qualité garantie'],
                ['⚡', 'سرعة الإنجاز', 'Délais respectés'],
                ['💰', 'أسعار تنافسية', 'Prix compétitifs'],
                ['🤝', '7/7 في الخدمة', 'Disponible 7j/7'],
              ].map(([icon, ar, fr]) => (
                <div key={ar} className="text-center">
                  <div className="text-2xl mb-1">{icon}</div>
                  <div className="text-sm font-bold text-text-primary">{ar}</div>
                  <div className="text-xs text-text-ghost font-body">{fr}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
