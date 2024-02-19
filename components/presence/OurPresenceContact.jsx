import { Btn2 } from "../Btn";

export const OurPresenceContact = ({ title, mobTitle, para }) => {
  return (
    <section className="py-16 px-5 md:py-[60px] md:px-10 xl:px-20 ">
      <div className="bg-primary p-10 space-y-10">
        <h3 className="hidden md:block text-[40px] text-white text-center font-Lora">
          {title}
        </h3>
        <h3 className="block md:hidden text-3xl text-white text-center font-Lora">
          {mobTitle}
        </h3>
        <p className="text-base md:text-2xl text-secondary md:mx-auto font-urbanist w-full md:w-11/12 text-center tracking-tight md:tracking-wide leading-snug opacity-80">
          {para}
        </p>
        <span className="flex flex-col-reverse md:flex-row justify-center items-center gap-3 md:gap-6">
          <Btn2
            Hbgcolor={"bg-info"}
            textColor={"text-info"}
            HtextColor={"text-white"}
            bColor={"border-info"}
            title={"Call +91 73388 94199"}
            href={""}
            background={"transparent"}
          />
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
