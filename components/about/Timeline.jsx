"use client";
import * as React from "react";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const smoothScrollTo = (element, target, duration) => {
    const start = element.scrollLeft;
    const change = target - start;
    let startTime = null;

    const animateScroll = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeInOutQuad = (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);
        const newPos = start + change * easeInOutQuad(progress);
        element.scrollLeft = newPos;

        if (progress < 1) {
            window.requestAnimationFrame(animateScroll);
        }
    };

    window.requestAnimationFrame(animateScroll);
};

const Timeline = () => {
    const targetRef = useRef(null);
    const isInView = useInView(targetRef, { amount: 0.3, once: true });
    const scrollContainerRef = useRef(null);

    React.useEffect(() => {
        const scrollToEnd = () => {
            const scrollWidth = scrollContainerRef.current.scrollWidth;
            const clientWidth = scrollContainerRef.current.clientWidth;
            const targetScrollPosition = scrollWidth - clientWidth;
            smoothScrollTo(scrollContainerRef.current, targetScrollPosition, 1200);
        };
        if (isInView && scrollContainerRef.current) {
            scrollToEnd();
        }
    }, [isInView]);
    return (
        <section className='relative w-full overflow-hidden bg-primary text-primary font-Montserrat padding'>
            <div className='block w-full mt-20 space-y-4 md:space-y-6'>
                <h4 className="relative text-2xl font-bold tracking-wide after:absolute after:h-0.5 w-max after:w-3/4 after:-bottom-4 after:left-0 after:bg-white md:text-4xl xl:text-5xl text-info">Our Timeline</h4>
                <div className="overflow-x-scroll shadow-xl lg:overflow-x-scroll rounded-tl-xl thumbnail" ref={scrollContainerRef}>
                    <div ref={targetRef} className="flex h-[40vh] md:h-[85vh]">
                        <img src={"https://ik.imagekit.io/webibee/VBCC/homepage/timeline.svg?updatedAt=1733741949312"} alt="legacy-image" loading="lazy" className=" h-[280px] md:h-[650px] max-w-[350%] object-cover md:object-contain md:max-w-[450%]" />
                    </div>
                </div>
            </div>
            <div className='absolute left-0 z-0 w-48 h-28 -top-6 md:h-36 md:w-72'>
                <Image src={"/vector1blue.svg"} fill alt='' className='object-contain object-center' />
            </div>
        </section>
    )
}

export default Timeline
