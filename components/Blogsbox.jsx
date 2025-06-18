import Link from "next/link";
import Image from "next/image";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const Blogsbox = (props) => {
  return (
    <>
      <div className="mt-4 sm:mt-2">
        <Link
          key={props.index}
          href={props.item.link}
          target="_blank"
          className="w-full group h-[75vw] md:h-72 md:w-60 flex flex-col justify-center items-center "
        >
          <div className="relative rounded-lg bg-white w-[90vw] h-[50vw] md:w-60 md:h-36 ">
            <Image
              src={props.item.src}
              fill
              className="object-cover rounded-xl"
              alt="404"
              loading="lazy"
            />
          </div>
          <div className="mt-2 w-full text-xl font-sans text-gray-50 font-semibold tracking-wide text-center">
            {props.item.name}
            <FaArrowUpRightFromSquare
              size={15}
              className="hidden font-light group-hover:inline mx-1"
            />
          </div>
        </Link>
        <hr className="block w-[90%] mx-auto font-thin  sm:hidden  bg-gray-50 h-[0.25px]" />
      </div>
    </>
  );
};

export default Blogsbox;
