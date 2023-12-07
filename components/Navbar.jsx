"use client";
import { Navlinks } from "@/libs/data";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import Image from "next/image";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import MobileNav from "./MobileNav";
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav>
      <Navbar position="static" maxWidth="2xl" className="font-urbanist font-medium py-2  ">
        <NavbarBrand>
          <Link href="/" className="relative h-5 w-32 cursor-pointer">
            <Image
              fill
              src={"/logo.svg"}
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
            <NavbarItem key={idx}>
              <Link href={link.href} className="text-warning py-[26px]  hover:border-b-8 hover:border-info">
                {link.title}
              </Link>
            </NavbarItem>
          ))}
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem>
            <Button
              as={Link}
              href="/contact"
              variant="bordered"
              className="text-warning  border-warning  rounded-3xl font-normal hidden md:flex hover:bg-primary hover:text-white"
            >
              Contact us
            </Button>
          </NavbarItem>
          <NavbarItem onClick={() => setIsOpen(!isOpen)}>
              <RxHamburgerMenu className="h-5 w-5 md:h-7 md:w-7 text-warning cursor-pointer hover:text-info" />
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
