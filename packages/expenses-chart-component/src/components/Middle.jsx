import { useEffect, useState } from 'react';
import data from '../assets/data.json';
import { Column } from './Column';

export const Middle = () => {
  const [dataState, setDataState] = useState(data);

  useEffect(() => {
    let indice = 0;
    let expenses = 0;

    dataState.forEach((day, index) => {
      if (day.amount > expenses) {
        expenses = day.amount;
        indice = index;
      }
    });

    const newData = dataState.map((day, index) => {
      if (index === indice) {
        day.moreExpenses = true;
      } else {
        day.moreExpenses = false;
      }

      return day;
    });

    setDataState(newData);
  }, []);

  return (
    <section className="mt-5 flex w-full flex-col gap-10 rounded-xl bg-[#fffcf7] px-[5%] py-6">
      <div>
        <h3 className="text-xl font-bold text-[#352416]">
          Spending - Last 7 days
        </h3>
      </div>
      <div className="flex w-full items-end justify-center gap-3">
        {data.map((day) => (
          <Column key={day.day} {...day} />
        ))}
      </div>
    </section>
  );
};
