import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";

const ImgSrc = "https://ik.imagekit.io/webibee/VBCC/faq.png";
const FAQAccordionComponent = dynamic(() => import("./FAQAccordion"));

const FAQContent = () => {
  return (
    <section className="h-full w-full px-5 py-[60px] md:px-10 lg:px-[60px] bg-primary ">
      <div className="w-full lg:w-3/5 h-auto mx-auto space-y-8">
        <div className="w-full h-full space-y-6">
          <h2 className="font-Lora text-2xl md:text-4xl xl:text-6xl w-full">
            FAQs
          </h2>
          <p className="font-urbanist text-sm lg:text-base">
            If you cannot find what you’re looking for, feel free to{" "}
            <span className="underline underline-offset-1">
              {" "}
              <Link passHref href={"/contact"}>
                contact us.
              </Link>
            </span>
          </p>
          <div className="relative h-[440px] w-full overflow-hidden">
            <Image
              fill
              src={ImgSrc}
              alt={"Faq Image"}
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPkY9gwEQACMwFRuhgGaQAAAABJRU5ErkJggg=="
              sizes="(min-width: 1040px) calc(60vw - 72px), (min-width: 820px) calc(100vw - 80px), calc(100vw - 40px)"
              className="object-cover object-center rounded-3xl"
            />
          </div>
        </div>
        <FAQAccordionComponent />
      </div>
    </section>
  );
};

export default FAQContent;
