"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { HeroBox, HeroBoxBottom } from "@/svg_components/LandingHeroBox";
const Hero = () => {
  // const [client, setClient] = useState(false);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setClient(true);
  //   }, 200);
  // }, []);

  return (
    <>
      <section className="relative w-full h-full text-white mb-7">
        <div className="relative w-full h-full overflow-hidden rounded-2xl">
            {/* <div className="absolute -top-5 md:-top-3 xl:-top-5 2xl:-top-11 2xl:-left-2.5 size-28 left-1 md:size-24 2xl:size-52 xl:size-32">
              <Image
                alt="VBCC Logo"
                src="/VBCC - Logo.svg"
                fill
                className="z-0 object-cover object-center"
              />
            </div> */}
          <div className="relative w-full h-[100dvh] md:h-[85dvh] lg:h-[110vh] xl:h-[142vh] hero-mask_home">
            <Image
              alt="background image"
              src="/her0bg.png"
              fill
              className="z-0 object-cover object-center"
            />
            <div className="absolute w-full h-full bg-[#293271] bg-opacity-60 z-10"></div>
          </div>
          <div className="absolute z-20 w-[80%] -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 font-Montserrat ">
            <div className="flex flex-col items-center w-full h-full gap-6 lg:justify-between md:flex-row">
              <div className="relative flex items-center gap-5 md:gap-8 xl:gap-20">
                <ul className="flex flex-col items-center justify-center gap-3 -mt-10 md:-mt-0">
                  <li>
                    <Link href={""} className="hover:animate-pulse ">
                      <FaLinkedinIn className="text-base text-white md:text-2xl" />
                    </Link>
                  </li>
                  <li>
                    <Link href={""} className="hover:animate-pulse ">
                      <FaFacebookF className="text-base text-white md:text-2xl" />
                    </Link>
                  </li>
                  <li>
                    <Link href={""} className="hover:animate-pulse ">
                      <FaInstagram className="text-base text-white md:text-2xl" />
                    </Link>
                  </li>
                  <li>
                    <Link href={""} className="hover:animate-pulse ">
                      <FaYoutube className="text-base text-white md:text-2xl" />
                    </Link>
                  </li>
                  <li>
                    <Link href={""} className="hover:animate-pulse ">
                      <FaXTwitter className="text-base text-white md:text-2xl" />
                    </Link>
                  </li>
                </ul>
                <div className="absolute block w-full left-2 -top-20 md:-top-36 lg:-top-48 2xl:-top-60">
                  <HeroBox className="h-28 md:h-40 lg:h-52 2xl:h-64 fill-none" />
                </div>
                <div className="w-full md:w-4/5">
                  <div className="w-full space-y-2 md:space-y-4 md:w-4/5 xl:w-4/5">
                    <p className="w-full text-xs font-medium leading-tight md:text-sm xl:text-base">
                      Vbcc High temperature Instruments
                    </p>
                    <h4 className="text-[20px] font-bold tracking-wider md:text-[22px] xl:text-[38px] leading-tight uppercase">TAILOR MADE</h4>
                    <h2 className="text-[28px] font-bold tracking-wider md:text-[40px] xl:text-[64px] md:leading-tight xl:leading-[4rem]">
                      Laboratory Furnaces
                    </h2>
                  </div>
                </div>
                <div className="absolute z-10 block w-full left-2 -bottom-14 md:-bottom-40 lg:-bottom-52 2xl:-bottom-64">
                  <HeroBoxBottom className="h-28 md:h-40 lg:h-52 2xl:h-64 fill-none" />
                </div>
              </div>
              <div className="px-6">
                <div className="rounded-lg h-96 w-80 bg-slate-200 backdrop-blur-xl">

                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;

// <section className="h-[90vh] w-full relative">
//   {client ? (
//     <Carousel
//       showArrows={false}
//       showThumbs={false}
//       showStatus={false}
//       showIndicators={false}
//       className="!z-0"
//       autoPlay={client}
//       interval={3000}
//       infiniteLoop
//       axis={"vertical"}
//       stopOnHover={false}
//       swipeable={false}
//       animationHandler={customVerticalAnimation}
//     >
//       {/* Relative is affecting height */}
//       <div className="h-[90vh] relative m-0">
//         <Image
//           src={"https://ik.imagekit.io/webibee/VBCC/hero-bg.png"}
//           alt="test"
//           fill
//           sizes={"100vw"}
//           priority={true}
//           quality={50}
//           placeholder="blur"
//         blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPkY9gwEQACMwFRuhgGaQAAAABJRU5ErkJggg=="
//           className="object-cover object-center brightness-50 aspect-auto"
//         />
//       </div>
//       <div className="h-[90vh] relative m-0">
//         <Image
//           src={"https://ik.imagekit.io/webibee/VBCC/hero-bg-2.png"}
//           alt="test1"
//           fill
//           sizes={"100vw"}
//           quality={50}
//           placeholder="blur"
//           blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPkY9gwEQACMwFRuhgGaQAAAABJRU5ErkJggg=="
//           className="object-cover object-center brightness-50"
//         />
//       </div>
//       <div className="h-[90vh] relative m-0">
//         <Image
//           src={"https://ik.imagekit.io/webibee/VBCC/hero-bg-3.png"}
//           alt="test2"
//           fill
//           quality={50}
//           sizes={"100vw"}
//           placeholder="blur"
//         blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPkY9gwEQACMwFRuhgGaQAAAABJRU5ErkJggg=="
//           className="object-cover object-center brightness-50"
//         />
//       </div>
//       {/* <div className="h-[90vh] relative m-0">
//         <Image
//           src={"https://ik.imagekit.io/webibee/VBCC/hero-bg.png"}
//           alt="test"
//           fill
//           sizes={"100vw"}
//           priority={true}
//           quality={50}
//           placeholder="blur"
//           blurDataURL={
//             "data:image/webp;base64,UklGRhoDAABXRUJQVlA4WAoAAAAgAAAACgEAsQAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggLAEAALATAJ0BKgsBsgA/cbbSZDStqSah0ukCkC4JaW7dX1o7hfYViHTBHkXM9fsZh9I3yL3TE9mLEOmaaltvKxPTIg5NpWQbie0x5u56L1jvwR4b7xVqLsfk9TKdSdmF4sptnlhL+8qw2lSemJ+l257nlOpOyBuy+NRWlvN3Vd+sqOqoYNYezdoI/Suz15pNTup7+6JLbG502IIN2V3Y71QpzPIRcVguZAAAeY3OK5Da/CFfpIwrqBCDMsql1ZAAAAbhqwaL0hRkqTCpSF83jQXmSKGvMYZ8LDRk3lZ1u+fkPyatDPTugyZEJMTyX5TvfMnVCry1CNC1s5XTiZiASWuoLfzCIwctXPVabwp2zExSI/Uud7cy0iFcfMW+tXlM9ulrulPeGaAYKHmATdIAAA=="
//           }
//           className="object-cover object-center brightness-50 aspect-auto"
//         />
//       </div> */}
//     </Carousel>
//   ) : (
//     <div className="h-[90vh] relative m-0">
//       <Image
//         src={"https://ik.imagekit.io/webibee/VBCC/hero-bg.png"}
//         alt="test"
//         fill
//         sizes={"100vw"}
//         priority={true}
//         quality={50}
//         placeholder="blur"
//         blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPkY9gwEQACMwFRuhgGaQAAAABJRU5ErkJggg=="
//         className="object-cover object-center brightness-50 aspect-auto"
//       />
//     </div>
//   )}
//   <div className="absolute z-30 text-center -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
//     <h4 className="mb-4 text-lg uppercase font-urbanist md:mb-6">
//       VbCC High temperature instruments
//     </h4>
//     <p className="font-Lora text-[32px] md:text-[40px] tracking-tight mt-2">
//       Tailor Made
//     </p>
//     <InnerCarousel />
//     <span className="flex items-center justify-center gap-6">
//       <Btn2
//         Hbgcolor={"bg-white"}
//         textColor={"text-white"}
//         HtextColor={"text-warning"}
//         bColor={"border-white"}
//         title={"Our Products"}
//         href={"/products"}
//         background={"backdrop-blur-md bg-black/30"}
//       />
//       <Btn2
//         Hbgcolor={"bg-info hover:border-info "}
//         textColor={"text-white"}
//         HtextColor={"text-white"}
//         bColor={"border-white"}
//         title={"Contact Us"}
//         href={"/contact"}
//         background={"backdrop-blur-md bg-black/30"}
//       />
//     </span>
//   </div>
//   {client && (
//     <Mylink
//       aria-label="back to client"
//       to="client"
//       name="gotoclient"
//       id="gotoclient"
//       href="#client"
//       spy={true}
//       smooth={true}
//       offset={20}
//       duration={800}
//       className={`absolute bottom-5 left-1/2 -translate-x-1/2 -translate-y-1/2 block rounded-full p-3 border border-secondary hover:bg-white text-center text-base duration-700 delay-75 font-urbanist capitalize w-max group cursor-pointer z-30 backdrop-blur-md bg-black/30`}
//     >
//       <div className={`h-[26px] w-full overflow-hidden`}>
//         <h4
//           className={`transition translate-y-0 group-hover:-translate-y-20 duration-700`}
//         >
//           <HiOutlineArrowNarrowDown className="w-6 h-6 md:h-7 md:w-7 text-secondary " />
//         </h4>
//         <h4
//           className={`translate-y-20 transition group-hover:-translate-y-[30px] duration-700`}
//         >
//           <HiOutlineArrowNarrowDown className="w-6 h-6 md:h-7 md:w-7 text-warning" />
//         </h4>
//       </div>
//     </Mylink>
//   )}
// </section>