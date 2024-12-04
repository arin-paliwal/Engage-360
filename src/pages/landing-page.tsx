import { ChevronDown } from 'lucide-react'
import Navbar from '../components/landing/navbar'
import Hero from '../components/landing/hero'
import Brands from '../components/landing/brands'
import Platform from '../components/landing/platform'
import Needs from '../components/landing/needs'
import Subscription from '../components/landing/subscription'
import FAQs from '../components/landing/faqs'
import Footer from '../components/landing/footer'

export default function LandingPage() {
  return (
    <div className="flex flex-col gap-[8rem]">
      <Hero />
      {/* <Brands /> */}
      <Platform />
      <Needs />
      <Subscription />
      <FAQs />
      <Footer />
    </div>
  )
}

