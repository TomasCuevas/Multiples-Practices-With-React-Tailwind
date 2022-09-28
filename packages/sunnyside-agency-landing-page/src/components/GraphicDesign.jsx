export const GraphicDesign = () => {
  return (
    <section className="relative w-full">
      <picture>
        <source
          media="(min-width: 1024px)"
          srcSet="desktop/image-graphic-design.jpg"
        />
        <img
          className="w-full object-cover"
          src="mobile/image-graphic-design.jpg"
          alt="img"
        />
      </picture>
      <div className="absolute bottom-0 left-2/4 m-auto flex w-11/12 -translate-x-2/4 flex-col items-center gap-5 py-10">
        <h2 className="text-center text-3xl font-bold tracking-[2px] text-emerald-900 2xl:text-5xl">
          Graphic Design
        </h2>
        <p className="max-w-[400px] py-5 text-center  font-medium text-emerald-900 lg:text-lg">
          Great design makes you memorable. We deliver artwork that underscores
          your brand message and captures potential clients' attention.
        </p>
      </div>
    </section>
  );
};
