export const Navbar = () => {
  return (
    <nav className="absolute right-0 w-full py-10  top-[120px] bg-white md:hidden md:block before:content=[''] before:absolute  before:top-[-30px] before:right-0 before:border-b-[30px] before:border-r-[30px] before:border-t-[30px] before:border-l-[30px] before:border-transparent  before:border-r-white before:border-b-white">
      <ul className="flex flex-col items-center gap-10">
        <li>
          <a className="px-4 py-4 text-lg font-semibold text-gray-500 cursor-pointer">
            About
          </a>
        </li>
        <li>
          <a className="px-4 py-4 text-lg font-semibold text-gray-500 cursor-pointer">
            Services
          </a>
        </li>
        <li>
          <a className="px-4 py-4 text-lg font-semibold text-gray-500 cursor-pointer">
            Projects
          </a>
        </li>
        <li>
          <a className="px-8 py-4 text-lg font-bold text-black uppercase transition-all bg-yellow-400 rounded-full cursor-pointer bg-yellow- hover:text-black hover:bg-yellow-400/50">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};
