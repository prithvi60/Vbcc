import othersData from "@/libs/others.json";
import Image from "next/image";

const WCU = () => {
  return (
    <section className="px-6 md:px-10 py-16 xl:px-20 xl:py-20 font-urbanist relative">
      <div className="flex flex-col items-center lg:flex-row gap-16 lg:justify-between  lg:items-start">
        <div className="w-full lg:w-1/2 space-y-8 lg:sticky lg:top-20">
          <div className="space-y-6 text-warning">
            <h3 className="text-[28px] md:text-[32px] xl:text-[40px] font-Lora">
              Why Choose Us?
            </h3>
            <p className="">
              With over two decades of expertise, VBCC High Temperature
              Instruments Pvt. Ltd. previously known as VB Ceramic Consultants
              is a distinguished leader crafting top-tier Instruments,
              Equipment, Furnaces, and Kilns. Our unwavering commitment to
              excellence has earned trust from diverse clientele, including
              prestigious universities, research organizations, and thriving
              industries.
              <br />
              <br />
              At VBCC, our dedicated team delivers comprehensive solutions
              across the industry spectrum, providing superior products and
              essential technical expertise through tailored turnkey solutions.
              <br />
              <br />
              Choose VBCC for quality, innovation, and personalized service,
              transforming challenges into opportunities.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-x-10 justify-center md:justify-start">
            {othersData.howWeDoImg.map((list, idx) => (
              <div
                // style={{ width: `${list.width}`, height: `${list.height}` }}
                className={`relative w-[6rem] h-[6rem] md:w-[10rem] md:h-[10rem]`}
                key={idx}
              >
                <Image
                  fill
                  src={list.img}
                  alt={list.alt}
                  className="absolute object-contain object-center"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="w-full lg:w-1/2 h-full flex flex-col items-end gap-6 md:mb-[220px]">
          {othersData.whyChooseUs.map((item, idx) => (
            <div
              className={`p-6 bg-primary space-y-4 rounded-lg w-full xl:w-[85%] sticky top-20 min-h-[220px] border border-secondary `}
              key={idx}
            >
              <div className="relative h-12 w-12">
                <Image
                  fill
                  src={item.img}
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPkY9gwEQACMwFRuhgGaQAAAABJRU5ErkJggg=="
                  alt="Logo"
                  className="absolute object-contain object-center"
                />
              </div>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WCU;

// Two or Three Zone Furnace up to 1800 - done
// ChemicalVapourDeposition(CVD)upto1200°C - done
// Dilatometer(ThermalExpansionupto1600°C) - done
// Alumina-Boats,Crucibles - done

// deg, comma
