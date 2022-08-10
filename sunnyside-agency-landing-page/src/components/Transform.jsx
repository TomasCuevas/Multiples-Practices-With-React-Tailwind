export const Transform = () => {
  return (
    <section className="w-full h-full">
      <picture>
        <source
          media="(min-width: 640px)"
          srcSet="/desktop/image-transform.jpg"
        />
        <img
          className="object-cover w-full h-full sm:col-start-2"
          src="/mobile/image-transform.jpg"
          alt="hero-img"
        />
      </picture>
    </section>
  );
};
