import Image from 'next/image'
import Link from 'next/link'
import { CATEGORIES, STATS, BRANDS, CONTACT, GALLERY } from '@/lib/data'
import GalleryGrid from '@/components/ui/GalleryGrid'
import SectionHeader from '@/components/ui/SectionHeader'

// Hero background — best exterior shot
const HERO_BG = '/images/Messenger_creation_049ADC22-90CF-4B9D-AF51-570E3AC64234.jpeg'
const HERO_SECONDARY = '/images/Messenger_creation_3B86C9CE-27B7-49E9-8EB2-7CE86F682463.jpeg'

export default function HomePage() {
  const featured = GALLERY.filter(i => i.featured).slice(0, 6)

  return (
    <>
      {/* ── HERO ───────────────────────────────────────────────── */}
      <section className="relative min-h-svh flex items-center justify-center overflow-hidden">
        {/* Background image — cinematic */}
        <div className="absolute inset-0 cinematic cinematic-hero">
          <Image
            src={HERO_BG}
            alt="Barkaoui Déco — زياد البركاوي"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>

        {/* Gradient layers */}
        <div className="absolute inset-0 bg-gradient-to-b from-void/70 via-void/40 to-void" />
        <div className="absolute inset-0 bg-gradient-to-r from-void/80 to-transparent" />

        {/* Content */}
        <div className="relative z-10 text-center px-5 max-w-4xl mx-auto animate-fade-up">
          <div className="inline-flex items-center gap-2 border border-[rgba(163,184,71,0.35)] rounded-full px-4 py-1.5 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-olive-bright animate-pulse" />
            <span className="text-xs text-gold-light font-body tracking-widest uppercase">
              منوبة · تونس · خبرة +10 سنوات
            </span>
          </div>

          <h1 className="text-[clamp(3rem,9vw,7rem)] font-black text-white leading-none mb-3 tracking-tight">
            Barkaoui{' '}
            <span className="text-gradient">Déco</span>
          </h1>
          <p className="text-[clamp(1.3rem,3vw,2rem)] font-light text-text-secondary mb-1">
            زياد البركاوي
          </p>
          <p className="font-display italic text-[clamp(1rem,2vw,1.4rem)] text-gold-light mb-10">
            L'artisan qui transforme vos espaces en œuvres d'art
          </p>

          {/* Stats inline */}
          <div className="flex justify-center gap-8 md:gap-14 mb-10 flex-wrap">
            {STATS.map(s => (
              <div key={s.value} className="text-center">
                <div className="text-[clamp(1.8rem,4vw,2.8rem)] font-black text-olive-bright leading-none">
                  {s.value}
                </div>
                <div className="text-xs text-text-muted mt-1 tracking-wider">{s.labelAr}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href="/portfolio" className="btn btn-primary text-base px-8 py-3.5">
              مشاهدة الأعمال
            </Link>
            <a href={CONTACT.whatsapp} target="_blank" rel="noopener" className="btn btn-wa text-base">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-muted text-[0.65rem] tracking-widest uppercase animate-float">
          <span>Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-olive-bright to-transparent" />
        </div>
      </section>

      {/* ── ABOUT TEASER ──────────────────────────────────────── */}
      <section className="section-pad bg-deep">
        <div className="container-site px-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            {/* Text */}
            <div>
              <span className="sec-badge">من نحن — À propos</span>
              <h2 className="text-[clamp(2rem,4vw,3rem)] font-black text-white leading-tight mb-2">
                زياد البركاوي
              </h2>
              <p className="font-display italic text-xl text-gold-light mb-5">
                Artisan peintre & décorateur
              </p>
              <div className="divider-olive" />
              <p className="text-text-muted leading-loose mb-6">
                حرفي تونسي بخبرة تمتد لأكثر من <strong className="text-olive-bright">10 سنوات</strong> في مجال
                الدهان والديكور. يقدم زياد خدمات متكاملة للمنازل والمحلات التجارية — من الدهان
                الداخلي والخارجي، فوكس بلافون البلاكو، الجبس الزخرفي، أعمال الحدادة، إلى
                خدمات البريكولاج الشاملة.
              </p>
              <p className="text-sm text-text-ghost font-body leading-relaxed mb-8">
                Artisan de confiance intervenant à Manouba et dans tout le territoire tunisien.
                Qualité, précision et respect des délais garantis sur chaque chantier.
              </p>
              <div className="flex gap-3">
                <Link href="/about" className="btn btn-primary">اكتشف قصتنا</Link>
                <a href={`tel:${CONTACT.phone}`} className="btn btn-outline">📞 اتصل الآن</a>
              </div>
            </div>

            {/* Image collage */}
            <div className="grid grid-cols-2 gap-3 h-[420px] lg:h-[500px]">
              <div className="row-span-2 cinematic rounded-xl2 overflow-hidden">
                <Image
                  src="/images/Messenger_creation_B523308D-0B34-4E8A-86D9-82FF3E033EFC.jpeg"
                  alt="زياد البركاوي — فيلا"
                  fill className="object-cover"
                  sizes="(max-width:1024px) 50vw, 25vw"
                />
              </div>
              <div className="cinematic rounded-xl2 overflow-hidden">
                <Image
                  src="/images/Messenger_creation_03BFFC8A-B372-4EA9-946F-E8674F2A8163.jpeg"
                  alt="فوكس بلافون LED"
                  fill className="object-cover"
                  sizes="(max-width:1024px) 50vw, 25vw"
                />
              </div>
              <div className="cinematic rounded-xl2 overflow-hidden">
                <Image
                  src="/images/Messenger_creation_1491925551288526.jpeg"
                  alt="جبس ديكور"
                  fill className="object-cover"
                  sizes="(max-width:1024px) 50vw, 25vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ──────────────────────────────────────────── */}
      <section className="section-pad bg-void">
        <div className="container-site px-5">
          <SectionHeader
            badge="خدماتنا — Nos Services"
            titleAr="تخصصاتنا الخمس"
            titleFr="Cinq métiers, une seule exigence : la perfection"
            subAr="من الواجهات الخارجية إلى الأسقف الزخرفية — كل ما يحتاجه منزلك أو مشروعك"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {CATEGORIES.map((cat, i) => (
              <Link
                key={cat.key}
                href={`/services#${cat.key}`}
                className="card-dark group overflow-hidden relative min-h-[300px] flex flex-col"
              >
                {/* Background image */}
                <div className="absolute inset-0 cinematic">
                  <Image
                    src={cat.coverImage}
                    alt={cat.ar}
                    fill
                    className="object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500"
                    sizes="(max-width:640px) 100vw, (max-width:1280px) 50vw, 20vw"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-void via-void/60 to-transparent" />

                {/* Content */}
                <div className="relative z-10 flex flex-col flex-1 justify-end p-5">
                  <span className="text-3xl mb-2">{cat.icon}</span>
                  <h3 className="text-white font-black text-lg leading-tight mb-1">{cat.ar}</h3>
                  <p className="font-display italic text-sm text-gold-light mb-3">{cat.fr}</p>
                  <p className="text-text-muted text-xs leading-relaxed line-clamp-3">{cat.descAr}</p>
                  <span className="mt-3 text-olive-bright text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    مشاهدة الأعمال ←
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED PORTFOLIO ────────────────────────────────── */}
      <section className="section-pad bg-deep">
        <div className="container-site px-5">
          <SectionHeader
            badge="أعمالنا المختارة — Sélection"
            titleAr="إنجازات تتحدث عن نفسها"
            titleFr="Des réalisations qui parlent d'elles-mêmes"
            subAr="لقطة على أفضل أعمالنا — الجودة ليست خياراً، هي التزام"
          />
          <div className="masonry mb-8">
            {featured.map((img, i) => (
              <div key={img.file} className="masonry-item cinematic group cursor-pointer">
                <Image
                  src={`/images/${img.file}`}
                  alt={img.labelFr}
                  width={600}
                  height={450}
                  className="w-full h-auto"
                  loading={i < 3 ? 'eager' : 'lazy'}
                />
                <div className="absolute inset-0 z-10 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-sm font-bold">{img.labelAr}</span>
                  <span className="text-olive-bright text-xs font-body">{img.labelFr}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link href="/portfolio" className="btn btn-primary text-base px-10 py-4">
              مشاهدة كل الأعمال — Voir tout le portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* ── BRANDS STRIP ──────────────────────────────────────── */}
      <section className="py-10 bg-void border-y border-[rgba(163,184,71,0.1)] overflow-hidden">
        <p className="text-center text-xs text-text-muted tracking-widest uppercase mb-6 font-body">
          المواد والعلامات التي نعمل بها — Marques & matériaux utilisés
        </p>
        <div className="overflow-hidden">
          <div className="brands-ticker">
            {[...BRANDS, ...BRANDS].map((b, i) => (
              <span
                key={i}
                className="font-display italic text-xl text-text-muted/60 hover:text-olive-bright transition-colors cursor-default"
              >
                {b}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT CTA ───────────────────────────────────────── */}
      <section className="section-pad bg-deep relative overflow-hidden">
        {/* BG texture */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(45deg, var(--olive-bright) 0, var(--olive-bright) 1px, transparent 0, transparent 50%)`,
            backgroundSize: '20px 20px'
          }} />
        </div>
        <div className="relative z-10 container-site px-5 text-center">
          <span className="sec-badge">تواصل معنا — Contact</span>
          <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-black text-white mb-4">
            جاهز لتحويل مشروعك إلى واقع؟
          </h2>
          <p className="font-display italic text-xl text-gold-light mb-8">
            Prêt à transformer votre espace ? Contactez-nous !
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 flex-wrap">
            <a href={`tel:${CONTACT.phone}`} className="btn btn-primary text-lg px-10 py-4">
              📞 {CONTACT.phoneFmt}
            </a>
            <a href={CONTACT.whatsapp} target="_blank" rel="noopener" className="btn btn-wa text-lg px-10 py-4">
              💬 WhatsApp
            </a>
            <a href={`mailto:${CONTACT.email}`} className="btn btn-outline text-base px-8 py-4">
              ✉️ Email
            </a>
          </div>
          <p className="mt-6 text-sm text-text-muted">
            📍 {CONTACT.zoneAr}
          </p>
        </div>
      </section>
    </>
  )
}
