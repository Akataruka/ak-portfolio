import React from "react";
import Projectmain from "@/components/projectmain";
import AnimatedComponent from "@/components/AnimatedComponent";

export const metadata = {
  title: "Asutosh Kataruka - projects",
  description: "Created by Asutosh Kataruka",
};

const Projects = () => {
  return (
    <AnimatedComponent>
      <Projectmain />
    </AnimatedComponent>
  );
};

export default Projects;
