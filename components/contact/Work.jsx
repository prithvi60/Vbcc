export const Work = () => {
  return (
    <section className="px-5 md:px-10 py-[60px] lg:px-[60px] text-warning space-y-7 md:space-y-10">
      <h2 className="font-Lora text-2xl md:text-4xl xl:text-6xl w-full tracking-wide">
        Let’s Work Together
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-0 md:gap-x-8 text-warning mx-auto">
        <div className="block space-y-3 md:space-y-5">
          <h3 className="font-urbanist capitalize">General</h3>
          <div className="block space-y-2">
            <h3 className="font-Lora text-xl md:text-2xl capitalize">
              Naveen Viswabaskaran
            </h3>
            <h4 className="font-Lora text-xl md:text-2xl">+91 94440 12468</h4>
          </div>
          <div className="block space-y-2">
            <h3 className="font-Lora text-xl md:text-2xl capitalize">
              Dr. Viswabaskaran
            </h3>
            <h4 className="font-Lora text-xl md:text-2xl">+91 94441 53455</h4>
          </div>
        </div>
        <div className="block space-y-7 md:space-y-10">
          <div className="space-y-3 md:space-y-5 w-full lg:w-4/5">
            <h5 className="font-urbanist capitalize">Office Address</h5>
            <p className="font-Lora text-xl md:text-2xl ">
              2207, 3rd Link Street, Nehru Nagar Industrial Estate, Kottivakkam,
              Chennai-600 041.
            </p>
          </div>
          <div className="space-y-3 md:space-y-5">
            <h5 className="font-urbanist capitalize">Manufactoring Address</h5>
            <p className="font-Lora text-xl md:text-2xl tracking-normal w-full lg:w-11/12">
              27A, 14th Link Road, 3rd cross, Venkateswara colony, Nehru Nagar
              Industrial Estate,Kottivakkam, Nehru Nagar, Perungudi,
              <br />
              Chennai, Tamil Nadu 600041
            </p>
          </div>
          <div className="space-y-3 md:space-y-5">
            <h5 className="font-urbanist capitalize">Email</h5>
            <p className="font-Lora text-xl md:text-2xl">
              info@vbccinstruments.com
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
