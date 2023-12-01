import Image from "next/image";
import Link from "next/link";
import { RiArrowRightUpLine } from "react-icons/ri";
const Explore = () => {
  return (
    <section className="py-16 px-5 md:py-20 md:px-10 xl:px-20 bg-primary flex flex-col justify-center items-center self-stretch gap-10 font-Lora">
        <div className="space-y-5">
            <h3 className="text-xl md:text-4xl text-white text-center">Your Visualization of your Product, We bring to life.</h3>
            <Link href={"/"} className="flex items-center gap-4 text-white hover:text-info w-max mx-auto">
            <h4 className="text-xl md:text-4xl  w-max">Explore Products</h4>
            <RiArrowRightUpLine className="h-10 w-10 mt-2"/>
            </Link>
        </div>
        <div className="flex flex-col justify-center items-center md:grid md:grid-cols-2 xl:grid xl:grid-cols-3 gap-4">
        <div className="bg-secondary py-8 px-5 text-center md:text-left md:py-6 md:px-10 space-y-5 md:space-y-4 w-full sm:w-[310px] md:w-auto ">
        <div className="relative h-20 w-20 mx-auto md:mx-0">
            <Image
              fill
              src={"/Ceramic Industries Icon.svg"}
              alt="Logo"
              className="absolute object-contain object-center"
            />
          </div>
          <div  className="space-y-4">
            <h3 className="text-black">Industries</h3>
            <p className="text-[#404040]  font-urbanist tracking-tighter">Over 100 products for Ceramic Industry.</p>
          </div>
        </div>
        <div className="bg-secondary py-8 px-5 text-center md:text-left md:py-6 md:px-10 space-y-5 md:space-y-4 w-full sm:w-[310px] md:w-auto">
        <div className="relative h-20 w-20 mx-auto md:mx-0">
            <Image
              fill
              src={"/Research Institutions.svg"}
              alt="Logo"
              className="absolute object-contain object-center"
            />
          </div>
          <div  className="space-y-4">
            <h3 className="text-black">Research Institutions</h3>
            <p className="text-[#404040]  font-urbanist tracking-tighter">Over 200 products for Research Institutions.</p>
          </div>
        </div>
        <div className="bg-secondary py-8 px-5 text-center md:text-left md:py-6 md:px-10 space-y-5 md:space-y-4 w-full sm:w-[310px] md:w-auto md:col-span-2 xl:col-auto">
        <div className="relative h-20 w-20 mx-auto md:mx-0">
            <Image
              fill
              src={"/Ceramic Product Icon.svg"}
              alt="Logo"
              className="absolute object-contain object-center"
            />
          </div>
          <div  className="space-y-4">
            <h3 className="text-black">Accessories</h3>
            <p className="text-[#404040]  font-urbanist tracking-tighter">Accessories for Industrial Equipment</p>
          </div>
        </div>
        </div>
    </section>
  )
}

export default Explore