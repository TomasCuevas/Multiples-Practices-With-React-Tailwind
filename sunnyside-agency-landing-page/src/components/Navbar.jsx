export const Navbar = () => {
  return (
    <nav className="before:content=[''] absolute right-0 top-[120px]  w-full bg-white py-10 before:absolute before:top-[-30px] before:right-0  before:border-b-[30px] before:border-r-[30px] before:border-t-[30px] before:border-l-[30px] before:border-transparent before:border-r-white before:border-b-white  md:block md:hidden">
      <ul className="flex flex-col items-center gap-10">
        <li>
          <a className="cursor-pointer px-4 py-4 text-lg font-semibold text-gray-500">
            About
          </a>
        </li>
        <li>
          <a className="cursor-pointer px-4 py-4 text-lg font-semibold text-gray-500">
            Services
          </a>
        </li>
        <li>
          <a className="cursor-pointer px-4 py-4 text-lg font-semibold text-gray-500">
            Projects
          </a>
        </li>
        <li>
          <a className="bg-yellow- cursor-pointer rounded-full bg-yellow-400 px-8 py-4 text-lg font-bold uppercase text-black transition-all hover:bg-yellow-400/50 hover:text-black">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};
