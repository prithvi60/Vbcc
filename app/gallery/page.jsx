import { GalleryHero } from "@/components/gallery/GalleryHero";
import dynamic from 'next/dynamic'

const VisitationComponent = dynamic(() => import("@/components/gallery/Visitation"))
const CultureComponent = dynamic(() => import("@/components/gallery/Culture"))

export default function Home() {
  return (
    <main>
      <GalleryHero/> 
      <CultureComponent/> 
      <VisitationComponent/>
      <CultureComponent/> 
      <VisitationComponent/>
    </main>
  );
}
