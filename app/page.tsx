'use client'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Advantage from './components/Advantage'
import SocialProof from './components/SocialProof'
import Footer from './components/Footer'
import PageTransition from './components/PageTransition'
import InteractiveBackground from './components/InteractiveBackground'
import ScrollProgress from './components/ScrollProgress'
import SmoothScroll from './components/SmoothScroll'
import TechShowcase from './components/TechShowcase'

export default function Home() {
  return (
    <PageTransition>
      <LoadingScreen />
      <main className="min-h-screen bg-royal-blue relative cyber-grid">
        <InteractiveBackground />
        <ScrollProgress />
        <SmoothScroll />
        <Navbar />
        <Hero />
        <TechShowcase />
        <Services />
        <Advantage />
        <SocialProof />
        <Footer />
      </main>
    </PageTransition>
  )
}
import LoadingScreen from './components/LoadingScreen'