import React from "react";
import Headblock from "./Headblock";
import Link from "next/link";
import { FaLink } from "react-icons/fa6";

const Projectdetail = ({ links,stack }) => {
  return (
    <div className="w-full my-1 sm:my-2 flex flex-col gap-2 justify-start z-[10] ">
      {links.map((link, index) => (
        <div key={index} className="w-full flex flex-row gap-1">
          <Headblock title={link.title} />
          <Link
            href={link.link}
            className="w-[80%] text-pink-400 flex flex-row justify-start items-center hover:text-pink-500 gap-2"
          >
            <span className="text-sm hover:underline  underline-offset-4">
              {link.desc}
            </span>{" "}
            <span>
              <FaLink size={15} />
            </span>
          </Link>
        </div>
      ))}
      <div className="w-full flex flex-row gap-1">
        <Headblock title={"STACK"} />
        <div className="w-[80%] flex flex-row item-center justify-start text-sm sm:text-base text-gray-50 font-light font-mono">
            {stack}
        </div>
      </div>
    </div>
  );
};

export default Projectdetail;
