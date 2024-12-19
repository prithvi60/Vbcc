import { client } from "@/sanity/lib/client";

export async function generateMetadata({ params }) {
  const slug = await params.slug;

  // Fetch the product/blog title dynamically from Sanity
  const query = `*[_type == "post" && slug.current == $slug][0]{
      title,
      blogShortRead
  }`;

  const product = await client.fetch(query, { slug });

  if (product) {
    return {
      title: product.title || "Blog",
      description: product.blogShortRead || "Get the latest news, insights, and innovations of VBCC High Temperature Instruments. Stay updated with expert articles and tips on high-temperature equipment and techniques.",
    };
  }

  // Default metadata if product/blog not found
  return {
    title: "Blog",
    description: "Get the latest news, insights, and innovations of VBCC High Temperature Instruments. Stay updated with expert articles and tips on high-temperature equipment and techniques.",
  };
}


export default function RootLayout({ children }) {
  return <main>{children}</main>;
}
