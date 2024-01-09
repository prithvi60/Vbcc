import Clients from '@/components/Clients'
import Explore from '@/components/Explore'
import Hero from '@/components/Hero'
import Products from '@/components/Products'
import Testimonials from '@/components/Testimonials'
import { WCU } from '@/components/WCU'
import Newsletter from '@/components/Newsletter'
import Blog from '@/components/Blog'
import HowWeDo from '@/components/HowWeDo'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'
const StatisticsComponent = dynamic(() => import('@/components/Statistics'))

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
      <HowWeDo/>
      <Blog/>
      <Newsletter/>
      </Suspense>
    </main>
  )
}
