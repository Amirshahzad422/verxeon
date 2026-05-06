import { HeroSection } from "@/components/hero"
import { Header } from "@/components/header"
import { LogosSection } from "@/components/logos-section"
import { FeatureSection } from "@/components/feature-section"
import { Features } from "@/components/features-8"
import { ContentSection } from "@/components/content-3"
import { FeaturesTwelve } from "@/components/features-12"
import { CallToAction } from "@/components/cta-3"
import { Footer } from "@/components/footer"
import { CTAWithVerticalMarquee } from "@/components/cta-with-text-marquee"

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
      <CallToAction />
      <Footer />
    </div>
  )
}
