import { AllPageHero } from "@/components/AllPageHero";
import DefaultLayout from "@/components/DefaultLayout";
import Explore from "@/components/Explore";
import { OurPresenceAccordion } from "@/components/presence/OurPresenceAccordion";
import { OurPresenceContact } from "@/components/presence/OurPresenceContact";

const obj = {
  title: "Our Presence",
  desc: "Discover VBCC's range of Industrial and Research equipment across the Globe. Our innovative, high-quality products are customizable to meet your specific needs, enhancing manufacturing and research capabilities.",
  ImgSrc: "https://ik.imagekit.io/webibee/VBCC/presenceimg.png?updatedAt=1707283206454",
};

export default function Home() {
  return (
    <main>
      <DefaultLayout>
        <AllPageHero title={obj.title} desc={obj.desc} ImgSrc={obj.ImgSrc} />
        <OurPresenceAccordion />
        <Explore />
        <OurPresenceContact
          title={"Contact us to know More"}
          mobTitle={"Contact Us"}
          para={
            "Discover our industrial furnaces. Call or inquire now to discuss specifications and place your order. Tailored solutions await with our in-house manufacturing expertise."
          }
        />
      </DefaultLayout>
    </main>
  );
}
