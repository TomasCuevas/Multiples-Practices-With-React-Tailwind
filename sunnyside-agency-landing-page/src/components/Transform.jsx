export const Transform = () => {
  return (
    <section className="h-full w-full">
      <picture>
        <source
          media="(min-width: 640px)"
          srcSet="/desktop/image-transform.jpg"
        />
        <img
          className="h-full w-full object-cover sm:col-start-2"
          src="/mobile/image-transform.jpg"
          alt="hero-img"
        />
      </picture>
    </section>
  );
};
