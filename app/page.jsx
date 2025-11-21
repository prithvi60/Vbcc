import Hero from "@/components/Hero";
import Clients from "@/components/Clients";
import Explore from "@/components/Explore";
import HowWeDo from "@/components/HowWeDo";
import Newsletter from "@/components/Newsletter";
import ProductLayout from "@/components/ProductLayout";
import DefaultLayout from "@/components/DefaultLayout";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "VBCC High Temperature Instruments",
    image:
      "http://cdn.shopifyapp.shop/vbcc/homepage/VBCC%20logo.svg",
    description:
      "VBCC High Temperature Instruments is the leading manufacturer of top-tier furnaces, kilns, analytical instruments, and material processing equipment for precise heating and drying in laboratory and industrial settings.",
    email: "info@vbccinstruments.com",
    url: "https://vbccinstruments.com/",
  };
  const jsonLdLocal = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "VBCC HTI",
    image:
      "http://cdn.shopifyapp.shop/vbcc/homepage/VBCC%20logo.svg",
    url: "https://vbccinstruments.com/categories",
    telephone: "+91 9600478315",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "207, 3rd Link Road, Nehru Nagar Industrial Estate, Kottivakam",
      addressLocality: "Chennai, Tamil Nadu",
      postalCode: "600041",
      addressCountry: "IN",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "09:00",
      closes: "18:00",
    },
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdLocal) }}
      />
      <DefaultLayout>
        <Hero />
        <Clients />
        <Explore />
        <HowWeDo />
        <ProductLayout />
        <Newsletter />
      </DefaultLayout>
    </main>
  );
}
