import BlogDetailHero from "@/components/blog/blogDetailPage/BlogDetailHero";
import { BlogSpecificPage } from "@/components/blog/blogDetailPage/BlogSpecificPage";
import DefaultLayout from "@/components/DefaultLayout";
import { client } from "@/sanity/client";
import { POST_QUERY } from "@/sanity/Queries";

export const revalidate = 10;

// Add generateMetadata function
export async function generateMetadata({ params }) {
  const slug = params.slug;

  try {
    const post = await client.fetch(
      POST_QUERY,
      { slug },
      {
        cache: "no-cache",
        next: {
          tags: ["post", "author", "category"],
        },
      }
    );

    return {
      title: post?.title || "Blog | VBCC High temperature Instruments",
      description:
        post?.blogShortRead ||
        "Get the latest news, insights, and innovations of VBCC High Temperature Instruments.",
      openGraph: {
        title: post?.title
          ? `${post.title} | VBCC High temperature Instruments`
          : "Blog | VBCC High temperature Instruments",
        description:
          post?.blogShortRead ||
          "Get the latest news, insights, and innovations of VBCC High Temperature Instruments.",
        type: "article",
        url: `https://vbccinstruments.com/blog/${slug}`,
        images: [
          {
            url: post?.imageUrl || "/default-blog-image.jpg",
            width: 1200,
            height: 630,
            alt: post?.title || "Blog post",
          },
        ],
      },
    };
  } catch (error) {
    console.error("Error fetching post metadata:", error);
    return {
      title: "Blog | VBCC High temperature Instruments",
      description:
        "Get the latest news, insights, and innovations of VBCC High Temperature Instruments.",
    };
  }
}

export default async function Home({ params }) {
  const slug = await params.slug;

  const post = await client.fetch(
    POST_QUERY,
    { slug },
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
        <BlogDetailHero data={post.imageUrl} postName={post.title} />
        <BlogSpecificPage post={post} />
      </DefaultLayout>
    </main>
  );
}
