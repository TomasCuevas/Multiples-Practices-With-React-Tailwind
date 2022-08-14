export const FeaturesMoreMobile = () => {
  return (
    <ul className="ml-4 flex flex-col gap-3 sm:gap-4">
      <li className="flex cursor-pointer items-center gap-3">
        <span className="h-[16px] w-[16px]">
          <img src="icon-todo.svg" alt="more icon" />
        </span>
        <span className="text-lg font-semibold text-[#7f7f7f] sm:text-xl">
          Todo List
        </span>
      </li>
      <li className="flex cursor-pointer items-center gap-3">
        <span className="h-[16px] w-[16px]">
          <img src="icon-calendar.svg" alt="more icon" />
        </span>
        <span className="text-lg font-semibold text-[#7f7f7f] sm:text-xl">
          Calendar
        </span>
      </li>
      <li className="flex cursor-pointer items-center gap-3">
        <span className="h-[16px] w-[16px]">
          <img src="icon-reminders.svg" alt="more icon" />
        </span>
        <span className="text-lg font-semibold text-[#7f7f7f] sm:text-xl">
          Reminders
        </span>
      </li>
      <li className="flex cursor-pointer items-center gap-3">
        <span className="h-[16px] w-[16px]">
          <img src="icon-planning.svg" alt="more icon" />
        </span>
        <span className="text-lg font-semibold text-[#7f7f7f] sm:text-xl">
          Planning
        </span>
      </li>
    </ul>
  );
};
