import { DentalProductsList, LabProductsList } from "@/libs/productsData";
import { client } from "@/sanity/lib/client";
import { SitemapStream, streamToPromise } from "sitemap";
import { Readable } from "stream";

export async function GET() {
  // Static routes
  const links = [
    { url: "/", changefreq: "daily", priority: 1.0 },
    {
      url: "/denkirodental/dentalfurnace/productline",
      changefreq: "weekly",
      priority: 0.9,
    },
    { url: "/about", changefreq: "monthly", priority: 0.8 },
    { url: "/testimonials", changefreq: "monthly", priority: 0.8 },
    { url: "/contact", changefreq: "monthly", priority: 0.8 },
    { url: "/blog", changefreq: "weekly", priority: 0.9 },
    { url: "/categories", changefreq: "weekly", priority: 0.9 },
    { url: "/categories/dental", changefreq: "weekly", priority: 0.9 },
    { url: "/categories/laboratory", changefreq: "weekly", priority: 0.9 },
  ];

  // Fetch dynamic routes from your sanity CMS
  const posts = await client.fetch(`*[_type == "post"]{ "url": slug.current }`);
  posts.forEach((post) => {
    links.push({
      url: `/blog/${post.url}`,
      changefreq: "weekly",
      priority: 0.9,
    });
  });

  //   Dynamic Dental Product Pages
  DentalProductsList.forEach((list) => {
    links.push({
      url: `/categories/dental/${list.productName.replace(/\s/g, "_")}`,
      changefreq: "weekly",
      priority: 0.9,
    });
  });

  //   Dynamic Dental Product Pages
  LabProductsList.forEach((list) => {
    links.push({
      url: `/categories/laboratory/${list.productName.replace(/\s/g, "_")}`,
      changefreq: "weekly",
      priority: 0.9,
    });
  });

  const stream = new SitemapStream({ hostname: "https://vbccinstruments.com" });

  const xmlString = await streamToPromise(
    Readable.from(links).pipe(stream)
  ).then((data) => data.toString());

  return new Response(xmlString, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
