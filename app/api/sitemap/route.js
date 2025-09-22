import {
  AnalyticalInstrumentsList,
  DentalProductsList,
  FunsaiProductsList,
  LabEquiptProductsList,
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
      url: "/categories/material_processing_equipment",
      changefreq: "weekly",
      priority: 0.9,
    },
    {
      url: "/categories/material_processing_equipment/Ball_Mills",
      changefreq: "weekly",
      priority: 0.9,
    },
    {
      url: "/categories/material_processing_equipment/Extruders",
      changefreq: "weekly",
      priority: 0.9,
    },
    {
      url: "/categories/material_processing_equipment/Presses",
      changefreq: "weekly",
      priority: 0.9,
    },
    {
      url: "/categories/lab_equipment",
      changefreq: "weekly",
      priority: 0.9,
    },
    {
      url: "/categories/analytical_instruments",
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
        lastmod: new Date().toISOString(),
      });
    });

    // Dynamic Product Pages - Added error handling and URL encoding
    const addProductLinks = (products, basePath) => {
      if (!Array.isArray(products)) return;
      products.forEach((product) => {
        if (product.productName) {
          const encodedName = encodeURIComponent(
            product.productName.replace(/\s+/g, "_")
          ).trim();
          links.push({
            url: `${basePath}/${encodedName}`,
            changefreq: "weekly",
            priority: 0.9,
            lastmod: new Date().toISOString(),
          });
        }
      });
    };

    // Add product links with proper base paths
    addProductLinks(DentalProductsList, "/categories/dental");
    addProductLinks(LabProductsList, "/categories/laboratory");
    addProductLinks(LabEquiptProductsList, "/categories/lab_equipment");
    addProductLinks(
      FunsaiProductsList,
      "/categories/material_processing_equipment/Ball_Mills"
    );
    addProductLinks(
      SeikiProductsList,
      "/categories/material_processing_equipment/Presses"
    );
    addProductLinks(
      OshidashiProductsList,
      "/categories/material_processing_equipment/Extruders"
    );
    addProductLinks(
      AnalyticalInstrumentsList,
      "/categories/analytical_instruments"
    );

    const hostname = "https://vbccinstruments.com";
    if (!hostname) {
      throw new Error("Hostname is required");
    }

    // Generate sitemap with proper error handling
    const stream = new SitemapStream({
      hostname: hostname,
      xmlns: {
        news: false,
        xhtml: true,
        image: false,
        video: false,
      },
    });

    const xmlString = await streamToPromise(
      Readable.from(links).pipe(stream)
    ).then((data) => data.toString());

    // Return with proper headers and cache control
    return new Response(xmlString, {
      headers: {
        "Content-Type": "application/xml",
        "Cache-Control":
          "public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400",
        "X-Content-Type-Options": "nosniff",
      },
    });
  } catch (error) {
    console.error("Error generating sitemap:", error);
    return new Response(
      `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"></urlset>`,
      {
        status: 500,
        headers: {
          "Content-Type": "application/xml",
          "Cache-Control": "no-cache",
        },
      }
    );
  }
}
