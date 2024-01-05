import Link from "next/link";
import { FAQAccordion } from "./FAQAccordion";
import Image from "next/image";

const ImgSrc = "/faq.png";

export const FAQContent = () => {
  return (
    <section className="h-full w-full px-5 py-[60px] md:px-10 lg:px-[60px] bg-primary ">
      <div className="w-full lg:w-3/5 h-auto mx-auto space-y-8">
        <div className="w-full h-full space-y-6">
          <h2 className="font-Lora text-2xl md:text-4xl xl:text-6xl w-full">
            FAQs
          </h2>
          <p className="font-urbanist text-sm lg:text-base">
            If you cannot find what you’re looking for, feel free to <span className="underline underline-offset-1"><Link href={"/contact"}>contact us.</Link></span>
          </p>
          {/* <div
            style={{ backgroundImage: `url(${ImgSrc})` }}
            className="h-[440px] w-full  rounded-3xl bg-cover bg-center bg-no-repeat"
          ></div> */}
          <div className="relative h-[440px] w-full rounded-3xl">
            <Image fill src={ImgSrc} alt={"Faq Image"} 
            // placeholder="blur" blurDataURL=""
            sizes="(min-width: 820px) 50vw, 100vw"
            className="object-cover object-center" />
        </div>
        </div>
        <FAQAccordion />
      </div>
    </section>
  );
};
