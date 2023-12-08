import { Culture } from "@/components/gallery/Culture";
import { GalleryHero } from "@/components/gallery/GalleryHero";
import { Visitation } from "@/components/gallery/Visitation";


export default function Home() {
  return (
    <main>
      <GalleryHero/> 
      <Culture/> 
      <Visitation/>
      <Culture/> 
      <Visitation/>
    </main>
  );
}
