export const App = () => {
  return (
    <main className="flex h-screen w-screen items-center justify-center bg-amber-100 py-16">
      <article className="flex w-11/12 max-w-sm flex-col sm:max-w-2xl sm:flex-row ">
        <section className="min-h-full w-full overflow-hidden sm:w-2/4">
          <picture>
            <source
              media="(min-width: 640px)"
              srcSet="image-product-desktop.jpg"
            />
            <img
              className="h-full w-full rounded-t-2xl object-cover sm:h-full sm:rounded-none sm:rounded-l-2xl"
              src="image-product-mobile.jpg"
              alt="img"
            />
          </picture>
        </section>
        <section className="flex w-full flex-col gap-4 rounded-b-2xl bg-white p-4 sm:min-h-full sm:w-2/4 sm:rounded-none sm:rounded-r-2xl  sm:px-10">
          <span className="font-mono text-xl uppercase tracking-widest text-zinc-400">
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
          <div className="flex w-full flex-row items-center gap-4">
            <span className="text-4xl font-bold text-emerald-800 text-opacity-80">
              $149.99
            </span>
            <span className="font-light text-slate-500 line-through">
              $169.99
            </span>
          </div>
          <div className="flex w-full cursor-pointer flex-row items-center justify-center gap-2 rounded-lg bg-emerald-800 bg-opacity-80 p-3 hover:bg-opacity-100">
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
