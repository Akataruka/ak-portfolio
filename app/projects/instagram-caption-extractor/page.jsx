import AnimatedComponent from "@/components/AnimatedComponent";
import Projectdetail from "@/components/Projectdetail";
import Projecthead from "@/components/Projecthead";
import Projectimage from "@/components/Projectimage";
import {Projectsdata } from "../_data";


export const metadata = {
    title: "Projects - instagram-caption-extractor",
    description: "Created by Asutosh Kataruka",
  };

const page = () => {
  
  const project = Projectsdata.find(
    (project) => project.title === "instagram-caption-extractor"
  ).data;
  
  return (
    <>
      <AnimatedComponent>
        <Projecthead title={project.title} time={project.time} />
        <div className="w-full px-1 font-light font-mono indent-7 mt-2 sm:mt-0 text-justify break-normal text-gray-50 ">
          {project.description}
        </div>
        <Projectdetail links={project.links} stack={project.stack} />
        <Projectimage images={project.images} />
      </AnimatedComponent>
    </>
  );
};



export default page;