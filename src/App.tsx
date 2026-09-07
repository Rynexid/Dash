import { Navbar } from "@/components/Navbar"
import { Hero } from "@/components/Hero"
import { Stats } from "@/components/Stats"
import { FeatureShowcase } from "@/components/FeatureShowcase"
import { Features } from "@/components/Features"
import { Platforms } from "@/components/Platforms"
import { DashboardPreview } from "@/components/DashboardPreview"
import { Commands } from "@/components/Commands"
import { Docs } from "@/components/Docs"
import { FAQ } from "@/components/FAQ"
import { CTA } from "@/components/CTA"
import { Footer } from "@/components/Footer"
import { Toaster } from "sonner"
import { TooltipProvider } from "@/components/ui/Tooltip"

export default function App() {
  return (
    <TooltipProvider>
      <div className="min-h-screen">
        <Toaster position="top-center" theme="dark" />
        <Navbar />
        <main>
          <Hero />
          <Stats />
          <FeatureShowcase />
          <Features />
          <Platforms />
          <DashboardPreview />
          <Commands />
          <Docs />
          <FAQ />
          <CTA />
        </main>
        <Footer />
      </div>
    </TooltipProvider>
  )
}