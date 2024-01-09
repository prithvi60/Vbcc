"use client";
import Slider from "react-slick";
import { Link as Mylink } from "react-scroll";
import { HiOutlineArrowNarrowDown } from "react-icons/hi";
import Carousel from "./Carousel";
import { Btn2 } from "./Btn";
import Image from "next/image";
const Hero = () => {
  return (
    <section className="h-[90vh] w-full relative">
      <Slider
        dots={false}
        infinite={true}
        autoplay={true}
        speed={1900}
        autoplaySpeed={2300}
        arrows={false}
        slidesToShow={1}
        slidesToScroll={1}
        vertical={true}
        verticalSwiping={false}
        pauseOnHover={false}
        className="!z-0"
      >
        {/* Relative is affecting height */}
        <div className="h-[90vh] relative m-0">
          <Image
            src={"https://ik.imagekit.io/webibee/VBCC/hero-bg.png"}
            alt="test"
            fill
            quality={100}
            priority={true}
            placeholder="blur"
            blurDataURL={
              "data:image/webp;base64,UklGRhoDAABXRUJQVlA4WAoAAAAgAAAACgEAsQAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggLAEAALATAJ0BKgsBsgA/cbbSZDStqSah0ukCkC4JaW7dX1o7hfYViHTBHkXM9fsZh9I3yL3TE9mLEOmaaltvKxPTIg5NpWQbie0x5u56L1jvwR4b7xVqLsfk9TKdSdmF4sptnlhL+8qw2lSemJ+l257nlOpOyBuy+NRWlvN3Vd+sqOqoYNYezdoI/Suz15pNTup7+6JLbG502IIN2V3Y71QpzPIRcVguZAAAeY3OK5Da/CFfpIwrqBCDMsql1ZAAAAbhqwaL0hRkqTCpSF83jQXmSKGvMYZ8LDRk3lZ1u+fkPyatDPTugyZEJMTyX5TvfMnVCry1CNC1s5XTiZiASWuoLfzCIwctXPVabwp2zExSI/Uud7cy0iFcfMW+tXlM9ulrulPeGaAYKHmATdIAAA=="
            }
            className="object-cover object-center brightness-50"
          />
        </div>
        <div className="h-[90vh] relative m-0">
          <Image
            src={"https://ik.imagekit.io/webibee/VBCC/hero-bg-2.png"}
            alt="test"
            quality={100}
            fill
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
            alt="test"
            quality={100}
            fill
            placeholder="blur"
            blurDataURL={
              "data:image/webp;base64,UklGRhoDAABXRUJQVlA4WAoAAAAgAAAACgEAsQAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggLAEAALATAJ0BKgsBsgA/cbbSZDStqSah0ukCkC4JaW7dX1o7hfYViHTBHkXM9fsZh9I3yL3TE9mLEOmaaltvKxPTIg5NpWQbie0x5u56L1jvwR4b7xVqLsfk9TKdSdmF4sptnlhL+8qw2lSemJ+l257nlOpOyBuy+NRWlvN3Vd+sqOqoYNYezdoI/Suz15pNTup7+6JLbG502IIN2V3Y71QpzPIRcVguZAAAeY3OK5Da/CFfpIwrqBCDMsql1ZAAAAbhqwaL0hRkqTCpSF83jQXmSKGvMYZ8LDRk3lZ1u+fkPyatDPTugyZEJMTyX5TvfMnVCry1CNC1s5XTiZiASWuoLfzCIwctXPVabwp2zExSI/Uud7cy0iFcfMW+tXlM9ulrulPeGaAYKHmATdIAAA=="
            }
            className="object-cover object-center brightness-50"
          />
        </div>
      </Slider>
      {/* <div className="absolute top-0 left-0 h-[90vh] w-full z-20 backdrop-opacity-10 bg-black/40"></div> */}
      <div className="text-center space-y-4 md:space-y-6 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
        <h4 className="text-xl md:text-2xl uppercase font-Lora">
          Vb Ceramic Consultants
        </h4>
        <div className="pb-1 md:pb-3">
          <p className="font-Lora text-[32px] md:text-[40px] tracking-tight mt-2">
            Tailor Made
          </p>
          <Carousel />
        </div>
        <div className="flex justify-center items-center gap-6">
          <Btn2
            Hbgcolor={"bg-white"}
            textColor={"text-white"}
            HtextColor={"text-warning"}
            bColor={"border-white"}
            title={"Our Products"}
            href={"/products"}
            background={"backdrop-blur-md bg-black/30"}
          />
          <Btn2
            Hbgcolor={"bg-info hover:border-info "}
            textColor={"text-white"}
            HtextColor={"text-white"}
            bColor={"border-white"}
            title={"Contact Us"}
            href={"/contact"}
            background={"backdrop-blur-md bg-black/30"}
          />
        </div>
      </div>
      <Mylink
        to="client"
        href=""
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
    </section>
  );
};

export default Hero;
