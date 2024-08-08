import React from 'react'

const Listbio = (props) => {
  return (
        <div className="flex pl-2 text-gray-50 font-mono text-md ">
          <span className="pr-4  text-pink-400 font-extrabold tracking-wider">{props.date}</span>
          {props.content}
        </div>
  )
}

export default Listbio