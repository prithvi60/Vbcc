import { AllPageHero } from "@/components/AllPageHero";

const obj ={
  title:"Blog/Article",
  desc:"Discover VBCC's range of Industrial and Research equipment. Our innovative, high-quality products are customizable to meet your specific needs, enhancing manufacturing and research capabilities.",
  ImgSrc:"/blog-2.png"
}

export default function Home() {
  return (
    <main>
      <AllPageHero title={obj.title} desc={obj.desc} ImgSrc={obj.ImgSrc}/>
    </main>
  );
}
