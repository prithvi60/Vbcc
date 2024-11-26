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
    <section className="w-full px-3 py-6 lg:absolute lg:w-4/5 2xl:w-3/4 -bottom-24 2xl:-bottom-16 xl:px-5 md:py-6 xl:py-10 text-primary">
      <div className="flex flex-wrap items-center justify-center w-full gap-7 md:gap-10 lg:flex-nowrap lg:justify-between lg:gap-20 2xl:justify-start xl:gap-14">
        {othersData.statistics.map((item, idx) => (
          <div
            className="flex justify-between gap-5 text-center max-w-80 font-Lora md:mt-10 md:mb-0 xl:mt-0"
            key={idx}
          >
            <h2 className="w-full text-lg font-semibold 2xl:text-xl md:w-3/5">{item.title}</h2>
            <div className="w-full">
              <div className="text-[26px] font-bold">
                <CountUp
                  end={item.count}
                  duration={2}
                  suffix="+"
                  enableScrollSpy
                />
                <br />
                <span id="counter" className="hidden" />
              </div>
              <p className="text-xs font-medium font-urbanist">{item.firm}</p>
              {/* <hr className="w-full h-[3px] bg-secondary" /> */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Statistics;
