import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Newsletter from '@/components/Newsletter'
import ProductHighlights from '@/components/ProductHighlights'
import SpecialOffer from '@/components/SpecialOffer'
import WhyChooseUs from '@/components/WhyChooseUs'

export default function HomePage() {
  return (
    <main>
      <Hero />
      <ProductHighlights />
      <WhyChooseUs />
      <SpecialOffer />
      <Newsletter />
      <Footer />
    </main>
  )
}
