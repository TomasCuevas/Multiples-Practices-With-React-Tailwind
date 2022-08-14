export const Hero = () => {
  return (
    <picture className="2xl:flex 2xl:max-w-[500px] 2xl:flex-col 2xl:justify-end">
      <source srcSet="image-hero-desktop.png" media="(min-width: 1536px)" />
      <img
        src="image-hero-mobile.png"
        alt="hero image"
        className="mx-auto lg:mt-5 2xl:mx-0"
      />
    </picture>
  );
};
