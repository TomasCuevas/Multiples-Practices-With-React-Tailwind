export const StandOut = () => {
  return (
    <section className="w-full h-full">
      <picture>
        <source
          media="(min-width: 640px)"
          srcSet="/desktop/image-stand-out.jpg"
        />
        <img
          className="object-cover w-full h-full"
          src="/mobile/image-stand-out.jpg"
          alt="hero-img"
        />
      </picture>
    </section>
  );
};
