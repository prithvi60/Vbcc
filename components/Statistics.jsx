"use client";
import { statistics } from "@/libs/otherPage";
import CountUp, { useCountUp } from "react-countup";

const Statistics = () => {
  useCountUp({
    ref: "counter",
    end: 1234567,
    enableScrollSpy: true,
    scrollSpyDelay: 1000,
  });
  return (
    <section className="w-full px-3 py-6 bg-white border-white sm:border-r-2 sm:rounded-tr-3xl lg:absolute lg:w-4/5 2xl:w-3/4 -bottom-24 2xl:-bottom-16 xl:px-5 md:py-6 xl:py-10 text-primary font-Montserrat">
      <div className="flex flex-wrap items-center justify-center w-full gap-7 md:gap-10 lg:flex-nowrap lg:justify-between lg:gap-20 xl:justify-center 2xl:gap-32 xl:gap-14">
        {statistics.map((item, idx) => (
          <div
            className="flex flex-col items-center justify-center gap-4 md:justify-between md:gap-10 md:flex-row max-w-80 md:mt-10 md:mb-0 xl:mt-0"
            key={idx}
          >
            <h2 className="w-full text-lg font-semibold 2xl:text-xl md:w-3/5">{item.title}</h2>
            <div className="w-full">
              <div className="text-[26px] font-bold text-center text-info">
                <CountUp
                  end={item.count}
                  duration={2}
                  suffix="+"
                  enableScrollSpy
                />
                <br />
                <span id="counter" className="hidden" />
              </div>
              {/* <p className="text-xs font-medium">{item.firm}</p> */}
              {/* <hr className="w-full h-[3px] bg-secondary" /> */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Statistics;
