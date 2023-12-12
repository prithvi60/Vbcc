import { Button, Divider } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { HiOutlineArrowNarrowUp } from "react-icons/hi";

const Footer = () => {
  return (
    <footer className="flex flex-col md:grid md:grid-cols-2 xl:grid-cols-3 font-urbanist">
      <div className="flex flex-col justify-start gap-16 md:justify-between items-start font-urbanist bg-primary py-10 px-5 md:py-16 md:px-10 xl:p-16 h-full md:h-[388px] border-r-1 border-y-1 border-[#2D4152]">
        <div className="relative h-5 w-32">
          <Image fill src={"/logo-white.svg"} alt="Logo" className="-ml-6" />
        </div>
        <div className="text-sm space-y-5">
          <h4 className="uppercase">Kottivakkam,Chennai.</h4>
          <p className="w-full 2xl:w-[90%]">
            VBCC excels in crafting top-tier industrial and research equipment,
            known for innovation, quality, and tailored solutions.
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-start gap-16 md:justify-between items-start font-urbanist bg-primary py-10 px-5 md:py-16 md:px-10 xl:p-16 h-full md:h-[388px] border-r-1 border-y-1 border-[#2D4152]">
        <div className="text-sm flex items-start gap-16">
          <div className="flex flex-col items-start gap-3">
            <Link href={"/product"} className="rounded-lg text-secondary after:h-0.5 after:w-0 after:bg-info after:block after:transition-all hover:after:h-0.5 hover:after:w-full hover:after:bg-info hover:after:block hover:after:ease-linear hover:after:duration-[3000]">Products</Link>
            <Link href={"/testimonial"} className="rounded-lg text-secondary after:h-0.5 after:w-0 after:bg-info after:block after:transition-all hover:after:h-0.5 hover:after:w-full hover:after:bg-info hover:after:block hover:after:ease-linear hover:after:duration-[3000]">Testimonials</Link>
            <Link href={"/about"} className="rounded-lg text-secondary after:h-0.5 after:w-0 after:bg-info after:block after:transition-all hover:after:h-0.5 hover:after:w-full hover:after:bg-info hover:after:block hover:after:ease-linear hover:after:duration-[3000]">About Us</Link>
            <Link href={"/blog"} className="rounded-lg text-secondary after:h-0.5 after:w-0 after:bg-info after:block after:transition-all hover:after:h-0.5 hover:after:w-full hover:after:bg-info hover:after:block hover:after:ease-linear hover:after:duration-[3000]">Blog/Articles</Link>
            <Link href={"/faq"} className="rounded-lg text-secondary after:h-0.5 after:w-0 after:bg-info after:block after:transition-all hover:after:h-0.5 hover:after:w-full hover:after:bg-info hover:after:block hover:after:ease-linear hover:after:duration-[3000]">FAQs</Link>
          </div>
          <div className="flex flex-col items-start gap-3">
            <Link href={"#story"} className="rounded-lg text-secondary after:h-0.5 after:w-0 after:bg-info after:block after:transition-all hover:after:h-0.5 hover:after:w-full hover:after:bg-info hover:after:block hover:after:ease-linear hover:after:duration-[3000]">Our Story</Link>
            <Link href={"/blog"} className="rounded-lg text-secondary after:h-0.5 after:w-0 after:bg-info after:block after:transition-all hover:after:h-0.5 hover:after:w-full hover:after:bg-info hover:after:block hover:after:ease-linear hover:after:duration-[3000]">Blog/Articles</Link>
            <Link href={"/contact"} className="rounded-lg text-secondary after:h-0.5 after:w-0 after:bg-info after:block after:transition-all hover:after:h-0.5 hover:after:w-full hover:after:bg-info hover:after:block hover:after:ease-linear hover:after:duration-[3000]">Contact Us</Link>
            <Link href={"/gallery"} className="rounded-lg text-secondary after:h-0.5 after:w-0 after:bg-info after:block after:transition-all hover:after:h-0.5 hover:after:w-full hover:after:bg-info hover:after:block hover:after:ease-linear hover:after:duration-[3000]">Gallery</Link>
          </div>
        </div>
        <div className="flex justify-evenly items-center gap-3">
          <Link
            href={"/"}
            className="p-4 rounded-full border border-info hover:bg-info"
          >
            <FaYoutube className="h-7 w-7 text-white" />
          </Link>
          <Link
            href={"/"}
            className="p-4 rounded-full border border-info hover:bg-info"
          >
            <FaLinkedin className="h-7 w-7 text-white" />
          </Link>
          <Link
            href={"/"}
            className="p-4 rounded-full border border-info hover:bg-info"
          >
            <FaWhatsapp className="h-7 w-7 text-white" />
          </Link>
        </div>
      </div>
      <div className="flex flex-col justify-start gap-16 md:justify-between items-start font-urbanist bg-primary py-10 px-5 md:py-16 md:px-10 xl:p-16 h-full md:h-[388px] border-r-1 border-y-1 border-[#2D4152] col-span-2 xl:col-auto text-sm">
        <div className="w-full flex justify-start gap-16 md:justify-between items-start font-urbanist">
          <div className="space-y-5">
            <div>
              <h5 className="text-[rgba(245, 245, 245, 0.70)]">
                Connect for quote
              </h5>
              <p className="text-info">+91 94441 69365</p>
            </div>
            <div>
              <h5 className="text-[rgba(245, 245, 245, 0.70)]">
                Connect for inquiries
              </h5>
              <p className="text-info">+91 94440 12468</p>
            </div>
          </div>
          <Button
            variant="bordered"
            radius="full"
            className="border-info text-info"
          >
            Location ?
          </Button>
        </div>
        <div className="w-full flex justify-start gap-16 md:justify-between items-center font-urbanist pt-10">
          <div className="space-y-3">
            <h4>Our Groups</h4>
            <div className="flex items-center gap-4 ml-6">
              <div className="relative h-[55px] w-[75px]">
                <Image
                  fill
                  src={"/VBCC_Logo.png"}
                  alt="Logo"
                  className="-ml-6"
                />
              </div>
              <div className="relative h-[50px] w-[70px]">
                <Image fill src={"/hi-temp.png"} alt="Logo" className="-ml-6" />
              </div>
            </div>
          </div>
          <Link
            href={"#"}
            className="rounded-full p-4 border border-secondary  hover:bg-secondary"
          >
            <HiOutlineArrowNarrowUp className="h-7 w-7 text-secondary hover:text-primary" />
          </Link>
        </div>
      </div>
      <div className=" p-5 md:px-16 md:py-5 text-zinc-500 border-y-1 border-[#2D4152] bg-primary col-span-3 tracking-tight font-semibold font-urbanist leading-snug">
        <h1 className="hidden md:block text-7xl">VBCC HIGH TEMPERATURE INSTRUMENTS</h1>
        <h1 className="md:hidden block text-8xl sm:text-[134px]">VBCC</h1>
      </div>
      <div className="text-sm p-5 md:px-16 md:py-5 text-zinc-500 border-y-1 border-[#2D4152] bg-primary col-span-3 font-urbanist">
        <div className="flex justify-center md:justify-between items-center">
            <p>©VB Ceramic Consultants. All Rights Reserved.</p>
            <div className="hidden md:flex items-center gap-3">
                <Link href={"/"} className="underline underline-offset-1 hover:text-secondary">Privacy Policy</Link>
                <Link href={"/"} className="underline underline-offset-1 hover:text-secondary">Terms  of Service</Link>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
