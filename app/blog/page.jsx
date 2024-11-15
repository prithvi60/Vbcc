import BlogHero from "@/components/blog/BlogHero";
import { BlogSection } from "@/components/blog/BlogSection";
import DefaultLayout from "@/components/DefaultLayout";

const obj = {
  title: "Blog/Article",
  desc: "Discover VBCC's range of Industrial and Research equipment. Our innovative, high-quality products are customizable to meet your specific needs, enhancing manufacturing and research capabilities.",
  ImgSrc: "https://ik.imagekit.io/webibee/VBCC/blog-2.png"
}

export default function Home() {
  return (
    <main>
      <DefaultLayout>
        <BlogHero />
        <BlogSection />
      </DefaultLayout>
    </main>
  );
}
