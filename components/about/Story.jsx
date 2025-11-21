import Image from "next/image";

export const Story = () => {
  return (
    <>
      <section className="relative z-0 w-full h-full mb-10 text-white font-Montserrat">
        <div className="relative w-full h-[35vh] md:h-[50vh] xl:h-[65dvh] mt-24">
          {/* hero-mask */}
          <Image
            alt="background image"
            title="background image"
            src={"http://cdn.shopifyapp.shop/vbcc/About%20Us%20-%20Hero%20Image.jpg"}
            fill
            className="z-0 object-cover object-top brightness-[0.50]"
          />
        </div>
      </section>
      <section>
        <div className="relative flex flex-col-reverse items-start gap-5 md:flex-row mb-28 padding">
          <div className="block w-full space-y-4 md:w-4/5">
            <h1 className="text-2xl font-semibold text-primary tracking-wider md:text-[32px] xl:text-[44px] w-max font-Montserrat">
              Innovation
            </h1>
            <h2 className="text-5xl font-bold text-info tracking-wider md:text-[64px] xl:text-[80px] w-max font-Montserrat">
              Excellence
            </h2>
            <p className="w-full text-base font-medium text-justify text-primary md:text-lg font-Montserrat md:w-4/5">
              With over two decades of expertise, VBCC High Temperature
              Instruments Pvt. Ltd., previously known as VB Ceramic Consultants,
              is India’s leading manufacturer of furnace, analytical
              instruments, laboratory equipment, and material processing
              equipment. Established in 2002, our unwavering commitment to
              excellence has earned the trust of diverse clientele, including
              prestigious universities, research organizations, and thriving
              industries. At VBCC, our dedicated team delivers comprehensive
              solutions across the industry spectrum, offering superior products
              and essential technical expertise through tailored turnkey
              solutions. With over 22 years of experience, we have installed
              more than 15,000 products and serve over 500 esteemed clients.
            </p>
          </div>
          <div className="relative md:sticky md:top-10 w-[300px] mx-auto md:w-[450px] overflow-hidden h-[330px] md:h-[400px] xl:w-[450px] xl:h-[480px]">
            <Image
              fill
              src={
                "http://cdn.shopifyapp.shop/vbcc/homepage/About%20Us%20-%20Innovation%20Excellence.png"
              }
              alt="bg image"
              title="bg image"
              className="object-cover object-center md:object-top"
            />
          </div>
        </div>
      </section>
    </>
  );
};

