import { Ceramics } from "@/svg_components/Ceramics";
import { CeramicsProduct } from "@/svg_components/CeramicsProduct";
import { Research } from "@/svg_components/Research";
import Link from "next/link";
import { RiArrowRightUpLine } from "react-icons/ri";
const Explore = () => {
  return (
    <section className="py-16 px-5 md:py-20 md:px-10 xl:px-20 bg-primary flex flex-col justify-center items-center self-stretch gap-10 font-Lora">
        <div className="space-y-5">
            <h3 className="text-xl md:text-4xl text-white text-center">Your Visualization of your Product, We bring to life.</h3>
            <div className="w-max mx-auto">
            <Link href={"/"} className="text-2xl rounded-lg after:h-1 after:w-full  after:bg-info after:block after:transition-all hover:after:h-1 md:after:w-0 md:hover:after:w-full hover:after:bg-info hover:after:block hover:after:ease-linear hover:after:duration-[3000] text-white group mx-auto">
            <h4 className="text-xl md:text-4xl flex justify-center items-center gap-4">Explore Products
            <RiArrowRightUpLine className="h-10 w-10 mt-2 text-info md:text-secondary md:group-hover:text-info"/>
            </h4>
            </Link>
            </div>
        </div>
        <div className="flex flex-col justify-center items-center md:grid md:grid-cols-2 xl:grid xl:grid-cols-3 gap-4">
        <div className="bg-secondary py-8 px-5 text-center group md:text-left md:py-6 md:px-10 space-y-5 md:space-y-4 w-full sm:w-[310px] md:w-auto hover:bg-transparent hover:transition-all hover:duration-1000 hover:bg-hero-pattern bg-cover bg-center">
          <Ceramics className={"fill-black group-hover:fill-white h-20 w-20 "}/>
          <div className="space-y-4">
            <h3 className="text-black group-hover:text-white">Industries</h3>
            <p className="text-[#404040] group-hover:text-white group-hover:text-opacity-90 font-urbanist tracking-tighter">Over 100 products for Ceramic Industry.</p>
          </div>
        </div>
        <div className="bg-secondary py-8 px-5 text-center group md:text-left md:py-6 md:px-10 space-y-5 md:space-y-4 w-full sm:w-[310px] md:w-auto hover:bg-transparent hover:transition-all hover:duration-1000 hover:bg-hero-pattern-2 bg-cover bg-center">
        <Research className={"fill-black group-hover:fill-white h-20 w-20 "}/>
          <div  className="space-y-4">
            <h3 className="text-black group-hover:text-white">Research Institutions</h3>
            <p className="text-[#404040] group-hover:text-white group-hover:text-opacity-90 font-urbanist tracking-tighter">Over 200 products for Research Institutions.</p>
          </div>
        </div>
        <div className="bg-secondary py-8 px-5 text-center group md:text-left md:py-6 md:px-10 space-y-5 md:space-y-4 w-full sm:w-[310px] md:w-auto hover:bg-transparent hover:transition-all hover:duration-1000 hover:bg-hero-pattern-3 bg-cover bg-center md:col-span-2 xl:col-auto">
        <CeramicsProduct className={"fill-black group-hover:fill-white h-20 w-20 "}/>
          <div  className="space-y-4">
            <h3 className="text-black group-hover:text-white">Accessories</h3>
            <p className="text-[#404040] group-hover:text-white group-hover:text-opacity-90 font-urbanist tracking-tighter">Accessories for Industrial Equipment</p>
          </div>
        </div>
        </div>
    </section>
  )
}

export default Explore