import { useState } from 'react';
import { Navbar } from './Navbar';

export const Header = () => {
  const [nav, setNav] = useState(false);

  return (
    <header className="fixed top-0 z-50 flex w-full justify-center bg-[#3ebfff]">
      <div className="relative flex h-20 w-11/12 items-center justify-between">
        <h1 className="w-full text-3xl font-bold text-white">sunnyside</h1>
        <button className="md:hidden" onClick={() => setNav(!nav)}>
          <svg width="24" height="18" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M24 16v2H0v-2h24zm0-8v2H0V8h24zm0-8v2H0V0h24z"
              fill="#FFF"
              fillRule="evenodd"
            />
          </svg>
        </button>
        {nav && <Navbar />}
        <nav className="hidden h-full md:block">
          <ul className="flex h-full items-center gap-6">
            <li>
              <a className="cursor-pointer px-4 py-4 font-normal text-white">
                About
              </a>
            </li>
            <li>
              <a className="cursor-pointer px-4 py-4 font-normal text-white">
                Services
              </a>
            </li>
            <li>
              <a className="cursor-pointer px-4 py-4 font-normal text-white">
                Projects
              </a>
            </li>
            <li>
              <a className="cursor-pointer rounded-2xl bg-white px-6 py-2 text-sm font-semibold uppercase text-black transition-all hover:bg-white/50 hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
