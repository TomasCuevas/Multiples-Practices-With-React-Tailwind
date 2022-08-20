export const TransformText = () => {
  return (
    <div className="m-auto flex w-9/12 flex-col items-center gap-6 py-10 sm:items-start lg:w-8/12">
      <h2 className="text-center text-3xl font-bold tracking-[2px] sm:text-left lg:text-4xl 2xl:text-6xl">
        Transform your brand
      </h2>
      <p className=" text-center font-normal text-[#555] sm:text-left lg:text-lg 2xl:text-2xl 2xl:leading-10">
        We are a full-service creative agency specializing in helping brands
        grow fast. Engage your clients through compelling visuals that do most
        of the marketing for you.
      </p>
      <span className="relative text-center font-bold uppercase tracking-[2px] text-black/70 transition-all after:absolute after:bottom-0 after:left-0 after:-z-10 after:h-2 after:w-full after:rounded-full after:bg-orange-200/80 hover:text-black sm:text-left 2xl:text-xl">
        Learn more
      </span>
    </div>
  );
};
