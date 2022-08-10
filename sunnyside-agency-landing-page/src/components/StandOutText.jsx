import React from "react";

export const StandOutText = () => {
  return (
    <div className="flex flex-col items-center w-9/12 gap-6 py-10 m-auto lg:w-8/12 sm:items-start">
      <h2 className="text-3xl lg:text-4xl 2xl:text-6xl font-bold tracking-[2px] text-center sm:text-left">
        Stand out to the right audience
      </h2>
      <p className="text-center lg:text-lg 2xl:text-2xl 2xl:leading-10 text-[#555] font-normal sm:text-left">
        Using a collaborative formula of designers, researchers, photographers,
        videographers, and copywriters, we'll build and extend your brand in
        digital places.
      </p>
      <span className="relative font-bold text-center tracking-[2px] uppercase after:absolute after:bottom-0 after:left-0 after:w-full after:h-2 after:rounded-full after:-z-10 after:bg-orange-200/80 text-black/70 hover:text-black transition-all sm:text-left 2xl:text-xl">
        Learn more
      </span>
    </div>
  );
};