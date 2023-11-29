import { logos } from "@/libs/data"
import Image from "next/image"

const Clients = () => {
  return (
    <section className="py-16 bg-secondary">
      <h3 className="px-8 md:px-16 text-lg md:text-xl">Our Prestigious Clients</h3>
      <div className="w-full h-full overflow-hidden flex gap-4 py-8 px-3">
      <div className="flex items-center gap-20 animate-horizontal_carousel">
        {logos.map((logo,idx)=>(
      <div className="relative h-20 w-20" key={idx}>
            <Image
              fill
              src={logo}
              alt="Logo"
              className="absolute object-contain object-center"
            />
          </div>
        ))}
      </div>
      {/* <div className="flex items-center gap-20 animate-horizontal_carousel">
        {logos.map((logo,idx)=>(
      <div className="relative h-20 w-20" key={idx}>
            <Image
              fill
              src={logo}
              alt="Logo"
              className="absolute object-contain object-center"
            />
          </div>
        ))}
      </div> */}
      </div>
    </section>
  )
}

export default Clients