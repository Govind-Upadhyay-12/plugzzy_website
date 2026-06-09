import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Marquee } from './components/Marquee'
import { TwoWays } from './components/TwoWays'
import { HowItWorks } from './components/HowItWorks'
import { Organized } from './components/Organized'
import { Testimonials } from './components/Testimonials'
import { About } from './components/About'
import { CTABanner } from './components/CTABanner'
import { Footer } from './components/Footer'
import { HostFormProvider } from './context/HostFormContext'

export default function App() {
  return (
    <HostFormProvider>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <TwoWays />
        <HowItWorks />
        <Organized />
        <Testimonials />
        <About />
        <CTABanner />
      </main>
      <Footer />
    </HostFormProvider>
  )
}
