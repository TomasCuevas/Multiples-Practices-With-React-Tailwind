import { useState } from 'react';

export const Column = ({ day, amount = 0, moreExpenses }) => {
  const [isHover, setIsHover] = useState(false);

  const columnHeight = `${amount.toFixed() * 3}px`.toString();
  const columnStyle = moreExpenses
    ? 'w-full rounded-md bg-[#76b5bc] hover:bg-[#76b5bc]/60 transition-all duration-100 cursor-pointer'
    : 'w-full rounded-md bg-[#ec775f] hover:bg-[#ec775f]/60 transition-all duration-100 cursor-pointer';

  return (
    <div
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className="relative flex w-full max-w-[55px] flex-col justify-center gap-3 "
    >
      <div
        style={{ display: isHover ? 'block' : 'none' }}
        className="absolute top-[-30px] z-10 bg-[#352416] p-1 text-xs text-white"
      >
        ${amount}
      </div>
      <div style={{ height: columnHeight }} className={columnStyle}></div>
      <div className="w-full text-center font-normal text-[#aaa39b]">{day}</div>
    </div>
  );
};
