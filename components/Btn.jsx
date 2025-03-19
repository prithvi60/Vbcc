import Link from "next/link"


export const Btn = ({ Hbgcolor, textColor, HtextColor, title, href, bColor }) => {
  return (
    <Link passHref title="button"
      href={href} className={`block rounded-full px-4 py-2 border ${bColor} bg-transparent hover:${Hbgcolor} group text-center text-base duration-700 delay-75 font-urbanist capitalize h-auto w-max`}>
      <div className={`block h-6 w-full overflow-hidden`}>
        <h4 className={`transition translate-y-0 group-hover:-translate-y-20 duration-700 ${textColor}`}>{title}</h4>
        <h4 className={`translate-y-20 transition group-hover:-translate-y-[25px] duration-700 ${HtextColor}`}>{title}</h4>
      </div>
    </Link>
  )
}

// export const BtnMN = ({Hbgcolor,textColor,HtextColor,title,href,bColor,isOpen,setIsOpen}) => {
//   return (
//       <Link  passHref 
// href={href} className={`rounded-full px-4 py-3 border ${bColor} bg-transparent hover:${Hbgcolor} group text-center text-base duration-700 delay-75 font-urbanist capitalize`} onClick={() => setIsOpen(!isOpen)}
//     >
//       <div className={`h-6 w-full overflow-hidden`}>
//         <h4 className={`transition translate-y-0 group-hover:-translate-y-20 duration-700 ${textColor}`}>{title}</h4>
//         <h4 className={`translate-y-20 transition group-hover:-translate-y-[25px] duration-700 ${HtextColor}`}>{title}</h4>
//       </div>
//         </Link>
//   )
// }

export const Btn2 = ({ Hbgcolor, textColor, HtextColor, title, href, bColor, background }) => {
  return (
    <Link passHref
      href={href} className={`block rounded-full px-6 py-4 border ${bColor} bg-transparent hover:${Hbgcolor} group/btn2 text-center text-base duration-700 delay-75 font-urbanist capitalize w-max ${background}`}>
      <div className={`h-6 w-full overflow-hidden`}>
        <h4 className={`transition translate-y-0 group-hover/btn2:-translate-y-20 duration-700 ${textColor}`}>{title}</h4>
        <h4 className={`translate-y-20 transition group-hover/btn2:-translate-y-[25px] duration-700 ${HtextColor}`}>{title}</h4>
      </div>
    </Link>
  )
}
