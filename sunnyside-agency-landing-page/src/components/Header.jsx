import { useState } from "react";
import { Navbar } from "./Navbar";

export const Header = () => {
  const [nav, setNav] = useState(false);

  const onChange = () => {
    console.log("hola");
  };

  return (
    <header className="fixed top-0 z-50 flex justify-center w-full bg-[#3ebfff]">
      <div className="relative flex items-center justify-between w-11/12 h-20">
        <h1 className="w-full text-3xl font-bold text-white">sunnyside</h1>
        <button className="md:hidden" onClick={() => setNav(!nav)}>
          <svg width="24" height="18" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M24 16v2H0v-2h24zm0-8v2H0V8h24zm0-8v2H0V0h24z"
              fill="#FFF"
              fill-rule="evenodd"
            />
          </svg>
        </button>
        {nav && <Navbar />}
        <nav className="hidden h-full md:block">
          <ul className="flex items-center h-full gap-6">
            <li>
              <a className="px-4 py-4 font-normal text-white cursor-pointer">
                About
              </a>
            </li>
            <li>
              <a className="px-4 py-4 font-normal text-white cursor-pointer">
                Services
              </a>
            </li>
            <li>
              <a className="px-4 py-4 font-normal text-white cursor-pointer">
                Projects
              </a>
            </li>
            <li>
              <a className="px-6 py-2 text-sm font-semibold text-black uppercase transition-all bg-white cursor-pointer rounded-2xl hover:text-white hover:bg-white/50">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
