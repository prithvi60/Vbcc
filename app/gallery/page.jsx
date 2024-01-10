import { Culture } from "@/components/gallery/Culture";
import { GalleryHero } from "@/components/gallery/GalleryHero";
import { Visitation } from "@/components/gallery/Visitation";
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
