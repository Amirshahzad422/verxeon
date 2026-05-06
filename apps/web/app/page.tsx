import { HeroSection } from "@/components/hero"
import { Header } from "@/components/header"
import { LogosSection } from "@/components/logos-section"
import { FeatureSection } from "@/components/feature-section"
import { Features } from "@/components/features-8"
import { ContentSection } from "@/components/content-3"
import { FeaturesTwelve } from "@/components/features-12"

export default function Page() {
  return (
    <div className="flex min-h-svh flex-col">
      <Header />
      <HeroSection />
      <LogosSection />
      <FeatureSection />
      <Features />
      <ContentSection />
      <FeaturesTwelve />
    </div>
  )
}
