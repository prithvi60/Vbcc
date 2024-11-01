import { GalleryHero } from "@/components/gallery/GalleryHero";
import dynamic from "next/dynamic";

const VisitationComponent = dynamic(() =>
  import("@/components/gallery/Visitation")
);
const CultureComponent = dynamic(() => import("@/components/gallery/Culture"));
import othersData from "@/libs/others.json";
import DefaultLayout from "@/components/DefaultLayout";

export default function Home() {
  return (
    <main>
      <DefaultLayout>
        <GalleryHero />
        <CultureComponent
          title={"Culture"}
          shortDesc={
            "Redefining what it means to be a team. Showcasing our Work life through the years."
          }
          imgSrc={othersData.awardImg}
          scrollId={"culture"}
        />
        <VisitationComponent
          title={"Visitations"}
          shortDesc={
            "We have welcomed countless visits from esteemed scientists all around the world."
          }
          imgSrc={othersData.visitationImg}
          scrollId={"visitations"}
        />
        <CultureComponent
          title={"Awards"}
          shortDesc={
            "Redefining what it means to be a team. Showcasing our Work life through the years."
          }
          imgSrc={othersData.awardImg}
          scrollId={"awards"}
        />
        {/* <VisitationComponent
        title={"Visitations"}
        shortDesc={
          "Redefining what it means to be a team. Showcasing our Work life through the years."
        }
        imgSrc={othersData.visitationImg}
      /> */}
      </DefaultLayout>
    </main>
  );
}
