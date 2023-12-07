import { AllPageHero } from "@/components/AllPageHero";
import ProductSection from "@/components/products/ProductSection";

const obj ={
  title:"All Products",
  desc:"Discover VBCC&apos;s range of Industrial and Research equipment. Our innovative, high-quality products are customizable to meet your specific needs, enhancing manufacturing and research capabilities.",
  ImgSrc:"/product-bg.png"
}

export default function Home() {
  return (
    <main>
    <AllPageHero title={obj.title} desc={obj.desc} ImgSrc={obj.ImgSrc}/>
    <ProductSection/>
    </main>
  )
}
