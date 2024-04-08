import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="px-5 py-10 md:px-10 md:py-[60px] lg:px-[60px] lg:py-20 font-urbanist text-warning space-y-6 mx-auto h-full w-full text-center">
      {/* <div className='relative h-56 w-56 -mt-5'> */}
      <Image
        src={"/404.png"}
        height={225}
        width={225}
        alt="404 page not found"
        className="object-contain mx-auto"
      />
      {/* </div> */}
      <h2 className="font-Lora text-3xl md:text-5xl capitalize">
        Looking for something <span className="animate-pulse">?</span>
      </h2>
      <p className="text-base md:text-lg">
        We&apos;re sorry. The web address you entered can&apos;t be found on our
        site. Your page may have moved or may no longer be available.{" "}
        <em>Please try one of the options below:</em>
      </p>
      <p className="text-base md:text-lg">
        Try to access the page using the navigation above.
      </p>
      <p className="text-base md:text-lg">
        If you typed the page address in the address bar, make sure that
        it&apos;s spelled correctly.
      </p>
      <div className="w-full flex justify-center items-center">
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
}
