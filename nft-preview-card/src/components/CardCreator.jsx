import React from 'react';

export const CardCreator = () => {
  return (
    <section>
      <div className="flex flex-row items-center gap-4">
        <img
          src="image-avatar.png"
          alt="avatar-img"
          className="h-10 rounded-full border border-white"
        />
        <p className="font-light text-[#8BACD9]">
          Creation of{' '}
          <span className="font-normal text-white">Jules Wyvern</span>
        </p>
      </div>
    </section>
  );
};
