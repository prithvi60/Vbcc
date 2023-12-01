import Image from "next/image";

export const WCU = () => {
  return (
    <section className="px-6  md:px-10 py-16 xl:px-20 xl:py-20 font-urbanist relative">
        <div className="flex flex-col items-center lg:flex-row gap-16 lg:justify-between  lg:items-start">
        <div className="w-full lg:w-1/2 space-y-8 lg:sticky lg:top-52">
      <div className="space-y-6 text-warning">
        <h3 className="text-[28px] md:text-[32px] xl:text-[40px]">
          Why Choose Us?
        </h3>
        <p className="">
          With over two decades of expertise, VB Ceramic Consultants (VBCC) is a
          distinguished leader crafting top-tier Instruments, Equipment,
          Furnaces, and Kilns. Our unwavering commitment to excellence has
          earned trust from diverse clientele, including prestigious
          universities, research organizations, and thriving industries. 
          <br/>
          <br/>
          At VBCC, our dedicated team delivers comprehensive solutions across the
          industry spectrum, providing superior products and essential technical
          expertise through tailored turnkey solutions.
          <br/>
          <br/>
        Choose VBCC for quality,
          innovation, and personalized service, transforming challenges into
          opportunities.
        </p>
      </div>
      <div className="flex items-center gap-6">
      <div className="relative h-32 w-32">
        <Image
          fill
          src="/VectorISO.svg"
          alt="Logo"
          className="absolute object-contain object-center"
        />
      </div>
      <div className="relative h-32 w-32">
        <Image
          fill
          src="/Conformité_Européenne_(logo) 1.svg"
          alt="Logo"
          className="absolute object-contain object-center"
        />
      </div>
      <div className="relative h-32 w-32">
        <Image
          fill
          src="/MakeinIndia 1.svg"
          alt="Logo"
          className="absolute object-contain object-center"
        />
      </div>
      </div>
      </div>
      {/* lg:h-[90vh] xl:h-[78vh] 2xl:h-[70vh] */}
      <div className="w-full lg:w-1/2 h-full flex flex-col items-end gap-6">
        <div className="p-6 bg-primary space-y-4 rounded-lg w-full xl:w-[85%] sticky top-20">
        <div className="relative h-12 w-12">
        <Image
          fill
          src="/Vectortool.svg"
          alt="Logo"
          className="absolute object-contain object-center"
        />
        </div>
        <p>Technical support available six days a week, providing comprehensive assistance to address your needs and ensure a smooth experience.</p>
        </div>
        <div className="p-6 bg-primary space-y-4 rounded-lg w-full xl:w-[85%] sticky top-20">
        <div className="relative h-12 w-12">
        <Image
          fill
          src="/Vectorsquare.svg"
          alt="Logo"
          className="absolute object-contain object-center"
        />
        </div>
        <p>Our team Tailors your Equipment to meet your exact specifications, offering personalized customization to suit your unique needs and preferences. Your equipment, your way.</p>
        </div>
        <div className="p-6 bg-primary space-y-4 rounded-lg w-full xl:w-[85%] sticky top-20">
        <div className="relative h-12 w-12">
        <Image
          fill
          src="/Vectorresearch.svg"
          alt="Logo"
          className="absolute object-contain object-center"
        />
        </div>
        <p>We offer cutting-edge Research & Development services, dedicated to innovation and problem-solving, pushing the boundaries of possibility.</p>
        </div>
        <div className="p-6 bg-primary space-y-4 rounded-lg w-full xl:w-[85%] sticky top-20">
        <div className="relative h-12 w-12">
        <Image
          fill
          src="/Vectorbox.svg"
          alt="Logo"
          className="absolute object-contain object-center"
        />
        </div>
        <p>We specialize in thorough installation and training services, ensuring your staff gains proficiency in equipment operation and management, empowering them with essential knowledge and skills.</p>
        </div>
      </div>
      </div>
    </section>
  );
};
