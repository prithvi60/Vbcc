"use client"
import { usePathname } from "next/navigation";


const Development = () => {
    const path = usePathname()

    return (
        <div className={` ${path === "/testimonials" || path === "/about" ? "block" : "hidden"} w-full text-center font-Montserrat font-semibold text-xs sm:text-sm tracking-wider capitalize bg-primary text-white p-1.5 relative z-[1001]`}>
            <h4 className="animate-pulse">
                This website page is under development
            </h4>
        </div>
    );
};

export default Development;