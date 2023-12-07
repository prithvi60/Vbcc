
export const Work = () => {
  return (
    <section className="px-5 py-10 md:px-10 md:py-[60px] lg:px-[60px] lg:py-20 text-warning space-y-7 md:space-y-10">
        <h2 className="font-Lora text-2xl md:text-4xl xl:text-6xl w-full tracking-wide">
        Let’s Work Together
        </h2>
        <div className="md:px-10 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-0 md:gap-x-8 text-warning">
            <div className="block space-y-3 md:space-y-5">
                <h5 className="font-urbanist capitalize">General</h5>
                <h4 className="font-Lora text-xl md:text-2xl">+91 94440 12468</h4>
                <h4 className="font-Lora text-xl md:text-2xl">+91 94441 53455</h4>
            </div>
            <div className="block space-y-7 md:space-y-10">
                <div className="space-y-3 md:space-y-5">
                    <h5 className="font-urbanist capitalize">Address</h5>
                    <p className="font-Lora text-xl md:text-2xl tracking-normal w-full lg:w-11/12">27A, 14th Link Road, 3rd cross, Venkateswara colony, Nehru nagar industrial estate,Kottivakkam, Nehru Nagar, Perungudi,
                    <br/>
                    Chennai, Tamil Nadu 600041</p>
                </div>
                <div className="space-y-3 md:space-y-5">
                    <h5 className="font-urbanist capitalize">Email</h5>
                    <p className="font-Lora text-xl md:text-2xl">zeramist@yahoo.co.in.</p>
                </div>
            </div>
        </div>
    </section>
  )
}
