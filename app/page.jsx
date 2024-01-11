import Explore from '@/components/Explore'
import Hero from '@/components/Hero'
import Products from '@/components/Products'
import Testimonials from '@/components/Testimonials'
import { WCU } from '@/components/WCU'
import Newsletter from '@/components/Newsletter'
import Blog from '@/components/Blog'
// import HowWeDo from '@/components/HowWeDo'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import { Clients } from '@/components/Clients'
const StatisticsComponent = dynamic(() => import('@/components/Statistics'))
const HowWeDoComponent = dynamic(() => import('@/components/HowWeDo'))


export default function Home() {
  return (
    <main>
      <Hero/>
      <Clients/>
      <Suspense fallback={<div>Loading...</div>}>
      <Explore/>
      <Products/>
      <Testimonials/>
      <WCU/>
      <StatisticsComponent/>
      <HowWeDoComponent/>
      <Blog/>
      <Newsletter/>
      </Suspense>
    </main>
  )
}
