export const GraphicDesign = () => {
  return (
    <section className="relative w-full">
      <picture>
        <source
          media="(min-width: 1024px)"
          srcSet="desktop/image-graphic-design.jpg"
        />
        <img
          className="object-cover w-full"
          src="mobile/image-graphic-design.jpg"
          alt="img"
        />
      </picture>
      <div className="absolute bottom-0 flex flex-col items-center w-11/12 gap-5 py-10 m-auto left-2/4 -translate-x-2/4">
        <h2 className="text-3xl 2xl:text-5xl font-bold tracking-[2px] text-center text-emerald-900">
          Graphic Design
        </h2>
        <p className="py-5 max-w-[400px] lg:text-lg  font-medium text-center text-emerald-900">
          Great design makes you memorable. We deliver artwork that underscores
          your brand message and captures potential clients' attention.
        </p>
      </div>
    </section>
  );
};
