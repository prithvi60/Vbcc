import Hero from "@/components/Hero";
import Clients from "@/components/Clients";
import Explore from "@/components/Explore";
import HowWeDo from "@/components/HowWeDo";
import Newsletter from "@/components/Newsletter";
import ProductLayout from "@/components/ProductLayout";
import DefaultLayout from "@/components/DefaultLayout";
import Head from "next/head";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "VBCC High temperature Instruments",
    image:
      "https://ik.imagekit.io/webibee/VBCC/homepage/VBCC%20logo.svg?updatedAt=1733742968628",
    description:
      "VBCC High Temperature Instruments is the leading manufacturer of top-tier furnaces, kilns, analytical instruments, and material processing equipment for precise heating and drying in laboratory and industrial settings.",
    email: "info@vbccinstruments.com",
    url: "https://vbccinstruments.com/",
  };
  return (
    <main>
      <Head>
        <title>VBCC High Temperature Instruments</title>
        <meta
          name="description"
          content="VBCC High Temperature Instruments is the leading manufacturer of top-tier furnaces, kilns, analytical instruments, and material processing equipment for precise heating and drying in laboratory and industrial settings."
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>
      <DefaultLayout>
        <Hero />
        <Clients />
        <Explore />
        <HowWeDo />
        <ProductLayout />
        {/* <Testimonials />
        <OurTeam /> */}
        <Newsletter />
      </DefaultLayout>
    </main>
  );
}
