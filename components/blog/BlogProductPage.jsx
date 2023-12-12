import { Button } from "@nextui-org/react";
import Image from "next/image";

export const BlogProductPage = () => {
  return (
    <section className="px-5 py-10 md:px-10 md:py-[60px] lg:px-[60px] lg:py-20 text-warning">
      <div className="block w-full xl:w-3/4 mx-auto space-y-[34px]">
        <div className="space-y-6">
          <h2 className="font-Lora text-2xl md:text-4xl xl:text-6xl w-full">
            Dilatometer Principle and Working
          </h2>
          <Button
            variant="bordered"
            className="px-4 py-2.5 border border-warning w-max rounded-full font-urbanist text-warning"
          >
            Feature
          </Button>
        </div>
        <div className="space-y-10 lg:space-y-[60px]">
          <div className="relative w-full h-[300px] md:h-[505px]">
            <Image
              fill
              src={"/blog-2.png"}
              alt="product"
              className="absolute object-cover object-center"
            />
          </div>
          <div className="space-y-3">
            <h4 className="font-Lora text-2xl lg:text-[32px] tracking-wide">Dilatometer Principle and Working</h4>
            <p className="font-urbanist text-base lg:text-xl leading-loose">Discover VBCC&apos;s range of Industrial and Research equipment. Our innovative, high-quality products are customizable to meet your specific needs, enhancing manufacturing and research capabilities.</p>
          </div>
          <div className="space-y-3">
            <h4 className="font-Lora text-2xl tracking-wide">Dilatometer Principle and Working</h4>
            <p className="font-urbanist text-base lg:text-xl leading-loose">Discover VBCC&apos;s range of Industrial and Research equipment. Our innovative, high-quality products are customizable to meet your specific needs, enhancing manufacturing and research capabilities.</p>
          </div>
          <div className="space-y-3">
            <h4 className="font-Lora text-2xl lg:text-[32px] tracking-wide">Dilatometer Principle and Working</h4>
            <p className="font-urbanist text-base lg:text-xl leading-loose">Discover VBCC&apos;s range of Industrial and Research equipment. Our innovative, high-quality products are customizable to meet your specific needs, enhancing manufacturing and research capabilities.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
