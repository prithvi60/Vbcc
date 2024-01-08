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
        <div className="text-center md:text-left group w-full z-10 border border-white relative">
          <div className="relative h-[220px] md:h-[240px] w-full ">
            <Image
              fill
              src={"https://ik.imagekit.io/webibee/VBCC/hero-bg.png"}
              placeholder="blur"
              alt="product"
              className="absolute object-cover object-center brightness-50"
              blurDataURL={
                "data:image/webp;base64,UklGRhoDAABXRUJQVlA4WAoAAAAgAAAACgEAsQAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggLAEAALATAJ0BKgsBsgA/cbbSZDStqSah0ukCkC4JaW7dX1o7hfYViHTBHkXM9fsZh9I3yL3TE9mLEOmaaltvKxPTIg5NpWQbie0x5u56L1jvwR4b7xVqLsfk9TKdSdmF4sptnlhL+8qw2lSemJ+l257nlOpOyBuy+NRWlvN3Vd+sqOqoYNYezdoI/Suz15pNTup7+6JLbG502IIN2V3Y71QpzPIRcVguZAAAeY3OK5Da/CFfpIwrqBCDMsql1ZAAAAbhqwaL0hRkqTCpSF83jQXmSKGvMYZ8LDRk3lZ1u+fkPyatDPTugyZEJMTyX5TvfMnVCry1CNC1s5XTiZiASWuoLfzCIwctXPVabwp2zExSI/Uud7cy0iFcfMW+tXlM9ulrulPeGaAYKHmATdIAAA=="
              }
            />
          </div>
          {/* <div className="absolute top-0 left-0 h-[220px] md:h-[240px] w-full z-0 backdrop-sepia-0 bg-black/60"></div> */}
          <div className="py-8 px-5 md:py-6 md:px-10 absolute top-0 left-0 h-[220px] md:h-[240px] w-full bg-secondary z-10 hover:bg-transparent hover:transition-all hover:duration-700 space-y-5 md:space-y-6">
            <div className="w-full h-auto flex justify-center md:justify-start items-end">
              <Ceramics
                className={"fill-black group-hover:fill-white h-20 w-20 z-50"}
              />
            </div>
            <div className="space-y-4">
              <h5 className="font-Lora text-black group-hover:text-white text-2xl">
                Industries
              </h5>
              <p className="text-[#404040] group-hover:text-[#BFBFBF] group-hover:text-opacity-90 font-urbanist tracking-tight">
                Over 100 products for Ceramic Industry.
              </p>
            </div>
          </div>
        </div>
        <div className="text-center md:text-left group w-full z-10 border border-white relative">
          <div className="relative h-[220px] md:h-[240px] w-full ">
            <Image
              fill
              src={"https://ik.imagekit.io/webibee/VBCC/hero-bg-2.png"}
              alt="product"
              placeholder="blur"
              className="absolute object-cover object-center brightness-50"
              blurDataURL={
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAECAYAAACtBE5DAAAAAXNSR0IArs4c6QAAAGVJREFUGFcFwUEOAUEQhtGvSIjJIJnrWVuLC1jNSkwkrkaQabewaKpb/d6z83BSdickutUaInikhF2OvUotBBMWTYt7ZRwTNhx2il8QmqJZwzs7r2fC9tuN/JMpNZgvO74yrrc7f1vpNBiuWkwrAAAAAElFTkSuQmCC"
              }
            />
          </div>
          <div className="py-8 px-5 md:py-6 md:px-10 absolute top-0 left-0 h-[220px] md:h-[240px] w-full bg-secondary z-10 hover:bg-transparent hover:transition-all hover:duration-700 space-y-5 md:space-y-6">
            <div className="w-full h-auto flex justify-center md:justify-start items-end">
              <Research
                className={"fill-black group-hover:fill-white h-20 w-20 z-50"}
              />
            </div>
            <div className="space-y-4">
              <h5 className="font-Lora text-black group-hover:text-white text-2xl">
                Research Institutions
              </h5>
              <p className="text-[#404040] group-hover:text-[#BFBFBF] group-hover:text-opacity-90 font-urbanist tracking-tight">
                Over 200 products for Research Institutions.
              </p>
            </div>
          </div>
        </div>
        <div className="text-center md:text-left group w-full z-10 border border-white relative md:col-span-2 xl:col-auto">
          <div className="relative h-[220px] md:h-[240px] w-full ">
            <Image
              fill
              src={"https://ik.imagekit.io/webibee/VBCC/hero-bg-3.png"}
              placeholder="blur"
              alt="product"
              className="absolute object-cover object-center brightness-50"
              blurDataURL={
                "data:image/webp;base64,UklGRg4HAABXRUJQVlA4WAoAAAAgAAAApQIA/AEASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggIAUAAPBlAJ0BKqYC/QE+7XaxVqmnJCOgCIEwHYlpbuFknyaQfoSR3Xg7rYv8Ch8v/YAn1nIQuMAusOwBS2NhX8GFK6wBMYiNsTObIj7KvRWZsiPszJtdxy6yXZGt9St20I2CrPsjU85cfH0PDAN6EtUKP6zVW+pW8vXKJSPASKStAZHR0YPJf9C2w89RJnBx2uqYB9Q652A4L8+44eaBkd92VHn2Ko3YB9g2J+fb797S8vXFSM+rlpAl3ksjv6DtewHtChfXbcKmR1W7bjuKg8t5wTBQA90y1czmcQ7mczRs5TIB6zym47YK7NJDhvRIHbz4+2Y/H2zH2zH4yW1tjqCc9bbnGy48HpaQZnB5nM5nHa/HHfHgO2OoHbHftjvekZzzuIaCBju247VaFfwvH4/H35F7IhmRu3uIzQFsijGtdrbKtbjtewV9fOOvexPrPIvZDohSCVNPVSjG3hK11D2cdqtA4vzt61+PvyL2QCoJLCsATKLIyGR3hKVfZALRx3vyk+87s4yMdQO2O6LCTqVk68yh8/UD3Mxj8fjjMn18d1tnPyL2QCwNx/xyO8mhXCwqw0xw1XMa5o/YJjgzCsKBUFbvpwRzyOBe46618j7WENzHyLHYM8AEqxn5F+zzIyvl42Cm0zuqCStcqpo+/KdpTWoU2UY6gdsdg8jrrBZzO6moCYwetd/VjlxxEPYaYeuHbHYG4/3gCYxC4wC6moQUW/qPpuOP069rAFaTe46wBMYhcYBdpewW5+W/JFXepaV1gCYxC4wC6moAYZAo1qvW2I//01b4IttM7qagJjEMGwHCo8th2Aec4ChTHdTUBMYhcYBdTRcQLO7MgONlWz1roh1gCYxC4wC6moCYzeg7XsBu/Zm4hlc4IttM7qagJjELjRj98Lx+Pj1hcZJYttM7qagJjELi/8CeRHHcV0geg4IMuQ6AmMQuMAupqAmK1CDjiRX4DeUdn6QqTUBMYhcYBdTUABgOvRAC1aXFZNE+iTUBMYhcYBdTUABh4smMMA02XgblIF1NQExiFxgF1NHp6wBOL/hXHFylQqTUBMYhcYBdTUBMYlkeI63u21dkzXR1gCYxC4wC6migAP7tDCUSRnleeyB3w9RHKH7p4V7A8XJMnQr6r9VMODT6YXdSAlAsgDemQuJiG0q2ce1zt/jvMT137n0atl0HNdkLOJq6SkXDYCEbYlNcKUdsjMvh3w7ht5cywIPsCiHH1FGx/Inyt/gg2tJQKsJO+lo/2wgRFUT8N4QCxxC3BwcviWLWvCxaemWsjFZhjYWTcfoQjip43VoA7YXPikpInx6DMR8Nvrh+I3Tx5Ai+xNehyIQqC/COTZlmayh+LZntVzpzGM7AvdCN2OMbmX0duW7F54yTGXYD6W4o0UK5JQdLobJ6fgzjoKF1mBBXHbb47vJWfNExPF/DqiAZIIhvm04m44NYE4Fb+dn8K7jkwYewlUdl0UAeGZ+9ZPXPdcRJAEQux8P0pKGEgPy2yr7ktkYIXXk8JMI2He7awuEO5VdqLUHQDK/T1KigJZbilcKlvy2sA49XiKvBAD+F14+CTX31hn0ZfvYv/qAcE16iT5dNrTqogYQAAEZrF3jl+MAPuULxTEPO58RAOKPydYx9CqyWJ2cIARxwFendnUsv64EAOTr/aXfADJoJ49I/JCugAX20bhzjZzO3qjjAgNfYvo2KdKpqM4gEEYJpcuCC+nFAEBnoPlh4AF233LpACSMnSoOZ4gAAAAA="
              }
            />
          </div>
          <div className="py-8 px-5 md:py-6 md:px-10 absolute top-0 left-0 h-[220px] md:h-[240px] w-full bg-secondary z-10 hover:bg-transparent hover:transition-all hover:duration-700 space-y-5 md:space-y-6">
            <div className="w-full h-auto flex justify-center md:justify-start items-end">
              <CeramicsProduct
                className={"fill-black group-hover:fill-white h-20 w-20 z-50"}
              />
            </div>
            <div className="space-y-4">
              <h5 className="font-Lora text-black group-hover:text-white text-2xl">
                Accessories
              </h5>
              <p className="text-[#404040] group-hover:text-[#BFBFBF] group-hover:text-opacity-90 font-urbanist tracking-tight">
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
