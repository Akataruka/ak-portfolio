import React from "react";
import Headingabout from "@/components/Headingabout";
import { FaCode } from "react-icons/fa6";
import { TbBrandCpp } from "react-icons/tb";
import { GiGears } from "react-icons/gi";
import { LuBrainCircuit } from "react-icons/lu";
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
              <TbBrandCpp className=" text-teal-500 rounded-lg" size={70} />
            </div>
            <div className="w-2/3 flex flex-col gap-2 ">
              <div className="font-sans text-xl pl-2 text-pink-500 font-semibold tracking-wide">
                C++ Developer
              </div>
              <div className="font-mono text-sm pl-2 text-gray-50 indent-6 leading-4 break-words text-pretty ">
                C++ programming for system-level development, competitive coding, and algorithmic problem-solving.
              </div>
            </div>
          </div>
                    <div className="w-[95%] sm:w-[80%]  shadow-lg border border-gray-200 border-opacity-30  backdrop-filter backdrop-blur-lg py-3 flex flex-row gap-2 px-4 justify-center items-center rounded-lg">
            <div className="w-1/4 flex justify-center items-center ">
              <LuBrainCircuit className=" text-teal-500 rounded-lg" size={70} />
            </div>
            <div className="w-2/3 flex flex-col gap-2 ">
              <div className="font-sans text-xl pl-2 text-pink-500 font-semibold tracking-wide">
                ML, DL & Agentic AI
              </div>
              <div className="font-mono text-sm pl-2 text-gray-50 indent-6 leading-4 break-words text-pretty ">
                Building machine learning and deep learning models, and developing intelligent agents powered by LLMs.
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
