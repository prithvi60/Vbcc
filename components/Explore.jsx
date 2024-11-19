import { Ceramics } from "@/svg_components/Ceramics";
import { CeramicsProduct } from "@/svg_components/CeramicsProduct";
import { Research } from "@/svg_components/Research";
import Image from "next/image";
import Link from "next/link";
import { RiArrowRightUpLine } from "react-icons/ri";
import othersData from "@/libs/others.json";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Modal2 } from "./landing page/Modal";
const Explore = () => {
  return (
    <section className="relative z-auto w-full h-full pt-40 bg-white pb-60 text-primary font-Montserrat">
      <div className="absolute z-10 w-full h-[15vh] sm:h-[25vh] md:h-[45vh] right-0 top-10
       md:w-4/5 md:-top-24">
        <div
          className="relative w-full h-full px-6 py-8 bg-center bg-no-repeat bg-cover card-mask_2 border-3 border-secondary"
          style={{
            backgroundImage: "url('/counterBg.png')"
          }}
        >
          <div className="absolute w-full h-full bg-[#293271] bg-opacity-60 top-0 left-0 z-20"></div>
          <p className="relative z-30 w-full -mt-3 text-xl text-white md:my-14 md:text-2xl xl:text-5xl md:w-3/4">Your Visualization Of Your Product,We Bring To Life.</p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-between mb-56 lg:flex-row">
        <div className="block p-10 mx-auto space-y-4">
          <div className="relative flex gap-2 items-center lg:block text-3xl text-[#A7ACB8] md:text-5xl group">
            <h4 className="w-full lg:w-3/5">Explore Products</h4>
            <RiArrowRightUpLine className="mt-2 lg:mt-0 lg:absolute top-5 left-56 text-info" />
          </div>
          <Modal2 />
        </div>
        <div className="flex flex-col gap-8 px-5 md:flex-row md:px-7 xl:px-16 xl:gap-12">
          {exploreList.map((list, idx) => (
            <div className="relative h-[320px] w-[300px] md:w-[230px] lg:w-[200px] xl:w-[260px] md:h-[480px] after:absolute after:top-2 after:-left-2 z-10 after:border-2 after:border-info after:w-full after:h-full" key={idx}>
              <Image
                src={list.img}
                fill
                alt="image"
                className="object-cover object-center  brightness-[0.30]"
              />
              <div className="absolute block w-full space-y-4 text-white bottom-14 left-5">
                <div className="relative z-20 size-14 md:size-20">
                  <Image
                    src={list.icon}
                    fill
                    alt="image"
                    className="object-cover object-center"
                  />
                </div>
                <h2 className="text-base font-bold tracking-wider !leading-tight md:text-[18px] xl:text-[22px] w-4/5 capitalize">
                  {list.title}
                </h2>
                <p className="w-4/5 text-xs md:text-sm">
                  {list.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="relative flex flex-col w-[96%] sm:w-full h-full gap-20 lg:gap-0 lg:flex-row lg:justify-between">
        <div className="relative w-full h-full lg:w-3/5">
          <div className="z-0 h-full md:h-[100vh] absolute -bottom-3 md:-bottom-24 lg:-bottom-10 xl:-bottom-24 left-2 w-full">
            <div
              className="relative z-0 w-full h-full px-6 py-8 bg-right-bottom bg-no-repeat bg-cover explore_card-mask border-3 border-secondary"
              style={{
                backgroundImage: "url('/explore-image-bg.png')",
              }}
            >
              <div className="absolute w-full h-full bg-[#293271] bg-opacity-60 top-0 left-0 z-10"></div>
            </div>
          </div>
          <div className="relative flex flex-col items-end w-3/4 h-auto gap-6 ml-20 lg:w-4/5">
            {othersData.whyChooseUs.map((item, idx) => (
              <div
                className={`p-6 bg-info space-y-4 rounded-lg w-full h-auto border border-secondary text-white`}
                key={idx}
              >
                <div className="relative w-8 h-8 md:h-10 md:w-10">
                  <Image
                    fill
                    src={item.img}
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPkY9gwEQACMwFRuhgGaQAAAABJRU5ErkJggg=="
                    alt="Logo"
                    className="absolute object-contain object-center"
                  />
                </div>
                <p className="text-xs md:text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative block w-full px-10 space-y-4 md:py-10 xl:py-12 md:space-y-8 lg:w-2/5 text-primary">
          <h2 className="text-[28px] font-bold tracking-wider !leading-tight md:text-[36px] lg:text-[44px] xl:text-[52px] w-full capitalize flex gap-1">
            Why <span className="text-info">Choose Us?</span>
          </h2>
          <p className="text-sm md:text-base">
            with over two decades of expertise, VBCC High Temperature
            Instruments Pvt, Ltd, previously Known as VB Ceramic Consultants is
            a distinguished leader crafting top-tier Instruments, Equipment,
            Furnaces, and Kilns, Our unwavering commitment to excellance has
            earned trust from diverse clientee, including prestigious
            universities, research organizations,and thriving industries.
          </p>
          <p className="text-sm md:text-base">
            At VBCC, our dedicated team delivers comprehensive solutions across
            the industry spectrum,Providing superior products and essential
            technical expertise through tailored turnkey solutions. Choose VBCC
            for quality, innovation, and personalized service, transforming
            challenges into oppurtunites.
          </p>
          <Modal2 />
          <div className="absolute -bottom-48 lg:-bottom-44 xl:-bottom-32 left-24 md:left-32 lg:left-20 xl:left-32">
            <div className="relative w-20 overflow-hidden h-44 md:w-24 md:h-52 xl:w-32 xl:h-64">
              <Image
                src={"/card 1.png"}
                fill
                alt="image"
                className="object-cover object-center rounded-full"
              />
              <div className="absolute top-0 left-0 z-0 w-full h-full bg-gradient-to-b from-[#afadadef] via-[#848080df] to-[#a9a9a9de] rounded-full bg-opacity-20"></div>
              <div className="absolute overflow-hidden top-4 left-3 md:top-10 md:left-4 xl:left-6 size-14 xl:size-20">
                <Image
                  src={"/iso.svg"}
                  fill
                  alt="image"
                  className="object-contain object-center"
                />
              </div>
              <div className="absolute overflow-hidden bottom-4 left-3 md:bottom-10 md:left-4 xl:left-6 size-14 xl:size-20">
                <Image
                  src={"/ce-logo.svg"}
                  fill
                  alt="image"
                  className="object-contain object-center"
                />
              </div>
            </div>
          </div>
          <div className="absolute -bottom-32 xl:-bottom-24 right-24 md:right-52 lg:right-16 xl:right-40">
            <div className="relative w-20 h-44 md:w-24 md:h-52 xl:w-32 xl:h-64">
              <Image
                src={"/card 1.png"}
                fill
                alt="image"
                className="object-cover object-center rounded-full"
              />
              <div className="absolute top-0 left-0 z-0 w-full h-full bg-gradient-to-b from-[#afadadef] via-[#848080df] to-[#a9a9a9de] rounded-full bg-opacity-20"></div>
              <div className="absolute overflow-hidden top-4 left-3 md:top-10 md:left-4 xl:left-6 size-14 xl:size-20">
                <Image
                  src={"/iso.svg"}
                  fill
                  alt="image"
                  className="object-contain object-center"
                />
              </div>
              <div className="absolute overflow-hidden bottom-4 left-3 md:bottom-10 md:left-4 xl:left-6 size-14 xl:size-20">
                <Image
                  src={"/ce-logo.svg"}
                  fill
                  alt="image"
                  className="object-contain object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute left-0 z-0 w-48 h-20 -top-6 md:h-28 md:w-72">
        <Image
          src={"/vector2.svg"}
          fill
          alt=""
          className="object-contain object-center"
        />
      </div>
      <div className="absolute right-0 z-0 w-48 h-28 -bottom-6 md:h-28 md:w-72">
        <Image
          src={"/vector1.svg"}
          fill
          alt=""
          className="object-contain object-center"
        />
      </div>
    </section>
  );
};

export default Explore;

const exploreList = [
  {
    img: "/explore-1.png",
    icon: "/explore-icon-1.png",
    title: "Industries",
    desc: "Over 100 products for ceramic industry.",
  },
  {
    img: "/explore-2.png",
    icon: "/explore-icon-2.png",
    title: "Accessories",
    desc: "Over 100 products for ceramic industry.",
  },
  {
    img: "/explore-3.png",
    icon: "/explore-icon-3.png",
    title: "Research Institutions",
    desc: "Over 200 products for research Institutions.",
  },
];

// <section className="flex flex-col items-center self-stretch justify-center gap-10 px-5 py-16 md:py-20 md:px-10 xl:px-20 bg-primary font-Lora">
//   <div className="space-y-5">
//     <h3 className="text-xl text-center text-white md:text-4xl">
//       Your Visualization of your Product, We bring to life.
//     </h3>
//     <div className="mx-auto w-max">
//       <Link
//         passHref
//         href="/products"
//         className="text-2xl rounded-lg after:h-1 after:w-full after:bg-info after:block after:transition-all hover:after:h-1 md:after:w-0 md:hover:after:w-full hover:after:bg-info hover:after:block hover:after:ease-linear hover:after:duration-[3000] text-white group mx-auto"
//       >
//         <h4 className="flex items-center justify-center gap-4 text-xl md:text-4xl">
//           Explore Products
//           <RiArrowRightUpLine className="w-10 h-10 mt-2 text-info md:text-secondary md:group-hover:text-info" />
//         </h4>
//       </Link>
//     </div>
//   </div>
//   <div className="flex flex-col items-center justify-center w-full h-full gap-4 md:grid md:grid-cols-2 xl:grid xl:grid-cols-3">
//     {/* Industries */}
//     <div className="relative z-10 w-full text-center border border-white md:text-left group">
//       <div className="relative h-[220px] md:h-[240px] w-full">
//         <Image
//           fill
//           src={
//             "https://ik.imagekit.io/webibee/VBCC/productcard_1.png?updatedAt=1708075720439"
//           }
//           alt="product"
//           className="absolute hidden object-cover object-center brightness-50 group-hover:block"
//           placeholder="blur"
//         blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPkY9gwEQACMwFRuhgGaQAAAABJRU5ErkJggg=="
//           sizes={"100vw"}
//         />
//       </div>
//       {/* <div className="absolute top-0 left-0 h-[220px] md:h-[240px] w-full z-0 backdrop-sepia-0 bg-black/60"></div> */}
//       <div
//         className="py-8 px-5 md:py-6 md:px-10 absolute top-0 left-0 h-[220px] md:h-[240px] w-full bg-secondary z-10 group-hover:bg-transparent group-hover:transition-all group-hover:duration-[2500]
//        space-y-5 md:space-y-6"
//       >
//         <div className="flex items-end justify-center w-full h-auto md:justify-start">
//           <Ceramics
//             className={"fill-black group-hover:fill-white h-20 w-20 z-50"}
//           />
//         </div>
//         <div className="space-y-4">
//           <h5 className="text-2xl text-black font-Lora group-hover:text-white">
//             Industries
//           </h5>
//           <p className="text-[#404040] group-hover:text-[#BFBFBF] group-hover:text-opacity-90 font-urbanist tracking-tight truncate">
//             Over 100 products for Ceramic Industry.
//           </p>
//         </div>
//       </div>
//     </div>
//     <div className="relative z-10 w-full text-center border border-white md:text-left group">
//       <div className="relative h-[220px] md:h-[240px] w-full ">
//         <Image
//           fill
//           src={
//             "https://ik.imagekit.io/webibee/VBCC/productcard_2.png?updatedAt=1708075720436"
//           }
//           alt="product"
//           className="absolute hidden object-cover object-center brightness-50 group-hover:block"
//           placeholder="blur"
//           blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPkY9gwEQACMwFRuhgGaQAAAABJRU5ErkJggg=="
//           sizes={"100vw"}
//         />
//       </div>
//       <div
//         className="py-8 px-5 md:py-6 md:px-10 absolute top-0 left-0 h-[220px] md:h-[240px] w-full bg-secondary z-10 group-hover:bg-transparent group-hover:transition-all group-hover:duration-[2500]
//        space-y-5 md:space-y-6"
//       >
//         <div className="flex items-end justify-center w-full h-auto md:justify-start">
//           <Research
//             className={"fill-black group-hover:fill-white h-20 w-20 z-50"}
//           />
//         </div>
//         <div className="space-y-4">
//           <h5 className="text-2xl text-black font-Lora group-hover:text-white">
//             Research Institutions
//           </h5>
//           <p className="text-[#404040] group-hover:text-[#BFBFBF] group-hover:text-opacity-90 font-urbanist tracking-tight truncate">
//             Over 200 products for Research Institutions.
//           </p>
//         </div>
//       </div>
//     </div>
//     <div className="relative z-10 w-full text-center border border-white md:text-left group md:col-span-2 xl:col-auto">
//       <div className="relative h-[220px] md:h-[240px] w-full ">
//         <Image
//           fill
//           src={
//             "https://ik.imagekit.io/webibee/VBCC/productcard_3.png?updatedAt=1708075720191"
//           }
//           alt="product"
//           className="absolute hidden object-cover object-center brightness-50 group-hover:block"
//           placeholder="blur"
//         blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPkY9gwEQACMwFRuhgGaQAAAABJRU5ErkJggg=="
//         />
//       </div>
//       <div
//         className="py-8 px-5 md:py-6 md:px-10 absolute top-0 left-0 h-[220px] md:h-[240px] w-full bg-secondary z-10 group-hover:bg-transparent group-hover:transition-all group-hover:duration-[2500]
//        space-y-5 md:space-y-6"
//       >
//         <div className="flex items-end justify-center w-full h-auto md:justify-start">
//           <CeramicsProduct
//             className={"fill-black group-hover:fill-white h-20 w-20 z-50"}
//           />
//         </div>
//         <div className="space-y-4">
//           <h5 className="text-2xl text-black font-Lora group-hover:text-white">
//             Accessories
//           </h5>
//           <p className="text-[#404040] group-hover:text-[#BFBFBF] group-hover:text-opacity-90 font-urbanist tracking-tight truncate">
//             Accessories for Industrial Equipment
//           </p>
//         </div>
//       </div>
//     </div>
//   </div>
// </section>
