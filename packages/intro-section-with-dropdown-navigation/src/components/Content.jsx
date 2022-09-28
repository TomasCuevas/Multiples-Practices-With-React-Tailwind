export const Content = () => {
  return (
    <section className="flex w-full flex-col items-center gap-5 px-[2.5%] py-10 sm:px-[5%] md:gap-8 2xl:w-[65%] 2xl:items-start 2xl:justify-end 2xl:gap-14 2xl:py-0 2xl:px-[10%]">
      <h3 className="text-4xl font-bold text-[#151515] md:text-4xl md:font-black 2xl:text-8xl 2xl:font-bold">
        Make remote work
      </h3>
      <p className="text-center font-medium text-[#787878] sm:text-xl sm:font-semibold  md:text-2xl md:font-semibold 2xl:text-left">
        Get your team in sync, no matter your location. Streamline processes,
        create team rituals, and watch productivity soar.
      </p>
      <button className="rounded-xl border bg-[#151515] px-6 py-3 font-medium text-white transition hover:border hover:border-black hover:bg-white hover:text-black md:px-8 md:py-4 lg:text-xl">
        Learn more
      </button>
      <ul className="mt-10 flex w-full justify-center gap-4 2xl:mt-24">
        <li className="flex w-[70px] items-center justify-center sm:w-[150px] md:w-[150px] lg:w-[220px]">
          <img src="client-databiz.svg" alt="client logo" />
        </li>
        <li className="flex w-[70px] items-center justify-center sm:w-[150px] md:w-[150px] lg:w-[220px]">
          <img src="client-audiophile.svg" alt="client logo" />
        </li>
        <li className="flex w-[70px] items-center justify-center sm:w-[150px] md:w-[150px] lg:w-[220px]">
          <img src="client-meet.svg" alt="client logo" />
        </li>
        <li className="flex w-[70px] items-center justify-center sm:w-[150px] md:w-[150px] lg:w-[220px]">
          <img src="client-maker.svg" alt="client logo" />
        </li>
      </ul>
    </section>
  );
};
