export const App = () => {
  return (
    <main className="h-screen w-screen grid place-items-center place-content-center bg-[#0A0C1B]">
      <article className="max-w-[400px] lg:max-w-[1000px] w-11/12 h-full flex flex-col lg:flex-row-reverse overflow-hidden">
        <section className="relative w-full lg:w-2/4 overflow-hidden">
          <picture>
            <source
              media="(min-width: 1024px)"
              srcSet="image-header-desktop.jpg"
            />
            <img
              src="image-header-mobile.jpg"
              alt="img"
              className="rounded-t-lg lg:rounded-none lg:rounded-r-lg contrast-150 min-h-full object-cover"
            />
          </picture>
          <span className="w-full h-full absolute top-0 left-0 bg-[#612D87] opacity-60 rounded-t-lg lg:rounded-none lg:rounded-r-lg"></span>
        </section>
        <section className="p-8 lg:p-16 w-full lg:w-2/4 flex flex-col justify-center gap-3 bg-[#1C1938] rounded-b-md lg:rounded-none lg:rounded-l-lg">
          <h3 className="text-3xl text-center lg:text-left text-white font-bold">
            Get <span className="text-purple-500">insights</span> that help your
            business grow
          </h3>
          <p className="text-gray-400 text-center lg:text-left">
            Incididunt reprehenderit ullamco commodo laboris fugiat dolor ad
            fugiat et qui id sunt. Id irure officia ullamco velit. Cillum do ea
            deserunt Lorem.
          </p>
          <div className="flex flex-col lg:flex-row lg:justify-around">
            <div className="pt-4 w-full flex flex-col">
              <span className="text-white text-center font-bold text-2xl">
                10k+
              </span>
              <span className="text-gray-400 text-center font-normal uppercase">
                Companies
              </span>
            </div>
            <div className="pt-4 w-full flex flex-col">
              <span className="text-white text-center font-bold text-2xl">
                314
              </span>
              <span className="text-gray-400 text-center font-normal uppercase">
                Templates
              </span>
            </div>
            <div className="pt-4 w-full flex flex-col">
              <span className="text-white text-center font-bold text-2xl">
                12M+
              </span>
              <span className="text-gray-400 text-center font-normal uppercase">
                Queries
              </span>
            </div>
          </div>
        </section>
      </article>
    </main>
  );
};
