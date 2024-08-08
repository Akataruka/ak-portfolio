import { forwardRef } from "react";

export const DogSpinner = () => (
<div
  className="spinner  absolute left-1/2 top-1/2 ml-[calc(0px-var(--spinner-size)/2)] mt-[calc(0px-var(--spinner-size))] text-4xl"
>
</div>
);

export const DogContainer = forwardRef(({ children }, ref) => (
  <div
    className="mx-auto mt-[-40px] md:mt-[-80px] lg:mt-[-120px] mb-[-40px] md:mb-[-140px] lg:mb-[-200px] w-[280px] md:w-[480px] lg:w-[600px] h-[280px] md:h-[480px] lg:h-[600px] relative"
    ref={ref}
  >
    {children}
  </div>
));

const Loader = () => {
  return (
    <DogContainer>
      <DogSpinner />
    </DogContainer>
  );
};

export default Loader;
