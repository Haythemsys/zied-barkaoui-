import type { Metadata } from 'next'
import './globals.css'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import WaFab from '@/components/layout/WaFab'

export const metadata: Metadata = {
  title: 'Barkaoui Déco — زياد البركاوي | الدهان والديكور',
  description: 'زياد البركاوي — حرفي تونسي متخصص في الدهان والديكور بخبرة +10 سنوات. دهان، بلاكو، جبس، حدادة وبريكولاج في منوبة وكامل تونس.',
  keywords: ['دهان تونس', 'ديكور تونس', 'Barkaoui Déco', 'peinture Tunisie', 'faux plafond', 'placo', 'ferronnerie'],
  openGraph: {
    title: 'Barkaoui Déco — زياد البركاوي',
    description: 'خبرة +10 سنوات في الدهان والديكور — منوبة وكامل تونس',
    type: 'website',
    locale: 'ar_TN',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl" className="scroll-smooth">
      <body className="bg-void text-text-secondary antialiased">
        <Nav />
        <main>{children}</main>
        <Footer />
        <WaFab />
      </body>
    </html>
  )
}
