import React from "react";
import { FaRegClock } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";

export const BlogGridComponent = ({ post }) => {
  const readableTime = post.plainBody.filter(Boolean).join(' ')

  const calculateReadTime = (text) => {
    const wordsPerMinute = 200;
    const wordCount = text.split(/\s+/).length;
    const readingTime = Math.ceil(wordCount / wordsPerMinute);
    return readingTime;
  };

  const blogContent = readableTime || "";
  const readingTime = calculateReadTime(blogContent);

  return (
    <Link href={`/blog/${post.slug.current}`}
      className="relative w-full max-w-sm xl:max-w-md border-t-3 border-info md:mt-6 font-Montserrat bg-primary group"
    >
      <div className="absolute top-0 left-0 w-full h-2">
        <Image
          alt="svg"
          src={"/svg 1.svg"}
          fill
          className="object-contain object-center"
        />
      </div>
      <div className="w-full p-5 space-y-5 md:p-6">
        <div className="relative w-full h-64 overflow-hidden">
          <Image
            alt={post.imageAlt}
            src={post.imageUrl}
            fill
            className="object-cover object-center"
          />
        </div>
        <p className="w-full text-sm leading-tight md:text-base line-clamp-3">
          {post.blogShortRead}
        </p>

        <div className="flex items-center justify-between">
          <h4 className="flex items-center gap-2 text-sm capitalize"><span><FaRegClock className="text-base text-white" /></span>{readingTime} min{readingTime > 1 ? "s" : ""} Read</h4>
          <div className="text-xs tracking-wide underline capitalize transition-all ease-linear underline-offset-2 decoration-white group-hover:scale-125 duration-400">view</div>
        </div>
      </div>
    </Link>
  );
};

// <div className="w-full space-y-5 md:block">
//   <div className="space-y-5 text-warning group">
//     <div className="relative w-full h-[330px] overflow-hidden">
//       <Image
//         fill
//         src={list.img}
//         alt="product"
//         placeholder="blur"
//         blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPkY9gwEQACMwFRuhgGaQAAAABJRU5ErkJggg=="
//         sizes="(min-width: 1440px) calc(32.12vw - 41px), calc(50vw - 76px)"
//         className="absolute object-cover object-center transition-all duration-1000 group-hover:scale-125"
//       />
//       <div
//           className={`block hover:bg-primary text-center text-base duration-700 delay-75 font-urbanist capitalize group/feature px-4 py-2.5 absolute top-5 left-5 bg-white w-max rounded-full lg:hidden`}
//         >
//           <div className={`h-6 w-full overflow-hidden`}>
//             <h4
//               className={`transition translate-y-0 group-hover/feature:-translate-y-20 duration-700 text-warning tracking-wider`}
//             >
//               Featured
//             </h4>
//             <h4
//               className={`translate-y-20 transition group-hover/feature:-translate-y-[25px] duration-700 text-white tracking-wider`}
//             >
//               Featured
//             </h4>
//           </div>
//         </div>
//     </div>
//     <h4 className="text-lg lg:text-[32px] font-Lora">{list.blogTitile}</h4>
//     <p className="text-sm md:text-base">{list.blogDescription}</p>
//   </div>
//   <Btn
//     Hbgcolor={"bg-primary"}
//     textColor={"text-warning"}
//     HtextColor={"text-white"}
//     bColor={"border-warning"}
//     title={"Read More"}
//     href={"/blog/1"}
//   />
// </div>