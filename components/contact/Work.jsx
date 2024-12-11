export const Work = () => {
  return (
    <section className="px-5 md:px-10 py-[60px] lg:px-[60px] text-warning space-y-7 md:space-y-10 font-Montserrat">
      <h2 className="w-full text-2xl font-semibold tracking-wide text-info md:text-4xl xl:text-6xl">
        Let’s Work Together
      </h2>
      {/* <div className="grid grid-cols-1 gap-6 mx-auto md:grid-cols-2 md:gap-0 md:gap-x-8 text-warning"> */}
      {/* <div className="block space-y-3 md:space-y-5">
          <h3 className="capitalize ">General</h3>
          <div className="block space-y-2">
            <h3 className="text-xl capitalize md:text-2xl">
              Naveen Viswabaskaran
            </h3>
            <h4 className="text-xl md:text-2xl">+91 9600478315</h4>
          </div>
          <div className="block space-y-2">
            <h3 className="text-xl capitalize md:text-2xl">
              Dr. Viswabaskaran
            </h3>
            <h4 className="text-xl md:text-2xl">+91 9600478315</h4>
          </div>
        </div> */}
      <div className="grid grid-cols-1 gap-6 mx-auto text-primary md:grid-cols-2">
        <div className="space-y-3 md:space-y-5">
          <h5 className="font-bold capitalize">Email</h5>
          <p className="text-lg md:text-xl">
            info@vbccinstruments.com
          </p>
        </div>
        <div className="space-y-3 md:space-y-5">
          <h5 className="font-bold capitalize">Phone</h5>
          <p className="text-lg md:text-xl">
            +91 9600478315
          </p>
        </div>
        <div className="w-full space-y-3 md:space-y-5 lg:w-4/5">
          <h5 className="font-bold capitalize">Office Address</h5>
          <p className="text-lg md:text-xl">
            207, 3rd Link Road, Nehru Nagar Industrial Estate,
            Kottivakkam,
            <br />
            Chennai, Tamil Nadu 600041
          </p>
        </div>
        <div className="space-y-3 md:space-y-5">
          <h5 className="font-bold capitalize">Manufactoring Address</h5>
          <p className="w-full text-lg tracking-normal md:text-xl lg:w-11/12">
            27A, 14th Link Road, 3rd cross, Venkateswara colony, Nehru Nagar
            Industrial Estate,Kottivakkam,
            <br />
            Chennai, Tamil Nadu 600041
          </p>
        </div>

      </div>
      {/* </div> */}
    </section>
  );
};
