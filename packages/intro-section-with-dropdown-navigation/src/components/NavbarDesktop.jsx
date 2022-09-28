import { useState } from 'react';
import { CompanyMore } from './CompanyMore';
import { FeaturesMore } from './FeaturesMore';

export const NavbarDesktop = () => {
  const [features, setFeatures] = useState(false);
  const [company, setCompany] = useState(false);

  return (
    <div className="ml-12 hidden w-full items-center lg:flex">
      <nav>
        <ul className="flex gap-12">
          <li className="relative flex flex-col gap-3">
            <span
              onClick={() => setFeatures(!features)}
              className="flex cursor-pointer items-center  gap-3 text-[#7f7f7f] transition hover:text-black"
            >
              <p className="text-lg font-semibold sm:text-xl">Features</p>
              <img
                src={features ? 'icon-arrow-up.svg' : 'icon-arrow-down.svg'}
                alt="open more"
              />
            </span>
            {features && <FeaturesMore />}
          </li>
          <li className="relative flex flex-col gap-3">
            <span
              onClick={() => setCompany(!company)}
              className="flex cursor-pointer items-center  gap-3 text-[#7f7f7f] transition hover:text-black"
            >
              <p className="text-lg font-semibold sm:text-xl">Company</p>
              <img
                src={company ? 'icon-arrow-up.svg' : 'icon-arrow-down.svg'}
                alt="open more"
              />
            </span>
            {company && <CompanyMore />}
          </li>
          <li className="flex flex-col gap-3">
            <span className="flex cursor-pointer items-center  gap-3 text-[#7f7f7f] transition hover:text-black">
              <p className="text-lg font-semibold sm:text-xl">Careers</p>
            </span>
          </li>
          <li className="flex flex-col gap-3">
            <span className="flex cursor-pointer items-center  gap-3 text-[#7f7f7f] transition hover:text-black">
              <p className="text-lg font-semibold sm:text-xl">About</p>
            </span>
          </li>
        </ul>
      </nav>
      <div className="ml-auto flex gap-1">
        <button className="w-full rounded-2xl py-1 px-6 text-lg font-semibold text-[#7f7f7f]  transition hover:text-black">
          Login
        </button>
        <button className="w-full rounded-2xl border-2 border-[#7f7f7f] py-1  px-6  text-lg font-semibold text-[#7f7f7f] transition hover:border-black hover:text-black">
          Register
        </button>
      </div>
    </div>
  );
};
