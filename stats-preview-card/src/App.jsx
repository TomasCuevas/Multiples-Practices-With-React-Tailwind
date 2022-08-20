export const App = () => {
  return (
    <main className="grid h-screen w-screen place-content-center place-items-center bg-[#0A0C1B]">
      <article className="flex h-full w-11/12 max-w-[400px] flex-col overflow-hidden lg:max-w-[1000px] lg:flex-row-reverse">
        <section className="relative w-full overflow-hidden lg:w-2/4">
          <picture>
            <source
              media="(min-width: 1024px)"
              srcSet="image-header-desktop.jpg"
            />
            <img
              src="image-header-mobile.jpg"
              alt="img"
              className="min-h-full rounded-t-lg object-cover contrast-150 lg:rounded-none lg:rounded-r-lg"
            />
          </picture>
          <span className="absolute top-0 left-0 h-full w-full rounded-t-lg bg-[#612D87] opacity-60 lg:rounded-none lg:rounded-r-lg"></span>
        </section>
        <section className="flex w-full flex-col justify-center gap-3 rounded-b-md bg-[#1C1938] p-8 lg:w-2/4 lg:rounded-none lg:rounded-l-lg lg:p-16">
          <h3 className="text-center text-3xl font-bold text-white lg:text-left">
            Get <span className="text-purple-500">insights</span> that help your
            business grow
          </h3>
          <p className="text-center text-gray-400 lg:text-left">
            Incididunt reprehenderit ullamco commodo laboris fugiat dolor ad
            fugiat et qui id sunt. Id irure officia ullamco velit. Cillum do ea
            deserunt Lorem.
          </p>
          <div className="flex flex-col lg:flex-row lg:justify-around">
            <div className="flex w-full flex-col pt-4">
              <span className="text-center text-2xl font-bold text-white">
                10k+
              </span>
              <span className="text-center font-normal uppercase text-gray-400">
                Companies
              </span>
            </div>
            <div className="flex w-full flex-col pt-4">
              <span className="text-center text-2xl font-bold text-white">
                314
              </span>
              <span className="text-center font-normal uppercase text-gray-400">
                Templates
              </span>
            </div>
            <div className="flex w-full flex-col pt-4">
              <span className="text-center text-2xl font-bold text-white">
                12M+
              </span>
              <span className="text-center font-normal uppercase text-gray-400">
                Queries
              </span>
            </div>
          </div>
        </section>
      </article>
    </main>
  );
};
