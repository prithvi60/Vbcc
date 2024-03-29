"use client";
import othersData from "@/libs/others.json";
import Image from "next/image";
import { useEffect, useState } from "react";

export const Story = () => {
  const [width, setWidth] = useState(0);
  const [count, setCount] = useState(3);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    width >= 1024 ? setCount(4) : setCount(1);
  }, [width]);
  return (
    <section
      className="px-5 py-10 md:px-10 md:py-[60px] lg:px-[60px] lg:py-20 font-urbanist relative"
      id="story"
    >
      <div className="flex flex-col-reverse items-center lg:flex-row gap-16 lg:justify-between lg:items-start">
        <div className="w-full lg:w-1/2 space-y-8 lg:sticky lg:top-20">
          <div className="space-y-6 text-warning">
            <h3 className="text-[32px] xl:text-[40px] font-Lora">Our Story</h3>
            <p className="text-sm md:text-base font-urbanist">
              Explore the compelling journey of VBCC High Temperature
              Instruments, Guided by Dr. Viswabaskaran. With over two decades of
              industry experience and five years of immersive research at Anna
              University, his passion has garnered prestigious awards and
              accolades, shaping our remarkable trajectory.
              <br />
              <br />
              Naveen, a proud Ceramic Technology graduate and the CEO and
              founder, continues the legacy, leveraging his entrepreneurship and
              project management experience. As the former President of the
              Student Chapter of the Indian Ceramic Society, he envisions
              international expansion, dedicated to enhancing VBCC&apos;s
              product quality and maintaining innovation.
              <br />
              <br />
              Our journey is marked by an unwavering commitment to quality,
              upholding international standards for our equipment through
              continuous research and development. Join us in this extraordinary
              adventure where expertise, innovation, and dedication converge to
              deliver excellence.
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 h-full flex flex-col items-end gap-6">
          {othersData.story.slice(0, count).map((item, idx) => (
            <div className="relative h-[350px] md:h-[392px] w-full" key={idx}>
              <Image
                fill
                src={item}
                alt="Image..."
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPkY9gwEQACMwFRuhgGaQAAAABJRU5ErkJggg=="
                sizes="(min-width: 1040px) calc(50vw - 92px), (min-width: 820px) calc(100vw - 80px), calc(100vw - 40px)"
                className="absolute object-cover object-center"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
