"use client";
import othersData from "@/libs/others.json"
import CountUp, { useCountUp } from "react-countup";

const Statistics = () => {
  useCountUp({
    ref: "counter",
    end: 1234567,
    enableScrollSpy: true,
    scrollSpyDelay: 1000,
  });
  return (
    <section className="py-20 px-5 md:px-16 lg:px-20 w-full bg-statistics bg-cover bg-center bg-no-repeat">
      {/* <div className="relative h-[50vh] w-full py-20 px-5 md:px-16 lg:px-20">
        <Image src={"/Statistics.png"} alt="statistics" fill className="object-cover object-center brightness-50"/>
      </div> */}
      <div className="flex flex-wrap justify-evenly items-center gap-10 xl:gap-16 2xl:gap-20">
        {othersData.statistics.map((item, idx) => (
          <div
            className="font-Lora text-center space-y-4 md:mt-10 mb-20 md:mb-0 xl:mt-0"
            key={idx}
          >
            <h2 className="text-2xl md:text-3xl 2xl:text-4xl">{item.title}</h2>
            <hr className="w-full h-[3px] bg-secondary" />
            <div className="text-[60px] md:text-[90px]">
              <CountUp
                end={item.count}
                duration={2}
                suffix="+"
                enableScrollSpy
              />
              <br />
              <span id="counter" className="hidden" />
            </div>
            <hr className="w-full h-[3px] bg-secondary" />
            <p className="font-urbanist">{item.firm}</p>
            <hr className="w-full h-[3px] bg-secondary" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Statistics;
