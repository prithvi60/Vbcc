import Image from "next/image";

const Newsletter = () => {
  return (
    <section className="relative z-auto text-white padding font-Montserrat">
      <div className="relative border-2 before:absolute before:h-2 before:bg-info before:w-full before:-top-2.5 before:left-0 md:rounded-none border-info flex flex-col md:flex-row">
        <div className="relative w-full h-96 md:h-72 lg:h-96">
          <Image
            alt="background image"
            src="https://ik.imagekit.io/webibee/VBCC/homepage/newsletter-bg.png?updatedAt=1733226035657"
            fill
            className="z-0 object-cover object-center"
          />
          <div className="absolute w-full h-full bg-[#31394ae5] z-0"></div>
        </div>
        {/* bg-gradient-to-tr from-[#374154B2] via-[#0D2143B2] to-[#0D2143B2] */}
        <div className="absolute top-0 left-0 z-0 px-5 py-10 md:p-10 2xl:p-12 w-full lg:w-[65%]">
          <div className="space-y-9">
            <h2 className="text-2xl md:text-[32px] xl:text-[40px] 2xl:text-5xl font-semibold">
              Get the Latest <span className="text-info">Updates</span>
              <div className="h-0.5 mt-3 w-72 bg-info"></div>
            </h2>
            <p className="w-full text-sm md:text-xl 2xl:text-2xl">
              Stay connected for the latest updates in cutting edge technology,
              launches of products, and valuable content revisions.
            </p>
          </div>
          <form
            action="https://public.herotofu.com/v1/5317bdd0-ae22-11ee-870a-ff8e0d81300a"
            method="post"
            acceptCharset="UTF-8"
            className="w-full mt-6"
          >
            <div className="flex flex-col items-center gap-5 px-3 py-2 mb-4 md:flex-row lg:gap-10">
              <input
                required
                name="Email"
                type="email"
                placeholder="Subscribe our Newsletter"
                className="bg-[#D9D9D933] rounded-full py-3 px-3  placeholder:text-secondary !border-none !outline-none w-full md:max-w-96 text-white text-base md:text-lg"

              />
              <button
                type="submit"
                className={`hidden sm:block rounded-full px-4 py-3 group bg-[#D9D9D933] hover:bg-info text-center text-base duration-700 delay-75 capitalize w-full md:w-max`}
              >
                <div className={`h-6 w-full overflow-hidden`}>
                  <h3
                    className={`transition translate-y-0 group-hover:-translate-y-20 duration-700 text-white`}
                  >
                    Subscribe
                  </h3>
                  <h3
                    className={`translate-y-20 transition group-hover:-translate-y-[25px] duration-700 text-white`}
                  >
                    Subscribe
                  </h3>
                </div>
              </button>
            </div>
            <button
              type="submit"
              className={`block sm:hidden rounded-full px-4 py-2 group bg-secondary hover:bg-info text-center text-base duration-700 delay-75 capitalize w-full`}
            >
              <div className={`h-6 w-full overflow-hidden`}>
                <h3
                  className={`transition translate-y-0 group-hover:-translate-y-20 duration-700 text-primary`}
                >
                  Subscribe
                </h3>
                <h3
                  className={`translate-y-20 transition group-hover:-translate-y-[25px] duration-700 text-white`}
                >
                  Subscribe
                </h3>
              </div>
            </button>
          </form>
        </div>
        <div className="absolute z-auto hidden w-full lg:block h-52 md:max-w-96 top-16 right-8 xl:right-20 xl:h-60">
          <Image
            alt="background image"
            src="https://ik.imagekit.io/webibee/VBCC/homepage/newsletter-1.png?updatedAt=1733226033627"
            fill
            className="z-0 object-cover object-center"
          />
          <div className="absolute left-0 z-auto w-full h-3 -top-[68px] xl:-top-[64px]">
            <Image
              alt="svg"
              src={"/svg 1.svg"}
              fill
              className="object-contain object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
