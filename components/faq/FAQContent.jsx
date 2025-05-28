import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";

const ImgSrc = "https://cdn.webibee.com/vbcc/faq.png";
const FAQAccordionComponent = dynamic(() => import("./FAQAccordion"));

const FAQContent = () => {
  return (
    <section className="h-full w-full px-5 py-[60px] md:px-10 lg:px-[60px] bg-primary mt-24">
      <div className="w-full h-auto mx-auto space-y-8 lg:w-3/5">
        <div className="w-full h-full space-y-6">
          <h2 className="w-full text-2xl font-bold font-Montserrat md:text-4xl xl:text-6xl text-info">
            FAQs
          </h2>
          <p className="text-sm font-Montserrat lg:text-base">
            If you cannot find what you’re looking for, feel free to{" "}
            <span className="underline underline-offset-1">
              {" "}
              <Link title="contact link" passHref href={"/contact"}>
                contact us.
              </Link>
            </span>
          </p>
          <div className="relative h-[440px] w-full overflow-hidden">
            <Image
              fill
              src={ImgSrc}
              alt={"Faq Image"}
              title={"Faq Image"}
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
