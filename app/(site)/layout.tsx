import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'
import WhatsAppButton from '@/components/WhatsAppButton'
import RevealInit from '@/components/RevealInit'

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <RevealInit />
      {children}
      <Footer />
      <ScrollToTop />
      <WhatsAppButton />
    </>
  )
}
