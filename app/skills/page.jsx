import React from "react";
import Headingabout from "@/components/Headingabout";
import { FaPython, FaCode } from "react-icons/fa6";
import { SiScrapy } from "react-icons/si";
import { GiGears } from "react-icons/gi";
import { LuBrainCircuit } from "react-icons/lu";
import { PiHeadCircuitLight } from "react-icons/pi";
import AnimatedComponent from "@/components/AnimatedComponent";

export const metadata = {
  title: "Asutosh Kataruka - skills",
  description: "Created by Asutosh Kataruka",
};

const page = () => {
  return (
    <AnimatedComponent>
      <div>
        <Headingabout heading="What I'm Doing" />
        <div className=" mt-6 flex flex-col gap-4 items-center ">
          <div className="w-[95%] sm:w-[80%] shadow-lg border border-gray-200 border-opacity-30  backdrop-filter backdrop-blur-lg py-3 flex flex-row gap-2 px-4 justify-center items-center rounded-lg">
            <div className="w-1/4 flex justify-center items-center ">
              <PiHeadCircuitLight
                className="text-teal-500 rounded-lg"
                size={70}
              />
            </div>
            <div className="w-2/3 flex flex-col gap-2 ">
              <div className="font-sans text-xl pl-2 text-pink-500 font-semibold tracking-wide">
                Generative AI
              </div>
              <div className="font-mono text-sm pl-2 text-gray-50 indent-6 leading-4 break-words text-pretty ">
                Creating innovative AI models to generate new, creative content
                and solve complex problems.
              </div>
            </div>
          </div>
          <div className="w-[95%] sm:w-[80%] shadow-lg border border-gray-200 border-opacity-30  backdrop-filter backdrop-blur-lg py-3 flex flex-row gap-2 px-4 justify-center items-center rounded-lg">
            <div className="w-1/4 flex justify-center items-center ">
              <FaPython className=" text-teal-500 rounded-lg" size={70} />
            </div>
            <div className="w-2/3 flex flex-col gap-2 ">
              <div className="font-sans text-xl pl-2 text-pink-500 font-semibold tracking-wide">
                Python Developer
              </div>
              <div className="font-mono text-sm pl-2 text-gray-50 indent-6 leading-4 break-words text-pretty ">
                Mastering versatile scripting for data analysis, automation, and
                web development.
              </div>
            </div>
          </div>
          <div className="w-[95%] sm:w-[80%]  shadow-lg border border-gray-200 border-opacity-30  backdrop-filter backdrop-blur-lg py-3 flex flex-row gap-2 px-4 justify-center items-center rounded-lg">
            <div className="w-1/4 flex justify-center items-center ">
              <FaCode className=" text-teal-500 rounded-lg" size={70} />
            </div>
            <div className="w-2/3 flex flex-col gap-2 ">
              <div className="font-sans text-xl pl-2 text-pink-500 font-semibold tracking-wide">
                Frontend Developer
              </div>
              <div className="font-mono text-sm pl-2 text-gray-50 indent-6 leading-4 break-words text-pretty ">
                Creating responsive and dynamic websites with cutting-edge
                technologies.
              </div>
            </div>
          </div>
          <div className="w-[95%] sm:w-[80%]  shadow-lg border border-gray-200 border-opacity-30  backdrop-filter backdrop-blur-lg py-3 flex flex-row gap-2 px-4 justify-center items-center rounded-lg">
            <div className="w-1/4 flex justify-center items-center ">
              <LuBrainCircuit className=" text-teal-500 rounded-lg" size={70} />
            </div>
            <div className="w-2/3 flex flex-col gap-2 ">
              <div className="font-sans text-xl pl-2 text-pink-500 font-semibold tracking-wide">
                Machine Learning
              </div>
              <div className="font-mono text-sm pl-2 text-gray-50 indent-6 leading-4 break-words text-pretty ">
                Developing intelligent models to predict and analyze data,
                enabling smart decision-making.
              </div>
            </div>
          </div>
          <div className="w-[95%] sm:w-[80%]  shadow-lg border border-gray-200 border-opacity-30  backdrop-filter backdrop-blur-lg py-3 flex flex-row gap-2 px-4 justify-center items-center rounded-lg">
            <div className="w-1/4 flex justify-center items-center ">
              <SiScrapy className=" text-teal-500 rounded-lg" size={70} />
            </div>
            <div className="w-2/3 flex flex-col gap-2 ">
              <div className="font-sans text-xl pl-2 text-pink-500 font-semibold tracking-wide">
                Web Scraping
              </div>
              <div className="font-mono text-sm pl-2 text-gray-50 indent-6 leading-4 break-words text-pretty ">
                Extracting valuable data from websites efficiently using
                automated scripts and tools.
              </div>
            </div>
          </div>
          <div className="w-[95%] sm:w-[80%]  shadow-lg border border-gray-200 border-opacity-30  backdrop-filter backdrop-blur-lg py-3 flex flex-row gap-2 px-4 justify-center items-center rounded-lg">
            <div className="w-1/4 flex justify-center items-center ">
              <GiGears className=" text-teal-500 rounded-lg" size={70} />
            </div>
            <div className="w-2/3 flex flex-col gap-2 ">
              <div className="font-sans text-xl pl-2 text-pink-500 font-semibold tracking-wide">
                Automation
              </div>
              <div className="font-mono text-sm pl-2 text-gray-50 indent-6 leading-4 break-words text-pretty ">
                Streamlining processes and tasks to improve productivity and
                efficiency with robust automation solutions.
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedComponent>
  );
};

export default page;
