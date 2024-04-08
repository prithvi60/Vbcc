import Image from "next/image";
import Link from "next/link";

export const ThankYouComponent = () => {
  return (
    <section className="px-5 py-10 md:px-10 md:py-[60px] lg:px-[60px] lg:py-20 font-urbanist text-warning space-y-6">
      <h3 className="text-3xl md:text-6xl font-semibold font-Lora text-center">
        <div className="relative h-14 w-14 md:h-28 md:w-28 mx-auto text-warning">
          <Image
            src={"/thumbs-up.gif"}
            fill
            alt="thumbs up"
            className="-mt-2 object-contain"
          />
        </div>
        Thank You !
      </h3>
      <p className="text-lg md:text-2xl text-center w-full">
        We&apos;ve received your submission.
      </p>
      <div className="flex flex-col md:flex-row md:justify-center items-center gap-2 md:gap-5">
        <Link
          scroll={false}
          href="/products"
          className={`group/button block rounded-full px-6 py-3 bg-primary hover:bg-info text-center text-base duration-700 delay-75 font-urbanist capitalize w-max tracking-wider`}
        >
          <div className={`h-6 w-full overflow-hidden`}>
            <h4
              className={`transition translate-y-0 group-hover/button:-translate-y-20 duration-700 text-white`}
            >
              Explore More
            </h4>
            <h4
              className={`translate-y-20 transition group-hover/button:-translate-y-[25px] duration-700 group-hover/button:text-white`}
            >
              Explore More
            </h4>
          </div>
        </Link>
        <Link
          scroll={false}
          href={"/"}
          className={`group/button block rounded-full px-6 py-3 bg-primary hover:bg-info text-center text-base duration-700 delay-75 font-urbanist capitalize w-max tracking-wider`}
        >
          <div className={`h-6 w-full overflow-hidden`}>
            <h4
              className={`transition translate-y-0 group-hover/button:-translate-y-20 duration-700 text-white`}
            >
              Go Back To Home
            </h4>
            <h4
              className={`translate-y-20 transition group-hover/button:-translate-y-[25px] duration-700 group-hover/button:text-white`}
            >
              Go Back To Home
            </h4>
          </div>
        </Link>
      </div>
    </section>
  );
};
