import React from 'react'
import TypeWritercursor from './TypeWriter'

const Blogsmain = () => {
  return (
    <div className='text-gray-50 mt-4 tracking-widest w-full text-center text-lg sm:text-xl  '>
        Coming Soon <TypeWritercursor speed={300} words={["", ". . ."]} />
    </div>
  )
}

export default Blogsmain