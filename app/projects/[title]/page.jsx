import AnimatedComponent from "@/components/AnimatedComponent";
import Projectdetail from "@/components/Projectdetail";
import Projecthead from "@/components/Projecthead";
import Projectimage from "@/components/Projectimage";
import { Projectname, Projectsdata } from "./_data";
import { redirect } from "next/navigation";


const page = ({ params }) => {
  if (!Projectname.includes(params.title)) {
    redirect("/not-found");
  }
  
  const project = Projectsdata.find(
    (project) => project.title === params.title
  ).data;
  
  generateMetadata(project.title);
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


export async function generateMetadata({params}) {
  return {
    title:  `Projects - ${params.title}`,
    description: 'Created by Asutosh Kataruka',
  }
}


export default page;
