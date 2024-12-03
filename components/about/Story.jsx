import Image from "next/image";

export const Story = () => {
  return (
    <section>
      <div className="relative flex flex-col-reverse items-start gap-5 mt-20 md:flex-row mb-28 xl:mb-60 md:mt-28 xl:mt-32 padding">
        <div className="block w-full space-y-4 md:space-y-5 lg:space-y-8 md:w-4/5">
          <h4 className="text-2xl font-semibold font-Nunito text-primary tracking-wider md:text-[32px] xl:text-[44px] w-max">Innovation</h4>
          <h2 className="text-5xl font-semibold font-Nunito text-info tracking-wider md:text-[64px] xl:text-[80px] w-max">Excellence</h2>
          <p className="w-full text-sm font-medium text-justify text-primary md:text-base font-Montserrat md:w-4/5">With over two decades of expertise, VBCC High Temperature Instruments Pvt. Ltd., previously known as VB Ceramic Consultants, is India’s leading manufacturer of furnace, analytical instruments, laboratory equipment, and material processing equipment. Established in 2002, our unwavering commitment to excellence has earned the trust of diverse clientele, including prestigious universities, research organizations, and thriving industries. At VBCC, our dedicated team delivers comprehensive solutions across the industry spectrum, offering superior products and essential technical expertise through tailored turnkey solutions. With over 22 years of experience, we have installed more than 15,000 products and serve over 500 esteemed clients.</p>
        </div>
        <div className="relative md:sticky md:top-10 w-[320px] mx-auto md:w-[460px] overflow-hidden h-[370px]">
          <Image fill src={"https://ik.imagekit.io/webibee/VBCC/homepage/ceo's.png?updatedAt=1733225204199"} alt="ceo's image" className="object-contain object-center md:object-top" />
        </div>
      </div>
    </section>
  );
};


{/* <section
className="px-5 py-10 md:px-10 md:py-[60px] lg:px-[60px] lg:py-20 font-urbanist relative"
id="story"
>
<div className="flex flex-col-reverse items-center gap-16 lg:flex-row lg:justify-between lg:items-start">
  <div className="w-full space-y-8 lg:w-1/2 lg:sticky lg:top-20">
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
  <div className="flex flex-col items-end w-full h-full gap-6 lg:w-1/2">
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
</section> */}