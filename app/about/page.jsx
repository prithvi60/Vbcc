import DefaultLayout from "@/components/DefaultLayout";
import OurTeam from "@/components/OurTeam";
import { Story } from "@/components/about/Story";
import Timeline from "@/components/about/Timeline";
import { Vison } from "@/components/about/Vison";

export default function Home() {

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "VBCC HTI",
    description:
      "VBCC High Temperature Instruments is a leading multispecialty manufacturing company with over 22 years of experience in producing laboratory and industrial furnaces, analytical instruments, and material processing equipment. Since 2002, we have served thriving industries, R&D organizations, and esteemed universities across India. Our commitment to innovation, quality, and precision drives us to deliver customized solutions that meet the unique needs of our clients, providing outstanding value for money. ",
    url: "https://vbccinstruments.com/about",
    logo: "https://ik.imagekit.io/webibee/VBCC/homepage/VBCC%20logo.svg?updatedAt=1733742968628",
    alternateName: "VBCC High Temperature Instruments",
    sameAs: [
      "https://www.linkedin.com/company/vbcc-hti/",
      "https://www.facebook.com/vbcc.hti/",
      "https://www.instagram.com/vbcc_hti/",
      "https://www.youtube.com/@vbcc_hti",
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+91 9600478315",
        contactType: "sales",
        email: "sales@vbccinstruments.com",
        areaServed: "IN",
        availableLanguage: "en",
      },
    ],
  };

  return (
    <section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <DefaultLayout>
        <Story />
        <OurTeam />
        <Vison />
        <Timeline />
      </DefaultLayout>
    </section>
  );
}
