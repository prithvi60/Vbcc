import { AllPageHero } from "@/components/AllPageHero";
import { OurTeam } from "@/components/about/OurTeam";
import { Story } from "@/components/about/Story";
import { Vison } from "@/components/about/Vison";

const obj = {
  title: "About Us",
  desc: "Step into VBCC High Temperature Instruments story, guided by Dr. Viswabaskaran since 2002. We craft furnaces, high-temperature instruments and solutions fpr ceramic industry, and now, with Naveen leading, we're expanding globally.",
  ImgSrc: "/product-bg.png",
};

export default function Home() {
  return (
    <main>
      <AllPageHero title={obj.title} desc={obj.desc} ImgSrc={obj.ImgSrc} />
      <Story/>
      <Vison/>
      <OurTeam/>
    </main>
  );
}
