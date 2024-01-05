export const ContactForm = () => {
  return (
    <section className="px-5 md:px-10 py-10 md:py-[60px] lg:px-[60px] lg:py-20 text-warning space-y-10">
      <div className="w-full h-full space-y-6">
        <h2 className="font-Lora text-2xl md:text-4xl xl:text-6xl w-full">
          Contact Us
        </h2>
        <p className="font-urbanist text-sm lg:text-base">
          Please fill out the form below, and we will get back to you as soon as
          possible. * is mandatory form field.
        </p>
      </div>
      <form
        action=""
        className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-0 md:gap-x-8 md:gap-y-10"
      >
        <div className="w-full block space-y-3">
          <label htmlFor="company" className="text-xl md:text-2xl font-Lora">
            Name/Company<span className="text-red-600">*</span>
          </label>
          <input
            required
            autoComplete="on"
            type="text"
            id="company"
            placeholder="Enter your Name"
            className="rounded-md font-urbanist border border-warning w-full mt-1 px-4 py-3 focus:border-none focus:ring-0 focus:outline focus:outline-success  placeholder:text-sm md:placeholder:text-base placeholder:font-urbanist"
          />
        </div>
        <div className="w-full block space-y-3">
          <label htmlFor="position" className="text-xl md:text-2xl font-Lora">
            Position
          </label>
          <input
            autoComplete="on"
            type="text"
            id="position"
            placeholder="Enter your Position at the Company"
            className="rounded-md font-urbanist border border-warning w-full mt-1 px-4 py-3 focus:border-none focus:ring-0 focus:outline focus:outline-success  placeholder:text-sm md:placeholder:text-base placeholder:font-urbanist"
          />
        </div>
        <div className="w-full block space-y-3">
          <label htmlFor="email" className="text-xl md:text-2xl font-Lora">
            Email<span className="text-red-600">*</span>
          </label>
          <input
            required
            autoComplete="on"
            type="email"
            id="email"
            placeholder="Enter your email"
            className="rounded-md font-urbanist border border-warning w-full mt-1 px-4 py-3 focus:border-none focus:ring-0 focus:outline focus:outline-success placeholder:text-sm md:placeholder:text-base placeholder:font-urbanist"
          />
        </div>
        <div className="w-full block space-y-3">
          <label htmlFor="phone" className="text-xl md:text-2xl font-Lora">
            Phone Number<span className="text-red-600">*</span>
          </label>
          <input
            required
            type="text"
            id="phone"
            placeholder="Enter your Phone Number"
            className="rounded-md font-urbanist border border-warning w-full mt-1 px-4 py-3 focus:border-none focus:ring-0 focus:outline focus:outline-success  placeholder:text-sm md:placeholder:text-base placeholder:font-urbanist"
          />
        </div>
        <div className="w-full block space-y-3 col-auto md:col-span-2">
          <label htmlFor="message" className="text-xl md:text-2xl font-Lora">
            Message
          </label>
          <textarea
            autoComplete="on"
            type="text"
            id="message"
            rows={"10"}
            placeholder="Type in your Message"
            className="rounded-md font-urbanist border border-warning w-full mt-1 px-4 py-3 focus:border-none focus:ring-0 focus:outline focus:outline-success placeholder:text-sm md:placeholder:text-base placeholder:font-urbanist"
          />
        </div>
        <button
          type="submit"
          className={`block rounded-full px-4 py-2 border border-warning bg-primary hover:bg-info text-center text-base duration-700 delay-75 font-urbanist capitalize w-full md:w-[350px] group`}
        >
          <div className={`h-6 w-full overflow-hidden`}>
            <h4
              className={`transition translate-y-0 group-hover:-translate-y-20 duration-700 text-white`}
            >
              Contact
            </h4>
            <h4
              className={`translate-y-20 transition group-hover:-translate-y-[25px] duration-700 text-white`}
            >
              Contact
            </h4>
          </div>
        </button>
      </form>
    </section>
  );
};
