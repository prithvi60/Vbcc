import { Ceramics } from "@/svg_components/Ceramics";
import { CeramicsProduct } from "@/svg_components/CeramicsProduct";
import { Research } from "@/svg_components/Research";
import Image from "next/image";
import Link from "next/link";
import { RiArrowRightUpLine } from "react-icons/ri";
const Explore = () => {
  return (
    <section className="py-16 px-5 md:py-20 md:px-10 xl:px-20 bg-primary flex flex-col justify-center items-center self-stretch gap-10 font-Lora">
      <div className="space-y-5">
        <h3 className="text-xl md:text-4xl text-white text-center">
          Your Visualization of your Product, We bring to life.
        </h3>
        <div className="w-max mx-auto">
          <Link
            passHref
            href="/products"
            className="text-2xl rounded-lg after:h-1 after:w-full after:bg-info after:block after:transition-all hover:after:h-1 md:after:w-0 md:hover:after:w-full hover:after:bg-info hover:after:block hover:after:ease-linear hover:after:duration-[3000] text-white group mx-auto"
          >
            <h4 className="text-xl md:text-4xl flex justify-center items-center gap-4">
              Explore Products
              <RiArrowRightUpLine className="h-10 w-10 mt-2 text-info md:text-secondary md:group-hover:text-info" />
            </h4>
          </Link>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center md:grid md:grid-cols-2 xl:grid xl:grid-cols-3 gap-4 w-full h-full">
        {/* Industries */}
        <div className="text-center md:text-left group w-full z-10 border border-white relative group">
          <div className="relative h-[220px] md:h-[240px] w-full">
            <Image
              fill
              src={
                "https://ik.imagekit.io/webibee/VBCC/productcard_1.png?updatedAt=1708075720439"
              }
              alt="product"
              className="absolute object-cover object-center brightness-50 hidden group-hover:block"
              placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPkY9gwEQACMwFRuhgGaQAAAABJRU5ErkJggg=="
              sizes={"100vw"}
            />
          </div>
          {/* <div className="absolute top-0 left-0 h-[220px] md:h-[240px] w-full z-0 backdrop-sepia-0 bg-black/60"></div> */}
          <div
            className="py-8 px-5 md:py-6 md:px-10 absolute top-0 left-0 h-[220px] md:h-[240px] w-full bg-secondary z-10 group-hover:bg-transparent group-hover:transition-all group-hover:duration-[2500]
           space-y-5 md:space-y-6"
          >
            <div className="w-full h-auto flex justify-center md:justify-start items-end">
              <Ceramics
                className={"fill-black group-hover:fill-white h-20 w-20 z-50"}
              />
            </div>
            <div className="space-y-4">
              <h5 className="font-Lora text-black group-hover:text-white text-2xl">
                Industries
              </h5>
              <p className="text-[#404040] group-hover:text-[#BFBFBF] group-hover:text-opacity-90 font-urbanist tracking-tight truncate">
                Over 100 products for Ceramic Industry.
              </p>
            </div>
          </div>
        </div>
        <div className="text-center md:text-left group w-full z-10 border border-white relative group">
          <div className="relative h-[220px] md:h-[240px] w-full ">
            <Image
              fill
              src={
                "https://ik.imagekit.io/webibee/VBCC/productcard_2.png?updatedAt=1708075720436"
              }
              alt="product"
              className="absolute object-cover object-center brightness-50 hidden group-hover:block"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPkY9gwEQACMwFRuhgGaQAAAABJRU5ErkJggg=="
              sizes={"100vw"}
            />
          </div>
          <div
            className="py-8 px-5 md:py-6 md:px-10 absolute top-0 left-0 h-[220px] md:h-[240px] w-full bg-secondary z-10 group-hover:bg-transparent group-hover:transition-all group-hover:duration-[2500]
           space-y-5 md:space-y-6"
          >
            <div className="w-full h-auto flex justify-center md:justify-start items-end">
              <Research
                className={"fill-black group-hover:fill-white h-20 w-20 z-50"}
              />
            </div>
            <div className="space-y-4">
              <h5 className="font-Lora text-black group-hover:text-white text-2xl">
                Research Institutions
              </h5>
              <p className="text-[#404040] group-hover:text-[#BFBFBF] group-hover:text-opacity-90 font-urbanist tracking-tight truncate">
                Over 200 products for Research Institutions.
              </p>
            </div>
          </div>
        </div>
        <div className="text-center md:text-left group w-full z-10 border border-white relative md:col-span-2 xl:col-auto group">
          <div className="relative h-[220px] md:h-[240px] w-full ">
            <Image
              fill
              src={
                "https://ik.imagekit.io/webibee/VBCC/productcard_3.png?updatedAt=1708075720191"
              }
              alt="product"
              className="absolute object-cover object-center brightness-50 hidden group-hover:block"
              placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPkY9gwEQACMwFRuhgGaQAAAABJRU5ErkJggg=="
            />
          </div>
          <div
            className="py-8 px-5 md:py-6 md:px-10 absolute top-0 left-0 h-[220px] md:h-[240px] w-full bg-secondary z-10 group-hover:bg-transparent group-hover:transition-all group-hover:duration-[2500]
           space-y-5 md:space-y-6"
          >
            <div className="w-full h-auto flex justify-center md:justify-start items-end">
              <CeramicsProduct
                className={"fill-black group-hover:fill-white h-20 w-20 z-50"}
              />
            </div>
            <div className="space-y-4">
              <h5 className="font-Lora text-black group-hover:text-white text-2xl">
                Accessories
              </h5>
              <p className="text-[#404040] group-hover:text-[#BFBFBF] group-hover:text-opacity-90 font-urbanist tracking-tight truncate">
                Accessories for Industrial Equipment
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Explore;
