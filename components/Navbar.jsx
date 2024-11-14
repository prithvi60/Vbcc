import othersData from "@/libs/others.json";
import Image from "next/image";
import React from "react";


// const productList = [
//   {
//     category: "Research Institutions",
//     lists: [
//       "Microwave Heating Systems",
//       "Furnaces",
//       "Ovens",
//       "Nano Technology Equipment",
//       "Special Research Equipment",
//       "Presses",
//       "Metallurgical Equipment",
//     ],
//   },
//   {
//     category: "Industries",
//     lists: [
//       "Industrial Furnaces",
//       "Refractory Industry",
//       "Tile & Sanitary Ware",
//     ],
//   },
//   {
//     category: "Accessories",
//     lists: ["Heating Elements", "Controllers", "Ceramic Products"],
//   },
// ];

// const sortBy = ["Featured", "New Products", "Best Selling"];

const NavBar = () => {
  return (
    <>
      <nav className="relative w-full h-full text-white mb-7">
        <div className="relative w-full h-full overflow-hidden rounded-2xl">
          <div className="absolute -top-5 md:-top-3 xl:-top-5 2xl:-top-11 2xl:-left-2.5 size-28 left-1 md:size-24 2xl:size-52 xl:size-32">
            <Image
              alt="VBCC Logo"
              src="/VBCC - Logo.svg"
              fill
              className="z-20 object-cover object-center"
            />
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;

{/* <nav id="nav">
  <div className="font-urbanist font-medium py-6 px-5 md:px-10 md:py-4 xl:px-[60px] lg:py-3.5 border-b border-[#B6BABD] static max-w-full flex justify-between items-center">
    {/* <Link passHref href="/" className="relative w-20 h-5 cursor-pointer">
      <Image
        fill
        src={"https://ik.imagekit.io/webibee/VBCC/logo.svg"}
        placeholder="blur"
        blurDataURL="https://ik.imagekit.io/webibee/VBCC/logo.svg?tr=bl-100"
        alt="Logo"
        className="absolute object-contain object-center"
      />
    </Link> 
    <Link
      passHref
      href="/"
      className="relative w-20 h-8 cursor-pointer md:h-9"
    >
      <Image
        loading="lazy"
        fill
        src={"https://ik.imagekit.io/webibee/VBCC/vbccsvglogo.svg"}
        // placeholder="blur"
        // blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPkY9gwEQACMwFRuhgGaQAAAABJRU5ErkJggg=="
        alt="Logo"
        className="absolute object-contain object-center"
      />
    </Link>
    <div className="hidden gap-10 uppercase lg:flex text-warning">
      <div className="group">
        <div className="relative">
          <Link
            passHref
            href={"/products"}
            className="h-full text-warning py-[26px]"
            onMouseEnter={() => setOpen(false)}
          >
            Products
          </Link>
          <hr className="hidden group-hover:block  group-hover:absolute group-hover:-bottom-[23px] group-hover:left-0 group-hover:h-[7px] group-hover:w-full bg-info group-hover:transition-all group-hover:duration-1000 group-hover:delay-150" />
        </div>
        <ToolTipContent isOpen={open} setIsOpen={setOpen} />
      </div>
      {othersData.navlinks.map((link, idx) => (
        <div key={idx} className="relative group">
          <Link passHref href={link.href} className="h-full text-warning">
            {link.title}
          </Link>
          <hr className="hidden group-hover:block  group-hover:absolute group-hover:-bottom-[23px] group-hover:left-0 group-hover:h-[7px] group-hover:w-full bg-info group-hover:transition-all group-hover:duration-1000 group-hover:delay-150" />
        </div>
      ))}
    </div>
    <div className="flex items-center gap-4">
      <div className="hidden md:flex">
        <Btn
          Hbgcolor={"bg-primary"}
          textColor={"text-warning"}
          HtextColor={"text-white"}
          bColor={"border-warning"}
          title={"contact us"}
          href={"/contact"}
        />
      </div>
      <div onClick={() => setIsOpen(!isOpen)}>
        <RxHamburgerMenu className="cursor-pointer h-7 w-7 md:h-8 md:w-8 text-warning hover:text-info" />
      </div>
    </div>
  </div>
  {isOpen && <MobileNav setIsOpen={setIsOpen} isOpen={isOpen} />}
</nav> */}