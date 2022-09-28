export const Bottom = () => {
  return (
    <section className="mt-2 flex w-full items-center justify-between rounded-xl bg-[#fffcf7] px-[5%] py-5">
      <div className="flex flex-col gap-1">
        <span className="font-sans text-lg text-[#aaa39b]">
          Total this month
        </span>
        <span className="font-sans text-3xl font-bold text-[#352416]">
          $478.33
        </span>
      </div>
      <div className="mt-auto flex flex-col items-end">
        <span className="font-bold text-[#352416]">+2.4%</span>
        <span className="font-sans text-lg text-[#aaa39b]">
          from last month
        </span>
      </div>
    </section>
  );
};
