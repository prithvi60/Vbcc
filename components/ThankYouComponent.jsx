import Image from "next/image"
import { Btn } from "./Btn"

export const ThankYouComponent = () => {
  return (
    <section className="px-5 py-10 md:px-10 md:py-[60px] lg:px-[60px] lg:py-20 font-urbanist text-warning space-y-6">
        <h3 className="text-3xl md:text-6xl font-semibold font-Lora text-center">
            <div className="relative h-14 w-14 md:h-28 md:w-28 mx-auto text-warning">
            <Image src={"/thumbs-up.gif"} fill alt="thumbs up" className="-mt-2 object-contain"/>
            </div>
            Thank You !</h3>
            <p  className="text-lg md:text-2xl text-center w-full">We&apos;ve received your submission.</p>
            <div className="flex flex-col md:flex-row md:justify-center items-center gap-2 md:gap-5">
                <h3 className="text-base md:text-lg font-medium">Explore More</h3>
            <Btn
              Hbgcolor={"bg-primary"}
              textColor={"text-warning"}
              HtextColor={"text-white"}
              bColor={"border-warning"}
              title={"Go Back To Home"}
              href={"/"}
            />
            </div>
        </section>
  )
}
