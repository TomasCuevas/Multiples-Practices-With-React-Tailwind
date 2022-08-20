export const Gallery = () => {
  return (
    <section className="h-full w-full">
      <div className="grid grid-cols-2 lg:grid-cols-4">
        <img
          className="w-full object-cover"
          src="/mobile/image-gallery-milkbottles.jpg"
          alt="image-grid"
        />
        <img
          className="w-full object-cover"
          src="/mobile/image-gallery-orange.jpg"
          alt="image-grid"
        />
        <img
          className="w-full object-cover"
          src="/mobile/image-gallery-cone.jpg"
          alt="image-grid"
        />
        <img
          className="w-full object-cover"
          src="/mobile/image-gallery-sugar-cubes.jpg"
          alt="image-grid"
        />
      </div>
    </section>
  );
};
