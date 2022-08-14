export const FeaturesMore = () => {
  return (
    <div className="absolute right-0 top-12 rounded-xl bg-white p-6 shadow-2xl">
      <ul className="flex flex-col gap-3 whitespace-nowrap sm:gap-4">
        <li className="flex items-center gap-3">
          <span className="h-[16px] w-[16px]">
            <img src="icon-todo.svg" alt="more icon" />
          </span>
          <span className="cursor-pointer text-lg font-medium text-[#7f7f7f] transition hover:text-black sm:text-xl">
            Todo List
          </span>
        </li>
        <li className="flex items-center gap-3">
          <span className="h-[16px] w-[16px]">
            <img src="icon-calendar.svg" alt="more icon" />
          </span>
          <span className="cursor-pointer text-lg font-medium text-[#7f7f7f] transition hover:text-black sm:text-xl">
            Calendar
          </span>
        </li>
        <li className="flex items-center gap-3">
          <span className="h-[16px] w-[16px]">
            <img src="icon-reminders.svg" alt="more icon" />
          </span>
          <span className="cursor-pointer text-lg font-medium text-[#7f7f7f] transition hover:text-black sm:text-xl">
            Reminders
          </span>
        </li>
        <li className="flex items-center gap-3">
          <span className="h-[16px] w-[16px]">
            <img src="icon-planning.svg" alt="more icon" />
          </span>
          <span className="cursor-pointer text-lg font-medium text-[#7f7f7f] transition hover:text-black sm:text-xl">
            Planning
          </span>
        </li>
      </ul>
    </div>
  );
};
