import othersData from "@/libs/others.json";
import Image from "next/image";
import { BiSolidQuoteLeft, BiSolidQuoteRight } from "react-icons/bi";

export const Vison = () => {
  return (
    <section className="relative px-5 mb-10 lg:mb-20 md:pl-0 md:py-16 md:pr-10 xl:py-24">
      <div className="relative flex flex-col w-[96%] sm:w-full h-full gap-20 lg:gap-0 lg:flex-row lg:justify-between font-Montserrat">
        <div className="relative w-full h-full lg:w-3/5">
          <h2 className="absolute -top-16 md:-top-36 2xl:-top-56 left-12 md:left-28 text-[32px] tracking-wider !leading-tight md:text-[40px] lg:text-[48px] xl:text-[64px] capitalize font-bold text-primary w-max">
            Mission
          </h2>
          <div className="z-0 h-full md:h-[80vh] absolute -bottom-3 md:-bottom-24 lg:-bottom-10 xl:-bottom-24 left-2 w-full">
            <div
              className="relative z-0 w-full h-full px-6 py-8 bg-right-bottom bg-no-repeat bg-cover explore_card-mask border-3 border-secondary"
              style={{
                backgroundImage: "url('/explore-image-bg.png')",
              }}
            >
              <div className="absolute w-full h-full bg-[#293271] bg-opacity-60 top-0 left-0 z-10"></div>
            </div>
          </div>
          <div className="relative z-0 flex flex-col items-end w-3/4 h-auto gap-6 ml-20 lg:w-1/2">
            {mission.map((item, idx) => (
              <div
                className={`p-6 bg-info space-y-4 rounded-lg w-full h-full border border-secondary text-white flex gap-6 transition-all duration-500 ease-linear transform items-center group hover:scale-110`}
                key={idx}
              >
                {/* <GoDotFill className="text-xl text-white " /> */}
                <div className="p-1 transition-all duration-500 ease-linear transform bg-white rounded-full group-hover:p-2"></div>
                <p className="text-xs md:text-sm">{item}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative block w-full px-10 space-y-4 md:py-10 xl:py-12 md:space-y-8 lg:w-2/5 text-primary">
          <h2 className="text-[32px] tracking-wider !leading-tight md:text-[40px] lg:text-[48px] xl:text-[64px] w-full capitalize font-bold">
            Vision
          </h2>
          <ul className="relative block space-y-3 list-disc md:space-y-4">
            <BiSolidQuoteLeft className="absolute text-3xl md:text-4xl text-info -top-2 md:-top-7 -left-12" />
            <li className="text-sm list-inside md:text-base">Be the global leader in high-temperature instrument manufacturing</li>
            <li className="text-sm list-inside md:text-base">Maintain an unwavering commitment to quality, innovation, and customer satisfaction</li>
            <li className="text-sm list-inside md:text-base">Continuously expand technological capabilities and product offerings, setting new industry standards</li>
            <li className="text-sm list-inside md:text-base">Contribute to the success of clients and the advancement of science and industry worldwide through sustainable practices and continuous improvement</li>
            <BiSolidQuoteRight className="absolute text-3xl -right-7 md:right-0 -bottom-7 md:text-4xl text-info md:-bottom-4" />
          </ul>
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

const mission = ["Deliver innovation and high-quality furnace, analytical instruments, laboratory equipment, and material processing equipment", "Exceed customer expectations through excellence in engineering and unparalleled technical expertise", "Provide dedicated customer service and tailored turnkey solutions", "Support the diverse needs of clients, fostering advancements in research, industry, and education"]

// <>
//   {othersData.vision.map((item, idx) => (
//     <section
//       className="px-5 py-10 md:px-10 md:py-[60px] lg:px-[60px] lg:py-20 font-urbanist relative bg-success"
//       key={idx}
//     >
//       <div className="flex flex-col items-center gap-16 lg:flex-row lg:justify-between lg:items-start">
//         <div className="flex flex-col items-end w-full h-full gap-6 lg:w-1/2">
//           {item.img.slice(0, count).map((image, id) => (
//             <div
//               className="relative h-[350px] md:h-[392px] w-full"
//               key={id}
//             >
//               <Image
//                 fill
//                 src={image}
//                 alt="Image..."
//                 placeholder="blur"
//                 blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPkY9gwEQACMwFRuhgGaQAAAABJRU5ErkJggg=="
//                 sizes="(min-width: 1040px) calc(50vw - 92px), (min-width: 820px) calc(100vw - 80px), calc(100vw - 40px)"
//                 className="absolute object-cover object-center"
//               />
//             </div>
//           ))}
//         </div>
//         <div className="w-full space-y-8 lg:w-1/2 lg:sticky lg:top-20">
//           <div className="space-y-6 text-white">
//             <h3 className="text-[32px] xl:text-[40px] font-Lora">
//               {item.title}
//             </h3>
//             <div className="block space-y-3 text-sm md:text-base 2xl:text-lg font-urbanist w-full xl:w-[70%] 2xl:w-[90%]">
//               <p>{item.para1}</p>
//               <ol className="ml-2 space-y-3 list-decimal">
//                 {item.lists.map((list, index) => (
//                   <li key={index}>{list}</li>
//                 ))}
//               </ol>
//               <p>{item.para2}</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   ))}
// </>