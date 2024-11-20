import BlogDetailHero from "@/components/blog/blogDetailPage/BlogDetailHero";
import { BlogSpecificPage } from "@/components/blog/BlogSpecificPage";
import DefaultLayout from "@/components/DefaultLayout";
import { client } from "@/sanity/client";
import { POST_QUERY } from "@/sanity/Queries";


export default async function Home({ params }) {
  const { slug } = params

  const post = await client.fetch(POST_QUERY, { slug });
  // console.log(post);

  return (
    <main>
      <DefaultLayout>
        <BlogDetailHero data={post.imageUrl} />
        <BlogSpecificPage post={post} />
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