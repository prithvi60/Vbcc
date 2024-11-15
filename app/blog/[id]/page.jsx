import BlogDetailHero from "@/components/blog/blogDetailPage/BlogDetailHero";
import { BlogSpecificPage } from "@/components/blog/BlogSpecificPage";
import { ExploreCards } from "@/components/blog/ExploreCards";
import DefaultLayout from "@/components/DefaultLayout";


export default function Home({ params }) {
  const { id } = params

  const filteredBlogData = blogs.filter(blog => blog.id === id)
  // console.log(filteredBlogData[0].img);

  return (
    <main>
      <DefaultLayout>
        <BlogDetailHero data={filteredBlogData[0].img} />
        <BlogSpecificPage />
        {/* <ExploreCards /> */}
      </DefaultLayout>
    </main>
  );
}


const blogs = [
  {
    id: "1",
    img: "/blog-1.jpeg",
    note: "Units operate satisfactorily,VBCC High Temperature Instruments service enabled our research project's success.",
  },
  {
    id: "2",
    img: "/blog-2.jpeg",
    note: "Units operate satisfactorily,VBCC High Temperature Instruments service enabled our research project's success.",
  },
  {
    id: "3",
    img: "/blog-4.jpeg",
    note: "Units operate satisfactorily,VBCC High Temperature Instruments service enabled our research project's success.",
  },
  {
    id: "4",
    img: "/blog-3.jpeg",
    note: "Units operate satisfactorily,VBCC High Temperature Instruments service enabled our research project's success.",
  },
  {
    id: "5",
    img: "/blog-5.jpeg",
    note: "Units operate satisfactorily,VBCC High Temperature Instruments service enabled our research project's success.",
  },
  {
    id: "6",
    img: "/blog-6.jpeg",
    note: "Units operate satisfactorily,VBCC High Temperature Instruments service enabled our research project's success.",
  },
];