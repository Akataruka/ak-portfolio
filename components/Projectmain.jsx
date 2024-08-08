"use client";
import React from "react";
import Projectbox from "./Projectbox";
import { useState } from "react";

const projectitems = [
  {
    name: "Boot-camp",
    src: "/images/bootcamp-1.png",
    domain: [0, 2],
    desc: "A platform for college students to share their introductions, fostering seamless interaction and networking.",
    link: "/projects/boot-camp",
  },
  {
    name: "Food-Order-App",
    src: "/images/foodordersite-1.png",
    domain: [0, 2],
    desc: "Food Order App, enabling seamless browsing and effortless ordering.",
    link: "/projects/food-order-app",
  },
  {
    name: "Editing Web App",
    src: "/images/editingwebapp-1.png",
    domain: [0, 1, 2],
    desc: "An intuitive web app for seamless and efficient editing of images.",
    link: "/projects/editing-web-app",
  },
  {
    name: "Hand Tracking",
    src: "/images/handtracking-1.jpg",
    domain: [0, 1],
    desc: "A cutting-edge hand-tracking app with machine learning for precise gesture recognition.",
    link: "/projects/hand-tracking",
  },
  {
    name: "Alpaca Detection",
    src: "/images/alpacadetction-1.jpg",
    domain: [0, 1],
    desc: "An Alpaca Detection app using machine learning for accurate and efficient recognition.",
    link: "/projects/alpaca-detection",
  },
  {
    name: "Instagram Caption Extractor",
    src: "/images/instacaptionextracter-1.png",
    domain: [0, 3],
    desc: "Instagram Caption Extractor using Web scraping, providing effortless and accurate caption retrieval.",
    link: "/projects/instagram-caption-extractor",
  },
  {
    name: "Moorse Code Generator",
    src: "/images/moorsecode-1.png",
    domain: [0, 3],
    desc: "A seamless Morse Code Generator, enabling quick and accurate conversion between text and Morse code for enhanced communication",
    link: "/projects/moorsecode-generator",
  },
  {
    name: "To Do List",
    src: "/images/todolist.png",
    domain: [0, 2],
    desc: "A user-friendly To-Do List application, designed to streamline task management with an intuitive interface and efficient functionality.",
    link: "/projects/To-Do-List",
  },
  {
    name: "Tic-Tac-toe",
    src: "/images/tictactoe.png",
    domain: [0, 2],
    desc: "Engaging Tic-Tac-Toe game using Vanilla js, featuring a sleek interface and intelligent gameplay.",
    link: "/projects/Tic-Tac-Toe",
  },
  {
    name: "Currency Converter",
    src: "/images/currencyconverter.png",
    domain: [0, 2],
    desc: "A robust currency converter application, enabling real-time and accurate currency exchange.",
    link: "/projects/currency-converter",
  },
  
];

const Projectmain = () => {
  const [choice, setChoice] = useState(0);
  let filterItems = projectitems.filter(item => item.domain.includes(choice));

  return (
    <>
      <div className="w-full h-12 text-sm sm:font-semibold sm:tracking-wide sm:text-lg border-b-[1px] font-sans flex flex-row justify-between py-[1px] items-end text-gray-50 border-gray-200 border-opacity-30 mt-2 sm:mt-4">
        <button
          className={` min-w-10 h-10 px-2  rounded-t-md hover:bg-teal-500 hover:cursor-pointer hover:text-black transition-all duration-300 ease-in-out transform ${
            choice === 0 ? "bg-teal-500 text-black" : ""
          }`}
          onClick={() => setChoice(0)}
        >
          All
        </button>
        <button
          className={`  hover:bg-teal-500 rounded-t-md px-2 h-10 hover:cursor-pointer hover:text-black transition-all duration-300 ease-in-out transform ${
            choice === 1 ? "bg-teal-500 text-black" : ""
          }`}
          onClick={() => setChoice(1)}
        >
          Machine Learning
        </button>
        <button
          className={`  hover:bg-teal-500  rounded-t-md px-2 h-10 hover:cursor-pointer hover:text-black transition-all duration-300 ease-in-out transform ${
            choice === 2 ? "bg-teal-500 text-black" : ""
          }`}
          onClick={() => setChoice(2)}
        >
          Web Development
        </button>
        <button
          className={`  hover:bg-teal-500  rounded-t-md px-2 h-10 hover:cursor-pointer hover:text-black transition-all duration-300 ease-in-out transform ${
            choice === 3 ? "bg-teal-500 text-black" : ""
          }`}
          onClick={() => {
            setChoice(3);
          }}
        >
          Automation
        </button>
      </div>
      <div className="mt-4 w-full flex flex-row gap-4 justify-evenly items-center flex-wrap">
      {filterItems.map((item, index) => (
        <Projectbox key={index} index={index} item={item} />
      ))}
      </div>
    </>
  );
};

export default Projectmain;
