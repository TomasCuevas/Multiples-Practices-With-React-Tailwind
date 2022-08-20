import React from 'react';

export const CardContent = () => {
  return (
    <section className="flex w-full flex-col gap-3 border-b border-[#8BACD9] pb-3">
      <h3 className="text-2xl font-medium text-white">Equilibrium #3429</h3>
      <p className="text-base font-extralight  text-[#8BACD9]">
        Our Equilibrium collection promotes balance and calm.
      </p>
      <div className="flex w-full flex-row justify-between">
        <div className="flex flex-row items-center gap-2">
          <svg width="11" height="18" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M11 10.216 5.5 18 0 10.216l5.5 3.263 5.5-3.262ZM5.5 0l5.496 9.169L5.5 12.43 0 9.17 5.5 0Z"
              fill="#00FFF8"
            />
          </svg>
          <span className="font-semibold text-[#00FFF8]">0.0.41ETH</span>
        </div>
        <div className="flex flex-row items-center gap-2">
          <svg width="17" height="17" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M8.305 2.007a6.667 6.667 0 1 0 0 13.334 6.667 6.667 0 0 0 0-13.334Zm2.667 7.334H8.305a.667.667 0 0 1-.667-.667V6.007a.667.667 0 0 1 1.334 0v2h2a.667.667 0 0 1 0 1.334Z"
              fill="#8BACD9"
            />
          </svg>
          <span className="font-medium text-[#8BACD9]">3 days left</span>
        </div>
      </div>
    </section>
  );
};
