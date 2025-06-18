import React from 'react'
import Blogsbox from "./Blogsbox";

const Blogitems = [
  {
    name: "🚀 Introduction to System Design: LLD and SOLID Principles",
    src: "/images/blogs/blog1.png",
    link: "https://system-design-lld.hashnode.dev/introduction-to-system-design-lld-and-solid-principles",
  },
];

const Blogsmain = () => {
  return (
    <div className="mt-4 w-full flex flex-row gap-4 justify-evenly items-center flex-wrap">
      {Blogitems.map((item, index) => (
        <Blogsbox key={index} index={index} item={item} />
      ))}
      </div>
  )
}

export default Blogsmain