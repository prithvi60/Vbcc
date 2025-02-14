"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export const ThankYouComponent = () => {
  const [previousRoute, setPreviousRoute] = useState('');
  const path = usePathname();
  const modifiedUrl = path.replace("/thankyou", "");
  const hasDownloaded = useRef(false);

  useEffect(() => {
    setPreviousRoute(document.referrer);
  }, []);

  console.log(previousRoute);


  useEffect(() => {
    if (hasDownloaded.current) return;
    // console.log("Thankyou page loaded");
    if (modifiedUrl === "/denkirodental/dentalfurnace/productline") {
      const downloadPDF = () => {
        const link = document.createElement("a");
        link.href = "/files/Denkiro-Dental-Brochure-Digital.pdf";
        link.download = "Denkiro-Dental-Brochure-Digital.pdf";
        link.click();
      };

      downloadPDF();
    } else {
      const downloadPDF = () => {
        const link = document.createElement("a");
        link.href = "/files/Denkiro - Brochure - Digital.pdf";
        link.download = "Denkiro - Brochure - Digital.pdf";
        link.click();
      };

      downloadPDF();
    }
    hasDownloaded.current = true;
  }, [modifiedUrl]);

  return (
    <section className="px-5 py-10 md:px-10 md:py-[60px] lg:px-[60px] lg:py-20 font-urbanist text-warning space-y-6">
      <div className="relative w-20 h-20 mx-auto md:h-44 md:w-56 text-warning">
        <Image
          src={"https://ik.imagekit.io/webibee/VBCC/homepage/VBCC%20logo.svg?updatedAt=1733742968628"}
          fill
          alt="thumbs up"
          className="object-contain -mt-2"
        />
      </div>
      <h3 className="text-3xl font-semibold text-center md:text-6xl font-Lora">
        <div className="relative mx-auto h-14 w-14 md:h-28 md:w-28 text-warning">
          <Image
            src={"/thumbs-up.gif"}
            fill
            alt="thumbs up"
            className="object-contain -mt-2"
          />
        </div>
        Thank You !
      </h3>
      <p className="w-full text-lg text-center md:text-2xl">
        We&apos;ve received your submission.
      </p>
      <p className="w-full text-lg text-center animate-pulse">
        " Please check your email now "
      </p>
      <div className="flex flex-col items-center gap-2 md:flex-row md:justify-center md:gap-5">
        <Link
          scroll={false}
          href={modifiedUrl === "" ? "/" : modifiedUrl}
          className={`group/button block rounded-full px-6 py-3 bg-[#20427D] hover:bg-info text-center text-base duration-700 delay-75 font-urbanist capitalize w-max tracking-wider`}
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
