import { useState } from 'react';
import { NavbarDesktop } from './NavbarDesktop';
import { NavbarMobile } from './NavbarMobile';

export const Header = () => {
  const [navState, setNavState] = useState(false);

  const handleNav = (event) => {
    event.stopPropagation();
    setNavState(!navState);
  };

  return (
    <header className="relative flex h-20 w-full items-center px-[2.5%] sm:px-[5%]">
      <span className="h-full text-[45px] font-black">snap</span>
      <span className="ml-auto cursor-pointer lg:hidden" onClick={handleNav}>
        <img src="icon-menu.svg" alt="open navbar" />
      </span>
      <NavbarDesktop />
      {navState && <NavbarMobile handleNav={handleNav} />}
    </header>
  );
};
