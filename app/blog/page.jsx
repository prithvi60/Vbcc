import BlogHero from "@/components/blog/BlogHero";
import { BlogSection } from "@/components/blog/BlogSection";
import DefaultLayout from "@/components/DefaultLayout";
import { client } from "@/sanity/lib/client";
import { POSTS_QUERY } from "@/sanity/Queries";

export const revalidate = 10;

export default async function Home() {
  const posts = await client.fetch(
    POSTS_QUERY,
    {},
    {
      cache: "no-cache",
      next: {
        tags: ["post", "author", "category"],
      },
    }
  );
  return (
    <main>
      <DefaultLayout>
        <BlogHero />
        <BlogSection posts={posts} />
      </DefaultLayout>
    </main>
  );
}
