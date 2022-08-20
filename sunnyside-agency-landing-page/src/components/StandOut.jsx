export const StandOut = () => {
  return (
    <section className="h-full w-full">
      <picture>
        <source
          media="(min-width: 640px)"
          srcSet="/desktop/image-stand-out.jpg"
        />
        <img
          className="h-full w-full object-cover"
          src="/mobile/image-stand-out.jpg"
          alt="hero-img"
        />
      </picture>
    </section>
  );
};
