import { VM } from "@/libs/data";
import Image from "next/image";


export const Vison = () => {
    return (
        <>
      {VM.map((item,idx)=>(
    <section className="px-5 py-10 md:px-10 md:py-[60px] lg:px-[60px] lg:py-20 font-urbanist relative bg-success" key={idx}>
      <div className="flex flex-col items-center lg:flex-row gap-16 lg:justify-between lg:items-start" >
        <div className="w-full lg:w-1/2 h-full flex flex-col items-end gap-6">
          {item.img.map((i,id) => (
            <div className="relative h-[350px] md:h-[392px] w-full" key={id}>
              <Image
                fill
                src={i}
                alt="Image..."
                className="absolute object-cover object-center"
              />
            </div>
          ))}
        </div>
        <div className="w-full lg:w-1/2 space-y-8 lg:sticky lg:top-20">
          <div className="space-y-6 text-white">
            <h3 className="text-[32px] xl:text-[40px] font-Lora">
              {item.title}
            </h3>
            <div className="block space-y-3 text-sm md:text-base 2xl:text-lg font-urbanist w-full xl:w-[70%] 2xl:w-[90%]">
              <p>
                {item.para1}
              </p>
              <ol className="space-y-3 list-decimal ml-2">
                {item.lists.map((list,index)=>(
                <li key={index}>
                  {list}
                </li>
                ))}
                {/* <li>
                  Complete Technology Concept: Our commitment extends to
                  providing comprehensive technology concepts, ensuring holistic
                  and integrated approaches.
                </li>
                <li>
                  Cutting-Edge Solutions: Staying at the forefront of
                  industrial technology, we offer solutions that evolve with
                  industry needs through continuous research and development.
                </li>
                <li>
                  Efficient Customer Service: Clear communication, prompt
                  responses, and personalized attention are fundamental to
                  ensuring customer satisfaction and success.
                </li> */}
              </ol>
              <p>{item.para2}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
        ))}
        </>
  );
};
