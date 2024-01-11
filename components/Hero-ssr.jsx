"use client";
import { Link as Mylink } from "react-scroll";
import { HiOutlineArrowNarrowDown } from "react-icons/hi";
import InnerCarousel from "./Carousel";
import { Btn2 } from "./Btn";
import Image from "next/image";
import Carousel from "react-multi-carousel";
// import { Suspense } from "react";

const responsive = {
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1024
    },
    items: 3,
    slidesToSlide: 2,
    partialVisibilityGutter: 40
  },
  mobile: {
    breakpoint: {
      max: 464,
      min: 0
    },
    items: 2,
    slidesToSlide: 2,
    partialVisibilityGutter: 30
  },
  tablet: {
    breakpoint: {
      max: 1024,
      min: 200
    },
    items: 1,
    slidesToSlide: 1,
    partialVisibilityGutter: 30
  }
};

const HeroSSR = () => {

  return (
    <section className="h-[90vh] w-full relative">
 <Carousel
        showDots
        // deviceType={deviceType}
        ssr
        slidesToSlide={1}
        containerClass="carousel-with-custom-dots"
        responsive={responsive}
        partialVisible
        infinite
        renderDotsOutside={false}
      >
        {/* Relative is affecting height */}
        <div className="h-[90vh] relative m-0">
          <Image
            src={"https://ik.imagekit.io/webibee/VBCC/hero-bg.png"}
            alt="test"
            fill
            sizes={"100vw"}
            priority={true}
            placeholder="blur"
            blurDataURL={
              "data:image/webp;base64,UklGRhoDAABXRUJQVlA4WAoAAAAgAAAACgEAsQAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggLAEAALATAJ0BKgsBsgA/cbbSZDStqSah0ukCkC4JaW7dX1o7hfYViHTBHkXM9fsZh9I3yL3TE9mLEOmaaltvKxPTIg5NpWQbie0x5u56L1jvwR4b7xVqLsfk9TKdSdmF4sptnlhL+8qw2lSemJ+l257nlOpOyBuy+NRWlvN3Vd+sqOqoYNYezdoI/Suz15pNTup7+6JLbG502IIN2V3Y71QpzPIRcVguZAAAeY3OK5Da/CFfpIwrqBCDMsql1ZAAAAbhqwaL0hRkqTCpSF83jQXmSKGvMYZ8LDRk3lZ1u+fkPyatDPTugyZEJMTyX5TvfMnVCry1CNC1s5XTiZiASWuoLfzCIwctXPVabwp2zExSI/Uud7cy0iFcfMW+tXlM9ulrulPeGaAYKHmATdIAAA=="
            }
            className="object-cover object-center brightness-50 aspect-auto"
          />
        </div>
        <div className="h-[90vh] relative m-0">
          <Image
            src={"https://ik.imagekit.io/webibee/VBCC/hero-bg-2.png"}
            alt="test1"
            fill
            sizes={"100vw"}
            placeholder="blur"
            blurDataURL={
              "data:image/webp;base64,UklGRhoDAABXRUJQVlA4WAoAAAAgAAAACgEAsQAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggLAEAALATAJ0BKgsBsgA/cbbSZDStqSah0ukCkC4JaW7dX1o7hfYViHTBHkXM9fsZh9I3yL3TE9mLEOmaaltvKxPTIg5NpWQbie0x5u56L1jvwR4b7xVqLsfk9TKdSdmF4sptnlhL+8qw2lSemJ+l257nlOpOyBuy+NRWlvN3Vd+sqOqoYNYezdoI/Suz15pNTup7+6JLbG502IIN2V3Y71QpzPIRcVguZAAAeY3OK5Da/CFfpIwrqBCDMsql1ZAAAAbhqwaL0hRkqTCpSF83jQXmSKGvMYZ8LDRk3lZ1u+fkPyatDPTugyZEJMTyX5TvfMnVCry1CNC1s5XTiZiASWuoLfzCIwctXPVabwp2zExSI/Uud7cy0iFcfMW+tXlM9ulrulPeGaAYKHmATdIAAA=="
            }
            className="object-cover object-center brightness-50"
          />
        </div>
        <div className="h-[90vh] relative m-0">
          <Image
            src={"https://ik.imagekit.io/webibee/VBCC/hero-bg-3.png"}
            alt="test2"
            fill
            placeholder="blur"
            sizes={"100vw"}
            blurDataURL={
              "data:image/webp;base64,UklGRhoDAABXRUJQVlA4WAoAAAAgAAAACgEAsQAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggLAEAALATAJ0BKgsBsgA/cbbSZDStqSah0ukCkC4JaW7dX1o7hfYViHTBHkXM9fsZh9I3yL3TE9mLEOmaaltvKxPTIg5NpWQbie0x5u56L1jvwR4b7xVqLsfk9TKdSdmF4sptnlhL+8qw2lSemJ+l257nlOpOyBuy+NRWlvN3Vd+sqOqoYNYezdoI/Suz15pNTup7+6JLbG502IIN2V3Y71QpzPIRcVguZAAAeY3OK5Da/CFfpIwrqBCDMsql1ZAAAAbhqwaL0hRkqTCpSF83jQXmSKGvMYZ8LDRk3lZ1u+fkPyatDPTugyZEJMTyX5TvfMnVCry1CNC1s5XTiZiASWuoLfzCIwctXPVabwp2zExSI/Uud7cy0iFcfMW+tXlM9ulrulPeGaAYKHmATdIAAA=="
            }
            className="object-cover object-center brightness-50"
          />
        </div>
      </Carousel>
      {/* <div className="absolute top-0 left-0 h-[90vh] w-full z-20 backdrop-opacity-10 bg-black/40"></div> */}
      {/* <Suspense fallback={<div>Loading..</div>}> */}
      <div className="text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
        <h4 className="text-xl md:text-2xl uppercase font-Lora mb-4 md:mb-6">
          Vb Ceramic Consultants
        </h4>
        <p className="font-Lora text-[32px] md:text-[40px] tracking-tight mt-2">
          Tailor Made
        </p>
        <InnerCarousel />
        <span className="flex justify-center items-center gap-6">
          <Btn2
            Hbgcolor={"bg-white"}
            textColor={"text-white"}
            HtextColor={"text-warning"}
            bColor={"border-white"}
            title={"Our Products"}
            href={"https://ik.imagekit.io/webibee/VBCC/products"}
            background={"backdrop-blur-md bg-black/30"}
          />
          <Btn2
            Hbgcolor={"bg-info hover:border-info "}
            textColor={"text-white"}
            HtextColor={"text-white"}
            bColor={"border-white"}
            title={"Contact Us"}
            href={"https://ik.imagekit.io/webibee/VBCC/contact"}
            background={"backdrop-blur-md bg-black/30"}
          />
        </span>
      </div>
      <Mylink
        aria-label="back to client"
        to="client"
        name="gotoclient"
        id="gotoclient"
        href="#client"
        spy={true}
        smooth={true}
        offset={20}
        duration={800}
        className={`absolute bottom-5 left-1/2 -translate-x-1/2 -translate-y-1/2 block rounded-full  p-3 md:p-[18px] border border-secondary hover:bg-white text-center text-base duration-700 delay-75 font-urbanist capitalize w-max group cursor-pointer z-30 backdrop-blur-md bg-black/30`}
      >
        <div className={`h-6 w-full overflow-hidden`}>
          <h4
            className={`transition translate-y-0 group-hover:-translate-y-20 duration-700`}
          >
            <HiOutlineArrowNarrowDown className="h-6 w-6 md:h-7 md:w-7 text-secondary " />
          </h4>
          <h4
            className={`translate-y-20 transition group-hover:-translate-y-[30px] duration-700`}
          >
            <HiOutlineArrowNarrowDown className="h-6 w-6 md:h-7 md:w-7 text-warning" />
          </h4>
        </div>
      </Mylink>
      {/* </Suspense> */}
    </section>
  );
};

export default HeroSSR;
