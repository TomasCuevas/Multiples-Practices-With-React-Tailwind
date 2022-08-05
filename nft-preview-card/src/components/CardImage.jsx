export const CardImage = () => {
  return (
    <section className="relative w-full">
      <img src="image-equilibrium.jpg" alt="img" className="rounded-lg" />
      <div className="absolute top-0 left-0 w-full h-full opacity-0 hover:opacity-100 hover:bg-teal-400/50  grid place-items-center rounded-lg transition-all">
        <svg width="48" height="48" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fill-rule="evenodd">
            <path d="M0 0h48v48H0z" />
            <path
              d="M24 9C14 9 5.46 15.22 2 24c3.46 8.78 12 15 22 15 10.01 0 18.54-6.22 22-15-3.46-8.78-11.99-15-22-15Zm0 25c-5.52 0-10-4.48-10-10s4.48-10 10-10 10 4.48 10 10-4.48 10-10 10Zm0-16c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6Z"
              fill="#FFF"
              fill-rule="nonzero"
            />
          </g>
        </svg>
      </div>
    </section>
  );
};
