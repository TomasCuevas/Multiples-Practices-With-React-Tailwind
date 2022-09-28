export const CompanyMore = () => {
  return (
    <div className="absolute top-12 left-0 rounded-xl bg-white p-6 shadow-2xl">
      <ul className="flex flex-col gap-3 whitespace-nowrap sm:gap-4">
        <li className="flex items-center gap-3">
          <span className="cursor-pointer text-lg font-medium text-[#7f7f7f] transition hover:text-black sm:text-xl">
            History
          </span>
        </li>
        <li className="flex items-center gap-3">
          <span className="cursor-pointer text-lg font-medium text-[#7f7f7f] transition hover:text-black sm:text-xl">
            Our Team
          </span>
        </li>
        <li className="flex items-center gap-3">
          <span className="cursor-pointer text-lg font-medium text-[#7f7f7f] transition hover:text-black sm:text-xl">
            Blog
          </span>
        </li>
      </ul>
    </div>
  );
};
