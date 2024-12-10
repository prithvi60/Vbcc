"use client";
import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/breadcrumbs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const BreadCrumb = () => {
    const path = usePathname();
    const isIdPresent = path.split("/").filter((x) => x).length > 2;
    const pathNames = path.split("/").filter((x) => x);
    let BCPath = "";

    return (
        <Breadcrumbs
            className="absolute left-5 top-5 md:top-10 md:left-10 !backdrop-blur-md"
            itemClasses={{
                item: [` font-semibold text-base md:text-lg uppercase ${isIdPresent ? "text-[#6B6B6B] data-[current=true]:!text-primary" : "text-white data-[current=true]:!text-info"}`],
                separator: [`font-semibold text-lg ${isIdPresent ? "text-[#6B6B6B]" : "text-white"}`],
            }}
        >
            <BreadcrumbItem>
                <Link href={"/"}>Home</Link>
            </BreadcrumbItem>
            {pathNames.map((list, idx) => {
                BCPath += `/${list}`;
                return (
                    <BreadcrumbItem key={`${idx}-${list}`}>
                        <Link href={BCPath}><h5>{decodeURIComponent(list)}</h5></Link>
                        {/* {BCPath !== "/categories" ? (
                            <Link href={BCPath}><h5>{decodeURIComponent(list)}</h5></Link>
                        ) : (
                            <h5>{decodeURIComponent(list)}</h5>
                        )} */}
                    </BreadcrumbItem>
                );
            })}
        </Breadcrumbs>
    );
};

export default BreadCrumb;
