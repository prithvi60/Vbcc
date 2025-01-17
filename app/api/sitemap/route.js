import {
  DentalProductsList,
  FunsaiProductsList,
  LabProductsList,
  OshidashiProductsList,
  SeikiProductsList,
} from "@/libs/productsData";
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
    {
      url: "/material_processing_equipment",
      changefreq: "weekly",
      priority: 0.9,
    },
    {
      url: "/material_processing_equipment/seikei",
      changefreq: "weekly",
      priority: 0.9,
    },
    {
      url: "/material_processing_equipment/oshidashi",
      changefreq: "weekly",
      priority: 0.9,
    },
  ];

  try {
    // Fetch dynamic routes from Sanity CMS with error handling
    const posts = await client.fetch(
      `*[_type == "post"]{ "url": slug.current }`
    );
    posts.forEach((post) => {
      links.push({
        url: `/blog/${post.url}`,
        changefreq: "weekly",
        priority: 0.9,
      });
    });

    // Dynamic Product Pages - Added error handling and URL encoding
    const addProductLinks = (products, basePath) => {
      products.forEach((product) => {
        if (product.productName) {
          links.push({
            url: `${basePath}/${encodeURIComponent(product.productName.replace(/\s/g, "_"))}`,
            changefreq: "weekly",
            priority: 0.9,
          });
        }
      });
    };

    // Add product links with proper base paths
    addProductLinks(DentalProductsList, "/categories/dental");
    addProductLinks(LabProductsList, "/categories/laboratory");
    addProductLinks(
      FunsaiProductsList,
      "/categories/material_processing_equipment/funsai"
    );
    addProductLinks(
      SeikiProductsList,
      "/categories/material_processing_equipment/seikei"
    );
    addProductLinks(
      OshidashiProductsList,
      "/categories/material_processing_equipment/oshidashi"
    );

    // Generate sitemap with proper error handling
    const stream = new SitemapStream({
      hostname: "https://vbccinstruments.com",
    });

    const xmlString = await streamToPromise(
      Readable.from(links).pipe(stream)
    ).then((data) => data.toString());

    // Return with proper headers and cache control
    return new Response(xmlString, {
      headers: {
        "Content-Type": "application/xml",
        "Cache-Control": "public, max-age=3600", // Cache for 1 hour
      },
    });
  } catch (error) {
    console.error("Error generating sitemap:", error);
    return new Response("Error generating sitemap", {
      status: 500,
      headers: {
        "Content-Type": "text/plain",
      },
    });
  }
}
