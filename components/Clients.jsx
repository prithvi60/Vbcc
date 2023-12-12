import { logos } from "@/libs/data"
import Image from "next/image"
import Marquee from "react-fast-marquee"

const Clients = () => {
  return (
    <section className="py-16 bg-secondary space-y-8">
      <h3 className="px-8 md:px-16 text-lg md:text-xl text-primary">Our Prestigious Clients</h3>
        <Marquee pauseOnHover speed={70}>
      <div className="flex items-center gap-[100px]">
        {logos.map((logo,idx)=>(
      <div className="relative h-20 w-20 space-x-5" key={idx}>
            <Image
              fill
              src={logo}
              alt="Logo"
              className="absolute object-contain object-center"
            />
          </div>
        ))}
      </div>
        </Marquee>
    </section>
  )
}

export default Clients