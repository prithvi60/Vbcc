import Hero from '@/components/Hero'
import Clients from '@/components/Clients';
import Explore from '@/components/Explore';
import Testimonials from '@/components/Testimonials';
import WCU from '@/components/WCU';
import Statistics from '@/components/Statistics';
import HowWeDo from '@/components/HowWeDo';
import Newsletter from '@/components/Newsletter';
import BlogLayout from '@/components/BlogLayout';
import ProductLayout from '@/components/ProductLayout';
import DefaultLayout from '@/components/DefaultLayout';
import OurTeam from '@/components/OurTeam';


export default function Home() {
  return (
    <main>
      <DefaultLayout >
        <Hero />
        <Clients />
        <Explore />
        {/* <WCU /> */}
        {/* <Statistics /> */}
        <HowWeDo />
        <ProductLayout />
        <Testimonials />
        <OurTeam />
        <Newsletter />
      </DefaultLayout>
    </main>
  )
}
