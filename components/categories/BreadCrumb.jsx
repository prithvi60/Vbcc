"use client";
import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/breadcrumbs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const BreadCrumb = () => {
    const path = usePathname();
    const pathParts = path.split("/").filter((x) => x);

    let isIdPresent = false;

    if (pathParts.includes("dental") || pathParts.includes("laboratory")) {
        isIdPresent = pathParts.length > 2;
    } else if (pathParts.includes("material_processing_equipment")) {
        isIdPresent = pathParts.length > 3;
    }

    const pathNames = path.split("/").filter((x) => x);
    let BCPath = "";

    return (
        <Breadcrumbs
            className="absolute left-5 top-5 md:top-10 md:left-10 !backdrop-blur-md px-2.5 py-1 rounded-md"
            itemClasses={{
                item: [
                    ` font-semibold text-base md:text-lg uppercase ${isIdPresent ? "text-[#6B6B6B] data-[current=true]:!text-primary" : "text-white data-[current=true]:!text-info"}`,
                ],
                separator: [
                    `font-semibold text-lg ${isIdPresent ? "text-[#6B6B6B]" : "text-white"}`,
                ],
            }}
        >
            <BreadcrumbItem>
                <Link href={"/"}>Home</Link>
            </BreadcrumbItem>
            {pathNames.map((list, idx) => {
                BCPath += `/${list}`;
                return (
                    <BreadcrumbItem key={`${idx}-${list}`}>
                        <Link href={BCPath}>
                            <h5>{list.replace(/_/g, " ")}</h5>
                        </Link>
                    </BreadcrumbItem>
                );
            })}
        </Breadcrumbs>
    );
};

export default BreadCrumb;
