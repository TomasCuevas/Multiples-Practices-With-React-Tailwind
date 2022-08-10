export const Hero = () => {
  return (
    <section className="w-full h-full ">
      <div className="relative w-full h-full">
        <h2 className="absolute text-5xl sm:text-6xl md:text-5xl tracking-[8px] w-full font-bold text-center text-white uppercase top-1/4">
          We Are Creatives
        </h2>
        <img
          className="absolute -translate-y-4 md:-translate-y-10 xl:-translate-y-20 2xl:-translate-y-28 bottom-1/4 left-2/4 -translate-x-2/4"
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
