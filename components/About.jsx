import React from "react";
import Headingabout from "./Headingabout";
import Linkbutton from "./Linkbutton";
import Listbio from "./Listbio";
import {
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoLinkedin,
  IoMailUnread,
} from "react-icons/io5";
import Link from "next/link";

const About = () => {
  return (
    <div>
      <div>
        <Headingabout heading="About" />
        <p className="font-mono antialiased text-md text-justify hyphens-auto break-normal indent-8 text-gray-50 pt-3 ">
          I am a dedicated B.Tech Computer Science student at IIIT Bhubaneswar
          with a CGPA of 9.60 . Skilled in frontend development and machine
          learning, I am passionate about Generative AI. My commitment to
          excellence drives me to tackle complex challenges and innovate
          continuously. I am eager to apply my skills and passion to
          cutting-edge projects, contributing to the future of technology.
        </p>
        <Linkbutton title="Resume" link={"https://drive.google.com/file/d/126YEvNqq3tf-_0S-87FsdWV8bzizOTIv/view?usp=drivesdk"} blank={true} />

        <Headingabout heading="Bio" />
        <div className="mt-4 flex flex-col gap-1 justify-start">
          <Listbio date="2004" content="Born in Dhenkanal, Odisha" />
          <Listbio
            date="2020"
            content="Passed Class X CBSE from ST. Xavier High School"
          />
          <Listbio
            date="2022"
            content="Passed Class XII Science CBSE from Ghanashyam Hemalata Vidyamandir"
          />
          <Listbio
            date="2022 - present"
            content="B.Tech Computer Science at IIIT Bhubaneswar"
          />
        </div>
        <Headingabout heading="I &#9829;" />
        <p className="font-mono antialiased mt-4 text-md text-start indent-8  pl-2 text-gray-50">
          Gaming, Art, Listening Music, Travelling, Coding
        </p>

        <Headingabout heading="On the web" />
        <div className="flex flex-col gap-2 justify-center mt-4 pl-4 sm:pl-6 text-md items-start">
          <Link
            href={"https://github.com/Akataruka"}
            target="_blank"
            className="hover:bg-teal-500/[0.2] font-sans  rounded-lg font-bold h-8 flex items-center p-2"
          >
            <IoLogoGithub className="text-teal-500" size={20} />
            <span className="pl-1 pr-3 text-teal-500">@Akataruka</span>
          </Link>
          <Link
            href={"https://www.linkedin.com/in/asutosh-kataruka-79aa05269/"}
            target="_blank"
            className="hover:bg-teal-500/[0.2] font-sans  rounded-lg font-bold h-8 flex items-center p-2"
          >
            <IoLogoLinkedin className="text-teal-500" size={20} />
            <span className="pl-1 pr-3 text-teal-500">@asutosh-kataruka</span>
          </Link>
          <Link
            href={"https://www.instagram.com/_asutoshk.09_/"}
            target="_blank"
            className="hover:bg-teal-500/[0.2] font-sans  rounded-lg font-bold h-8 flex items-center p-2"
          >
            <IoLogoInstagram className="text-teal-500" size={20} />
            <span className="pl-1 pr-3 text-teal-500">@_asutoshk.09_</span>
          </Link>
          <Link
            href={
              "https://x.com/i/flow/login?redirect_after_login=%2FAsutoshK_09"
            }
            target="_blank"
            className="hover:bg-teal-500/[0.2] font-sans  rounded-lg font-bold h-8 flex items-center p-2"
          >
            <IoLogoTwitter className="text-teal-500" size={20} />
            <span className="pl-1 pr-3 text-teal-500">@AsutoshK_09</span>
          </Link>
          <Link
            href={
              "mailto:asutoshkataruka0009@gmail.com?subject:want to connect"
            }
            target="_blank"
            className="hover:bg-teal-500/[0.2] font-sans  rounded-lg font-bold h-8 flex items-center p-2"
          >
            <IoMailUnread className="text-teal-500" size={20} />
            <span className="pl-1 pr-3 text-teal-500">
              @asutoshkataruka0009
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
