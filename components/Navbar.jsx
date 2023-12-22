"use client";
import { Navlinks } from "@/libs/data";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
} from "@nextui-org/react";
import Image from "next/image";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import MobileNav from "./MobileNav";
import { Btn } from "./Btn";
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav id="nav">
      <Navbar position="static" maxWidth="full" classNames={{
        wrapper :["!px-0"]
      }} className="font-urbanist font-medium py-6 px-5 md:px-10 md:py-4 lg:px-[60px] lg:py-0 border border-[#B6BABD]">
        <NavbarBrand>
          <Link href="/" className="relative h-5 w-20 cursor-pointer">
            <Image
              fill
              src={"https://ik.imagekit.io/webibee/VBCC/logo.svg"}
              alt="Logo"
              className="absolute object-contain object-center"
            />
          </Link>
        </NavbarBrand>
        <NavbarContent
          className="hidden lg:flex gap-10 text-warning  uppercase"
          justify="center"
        >
          {Navlinks.map((link, idx) => (
            <NavbarItem key={idx} className="h-full relative group">
              <Link href={link.href} className="h-full text-warning">
               {link.title} 
              </Link>
               <hr className="hidden group-hover:block  group-hover:absolute group-hover:-bottom-2 group-hover:left-0 group-hover:h-2 group-hover:w-full bg-info"/>
            </NavbarItem>
          ))}
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className="hidden md:flex">
            <Btn Hbgcolor={"bg-primary"} textColor={"text-warning"} HtextColor={"text-white"} bColor={"border-warning"} title={"contact us"} href={"/contact"}/>
          </NavbarItem>
          <NavbarItem onClick={() => setIsOpen(!isOpen)}>
              <RxHamburgerMenu className="h-7 w-7 md:h-8 md:w-8 text-warning cursor-pointer hover:text-info" />
          </NavbarItem>
        </NavbarContent>
      </Navbar>
      {isOpen &&(
            <MobileNav setIsOpen={setIsOpen} isOpen={isOpen}/>
            )}
    </nav>
  );
};

export default NavBar;
