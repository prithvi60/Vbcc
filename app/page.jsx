import Hero from '@/components/Hero'
import Clients from '@/components/Clients';
import Explore from '@/components/Explore';
import Products from '@/components/Products';
import Testimonials from '@/components/Testimonials';
import WCU from '@/components/WCU';
import Statistics from '@/components/Statistics';
import HowWeDo from '@/components/HowWeDo';
import Blog from '@/components/Blog';
import Newsletter from '@/components/Newsletter';


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
