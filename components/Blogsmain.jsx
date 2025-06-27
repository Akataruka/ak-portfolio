import React from 'react'
import Blogsbox from "./Blogsbox";

const Blogitems = [
  {
    name: "🚀 Introduction to System Design: LLD and SOLID Principles",
    src: "/images/blogs/blog1.png",
    link: "https://system-design-lld.hashnode.dev/introduction-to-system-design-lld-and-solid-principles",
  },
  {
    name: "🔍 Building a LeetCode Rank Search Chrome Extension",
    src: "/images/blogs/blog2.png",
    link: "https://development-daily-ak.hashnode.dev/crafting-perfect-cold-messages-my-ai-powered-streamlit-app-journey",
  },
  {
    name: "Crafting Perfect Cold Messages: My AI-Powered Streamlit App Journey 🧊",
    src: "/images/blogs/blog3.png",
    link: "https://development-daily-ak.hashnode.dev/building-a-leetcode-rank-search-chrome-extension-track-multiple-users-in-one-click",
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