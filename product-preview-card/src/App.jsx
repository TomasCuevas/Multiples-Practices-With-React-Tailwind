export const App = () => {
  return (
    <main className="w-screen h-screen py-16 flex justify-center items-center bg-amber-100">
      <article className="w-11/12 max-w-sm sm:max-w-2xl flex flex-col sm:flex-row ">
        <section className="w-full sm:w-2/4 min-h-full overflow-hidden">
          <picture>
            <source
              media="(min-width: 640px)"
              srcset="image-product-desktop.jpg"
            />
            <img
              className="w-full h-full rounded-t-2xl sm:rounded-none sm:rounded-l-2xl sm:h-full object-cover"
              src="image-product-mobile.jpg"
              alt="img"
            />
          </picture>
        </section>
        <section className="w-full sm:w-2/4 sm:min-h-full p-4 sm:px-10 flex flex-col gap-4 rounded-b-2xl sm:rounded-none sm:rounded-r-2xl  bg-white">
          <span className="uppercase tracking-widest text-zinc-400 text-xl font-mono">
            Perfume
          </span>
          <h3 className="text-4xl font-semibold">
            Gabrielle Essence Eau De Parfum
          </h3>
          <p className="text-sm text-slate-500">
            Eiusmod dolor id do mollit proident fugiat. Magna magna Lorem
            excepteur elit dolore id reprehenderit consectetur. Fugiat sint ut
            pariatur eiusmod aute commodo minim mollit aliquip sint dolor aliqua
            amet.
          </p>
          <div className="w-full flex flex-row items-center gap-4">
            <span className="text-4xl font-bold text-emerald-800 text-opacity-80">
              $149.99
            </span>
            <span className="line-through text-slate-500 font-light">
              $169.99
            </span>
          </div>
          <div className="p-3 w-full flex flex-row justify-center items-center gap-2 rounded-lg bg-emerald-800 bg-opacity-80 cursor-pointer hover:bg-opacity-100">
            <span className="text-5xl">
              <svg width="15" height="16" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M14.383 10.388a2.397 2.397 0 0 0-1.518-2.222l1.494-5.593a.8.8 0 0 0-.144-.695.8.8 0 0 0-.631-.28H2.637L2.373.591A.8.8 0 0 0 1.598 0H0v1.598h.983l1.982 7.4a.8.8 0 0 0 .799.59h8.222a.8.8 0 0 1 0 1.599H1.598a.8.8 0 1 0 0 1.598h.943a2.397 2.397 0 1 0 4.507 0h1.885a2.397 2.397 0 1 0 4.331-.376 2.397 2.397 0 0 0 1.12-2.021ZM11.26 7.99H4.395L3.068 3.196h9.477L11.26 7.991Zm-6.465 6.392a.8.8 0 1 1 0-1.598.8.8 0 0 1 0 1.598Zm6.393 0a.8.8 0 1 1 0-1.598.8.8 0 0 1 0 1.598Z"
                  fill="#FFF"
                />
              </svg>
            </span>
            <span className="text-white">Add to Cart</span>
          </div>
        </section>
      </article>
    </main>
  );
};
