import { data } from "@/libs/data";
import { Button, Progress } from "@nextui-org/react";
import Image from "next/image";

const HowWeDo = () => {
  return (
    <section className="py-16 px-6 md:px-5 lg:px-10 lg:py-20 xl:px-16 xl:py-20 md:bg-secondary xl:bg-transparent">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-10">
        <div className=" rounded-lg lg:rounded-none py-6 px-4 bg-primary w-full lg:w-1/2 xl:w-2/5 flex flex-col lg:flex-row lg:items-center gap-4 lg:sticky lg:top-0">
          <div className="flex flex-row items-center lg:flex-col lg:items-center gap-3 h-full">
            <h5>00</h5> 
            <div className="w-full h-3 lg:h-96 lg:w-3 bg-secondary border-2 border-slate-200 ">
            {/* <Progress aria-label="Loading..." value={20} className="max-w-sm rotate-90" color="primary"/> */}
            </div>
            <h5>03</h5>
          </div>
          <div className="relative h-full w-full">
            <div className="relative h-[182px] lg:h-[400px] w-full">
              <Image
                fill
                src={"/VBCC.png"}
                alt="Logo"
                className="object-cover object-center"
              />
            </div>
            <h3 className="text-3xl  absolute top-[50%] left-[42%] ">Vbcc</h3>
          </div>
        </div>
        <div className="w-full lg:w-1/2 xl:w-3/5 space-y-0.5">
          <div className="py-[70px] px-5 lg:py-48  bg-primary lg:bg-transparent text-secondary lg:text-warning  rounded-lg lg:rounded-none sticky top-20">
            <p className="font-Lora text-[40px] tracking-tighter">
              How we do it?
            </p>
          </div>
          {data.map((item, idx) => (
            <div
              className="py-[70px] px-5 lg:py-32 font-urbanist bg-primary lg:bg-secondary xl:bg-white text-secondary lg:text-warning  rounded-lg lg:rounded-none space-y-8 sticky top-20"
              key={idx}
            >
              <h4 className="font-Lora text-[32px] tracking-tighter">
                {item.title}
              </h4>
              <p className="lg:text-danger">{item.desc}</p>
              <Button
                radius="full"
                color="warning"
                variant="bordered"
                size="lg"
                className="hidden lg:flex px-6 py-5"
              >
                {item.btn}
              </Button>
              <Button
                radius="full"
                // color="warning"
                variant="bordered"
                size="lg"
                className="hidden md:flex lg:hidden px-6 py-5 border-secondary text-secondary"
              >
                {item.btn2}
              </Button>
              <Button
                radius="full"
                // color="warning"
                variant="bordered"
                size="lg"
                className="flex md:hidden px-6 py-5 border-secondary text-secondary"
              >
                {item.btn3}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeDo;
