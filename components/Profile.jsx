import Image from "next/image";
import React from "react";
import TypeWritercursor from "@/components/TypeWriter";

const Profile = () => {
  return (
    <div className="flex flex-col-reverse sm:flex-row h-40 text-slate-50 sm:h-24 gap-3 justify-evenly items-center ">
      <div className="flex flex-col justify-center sm:gap-1 pl-2 rounded-lg w-3/4 ">
        <div className="font-mono text-center sm:text-left font-extrabold  text-xl sm:text-4xl tracking-wide">
          Asutosh Kataruka
        </div>
        <div className="font-mono text-sm sm:pl-4 sm:text-xl text-center sm:text-left ">
          <TypeWritercursor
            speed = {50}
            words={["Frontend Developer", "Machine Learning Engineer"]}
          />
        </div>
      </div>
      <div className="relative border-2 h-24 w-24 sm:w-1/6 grid items-center sm:h-24 border-slate-100 rounded-full">
        <Image
          src={"/images/author.jpg"}
          alt="Picture of the author"
          fill
          className="object-cover rounded-full"
        />
      </div>
    </div>
  );
};

export default Profile;
