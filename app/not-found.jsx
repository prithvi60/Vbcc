import { Btn } from "@/components/Btn";
import Image from "next/image";

export default function NotFound() {
  return (
    <section className="px-5 py-10 md:px-10 md:py-[60px] lg:px-[60px] lg:py-20 font-urbanist text-warning space-y-6 mx-auto h-full w-full text-center">
      {/* <div className='relative h-56 w-56 -mt-5'> */}
      <Image
        src={"/404.png"}
        height={225}
        width={225}
        alt="404 page not fpound"
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
      <p className="text-base md:text-lg">Try to access the page using the navigation above.</p>
      <p className="text-base md:text-lg">
        If you typed the page address in the address bar, make sure that
        it&apos;s spelled correctly.
      </p>
      <div className="w-full flex justify-center items-center">
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
  );
}
