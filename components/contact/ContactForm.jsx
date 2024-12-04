export const ContactForm = () => {
  return (
    <section className="px-5 md:px-10 mt-20 py-10 md:py-[60px] lg:px-[60px] lg:py-20 text-warning space-y-10 font-Montserrat">
      <div className="w-full h-full space-y-6">
        <h2 className="w-full text-2xl md:text-4xl xl:text-6xl">
          Contact Us
        </h2>
        <p className="text-sm lg:text-base">
          Please fill out the form below, and we will get back to you as soon as
          possible. * is mandatory form field.
        </p>
      </div>
      <form
        action="https://public.herotofu.com/v1/5317bdd0-ae22-11ee-870a-ff8e0d81300a"
        method="post"
        acceptCharset="UTF-8"
        className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-0 md:gap-x-8 md:gap-y-10"
      >
        <div className="block w-full space-y-3">
          <label htmlFor="company" className="text-xl md:text-2xl ">
            Name/Company<span className="text-red-600">*</span>
          </label>
          <input
            required
            name="Company"
            autoComplete="on"
            type="text"
            id="company"
            placeholder="Enter your Name"
            className="w-full px-4 py-3 mt-1 border rounded-md border-warning focus:border-none focus:ring-0 focus:outline focus:outline-success placeholder:text-sm md:placeholder:text-base placeholder:"
          />
        </div>
        <div className="block w-full space-y-3">
          <label htmlFor="position" className="text-xl md:text-2xl ">
            Position
          </label>
          <input
            autoComplete="on"
            type="text"
            name="Position"
            id="position"
            placeholder="Enter your Position at the Company"
            className="w-full px-4 py-3 mt-1 border rounded-md border-warning focus:border-none focus:ring-0 focus:outline focus:outline-success placeholder:text-sm md:placeholder:text-base placeholder:"
          />
        </div>
        <div className="block w-full space-y-3">
          <label htmlFor="email" className="text-xl md:text-2xl ">
            Email<span className="text-red-600">*</span>
          </label>
          <input
            required
            name="Email"
            autoComplete="on"
            type="email"
            id="email"
            placeholder="Enter your email"
            className="w-full px-4 py-3 mt-1 border rounded-md border-warning focus:border-none focus:ring-0 focus:outline focus:outline-success placeholder:text-sm md:placeholder:text-base placeholder:"
          />
        </div>
        <div className="block w-full space-y-3">
          <label htmlFor="phone" className="text-xl md:text-2xl ">
            Phone Number<span className="text-red-600">*</span>
          </label>
          <input
            required
            name="Phone"
            type="text"
            id="phone"
            placeholder="Enter your Phone Number"
            className="w-full px-4 py-3 mt-1 border rounded-md border-warning focus:border-none focus:ring-0 focus:outline focus:outline-success placeholder:text-sm md:placeholder:text-base placeholder:"
          />
        </div>
        <div className="block w-full col-auto space-y-3 md:col-span-2">
          <label htmlFor="message" className="text-xl md:text-2xl ">
            Message
          </label>
          <textarea
            name="Message"
            autoComplete="on"
            type="text"
            id="message"
            rows={"10"}
            placeholder="Type in your Message"
            className="w-full px-4 py-3 mt-1 border rounded-md border-warning focus:border-none focus:ring-0 focus:outline focus:outline-success placeholder:text-sm md:placeholder:text-base placeholder:"
          />
        </div>
        <button
          type="submit"
          className={`block rounded-full px-4 py-2 border border-warning bg-primary hover:bg-info text-center text-base duration-700 delay-75  capitalize w-full md:w-[350px] group`}
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
