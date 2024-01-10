import Hero from '@/components/Hero'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const ClientsComponent = dynamic(() => import('@/components/Clients'))
const ExploreComponent = dynamic(() => import('@/components/Explore'))
const ProductsComponent = dynamic(() => import('@/components/Products'))
const TestimonialsComponent = dynamic(() => import('@/components/Testimonials'))
const NewsletterComponent = dynamic(() => import('@/components/Newsletter'))
const BlogComponent = dynamic(() => import('@/components/Blog'))
const WCUComponent = dynamic(() => import('@/components/WCU'))
const StatisticsComponent = dynamic(() => import('@/components/Statistics'))
const HowWeDoComponent = dynamic(() => import('@/components/HowWeDo'))

export default function Home() {
  return (
    <main>
      <Hero/>
      <Suspense fallback={<div>Loading...</div>}>
      <ClientsComponent/>
      <ExploreComponent/>
      <ProductsComponent/>
      <TestimonialsComponent/>
      <WCUComponent/>
      <StatisticsComponent/>
      <HowWeDoComponent/>
      <BlogComponent/>
      <NewsletterComponent/>
      </Suspense>
    </main>
  )
}
