import Clients from '@/components/Clients'
import Explore from '@/components/Explore'
import Hero from '@/components/Hero'
import Products from '@/components/Products'
import Statistics from '@/components/Statistics'
import Testimonials from '@/components/Testimonials'
import { WCU } from '@/components/WCU'
import Newsletter from '@/components/Newsletter'
import Blog from '@/components/Blog'
import HowWeDo from '@/components/HowWeDo'

export default function Home() {
  return (
    <main>
      <Hero/>
      <Clients/>
      <Explore/>
      <Products/>
      <Testimonials/>
      <WCU/>
      <Statistics/>
      <HowWeDo/>
      <Blog/>
      <Newsletter/>
    </main>
  )
}
