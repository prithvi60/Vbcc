"use client"
import othersData from "@/libs/others.json"
import Image from "next/image"
import { useMemo } from "react";
import dynamic from 'next/dynamic'
const MarqueeComponent = dynamic(() => import("react-fast-marquee"),{ssr:false})

const Clients = () => {
  const memoizedLogos = useMemo(() => othersData.clientLogos, []);
  return (
    <section className="py-16 bg-secondary space-y-8" id="client">
      <h3 className="px-8 md:px-16 text-lg md:text-xl text-primary">Our Prestigious Clients</h3>
        <MarqueeComponent pauseOnHover speed={70} autoFill={true}>
      <div className="flex items-center gap-10">
        {memoizedLogos.map((logo,idx)=>(
      <div className="relative h-20 w-20 mx-8" key={idx}>
            <Image
              fill
              loading="lazy"
              placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPkY9gwEQACMwFRuhgGaQAAAABJRU5ErkJggg=="
              src={logo}
              alt="Logo"
              className="object-contain object-center w-full"
            />
          </div>
        ))}
      </div>
        </MarqueeComponent>
    </section>
  )
}

export default Clients;