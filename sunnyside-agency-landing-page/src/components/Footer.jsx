export const Footer = () => {
  return (
    <footer className="w-full h-full py-10 bg-[#90d4c5]">
      <div className="flex flex-col w-11/12 max-w-md m-auto">
        <span className="w-full text-3xl  font-extrabold text-center text-[#2c7464]">
          sunnyside
        </span>
        <div className="w-full">
          <ul className="flex items-center justify-around w-full py-10">
            <li className="text-[#5b9f90] font-medium">About</li>
            <li className="text-[#5b9f90] font-medium">Service</li>
            <li className="text-[#5b9f90] font-medium">Project</li>
          </ul>
        </div>
        <div className="w-full py-2">
          <ul className="flex items-center w-10/12 gap-4 m-auto justify-evenly">
            <li>
              <img src="icon-facebook.svg" alt="social icon" />
            </li>
            <li>
              <img src="icon-instagram.svg" alt="social icon" />
            </li>
            <li>
              <img src="icon-twitter.svg" alt="social icon" />
            </li>
            <li>
              <img src="icon-pinterest.svg" alt="social icon" />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
