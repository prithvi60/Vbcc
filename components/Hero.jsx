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
import {
  HeroBox,
  HeroBoxBottom,
  HeroBoxBottomMobile,
  HeroBoxMobile,
} from "@/svg_components/LandingHeroBox";
import Statistics from "./Statistics";
import { LiaLongArrowAltLeftSolid, LiaLongArrowAltRightSolid } from "react-icons/lia";
import { MdDoubleArrow, MdKeyboardDoubleArrowRight } from "react-icons/md";
const Hero = () => {
  // const [client, setClient] = useState(false);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setClient(true);
  //   }, 200);
  // }, []);

  return (
    <section className="relative z-0 w-full h-full mb-10 text-white lg:mb-24">
      <div className="relative w-full h-full overflow-hidden rounded-2xl">
        {/* <div className="absolute -top-5 md:-top-3 xl:-top-5 2xl:-top-11 2xl:-left-2.5 size-28 left-1 md:size-24 2xl:size-52 xl:size-32">
              <Image
                alt="VBCC Logo"
                src="/VBCC - Logo.svg"
                fill
                className="z-0 object-cover object-center"
              />
            </div> */}
        <div className="relative w-full h-[140dvh] md:h-[85dvh] lg:h-[110vh] xl:h-[142vh] hero-mask_home">
          <Image
            alt="background image"
            src="/her0bg.png"
            fill
            className="z-0 object-cover object-center brightness-[0.30]"
          />
          {/* <div className="absolute w-full h-full bg-[#293171aa] bg-opacity-60 z-10"></div> */}
        </div>
        <div className="absolute z-20 w-11/12 md:w-[80%] -translate-x-1/2 -translate-y-1/2 top-[55%] md:top-1/2 left-1/2 font-Montserrat ">
          <div className="flex flex-col items-center w-full h-full gap-28 md:gap-6 lg:justify-between md:flex-row">
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
              <div className="absolute hidden w-full md:block left-2 -top-20 md:-top-36 lg:-top-48 2xl:-top-60">
                <HeroBox className="h-10 md:h-40 lg:h-52 2xl:h-64 fill-none" />
              </div>
              <div className="absolute block w-full md:hidden left-2 -top-24">
                <HeroBoxMobile className="h-10 fill-none" />
              </div>
              <div className="w-full md:w-4/5">
                <div className="w-full space-y-2 md:space-y-4 md:w-4/5 xl:w-4/5">
                  <p className="w-full text-xs font-medium leading-tight md:text-sm xl:text-base">
                    Vbcc High temperature Instruments
                  </p>
                  <h4 className="text-[16px] font-bold tracking-wider md:text-[22px] xl:text-[38px] leading-tight uppercase">
                    TAILOR MADE
                  </h4>
                  <h2 className="text-[24px] font-bold tracking-wider md:text-[40px] xl:text-[64px] md:leading-tight xl:leading-[4rem]">
                    Laboratory Furnaces
                  </h2>
                  <div className="flex items-center gap-5">
                    <button
                      className={`font-semibold w-fit transition-all flex items-center text-xs xl:text-base gap-3 capitalize duration-400 ease-linear hover:bg-primary bg-info text-white rounded-full cursor-pointer px-6 py-2`}
                    >
                      <h4>{"ENQUIRE NOW"}</h4>
                      <span>
                        <MdKeyboardDoubleArrowRight className="text-xl" />
                      </span>
                    </button>
                    <button
                      className={`font-semibold w-fit transition-all flex items-center text-xs xl:text-base gap-3 duration-400 ease-linear capitalize bg-gradient-to-bl from-[#6b778cf8] to-[#ffffff3f] hover:bg-gradient-to-t hover:from-info hover:to-info text-white rounded-full cursor-pointer px-6 py-2`}
                    >
                      <h4>{"GO TO CATEGORY"}</h4>
                      <span>
                        <MdKeyboardDoubleArrowRight className="text-xl" />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="absolute z-10 hidden w-full md:block left-2 -bottom-14 md:-bottom-40 lg:-bottom-52 2xl:-bottom-64">
                <HeroBoxBottom className="h-10 md:h-40 lg:h-52 2xl:h-64 fill-none" />
              </div>
              <div className="absolute z-10 block w-full md:hidden left-2 -bottom-12">
                <HeroBoxBottomMobile className="h-10 md:h-40 lg:h-52 2xl:h-64 fill-none" />
              </div>
            </div>
            <div className="w-full max-w-sm px-6 lg:max-w-md lg:px-0">
              <div className="rounded-lg w-full h-full bg-gradient-to-bl from-[#6b778cf8] to-[#ffffff3f] backdrop-blur-xl space-y-4 md:space-y-7 px-7 py-7 lg:px-10 lg:py-10">
                <h4 className="text-lg font-medium tracking-wide lg:text-xl">
                  Best Selling
                </h4>
                <div className="absolute flex right-14 top-5">
                  {/* <SamplePrevArrow />
                    <SampleNextArrow /> */}
                  <div className="relative px-3.5 py-1 border-l rounded-l-xl border-y cursor-pointer hover:bg-info after:p-0.5 after:bg-info after:rounded-full after:absolute after:right-3.5 after:top-2.5 after:hover:bg-white"><LiaLongArrowAltLeftSolid className="text-base" /></div>
                  <div className="px-3.5 py-1 border-r rounded-r-xl border-y cursor-pointer hover:bg-info after:p-0.5 after:bg-info after:rounded-full after:absolute after:right-[25px] after:top-[10.4px] after:hover:bg-white"><LiaLongArrowAltRightSolid className="text-base" />
                  </div>
                </div>
                <div className="w-full h-full space-y-8 overflow-scroll lg:overflow-auto max-h-[430px] lg:max-h-full lg:h-full hideScroll">
                  {products.map((item, id) => (
                    <div className="flex items-center gap-5 hover:scale-110 lg:hover:scale-[1.15] transition-all duration-400 ease-linear group" key={id}>
                      <div className="relative px-12 py-12 rounded-lg lg:py-16 lg:px-16 bg-info">
                        <h4 className="absolute top-5 left-3 text-[9px] lg:text-xs border border-white px-3 py-1.5">
                          IN STOCK
                        </h4>
                      </div>
                      <div className="space-y-2 lg:space-y-3">
                        <h6 className="text-xs font-medium tracking-wide uppercase">
                          {item.type}
                        </h6>
                        <h4 className="flex items-center gap-2 text-sm font-semibold tracking-wide lg:text-lg">
                          {item.productName}
                          <span>
                            <MdDoubleArrow className="text-2xl text-info" />
                          </span>
                        </h4>
                        <div>
                          <Link
                            href={""}
                            className="hidden w-full px-5 py-2 text-xs bg-transparent border border-white rounded-full xl:w-max hover:bg-info group-hover:block"
                          >
                            Request a quote
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Statistics />
    </section >
  );
};

export default Hero;

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className={"size-4  cursor-pointer"}
      onClick={onClick}
    >
      <Image alt="next arrow" fill src={"/next.svg"} className="object-contain object-center" />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className={"size-4  cursor-pointer"}
      onClick={onClick}
    >
      <Image alt="prev arrow" fill src={"/prev.svg"} className="object-contain object-center" />
    </div>
  );
}

const products = [
  { productName: "APM Kanthal", type: "CERAMIC PRODUCTS" },
  { productName: "Alumina - Boats And Crucibles ", type: "CERAMIC PRODUCTS" },
  { productName: "Alumina - Boats And Crucibles", type: "CERAMIC PRODUCTS" },
  { productName: "Graphite Heating Elements", type: "CERAMIC PRODUCTS" },
];

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
