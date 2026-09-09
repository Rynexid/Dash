import { Routes, Route, useLocation } from "react-router-dom"
import { useEffect } from "react"
import { Navbar } from "@/components/Navbar"
import { Hero } from "@/components/Hero"
import { Stats } from "@/components/Stats"
import { FeatureShowcase } from "@/components/FeatureShowcase"
import { HowItWorks } from "@/components/HowItWorks"
import { Features } from "@/components/Features"
import { Platforms } from "@/components/Platforms"
import { Commands } from "@/components/Commands"
import { CTA } from "@/components/CTA"
import { Footer } from "@/components/Footer"
import { Toaster } from "sonner"
import { TooltipProvider } from "@/components/ui/Tooltip"

function Home() {
  return (
    <main>
      <Hero />
      <Platforms />
      <Stats />
      <FeatureShowcase />
      <HowItWorks />
      <Features />
      <CTA />
    </main>
  )
}

function FeaturesPage() {
  return (
    <main>
      <Features />
      <CTA />
    </main>
  )
}

function StatsPage() {
  return (
    <main>
      <Stats />
      <CTA />
    </main>
  )
}

function CommandsPage() {
  return (
    <main>
      <Commands />
    </main>
  )
}

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <TooltipProvider>
      <div className="min-h-screen">
        <Toaster position="top-center" theme="dark" />
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/commands" element={<CommandsPage />} />
          <Route path="/stats" element={<StatsPage />} />
        </Routes>
        <Footer />
      </div>
    </TooltipProvider>
  )
}