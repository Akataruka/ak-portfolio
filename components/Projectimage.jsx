import Image from "next/image";
import React from "react";

const Projectimage = ({ images }) => {
  return (
    <div className="w-full flex flex-col gap-4 sm:gap-6 mt-4">
      {images.map((image, index) => (
        <div key={index} className="w-full h-[24vh] sm:h-[40vh] relative ">
          <Image
            src={image}
            fill
            className="object-cover rounded-lg"
            alt="404"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
};

export default Projectimage;
