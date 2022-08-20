export const Photography = () => {
  return (
    <section className="relative w-full">
      <picture>
        <source
          media="(min-width: 1024px)"
          srcSet="desktop/image-photography.jpg"
        />
        <img
          className="w-full object-cover"
          src="mobile/image-photography.jpg"
          alt="img"
        />
      </picture>
      <div className="absolute bottom-0 left-2/4 m-auto flex w-11/12 -translate-x-2/4 flex-col items-center gap-5 py-10">
        <h2 className="text-center text-3xl font-bold tracking-[2px] text-cyan-900 2xl:text-5xl">
          Photography
        </h2>
        <p className="max-w-[400px] py-5 text-center font-medium text-cyan-700 lg:text-lg">
          Increase your credibility by getting the most stunning, hight-quality
          photos that improve your business image.
        </p>
      </div>
    </section>
  );
};
