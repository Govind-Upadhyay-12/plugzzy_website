import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Marquee } from './components/Marquee'
import { TwoWays } from './components/TwoWays'
import { HowItWorks } from './components/HowItWorks'
import { Organized } from './components/Organized'
import { Benefits } from './components/Benefits'
import { FAQ } from './components/FAQ'
import { SEOContent } from './components/SEOContent'
import { About } from './components/About'
import { CTABanner } from './components/CTABanner'
import { Footer } from './components/Footer'
import { HostFormProvider } from './context/HostFormContext'
import { StructuredData } from './components/StructuredData'

export default function App() {
  return (
    <HostFormProvider>
      <StructuredData />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-lg focus:bg-plugzzy-600 focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Marquee />
        <TwoWays />
        <HowItWorks />
        <Organized />
        <Benefits />
        <FAQ />
        <SEOContent />
        <About />
        <CTABanner />
      </main>
      <Footer />
    </HostFormProvider>
  )
}
