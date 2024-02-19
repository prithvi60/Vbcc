import Link from "next/link";

const Newsletter = () => {
  return (
    <section className="px-6 md:px-10 xl:px-16 2xl:px-20 py-16 xl:py-12 2xl:py-16 text-warning">
      <div className="py-10 px-5 md:p-10 2xl:p-12  space-y-10 2xl:space-y-12 rounded-lg md:rounded-none">
        <div className="text-center space-y-9 2xl:space-y-10">
          <h2 className="text-2xl md:text-[32px] xl:text-[40px] 2xl:text-5xl font-Lora">
            Get the Latest Updates
          </h2>
          <p className="text-sm md:text-xl 2xl:text-2xl font-urbanist w-full lg:w-[65%] mx-auto">
            Stay connected for the latest updates in cutting edge technology,
            launches of products, and valuable content revisions.
          </p>
        </div>
        <form
          action="https://public.herotofu.com/v1/5317bdd0-ae22-11ee-870a-ff8e0d81300a"
          method="post"
          acceptCharset="UTF-8"
        >
          <div className="flex flex-wrap sm:flex-nowrap items-center max-w-[320px] md:w-[375px] rounded-full border py-2 px-3 border-black focus:border-secondary mx-auto mb-4 sm:mb-0">
            <input
              required
              name="Email"
              type="email"
              placeholder="Your Email"
              className="bg-transparent placeholder:text-zinc-500 !border-none !outline-none placeholder:font-Nunito w-[175px] md:w-[198px]"
            />
            {/* px-4 py-2 */}
            <button
              type="submit"
              className={`hidden sm:block rounded-full px-4 py-2 group bg-primary hover:bg-info text-center text-base duration-700 delay-75 font-urbanist capitalize w-full`}
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
              className={`block sm:hidden rounded-full px-4 py-2 group bg-primary hover:bg-info text-center text-base duration-700 delay-75 font-urbanist capitalize w-full`}
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
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
