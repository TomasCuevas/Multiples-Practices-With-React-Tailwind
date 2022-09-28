import { useState } from 'react';
import { CompanyMoreMobile } from './CompanyMoreMobile';
import { FeaturesMoreMobile } from './FeaturesMoreMobile';

export const NavbarMobile = ({ handleNav }) => {
  const [features, setFeatures] = useState(false);
  const [company, setCompany] = useState(false);

  return (
    <div
      onClick={handleNav}
      className="absolute right-0 top-0 h-screen w-screen bg-neutral-900/80 lg:hidden"
    >
      <div
        onClick={(event) => {
          event.stopPropagation();
        }}
        className="ml-auto h-full w-[70%] max-w-[520px] bg-white px-[5%]"
      >
        <span className="flex w-full cursor-pointer justify-end py-7">
          <img
            onClick={handleNav}
            src="icon-close-menu.svg"
            alt="close navbar"
          />
        </span>
        <nav>
          <ul className="ml-2 flex flex-col gap-5 sm:gap-8">
            <li
              onClick={() => setFeatures(!features)}
              className="flex flex-col gap-3"
            >
              <span className="flex cursor-pointer items-center gap-3  text-[#7f7f7f]">
                <p className="text-lg font-semibold sm:text-xl">Features</p>
                <img
                  src={features ? 'icon-arrow-up.svg' : 'icon-arrow-down.svg'}
                  alt="open more"
                  className=" text-[#7f7f7f]"
                />
              </span>
              {features && <FeaturesMoreMobile />}
            </li>
            <li
              onClick={() => setCompany(!company)}
              className="flex flex-col gap-3"
            >
              <span className="flex cursor-pointer items-center gap-3  text-[#7f7f7f]">
                <p className="text-lg font-semibold sm:text-xl">Company</p>
                <img
                  src={company ? 'icon-arrow-up.svg' : 'icon-arrow-down.svg'}
                  alt="open more"
                  className="text-[#7f7f7f]"
                />
              </span>
              {company && <CompanyMoreMobile />}
            </li>
            <li>
              <span className="cursor-pointer text-lg font-semibold text-[#7f7f7f] sm:text-xl">
                Careers
              </span>
            </li>
            <li>
              <span className="cursor-pointer text-lg font-semibold text-[#7f7f7f] sm:text-xl">
                About
              </span>
            </li>
          </ul>
          <div className="my-10 flex flex-col gap-1">
            <button className="w-full rounded-2xl py-2 text-lg font-semibold text-[#7f7f7f]">
              Login
            </button>
            <button className="w-full rounded-2xl border-2  border-[#7f7f7f] py-2 text-lg font-semibold text-[#7f7f7f]">
              Register
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
};
