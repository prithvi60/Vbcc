import { ProductHero } from "@/components/products/ProductHero";
import ProductSection from "@/components/products/ProductSection";

export default function Home() {
  return (
    <main>
    {/* <AllPageHero title={obj.title} desc={obj.desc} ImgSrc={obj.ImgSrc}/> */}
    <ProductHero/>
    <ProductSection/>
    </main>
  )
}
