import othersData from "@/libs/others.json";
import Image from "next/image";

export const OurTeam = () => {
  return (
    <section className="px-5 py-10 md:px-10 md:py-[60px] lg:px-[60px] lg:py-20 font-urbanist relative">
      <div className="flex flex-col items-center lg:flex-row gap-16 lg:justify-between lg:items-start">
        <div className="w-full lg:w-1/2 space-y-8 lg:sticky lg:top-20">
          <div className="space-y-6 text-warning">
            <h3 className="text-[32px] xl:text-[40px] font-Lora">Our Team</h3>
            <p className="text-sm md:text-base">
            Welcome to VBCC High Temperature Instruments! Led by CEO Naveen and guided by Dr. V. Viswabaskaran, our dynamic duo brings over 20 years of expertise, blending experience and innovation. Naveen, a project-savvy entrepreneur, complements Dr. Viswabaskaran&apos;s guidance, leading our team to excellence in high-temperature instruments.
              <br />
              <br />
              Diversity is our strength – from Ceramic to Mechanical and Electrical Engineers, we bring talents to creatively tackle challenges. Our mix of seasoned and young professionals ensures a harmony of wisdom and fresh ideas, propelling us forward in an ever-changing landscape.
              <br />
              <br />
              At VBCC, we don&apos;t just bring experience; we bring innovation. Our approach is not just responsive but friendly too. Understanding the importance of strong client relationships, we excel in meeting diverse client needs. Join us on our journey as we push the boundaries of high-temperature instrument technology. At VBCC, we&apos;re not just a team – we&apos;re a family dedicated to making a difference in the world of innovation and customer satisfaction.
            </p>
          </div>
        </div>
        <div className="w-full h-full sm:w-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-5 lg:gap-0 lg:gap-y-20">
          {othersData.team.map((item, idx) => (
          <div className="p-5 space-y-5 w-full h-full bg-primary" key={idx}>
            <div className="relative h-[260px] w-full sm:w-[315px] lg:w-[365px] xl:w-[265px]" >
              <Image
                fill
                src={item.img}
                alt="Image..."
                placeholder="blur"
                blurDataURL={`${item.img}?tr=bl-100`}
                sizes="(min-width: 1440px) 265px, (min-width: 1040px) 365px, (min-width: 400px) 315px, 88px"
                className="absolute object-cover object-center"
              />
            </div>
            <div className="space-y-3 text-center">
              <h3 className="font-Lora text-white text-xl md:text-2xl capitalize">
                {item.name}
              </h3>
              <h4 className="font-urbanist text-white text-base capitalize">
                {item.designation}
              </h4>
              <h4 className="font-urbanist text-white text-sm uppercase">
                {item.grade}
              </h4>
            </div>
          </div>
           ))} 
        </div>
      </div>
    </section>
  );
};
