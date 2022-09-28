export const Top = () => {
  return (
    <section className="flex min-h-[125px] w-full items-center justify-between rounded-xl bg-[#ec775f] px-[5%]">
      <div className="flex flex-col gap-1">
        <span className="font-normal text-[#f9d9c6]">My balance</span>
        <span className="text-2xl font-bold text-white">$921.48</span>
      </div>
      <div>
        <picture>
          <img src="/public/logo.svg" alt="expenses logo" />
        </picture>
      </div>
    </section>
  );
};
