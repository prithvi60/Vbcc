import BlogDetailHero from "@/components/blog/blogDetailPage/BlogDetailHero";
import { BlogSpecificPage } from "@/components/blog/blogDetailPage/BlogSpecificPage";
import DefaultLayout from "@/components/DefaultLayout";
import { client } from "@/sanity/client";
import { POST_QUERY } from "@/sanity/Queries";

export const revalidate = 10;

export default async function Home({ params }) {
  const slug = await params.slug;

  const post = await client.fetch(
    POST_QUERY,
    { slug }
  );

  return (
    <main>
      <DefaultLayout>
        <BlogDetailHero data={post.imageUrl} postName={post.title} />
        <BlogSpecificPage post={post} />
      </DefaultLayout>
    </main>
  );
}
