import { AllPageHero } from "@/components/AllPageHero";
import { OurTeam } from "@/components/about/OurTeam";
import { Story } from "@/components/about/Story";
import { Vison } from "@/components/about/Vison";

const obj = {
  title: "About Us",
  desc: "Step into VBCC High Temperature Instruments story, Guided by Dr. Viswabaskaran, bringing over 20 years of experience in the field. We craft furnaces, high-temperature instruments, and solutions for the ceramic industry, and now, with Naveen leading, we're expanding globally.",
  ImgSrc: "https://ik.imagekit.io/webibee/VBCC/product-bg.png",
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
