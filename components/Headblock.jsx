import React from 'react'

const Headblock = ({title}) => {
  return (
    <span className='px-1 h-6 grid items-center bg-green-200/[0.2]  tracking-widest rounded-sm text-lime-200 text-[12px] font-medium mx-2  '>
        {title}
    </span>
  )
}

export default Headblock