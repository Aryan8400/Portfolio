import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { ThemeProvider, useTheme } from './context/ThemeContext'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import ScrollProgress from './components/layout/ScrollProgress'
import BackToTop from './components/layout/BackToTop'
import LoadingScreen from './components/layout/LoadingScreen'
import GradientBackground from './components/effects/GradientBackground'
import ParticleBackground from './components/effects/ParticleBackground'
import Home from './pages/Home'

function AppContent() {
  const [loading, setLoading] = useState(true)

  return (
    <>
      <AnimatePresence>
        {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <div className="bg-page min-h-screen transition-colors duration-500">
          <ScrollProgress />
          <GradientBackground />
          <ParticleBackground />
          <Navbar />
          <main>
            <Home />
          </main>
          <Footer />
          <BackToTop />
        </div>
      )}
    </>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  )
}
