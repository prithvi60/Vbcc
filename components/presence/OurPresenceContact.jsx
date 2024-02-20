"use client";
import { useState } from "react";
import { Btn2 } from "../Btn";

export const OurPresenceContact = ({ title, mobTitle, para }) => {
  const [Copied, setCopied] = useState(false);
  const handleInquire = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setInterval(() => {
      setCopied(false);
    }, 5000);
  };
  return (
    <section className="py-16 px-5 md:py-[60px] md:px-10 xl:px-20 ">
      <div className="bg-primary p-10 space-y-10">
        <h3 className="hidden md:block text-[40px] text-white text-center font-Lora">
          {title}
        </h3>
        <h3 className="block md:hidden text-3xl text-white text-center font-Lora">
          {mobTitle}
        </h3>
        <p className="text-base md:text-2xl text-white md:mx-auto font-urbanist w-full md:w-11/12 text-center tracking-tight md:tracking-wide leading-snug opacity-80">
          {para}
        </p>
        <span className="flex flex-col-reverse md:flex-row justify-center items-center gap-3 md:gap-6">
          {/* <Btn2
            Hbgcolor={"bg-info"}
            textColor={"text-info"}
            HtextColor={"text-white"}
            bColor={"border-info"}
            title={"Call +91 73388 94199"}
            href={""}
            background={"transparent"}
          /> */}
          <div className="block space-y-2 relative">
            <button
              className={`group/btn rounded-full px-6 py-4 border border-info BG-transparent hover:bg-info text-center text-base duration-700 delay-75 font-urbanist capitalize w-max`}
              onClick={() => handleInquire("+91 73388 94199")}
            >
              <div className={`h-6 w-full overflow-hidden`}>
                <h4
                  className={`transition translate-y-0 group-hover/btn:-translate-y-20 duration-700 text-info`}
                >
                  +91 73388 94199
                </h4>
                <h4
                  className={`translate-y-20 transition group-hover/btn:-translate-y-[25px] duration-700 group-hover/btn:text-white`}
                >
                  +91 73388 94199
                </h4>
              </div>
            </button>
            {Copied && (
              <div className="absolute -bottom-7 left-0 text-white text-base text-center w-max">
                ✔️Copied to Clipboard
              </div>
            )}
          </div>
          <Btn2
            Hbgcolor={"bg-white"}
            textColor={"text-white"}
            HtextColor={"text-warning"}
            bColor={"border-white group-hover:border-white"}
            title={"Contact Us"}
            href={"/contact"}
            background={"transparent"}
          />
        </span>
      </div>
    </section>
  );
};
