import React from 'react'

const Headingabout = ({heading}) => {
  return (
    <div className='text-lg sm:text-2xl pl-2 my-1  font-semibold underline-offset-8 decoration-slate-600 font-sans underline decoration-4 w-full text-left text-white/[0.95]'>
        {heading}
    </div>
  )
}

export default Headingabout