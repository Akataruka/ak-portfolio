"use client";
import React from "react";
import Menu from "./Menu";
import Link from "next/link";
import Profilesvg from "./Profilesvg";

const links = [
  { id: 1, name: "Skills", url: "/skills" },
  { id: 2, name: "Projects", url: "/projects" },
  { id: 3, name: "Blogs", url: "/blogs" },
];

const Navbar = () => {
  return (
    <div className="w-full fixed top-0 z-10  flex justify-center items-center px-4 h-20  backdrop-filter backdrop-blur-md">
      <div className="w-full md:w-[800px] flex flex-row item-center justify-between md:justify-between">
        <div className="flex justify-center items-center gap-2">
          <Profilesvg/>
          <Link href="/" className="text-xl md:text-2xl font-bold text-white">
            Asutosh kataruka
          </Link>
        </div>

        {/* DESKTOP VIEW */}

        <div className="hidden text-white sm:flex item-center text-lg gap-8 ">
          {links.map((link) => (
            <Link
              href={link.url}
              key={link.id}
              className="text-[#ffffff] text-center hover:underline hover:decoration-slate-50 hover:underline-offset-8 "
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* MOBILE VIEW */}
        <div className="sm:hidden">
          <Menu />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
