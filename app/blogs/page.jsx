
import AnimatedComponent from "@/components/AnimatedComponent";
import Blogsmain from "@/components/Blogsmain";
import React from "react";

export const metadata = {
  title: "Asutosh Kataruka - blogs",
  description: "Created by Asutosh Kataruka",
};

const page = () => {
  return (
    <>
      <AnimatedComponent>
        <Blogsmain />
      </AnimatedComponent>
    </>
  );
};

export default page;
