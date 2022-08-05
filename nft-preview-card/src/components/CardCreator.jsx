import React from "react";

export const CardCreator = () => {
  return (
    <section>
      <div className="flex flex-row gap-4 items-center">
        <img
          src="image-avatar.png"
          alt="avatar-img"
          className="rounded-full border border-white h-10"
        />
        <p className="text-[#8BACD9] font-light">
          Creation of{" "}
          <span className="text-white font-normal">Jules Wyvern</span>
        </p>
      </div>
    </section>
  );
};
