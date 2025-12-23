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
import LoadingScreen from './components/LoadingScreen'

export default function Home() {
  return (
    <PageTransition>
      <LoadingScreen />
      <main className="min-h-screen bg-white relative">
        <InteractiveBackground />
        <ScrollProgress />
        <SmoothScroll />
        <Navbar />
        <Hero />
        <Services />
        <Advantage />
        <SocialProof />
        <Footer />
      </main>
    </PageTransition>
  )
}