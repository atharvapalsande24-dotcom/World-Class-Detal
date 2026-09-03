import { IntroOverlay } from '@/components/intro/IntroOverlay'
import { HeroSection } from '@/components/sections/HeroSection'
import { TrustBar } from '@/components/sections/TrustBar'
import { ServicesGrid } from '@/components/sections/ServicesGrid'
import { BracesComparison } from '@/components/sections/BracesComparison'
import { InvisalignSection } from '@/components/sections/InvisalignSection'
import { AboutSection } from '@/components/sections/AboutSection'
import { DoctorSection } from '@/components/sections/DoctorSection'
import { WhyChooseUs } from '@/components/sections/WhyChooseUs'
import { TestimonialsCarousel } from '@/components/sections/TestimonialsCarousel'
import { FaqSection } from '@/components/sections/FaqSection'
import { AwardsStrip } from '@/components/sections/AwardsStrip'
import { HomeVisualStrips } from '@/components/sections/HomeVisualStrips'
import { PressUpdates } from '@/components/sections/PressUpdates'

export default function HomePage() {
  return (
    <main>
      <IntroOverlay />
      <HeroSection />
      <HomeVisualStrips />
      <PressUpdates />
      <TrustBar />
      <ServicesGrid />
      <BracesComparison />
      <InvisalignSection />
      <AboutSection />
      <WhyChooseUs />
      <DoctorSection />
      <TestimonialsCarousel />
      <FaqSection />
      <AwardsStrip />
    </main>
  )
}
