import React from "react";
import Projectmain from "@/components/Projectmain";
import AnimatedComponent from "@/components/AnimatedComponent";

export const metadata = {
  title: "Asutosh Kataruka - projects",
  description: "Created by Asutosh Kataruka",
};

const page = () => {
  return (
    <AnimatedComponent>
      <Projectmain />
     </AnimatedComponent>
  );
};

export default page;
