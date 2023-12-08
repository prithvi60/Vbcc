import Image from "next/image";

const imgSrc = ["/gallery01.png","/gallery02.png","/gallery03.png","/gallery04.png"]

export const Visitation = () => {
  return (
    <section className="px-5 py-10 md:py-[60px] md:px-[60px] bg-primary" id="visitation">
      <div className="w-full xl:px-10 flex flex-col md:flex-row md:items-start gap-6 xl:gap-8 text-white">
      <div className="w-full md:w-1/2 xl:w-[35%] md:space-y-8">
        <div className="hidden md:flex flex-wrap items-center gap-2.5">
            {imgSrc.map((img,idx)=>(
        <div className="relative h-[105px] w-[195px] " key={idx}>
          <Image
            fill
            src={img}
            alt="Logo"
            className="absolute object-cover rounded-2xl"
          />
        </div>
            ))}
        </div>
        <div className="block space-y-10 md:space-y-24 h-full w-full">
            <h4 className="font-Lora text-xl md:text-[40px]">Visitations</h4>
            <p className="font-urbanist text-base w-3/5">Redefining what it means to be a team. Showcasing our Work life through the years.</p>
        </div>
        </div>
        <div className="w-full md:w-1/2 xl:w-[65%]">
        <div className="relative h-[225px] md:h-[455px] w-full">
          <Image
            fill
            src={"/gallery01.png"}
            alt="Logo"
            className="absolute object-cover object-center rounded-3xl"
          />
        </div>
        </div>
      </div>
    </section>
  )
}
