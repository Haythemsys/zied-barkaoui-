'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { cn } from '@/lib/cn'

const LINKS = [
  { href: '/',           ar: 'الرئيسية',       fr: 'Accueil' },
  { href: '/about',      ar: 'من نحن',          fr: 'À propos' },
  { href: '/services',   ar: 'الخدمات',         fr: 'Services' },
  { href: '/portfolio',  ar: 'معرض الأعمال',    fr: 'Portfolio' },
  { href: '/videos',     ar: 'فيديوهات',        fr: 'Vidéos' },
  { href: '/contact',    ar: 'اتصل بنا',        fr: 'Contact', cta: true },
]

export default function Nav() {
  const path = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [path])

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 right-0 left-0 z-[900] flex items-center justify-between px-5 py-4',
          'transition-all duration-300',
          scrolled
            ? 'bg-void/92 backdrop-blur-lg shadow-[0_1px_0_rgba(163,184,71,0.15)]'
            : 'bg-transparent'
        )}
      >
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-none group">
          <span className="text-[1.25rem] font-black text-olive-bright tracking-tight">
            Barkaoui <span className="text-gold">Déco</span>
          </span>
          <span className="text-[0.62rem] text-text-muted tracking-[0.12em] font-body">
            زياد البركاوي · منوبة، تونس
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-7 list-none">
          {LINKS.map(({ href, ar, cta }) => {
            const active = path === href
            if (cta) return (
              <li key={href}>
                <Link href={href} className="btn btn-primary text-sm py-[0.55rem] px-5">
                  📞 {ar}
                </Link>
              </li>
            )
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={cn(
                    'text-sm font-semibold transition-colors duration-200 relative',
                    'after:absolute after:-bottom-1 after:right-0 after:w-0 after:h-[2px]',
                    'after:bg-olive-bright after:transition-[width] after:duration-300 hover:after:w-full',
                    active ? 'text-olive-bright' : 'text-text-muted hover:text-text-primary'
                  )}
                >
                  {ar}
                </Link>
              </li>
            )
          })}
        </ul>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(o => !o)}
          className="lg:hidden flex flex-col gap-[5px] p-2"
          aria-label="Menu"
        >
          <span className={cn('block w-6 h-[2px] bg-text-secondary transition-transform duration-300', open && 'translate-y-[7px] rotate-45')} />
          <span className={cn('block w-6 h-[2px] bg-text-secondary transition-opacity duration-300', open && 'opacity-0')} />
          <span className={cn('block w-6 h-[2px] bg-text-secondary transition-transform duration-300', open && '-translate-y-[7px] -rotate-45')} />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          'fixed inset-0 z-[890] bg-void/97 backdrop-blur-2xl flex flex-col items-center justify-center gap-8',
          'transition-[opacity,visibility] duration-300',
          open ? 'opacity-100 visible' : 'opacity-0 invisible'
        )}
      >
        {LINKS.map(({ href, ar, fr }) => (
          <Link
            key={href}
            href={href}
            onClick={() => setOpen(false)}
            className={cn(
              'flex flex-col items-center gap-1 transition-colors duration-200',
              path === href ? 'text-olive-bright' : 'text-text-primary hover:text-olive-bright'
            )}
          >
            <span className="text-2xl font-black">{ar}</span>
            <span className="text-xs text-text-muted font-body font-light italic">{fr}</span>
          </Link>
        ))}
        <a
          href="tel:+21626705410"
          className="mt-4 btn btn-primary text-base px-8 py-3"
        >
          📞 +216 26 705 410
        </a>
      </div>
    </>
  )
}
