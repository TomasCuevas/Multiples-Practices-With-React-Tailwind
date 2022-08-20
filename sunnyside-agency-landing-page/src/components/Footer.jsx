export const Footer = () => {
  return (
    <footer className="h-full w-full bg-[#90d4c5] py-10">
      <div className="m-auto flex w-11/12 max-w-md flex-col">
        <span className="w-full text-center  text-3xl font-extrabold text-[#2c7464]">
          sunnyside
        </span>
        <div className="w-full">
          <ul className="flex w-full items-center justify-around py-10">
            <li className="font-medium text-[#5b9f90]">About</li>
            <li className="font-medium text-[#5b9f90]">Service</li>
            <li className="font-medium text-[#5b9f90]">Project</li>
          </ul>
        </div>
        <div className="w-full py-2">
          <ul className="m-auto flex w-10/12 items-center justify-evenly gap-4">
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
