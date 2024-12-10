import othersData from "@/libs/others.json";
import Image from "next/image";
import { BiSolidQuoteLeft, BiSolidQuoteRight } from "react-icons/bi";

export const Vison = () => {
  return (
    <section className="relative mb-10 lg:mb-20 padding">
      <div className="relative block w-full space-y-10 font-Montserrat">
        <div className="relative w-full h-full space-y-5">
          <h2 className="relative text-2xl font-bold tracking-wide after:absolute after:h-0.5 w-max after:w-3/4 after:-bottom-4 after:left-0 after:bg-primary md:text-4xl xl:text-5xl text-info">Mission</h2>
          <div className="flex flex-col-reverse items-center w-full gap-5 md:gap-0 md:flex-row">
            <div className="flex flex-col items-end w-full md:w-3/5">
              {mission.map((item, idx) => (
                <div
                  className={`p-6 w-full h-full flex gap-3 items-start font-medium`}
                  key={idx}
                >
                  <div className="p-1.5 rounded-full bg-info mt-1.5"></div>
                  <p className="text-sm md:text-base text-primary">{item}</p>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-center md:w-2/5">
              <div className="relative size-32 md:size-60">
                <Image
                  src={"https://ik.imagekit.io/webibee/VBCC/homepage/mission.png?updatedAt=1733319577832"}
                  fill
                  alt=""
                  className="object-contain object-center"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-full h-full space-y-5">
          <h2 className="relative text-2xl font-bold tracking-wide after:absolute after:h-0.5 md:float-end w-max after:w-3/4 after:-bottom-4 after:left-0 after:bg-primary md:text-4xl xl:text-5xl text-info">Vision</h2>
          <div className="flex flex-col-reverse items-center w-full gap-5 pt-5 md:gap-0 md:flex-row-reverse">
            <div className="flex flex-col items-end w-full md:w-3/5">
              {vision.map((item, idx) => (
                <div
                  className={`p-6 w-full h-full flex gap-3 items-start font-medium`}
                  key={idx}
                >
                  <div className="p-1.5 rounded-full bg-info mt-1.5"></div>
                  <p className="text-sm md:text-base text-primary">{item}</p>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-center md:w-2/5">
              <div className="relative size-32 md:size-60">
                <Image
                  src={"https://ik.imagekit.io/webibee/VBCC/homepage/vision.png?updatedAt=1733319577960"}
                  fill
                  alt=""
                  className="object-contain object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute right-0 z-0 w-48 h-28 -bottom-28 md:h-28 md:w-72">
        <Image
          src={"/vector1.svg"}
          fill
          alt=""
          className="object-contain object-center"
        />
      </div>
    </section>
  );
};

const vision = [
  "Be the global leader in high-temperature instrument manufacturing",
  "Maintain an unwavering commitment to quality, innovation, and customer satisfaction",
  "Continuously expand technological capabilities and product offering setting new industry standards",
  "Contribute to the success of clients and the advancement of science and industry worldwide through sustainable practices and continuous improvement",
];

const mission = [
  "Deliver innovation and high-quality furnace, analytical instruments, laboratory equipment, and material processing equipment",
  "Exceed customer expectations through excellence in engineering and unparalleled technical expertise",
  "Provide dedicated customer service and tailored turnkey solutions",
  "Support the diverse needs of clients, fostering advancements in research, industry, and education",
];
