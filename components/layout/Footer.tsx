import Link from 'next/link'
import { CONTACT } from '@/lib/data'

export default function Footer() {
  return (
    <footer className="bg-[#070707] border-t border-[rgba(163,184,71,0.12)] pt-14 pb-8">
      <div className="container-site px-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="text-2xl font-black text-olive-bright mb-1">
              Barkaoui <span className="text-gold">Déco</span>
            </div>
            <div className="text-xs text-text-muted tracking-widest mb-4 font-body">زياد البركاوي · منوبة، تونس</div>
            <p className="text-sm text-text-muted leading-relaxed">
              حرفي تونسي متخصص في الدهان والديكور بخبرة +10 سنوات.
              <br />
              <span className="font-display italic text-xs">Artisan de confiance depuis plus de 10 ans.</span>
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-text-primary font-bold mb-4 text-sm">روابط سريعة</h4>
            <ul className="space-y-2">
              {[
                ['/','الرئيسية'],
                ['/about','من نحن'],
                ['/services','الخدمات'],
                ['/portfolio','معرض الأعمال'],
                ['/videos','فيديوهات'],
                ['/contact','اتصل بنا'],
              ].map(([href, label]) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-text-muted hover:text-olive-bright transition-colors duration-200">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-text-primary font-bold mb-4 text-sm">تواصل معنا</h4>
            <ul className="space-y-3">
              <li>
                <a href={`tel:${CONTACT.phone}`} className="flex items-center gap-2 text-sm text-text-muted hover:text-olive-bright transition-colors">
                  <span>📞</span> {CONTACT.phoneFmt}
                </a>
              </li>
              <li>
                <a href={CONTACT.whatsapp} target="_blank" rel="noopener" className="flex items-center gap-2 text-sm text-text-muted hover:text-olive-bright transition-colors">
                  <span>💬</span> WhatsApp
                </a>
              </li>
              <li>
                <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-2 text-sm text-text-muted hover:text-olive-bright transition-colors">
                  <span>✉️</span> {CONTACT.email}
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-text-muted">
                <span className="mt-0.5">📍</span>
                <span>{CONTACT.zoneAr}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[rgba(255,255,255,0.06)] pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-text-ghost">
            © {new Date().getFullYear()} Barkaoui Déco — جميع الحقوق محفوظة
          </p>
          <p className="text-xs text-text-ghost font-body">
            Tous droits réservés · Manouba, Tunisie
          </p>
        </div>
      </div>
    </footer>
  )
}
