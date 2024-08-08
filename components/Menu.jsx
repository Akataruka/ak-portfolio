"use client";
import Link from "next/link";
import React from "react";
import { useState } from "react";
import Hamburger from 'hamburger-react'

const links = [
  { id: 1, name: "Home", url: "/" },
  { id: 2, name: "Skills", url: "/skills" },
  { id: 3, name: "Projects", url: "/projects" },
  { id: 4, name: "Blogs", url: "/blogs" },
];

const Menu = () => {
const [isOpen, setOpen] = useState(false)

  return (
    <>
    <div className="rounded-md w-10 h-10 border-[0.5px] grid content-center justify-center border-['ffffff60']">
      <Hamburger toggled={isOpen} toggle={setOpen} size={18} color="#ffffff60" />
    </div>

    <div>
      {isOpen && (<div className="bg-gray-800 fixed top-24 right-3 w-44 h-52 text-xl rounded-md flex flex-col justify-center items-center gap-3 z-20">
        {links.map((link) => (
            <Link href={link.url} key={link.id} className="w-32 text-[#ffffff90] text-center hover:underline hover:decoration-slate-50 hover:underline-offset-8 " onClick={()=>setOpen(false)}>
            {link.name}
          </Link>
        ))}
      </div>)}
    </div>
        </>
  );
};

export default Menu;