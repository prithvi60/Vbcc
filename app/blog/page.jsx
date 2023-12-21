import { AllPageHero } from "@/components/AllPageHero";
import { BlogSection } from "@/components/blog/BlogSection";

const obj ={
  title:"Blog/Article",
  desc:"Discover VBCC's range of Industrial and Research equipment. Our innovative, high-quality products are customizable to meet your specific needs, enhancing manufacturing and research capabilities.",
  ImgSrc:"https://ik.imagekit.io/webibee/VBCC/blog-2.png"
}

export default function Home() {
  return (
    <main>
      <AllPageHero title={obj.title} desc={obj.desc} ImgSrc={obj.ImgSrc}/>
      <BlogSection/>
    </main>
  );
}
