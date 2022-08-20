export const Hero = () => {
  return (
    <section className="h-full w-full ">
      <div className="relative h-full w-full">
        <h2 className="absolute top-1/4 w-full text-center text-5xl font-bold uppercase tracking-[8px] text-white sm:text-6xl md:text-5xl">
          We Are Creatives
        </h2>
        <img
          className="absolute bottom-1/4 left-2/4 -translate-y-4 -translate-x-2/4 md:-translate-y-10 xl:-translate-y-20 2xl:-translate-y-28"
          src="icon-arrow-down.svg"
          alt="arrow"
        />
        <picture>
          <source
            media="(min-width: 768px)"
            srcSet="desktop/image-header.jpg"
          />
          <img
            className="w-full"
            src="/mobile/image-header.jpg"
            alt="hero-img"
          />
        </picture>
      </div>
    </section>
  );
};
