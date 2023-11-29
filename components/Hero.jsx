import { Button } from "@nextui-org/react"
import Link from "next/link";
import { HiOutlineArrowNarrowDown } from "react-icons/hi";
const Hero = () => {
  return (
    <section className="h-screen w-full bg-hero-pattern bg-cover bg-center flex justify-center items-center font-urbanist font-medium text-secondary relative">
      <div className="text-center space-y-4 md:space-y-10">
        <h4 className="text-xl md:text-2xl uppercase">Vb Ceramic Consultants</h4>
        <div className="space-y-1 md:space-y-7">
        <h3 className="font-Lora text-4xl md:text-5xl tracking-tight mt-2 ">Tailor Made</h3>
        <div className="font-Lora text-4xl md:text-5xl tracking-tight">
        Industrial Equipment
        </div>
        </div>
        <div className="flex justify-center items-center gap-6">
          <Button variant="bordered" className="border-secondary text-secondary text-sm md:text-base rounded-3xl p-6 bg-black/30 backdrop-blur-md">Our Products</Button>
          <Button variant="bordered" className="border-secondary text-secondary text-sm md:text-base rounded-3xl p-6 bg-black/30 backdrop-blur-md">Contact Us</Button>
        </div>
      </div>
      <Link href={"#"} className="absolute bottom-5 right-[41%] md:right-[45%] lg:right-[48%] rounded-full p-3 border border-secondary bg-black/30 backdrop-blur-md hover:opacity-70">
      <HiOutlineArrowNarrowDown className="h-7 w-7 text-secondary"/>
      </Link>
    </section>
  )
}

export default Hero