import Link from "next/link";
import React from "react";

const Projecthead = (props) => {
  return (
    <>
      <div className="relative w-full h-8 sm:h-14 flex flex-row justify-start items-baseline  z-[2]">
        <Link href="/projects"  className="text-pink-400 hover:underline font-sans underline-offset-4 hover:cursor-pointer">
          <span >
            Projects
          </span>
        </Link>
        <span className="mx-2 text-white text-sm font-extralight "> &gt; </span>
        <span className="text-gray-50 font-bold sm:text-xl sm:ml-2 tracking-wide translate-y-[-1px]">
          {props.title}
        </span>
        <span className="ml-2 text-sm  text-gray-50 sm:translate-y-[-2px] bg-gray-600 px-2 rounded-lg">
          {props.time}
        </span>
      </div>
    </>
  );
};

export default Projecthead;
