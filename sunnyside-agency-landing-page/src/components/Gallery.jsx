export const Gallery = () => {
  return (
    <section className="w-full h-full">
      <div className="grid grid-cols-2 lg:grid-cols-4">
        <img
          className="object-cover w-full"
          src="/mobile/image-gallery-milkbottles.jpg"
          alt="image-grid"
        />
        <img
          className="object-cover w-full"
          src="/mobile/image-gallery-orange.jpg"
          alt="image-grid"
        />
        <img
          className="object-cover w-full"
          src="/mobile/image-gallery-cone.jpg"
          alt="image-grid"
        />
        <img
          className="object-cover w-full"
          src="/mobile/image-gallery-sugar-cubes.jpg"
          alt="image-grid"
        />
      </div>
    </section>
  );
};
