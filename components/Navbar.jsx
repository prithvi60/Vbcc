"use client";

import othersData from "@/libs/others.json";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import MobileNav from "./MobileNav";
import { Btn } from "./Btn";
import { ToolTipContent } from "./ToolTipContent";

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
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);
  return (
    <nav id="nav">
      <div className="font-urbanist font-medium py-6 px-5 md:px-10 md:py-4 xl:px-[60px] lg:py-3.5 border-b border-[#B6BABD] static max-w-full flex justify-between items-center">
        {/* <Link passHref href="/" className="relative h-5 w-20 cursor-pointer">
          <Image
            fill
            src={"https://ik.imagekit.io/webibee/VBCC/logo.svg"}
            placeholder="blur"
            blurDataURL="https://ik.imagekit.io/webibee/VBCC/logo.svg?tr=bl-100"
            alt="Logo"
            className="absolute object-contain object-center"
          />
        </Link> */}
        <Link
          passHref
          href="/"
          className="relative h-8  md:h-9 w-20 cursor-pointer"
        >
          <Image
            loading="lazy"
            fill
            src={"https://ik.imagekit.io/webibee/VBCC/vbccsvglogo.svg"}
            placeholder="blur"
            blurDataURL={
              "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAH3AhYDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAEG/8QAFBABAAAAAAAAAAAAAAAAAAAAAP/EABcBAQEBAQAAAAAAAAAAAAAAAAABAgP/xAAVEQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEQMRAD8Ax6orLqACiooqgIqgDSgCqAiqAKoAoqKAAgKiigACAAAIIqAAKiAAgAiACCKioIqCCKgyIqKAAiACAAAAAACooAAoAAAAACKiiAAoqKKoCKoA0oAqgIqgCqAAqKKAIAAqiAAAgAAgKAAiACIACACCAqCAIIAygCoAAgAgAAAAAAqKAAKAAAAAAioCKAKKiiqAiqIoqgDSgIqgCqIoAAqgIAAAAAAAIoAAIqCAAiACIAogAygAiAKiACCKggAAAIAAACgAKAAAKAAAAgAigCiooqiKiiooqiKKoioqiKKKiigAoqAKAgAAAAICgAIIACKggioIAioACIAIgCogAggCAAgAAAAAAAKKgCgCgAAAIAIoAoqKKKiooqKKKiiioqKKiigAqgAACgAKIAAAACAIAAIIACAIIqKgioIIqCCKioACIAIACACgAAAgACgAKIAoAAAqACCooCoCqqKKKgjSqgKoAqgIqgAKgKoAAAAAAAAIAAAioIAggAogAiACCAMiAqCKggAIAigAIKgCgCgCAAqgCAACiAAACooAAqgCqAiqAKoAqiKiioCqAAAKogCiAKgAAAAggAAgKgioIIqCAIIAioACIAIAioACAAAAAAKIooAAAAAigAACoAIqgCqIoqiKiqIooqKKACqAgKgKoigAAAAAACAAACAIAioACIAAgKyIAgioIAioACAIIogCiKAAKAAoiigAAAAAAAAAKIqKKiiioCqqCKoAqgCioCqAgACgAAAAAAAggKAIIAAIAgCKgCCAIIAKyIAgCCACoAAAAKgiqAAAKKgCiAqiAKIoAACoIqgCqAKoioqiKKKgCgCioCqIIKAAIAogAAoAggAAgCAIIAKiACCAIICsgIIAKgICKIAogCgCgCKoigACgAAAAAKIooAKoCKoigKgKoCKoAoqAKIooAAAAAAAAIAACAgACCACoIAggCAIqAIMgIqAAgAAAAAAqAKIooAAqCKogCiAKAKKgCgCioooqCKoAoqKAAiqIooAAAAAAAAAACAqAIAgACoIAgCCAIqAIIAisgAgAAAAAAAAAAACiAKAKAAAAoCKACioooACiKiioooAKoigAIoACiAKICqICAAAACAoACCAIAggCKgCCAIrIAIAAAAAAAAAAAAAAAAAAKgCiAKANKIqAAKoAoqAqgIKICqAKKgCiAKAigAAICoCoAAAgAAggCAIqAIIAisgAgAAAAAAAAAAAAAAAAAAAAAAACgCgAqiKgKgKoAoqAqgICoCqIoAAoAAAAAACCKIAAgKgKgCCAIIAisgAgAAAAAAAAAAAAAAAAAAAAAAAAACgCgACoCqAgKgKoAoqCCiKKAAACgAAAAAAAggAAKgIAAgyAioACAAAAAAAAAAAAAAAAAAAAAAAAAAAACoAoigACioCqAiioAoAoAAqCKogCgAAgKIAqAoACCAIAggCKgAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAoigACioCqAigAKIooAAAAAgAKAAAIAAIAggAqIAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAoigACioCqAigAKIAoAoAAAAgCAAAIIACCAqAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKAKAAoiooAKAAAAAAAAAAAAIqCACogAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAqKAAKKiigCKAAAAAAAAAAAAIqCACogAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAqKAAKKiigCKAAAoIKAgoCAAAAIoIgCogqCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACooAAoqKigAoCgACgAAAAAIKggAAioIIoqIAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKigACqAigAqgCgAAAAAAAAAIKggACCoqCKgyAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKigAo0AIoqKKAAACgAAoCCgIKggACCgiAAgCsoKggAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAqKKKiooAKoAoAKAoACAAAAAAAiiiACCKCIigiIoqIAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAoAooIoqKKACgKKAIAAoAAAAAIAAIoogAgioIIqKyIoIgoCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAoAqgI0KiigAqgIAAoKAAAAAgqAAAACIKioACIAIgCoACAAIKAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKAKoCNKAKKiigCKKigAAAAAAAAgqAACCKKIAIIqCCKisgAgAAAAigIAAAAAAAAAAAAAAAAAAAAAAAAAAACgCxQEaUAUVFFAEVQAAAABQAAAAARAAABEAVBFBERRUQAZAAAAAAEVAAAAAAAAAAAAAAAAAAAAAAAAAAAUFGgBFUAUVFFAEVQAABQAAAAAAAQRUAAEEVFQAEQARAFZAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAFUBoARVAFUAUARVAAAFAAAAAAABBAAAEEBUABEAEQBWQAAAAAAAEAAAAAAAAAAAAAAAAAB//9k="
            }
            alt="Logo"
            className="absolute object-contain object-center"
          />
        </Link>
        <div className="hidden lg:flex gap-10 text-warning uppercase">
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
            <RxHamburgerMenu className="h-7 w-7 md:h-8 md:w-8 text-warning cursor-pointer hover:text-info" />
          </div>
        </div>
      </div>
      {isOpen && <MobileNav setIsOpen={setIsOpen} isOpen={isOpen} />}
    </nav>
  );
};

export default NavBar;
