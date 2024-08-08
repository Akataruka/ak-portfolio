import React from 'react'
import { SlArrowRight } from "react-icons/sl";
import Link from 'next/link'


const Linkbutton = ({title,link,blank}) => {
  return (
    <div className="w-full h-10  mt-2 flex justify-center">
      {
        blank?(<Link
            href={link}
            target='_blank'
            className="w-[40%] sm:w-[30%]  leading-tight text-center rounded-lg tracking-wider hover:bg-teal-600 transition px-3 flex justify-around items-center h-full bg-teal-500 text-black text-md"
          >
            {title}
            <SlArrowRight size={15} />
          </Link>):(<Link
            href={link}
            className="w-[40%] sm:w-[30%]  leading-tight text-center rounded-lg tracking-wider hover:bg-teal-600 transition px-3 flex justify-around items-center h-full bg-teal-500 text-black text-md"
          >
            {title}
            <SlArrowRight size={15} />
          </Link>)
      }
          
        </div>
      
  )
}

export default Linkbutton