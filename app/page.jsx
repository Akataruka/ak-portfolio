import About from "@/components/About";
import Profile from "@/components/Profile";
import React from "react";
import AnimatedComponent from "@/components/AnimatedComponent";

export const metadata = {
  title: "Asutosh Kataruka - portfolio",
  description: "Created by Asutosh Kataruka",
};

const page = () => {
  return (
    <>
      <AnimatedComponent>
        <div className="flex flex-col gap-3 justify-center">
          <div className="text-center tracking-wider font-mono bg-neutral-700 rounded-xl text-slate-200 h-12 flex items-center justify-center sm:text-lg">
            Hello, I am Asutosh Kataruka !
          </div>
          <Profile />
          <About />
        </div>
      </AnimatedComponent>
    </>
  );
};

export default page;
