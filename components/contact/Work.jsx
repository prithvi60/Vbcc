export const Work = () => {
  return (
    <section className="px-5 md:px-10 py-[60px] lg:px-[60px] text-warning space-y-7 md:space-y-10">
      <h2 className="w-full text-2xl tracking-wide font-Lora md:text-4xl xl:text-6xl">
        Let’s Work Together
      </h2>
      <div className="grid grid-cols-1 gap-6 mx-auto md:grid-cols-2 md:gap-0 md:gap-x-8 text-warning">
        <div className="block space-y-3 md:space-y-5">
          <h3 className="capitalize font-urbanist">General</h3>
          <div className="block space-y-2">
            <h3 className="text-xl capitalize font-Lora md:text-2xl">
              Naveen Viswabaskaran
            </h3>
            <h4 className="text-xl font-Lora md:text-2xl">+91 9600478315</h4>
          </div>
          <div className="block space-y-2">
            <h3 className="text-xl capitalize font-Lora md:text-2xl">
              Dr. Viswabaskaran
            </h3>
            <h4 className="text-xl font-Lora md:text-2xl">+91 9600478315</h4>
          </div>
        </div>
        <div className="block space-y-7 md:space-y-10">
          <div className="w-full space-y-3 md:space-y-5 lg:w-4/5">
            <h5 className="capitalize font-urbanist">Office Address</h5>
            <p className="text-xl font-Lora md:text-2xl ">
              207, 3rd Link Road, Nehru Nagar Industrial Estate,
              Kottivakkam,Chennai, Tamil Nadu 600041
            </p>
          </div>
          <div className="space-y-3 md:space-y-5">
            <h5 className="capitalize font-urbanist">Manufactoring Address</h5>
            <p className="w-full text-xl tracking-normal font-Lora md:text-2xl lg:w-11/12">
              27A, 14th Link Road, 3rd cross, Venkateswara colony, Nehru Nagar
              Industrial Estate,Kottivakkam, Nehru Nagar, Perungudi,
              <br />
              Chennai, Tamil Nadu 600041
            </p>
          </div>
          <div className="space-y-3 md:space-y-5">
            <h5 className="capitalize font-urbanist">Email</h5>
            <p className="text-xl font-Lora md:text-2xl">
              sales@vbccinstruments.com
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
