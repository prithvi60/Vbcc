"use client";
import othersData from "@/libs/others.json";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export const PresenceSpecificPage = () => {
  const { name } = useParams();
  const place = name.replace(/-/g, " ");
  const router = useRouter();
  const [width, setWidth] = useState(0);
  const [count, setCount] = useState(2);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    width >= 1024 ? setCount(2) : setCount(1);
  }, [width]);
  return (
    <section
      className="px-5 py-10 md:px-10 md:py-[60px] lg:px-[60px] lg:py-20 font-urbanist relative"
      id="story"
    >
      <div className="flex flex-col items-center lg:flex-row gap-16 lg:justify-between lg:items-start">
        <div className="w-full lg:w-1/2 space-y-8">
          <div className="space-y-6 text-warning">
            <h3 className="text-[30px] xl:text-[40px] font-Lora font-medium leading-snug">
              Laboratory Furnace and Instrument Manufacturers in{" "}
              <span className="font-medium capitalize">{place}</span>
            </h3>
            <p className="text-sm md:text-base font-urbanist md:w-[78%] lg:w-full text-justify tracking-normal leading-snug">
              <span className="font-semibold capitalize">
                VBCC High Temperature Instruments Private Limited
              </span>{" "}
              stands out as one of the most trusted names among{" "}
              <span className="font-semibold capitalize">
                Laboratory Furnace and Instrument Manufactures in{" "}
                <span>{place}</span>
              </span>
              . Our commitment to delivering superior quality products has
              solidified our reputation in the industry. Rigorous testing
              processes, overseen by experienced auditors, ensure that each
              product meets the highest standards of performance and durability.
              <br />
              <br />
              We take pride in utilizing top-grade raw materials to manufacture
              our range of cutting-edge instruments. Our extensive product
              line-up includes a,
              <span className="font-semibold capitalize">
                Thermal Conductivity Apparatus, Microwave Furnaces up to 2000°C,
                Gas Sensor, Modulus of Rupture (MOR) Apparatus, Cold Crushing
                Strength (CCS) Apparatus, Presses up to 500 TON, Furnaces up to
                2500°C, Chemical Vapour Deposition (CVD) Instrument, Tubular,
                Vacuum, Box, Industrial Furnaces up to 2500°C, Biomass
                Pyrolysis, and Dilatometer in <span>{place}</span>
              </span>
              .
              <br />
              <br />
              As leading{" "}
              <span className="font-semibold capitalize">
                Laboratory Furnace and Instrument Exporters and Suppliers in{" "}
                <span>{place}</span>
              </span>
              , VBCC has established a strong presence in the market. Renowned
              companies trust us for a diverse range of laboratory instruments
              and furnaces. Whether you require precise temperature measurement
              instruments, high-capacity presses, or advanced furnaces, we have
              the expertise to meet your specific needs.
              <br />
              <br />
              If you are in search of{" "}
              <span className="font-semibold capitalize">
                Laboratory Furnace and Instrument Exporters and Suppliers in{" "}
                <span>{place}</span>
              </span>{" "}
              that can tailor products to your requirements,{" "}
              <span className="font-semibold capitalize">
                VBCC High Temperature Instruments Private Limited
              </span>{" "}
              is the name to trust. Contact us to discuss your needs, and we
              assure your prompt delivery of the right product to your facility.
              Choose VBCC for cutting-edge technology, reliability, and
              excellence in laboratory, industrial furnaces and instruments
            </p>
            <div className="flex items-center gap-5">
            <button
              className={`min-w-fit text-base tracking-tight border border-warning p-5 rounded-full font-urbanist px-4 py-2 group/button block bg-primary hover:bg-transparent text-center duration-700 delay-75 capitalize cursor-pointer`}
              onClick={() => router.push("/about")}
            >
              <div className={`h-6 w-full overflow-hidden`}>
                <h4
                  className={`transition translate-y-0 group-hover/button:-translate-y-20 duration-700 text-white`}
                >
                  {"Read More"}
                </h4>
                <h4
                  className={`translate-y-20 transition group-hover/button:-translate-y-[25px] duration-700 group-hover/button:text-warning`}
                >
                  {"Read More"}
                </h4>
              </div>
            </button>
            <button
              className={`min-w-fit text-base tracking-tight border border-warning p-5 rounded-full font-urbanist px-4 py-2 group/button block bg-primary hover:bg-transparent text-center duration-700 delay-75 capitalize cursor-pointer`}
              onClick={() => router.push("/products")}
            >
              <div className={`h-6 w-full overflow-hidden`}>
                <h4
                  className={`transition translate-y-0 group-hover/button:-translate-y-20 duration-700 text-white`}
                >
                  {"Explore Our Products"}
                </h4>
                <h4
                  className={`translate-y-20 transition group-hover/button:-translate-y-[25px] duration-700 group-hover/button:text-warning`}
                >
                  {"Explore Our Products"}
                </h4>
              </div>
            </button>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 h-full flex flex-col items-end gap-6">
          {othersData.presenceSpecificImg.slice(0, count).map((item, idx) => (
            <div
              className="relative h-[350px] lg:h-[520px] xl:h-[410px] w-full"
              key={idx}
            >
              <Image
                fill
                src={item}
                alt="Image..."
                // placeholder="blur"
                // blurDataURL={`${item}?tr=bl-100`}
                // sizes="(min-width: 1040px) calc(50vw - 92px), (min-width: 820px) calc(100vw - 80px), calc(100vw - 40px)"
                className="absolute object-cover object-center"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
